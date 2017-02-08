import {Component} from 'angular2/core';

@Component({
    selector: 'sideNav',
    templateUrl:'app/SideNav/template.html',
styleUrls:['app/SideNav/styles.css']
})
export class SideNavComponent { 
  openNav(event) {
    document.getElementById("mySidenav").style.display = "block";
}

closeNav(event) {
    document.getElementById("mySidenav").style.display = "none";
}
onScroll(){
    // alert("scroll event");
    var x = document.getElementById("mySidenav");
    x.className += " hide";
    
}
}