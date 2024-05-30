const buttons = [...document.querySelectorAll("#tabs ul li button")];

const ACTIVE_BUTTON = () => {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) {
            return buttons[i]
        }
    }
}

buttons.forEach(val => {
    val.onclick = () => {
        if (val.classList.contains("active")) {
            return
        }else{
            ACTIVE_BUTTON().classList.remove("active")
            val.classList.add("active")
        }
    }
})