const CLASS_NAME_SELECT = 'select';
const CLASS_NAME_ACTIVE = 'select_show';
const CLASS_NAME_HIDE = 'select_hide'
const SELECTOR_ACTIVE = '.select_show';
const SELECTOR_DATA = '[data-select]';
const SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';

class CustomSelect {
    constructor(target, params) {
        this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
        this._params = params || {};
        this._onClickFn = this._onClick.bind(this);
        if (this._params['options']) {
            this._elRoot.classList.add(CLASS_NAME_SELECT);
        }
        this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
        this._elRoot.addEventListener('click', this._onClickFn);
    }
    _onClick(e) {
        const target = e.target;
        const type = target.closest(SELECTOR_DATA).dataset.select;
        switch (type) {
            case 'toggle':
                this.toggle();
                break;
        }
    }
    show() {
        document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
            select.classList.remove(CLASS_NAME_ACTIVE);
            select.classList.add(CLASS_NAME_HIDE);
        });
        this._elRoot.classList.remove(CLASS_NAME_HIDE);
        this._elRoot.classList.add(CLASS_NAME_ACTIVE);
    }
    hide() {
        this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
        this._elRoot.classList.add(CLASS_NAME_HIDE);
    }
    toggle() {
        if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
            this.hide();
        } else {
            this.show();
        }
    }
}

const select1 = new CustomSelect('#about-select');
const select2 = new CustomSelect('#membership-select');
const select3 = new CustomSelect('#meetings-select');
const select4 = new CustomSelect('#resources-select');


