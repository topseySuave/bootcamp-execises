"use strict";

class Seat {
  
  constructor (f_name, l_name, seatNum){
    this.f_name = f_name;
    this.l_name = l_name;
    this.seatNum = seatNum;
    
    this.seatSection;
    this.seatsAvailable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  
  //check for Availability in seat array;
  checkAvailableSeats(){
    let count = [];
    this.seatsAvailable.forEach((i) => {
      if(i === 0){
        count.push(i);
      }
    });
    return count.length;
  }
  
  getName(){
    return `${this.f_name} ${this.l_name}`;
  }
}


class FirstClass extends Seat {
  constructor (f_name, l_name, seatNum){
    super(f_name, l_name, seatNum);
  }
  
  //This should put the user on the first 5 of the array (for First Class);
  checkIn(){
    if(this.seatNum >= 11 || this.seatNum <= 0){ // check for characters more than 11 or less than or equal 0
      return -1;
    }else if(typeof this.seatNum !== 'number'){ // check for non numeric characters
      return 1;
    } else {
      if(this.checkAvailableSeats() >= 1){
        if(this.seatNum > 5){
          this.seatsAvailable[this.seatNum - 5] = this.seatNum;
        }else{
          this.seatsAvailable[this.seatNum] = this.seatNum;
        }
      }
      return `Checked In ${this.getName()}`;
    }
  }
  
  //This checks if user is checked In an returns a ticket;
  getTicket(){
    if(this.checkIn() == 1){
      return 'Invalid Input';
    }else if(this.checkIn() == -1){
      return 'The plane can only contain 10 people';
    }else{
      return `flight ticket for ${this.getName()}: TopseyAirways: On First class, flight number 253, seat number ${this.seatNum}. Take off Time: 4:30 pm (GMT+1)`
    }
  }
}


class EconomyClass extends Seat {
  constructor (f_name, l_name, seatNum){
    super(f_name, l_name, seatNum);
  }
  
  //This should put the user on the last 5 of the array (for Economy Class);
  checkIn(){
    if(this.seatNum >= 11 || this.seatNum <= 0){// check for characters more than 11 or less than or equal 0
      return -1;
    }else if(typeof this.seatNum !== 'number'){ // check for non numeric characters
      return 1;
    } else {
      if(this.checkAvailableSeats() >= 1){
        if(this.seatNum < 5){
          this.seatsAvailable[this.seatNum + 5] = this.seatNum;
        }else{
          this.seatsAvailable[this.seatNum] = this.seatNum;
        }
      }
      return `Checked In ${this.getName()}`;
    }
  }
  
  getTicket(){
    if(this.checkIn() == 1){
      return 'Invalid Input';
    }else if(this.checkIn() == -1){
      return 'The plane can only contain 10 people';
    }else{
      return `flight ticket for ${this.getName()}: TopseyAirways: On Economy class, flight number 253, seat number ${this.seatNum}. Take off Time: 4:30 pm (GMT+1)`
    }
  }
}