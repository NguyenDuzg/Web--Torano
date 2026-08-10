/*-------------------Mã giảm giá-------------------*/
const couponBtn = document.querySelectorAll('.pay-ct-right-button button')[0];
const couponInput = document.querySelectorAll('.pay-ct-right-button input')[0];

couponBtn.addEventListener('click', () => {
    if (couponInput.value === "GIAM10%") {
        alert("Áp dụng mã giảm giá thành công! Bạn được giảm 10%.");
    } else if (couponInput.value === "") {
        alert("Vui lòng nhập mã!");
    } else {
        alert("Mã giảm giá không tồn tại.");
    }
});
/*-------------------Thanh toán-------------------*/
const btnPayment = document.querySelector('.pay-ct-right-payment button');
const paymentRadios = document.querySelectorAll('input[name="payment"]');

btnPayment.addEventListener('click', () => {
    let isChecked = false;
    paymentRadios.forEach(radio => {
        if (radio.checked) isChecked = true;
    });

    if (!isChecked) {
        alert("Vui lòng chọn một phương thức thanh toán!");
    } else {
        window.location.href = "/pages/end_thanhtoan.html";
    }
});


window.onload = function() {
    const bankBox = document.getElementById('bank-info-box');
    const atmRadio = document.getElementById('payment-atm');
    const allRadios = document.querySelectorAll('input[name="payment"]');
    const btnPayment = document.querySelector('.pay-ct-right-payment button');
}

