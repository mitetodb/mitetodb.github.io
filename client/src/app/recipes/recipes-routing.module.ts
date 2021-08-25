import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
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
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
