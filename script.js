function digital_clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    setTimeout(digital_clock, 1000);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + session ;
}
digital_clock();