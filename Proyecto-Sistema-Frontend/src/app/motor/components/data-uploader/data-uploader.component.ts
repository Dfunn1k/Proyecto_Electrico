import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataUploaderService } from '../../services/data-uploader/data-uploader.service'

@Component({
  selector: 'app-data-uploader',
  templateUrl: './data-uploader.component.html',
  styleUrls: ['./data-uploader.component.scss'],
})
export class DataUploaderComponent {
  
  fileToUpload: File | null = null;

  constructor(private motorservice: DataUploaderService) {}

  onFileChange(event: any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload);
  }

  onSubmit() {
    if (this.fileToUpload) {
      const formData: FormData = new FormData();
      formData.append('file', this.fileToUpload, this.fileToUpload.name);
    }
    this.motorservice.upload(this.fileToUpload) 

  }


}