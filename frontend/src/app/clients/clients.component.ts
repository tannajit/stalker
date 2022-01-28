import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { ClientsService } from '../clients.service';
import { MatPaginator, PageEvent} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  ////**********VARIABLE'S DECLARATION ******/////
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public data: any[];
  public dataSource: any;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  pageEvent: PageEvent

  clients = [];

  version = 6;
  showFilterage = true
  dialogRef: MatDialogRef<ClientInfoComponent>;
  sectorNames = [];
  loggedUser;
  NomPrenom;
  detailType;
  IdClient;
  PhoneNumber;
  PDVType;
  sector;
  deleteStatus;
  BackOfficeValid;
  nfc;

  ////*********** CONSTRUCTOR ********///////////// 

  constructor(private _serviceClient: ClientsService,
    private dialog: MatDialog
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
  }
  //////////////////////////////////////////////////

  ///////********* INIT FUNCTION *********///////

  ngOnInit(): void {
    this.getDataSector()
    console.log("############# sectors names########")
    console.log(this.sectorNames)
    
    this.getAllClients()
    console.log(this.clients)
    
  }

  getClients() {
    // Replace with HTTP call
    this.dataSource = new MatTableDataSource<any>(this.clients.reverse());
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
    this.data = this.clients;
    this.totalSize = this.data.length;
    console.log(this.totalSize)
    this.iterator(); 
  }

  handlePage(event?: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.data.slice(start, end);
    this.dataSource = part;
  }


  ////*********** GET CLIENTS INFOS ***********/////
  public getAllClients() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      // console.log('success');
      // console.log(db);
      transaction = db.transaction(['data'], 'readwrite');
      const objectStore = transaction.objectStore('data');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        all.forEach(element => {
          // console.log("******************")
          const elm = JSON.parse(element.Valeur);
          var  Point = { _id: element._id, geometry: elm };
          if(this.loggedUser.role=='Admin' || this.loggedUser.role=='Back Office'){
            // console.log("deleted")
            // console.log(this.loggedUser.role)
            this.clients.push(Point);
            // console.log(Point.geometry.properties.status);
         }
         else if((this.loggedUser.role=='Seller' || this.loggedUser.role=='Auditor') && Point.geometry.properties.status!="deleted"){
          this.clients.push(Point);
          // console.log(this.loggedUser.role)
          // console.log(Point.geometry.properties.status);
         }
        });
        this.getClients();

      };
    };
  }
  //////////////////////////////////////////////////////////

  ///////*********** GET SECTOR'S DATE *****************///////

  // public getDataSector() {
  //   let db; let transaction;
  //   const request = window.indexedDB.open('off', this.version);
  //   request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
  //     console.log('Why didn\'t you allow my web app to use IndexedDB?!');
  //   };
  //   request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
  //     db = event.target.result;
  //     console.log('success');
  //     console.log(db);
  //     transaction = db.transaction(['sector'], 'readwrite');
  //     const objectStore = transaction.objectStore('sector');
  //     const objectStoreRequest = objectStore.getAll();
  //     objectStoreRequest.onsuccess = event => {
  //       const all = event.target.result;
  //       all.forEach(element => {
  //         console.log('---');
  //         const elm = JSON.parse(element.Valeur);
  //         var sect = {
  //           'id': elm.properties.idSecteur,
  //           'details': elm.properties.name +", "+elm.properties.idSecteur
  //         }
  //         this.sectorNames.push(sect)
  //         //this.AllSecteurs.push(elm.idSecteur);
  //       });
  //     };
  //   };
  // }
  public getDataSector() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['sector'], 'readwrite');
      const objectStore = transaction.objectStore('sector');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        all.forEach(elm => {
          //console.log(elm)
          var element = elm.Valeur;
          /*var idSector = Number(String(element.properties.idSecteur).slice(-2, -1))
          console.log(idSector)
          var machine = (idSector == 0) ? "Onion" : "CMG"
          console.log(machine)
          var result = element.properties.idSecteur + " - " + machine + " - " + element.properties.name
          console.log(result)*/
          var obj = {
            id: element.nameSecteur,
            detail: element.nameSecteur+" - "+element.machine+" - "+element.info.geometry.properties.name
          }
          this.sectorNames.push(obj)
        });
      };
    };
  }
  /////////////////////////////////////////////////////////////////

  openDialog(content) {
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });
  }


  searchID(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    
  }
  // filterage based on pdv type select
  onChangePDVType($event){
    console.log($event.value)
    if($event.value == 'all'){
      console.log("pdv type = all")
      // when we select all for pdvType 
      let filtered=[]
      _.filter(this.clients,(item) =>{
        // console.log(item)
          if( (this.nfc == 'all' || !this.nfc) && (this.sector == 'all' || !this.sector) && (this.BackOfficeValid == 'all' || !this.BackOfficeValid) && (this.deleteStatus == 'all' || !this.deleteStatus)){
            // if we select all for pdv type and all others ar not selected
            filtered = this.clients
          }if(this.nfc && this.nfc != 'all' && (this.sector == 'all' || !this.sector) && (this.BackOfficeValid == 'all' || !this.BackOfficeValid) && (this.deleteStatus == 'all' || !this.deleteStatus)){
            // if we select all for pdv type and select nfc only 
            if(this.nfc == 'installed'){
              if(item.geometry.properties.NFC != null){
                filtered.push(item)
              }
            }if(this.nfc == 'not_inst'){
              if(item.geometry.properties.NFC == null){
                filtered.push(item)
              }
            }if(this.nfc == 'refused'){
              
              // status == pink
                filtered.push(item)
              
            }
            
          }if((this.sector && this.sector != 'all') && (this.nfc == 'all' || !this.nfc) &&  (this.BackOfficeValid == 'all' || !this.BackOfficeValid) && (this.deleteStatus == 'all' || !this.deleteStatus)){
            // if we select all for pdv type and select sector only
            if(item.geometry.properties.idSecteur == this.sector){
              filtered.push(item)
            }
          }if((this.BackOfficeValid && this.BackOfficeValid != 'all') && (this.sector == 'all' || !this.sector) && (this.nfc == 'all' || !this.nfc) &&  (this.deleteStatus == 'all' || !this.deleteStatus)){
            // if we select all for pdv type and select back office validation only
            if(this.BackOfficeValid=='valid'){
              // status green
            }if(this.BackOfficeValid=='refused'){
              // status black
            }if(this.BackOfficeValid=='waiting'){
              // status purple
            }
          }if((this.deleteStatus  && this.deleteStatus != 'all') && (this.sector=='all' || !this.sector) && (this.nfc == 'all' || !this.nfc) &&  (this.BackOfficeValid == 'all' || !this.BackOfficeValid)){
            // if we select all for pdv type and select sector only
            if(this.deleteStatus=='deleted'){
              // status deleted
              filtered.push(item)

            }
          }
      })
      this.dataSource = new MatTableDataSource(filtered)
      this.dataSource.paginator = this.paginator;
      this.data = filtered;
      this.totalSize = this.data.length;
      console.log(this.totalSize)
      this.iterator(); 
    }
  }

  anotherArray = this.sectorNames;
  filterListCareUnit(val) {
    // console.log(val);
    
    this.sectorNames = this.anotherArray.filter((unit) => unit.details.toLowerCase().indexOf(val) > -1);
  }

  
}
