import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@NgModule({
  declarations: [LogInComponent, SignUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LogInComponent, SignUpComponent],
})
export class AuthModule {}
