import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsService } from '../clients.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {

  selectedFiles: FileList;
  progressInfos = [];
  message = '';

  fileInfos: Observable<any>;


  ngOnInit(): void {
    // this.fileInfos = this.clientservice.getFiles();
    
  }

  constructor(private clientservice: ClientsService) {

  }

  selectFiles(event) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    this.message = '';
  
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
    console.log(this.selectedFiles)
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
    this.fileInfos = this.clientservice.getFiles();
  }

  deletefile(){
    this.fileInfos=this.clientservice.deleteFiles()
    console.log("files deleted succussfully")
  }

 


 

}
