export const loadAbout = function(){

    //Remove all children in div #element:
    const content = document.querySelector("#content");
    clearParent(content);

    //<h1 id="about">Menu</h1>
    const aboutName = document.createElement("h1");
    aboutName.textContent = "About";
    content.appendChild(aboutName);
}

const clearParent = function(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*

<div id="about">
    <h1>About Us</h1>

    <div id="location">
        <h2>Our Location</h2>
        <p>We’re located right in the heart of Taipei, inside the iconic:</p>
        <div id="address">
            <h3>Taipei 101 Mall – B1 Floor</h3>
            <p>No. 45, Shifu Rd., Xinyi District, Taipei City 110, Taiwan</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.022286232128!2d121.56244487441974!3d25.033317738320733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6dddd2247%3A0x17d14b3a448e4b83!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5biC5bqc6LevNDXomZ8!5e0!3m2!1szh-TW!2stw!4v1747455052735!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>(Just steps away from Taipei 101/World Trade Center MRT Station – Exit 4)</p>
        </div>
        <p>Come sip your favorite drink with a skyline view!</p>
    </div>

    <div id="contact">
        <h2>Contact Us</h2>
        <p>Got questions, feedback, or just want to say hi?</p>
        <p>We’d love to hear from you!</p>
        <ul>
            <li><strong>Phone:</strong> +886-2-8780-2563</li>
            <li><strong>Email:</strong> hello@drinksforyou.com</li>
            <li><strong>Hours:</strong> Daily, 11:00 AM – 10:00 PM</li>
        </ul>
    </div>

    <div id="message">
        <h2>We’re Here for You</h2>
        <p>At Drinks for You, we don’t just make drinks — we create moments. Whether you're a local tea lover or a curious traveler, our team is always ready with a warm welcome and your perfect drink.</p>
        <p>Drinks for You – From Taiwan, With Heart.</p>
    </div>
</div>

*/
