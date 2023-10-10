import { Component,OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit {

  state = "Tu reserva aun NO ha sido anulada"
  public codeReservation: string = '';

  constructor(
    private service: AppService
  ) {  

  }
  
  ngOnInit() :void {}
  sendCancel(){
    this.service.cancelReservation(this.codeReservation).subscribe((result: any) => {
      this.state = "Tu reserva ha sido anulada con ÉXITO"
        console.log(result)
    })
    console.log(this.codeReservation)  }

}
