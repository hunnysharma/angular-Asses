import { Component } from '@angular/core';  
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  

@Component({  
  selector: 'my-app',  
  templateUrl: './app.component.html',  
  styleUrls: [ './app.component.css' ]  
})  
export class AppComponent  {  
  name = 'Angular';  
    
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
    this.productForm = this.fb.group({  
      quantities: this.fb.array([]) ,  
    });  
  }  
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({ 
    })  
  }  
  lastNumUp(){
  var addNum = document.querySelectorAll('.adNum');
      for (var i = 0, len = addNum.length; i < len; i++) {
        addNum[len-1].innerHTML = `${len}`;
    }  
  } 
  addQuantity() {  
    this.quantities().push(this.newQuantity());
      var addNum = document.querySelectorAll('.adNum');
      for (var i = 0, len = addNum.length; i < len; i++) {
        addNum[i].innerHTML = `${i+1}`;
    }
    
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    alert('your data is successfully submitted');
}
}