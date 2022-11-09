import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MathemShellModule } from '@mathem-assignment/mathem/shell';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, MathemShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
