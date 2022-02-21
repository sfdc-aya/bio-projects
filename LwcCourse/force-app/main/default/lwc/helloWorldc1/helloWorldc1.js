import { LightningElement } from 'lwc';

export default class HelloWorldc1 extends LightningElement {
    title = "Ayazhan";
    
    changeHandler(event){
      this.title = event.target.value;
    }
}