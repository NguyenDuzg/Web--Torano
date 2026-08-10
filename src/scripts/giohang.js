const quantityInputs = document.querySelectorAll(".cart-content-left input");
const removeButtons = document.querySelectorAll(".cart-content-left span");

function updateCart() {

    let totalProducts = 0;
    let totalMoney = 0;

    const rows = document.querySelectorAll(".cart-content-left table tr");

    rows.forEach((row, index) => {

        if(index !== 0){

            const quantityInput = row.querySelector("input");

            if(quantityInput){

                let quantity = parseInt(quantityInput.value);

                let priceText = row.querySelector("td:nth-child(6) p")
                .innerText.replace(/\./g,"")
                .replace("đ","")
                .replace(" ","");

                let price = parseInt(priceText);

                totalProducts += quantity;
                totalMoney += price * quantity;
            }
        }
    });

    document.querySelector(
    ".cart-content-right table tr:nth-child(2) td:last-child"
    ).innerText = totalProducts;

    const moneyText = totalMoney.toLocaleString("vi-VN") + "đ";

    document.querySelector(
    ".cart-content-right table tr:nth-child(3) td:last-child p"
    ).innerText = moneyText;

    document.querySelector(
    ".cart-content-right table tr:nth-child(4) td:last-child p"
    ).innerText = moneyText;
}

quantityInputs.forEach(input => {
    input.addEventListener("change", updateCart);
});

removeButtons.forEach(button => {
    button.addEventListener("click", function(){

        const row = button.parentElement.parentElement;

        row.remove();

        updateCart();
    });
});

updateCart();