import { Component} from '@angular/core';
// import { DataUploaderService} from '../../services/data-uploader/data-uploader.service';

@Component({
  selector: 'app-engine-buttons',
  templateUrl: './engine-buttons.component.html',
  styleUrls: ['./engine-buttons.component.scss']
})
export class EngineButtonsComponent {

  modalStats:boolean = false;

  // constructor(private dataUploaderService: DataUploaderService) {}

  // ngOnInit() {
  //   this.dataUploaderService.$modal.subscribe((valor) => {this.modalStats = valor});
  // }

  openModal() {
    this.modalStats = true;
  }

  closeModal() {
    this.modalStats = false;
  }
}
