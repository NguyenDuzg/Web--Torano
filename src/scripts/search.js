const input = document.querySelector(".search-form input");
const suggestBox = document.querySelector(".search-suggest");

const data = [
    "Áo thun",
    "Áo polo",
    "Quần jeans",
    "Áo khoác",
    "Quần âu"
];

input.addEventListener("input", () => {
    let value = input.value.toLowerCase().trim();
    suggestBox.innerHTML = "";

    //ít hơn 2 ký tự thì không hiện
    if (value.length < 2) {
        suggestBox.style.display = "none";
        return;
    }

    let filtered = data.filter(item =>
        item.toLowerCase().includes(value)
    );

    // giới hạn 5 kết quả
    filtered = filtered.slice(0, 5);

    // không có kết quả
    if (filtered.length === 0) {
        suggestBox.innerHTML = "<div>Không tìm thấy</div>";
    }

    filtered.forEach(item => {
        let div = document.createElement("div");
        div.innerText = item;

        div.addEventListener("click", () => {
            input.value = item;
            suggestBox.style.display = "none";
        });

        suggestBox.appendChild(div);
    });

    suggestBox.style.display = "block";
});
// Xử lý submit form
document.querySelector(".search-form")
.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Tìm: " + input.value);
});

/* Ẩn gợi ý khi click ra ngoài */
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) {
        suggestBox.style.display = "none";
    }
});