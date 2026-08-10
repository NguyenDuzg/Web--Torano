

// --- 1. Thay đổi ảnh lớn khi click vào ảnh nhỏ ---
const bigImg = document.querySelector(".products-content-left-big-img img");
const smallImg = document.querySelectorAll(".products-content-left-small-img img");

smallImg.forEach((imgItem) => {
    imgItem.addEventListener("click", () => {
        bigImg.src = imgItem.src;
    });
});

// 1. Logic chọn Màu & Size (Giữ nguyên)
const setupButtons = (selector) => {
    document.querySelectorAll(selector).forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(selector).forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        };
    });
};
setupButtons(".color-options button");
setupButtons(".size-options button");

// 2. Click Thêm vào giỏ (Cập nhật lấy Giá và Số lượng)
document.querySelector(".btn-add-to-cart").onclick = () => {
    const mau = document.querySelector(".color-options button.active")?.innerText;
    const size = document.querySelector(".size-options button.active")?.innerText;

    if (!mau || !size) return alert("Vui lòng chọn Màu sắc và Kích thước!");

    // Lấy thông tin từ HTML
    const ten = document.querySelector(".products-content-right-name p").innerText;
    const gia = document.querySelector(".products-content-right-price span").innerText;
    const anh = document.querySelector(".products-content-left-big-img img").src;
    const sl = document.querySelector(".quantity-controls input").value;

    // Cập nhật icon số lượng (hiển thị tổng số lượng vừa thêm)
    document.getElementById("cart-count").innerText = sl;

    // Đổ dữ liệu vào Mini Cart
    document.getElementById("cart-items-list").innerHTML = `
        <li style="display:flex; align-items:center; gap:10px; padding:10px; border-bottom:1px solid #eee">
            <img src="${anh}" width="50" style="border-radius:4px">
            <div style="font-size:12px; line-height:1.4">
                <p style="margin:0; font-weight:bold">${ten}</p>
                <p style="margin:0; color:#666">${mau} / ${size}</p>
                <p style="margin:0; color:red">${gia} x ${sl}</p>
            </div>
        </li>
    `;

    alert("Đã thêm vào giỏ hàng!");
};

// 3. Tăng giảm số lượng (Giữ nguyên)
document.querySelector(".increase").onclick = () => document.querySelector(".quantity-controls input").value++;
document.querySelector(".decrease").onclick = () => {
    let input = document.querySelector(".quantity-controls input");
    if (input.value > 1) input.value--;
};