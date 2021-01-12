/* #NOTES

1. In Normal Web applications, when the route changes and new HTML file is loaded and displayed.
    - In Angular we can configure our app to have multiple routes to display different content.
    - Angular has built-in router module to provide this feature.
    - But with Angular Routing, when the route changes, we don't load a new HTML file, instead only the part of the DOM is loaded with new content related to that route.
    - This gives user the feeling of Route Navigation, but we still remain on that same single HTML file, only the DOM gets updated.
    - Thus Angular apps are called as Single Page Applications.
*/