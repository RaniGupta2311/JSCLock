console.log("Welcome to JavaScript Clock");
const currentTimeElement=document.querySelector('.current-time');
//selecting all days
let dayElement=document.querySelectorAll('.days p');
//getting today
let currDay=new Date().getDay();
//adding active class to today
dayElement[currDay].classList.add("active-day");

let showtwelveFormat=true;
let twelveEle=document.querySelector('.twelveHour');
twelveEle.addEventListener("click",()=>{
    showtwelveFormat=true;
    document.querySelector('.activeBtn').classList.remove("activeBtn");
    twelveEle.classList.add("activeBtn");
});

let twentyFourHourEle=document.querySelector('.twentyfourHour');
twentyFourHourEle.addEventListener("click",()=>{
    showtwelveFormat=false;
    document.querySelector('.activeBtn').classList.remove("activeBtn");
    twentyFourHourEle.classList.add("activeBtn");
});

function clock(){
    let today=new Date(),
    h=today.getHours(),
    m=String(today.getMinutes()).padStart(2,'0');
    s=String(today.getSeconds()).padStart(2,'0');

    let z="";
    if(showtwelveFormat){
        if(h>=12 && h<24)
        z="PM";
        else
        z="AM";
    }
    if(showtwelveFormat && h>12)
    h=h-12;

    currentTimeElement.innerText=h+":"+m+":"+s+""+z;
}
setInterval(clock,1000);
clock();

