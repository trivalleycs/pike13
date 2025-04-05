# pike13
Tampermonkey script and other utilities for Pike13


## Adding Last Week (LW), Today and Next Week(NW) Buttons

Pike13 provides forward and backward buttons.

![pike13 original](./doc/pike13-orig.png)

The [add-buttons script](./scripts/tampermonkey/add-buttons.js) adds convenience buttons:

- LW: goes to the "Last Week"
- Today: returns you to today
- NW: goes to the "Next Week"

![pike13 with buttons](./doc/pike13-with-buttons.png)

### NOTE - Buttons may break with Pike13 updates

This code depends upon finding Pike13's forward (right) and backward (left) buttons.

```
    /*
    Note - Pike13 may change these selectors 
    resulting in the buttons disappearing w/o an error message
    */
    var back = $("#pagination > div > button.button.fa.fa-arrow-left");
    var forward = $("#pagination > div > button.button.fa.fa-arrow-right");

```    


These are found using CSS Selectors.  With a Pike13 update, these locations may change.

#### Fix: find and update the selector

In Chrome, 

- right click on the button
- select "Inspect"

This will bring up DevTools with the html highlighted

![inspect button](./doc/find-selector.png)

- right click on the highlighted html
- select "Copy"
- select "Copy Selector"

Then, you can past this value into the code

```
    var forward = $("PASTE-THE-SELECTOR-HERE");
```