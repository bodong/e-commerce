import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TotalPipePipe } from './total-pipe.pipe';
import { TaxPipePipe } from './tax-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipePipe,
    TaxPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
