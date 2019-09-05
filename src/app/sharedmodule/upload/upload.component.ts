import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnChanges {
  @Input('buttonName') buttonName;
  @Input('accept') accept: boolean;
  @Input('multiple') multiple: boolean;
  @Input('complete') complete: boolean = false;
  @Input('required') required: boolean = false;
  @Input('docTypeId') docTypeId: number;
  @Input('disabled') disabled: boolean;

  @Output() notify = new EventEmitter();
  math = Math;
  byte = 1024;
  files: any[] = [];
  sharedForm: FormGroup;
  isUploading: boolean = false;
  documentTypeId: number;
  doctypeValid: boolean = false;
  readyToPost: boolean = false;
  tags: any[] = [];
  tagArray: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.sharedForm = this._fb.group({
      sharedFormControl: ['']
    });

    this.setValidation();
  }

  setValidation(): any {
    const sharedFormControl = this.sharedForm.get('sharedFormControl');
    if (this.required) {
      sharedFormControl.setValidators([Validators.required]);
    }
    else {
      sharedFormControl.clearValidators();
    }

    sharedFormControl.updateValueAndValidity();
  }

  onChange(event: any) {

    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(event.target.files[0]);

    myReader.onloadend = () => {
      //console.log('done');
    }

    for (let i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
    }

    if (this.required) {
      if (this.doctypeValid && (this.files.length > 0))
        this.readyToPost = true;
      else
        this.readyToPost = false;
    }
    else if (this.files.length > 0) {
      this.readyToPost = true;
    }

    // if (this.files.length > 0) {
    //   if (!this.required)
    //     this.readyToPost = true;
    // }
  }

  onClick(): void {
    this.isUploading = true;
    this.notify.emit({ files: this.files, docTypeId: this.documentTypeId, tags: this.tags, valid: this.sharedForm.get('sharedFormControl').valid });
  }

  delete(index: number): void {
    if (!this.isUploading) {
      this.files.splice(index, 1);

      //console.log(this.files);
      this.sharedForm.get('sharedFormControl').patchValue('');
    }
  }
  onDocTypeChange(result: any) {
    this.documentTypeId = result.value;
    this.doctypeValid = result.valid;

    if (this.doctypeValid && (this.files.length > 0))
      this.readyToPost = true;
    else
      this.readyToPost = false;
  }

  onTagEmit(result: any): void {
    this.tags = result.value;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

    for (let propName in changes) {
      if (propName === "complete") {
        let changedProp = changes[propName];
        if (changedProp.currentValue && !changedProp.firstChange) {
          this.isUploading = false;
          this.files = [];
          this.sharedForm.get('sharedFormControl').patchValue('');
          this.readyToPost = false;
          this.tagArray = null;
        }
      }
    }
  }
}