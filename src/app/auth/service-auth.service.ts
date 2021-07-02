import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase';'firebase/app';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
  userState: any;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    public ngZone: NgZone) { 
      this.afAuth.authState.subscribe(user => {
        if(user){
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          //JSON.parse(localStorage.getItem('user'));
        }else{
          localStorage.setItem('user','')
        }
      }

      )
    }

  SignIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {this.ngZone.run(()=> this.router.navigate(['dashboard']));
    this.SetUserData(value.user);
    })
    .catch(err => {
      window.alert(err.message);
    });
  }
  SetUserData(user:any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userState, {
      merge: true
    })
  }
 

  SignUp(email: string, password: string) {
    
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     this.SendVerificationMail();
     this.SetUserData(value.user)
     //this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
      window.alert(error.message)
    });
  }
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => {if(u) u.sendEmailVerification()})
    .then(() => {
      this.router.navigate(['email-verif']);
    })
  }    
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }
  
  get isLoggedIn(): boolean {
    let currentUser = localStorage.getItem('user')
    let user= null;
    if(currentUser)
      user = JSON.parse(currentUser);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
