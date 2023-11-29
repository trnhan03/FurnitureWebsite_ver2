







// Check email
var isEmailFilled = false; // Trạng thái nhập liệu email
function checkEmail() {
    var email = document.getElementById('email').value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailMessage = document.getElementById('email-message');
    
    if (isEmailFilled) { // Kiểm tra trạng thái nhập liệu email
    if (pattern.test(email) && email.endsWith('@gmail.com')) {
        emailMessage.textContent = 'Valid Email!';
        emailMessage.style.color = 'green';
    } else {
        emailMessage.textContent = 'Invalid Email!';
        emailMessage.style.color = 'red';
    }
    } else {
    emailMessage.textContent = ''; // Xóa nội dung thông báo
    }
}
function onEmailInput() {
isEmailFilled = document.getElementById('email').value.trim() !== ''; // Cập nhật trạng thái nhập liệu email
checkEmail();
}
// Check phone numbers
var isSdtFilled = false; // Trạng thái nhập liệu số điện thoại
function CheckPhoneNumbers() {
    var phoneNumbers = document.getElementById('numbers').value;
    var messageElement = document.getElementById('numbers-message');

    // Xóa khoảng trắng ở đầu và cuối số điện thoại
    phoneNumbers = phoneNumbers.trim();
    
    if (isSdtFilled) { // Kiểm tra trạng thái nhập liệu số điện thoại
    if (phoneNumbers.length === 10 && phoneNumbers.startsWith('0')) {
        messageElement.textContent = 'Valid phone number!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid phone number!';
        messageElement.style.color = 'red';
    }
    } else {
    messageElement.textContent = ''; // Xóa nội dung thông báo
    }
}
function onPhoneNumberInput() {
    isSdtFilled = document.getElementById('numbers').value.trim() !== ''; // Cập nhật trạng thái nhập liệu số điện thoại
    CheckPhoneNumbers();
}

// function CheckSectionDisplay(num) {
//     var array = ['home-page', 'products-page', 'product-detail-page', 'about-us-page', 'cart-page', 'billing-detail-page', 'shop-all'];
    
//     for (var i = 0; i < array.length; i++) {
//         if (i === num) {
//             if(num==4) { getProducts()};
//            document.getElementById(array[i]).style.display = 'none';
//              document.getElementById(array[i]).style.display = 'block';
//             document.getElementById(array[i]).scrollIntoView({ behavior: 'smooth', block: 'start' });
//         } else {
//         }
//     }
// }

// Hide all sections except for homepage section

// window.addEventListener('load', function() {
//     var sections = document.getElementsByTagName('section');
//     for (var i = 0; i < sections.length; i++) {
//         if (sections[i].id !== 'home-page') {
//             sections[i].style.display = 'none';
//         }
//     }
// });


// Add products 
function addProduct(productlist){
    var newProduct = document.createElement("div");
    newProduct.classList.add("product-1");
    newProduct.addEventListener("click", function(e){
        CheckSectionDisplay(2);
    });
    // Tạo phần tử img
    var img_Product = document.createElement("img");
    img_Product.src = productlist.image;
    img_Product.alt = productlist.name;
    img_Product.classList.add("product-img");

    // Tạo phần tử div mới cho product-intro
    var productIntro = document.createElement("div");
    productIntro.classList.add("product-intro");

    // Tạo phần tử p cho product name
    var productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.textContent = productlist.name;

    // Tạo phần tử p cho product cost
    var productCost = document.createElement("p");
    productCost.classList.add("product-cost");
    productCost.textContent ="$"+productlist.price;

    // Gắn các phần tử con vào phần tử cha
    productIntro.appendChild(productName);
    productIntro.appendChild(productCost);
    newProduct.appendChild(img_Product);
    newProduct.appendChild(productIntro);

    // Tìm phần tử cha có lớp "product-bed"
    var productBed = document.querySelector(".product-bed");

    // Thêm phần tử mới vào phần tử cha
    if (productBed) {
    productBed.appendChild(newProduct);
    } else {
    console.error("Element with class 'product-bed' not found.");
    }
}
// Demo data
const productList = {
    "1": { "name": 'Product A', "image": './assets/Furniture_Photos/Products_Photos/P0004/1.webp', "price": 1.223},
    "2": { "name": 'Product B', "image": './assets/Furniture_Photos/Products_Photos/P0005/1.webp', "price": 3.111 },
    "3": { "name": 'Product C', "image": './assets/Furniture_Photos/Products_Photos/P0006/1.webp', "price": 2.509 },
    /// n products
};
document.addEventListener("DOMContentLoaded", function() {
    // Gọi hàm addProductToBed trong sự kiện "DOMContentLoaded"
   for (let key in productList) {
       if (productList.hasOwnProperty(key)) {
         const product = productList[key];
         addProduct(product);
       }
     }
 });

 
