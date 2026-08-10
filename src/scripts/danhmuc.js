const itemsliderbar = document.querySelectorAll('.category-list-li');
itemsliderbar.forEach(function (menu, index) {
    menu.addEventListener('click', function () {
        menu.classList.toggle('block');
    });
});


let cart = [];

function addCart(productName, price, imgSrc) {
    // Tìm xem sản phẩm đã có chưa
    let findItem = cart.find(item => item.name === productName);

    if (findItem) {
        findItem.quantity += 1; // Nếu có rồi thì tăng số lượng
    } else {
        cart.push({
            name: productName,
            price: price,
            image: imgSrc,
            quantity: 1
        });
    }

    renderCart(); // Cập nhật lại giao diện
    alert("Đã thêm " + productName + " vào giỏ!");
}

function renderCart() {
    const cartList = document.getElementById("cart-items-list");
    const cartCount = document.getElementById("cart-count");

    // Tính tổng số lượng
    let total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = total;

    // Xây dựng danh sách HTML
    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-cart-msg">Giỏ hàng trống</p>';
    } else {
        cartList.innerHTML = cart.map(item => `
            <li class="cart-item">
                <img src="${item.image}" alt="">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price} x ${item.quantity}</p>
                </div>
            </li>
        `).join('');
    }
}