import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReadsvgComponent } from './shared/readsvg/readsvg.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HttpClientModule } from '@angular/common/http';
import { QuillEditorBase, QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent,
    HomepageComponent,
    HeaderComponent,
    ReadsvgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
