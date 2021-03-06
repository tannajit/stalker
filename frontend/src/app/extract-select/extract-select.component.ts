import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientsService } from '../clients.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MapComponent } from '../map/map.component';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import Dexie from 'dexie';
import { IndexdbService } from '../indexdb.service';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-extract-select',
  templateUrl: './extract-select.component.html',
  styleUrls: ['./extract-select.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class ExtractSelectComponent implements OnInit {
  AllSectors = []
  Sectors = []
  valueProgress = 0;
  SelectedSector = [];
  SelectedTypePDV = [];
  done = false;
  extractAction=false;
  // checbox
  startIsChecked: any = false;
  endIsChecked: any = false;
  startDisabled = false
  endDisabled = false
  startExtract = false;
  StartDate = (new Date()).toISOString();
  EndDate = (new Date()).toISOString();
  constructor(private _client: ClientsService,
    private _router: Router,
    private index: IndexdbService,
    public dialogRef: MatDialogRef<MapComponent>,) { }


  ngOnInit(): void {
    //// get Sectors 
    console.log("Init")
   
    // this._client.getAllSecteurs().subscribe(res => {
    //   console.log(res)
    //   res.forEach(element => {
    //     var idSector = Number(String(element.geometry.properties.idSecteur).slice(-2, -1))
    //     console.log(idSector)
    //     var machine = (idSector == 0) ? "Onion" : "CMG"
    //     //console.log(machine)
    //     var result = element.geometry.properties.idSecteur + " - " + machine + " - " + element.geometry.properties.name
    //     console.log(result)
    //     var obj = {
    //       id: Number(element.geometry.properties.idSecteur),
    //       detail: result
    //     }
    //     this.AllSectors.push(element.geometry.properties.idSecteur)
    //     this.Sectors.push(obj)
    //   });
    // })
    //this.GetSectors()
   this.GetSectors()
  }



  async GetSectors() {

    var db = new Dexie("off").open().then((res) => {
      res.table("sector").each(element => {
        // console.log(element)
        var obj = {
          id: element.nameSecteur,
          detail: element.nameSecteur + " - " + element.machine + " - " + element.info.geometry.properties.name
        }
        //console.log(obj)
        //this.sectorNames.push(obj)
       // this.AllSectors.push(element.geometry.properties.idSecteur)
        this.Sectors.push(obj)
      })
    });
  }


  Extract() {
   this.extractAction=true
    var infoToExtract = {}
    this.valueProgress = 0;
    this.startExtract = true;
    this.done = false;
    if (this.StartDate) {
      infoToExtract["StartDate"] = new Date(this.StartDate).toISOString()
    }
    if (this.EndDate) {
      infoToExtract["EndDate"] = new Date(this.EndDate).toISOString()
    }
    if (this.SelectedTypePDV.length > 0) {
      infoToExtract["TypeDPV"] = this.SelectedTypePDV
    }
    if (this.SelectedSector.length > 0) {
      var result = this.SelectedSector.map(function (x) {
        return parseInt(x, 10);
      });
      infoToExtract["Sectors"] = result
    }

    console.log(infoToExtract)
    this.valueProgress = 20
    this._client.extract(infoToExtract).subscribe(res => {
      console.log("sb7an lah")
      this.startExtract = false;
      this.done = true;
      this.valueProgress = 50;
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(res)
      //generate workbook and add the worksheet 
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      this.valueProgress = 80;
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      //save to file 
      var nameFile = (new Date()).toISOString();
      XLSX.writeFile(wb, nameFile + ".xlsx");
      this.valueProgress = 100;
      this.startExtract = false;
      this.done = false;
      this.extractAction=false;
    });
  }
  Cancel() {
    //this._router.navigate(['/map'])
    this.dialogRef.close();
  }

  ResetDate(index) {
    if (index == 1) {
      this.StartDate = null;
    } else if (index == 2) {
      this.EndDate = null;
    } else if (index == 3) {
      this.SelectedSector = []
    } else {
      this.SelectedTypePDV = []
    }
  }
  
  anotherArray = this.Sectors;
  filterListCareUnit(val) {
    // console.log(val);
    this.Sectors = this.anotherArray.filter((unit) => unit.detail.toLowerCase().indexOf(val) > -1);
  }

}
