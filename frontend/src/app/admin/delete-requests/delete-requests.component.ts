import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {BehaviorSubject} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog , MatDialogRef} from '@angular/material/dialog';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';
import { ClientInfoComponent } from '../../client-info/client-info.component';
import { ClientsService } from '../../clients.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-requests',
  templateUrl: './delete-requests.component.html',
  styleUrls: ['./delete-requests.component.css']
})
export class DeleteRequestsComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;
  dialogRef: MatDialogRef<ClientInfoComponent>;

  deleteRequests;

  REQUESTS = [
    {id : '61cdd88db18f726d8e0581c9', sector: '93603636360', type: "Demi Gros",reason: "not exist", location: 'Draft'},
    {id : '61cdd88db18f726d8e0581c9', sector: '93603636360', type: "Demi Gros",reason: "not exist", location: 'Draft'},
    {id : '61cdd88db18f726d8e0581c9', sector: '93603636360', type: "Demi Gros",reason: "not exist", location: 'Draft'},
    {id : '61cdd88db18f726d8e0581c9', sector: '93603636360', type: "Demi Gros",reason: "not exist", location: 'Draft'},
    {id : '61cdd88db18f726d8e0581c9', sector: '93603636360', type: "Demi Gros",reason: "not exist", location: 'Draft'},
    {id : '61cdd88db18f726d8e0581c9', sector: '93603636360', type: "Demi Gros",reason: "not exist", location: 'Draft'},
    
  ];

  dataSource;
  columnsToDisplay = ['Id', 'Sector', 'PDV Type','Reason', 'Location', 'Actions'];
  dataSubject = new BehaviorSubject<Element[]>([]);

  constructor(
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
    private clientService: ClientsService,
    private _router: Router) {
    
    
    console.log('########')
    console.log(this.dataSource)
   }

  ngOnInit(): void {
    this.getDeleteRequests();
  }

  validateDelete(){
    // Write the code to change status
    var message = "This PDV has been deleted successfully!"
    this.openAlertDialog(message)
  }

  cancelDelete(){
     // Write the code to change status
     var message = "This PDV has been refused successfully!"
     this.openAlertDialog(message)
  }

  
  openAlertDialog(message) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: message,
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  }


  viewPDVDetails(content) {
    // console.log(content)
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });
  }

  getDeleteRequests(){
    this.clientService.getDeleteRequests().subscribe(res=>{
      console.log("---")
      console.log(res)
      this.deleteRequests = res
      this.dataSource = new MatTableDataSource(this.deleteRequests);
      this.dataSource.data = this.deleteRequests;
      this.dataSource.sort = this.sort;
    })
  }

  navigateToMap(lat,long){
    this._router.navigate(['/map/'+lat+"/"+long])
    this.dialogRef.close();
  }

}
