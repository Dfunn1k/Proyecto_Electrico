import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataUploaderService } from '../../services/data-uploader/data-uploader.service'

@Component({
  selector: 'app-data-uploader',
  templateUrl: './data-uploader.component.html',
  styleUrls: ['./data-uploader.component.scss'],
})
export class DataUploaderComponent {
  ExcelData: any;

  constructor(private motorservice: DataUploaderService) {}

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const arrayBuffer = fileReader.result as ArrayBuffer;
      const data = new Uint8Array(arrayBuffer);
      const workBook = XLSX.read(data, { type: 'array' });
      let sheetNames = workBook.SheetNames;
      let worksheet = workBook.Sheets[sheetNames[0]];
      this.ExcelData = XLSX.utils.sheet_to_json(worksheet);
      console.log(this.ExcelData);
    };
  }

  SendExcel() {
    this.motorservice.upload(this.ExcelData).subscribe(
      (response) => {
        console.log('El archivo Excel ha sido cargado correctamente', response);
      },
      (error) => {
        console.log('Error al cargar el archivo de Excel', error);
      }
    );
  }
}
