import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../shared/models/booking-model';
import { LightRestaurant } from '../shared/models/restaurant-light-model';

const API = 'http://localhost:8090/booking-restaurant/v1/';

@Injectable({  
  providedIn: 'root'
})

export class AppService {
  constructor(
    private http: HttpClient
    ) { }

  getAllRestaurants(){   
    return this.http.get(API + 'restaurants');
  }

  getRestaurant(id: number){ 
    return this.http.get(API + 'restaurant'+'/'+ id)
  }

  
  createReservation(booking: Booking){
    return this.http.post(API + 'reservation' , booking)
  }

  cancelReservation(reservationCode: string){
    const options ={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
    })
    }
    return this.http.delete(API + 'deleteReservation?locator=' + reservationCode , options)
  }

  getAllRestaurantsMock(){
    const restaurants : LightRestaurant[]=[]
    let restaurant = new LightRestaurant()
    restaurant.address="";
    restaurant.id= 1
    restaurant.image=""
    restaurant.name =""
    const restaurant2: LightRestaurant = {
      address:"",
      id:2,
      image:"",
      name:""
    }
    const restaurant3: LightRestaurant = {
      address:"",
      id:3,
      image:"",
      name:""
    }
    const restaurant4: LightRestaurant = {
      address:"",
      id:4,
      image:"",
      name:""
    }
    const restaurant5: LightRestaurant = {
      address:"",
      id:5,
      image:"",
      name:""
    }
    const restaurant6: LightRestaurant = {
      address:"",
      id:6,
      image:"",
      name:""
    }
    restaurants.push(restaurant)
    restaurants.push(restaurant2)
    restaurants.push(restaurant3)
    restaurants.push(restaurant4)
    restaurants.push(restaurant5)
    restaurants.push(restaurant6)
    return of(restaurants)
  }
}


/*

getAllRestaurantsMock(){
  const restaurants : LightRestaurant[]=[]
  let restaurant = new LightRestaurant()
  restaurant.address="";
  restaurant.id= 1
  restaurant.image=""
  restaurant.name =""

  restaurants.push(restaurant)

  return of(restaurants)
}
*/