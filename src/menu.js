import beverage1 from "./images/beverage1.jpg"
import beverage2 from "./images/beverage2.jpg"
import beverage3 from "./images/beverage3.jpg"
import beverage4 from "./images/beverage4.jpg"
import beverage5 from "./images/beverage5.jpg"
import beverage6 from "./images/beverage6.jpg"
import beverage7 from "./images/beverage7.jpg"
import beverage8 from "./images/beverage8.jpg"


export const loadMenu = function(content){
    //<h1 id="menu">Menu</h1>
    const menuName = document.createElement("h1");
    menuName.textContent = "Menu";
    content.appendChild(menuName);

    //The introduction of the menu
    //<div id="beverages>
    const beverages = document.createElement("div");
    beverages.setAttribute("id", "beverages");
    //<h2>Beverages</h2>
    const beveragesH2 = document.createElement("h2");
    beveragesH2.textContent = "Our Beverages";
    //<p>Crafted with...
    const beveragesPara = document.createElement("p");
    const beveragesParaNode = document.createTextNode("Crafted with premium ingredients. Inspired by Taiwan’s rich tea culture.");
    beveragesPara.appendChild(beveragesParaNode);
    beverages.append(beveragesH2, beveragesPara);
    content.appendChild(beverages);

    //Information of all goods on the menu
    //<div id="beverageList">
    const beverageList = document.createElement("div");
    beverageList.setAttribute("id", "beverageList");

    //<div id="beverage1">
    beverageList.append(addBeverage(1, "1. Classic Pearl Milk Tea", beverage1, " – $4.50",
                "Alishan black tea, fresh milk, brown sugar syrup, tapioca pearls",
                "Our signature drink! Smooth black tea paired with creamy milk and chewy pearls made fresh daily. A timeless favorite, perfected."
    ));
    
    //<div id="beverage2">
    beverageList.append(addBeverage(2, "2. Peach Oolong Fruit Tea", beverage2, " – $4.80",
                "Alishan oolong tea, fresh peach puree, peach slices, cane sugar, ice",
                "Refreshing and fragrant, made with ripe peaches and high-mountain oolong. Naturally sweet and floral."
    ));

    //<div id="beverage3">
    beverageList.append(addBeverage(3, "3. Strawberry Green Tea Latte", beverage3, " – $5.00",
                "Sun Moon Lake green tea, fresh strawberries, milk, raw cane sugar",
                "A creamy, fruity blend of fresh strawberries and smooth green tea. Real fruit, no syrup."
    ));

    //<div id="beverage4">
    beverageList.append(addBeverage(4, "4. Matcha Red Bean Milk Tea", beverage4, " – $5.20",
                "Uji matcha (imported), fresh milk, sweet red beans, raw sugar",
                "Earthy matcha paired with soft red beans and milk for a rich, balanced treat."
    ));

    //<div id="beverage5">
    beverageList.append(addBeverage(5, "5. Lemon Green Tea Sparkler", beverage5, " – $4.20",
                "Yujing mango, coconut milk, ice, natural sweetener",
                "Zesty, crisp, and lightly fizzy – the ultimate citrus refreshment."
    ));

    //<div id="beverage6">
    beverageList.append(addBeverage(6, "6. Mango Coconut Smoothie", beverage6, " – $5.50",
                "Yujing mango, coconut milk, ice, natural sweetener",
                "A tropical delight made with fresh mangoes and creamy coconut. Dairy-free and dreamy."
    ));

    //<div id="beverage7">
    beverageList.append(addBeverage(7, "7. Winter Melon Basil Seed Tea", beverage7, " – $4.00",
                "Winter melon syrup (homemade), filtered water, basil seeds",
                "A traditional favorite with a fun texture twist. Hydrating and subtly sweet."
    ));

    //<div id="beverage8">
    beverageList.append(addBeverage(8, "8. Brown Sugar Milk with Grass Jelly", beverage8, " – $4.80",
                "Fresh milk, brown sugar syrup, handmade grass jelly",
                "No tea, just creamy milk layered with rich brown sugar and smooth herbal jelly. Perfect for non-caffeine lovers."
    ));
    
    content.appendChild(beverageList);
}

/*  Example:
    <div id="beverage1">
            <h3>1. Classic Pearl Milk Tea</h3>
            <img src="images/beverage1.jpg" alt="Beverage 1" height="100">
            <div class="price"> – $4.50</div>
            <div class="mainIngred">Alis...</div>
            <p>Our signature drink...</p>
    </div>
*/
function addBeverage(number, name, image,  price, ingredients, description){
    const beverage = document.createElement("div");
    beverage.dataset.beverage = number;
    const beverageName = document.createElement("h3");
    beverageName.textContent = name;

    const beverageImg = document.createElement("img");
    beverageImg.src = image;
    beverageImg.alt = `Beverage ${number}`;
    beverageImg.height = 300;

    const beveragePrice = document.createElement("div");
    beveragePrice.classList.add("price");
    beveragePrice.innerHTML = price;
    const beverageIngred = document.createElement("div");
    beverageIngred.classList.add("mainIngred");
    beverageIngred.innerHTML = "<strong>Ingredients<strong>: ";
    beverageIngred.innerHTML += ingredients;
    const beveragePara = document.createElement("p");
    const beverageParaNode = document.createTextNode(description);
    beveragePara.appendChild(beverageParaNode);
    beverage.append(beverageName, beverageImg, beveragePrice, beverageIngred, beveragePara);
    return beverage;
}