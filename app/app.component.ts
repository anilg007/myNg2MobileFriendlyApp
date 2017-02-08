import {Component} from 'angular2/core';
import {NavbarComponent} from './Navbar/navbar.component'
import {SideNavComponent} from './SideNav/sideNav.component'
import {CoursesComponent} from './Courses/courses.component'

@Component({
    selector: 'my-app',
    template: '<sideNav></sideNav><navbar></navbar><h1>My First Angular 2 App</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><courses></courses>',
    directives:[NavbarComponent,SideNavComponent,CoursesComponent]
})
export class AppComponent { }