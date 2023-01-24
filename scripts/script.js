var lastUpdated = `Last updated: ${document.lastModified}`;

document.getElementById("updateDate").innerText=lastUpdated;
 
const currentDate = document.querySelector("#currentYear");
currentDate.textContent = `${new Date().getFullYear()}`;
//©-River-Rhodes