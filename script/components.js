function addHeader() {
    document.write(`
    <header>
        <div class="header-web">
            <h2 class="logo">Furnishity.</h2>
            <div class="navigation">
                <ul class="navigation-list">
                    <li id="home" onclick="goTo('home-page.html')"><a href="#" >Home</a></li>
                    <li id="products" onclick="goTo('shop-all.html')"><a href="#">Products</a></li>
                    <li id="reviews" ><a href="#" >Reviews</a></li>
                    <li id="blog" ><a href="#" >Blog</a></li>
                    <li id="about us" onclick="goTo('about-us-page.html')"><a href="#">About us</a></li>
                </ul>
            </div>
            <div class="button-search">
                <i class="button ti-search"></i>
            </div>
            <div class="button-cart">
                <i class="button ti-shopping-cart" id = "cart" onclick="goTo('cart-page.html')"></i>
            </div>
            <div class="button-user">
                <i class="button ti-user" id = "user" ></i>
                <ul class="vsubnav">
                                <li><a href="profile-screen.html">profile</a></li>
                                <li><a href="login-screen.html">login</a></li>
                            </ul>
            </div>
        </div>
    </header>
    `
    )
}


// path=location.pathname;
// path=path.slice(path.lastIndexOf('/')+1,path.length-5);



function addFooter() {
    document.write(`
    <footer>
        <div class="footer-web">
            <div class="footer-row">
                <div class="footer-part a">
                    <h2>Furnishity</h2>
                    <p>We sell over 3000+ branded products since 2018</p>
                    <ul class="footer-a">
                        <li>
                            <a href="">
                                <i class="ti-mobile"></i>
                                0987654321
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-location-pin"></i>
                                University of Information and Technology
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-world"></i>
                                www.furnishity.com
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="footer-part b">
                    <h2>Menu</h2>
                    <ul class="footer-b">
                        <li>
                            <a href="">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="">
                                About us
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="footer-part c">
                    <h2>Stay Connected</h2>
                    <ul class="footer-a">
                        <li>
                            <a href="">
                                <i class="ti-facebook"></i>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-instagram"></i>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="ti-twitter-alt"></i>
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="footer-part d">
                    <h2>Stay Updated</h2>
                    <ul>
                        <li>
                            <a href="">Enter your email</a>
                        </li>
                        <i class="ti-check"></i>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    `)
}

// Change Header color
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-web');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



//change page
function goTo(x) {
 location.replace(x)   
}