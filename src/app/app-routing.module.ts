import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouter } from './pages/pages-routing.module';
import { LoginComponent } from './login/login.component';
import { ReturnLoginGuard } from './services/guards/return-login.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [ReturnLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), PagesRouter],
  exports: [RouterModule]
})
export class AppRoutingModule { }
