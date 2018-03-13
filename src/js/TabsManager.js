class TabsManager {
  constructor() {
    document.addEventListener('DOMContentLoaded', this.setEvents.bind(this));
  }

  setEvents() {
    document.querySelectorAll('.tabs li').forEach(el => el.addEventListener('click', TabsManager.tabToggle.bind(this, el)));
  }

  static tabToggle(el) {
    const lastEl = document.querySelector('.tabs li.active');
    lastEl.classList.remove('active');
    document.querySelector(`#${lastEl.getAttribute('rel')}`).classList.remove('active');
    el.classList.add('active');
    document.querySelector(`#${el.getAttribute('rel')}`).classList.add('active');
  }
}

export default TabsManager;
