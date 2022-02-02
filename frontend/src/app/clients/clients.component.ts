import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { ClientsService } from '../clients.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import Dexie from 'dexie';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  ////**********VARIABLE'S DECLARATION ******/////
  obs: Observable<any>;
// Card is whatever type you use for your datasource, DATA is your data
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public data: any[];
  public dataSource: any;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  pageEvent: PageEvent

  clients = [];
  filterSelectObj = [];
  filterValues = {};

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

    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'ID',
        columnProp: 'id',
        options: []
      }, {
        name: 'NAME',
        columnProp: 'name',
        options: []
      }, {
        name: 'PHONE NUMBER',
        columnProp: 'username',
        options: []
      }, {
        name: 'PDV',
        columnProp: 'email',
        options: []
      }, {
        name: 'NFC',
        columnProp: 'status',
        options: []
      }, {
        name: 'VALID',
        columnProp: 'status',
        options: []
      }, {
        name: 'DELETE',
        columnProp: 'status',
        options: []
      }, {
        name: 'SECTOR',
        columnProp: 'status',
        options: []
      }
    ]
  }
  //////////////////////////////////////////////////

  ///////********* INIT FUNCTION *********///////

  ngOnInit(): void {
  //this.getDataSector()
    this.GetSectors()
    console.log("############# sectors names########")
    //console.log(this.sectorNames)
    this.getAllClients()
    console.log(this.clients.length)
    
  }

  getClients() {
    // Replace with HTTP call
    console.log(this.clients.length)
    this.dataSource = new MatTableDataSource<any>(this.clients);
    console.log(this.dataSource)
    this.dataSource.data = this.clients.reverse();
    this.obs = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
    // this.data = this.clients;
    // this.totalSize = this.data.length;
    // console.log(this.totalSize)
    // this.iterator(); 
  }

  

  

  


  ////*********** GET CLIENTS INFOS ***********/////
  public getAllClients1() {
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
          var Point = { _id: element._id, geometry: elm };
          if (this.loggedUser.role == 'Admin' || this.loggedUser.role == 'Back Office') {
            // console.log("deleted")
            // console.log(this.loggedUser.role)
            this.clients.push(Point);
            
            // console.log(Point.geometry.properties.status);
          }
          else if ((this.loggedUser.role == 'Seller' || this.loggedUser.role == 'Auditor') && Point.geometry.properties.status != "deleted") {
            this.clients.push(Point);
            // console.log(this.loggedUser.role)
            // console.log(Point.geometry.properties.status);
          }
        });
        this.getClients();

      };
    };
  }

  async getAllClients() {
    var db = new Dexie("off").open().then((res) => {
      console.log("***")
     var test= res.table("pdvs").count();
     var all;
     console.log("test")
     test.then(r=>{
      all=r
      console.log(r)
     });
     var i=0;
      res.table("pdvs").each((element) => {
        i++;
        if (this.loggedUser.role == 'Admin' || this.loggedUser.role == 'Back Office') {
          this.clients.push(element);
        }
        else if ((this.loggedUser.role == 'Seller' || this.loggedUser.role == 'Auditor') && element.geometry.properties.status != "deleted") {
          this.clients.push(element);
        }
        if(i==all){
          console.log("nnn")
          this.getClients();
        }
      });
      
       /// until get all data  TO DO 
    });
    
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
            detail: element.nameSecteur + " - " + element.machine + " - " + element.info.geometry.properties.name
          }
          this.sectorNames.push(obj)
        });
      };
    };
  }

  async GetSectors() {

    var db = new Dexie("off").open().then((res) => {
      res.table("sector").each(element => {
        // console.log(element)
        var obj = {
          id: element.nameSecteur,
          detail: element.nameSecteur + " - " + element.machine + " - " + element.info.geometry.properties.name
        }
        this.sectorNames.push(obj)
      })
    });
  }
  /////////////////////////////////////////////////////////////////

  openDialog(content) {
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });
  }


  searchId(filterValue: string){
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onSelectSector($event){
    var sectorsCopy = [];
    console.log(this.dataSource)
    if($event.value != 'all'){

      sectorsCopy = this.clients.filter(
        x => x.geometry.properties.Code_Secteur_OS == $event.value);
  
      this.dataSource.data = sectorsCopy.reverse();
      this.obs = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      console.log(this.sector);
      console.log(sectorsCopy.length)
      console.log(this.dataSource);

    }if($event.value == 'all'){

      
      this.dataSource.data = this.clients.reverse();
      this.obs = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      console.log(this.clients.length)
      console.log(this.dataSource)
      // this.getAllClients()
    }
    

  }

  

  anotherArray = this.sectorNames;
  filterListCareUnit(val) {
    // console.log(val);

    this.sectorNames = this.anotherArray.filter((unit) => unit.details.toLowerCase().indexOf(val) > -1);
  }


  copyData = this.clients

  filterAll(){

    this.clients = this.copyData

    let filterList= {
      'id': this.IdClient,
      'phone': this.PhoneNumber,
      'nfc': this.nfc,
      'sector': this.sector,
      'PDVType': this.PDVType,
      'detailType': this.detailType,
      'BackValid': this.BackOfficeValid,
      'delete': this.deleteStatus
    }

    if(filterList.id){

      this.clients = this.clients.filter(item=> item._id == filterList.id)
      this.dataSource = new MatTableDataSource<any>(this.clients);
      this.dataSource.data = this.clients.reverse();
      this.obs = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
      // this.dataSource.filter = filterList.id.trim().toLowerCase();
      // console.log(this.dataSource.filter);
      // if (this.dataSource.paginator) {
      //   this.dataSource.paginator.firstPage();
      // }
    }

    if(filterList.phone){
      this.clients = this.clients.filter(item=> item.geometry.properties.PhoneNumber == filterList.phone)
      this.dataSource = new MatTableDataSource<any>(this.clients);
      this.dataSource.data = this.clients.reverse();
      this.obs = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    }

    if(filterList.sector){

      if(filterList.sector=='all'){
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else{
        this.clients = this.clients.filter(item=> item.geometry.properties.Code_Secteur_OS == filterList.sector)
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }
      
    }
    if(filterList.nfc){

      if(filterList.nfc=='all'){
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else if(filterList.nfc == 'installed'){
        this.clients = this.clients.filter(item=> item.geometry.properties.status == 'purple' || item.geometry.properties.status == 'green')
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else if(filterList.nfc == 'not_install'){
        this.clients = this.clients.filter(item=> item.geometry.properties.status != 'purple' || item.geometry.properties.status != 'green')
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else if(filterList.nfc == 'refused'){
        this.clients = this.clients.filter(item=> item.geometry.properties.status == 'pink')
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }

     
    }

    if(filterList.PDVType){

      if(filterList.PDVType=='all'){
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else{
        this.clients = this.clients.filter(item=> item.geometry.properties.TypeDPV == filterList.PDVType)
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }

      
    }

    if(filterList.BackValid){

      if(filterList.BackValid=='all'){

        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)

      }else if(filterList.BackValid == 'valid'){

        this.clients = this.clients.filter(item=> item.geometry.properties.status == 'green')
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)

      }else if(filterList.BackValid == 'refused' || filterList.BackValid == 'waiting'){

        this.clients = this.clients.filter(item=> item.geometry.properties.status != 'green')
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }

     
    }

    if(filterList.detailType){

      if(filterList.detailType=='all' && filterList.PDVType){

        this.clients = this.clients.filter(item=> item.geometry.properties.TypeDPV == filterList.PDVType)
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else if(filterList.detailType=='all' && !filterList.PDVType){
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }else{
        this.clients = this.clients.filter(item=> item.geometry.properties.detailType == filterList.detailType)
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }
    }

    if(filterList.delete){

      if(filterList.delete=='all'){

        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)

      }else{

        this.clients = this.clients.filter(item=> item.geometry.properties.status == filterList.delete)
        this.dataSource = new MatTableDataSource<any>(this.clients);
        this.dataSource.data = this.clients.reverse();
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)

      }

      
    }
  }
  

  clearFilter(){
    this.PDVType = this.IdClient = this.PhoneNumber = this.PDVType = this.nfc = 
    this.sector = this.BackOfficeValid = this.deleteStatus = undefined

    // this.getAllClients()
    // console.log(this.clients)

  }
}
