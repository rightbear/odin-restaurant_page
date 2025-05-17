import pinImage from "./images/pin.png";
import cocktailImage from "./images/cocktail.png";
import heartImage from "./images/heart.png";

export const loadAbout = function(content){
    //<h1>About Us</h1>
    const aboutName = document.createElement("h1");
    aboutName.textContent = "About Us";
    content.appendChild(aboutName);

    //The location of the drink shop
    //<div id="location">
    const location = document.createElement("div");
    location.setAttribute("id", "location");
    //<div class="title">
    const locationTitle = document.createElement("div");
    locationTitle.classList.add("title");
    //<div class="description">
    const locationDescription = document.createElement("div");
    locationDescription.classList.add("description");
    location.append(locationTitle, locationDescription);
    //<img src="images/pin.png" alt="Pin Icon" height="40">
    const locationitleImg = document.createElement("img");
    locationitleImg.src = pinImage;
    locationitleImg.alt = "Pin Icon";
    locationitleImg.height = 40;
    //<h2>Our Location</h2>
    const locationH2 = document.createElement("h2");
    locationH2.textContent = "Our Location";
    locationTitle.append(locationitleImg, locationH2);
    //<p>We’re located...
    const locationPara1 = document.createElement("p");
    const locationPara1Node = document.createTextNode("We’re located right in the heart of Taipei, inside the iconic:");
    locationPara1.appendChild(locationPara1Node);
    //<div id="address">
    const address = document.createElement("div");
    address.setAttribute("id", "address");
    //<h3>Taipei 101 Mall – B1 Floor</h3>
    const addressH3 = document.createElement("h3");
    addressH3.textContent = "Taipei 101 Mall – B1 Floor";
    //<p>No. 45, Shifu...
    const addressPara1 = document.createElement("p");
    const addressPara1Node = document.createTextNode("No. 45, Shifu Rd., Xinyi District, Taipei City 110, Taiwan");
    addressPara1.appendChild(addressPara1Node);
    //<iframe src="https://www.google.com...
    const addressMap = document.createElement("iframe");
    addressMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.022286232128!2d121.56244487441974!3d25.033317738320733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6dddd2247%3A0x17d14b3a448e4b83!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5biC5bqc6LevNDXomZ8!5e0!3m2!1szh-TW!2stw!4v1747455052735!5m2!1szh-TW!2stw";
    addressMap.width = 300;
    addressMap.height = 250;
    addressMap.allowfullscreen = "";
    addressMap.loading = "lazy";
    addressMap.referrerPolicy = "no-referrer-when-downgrade";
    //<p>(Just steps...
    const addressPara2 = document.createElement("p");
    const addressPara2Node = document.createTextNode("(Just steps away from Taipei 101/World Trade Center MRT Station – Exit 4)");
    addressPara2.appendChild(addressPara2Node);
    address.append(addressH3, addressPara1, addressMap, addressPara2);
    //<p>Come sip your favorite...
    const locationPara2 = document.createElement("p");
    const locationPara2Node = document.createTextNode("Come sip your favorite drink with a skyline view!");
    locationPara2.appendChild(locationPara2Node);
    locationDescription.append(locationPara1, address, locationPara2);
    content.appendChild(location);

    //The contact information of the drink shop
    //<div id="contact"></div>
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    //<div class="title">
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("title");
    //<div class="description">
    const contactDescription = document.createElement("div");
    contactDescription.classList.add("description");
    contact.append(contactTitle, contactDescription);
    //<img src="images/cocktail.png" alt="Cocktail Icon" height="40">
    const constTitleImg = document.createElement("img");
    constTitleImg.src = cocktailImage;
    constTitleImg.alt = "Cocktail Icon";
    constTitleImg.height = 40;
    //<h2>Our Location</h2>
    const contactH2 = document.createElement("h2");
    contactH2.textContent = "Contact Us";
    contactTitle.append(constTitleImg, contactH2);
    //<p>Got questions...
    const contactPara1 = document.createElement("p");
    const contactPara1Node = document.createTextNode("Got questions, feedback, or just want to say hi?");
    contactPara1.appendChild(contactPara1Node);
    //<p>We’d love to...
    const contactPara2 = document.createElement("p");
    const contactPara2Node = document.createTextNode("We’d love to hear from you!");
    contactPara2.appendChild(contactPara2Node);
    //<ul>
    const contactUl = document.createElement("ul");
    //<li>Phone: +886-2-8780-2563
    const contactLi1 = document.createElement("li");
    contactLi1.innerHTML = "<strong>Phone:</strong> +886-2-8780-2563";
    //<li>Email: hello@drinksforyou.com
    const contactLi2= document.createElement("li");
    contactLi2.innerHTML = "<strong>Email:</strong> hello@drinksforyou.com";
    //<li>Hours: Daily, 11:00 AM – 10:00 PM
    const contactLi3 = document.createElement("li");
    contactLi3.innerHTML = "<strong>Hours:</strong> Daily, 11:00 AM – 10:00 PM";
    contactUl.append(contactLi1, contactLi2, contactLi3);
    contactDescription.append(contactPara1, contactPara2, contactUl);
    content.appendChild(contact);

    //The messgae left for customers
    //<div id="message">
    const message = document.createElement("div");
    message.setAttribute("id", "message");
    //<div class="title">
    const messageTitle = document.createElement("div");
    messageTitle.classList.add("title");
    //<div class="description">
    const messageDescription = document.createElement("div");
    messageDescription.classList.add("description");
    message.append(messageTitle, messageDescription);
    //<img src="images/heart.png" alt="Heart Icon" height="40">
    const messageitleImg = document.createElement("img");
    messageitleImg.src = heartImage;
    messageitleImg.alt = "Pin Icon";
    messageitleImg.height = 40;
    //<h2>We’re Here for You</h2>
    const messageH2 = document.createElement("h2");
    messageH2.textContent = "We’re Here for You";
    messageTitle.append(messageitleImg, messageH2);
    //<p>At Drinks for You, we don’t...
    const messagePara = document.createElement("p");
    const messageParaNode = document.createTextNode("At Drinks for You, we don’t just make drinks — we create moments. Whether you're a local tea lover or a curious traveler, our team is always ready with a warm welcome and your perfect drink.");
    messagePara.appendChild(messageParaNode);
    messageDescription.appendChild(messagePara);
    content.appendChild(message);
}