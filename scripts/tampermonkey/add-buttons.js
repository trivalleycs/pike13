// ==UserScript==
// @name Pike13+
// @version  0.1
// @description Adds some stuff to Pike13.
// @author   Alexander Sweet
// @match   https://*.pike13.com/today*
// @match   https://*.pike13.com/schedule*
// @run-at   document-load
// @require http://code.jquery.com/jquery-latest.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script); // run the script
    //document.body.removeChild(script); // clean up
}

function AddStuff() {
    /*
    Note - Pike13 may change these selectors 
    resulting in the buttons disappearing w/o an error message
    */
    var back = $("#pagination > div > button.button.fa.fa-arrow-left");
    var forward = $("#pagination > div > button.button.fa.fa-arrow-right");
    console.log("TEST");
    console.log("back:" + back);

    var lw = $('<div class="button">LW</div>');
    lw.click(BackOneWeek);
    back.before(lw);

    var nw = $('<div class="button">NW</div>');
    nw.click(ForwardOneWeek);
    forward.after(nw);

    var today = $('<div class="button">Today</div>');
    today.click(GoToToday);
    forward.before(today);

    function BackOneWeek() {
        adjustDate(-7);
    }
    function ForwardOneWeek() {
        adjustDate(+7);
    }

    function adjustDate(daysToAdd) {
        //scope.adjustDate(daysToAdd);
        angular.element($('#pagination')).scope().$apply(function () { angular.element($('#pagination')).scope().adjustDate(daysToAdd); });
    }

    function GoToToday() {
        angular.element($('#pagination')).scope().$apply(function () { angular.element($('#pagination')).scope().gotoDate(new Date()); });
    }
}
$(window).load(function () {
    exec(AddStuff);
});


