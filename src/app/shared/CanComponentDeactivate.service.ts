import { Injectable }    from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, 
           route: ActivatedRouteSnapshot, 
           state: RouterStateSnapshot) {

     let url: string = state.url;
     console.log('Url: '+ url);
     //alert("are u sure u want to cancel")
     

     var txt;
var r = confirm("Entered data will be not saved are you sure want to navigate");
if (r == true) {
    return component.canDeactivate ? component.canDeactivate() : true;
  
} else {
    return component.canDeactivate ? component.canDeactivate() : false;
}

     
  }
}