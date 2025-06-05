import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { login } from "src/app/shared/store/auth/auth.actions";
import {
  selectError,
  selectIsAuthenticated,
} from "src/app/shared/store/auth/auth.selectors";
import { defaultTemplates } from "src/assets/data/default-template";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email = "";
  password = "";
  role: "admin" | "user" = "user";
  error$ = this.store.select(selectError);
  @ViewChild("loginForm") loginFormRef!: NgForm;

  constructor(private store: Store, private router: Router) {
    this.store.select(selectIsAuthenticated).subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(["/list"]);
      }
    });
  }

  onLogin() {
    if (this.loginFormRef.invalid) {
      // Mark all controls as touched to trigger validation messages
      Object.values(this.loginFormRef.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    localStorage.clear();
    this.store.dispatch(
      login({
        email: this.email,
        password: this.password,
        role: this.role,
      })
    );
    localStorage.setItem("formTemplates", JSON.stringify(defaultTemplates));
  }
}
