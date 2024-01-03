// SLIDER ///


let nextBtn = document.getElementById("next_btn");
let prevBtn = document.getElementById("prev_btn");
let sliders = document.getElementsByClassName("slider");



let slider_no = 1;
let nextProcess = () => {
    document.getElementById('slider_image' + slider_no).classList.remove("active")

    slider_no++

    if (slider_no > sliders.length) {
        slider_no = 1
    }

    document.getElementById('slider_image' + slider_no).classList.add("active")

}

let prevProcess = () => {
    document.getElementById('slider_image' + slider_no).classList.remove("active")

    slider_no--

    if (slider_no < 1) {
        slider_no = sliders.length
    }

    document.getElementById('slider_image' + slider_no).classList.add("active")

}


// nextBtn.onclick = nextProcess;
nextBtn.addEventListener('click', nextProcess)
prevBtn.addEventListener('click', prevProcess)

setInterval(nextProcess, 4000)

// product filter//

let allBtn = document.getElementById("all-btn")
let clothBtn = document.getElementById("cloth-btn")
let shoeBtn = document.getElementById("shoe-btn")
let watchBtn = document.getElementById("watch-btn");

let all_cards = document.getElementsByClassName("pcard")
let cloth_cards = document.getElementsByClassName("cloth");
let shoe_cards = document.getElementsByClassName("shoe");
let watch_cards = document.getElementsByClassName("watch");

let clothHide = () => {
    for (let cloth_card of cloth_cards) {
        cloth_card.style.display = "none"
    };
}

let shoeHide = () => {
    for (let shoe_card of shoe_cards) {
        shoe_card.style.display = "none"
    };
}

let watchHide = () => {
    for (let watch_card of watch_cards) {
        watch_card.style.display = "none"
    }
}

allBtn.addEventListener('click', () => {
    for (let all_card of all_cards) {
        all_card.style.display = "block"
    }

    allBtn.classList.add("active")
    clothBtn.classList.remove("active");
    shoeBtn.classList.remove("active")
    watchBtn.classList.remove("active")
})

clothBtn.addEventListener('click', () => {

    for (let cloth_card of cloth_cards) {
        cloth_card.style.display = "block"
    };
    shoeHide();
    watchHide();

    clothBtn.classList.add("active")
    allBtn.classList.remove("active");
    shoeBtn.classList.remove("active")
    watchBtn.classList.remove("active")

})


shoeBtn.addEventListener('click', () => {

    for (let shoe_card of shoe_cards) {
        shoe_card.style.display = "block"
    };
    clothHide();
    watchHide();
    shoeBtn.classList.add("active")
    allBtn.classList.remove("active");
    clothBtn.classList.remove("active")
    watchBtn.classList.remove("active")
})

watchBtn.addEventListener('click', () => {

    for (let watch_card of watch_cards) {
        watch_card.style.display = "block"
    }

    clothHide();
    shoeHide();
    watchBtn.classList.add("active")
    allBtn.classList.remove("active");
    shoeBtn.classList.remove("active")
    clothBtn.classList.remove("active")
})

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax ;
//         return total;
//     }
// }

// console.log(bill([10,20,35], 0.2));