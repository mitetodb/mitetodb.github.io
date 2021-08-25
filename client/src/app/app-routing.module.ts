import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './recipes/catalog/catalog.component';
import { CreateComponent } from './recipes/create/create.component';
import { DetailsComponent } from './recipes/details/details.component';
import { EditComponent } from './recipes/edit/edit.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'user',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: ProfileComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        }
    ]
  },
  {
    path: 'recipes',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: CatalogComponent
        },
        {
            path: 'create',
            component: CreateComponent
        },
        {
            path: 'details/:recipeId',
            component: DetailsComponent
        },
        {
            path: 'edit/:recipeId',
            component: EditComponent
        }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
