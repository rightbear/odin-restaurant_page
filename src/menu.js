export const loadMenu = function(){
    
    //Remove all children in div #element:
    const content = document.querySelector("#content");
    clearParent(content);

    const menuName = document.createElement("h1");
    menuName.textContent = "Menu";
    content.appendChild(menuName);
}


const clearParent = function(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


/*
<div id="content">
    <h1 id="menu">Menu</h1>

    <div id="beverages>
        <h2>Beverages</h2>
        <p>Crafted with premium ingredients. Inspired by Taiwan’s rich tea culture.</p>
    </div>
    

    <div id="beverageList">
        <div id="beverage1">
            <h3>1. Classic Pearl Milk Tea</h3>
            <div class="price"> – $4.50</div>
            <div class="mainIngred">Alishan black tea, fresh milk, brown sugar syrup, tapioca pearls</div>
            <p>Our signature drink! Smooth black tea paired with creamy milk and chewy pearls made fresh daily. A timeless favorite, perfected.</p>
        </div>
        <div id="beverage2>
            <h3>2. Peach Oolong Fruit Tea</h3>
            <div class="price"> – $4.80</div>
            <div class="mainIngred">Alishan oolong tea, fresh peach puree, peach slices, cane sugar, ice</div>
            <p>Refreshing and fragrant, made with ripe peaches and high-mountain oolong. Naturally sweet and floral.</p>
        </div>
        <div id="beverage3">
            <h3>3. Strawberry Green Tea Latte</h3>
            <div class="price"> – $5.00</div>
            <div class="mainIngred">Sun Moon Lake green tea, fresh strawberries, milk, raw cane sugar</div>
            <p>A creamy, fruity blend of fresh strawberries and smooth green tea. Real fruit, no syrup.</p>
        </div>
        <div id="beverage4">
            <h3>4. Matcha Red Bean Milk Tea</h3>
            <div class="price"> – $5.20</div>
            <div class="mainIngred">Uji matcha (imported), fresh milk, sweet red beans, raw sugar</div>
            <p>Earthy matcha paired with soft red beans and milk for a rich, balanced treat.</p>
        </div>
        <div id="beverage5">
            <h3>5. Lemon Green Tea Sparkler</h3>
            <div class="price"> – $4.20</div>
            <div class="mainIngred">Jasmine green tea, fresh lemon juice, soda water, cane sugar</div>
            <p>Zesty, crisp, and lightly fizzy – the ultimate citrus refreshment.</p>
        </div>
        <div id="beverage6">
            <h3>6. Mango Coconut Smoothie</h3>
            <div class="price"> – $5.50</div>
            <div class="mainIngred">Yujing mango, coconut milk, ice, natural sweetener</div>
            <p>A tropical delight made with fresh mangoes and creamy coconut. Dairy-free and dreamy.</p>
        </div>
        <div id="beverage7">
            <h3>7. Winter Melon Basil Seed Tea</h3>
            <div class="price"> – $4.00</div>
            <div class="mainIngred">Winter melon syrup (homemade), filtered water, basil seeds</div>
            <p>A traditional favorite with a fun texture twist. Hydrating and subtly sweet.</p>
        </div>
        <div id="beverage8">
            <h3>8. Brown Sugar Milk with Grass Jelly</h3>
            <div class="price"> – $4.80/div>
            <div class="mainIngred">Fresh milk, brown sugar syrup, handmade grass jelly</div>
            <p>No tea, just creamy milk layered with rich brown sugar and smooth herbal jelly. Perfect for non-caffeine lovers.</p>
        </div>
    </div>
</div>
*/