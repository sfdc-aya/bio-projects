import { LightningElement, track } from 'lwc';

export default class TrackLwc extends LightningElement {
    @track address={
        city: "San Francisco",
        postcode: 94133,
        country: "USA",
    }
    
    trackHandler(event){
        // this.address.city = event.target.value;
        this.address={...this.address,"city":event.target.value};
    }
}