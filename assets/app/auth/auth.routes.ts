import {Routes} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";


/*These contain the child routes of auth. These routes will be appended to /auth
*
* */

export const AUTH_ROUTES: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'logout', component: LogoutComponent}

];


/*
* Now we don't want to create new router module.
* We want to add these routes to the child routes of AuthenticationComponent Routes.
* To do so we will just export these routes and then in our main routing file we would add them as child routes
* to 'auth' route.
*
* To do that we use build in property children
*
* */



/*

 For '' path, we are redirecting to 'signup' and not '/signup'
 1) /signup  will redirect to localhost:/signup.
 2) Just 'signup' will append to the currently active path which is /auth at this time.


pathMatch: 'full' means, that the whole URL path needs to match and is consumed by the route matching algorithm.

pathMatch: 'prefix' means, the first route where the path matches the start of the URL is choosen,
but then the route matching algorithm is continuing searching for matching child routes where the rest of the URL matches.

*
* */