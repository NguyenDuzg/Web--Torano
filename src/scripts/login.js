const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function showLogin() {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");
}

function showRegister() {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");

    registerTab.classList.add("active");
    loginTab.classList.remove("active");
}

loginTab.onclick = showLogin;
registerTab.onclick = showRegister;

/* click chữ chuyển */
document.querySelectorAll(".switch").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.target === "register") {
            showRegister();
        } else {
            showLogin();
        }
    });
});

// xử lý đăng nhập

loginForm.addEventListener("submit", function(e){

    // chặn reload trang
    e.preventDefault();

    // lấy dữ liệu input
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // kiểm tra
    if(email !== "" && password !== ""){

        alert("Đăng nhập thành công");

        // chuyển hướng
        window.location.href = "/index.html";

    }else{

        alert("Vui lòng nhập đầy đủ thông tin");

    }

});

// xử lý đăng ký
registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    if(email !== "" && password !== ""){

        alert("Đăng ký thành công");

        // chuyển sang tab login
        showLogin();

    }else{

        alert("Vui lòng nhập đầy đủ thông tin");

    }

});