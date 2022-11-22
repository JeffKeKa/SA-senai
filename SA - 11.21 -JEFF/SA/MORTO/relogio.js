function clock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    
    let session = "AM";
    if(h>12){

        h = h - 12;
        session = "PM"
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    let time = h +":"+ m +":"+ s +" "
        session;

    setTimeout(clock, 1000);

    document.getElementById("clock")
    innertText = time;
}