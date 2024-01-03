let searchTag = document.querySelector(".searchTag");
let iconTag = document.querySelectorAll(".icon-list")
let btnTag = document.querySelectorAll(".search-btn")
let navBar = document.getElementById("navbar-container");
// let navBarTag = document.getElementsByClassName("navbar_container")

// SEARCH--BOX//
searchTag.addEventListener("focus", () => {
    for (let item of iconTag) {
        item.style.display = "none"
        searchTag.style.width = "200px"

    }

});
searchTag.addEventListener("blur", () => {
    for (let item of iconTag) {
        item.style.display = "block"
        searchTag.style.width = "65px"
    }

})

// NAVBAR SCROLL//
window.onscroll = function scroll() {
        if (window.pageYOffset > 100) {
            navBar.style.background = "rgba(16,16,16)"

        }
        if (window.pageYOffset == 0) {
            navBar.style.background = ""
        }
    }
    // window.onscroll = function detailScroll() {
    //         if (window.pageYOffset > 1) {
    //             navBarTag.style.background = "rgba(16,16,16)"
    //             console.log("hayy")
    //         }
    //         if (window.pageYOffset == 0) {
    //             navBarTag.style.background = ""
    //         }
    //     }
    // let navTag = document.querySelector(".navbar-menu")
    // let menuTag = document.getElementsById("humburger-menu")
    // menuTag.onclick = function toggleBtn() {
    //     navTag.classList.toggle("active");

//     if (menuTag.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
//         menuTag.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
//         // console.log(menuTag.innerHTML)
//     } else {
//         menuTag.innerHTML = `<i class="fa-solid fa-bars"></i>`;
//         // console.log(menuTag.innerHTML)
//     }

// }

// HUMBURGER MENU SHOW OFF//
let menu = document.getElementById('menu');
let navbar_menu = document.getElementById('navbar_menu');

menu.onclick = function() {

    navbar_menu.classList.toggle('active');

    if (menu.innerHTML == `<i class="fa-solid fa-xmark"></i>`) {
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
}

// let bodyTag = document.getElementsByTagName("body")[0];

// PRODUCT--DETAIL//
// let mainImage = document.getElementById("main_image");
// let imageOne = document.getElementById("image_1")
// let imageTwo = document.getElementById("image_2")
// let imageThree = document.getElementById("image_3")
// let imageFour = document.getElementById("image_4")

// imageOne.addEventListener("click", () => {
//     mainImage.setAttribute('src', imageOne.getAttribute('src'))
// })
// imageTwo.addEventListener("click", () => {
//     mainImage.setAttribute('src', imageTwo.getAttribute('src'))
// })
// imageThree.addEventListener("click", () => {
//     mainImage.setAttribute('src', imageThree.getAttribute('src'))
// })
// imageFour.addEventListener("click", () => {
//     mainImage.setAttribute('src', imageFour.getAttribute('src'))
// })



// SLIDER///