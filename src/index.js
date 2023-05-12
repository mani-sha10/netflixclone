let accordian = document.getElementsByClassName("FAQ_tittle");
for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        if (this.childNodes[1].classList.contains("fa-pluus")) {
            this.childNodes[1].classList.remove("fa_plus");
            this.childNodes[1].classList.add("fa-times");
        } else {
            this.childNodes[1].classList.remove("fa_times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}