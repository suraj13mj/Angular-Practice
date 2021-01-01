/*
Passing $event to the event handling functions

app.component.html
-----------------
<app-header (selectedTab)="onTabSelected('Hello', true, $event)"></app-header>



app.component.ts
----------------

onTabSelected(tArg1:string, tArg2: boolean, SelTab: string) {  
    this.selectedTab = SelTab;
}


1. For event handling methods, we can pass arguments other than the $event argument.
2. $event argument can be passed anywhere in the argument list. (any order)
3. $event will always refer to the event data



*/