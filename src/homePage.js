
export function removeHomePage() {
    if (document.getElementById("homeContainer")) {
        document.getElementById("homeContainer").remove();
    }
}

export function showHomePage() {
    if (document.getElementById("homeContainer")) {
        return;
    }
    const innerContainer = document.createElement("div");
    innerContainer.id = "homeContainer";
    innerContainer.style.display = "flex"
    const container = document.getElementById("content");
    const titleDiv = document.createElement("div");
    titleDiv.textContent = "Mythical Fish Restaurant";
    innerContainer.appendChild(titleDiv);

    const introContainer = document.createElement("div");
    const introPara = document.createElement("p");
    introPara.textContent = "Welcome to my restaurant site. It has been found since 3 hours? And I manage everything here just like a full-stack-developer I do cooking and also serving. Please check out the menu.";
    introContainer.appendChild(introPara);
    innerContainer.appendChild(introContainer);

    const openHoursContainer = document.createElement("div");
    openHoursContainer.id = "homeTimeContainer";
    const timePara1 = document.createElement("p");
    timePara1.textContent = "Monday: 3am - 3:30am";
    const timePara2 = document.createElement("p");
    timePara2.textContent = "Tuesday: 12pm - wednesday";
    const timePara3 = document.createElement("p");
    timePara3.textContent = "Wednesday: depends on the moond";
    // openHoursContainer.appendChild(timePara1,timePara2,timePara3);
    openHoursContainer.append(timePara1, timePara2, timePara3);
    innerContainer.appendChild(openHoursContainer);

    const locationDiv = document.createElement("div");
    locationDiv.textContent = "Location:"
    const locationPara = document.createElement("p");
    locationPara.textContent = "United States, White house";
    locationDiv.appendChild(locationPara);
    innerContainer.appendChild(locationDiv);

    container.appendChild(innerContainer);
}