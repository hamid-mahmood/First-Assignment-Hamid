import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<div class="container">
    <h2>Manually Created Component</h2>
    <input [placeholder]="placeHolder" />
    <button type="button" class="btn btn-primary">Add</button>
    </div>`,
    styles: ['div {border: 3px solid #f1f1f1; margin-bottom: 10px;}', 'button { margin-left: 5px; }']
    
})
export class HomeComponent implements OnInit {
    placeHolder = "Enter you name"
    ngOnInit(){
        console.log("Home page loaded")
    }
}