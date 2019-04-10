// console.log(Check_Version);
var jsFile = document.createElement("script");
jsFile.setAttribute("type", "text/javascript");
if (Check_Version() < 12 && Check_Version() > 0) {
    // alert(11);
    // jsFile.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.js");
    jsFile.setAttribute("src", "./asset/js/html2canvas050.js");

    document.getElementsByTagName("head")[0].appendChild(jsFile)
} else {
    // alert(12);
    jsFile.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-alpha1/html2canvas.min.js");
    document.getElementsByTagName("head")[0].appendChild(jsFile)
}