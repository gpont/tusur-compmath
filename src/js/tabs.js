export default class TabsManager {
    constructor() {
        document.addEventListener("DOMContentLoaded", this.setEvents.bind(this));
    }

    setEvents() {
        document.querySelectorAll(".tabs li").forEach(
            (el) => el.addEventListener("click", this.tabToggle.bind(this, el))
        );
    }

    tabToggle(el) {
        let lastEl = document.querySelector(".tabs li.active");
        lastEl.classList.remove("active");
        document.querySelector(`#${lastEl.getAttribute('rel')}`).classList.remove("active");
        el.classList.add("active");
        document.querySelector(`#${el.getAttribute('rel')}`).classList.add("active");
    }
}
