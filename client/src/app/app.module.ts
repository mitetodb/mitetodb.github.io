import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { ContentService } from './content.service';
import { UserService } from './user/user.service';
import { CreateComponent } from './recipes/create/create.component';
import { CatalogComponent } from './recipes/catalog/catalog.component';
import { DetailsComponent } from './recipes/details/details.component';
import { EditComponent } from './recipes/edit/edit.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule } from '@angular/forms';
import { SameValueDirective } from './user/same-value.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    IngredientsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    NotFoundComponent,
    SameValueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [
    ContentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
