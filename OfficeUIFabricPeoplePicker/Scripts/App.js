/// <reference path="PeoplePicker.js" />
'use strict';

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage()
{
    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {
        var peoplePicker = new OfficeUIfabric.PeoplePicker();
        peoplePicker.Components.PeoplePicker.init("_peoplePicker", false);
        peoplePicker.Components.DomWindow();
        //var PeoplePickerElements = document.querySelectorAll(".ms-PeoplePicker");
        //for (var i = 0; i < PeoplePickerElements.length; i++) {
        //    new fabric['PeoplePicker'](PeoplePickerElements[i]);
        //}

    });

}
