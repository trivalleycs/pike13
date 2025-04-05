# pike13
 Tampermonkey script and other utilities for Pike13


## Setup


### New Install

To install this script, you will import the file from Github into Tampermonkey.

- Install the  Tampermonkey extension to your browser
- Click on the  Tampermonkey button and go to the dashboard
- Click on the Utilities tab
- Paste this link: https://raw.githubusercontent.com/trivalleycs/pike13/refs/heads/main/scripts/tampermonkey/add-buttons.js
 into the URL box
- Click Import
- Click install and you’re all set!


### How to Fix If Already Installed

For this fix, you will copy the contents from the file in Github into the file in Tampermonkey

- in Chrome, click on the Tampermonkey extension
- Click "Dashboard"
- Click the "Edit" button for the "Pike13+" script
- this should show the contents of the current script

- go to https://raw.githubusercontent.com/trivalleycs/pike13/refs/heads/main/scripts/tampermonkey/add-buttons.js
- select All and Copy all the content
- go back to your Pike13+ Tampermonkey script
- select All and Paste the content
- click "Save" in Tampermonkey

## Adding Last Week (LW), Today and Next Week(NW) Buttons

Pike13 provides forward and backward buttons.

![pike13 original](./doc/pike13-orig.png)

The [add-buttons script](./scripts/tampermonkey/add-buttons.js) adds convenience buttons:

- LW: goes to the "Last Week"
- Today: returns you to today
- NW: goes to the "Next Week"

![pike13 with buttons](./doc/pike13-with-buttons.png)

### NOTE - Buttons may break with Pike13 updates 
### the CoderSchool admins will handle and share this fix

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
