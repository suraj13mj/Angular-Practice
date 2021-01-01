/* NOTES:

1. While generating the component, we can skip the creation of spec testing files using 
    ng g c recipes ---skipTests true

2. To create a component within a component we can specify the path 
    ng g c recipes/recipes-list --skipTests true

3. recipe.model.ts is the model (structure or blueprint) of all the recipies object to be created.

4. recipeList: Recipe[] = [
    new Recipe('Pizza','The Italian Margaretta Pizza','https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg')
]

We can type annotate a field to be of particular Object type.
Ex-- recipe: Recipe;
But here we are assigning a object type to recipeList, but [] specifies it will contain array of Recipe objects
Ex-- recipeList: Recipe[] = []


* Debugging

1. In Chrome Developer Tools, we see Javascript bundles, Angular CLI converts Typescript into JavaScript as Browser understands only JS.

2. In the JavaScript bundles (Ex: main.js), we can figure out our code TS code, but the code is complex because, the bundles code also involves TS to JS conversion code.
    - But when we try to add breakpoint on the bundle code (Ex: main.js), it takes us to our Typescript code.
    - This is possible because AngularCLI in development mode adds source maps to the bundle code, so that our browser can translate the JS code to TS code.
    - But in the production mode, these source maps are not added.

3. We can also view our Typescript code in the sources -> webpack section

4. We can also use Angury extension in chrome to debug and analyse our Angular application
*/
