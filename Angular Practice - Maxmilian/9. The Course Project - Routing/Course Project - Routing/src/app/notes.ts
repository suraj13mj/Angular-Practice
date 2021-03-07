/* #NOTES

1. Here we use RecipeEdit Component as component for both adding New Recipe and Editting existing recipe.
    - Here we check the route parameter 'id' i.e to check if existing Recipe is to be editted or user has clicked the New Recipe button

    - http://127.0.0.1:4200/recipes/1/edit  - if the route has the id route parameter, then we assume that the existing Recipe is to be editted.

    - http://127.0.0.1:4200/recipes/new - if the route has the id route paramete as null, then we assume that new Recipe is to be created.

2. Dynamic Routes must always come after static routes (In app-routing.module.ts)

*/