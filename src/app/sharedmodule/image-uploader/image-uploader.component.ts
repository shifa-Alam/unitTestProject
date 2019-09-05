import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  sharedForm: FormGroup;
  imageData: string;
  selectedImage: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });
  }

  onFileSelected(event: any) {

    this.selectedImage = event.target.files;

    //console.log(this.selectedImage);

    // var myReader: FileReader = new FileReader();
    // myReader.readAsDataURL(this.selectedImage);

    // myReader.onloadend = (e) => {
    //   this.imageData = myReader.result;
    //   ////console.log(this.imageData);
    // }
  }

}
