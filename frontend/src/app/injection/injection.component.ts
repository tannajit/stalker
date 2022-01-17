import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsService } from '../clients.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: ElementRef

  selectedFiles: FileList;
  numFileSelected
  progressInfos = [];
  message = '';
  isShown: boolean = false;

  fileInfos: Observable<any>;

  

  ngOnInit(): void {
    // this.fileInfos = this.clientservice.getFiles();

  }

  constructor(
    private clientservice: ClientsService,
    private dialog: MatDialog,) {

  }

  onClick(event) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  selectFiles(event) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.numFileSelected = event.target.files.length
  }

  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
    console.log(this.selectedFiles)
    this.isShown=true
  }

  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    this.clientservice.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }

  runscript() {
    this.clientservice.getFiles().subscribe(res=>{
      console.log("test")
    });
    var message = "We have runned the scripts!"
    this.openAlertDialog(message)
  }

  deletefile() {
     this.clientservice.deleteFiles().subscribe(res=>{
      console.log("test")
    });
    console.log("files deleted succussfully")
    this.isShown=false
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

}
