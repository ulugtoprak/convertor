import { PartAComponent } from './part-a/part-a.component';
import { PartBComponent } from './part-b/part-b.component';
import { HomeComponent } from './home/home.component';
 
export const AppRoutes: any = [
    { path: "home", component: HomeComponent },
    { path: "part-a", component: PartAComponent },
    { path: "part-b", component: PartBComponent }
];
 
export const AppComponents: any = [
    PartAComponent,
    PartBComponent,
    HomeComponent
];
