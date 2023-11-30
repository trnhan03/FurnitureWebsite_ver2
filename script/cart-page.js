//get product from localStorage
function getProducts() {
    document.getElementsByClassName('cart-products')[0].innerHTML='';
    if(localStorage.length==0 || JSON.parse(localStorage.getItem('products')).length==0) {
        document.getElementsByClassName('cart-products')[0].innerHTML+='<div style="font-size: 48px;text-align: center;padding: 75px 0px;">Empty</div>'
    }
    else {
        let total=0;
        document.getElementsByClassName('cart-products')[0].innerHTML+=`
                <div class="cart-headings">
                    <div class="product-detail-heading">Product</div>
                    <div class="product-total-headings">
                        <div class="product-price-heading">Price</div>
                        <div class="product-quantity-heading">Quantity</div>
                        <div class="product-total-heading">Total</div>
                    </div>
                </div>
        `
        let products=JSON.parse(localStorage.getItem("products"));
        products.forEach(product => {
            total+=product.producttotal;
            document.getElementsByClassName('cart-products')[0].innerHTML+=`
            <div class="cart-product">
                            <div class="product-detail">
                                <img src=${product.img} alt="" class="product-image">
                                <div>
                                    <p class="product-name">${product.productname}</p>
                                    <button onclick="removeProduct(this)"><p class="product-status">Remove</p></button>
                                </div>
                            </div>

                            <div class="product-total">
                                <div class="product-price">${product.productprice}</div>
                                <div class="product-quantity">${product.productquan}</div>
                                <div class="product-total-price">$${product.producttotal}</div>
                            </div>
            </div>`
        })
        
        document.getElementsByClassName('cart-products')[0].innerHTML+=`
        <div class="cart-sub-total">
                        <div class="sub-total">
                            <div class="sub-total-title">Sub-total</div>
                            <div class="sub-total-price">$${total}</div>
                            <div class="sub-total-note">Tax and shipping will be calculated later</div>
                        </div>

                        <div class="check-out-button" >
                            <button onclick="goTo('billing-detail-page.html')"><span></span>Check-out</button>
                        </div>
        </div>
        `
    }
    console.log(JSON.parse(localStorage.getItem('products')).length)
}
window.onload = function()
{
    getProducts()
};
function removeProduct(curr) {
    products=[];
    products=JSON.parse(localStorage.getItem("products"))
    products=products.filter(product=>product.img!=curr.parentElement.parentElement.children[0].src);
    localStorage.setItem('products',JSON.stringify(products))
    getProducts();
} 
