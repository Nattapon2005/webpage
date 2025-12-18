
const OpenCartPrice = document.getElementById("OpenCartPrice");
const CloseCart_01 = document.getElementById("CloseCart_01");
const CloseCart_02 = document.getElementById("CloseCart_02");
const navCart = document.getElementById("nav-cart-price");

OpenCartPrice.addEventListener("click", () => {
    navCart.style.display = "flex";
})

CloseCart_01.addEventListener("click", () => {
    navCart.style.display = "none";
})

CloseCart_02.addEventListener("click", () => {
    navCart.style.display = "none";
})

/*
function OpenCart() {
    $(".nav-cart").css('display' , 'flex');
}

function Close() {
    $(".nav-cart").css('display', 'none');
}
*/

const menuOpen = document.getElementById("menuOpen");
const menuList = document.getElementById("menuList");
const menuListCon = document.getElementById("menuListCon");
const menuClose = document.getElementById("menuClose");
const menuBgClose = document.getElementById("menuBgClose");

menuOpen.addEventListener("click", () => {
    menuList.style.display = "flex";
})

menuOpen.addEventListener("click", () => {
    menuListCon.style.display = "flex";
})

menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "flex";
    menuBgClose.style.display = "flex";
})

menuClose.addEventListener("click", () => {
    menuClose.style.display = "none";
    menuOpen.style.display = "flex";
    menuBgClose.style.display = "none";
})

menuClose.addEventListener("click", () => {
    menuList.style.display = "none";
})

menuClose.addEventListener("click", () => {
    menuListCon.style.display = "none";
})



/*
let menulist = document.getElementById("menuList");
menulist.style.maxHeight = "0px";
function toddleMenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "100%";

    }
    else {
        menulist.style.maxHeight = "0px";
    }
}
*/

  function increaseQuantity(button) {
    // ค้นหา input ที่อยู่ใน div เดียวกันกับปุ่มที่ถูกกด
    let quantityField = button.previousElementSibling;
    let quantity = parseInt(quantityField.value);

    // เพิ่มจำนวนสินค้า
    quantity++;
    quantityField.value = quantity;

    document.getElementById("price").textContent = quantity;

    // ตรวจสอบว่าเป็นค่าที่ถูกต้องหรือไม่
    if (quantity > 0) {
      console.log("Added " + quantity + " items of product " + productId + " to cart.");
    } else {
      alert("Please enter a valid quantity.");
    }
  }