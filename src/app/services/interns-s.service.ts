import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternsSService {
  intern = {
    ID: 0,
    name: "",
    email: "",
    phon: 0,
    age: 0,
    country: "",
    city: "",
    graduation: 0,
    acadaemicInstitution: "",
    medicalInstitution: "",
    residency: "",
    department: "",
    yearInResidency: 0,
    permission: ""
  }
  sms = {
    num1: null,
    num2: null,
    num3: null,
    num4: null,
  }

  dataH: User = { _id: '' };


  baseURL = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }



  addUser() {
    this.http.post<User>(this.baseURL + "api/users/create", { ID: this.intern.ID, name: this.intern.name, email: this.intern.email, phon: this.intern.phon })
    .subscribe(data => {
      console.log(data), this.dataH = data
    })
  }

updatePass(password: number){
  this.http.put(this.baseURL +"api/users/"+ this.dataH._id, {password: password}).subscribe(data=>{
    console.log(data)
  })
}

  updateUser() {
    this.http.put(this.baseURL + "api/users/" + this.dataH._id, {
      ID: this.intern.ID, name: this.intern.name, email: this.intern.email, phon: this.intern.phon,  age: this.intern.age, 
      country: this.intern.country, city: this.intern.city, graduation: this.intern.graduation, acadaemicInstitution: this.intern.acadaemicInstitution,
      medicalInstitution: this.intern.medicalInstitution, residency: this.intern.residency, department: this.intern.department,
      yearInResidency: this.intern.yearInResidency, permission: this.intern.permission
    }).subscribe(data => {
      console.log(data)
    })
  }


  getUser(): Observable<any> {
    return this.http.get(this.baseURL + "api/users/" + this.dataH._id,{});
    
  }


  login(name: string, password: string): Observable<any> {
    console.log(name, password)
    return this.http.post(this.baseURL + "api/users/login", { name: name, password: password })
  }

}


export interface User {
  _id: String,
  name?: String
}