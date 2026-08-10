validateForm();
function validateForm() {
    const paymentBtn = document.querySelector('.pay-ct-right-payment button');
    paymentBtn.addEventListener('click', (e) => {
        const inputs = document.querySelectorAll('.deliverry-content-left-input-top-item input, .deliverry-content-left-input-bottom input');
        let check = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "1px solid red";
                check = false;
            } else {
                input.style.border = "1px solid #dddddd";
            }
        });

        if (!check) {
            alert("Bạn chưa nhập đủ thông tin giao hàng!");
        } else {
            window.location.href = "thanhtoan.html";
        }
    });
}