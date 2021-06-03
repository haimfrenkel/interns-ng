import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    permission: "",
    token: ""
  }
  sms = {
    num1: null,
    num2: null,
    num3: null,
    num4: null,
  }

  localData: User = { _id: '', permission: 0, token: '' };


  baseURL = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  options = {
    headers: {}
  }


  addUser(password: string) {
    this.http.post<User>(this.baseURL + "users/create", Object.assign(this.intern, {password: password})).subscribe(data => {
        this.localData = data     
        this.options.headers = new HttpHeaders({ 'token': this.localData.token })
      })
  }



  updateUser() {
    this.http.put(this.baseURL + "api/users/" + this.localData._id, this.intern, this.options).subscribe(data => {
      console.log(data)
    });
  }


  getUser(): Observable<any> {
    return this.http.get(this.baseURL + "api/users/" + this.localData._id, {});

  }


  login(name: string, password: string): Observable<any> {
    console.log(name, password)
    return this.http.post(this.baseURL + "api/users/login", { name: name, password: password })
  }

}


export interface User {
  _id: String,
  permission: Number,
  token: string

}