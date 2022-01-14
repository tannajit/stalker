import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { ClientsService } from '../clients.service';
import { MatPaginator, PageEvent} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
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
  typePDVselected;
  detailType;
  IdClient;
  PhoneNumber;
  PDVType;
  sector;
  deleteStatus;
  validate;
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

  //////////////////////////////////////////////

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
        all.forEach(element => {
          console.log('---');
          const elm = JSON.parse(element.Valeur);
          this.sectorNames.push(elm.properties.idSecteur)
          //this.AllSecteurs.push(elm.idSecteur);
        });
      };
    };
  }
  /////////////////////////////////////////////////////////////////

  openDialog(content) {
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });
  }

}
