import { Component } from '@angular/core';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.single=data.filter(e=>e.id==id)
    console.log("name",this.single)
  }
//artforms=data
//ngOninit():void
//{
 // this.artforms=data
//}

}
