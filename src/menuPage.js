
export function removeMenuPage() {
    if (document.getElementById("menuContainer")) {
        document.getElementById("menuContainer").remove();
    }
}

export function showMenuPage() {
    if (document.getElementById("menuContainer")) {
        return;
    }
    const innerContainer = document.createElement("div");
    innerContainer.id = "menuContainer";
    innerContainer.style.display = "grid"
    const container = document.getElementById("content");

    //Row-wise
    const firstFishContainer = document.createElement("div");
    const firstFishImage = document.createElement("img");
    firstFishImage.src = "https://images.unsplash.com/photo-1518732751612-2c0787ff5684?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRhbmdlcm91cyUyMGZpc2glMjBkaXNofGVufDB8fDB8fHww"
    const firstFishPara = document.createElement("p");
    firstFishPara.textContent = "Rare Fish";
    firstFishContainer.append(firstFishImage, firstFishPara);
    innerContainer.appendChild(firstFishContainer);

    const secondFishContainer = document.createElement("div");
    const secondFishImage = document.createElement("img");
    secondFishImage.src = "https://images.unsplash.com/photo-1584267814800-c9de7a2cfeac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGRhbmdlcm91cyUyMGZpc2glMjBkaXNofGVufDB8fDB8fHww"
    const secondFishPara = document.createElement("p");
    secondFishPara.textContent = "Poisonous Fish";
    secondFishContainer.append(secondFishImage, secondFishPara);
    innerContainer.appendChild(secondFishContainer);

    const thirdFishContainer = document.createElement("div");
    const thirdFishImage = document.createElement("img");
    thirdFishImage.src = "https://images.unsplash.com/photo-1560765873-104de74f2939?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxkYW5nZXJvdXMlMjBmaXNoJTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
    const thirdFishPara = document.createElement("p");
    thirdFishPara.textContent = "Horde";
    thirdFishContainer.append(thirdFishImage, thirdFishPara);
    innerContainer.appendChild(thirdFishContainer);

    const fourthFishContainer = document.createElement("div");
    const fourthFishImage = document.createElement("img");
    fourthFishImage.src = "https://images.unsplash.com/photo-1629274112406-0ad795f62726?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHxkYW5nZXJvdXMlMjBmaXNoJTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
    const fourthFishPara = document.createElement("p");
    fourthFishPara.textContent = "Fish Mariana";
    fourthFishContainer.append(fourthFishImage, fourthFishPara);
    innerContainer.appendChild(fourthFishContainer);

    container.appendChild(innerContainer);
}