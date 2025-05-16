export const loadHome = function(){
    
    //Remove all children in div #element:
    const parent = document.querySelector("#content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    
    const shopName = document.createElement("h1");
    shopName.textContent = "Drink for You";
    parent.appendChild(shopName);
}

/*
<div id="content">
    <h1 id="shopName">Drink for You</h1>
    <div id="idea">
        <div class="title">
            <img src="images/star.png" alt="Star Icon" width="100">
            <h2>Philosophy</h2>
        </div>
        <div class="content">
            <p>Founded in 2025 in the heart of Taiwan, Drinks for You was born with one simple mission: to bring smiles to every customer through the perfect cup of tea.</p>
            <p>Our passion for quality and commitment to service excellence drive us every day.</p>
        </div>
    </div>
    
    <div id="ingredient">
        <div class="title">
            <img src="images/star.png" alt="Star Icon" width="100">
            <h2>Premium Ingredients</h2>
        </div>
        <div class="content">
            <p>At Drinks for You, every drink begins with the finest, 100% natural ingredients</p>
            <ul>
                <li>
                    <img src="images/tea-leaves.png" alt="Tea Leaves Icon" width="100">
                    Taiwan high-Mountain tea leaves
                </li>
                <li>
                    <img src="images/tapioca-pearls.png" alt="Tapioca Pearls Icon" width="100">
                    Tapioca pearls from Taichung
                </li>
                <li>
                    <img src="images/sugar-cane.png" alt="Sugar Cane Icon" width="100">
                    Fresh sugar cane from Tainan
                </li>
                <li>
                    <img src="images/fruit.png" alt="Fruit Icon" width="100">
                    Seasonal fruits from local farms
                </li>
            </ul>
        </div>  
    </div>
    <div id="advantage">
        <div class="title">
            <img src="images/star.png" alt="Star Icon" width="100">
            <h2>Come Taste the Difference</h2>
        </div>
        <div class="content">
            <p>Whether you're craving a classic milk tea, a refreshing fruit blend, or a custom flavor just for you – we're here to make every drink special. Our team is ready with warm smiles and the perfect blend just for you.</p>
            <p>Visit us and sip the brilliance of Taiwan – Crafted with heart. Served with joy. Rooted in tradition and globally loved.</p>
        </div> 
    </div>
    <img src="images/tea-list.jpg" alt="Tea List" width="400">
</div>
*/