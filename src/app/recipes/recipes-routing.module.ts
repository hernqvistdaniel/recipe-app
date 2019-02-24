import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipesDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ] },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})

export class RecipesRoutingModule {}