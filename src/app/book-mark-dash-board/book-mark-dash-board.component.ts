import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { BookmarkModel } from './book-mark-dash-board.model';
@Component({
  selector: 'app-book-mark-dash-board',
  templateUrl: './book-mark-dash-board.component.html',
  styleUrls: ['./book-mark-dash-board.component.css']
})
export class BookMarkDashBoardComponent implements OnInit {

  formValue !: FormGroup;
  bookmarkModelObj: BookmarkModel = new BookmarkModel();
  bookMarkData !: any;

  showform !: boolean;
  addcategory!: boolean;
  catop!: boolean;
  updateop !: boolean;
  saveop!: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      title: [''],
      url: [''],
      category: ['']
    })
    this.getALLBookMarkDetails();
    this.showform = false;
    this.addcategory= false;
    this.catop = true;
    this.updateop = false;
    this.saveop = true;

  }
  // show(){
  //   showDetails.
  // }
  postBookMarkDetails() {
    this.bookmarkModelObj.title = this.formValue.value.title;
    this.bookmarkModelObj.url = this.formValue.value.url;
    this.bookmarkModelObj.category = this.formValue.value.category;
    this.api.postBookMarkDetails(this.bookmarkModelObj)
      .subscribe((res) => {
        console.log(res);
        alert("Bookmark added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
      },
        err => {
          alert("Something went wrong");
        })
  }
  getALLBookMarkDetails() {
    this.api.getBookMarkDetails()
      .subscribe((res) => {
        this.bookMarkData = res;
      })
  }
  deleteBookMarkDetails(row: any) {
    this.api.deleteBookMarkDetails(row.id)
      .subscribe((res) => {
        alert("Bookmark deleted successfully");
        this.getALLBookMarkDetails();
      })
  }

  onEdit(row: any) {
   this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['url'].setValue(row.url);
    this.formValue.controls['category'].setValue(row.category);

  }

  updateBookMarkDetails() {
    this.bookmarkModelObj.title = this.formValue.value.title;
    this.bookmarkModelObj.url = this.formValue.value.url;
    this.bookmarkModelObj.category = this.formValue.value.category;
    this.api.updateBookMarkDetails(this.bookmarkModelObj, this.bookmarkModelObj.id)
      .subscribe((res) => {
        alert("Bookmark updated successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getALLBookMarkDetails();
      })

  }
  getOnForm(row: any){
    this.bookmarkModelObj.id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['url'].setValue(row.url);
    this.formValue.controls['category'].setValue(row.category);
  }
  onKeyPress(event : any){
    this.bookmarkModelObj.id=this.formValue.value.id;
    
    this.api.getById(this.bookmarkModelObj.id)
    .subscribe(res=>{
      console.log(res);
      this.getOnForm(res);
    })
  }
  showFformm() {
    this.showform = true;
  }

}

