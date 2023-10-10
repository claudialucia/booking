import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { ExploreComponent } from './components/explore/explore.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { HeaderComponent } from './components/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule} from '@angular/common/http';
import { InfoDialogComponent } from './shared/dialogs/info-dialog/info-dialog.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxStripeModule } from 'ngx-stripe';
//creamos un array de routes
const appRoutes: Routes = [
  {path: '', component:ExploreComponent},
  {path:'booking/:id', component:BookingComponent},
  {path:'cancel', component:CancelBookingComponent},
  {path:'payment', component:PaymentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ExploreComponent,
    CancelBookingComponent,
    HeaderComponent,
    InfoDialogComponent,
    BookingFormComponent,
    PaymentComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    BrowserAnimationsModule,  
    RouterModule.forRoot(appRoutes),     
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    NgxStripeModule.forRoot('pk_test_51NKAtEB5liUH3M00VK27nV7o4McTZrA1bd1wXjipaEHd8GQ4qAY23wokSQo3OZ5J3OqcgzwKV0llCaeCyfHkTjCD007Og7UnsJ')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
