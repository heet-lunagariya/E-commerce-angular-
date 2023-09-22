import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.css']
})
export class MainpartComponent implements OnInit {
  title = 'slyce';
  users:any;
  Hero:any;
  Hero1:any;
  carousel:any;
  userss:any;
  saladbanner:any;
  saladd:any;
  Cheese:any;
  offerbanner:any;
  EVeggies:any;
  NASlyce:any;
  Categories2:any;
  Addbanner:any;
  Smoothies:any;
  Orderbanner:any;
  name:any;
  list: any;

  constructor (private data:DataService){
    data.users().subscribe((data)=>{
      console.warn("data",data)
      this.users=data
    })
    // data.Salad().subscribe((data)=>{
    //   console.warn("data",data)
    //   this.saladd=data
    // })
    
  }
  ngOnInit(): void {
    this.getUserFormData();
    this.getUserIndexData1();
    this.getHero();
    this.getcarousel();
    this.getFruits();
    this.getsaladbanner();
    this.getSaladBowls();
    this.getCheese();
    this.getofferbanner();
    this.getExoticVeggies();
    this.getNewAtSlyce();
    this.getCategories2();
    this.getAddbanner();
    this.getSmoothies();
    this.getorderbanner();
  }
  
   getUserFormData(){
      this.data.users().subscribe(res=> {
        console.log(`====>> Data : `,res)
      })
   }
   getUserIndexData1(){
      this.data.getIndexdata1("1","Ahmedabad").subscribe(res=> {
        console.log(`====>> Index 1 : `,res)
      })
   }
   getHero(){
      this.data.getHero("1","surat").subscribe(res=> {
        console.log(`====>> Index 1 : `,res)
        this.Hero = res.evtbnr;
        this.Hero1 = res.evtdtl;
      })
   }
   getcarousel(){
      this.data.getcarousel("2","surat").subscribe(res=> {
        console.log(`====>> Index 2 : `,res)
        this.carousel = res.dtl;
      })
   }
   getFruits(){
      this.data.getFruits("3","surat").subscribe(res=> {
        console.log(`====>> Index 3 : `,res)
        this.userss = res.dtl;
      })
   }
   getsaladbanner(){
      this.data.getsaladbanner("4","surat").subscribe(res=> {
        console.log(`====>> Index 4 : `,res)
        this.saladbanner = res.dtl;
      })
   }
   getSaladBowls(){
      this.data.getSaladBowls("5","surat").subscribe(res=> {
        console.log(`====>> Index 5 : `,res)
        this.saladd = res.dtl;
      })
   }
   getCheese(){
      this.data.getCheese("6","surat").subscribe(res=> {
        console.log(`====>> Index 6 : `,res)
        this.Cheese = res.dtl;
      })
   }
   getofferbanner(){
      this.data.getofferbanner("7","surat").subscribe(res=> {
        console.log(`====>> Index 7 : `,res)
        this.offerbanner = res.dtl;
      })
   }
   getExoticVeggies(){
      this.data.getExoticVeggies("8","surat").subscribe(res=> {
        console.log(`====>> Index 8 : `,res)
        this.EVeggies = res.dtl;
      })
   }
   getNewAtSlyce(){
      this.data.getNewAtSlyce("9","surat").subscribe(res=> {
        console.log(`====>> Index 9 : `,res)
        this.NASlyce = res.dtl;
      })
   }
   getCategories2(){
      this.data.getCategories2("10","surat").subscribe(res=> {
        console.log(`====>> Index 10 : `,res)
        this.Categories2 = res.dtl;
      })
   }
   getAddbanner(){
      this.data.getAddbanner("12","surat").subscribe(res=> {
        console.log(`====>> Index 12 : `,res)
        this.Addbanner = res.dtl;
      })
   }
   getSmoothies(){
      this.data.getSmoothies("13","surat").subscribe(res=> {
        console.log(`====>> Index 13 : `,res)
        this.Smoothies = res.dtl;
      })
   }
   getorderbanner(){
      this.data.getorderbanner("14","surat").subscribe(res=> {
        console.log(`====>> Index 14 : `,res)
        this.Orderbanner = res.dtl;
      })
   }

   
}
