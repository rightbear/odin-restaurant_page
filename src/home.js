import starImage from "./images/star.png";
import teaImage from "./images/tea-list.jpg"

export const loadHome = function(content){
    // The name of the drink shop
    //<div class="headBox>
    const headContainer = document.createElement("div");
    headContainer.classList.add("headBox");
    //<h1 id="shopName">
    const shopName = document.createElement("h1");
    shopName.textContent = "Drinks for You";
    shopName.setAttribute("id", "shopName");
    headContainer.appendChild(shopName);
    content.appendChild(headContainer);

    //<div class="contentBoxes">
    const homeContentBoxes = document.createElement("div");
    homeContentBoxes.classList.add("contentBoxes");

    // The business philosophy of the drink shop
    //<div id="idea" class="contentBox">
    const idea = document.createElement("div");
    idea.setAttribute("id", "idea");
    idea.classList.add("contentBox");
    //<div class="title">
    const ideaTitle = document.createElement("div");
    ideaTitle.classList.add("title");
    //<div class="description">
    const ideaDescription = document.createElement("div");
    ideaDescription.classList.add("description");
    idea.append(ideaTitle, ideaDescription);
    //<img src="images/star.png" alt="Star Icon" height="40">
    const ideaTitleStar = document.createElement("img");
    ideaTitleStar.src = starImage;
    ideaTitleStar.alt = "Star Icon";
    ideaTitleStar.height = 40;
    //<h2>Philosophy</h2>
    const ideaTitlePhilo = document.createElement("h2");
    ideaTitlePhilo.textContent = "Our Philosophy";
    ideaTitle.append(ideaTitleStar, ideaTitlePhilo);
    //<p>Founded in 2025...
    const ideaDesPara1 = document.createElement("p");
    const ideaDesPara1Node = document.createTextNode("Founded in 2025 in the heart of Taiwan, Drinks for You was born with one simple mission: Bring smiles to every customer through the perfect cup of tea.");
    ideaDesPara1.appendChild(ideaDesPara1Node);
    //<p>Our passion...
    const ideaDesPara2 = document.createElement("p");
    const ideaDesPara2Node = document.createTextNode("Our passion for quality and commitment to service excellence drive us to create the amazing flavor.");
    ideaDesPara2.appendChild(ideaDesPara2Node);
    ideaDescription.append(ideaDesPara1, ideaDesPara2);
    homeContentBoxes.appendChild(idea);

    // The ingredient information of the drink shop
    //<div id="ingredient" class="contentBox">
    const ingredient = document.createElement("div");
    ingredient.setAttribute("id", "ingredient");
    ingredient.classList.add("contentBox");
    //<div class="title">
    const ingredTitle = document.createElement("div");
    ingredTitle.classList.add("title");
    //<div class="description">
    const ingredDescription = document.createElement("div");
    ingredDescription.classList.add("description");
    ingredient.append(ingredTitle, ingredDescription);
    //<img src="images/star.png" alt="Star Icon" height="40">
    const ingredTitleStar = document.createElement("img");
    ingredTitleStar.src = starImage;
    ingredTitleStar.alt = "Star Icon";
    ingredTitleStar.height = 40;
    //<h2>Premium Ingredients</h2>
    const ingredTitleIngred = document.createElement("h2");
    ingredTitleIngred.textContent = "Premium Ingredients";
    ingredTitle.append(ingredTitleStar, ingredTitleIngred);
    //<p>Founded in 2025...
    const ingredDesPara1 = document.createElement("p");
    const ingredDesPara1Node = document.createTextNode("At Drinks for You, every drink begins with the finest, 100% natural ingredients. Support for locally agricultural products.");
    ingredDesPara1.appendChild(ingredDesPara1Node);
    //<ul>
    const ingredDesUl = document.createElement("ul");
    //<li>Taiwan high-Mountain tea leaves
    const ingredDesLi1 = document.createElement("li");
    ingredDesLi1.setAttribute("id", "tea");
    ingredDesLi1.textContent = "Taiwan high-Mountain tea leaves";
    //<li>Tapioca pearls from Taichung
    const ingredDesLi2 = document.createElement("li");
    ingredDesLi2.setAttribute("id", "tapioca");
    ingredDesLi2.textContent = "Tapioca pearls from Taichung";
    //<li>Fresh sugar cane from Tainan
    const ingredDesLi3 = document.createElement("li");
    ingredDesLi3.setAttribute("id", "sugar");
    ingredDesLi3.textContent = "Fresh sugar cane from Tainan";
    //<li>Seasonal fruits from local farms
    const ingredDesLi4 = document.createElement("li");
    ingredDesLi4.setAttribute("id", "fruit");
    ingredDesLi4.textContent = "Seasonal fruits from local farms";
    ingredDesUl.append(ingredDesLi1, ingredDesLi2, ingredDesLi3, ingredDesLi4);
    ingredDescription.append(ingredDesPara1, ingredDesUl);
    homeContentBoxes.appendChild(ingredient);

    // The Core Service of the drink shop
    //<div id="service" class="contentBox">
    const service = document.createElement("div");
    service.setAttribute("id", "service");
    service.classList.add("contentBox");
    //<div class="title">
    const serviceTitle = document.createElement("div");
    serviceTitle.classList.add("title");
    //<div class="description">
    const serviceDescription = document.createElement("div");
    serviceDescription.classList.add("description");
    service.append(serviceTitle, serviceDescription);
    //<img src="images/star.png" alt="Star Icon" height="40">
    const serviceTitleStar = document.createElement("img");
    serviceTitleStar.src = starImage;
    serviceTitleStar.alt = "Star Icon";
    serviceTitleStar.height = 40;
    //<h2>Come Taste the Difference</h2>
    const serviceTitleTaste = document.createElement("h2");
    serviceTitleTaste.textContent = "Come Taste the Difference";
    serviceTitle.append(serviceTitleStar, serviceTitleTaste);
    //<p>Whether you...
    const serviceDesPara1 = document.createElement("p");
    const serviceDesPara1Node = document.createTextNode("Whether you're craving a classic milk tea, a refreshing fruit blend, or a custom flavor just for you – we're here to make every drink special. Our team is ready with warm smiles and the perfect blend just for you.");
    serviceDesPara1.appendChild(serviceDesPara1Node);
    serviceDescription.appendChild(serviceDesPara1);
    homeContentBoxes.appendChild(service);

    //<div id="bottomImage">
    const bottomImage = document.createElement("div");
    bottomImage.setAttribute("id", "bottomImage");
    //<img src="images/tea-list.jpg" alt="Tea List" width="400">
    const teaListImg = document.createElement("img");
    teaListImg.src = teaImage;
    teaListImg.alt = "Tea List";
    teaListImg.width = 400;
    bottomImage.appendChild(teaListImg);
    homeContentBoxes.appendChild(bottomImage);
    content.appendChild(homeContentBoxes);
}