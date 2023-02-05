//Menu
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("menuButton").classList.toggle("open");

}
 const x = document.getElementById("menuButton");
 x.onclick = toggleMenu;

//date
var lastUpdated = `Last Modification: ${document.lastModified}`;
    document.querySelector("#updateDate").innerText=lastUpdated;
 
const currentDate = document.querySelector("#currentYear");
    currentDate.textContent = `${new Date().getFullYear()}`;
    //It's working, so I'm assuming this is the correct method?

//current date
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
 document.querySelector(".date").innerHTML = fullDate;
//©-River-Rhodes