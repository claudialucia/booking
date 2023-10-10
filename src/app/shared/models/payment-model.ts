import { Booking } from "./booking-model";

export class Booked extends Booking{
    locator! : string
}

export interface PaymentIntent{

    description: string
    price: number
}

export interface PaymentConfirm{

    email: string
    locator: string
    name: string
    paymentId: string
}