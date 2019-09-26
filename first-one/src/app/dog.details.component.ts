import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:"dog-details",
    template:`
    <h2>{{name}} - {{color}}</h2>
    <input (change)="handleNameChange($event)" type="text"/>
    <button class="btn waves-effect waves-light" (click)= "handleClick()">Bark</button>
`
})

export class DogDetailsComponent{
   @Input () name: String;
   @Input () color: String;

   @Output() bark = new EventEmitter<{}>()
   @Output() nameChange= new EventEmitter<string>()
   handleClick()
   {
       this.bark.emit({})
   }
   handleNameChange (e)
   {
       this.nameChange.emit(e.target.value)
   }
}