import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageHomeComponent } from './page-home/page-home.component';
import { PagePasswordsComponent } from './page-passwords/page-passwords.component';
import { PageTagsComponent } from './page-tags/page-tags.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { HttpClientModule } from '@angular/common/http';
import { Md5Pipe } from './md5.pipe';
import { TagIconPipe } from './tag-icon.pipe';
import { WordPipe } from './word.pipe';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordOverlayComponent } from './password-overlay/password-overlay.component';
import { TagsListComponent } from './page-tags/tags-list/tags-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmOverlayComponent } from './confirm-overlay/confirm-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHomeComponent,
    PagePasswordsComponent,
    PageTagsComponent,
    PageSettingsComponent,
    PageLoginComponent,
    PageRegisterComponent,
    Md5Pipe,
    TagIconPipe,
    WordPipe,
    PasswordListComponent,
    PasswordOverlayComponent,
    TagsListComponent,
    ConfirmOverlayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents:[ PasswordOverlayComponent, ConfirmOverlayComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
