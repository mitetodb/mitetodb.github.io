import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { RecipesModule } from './recipes/recipes.module';
import { ContentService } from './content.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    IngredientsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    RecipesModule
  ],
  providers: [
    ContentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
