let stars = document.querySelectorAll(".stars i");

let msg = document.querySelector("#msg");

stars.forEach((star, index1) => {

    star.addEventListener("click", () => {

        
        stars.forEach((star, index2) => {
            if (index1 >= index2) {
                star.classList.add("color-star");
                msg.innerHTML = "Thank You "
            } else {
                star.classList.remove("color-star")
            }
        })
    })
})