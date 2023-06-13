// here we are using component decorator 
import {Component} from '@angular/core'

//This will tell how this will work
@Component({
    selector: "courses",
    //if css selector ==> 
    //element ==> <courses> 'courses'
    //if i want to reference like div that has a class called courses
    //  <div class="courses"> ".courses"
    // if i want to referencee an element with ID
    // <div id="courses"> "#courses"
    template: '<h2>{{title}}</h2>',
    //<ul><li *ngFor="let course of courses> {{course}}</li</ul>
    //NN
        
        
               
            
    
    //this is a component going to render

})
/*
//in-order to angular see this class we need to export this
// verumane class poduvathal ithu componen akathu so 
//we have to add this class as compoenet so we have to import this -1-st line
*/
export class CoursesComponent {
    title = "List of course";
    courses = ["courses1", "courses2", "courses3"];

}