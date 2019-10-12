import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  getUserType(): string {
    return this.currentUserSubject.value.userType;
  }

  getUser(): string {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    let url = this.apiUrl + 'users/login';
    return this.http.post<any>(url, { 'email': email, 'password': password }).pipe(map((result: any) => {
      // login successful if there's a jwt token in the response
      if (result.code == 200) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(result.responseData));
        this.currentUserSubject.next(result.responseData);
      }
      return result;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}