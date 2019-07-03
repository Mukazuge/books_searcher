import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ListComponent } from './list/list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { IsbnValidatorPipe } from './isbn-validator.pipe';
import { AuthorValidatorPipe } from './author-validator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    ListComponent,
    SearchBarComponent,
    IsbnValidatorPipe,
    AuthorValidatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
