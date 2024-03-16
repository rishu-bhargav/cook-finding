import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CustomerTestimonialsComponent } from './components/customer-testimonials/customer-testimonials.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { Help4uComponent } from './components/help4u/help4u.component';
import { WhychooseComponent } from './components/whychoose/whychoose.component';
import { RecentlyComponent } from './components/recently/recently.component';


@NgModule({
  declarations: [
    HomeComponent,
    CustomerTestimonialsComponent,
    Help4uComponent,
    WhychooseComponent,
    RecentlyComponent,
 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
