import { AppRoutingModule } from './../app-routing.module';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [HomeHeaderComponent,NavFooterComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],

  exports: [HomeHeaderComponent, NavFooterComponent],
})
export class SharedModule {}
