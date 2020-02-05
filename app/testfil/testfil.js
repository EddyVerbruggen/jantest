const localize = require("nativescript-localize");
var Observable = require("tns-core-modules/data/observable").Observable;

function onPageLoaded(args){
    console.log("HEIEHEIHEIHEIEHIEHIEH");
    console.log(localize('back'));

    // this hack is required (con both iOS and Android) to make localisation work in the associated XML file
    const page = args.object;
    page.bindingContext = new Observable();
}
exports.onPageLoaded = onPageLoaded;
