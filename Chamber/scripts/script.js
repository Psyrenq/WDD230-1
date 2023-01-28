var lastUpdated = `Last Modification: ${document.lastModified}`;
    document.querySelector("#updateDate").innerText=lastUpdated;
 
const currentDate = document.querySelector("#currentYear");
    currentDate.textContent = `${new Date().getFullYear()}`;
    //It's working, so I'm assuming this is the correct method?

//function toggleMenu() {
//    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
//}



const dateField = document.querySelector(".current");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;
//©-River-Rhodes