class MobileMenu{
    constructor(){
    // 空のオブジェクトを作成
      this.DOM={};
      this.DOM.btn=document.querySelector('.mobile-menu__btn');
      this.DOM.container=document.querySelector('#global-container');
      this.eventType= this._getEventType();
      this._addEvent();
      // this.DOM.btn.addEventListener('click',this._toggle.bind(this));
    }
    _getEventType(){
      const isTouchCapable =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;

      return window.ontouchstart ? 'touchstart' : 'click';
    }
    _toggle(){
        this.DOM.container.classList.toggle('menu-open');
      }
    _addEvent(){
          this.DOM.btn.addEventListener(this.eventType,this._toggle.bind(this))
      }
}
new MobileMenu();