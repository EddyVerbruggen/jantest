const localize = require("nativescript-localize");
var Observable = require("tns-core-modules/data/observable").Observable;
var pageData = new Observable();

function pageLoaded(args){
    console.log("HEIEHEIHEIHEIEHIEHIEH");
    console.log(localize('back'));
}
exports.pageLoaded = pageLoaded;
