import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { AddComponent } from './add/add.component'
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AddComponent },
    { path: 'detail/:id', component: BookDetailComponent},
    { path: 'cart', component: CartComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}