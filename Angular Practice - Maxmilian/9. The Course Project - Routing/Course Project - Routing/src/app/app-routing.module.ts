import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full"},
    { path: "recipes", component: RecipesComponent,
        children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipesDetailComponent },
            { path: ":id/edit", component: RecipeEditComponent },
        ]
    },
    { path: "shopping-list", component: ShoppingListComponent },
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}


/* #NOTES

1. { path: "recipes", component: RecipesComponent,
        children: [
            { path: "", component: RecipeStartComponent },
            { path: ":id", component: RecipesDetailComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id/edit", component: RecipeEditComponent },
        ]
    }

- Here the path: "new" is never reached becoz, whenever Angular matches the routes, it always gets matched with the dynamic route of path: ":id"
- Angular assumes http://127.0.0.1:4200/recipes/new as dynamic id parameter, and tries to load the RecipesDetailComponent, which has id = new and thus results in error
- Thus we must always add dynamic routes after static routes.

    { path: "recipes", component: RecipesComponent,
        children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipesDetailComponent },
            { path: ":id/edit", component: RecipeEditComponent },
        ]
    }


2. { path: "recipes", component: RecipesComponent,
        children: [
            { path: ":id", component: RecipesDetailComponent },
            { path: ":id/edit", component: RecipeEditComponent },
        ]
    }

    - When we go 1 step back from http://127.0.0.1:4200/recipes/id/edit it won't go back to http://127.0.0.1:4200/recipes/id
    - Becoz the immediate parent to the route is /recipes path, whose children are /id and /id/edit
    - /id is just the sibling route /id/edit
*/