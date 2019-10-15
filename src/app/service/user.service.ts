import { Injectable } from '@angular/core';
// import { User } from '../model/user.model';
import { FirebaseFirestore } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // baseUrl = 'http://localhost:3000/user/';

  createUser(user: any) {   
    // return this.db.collection('users').add({
    //   'name' : 'pradeepta khatoi'
    // });
  }

  // getUser() {
  //   return this.http.get<User[]>(this.baseUrl);
  // }

  // deleteUser(id: number) {
  //   return this.http.delete<User[]>(this.baseUrl + id);
  // }
 
  // getUserById(id: number) {
  //   return this.http.get<User>(this.baseUrl + id);
  // }

  // updateUser(user: User) {
  //   return this.http.put(this.baseUrl + user.id, user);
  // }
}
