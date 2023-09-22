import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url ="http://my.kevalam.info"
  constructor(private http:Http) {}
  users(){
    const headers= new Headers();
    return this.http.get("/api/getall/category",{headers}).pipe(map(res=> res.json()))
  }
  // Fruits(){
  //   const headers= new Headers();
  //   return this.http.get("/api/get/usrindx/viw",{headers}).pipe(map(res=> res.json()))
  // }
  // Salad(){
  //   const headers= new Headers();
  //   return this.http.get("/api/get/usrindx/viw",{headers}).pipe(map(res=> res.json()))
  // }
  // Cheesee(){
  //   const headers= new Headers();
  //   return this.http.get("/api/get/usrindx/viw",{headers}).pipe(map(res=> res.json()))
  // }
  // Exotic(){
  //   const headers= new Headers();
  //   return this.http.get("/api/get/usrindx/viw",{headers}).pipe(map(res=> res.json()))
  // }
  // NASlyce(){
  //   const headers= new Headers();
  //   return this.http.get("/api/get/usrindx/viw",{headers}).pipe(map(res=> res.json()))
  // }
  // Smoothiess(){
  //   const headers= new Headers();
  //   return this.http.get("/api/get/usrindx/viw",{headers}).pipe(map(res=> res.json()))
  // }




  getIndexdata1(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+indx+"/"+city,{headers}).pipe(map(res=> res.json()))
  }

  getHero(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+1+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getcarousel(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+2+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getFruits(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+3+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
 
  getsaladbanner(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+4+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getSaladBowls(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+5+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getCheese(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+6+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getofferbanner(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+7+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getExoticVeggies(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+8+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getNewAtSlyce(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+9+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getCategories2(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+10+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getAddbanner(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+12+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getSmoothies(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+13+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
  getorderbanner(indx:string,city:string) {
    const headers= new Headers();
    return this.http.get("/api/get/usrindx/viw/"+14+"/"+'surat',{headers}).pipe(map(res=> res.json()))
  }
}
