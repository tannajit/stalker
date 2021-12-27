import { Component, OnInit } from '@angular/core';
import { OnlineOfflineServiceService} from '../online-offline-service.service';
import { ClientsService } from '../clients.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {

  constructor(private readonly onlineOfflineService: OnlineOfflineServiceService,
    private clientService: ClientsService,
    private dialog: MatDialog) { 

       this.getid()
       
    }

    id=[];


    getid(){
        this.id=this.clientService.getShow()
        console.log(this.id)
    }

    send(){
      if(this.onlineOfflineService.isOnline){
        this.clientService.sendItemsFromIndexedDb()
        var message = "data sent successfuly";
        var btn = "Continue"
        this.openAlertDialog(message,btn)
      
      }else{
        var message = "You are still offline !";
        var btn = "Continue"
        this.openAlertDialog(message,btn)
      
      }

    }

    openAlertDialog(msg,btn){
      const dialogRef = this.dialog.open(AlertDialogComponent,{
        data:{
          message: msg,
          buttonText: {
            ok: btn,
          }
        }
      });
    }




    private async sendItemsFromIndexedDb() {
      console.log("sending items");
      // const allItems: any[] = await this.db["client"].toArray();
      var db; var transaction; var upgradeDb
      var request = window.indexedDB.open("MyTestDatabase", 10)
      // upgradeDb.createObjectStore('client');
      request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
      };
      request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
        db = event.target.result;
        console.log("success")
        console.log(db)
        transaction = db.transaction(['client'], 'readwrite');
        var objectStore = transaction.objectStore("client");
        var objectStoreRequest = objectStore.getAll();
        objectStoreRequest.onsuccess = event => {
          var all = event.target.result
          // console.log("------------------------")
           console.log(all)
          // console.log("------------------------")
          all.forEach(element => {
            // console.log("---")
            console.log(element)
            this.clientService.SendClient(element).subscribe(res => {
              console.log(res);
              
            })
            console.log("data sent succusfuly")
          })
  
        }
        db.client.clear();
        // objectStoreRequest.onerror=event=>{
        //   console.log(event)
        // }
      }
    }

    





  ngOnInit(): void {

  }

  

  


 

}
