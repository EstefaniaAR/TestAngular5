import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-one';
  imgSource='https://estaticos.elperiodico.com/resources/jpg/6/8/ciencia-del-universo-1530540262286.jpg'
  imgDesc='A galaxy';
  dog1={name:'Jile',color:"red"}

  doBark(name:String){
    console.log(`${name} has barked.`)
  }
  changeDog1(name:String)
  {
    this.dog1.name=name
  }
}
