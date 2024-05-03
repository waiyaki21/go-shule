"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/vendor"],{

/***/ "./node_modules/flowbite/lib/esm/components/accordion/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/accordion/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initAccordions: () => (/* binding */ initAccordions)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    alwaysOpen: false,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: function () { },
    onClose: function () { },
    onToggle: function () { },
};
var Accordion = /** @class */ (function () {
    function Accordion(items, options) {
        if (items === void 0) { items = []; }
        if (options === void 0) { options = Default; }
        this._items = items;
        this._options = __assign(__assign({}, Default), options);
        this._init();
    }
    Accordion.prototype._init = function () {
        var _this = this;
        if (this._items.length) {
            // show accordion item based on click
            this._items.map(function (item) {
                if (item.active) {
                    _this.open(item.id);
                }
                item.triggerEl.addEventListener('click', function () {
                    _this.toggle(item.id);
                });
            });
        }
    };
    Accordion.prototype.getItem = function (id) {
        return this._items.filter(function (item) { return item.id === id; })[0];
    };
    Accordion.prototype.open = function (id) {
        var _a, _b;
        var _this = this;
        var item = this.getItem(id);
        // don't hide other accordions if always open
        if (!this._options.alwaysOpen) {
            this._items.map(function (i) {
                var _a, _b;
                if (i !== item) {
                    (_a = i.triggerEl.classList).remove.apply(_a, _this._options.activeClasses.split(' '));
                    (_b = i.triggerEl.classList).add.apply(_b, _this._options.inactiveClasses.split(' '));
                    i.targetEl.classList.add('hidden');
                    i.triggerEl.setAttribute('aria-expanded', 'false');
                    i.active = false;
                    // rotate icon if set
                    if (i.iconEl) {
                        i.iconEl.classList.remove('rotate-180');
                    }
                }
            });
        }
        // show active item
        (_a = item.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(' '));
        (_b = item.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(' '));
        item.triggerEl.setAttribute('aria-expanded', 'true');
        item.targetEl.classList.remove('hidden');
        item.active = true;
        // rotate icon if set
        if (item.iconEl) {
            item.iconEl.classList.add('rotate-180');
        }
        // callback function
        this._options.onOpen(this, item);
    };
    Accordion.prototype.toggle = function (id) {
        var item = this.getItem(id);
        if (item.active) {
            this.close(id);
        }
        else {
            this.open(id);
        }
        // callback function
        this._options.onToggle(this, item);
    };
    Accordion.prototype.close = function (id) {
        var _a, _b;
        var item = this.getItem(id);
        (_a = item.triggerEl.classList).remove.apply(_a, this._options.activeClasses.split(' '));
        (_b = item.triggerEl.classList).add.apply(_b, this._options.inactiveClasses.split(' '));
        item.targetEl.classList.add('hidden');
        item.triggerEl.setAttribute('aria-expanded', 'false');
        item.active = false;
        // rotate icon if set
        if (item.iconEl) {
            item.iconEl.classList.remove('rotate-180');
        }
        // callback function
        this._options.onClose(this, item);
    };
    return Accordion;
}());
function initAccordions() {
    document.querySelectorAll('[data-accordion]').forEach(function ($accordionEl) {
        var alwaysOpen = $accordionEl.getAttribute('data-accordion');
        var activeClasses = $accordionEl.getAttribute('data-active-classes');
        var inactiveClasses = $accordionEl.getAttribute('data-inactive-classes');
        var items = [];
        $accordionEl
            .querySelectorAll('[data-accordion-target]')
            .forEach(function ($triggerEl) {
            // Consider only items that directly belong to $accordionEl
            // (to make nested accordions work).
            if ($triggerEl.closest('[data-accordion]') === $accordionEl) {
                var item = {
                    id: $triggerEl.getAttribute('data-accordion-target'),
                    triggerEl: $triggerEl,
                    targetEl: document.querySelector($triggerEl.getAttribute('data-accordion-target')),
                    iconEl: $triggerEl.querySelector('[data-accordion-icon]'),
                    active: $triggerEl.getAttribute('aria-expanded') === 'true'
                        ? true
                        : false,
                };
                items.push(item);
            }
        });
        new Accordion(items, {
            alwaysOpen: alwaysOpen === 'open' ? true : false,
            activeClasses: activeClasses
                ? activeClasses
                : Default.activeClasses,
            inactiveClasses: inactiveClasses
                ? inactiveClasses
                : Default.inactiveClasses,
        });
    });
}
if (typeof window !== 'undefined') {
    window.Accordion = Accordion;
    window.initAccordions = initAccordions;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/accordion/interface.js":
/*!*************************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/accordion/interface.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/accordion/types.js":
/*!*********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/accordion/types.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/carousel/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/carousel/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initCarousels: () => (/* binding */ initCarousels)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    defaultPosition: 0,
    indicators: {
        items: [],
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
    },
    interval: 3000,
    onNext: function () { },
    onPrev: function () { },
    onChange: function () { },
};
var Carousel = /** @class */ (function () {
    function Carousel(items, options) {
        if (items === void 0) { items = []; }
        if (options === void 0) { options = Default; }
        this._items = items;
        this._options = __assign(__assign(__assign({}, Default), options), { indicators: __assign(__assign({}, Default.indicators), options.indicators) });
        this._activeItem = this.getItem(this._options.defaultPosition);
        this._indicators = this._options.indicators.items;
        this._intervalDuration = this._options.interval;
        this._intervalInstance = null;
        this._init();
    }
    /**
     * initialize carousel and items based on active one
     */
    Carousel.prototype._init = function () {
        var _this = this;
        this._items.map(function (item) {
            item.el.classList.add('absolute', 'inset-0', 'transition-transform', 'transform');
        });
        // if no active item is set then first position is default
        if (this._getActiveItem()) {
            this.slideTo(this._getActiveItem().position);
        }
        else {
            this.slideTo(0);
        }
        this._indicators.map(function (indicator, position) {
            indicator.el.addEventListener('click', function () {
                _this.slideTo(position);
            });
        });
    };
    Carousel.prototype.getItem = function (position) {
        return this._items[position];
    };
    /**
     * Slide to the element based on id
     * @param {*} position
     */
    Carousel.prototype.slideTo = function (position) {
        var nextItem = this._items[position];
        var rotationItems = {
            left: nextItem.position === 0
                ? this._items[this._items.length - 1]
                : this._items[nextItem.position - 1],
            middle: nextItem,
            right: nextItem.position === this._items.length - 1
                ? this._items[0]
                : this._items[nextItem.position + 1],
        };
        this._rotate(rotationItems);
        this._setActiveItem(nextItem);
        if (this._intervalInstance) {
            this.pause();
            this.cycle();
        }
        this._options.onChange(this);
    };
    /**
     * Based on the currently active item it will go to the next position
     */
    Carousel.prototype.next = function () {
        var activeItem = this._getActiveItem();
        var nextItem = null;
        // check if last item
        if (activeItem.position === this._items.length - 1) {
            nextItem = this._items[0];
        }
        else {
            nextItem = this._items[activeItem.position + 1];
        }
        this.slideTo(nextItem.position);
        // callback function
        this._options.onNext(this);
    };
    /**
     * Based on the currently active item it will go to the previous position
     */
    Carousel.prototype.prev = function () {
        var activeItem = this._getActiveItem();
        var prevItem = null;
        // check if first item
        if (activeItem.position === 0) {
            prevItem = this._items[this._items.length - 1];
        }
        else {
            prevItem = this._items[activeItem.position - 1];
        }
        this.slideTo(prevItem.position);
        // callback function
        this._options.onPrev(this);
    };
    /**
     * This method applies the transform classes based on the left, middle, and right rotation carousel items
     * @param {*} rotationItems
     */
    Carousel.prototype._rotate = function (rotationItems) {
        // reset
        this._items.map(function (item) {
            item.el.classList.add('hidden');
        });
        // left item (previously active)
        rotationItems.left.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-20');
        rotationItems.left.el.classList.add('-translate-x-full', 'z-10');
        // currently active item
        rotationItems.middle.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-10');
        rotationItems.middle.el.classList.add('translate-x-0', 'z-20');
        // right item (upcoming active)
        rotationItems.right.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden', 'z-20');
        rotationItems.right.el.classList.add('translate-x-full', 'z-10');
    };
    /**
     * Set an interval to cycle through the carousel items
     */
    Carousel.prototype.cycle = function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            this._intervalInstance = window.setInterval(function () {
                _this.next();
            }, this._intervalDuration);
        }
    };
    /**
     * Clears the cycling interval
     */
    Carousel.prototype.pause = function () {
        clearInterval(this._intervalInstance);
    };
    /**
     * Get the currently active item
     */
    Carousel.prototype._getActiveItem = function () {
        return this._activeItem;
    };
    /**
     * Set the currently active item and data attribute
     * @param {*} position
     */
    Carousel.prototype._setActiveItem = function (item) {
        var _a, _b;
        var _this = this;
        this._activeItem = item;
        var position = item.position;
        // update the indicators if available
        if (this._indicators.length) {
            this._indicators.map(function (indicator) {
                var _a, _b;
                indicator.el.setAttribute('aria-current', 'false');
                (_a = indicator.el.classList).remove.apply(_a, _this._options.indicators.activeClasses.split(' '));
                (_b = indicator.el.classList).add.apply(_b, _this._options.indicators.inactiveClasses.split(' '));
            });
            (_a = this._indicators[position].el.classList).add.apply(_a, this._options.indicators.activeClasses.split(' '));
            (_b = this._indicators[position].el.classList).remove.apply(_b, this._options.indicators.inactiveClasses.split(' '));
            this._indicators[position].el.setAttribute('aria-current', 'true');
        }
    };
    return Carousel;
}());
function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function ($carouselEl) {
        var interval = $carouselEl.getAttribute('data-carousel-interval');
        var slide = $carouselEl.getAttribute('data-carousel') === 'slide'
            ? true
            : false;
        var items = [];
        var defaultPosition = 0;
        if ($carouselEl.querySelectorAll('[data-carousel-item]').length) {
            Array.from($carouselEl.querySelectorAll('[data-carousel-item]')).map(function ($carouselItemEl, position) {
                items.push({
                    position: position,
                    el: $carouselItemEl,
                });
                if ($carouselItemEl.getAttribute('data-carousel-item') ===
                    'active') {
                    defaultPosition = position;
                }
            });
        }
        var indicators = [];
        if ($carouselEl.querySelectorAll('[data-carousel-slide-to]').length) {
            Array.from($carouselEl.querySelectorAll('[data-carousel-slide-to]')).map(function ($indicatorEl) {
                indicators.push({
                    position: parseInt($indicatorEl.getAttribute('data-carousel-slide-to')),
                    el: $indicatorEl,
                });
            });
        }
        var carousel = new Carousel(items, {
            defaultPosition: defaultPosition,
            indicators: {
                items: indicators,
            },
            interval: interval ? interval : Default.interval,
        });
        if (slide) {
            carousel.cycle();
        }
        // check for controls
        var carouselNextEl = $carouselEl.querySelector('[data-carousel-next]');
        var carouselPrevEl = $carouselEl.querySelector('[data-carousel-prev]');
        if (carouselNextEl) {
            carouselNextEl.addEventListener('click', function () {
                carousel.next();
            });
        }
        if (carouselPrevEl) {
            carouselPrevEl.addEventListener('click', function () {
                carousel.prev();
            });
        }
    });
}
if (typeof window !== 'undefined') {
    window.Carousel = Carousel;
    window.initCarousels = initCarousels;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/carousel/interface.js":
/*!************************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/carousel/interface.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/carousel/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/carousel/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/collapse/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/collapse/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initCollapses: () => (/* binding */ initCollapses)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    onCollapse: function () { },
    onExpand: function () { },
    onToggle: function () { },
};
var Collapse = /** @class */ (function () {
    function Collapse(targetEl, triggerEl, options) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._visible = false;
        this._init();
    }
    Collapse.prototype._init = function () {
        var _this = this;
        if (this._triggerEl) {
            if (this._triggerEl.hasAttribute('aria-expanded')) {
                this._visible =
                    this._triggerEl.getAttribute('aria-expanded') === 'true';
            }
            else {
                // fix until v2 not to break previous single collapses which became dismiss
                this._visible = !this._targetEl.classList.contains('hidden');
            }
            this._triggerEl.addEventListener('click', function () {
                _this.toggle();
            });
        }
    };
    Collapse.prototype.collapse = function () {
        this._targetEl.classList.add('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false');
        }
        this._visible = false;
        // callback function
        this._options.onCollapse(this);
    };
    Collapse.prototype.expand = function () {
        this._targetEl.classList.remove('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true');
        }
        this._visible = true;
        // callback function
        this._options.onExpand(this);
    };
    Collapse.prototype.toggle = function () {
        if (this._visible) {
            this.collapse();
        }
        else {
            this.expand();
        }
        // callback function
        this._options.onToggle(this);
    };
    return Collapse;
}());
function initCollapses() {
    document
        .querySelectorAll('[data-collapse-toggle]')
        .forEach(function ($triggerEl) {
        var targetId = $triggerEl.getAttribute('data-collapse-toggle');
        var $targetEl = document.getElementById(targetId);
        // check if the target element exists
        if ($targetEl) {
            new Collapse($targetEl, $triggerEl);
        }
        else {
            console.error("The target element with id \"".concat(targetId, "\" does not exist. Please check the data-collapse-toggle attribute."));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Collapse = Collapse;
    window.initCollapses = initCollapses;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/collapse/interface.js":
/*!************************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/collapse/interface.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/collapse/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/collapse/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dial/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dial/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initDials: () => (/* binding */ initDials)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var Dial = /** @class */ (function () {
    function Dial(parentEl, triggerEl, targetEl, options) {
        if (parentEl === void 0) { parentEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        this._parentEl = parentEl;
        this._triggerEl = triggerEl;
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._visible = false;
        this._init();
    }
    Dial.prototype._init = function () {
        var _this = this;
        if (this._triggerEl) {
            var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
            triggerEventTypes.showEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, function () {
                    _this.show();
                });
                _this._targetEl.addEventListener(ev, function () {
                    _this.show();
                });
            });
            triggerEventTypes.hideEvents.forEach(function (ev) {
                _this._parentEl.addEventListener(ev, function () {
                    if (!_this._parentEl.matches(':hover')) {
                        _this.hide();
                    }
                });
            });
        }
    };
    Dial.prototype.hide = function () {
        this._targetEl.classList.add('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false');
        }
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Dial.prototype.show = function () {
        this._targetEl.classList.remove('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true');
        }
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Dial.prototype.toggle = function () {
        if (this._visible) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Dial.prototype.isHidden = function () {
        return !this._visible;
    };
    Dial.prototype.isVisible = function () {
        return this._visible;
    };
    Dial.prototype._getTriggerEventTypes = function (triggerType) {
        switch (triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    return Dial;
}());
function initDials() {
    document.querySelectorAll('[data-dial-init]').forEach(function ($parentEl) {
        var $triggerEl = $parentEl.querySelector('[data-dial-toggle]');
        if ($triggerEl) {
            var dialId = $triggerEl.getAttribute('data-dial-toggle');
            var $dialEl = document.getElementById(dialId);
            if ($dialEl) {
                var triggerType = $triggerEl.getAttribute('data-dial-trigger');
                new Dial($parentEl, $triggerEl, $dialEl, {
                    triggerType: triggerType
                        ? triggerType
                        : Default.triggerType,
                });
            }
            else {
                console.error("Dial with id ".concat(dialId, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
            }
        }
        else {
            console.error("Dial with id ".concat($parentEl.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Dial = Dial;
    window.initDials = initDials;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dial);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dial/interface.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dial/interface.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dial/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dial/types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dismiss/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dismiss/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initDismisses: () => (/* binding */ initDismisses)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
    onHide: function () { },
};
var Dismiss = /** @class */ (function () {
    function Dismiss(targetEl, triggerEl, options) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._init();
    }
    Dismiss.prototype._init = function () {
        var _this = this;
        if (this._triggerEl) {
            this._triggerEl.addEventListener('click', function () {
                _this.hide();
            });
        }
    };
    Dismiss.prototype.hide = function () {
        var _this = this;
        this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, 'opacity-0');
        setTimeout(function () {
            _this._targetEl.classList.add('hidden');
        }, this._options.duration);
        // callback function
        this._options.onHide(this, this._targetEl);
    };
    return Dismiss;
}());
function initDismisses() {
    document.querySelectorAll('[data-dismiss-target]').forEach(function ($triggerEl) {
        var targetId = $triggerEl.getAttribute('data-dismiss-target');
        var $dismissEl = document.querySelector(targetId);
        if ($dismissEl) {
            new Dismiss($dismissEl, $triggerEl);
        }
        else {
            console.error("The dismiss element with id \"".concat(targetId, "\" does not exist. Please check the data-dismiss-target attribute."));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Dismiss = Dismiss;
    window.initDismisses = initDismisses;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dismiss);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dismiss/interface.js":
/*!***********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dismiss/interface.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dismiss/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dismiss/types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/drawer/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/drawer/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initDrawers: () => (/* binding */ initDrawers)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    placement: 'left',
    bodyScrolling: false,
    backdrop: true,
    edge: false,
    edgeOffset: 'bottom-[60px]',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var Drawer = /** @class */ (function () {
    function Drawer(targetEl, options) {
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._visible = false;
        this._init();
    }
    Drawer.prototype._init = function () {
        var _this = this;
        // set initial accessibility attributes
        if (this._targetEl) {
            this._targetEl.setAttribute('aria-hidden', 'true');
            this._targetEl.classList.add('transition-transform');
        }
        // set base placement classes
        this._getPlacementClasses(this._options.placement).base.map(function (c) {
            _this._targetEl.classList.add(c);
        });
        // add keyboard event listener to document
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                // if 'Escape' key is pressed
                if (_this.isVisible()) {
                    // if the Drawer is visible
                    _this.hide(); // hide the Drawer
                }
            }
        });
    };
    Drawer.prototype.hide = function () {
        var _this = this;
        // based on the edge option show placement classes
        if (this._options.edge) {
            this._getPlacementClasses(this._options.placement + '-edge').active.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
            this._getPlacementClasses(this._options.placement + '-edge').inactive.map(function (c) {
                _this._targetEl.classList.add(c);
            });
        }
        else {
            this._getPlacementClasses(this._options.placement).active.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
            this._getPlacementClasses(this._options.placement).inactive.map(function (c) {
                _this._targetEl.classList.add(c);
            });
        }
        // set accessibility attributes
        this._targetEl.setAttribute('aria-hidden', 'true');
        this._targetEl.removeAttribute('aria-modal');
        this._targetEl.removeAttribute('role');
        // enable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.remove('overflow-hidden');
        }
        // destroy backdrop
        if (this._options.backdrop) {
            this._destroyBackdropEl();
        }
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    Drawer.prototype.show = function () {
        var _this = this;
        if (this._options.edge) {
            this._getPlacementClasses(this._options.placement + '-edge').active.map(function (c) {
                _this._targetEl.classList.add(c);
            });
            this._getPlacementClasses(this._options.placement + '-edge').inactive.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
        }
        else {
            this._getPlacementClasses(this._options.placement).active.map(function (c) {
                _this._targetEl.classList.add(c);
            });
            this._getPlacementClasses(this._options.placement).inactive.map(function (c) {
                _this._targetEl.classList.remove(c);
            });
        }
        // set accessibility attributes
        this._targetEl.setAttribute('aria-modal', 'true');
        this._targetEl.setAttribute('role', 'dialog');
        this._targetEl.removeAttribute('aria-hidden');
        // disable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.add('overflow-hidden');
        }
        // show backdrop
        if (this._options.backdrop) {
            this._createBackdrop();
        }
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Drawer.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Drawer.prototype._createBackdrop = function () {
        var _a;
        var _this = this;
        if (!this._visible) {
            var backdropEl = document.createElement('div');
            backdropEl.setAttribute('drawer-backdrop', '');
            (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(' '));
            document.querySelector('body').append(backdropEl);
            backdropEl.addEventListener('click', function () {
                _this.hide();
            });
        }
    };
    Drawer.prototype._destroyBackdropEl = function () {
        if (this._visible) {
            document.querySelector('[drawer-backdrop]').remove();
        }
    };
    Drawer.prototype._getPlacementClasses = function (placement) {
        switch (placement) {
            case 'top':
                return {
                    base: ['top-0', 'left-0', 'right-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-y-full'],
                };
            case 'right':
                return {
                    base: ['right-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['translate-x-full'],
                };
            case 'bottom':
                return {
                    base: ['bottom-0', 'left-0', 'right-0'],
                    active: ['transform-none'],
                    inactive: ['translate-y-full'],
                };
            case 'left':
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-x-full'],
                };
            case 'bottom-edge':
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['translate-y-full', this._options.edgeOffset],
                };
            default:
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-x-full'],
                };
        }
    };
    Drawer.prototype.isHidden = function () {
        return !this._visible;
    };
    Drawer.prototype.isVisible = function () {
        return this._visible;
    };
    return Drawer;
}());
var getDrawerInstance = function (id, instances) {
    if (instances.some(function (drawerInstance) { return drawerInstance.id === id; })) {
        return instances.find(function (drawerInstance) { return drawerInstance.id === id; });
    }
};
function initDrawers() {
    var drawerInstances = [];
    document.querySelectorAll('[data-drawer-target]').forEach(function ($triggerEl) {
        // mandatory
        var drawerId = $triggerEl.getAttribute('data-drawer-target');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            // optional
            var placement = $triggerEl.getAttribute('data-drawer-placement');
            var bodyScrolling = $triggerEl.getAttribute('data-drawer-body-scrolling');
            var backdrop = $triggerEl.getAttribute('data-drawer-backdrop');
            var edge = $triggerEl.getAttribute('data-drawer-edge');
            var edgeOffset = $triggerEl.getAttribute('data-drawer-edge-offset');
            if (!getDrawerInstance(drawerId, drawerInstances)) {
                drawerInstances.push({
                    id: drawerId,
                    object: new Drawer($drawerEl, {
                        placement: placement ? placement : Default.placement,
                        bodyScrolling: bodyScrolling
                            ? bodyScrolling === 'true'
                                ? true
                                : false
                            : Default.bodyScrolling,
                        backdrop: backdrop
                            ? backdrop === 'true'
                                ? true
                                : false
                            : Default.backdrop,
                        edge: edge
                            ? edge === 'true'
                                ? true
                                : false
                            : Default.edge,
                        edgeOffset: edgeOffset
                            ? edgeOffset
                            : Default.edgeOffset,
                    }),
                });
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }
    });
    document.querySelectorAll('[data-drawer-toggle]').forEach(function ($triggerEl) {
        var drawerId = $triggerEl.getAttribute('data-drawer-toggle');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var drawer_1 = getDrawerInstance(drawerId, drawerInstances);
            if (drawer_1) {
                $triggerEl.addEventListener('click', function () {
                    drawer_1.object.toggle();
                });
            }
            else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }
    });
    document
        .querySelectorAll('[data-drawer-dismiss], [data-drawer-hide]')
        .forEach(function ($triggerEl) {
        var drawerId = $triggerEl.getAttribute('data-drawer-dismiss')
            ? $triggerEl.getAttribute('data-drawer-dismiss')
            : $triggerEl.getAttribute('data-drawer-hide');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var drawer_2 = getDrawerInstance(drawerId, drawerInstances);
            if (drawer_2) {
                $triggerEl.addEventListener('click', function () {
                    drawer_2.object.hide();
                });
            }
            else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
        }
    });
    document.querySelectorAll('[data-drawer-show]').forEach(function ($triggerEl) {
        var drawerId = $triggerEl.getAttribute('data-drawer-show');
        var $drawerEl = document.getElementById(drawerId);
        if ($drawerEl) {
            var drawer_3 = getDrawerInstance(drawerId, drawerInstances);
            if (drawer_3) {
                $triggerEl.addEventListener('click', function () {
                    drawer_3.object.show();
                });
            }
            else {
                console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
            }
        }
        else {
            console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Drawer = Drawer;
    window.initDrawers = initDrawers;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/drawer/interface.js":
/*!**********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/drawer/interface.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/drawer/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/drawer/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dropdown/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dropdown/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initDropdowns: () => (/* binding */ initDropdowns)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-empty-function */

var Default = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var Dropdown = /** @class */ (function () {
    function Dropdown(targetElement, triggerElement, options) {
        if (targetElement === void 0) { targetElement = null; }
        if (triggerElement === void 0) { triggerElement = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetElement;
        this._triggerEl = triggerElement;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = this._createPopperInstance();
        this._visible = false;
        this._init();
    }
    Dropdown.prototype._init = function () {
        if (this._triggerEl) {
            this._setupEventListeners();
        }
    };
    Dropdown.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        // click event handling for trigger element
        if (this._options.triggerType === 'click') {
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, function () {
                    _this.toggle();
                });
            });
        }
        // hover event handling for trigger element
        if (this._options.triggerType === 'hover') {
            triggerEvents.showEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, function () {
                    if (ev === 'click') {
                        _this.toggle();
                    }
                    else {
                        setTimeout(function () {
                            _this.show();
                        }, _this._options.delay);
                    }
                });
                _this._targetEl.addEventListener(ev, function () {
                    _this.show();
                });
            });
            triggerEvents.hideEvents.forEach(function (ev) {
                _this._triggerEl.addEventListener(ev, function () {
                    setTimeout(function () {
                        if (!_this._targetEl.matches(':hover')) {
                            _this.hide();
                        }
                    }, _this._options.delay);
                });
                _this._targetEl.addEventListener(ev, function () {
                    setTimeout(function () {
                        if (!_this._triggerEl.matches(':hover')) {
                            _this.hide();
                        }
                    }, _this._options.delay);
                });
            });
        }
    };
    Dropdown.prototype._createPopperInstance = function () {
        return (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_0__.createPopper)(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [
                            this._options.offsetSkidding,
                            this._options.offsetDistance,
                        ],
                    },
                },
            ],
        });
    };
    Dropdown.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Dropdown.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Dropdown.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        // Ignore clicks on the trigger element (ie. a datepicker input)
        var ignoreClickOutsideClass = this._options.ignoreClickOutsideClass;
        var isIgnored = false;
        if (ignoreClickOutsideClass) {
            var ignoredClickOutsideEls = document.querySelectorAll(".".concat(ignoreClickOutsideClass));
            ignoredClickOutsideEls.forEach(function (el) {
                if (el.contains(clickedEl)) {
                    isIgnored = true;
                    return;
                }
            });
        }
        // Ignore clicks on the target element (ie. dropdown itself)
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            !isIgnored &&
            this.isVisible()) {
            this.hide();
        }
    };
    Dropdown.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'click'],
                    hideEvents: ['mouseleave'],
                };
            case 'click':
                return {
                    showEvents: ['click'],
                    hideEvents: [],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['click'],
                    hideEvents: [],
                };
        }
    };
    Dropdown.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
        this._options.onToggle(this);
    };
    Dropdown.prototype.isVisible = function () {
        return this._visible;
    };
    Dropdown.prototype.show = function () {
        this._targetEl.classList.remove('hidden');
        this._targetEl.classList.add('block');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        this._setupClickOutsideListener();
        // Update its position
        this._popperInstance.update();
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Dropdown.prototype.hide = function () {
        this._targetEl.classList.remove('block');
        this._targetEl.classList.add('hidden');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        this._visible = false;
        this._removeClickOutsideListener();
        // callback function
        this._options.onHide(this);
    };
    return Dropdown;
}());
function initDropdowns() {
    document
        .querySelectorAll('[data-dropdown-toggle]')
        .forEach(function ($triggerEl) {
        var dropdownId = $triggerEl.getAttribute('data-dropdown-toggle');
        var $dropdownEl = document.getElementById(dropdownId);
        if ($dropdownEl) {
            var placement = $triggerEl.getAttribute('data-dropdown-placement');
            var offsetSkidding = $triggerEl.getAttribute('data-dropdown-offset-skidding');
            var offsetDistance = $triggerEl.getAttribute('data-dropdown-offset-distance');
            var triggerType = $triggerEl.getAttribute('data-dropdown-trigger');
            var delay = $triggerEl.getAttribute('data-dropdown-delay');
            var ignoreClickOutsideClass = $triggerEl.getAttribute('data-dropdown-ignore-click-outside-class');
            new Dropdown($dropdownEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
                offsetSkidding: offsetSkidding
                    ? parseInt(offsetSkidding)
                    : Default.offsetSkidding,
                offsetDistance: offsetDistance
                    ? parseInt(offsetDistance)
                    : Default.offsetDistance,
                delay: delay ? parseInt(delay) : Default.delay,
                ignoreClickOutsideClass: ignoreClickOutsideClass
                    ? ignoreClickOutsideClass
                    : Default.ignoreClickOutsideClass,
            });
        }
        else {
            console.error("The dropdown element with id \"".concat(dropdownId, "\" does not exist. Please check the data-dropdown-toggle attribute."));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Dropdown = Dropdown;
    window.initDropdowns = initDropdowns;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dropdown/interface.js":
/*!************************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dropdown/interface.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/dropdown/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/dropdown/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFlowbite: () => (/* binding */ initFlowbite)
/* harmony export */ });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./node_modules/flowbite/lib/esm/components/accordion/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./node_modules/flowbite/lib/esm/components/carousel/index.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse */ "./node_modules/flowbite/lib/esm/components/collapse/index.js");
/* harmony import */ var _dial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dial */ "./node_modules/flowbite/lib/esm/components/dial/index.js");
/* harmony import */ var _dismiss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dismiss */ "./node_modules/flowbite/lib/esm/components/dismiss/index.js");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawer */ "./node_modules/flowbite/lib/esm/components/drawer/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown */ "./node_modules/flowbite/lib/esm/components/dropdown/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal */ "./node_modules/flowbite/lib/esm/components/modal/index.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover */ "./node_modules/flowbite/lib/esm/components/popover/index.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs */ "./node_modules/flowbite/lib/esm/components/tabs/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip */ "./node_modules/flowbite/lib/esm/components/tooltip/index.js");











function initFlowbite() {
    (0,_accordion__WEBPACK_IMPORTED_MODULE_0__.initAccordions)();
    (0,_collapse__WEBPACK_IMPORTED_MODULE_2__.initCollapses)();
    (0,_carousel__WEBPACK_IMPORTED_MODULE_1__.initCarousels)();
    (0,_dismiss__WEBPACK_IMPORTED_MODULE_4__.initDismisses)();
    (0,_dropdown__WEBPACK_IMPORTED_MODULE_6__.initDropdowns)();
    (0,_modal__WEBPACK_IMPORTED_MODULE_7__.initModals)();
    (0,_drawer__WEBPACK_IMPORTED_MODULE_5__.initDrawers)();
    (0,_tabs__WEBPACK_IMPORTED_MODULE_9__.initTabs)();
    (0,_tooltip__WEBPACK_IMPORTED_MODULE_10__.initTooltips)();
    (0,_popover__WEBPACK_IMPORTED_MODULE_8__.initPopovers)();
    (0,_dial__WEBPACK_IMPORTED_MODULE_3__.initDials)();
}
if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/modal/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/modal/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initModals: () => (/* binding */ initModals)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    placement: 'center',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    backdrop: 'dynamic',
    closable: true,
    onHide: function () { },
    onShow: function () { },
    onToggle: function () { },
};
var Modal = /** @class */ (function () {
    function Modal(targetEl, options) {
        if (targetEl === void 0) { targetEl = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetEl;
        this._options = __assign(__assign({}, Default), options);
        this._isHidden = true;
        this._backdropEl = null;
        this._init();
    }
    Modal.prototype._init = function () {
        var _this = this;
        if (this._targetEl) {
            this._getPlacementClasses().map(function (c) {
                _this._targetEl.classList.add(c);
            });
        }
    };
    Modal.prototype._createBackdrop = function () {
        var _a;
        if (this._isHidden) {
            var backdropEl = document.createElement('div');
            backdropEl.setAttribute('modal-backdrop', '');
            (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(' '));
            document.querySelector('body').append(backdropEl);
            this._backdropEl = backdropEl;
        }
    };
    Modal.prototype._destroyBackdropEl = function () {
        if (!this._isHidden) {
            document.querySelector('[modal-backdrop]').remove();
        }
    };
    Modal.prototype._setupModalCloseEventListeners = function () {
        var _this = this;
        if (this._options.backdrop === 'dynamic') {
            this._clickOutsideEventListener = function (ev) {
                _this._handleOutsideClick(ev.target);
            };
            this._targetEl.addEventListener('click', this._clickOutsideEventListener, true);
        }
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Modal.prototype._removeModalCloseEventListeners = function () {
        if (this._options.backdrop === 'dynamic') {
            this._targetEl.removeEventListener('click', this._clickOutsideEventListener, true);
        }
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Modal.prototype._handleOutsideClick = function (target) {
        if (target === this._targetEl ||
            (target === this._backdropEl && this.isVisible())) {
            this.hide();
        }
    };
    Modal.prototype._getPlacementClasses = function () {
        switch (this._options.placement) {
            // top
            case 'top-left':
                return ['justify-start', 'items-start'];
            case 'top-center':
                return ['justify-center', 'items-start'];
            case 'top-right':
                return ['justify-end', 'items-start'];
            // center
            case 'center-left':
                return ['justify-start', 'items-center'];
            case 'center':
                return ['justify-center', 'items-center'];
            case 'center-right':
                return ['justify-end', 'items-center'];
            // bottom
            case 'bottom-left':
                return ['justify-start', 'items-end'];
            case 'bottom-center':
                return ['justify-center', 'items-end'];
            case 'bottom-right':
                return ['justify-end', 'items-end'];
            default:
                return ['justify-center', 'items-center'];
        }
    };
    Modal.prototype.toggle = function () {
        if (this._isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
        // callback function
        this._options.onToggle(this);
    };
    Modal.prototype.show = function () {
        if (this.isHidden) {
            this._targetEl.classList.add('flex');
            this._targetEl.classList.remove('hidden');
            this._targetEl.setAttribute('aria-modal', 'true');
            this._targetEl.setAttribute('role', 'dialog');
            this._targetEl.removeAttribute('aria-hidden');
            this._createBackdrop();
            this._isHidden = false;
            // prevent body scroll
            document.body.classList.add('overflow-hidden');
            // Add keyboard event listener to the document
            if (this._options.closable) {
                this._setupModalCloseEventListeners();
            }
            // callback function
            this._options.onShow(this);
        }
    };
    Modal.prototype.hide = function () {
        if (this.isVisible) {
            this._targetEl.classList.add('hidden');
            this._targetEl.classList.remove('flex');
            this._targetEl.setAttribute('aria-hidden', 'true');
            this._targetEl.removeAttribute('aria-modal');
            this._targetEl.removeAttribute('role');
            this._destroyBackdropEl();
            this._isHidden = true;
            // re-apply body scroll
            document.body.classList.remove('overflow-hidden');
            if (this._options.closable) {
                this._removeModalCloseEventListeners();
            }
            // callback function
            this._options.onHide(this);
        }
    };
    Modal.prototype.isVisible = function () {
        return !this._isHidden;
    };
    Modal.prototype.isHidden = function () {
        return this._isHidden;
    };
    return Modal;
}());
var getModalInstance = function (id, instances) {
    if (instances.some(function (modalInstance) { return modalInstance.id === id; })) {
        return instances.find(function (modalInstance) { return modalInstance.id === id; });
    }
    return null;
};
function initModals() {
    var modalInstances = [];
    // initiate modal based on data-modal-target
    document.querySelectorAll('[data-modal-target]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-target');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var placement = $modalEl.getAttribute('data-modal-placement');
            var backdrop = $modalEl.getAttribute('data-modal-backdrop');
            if (!getModalInstance(modalId, modalInstances)) {
                modalInstances.push({
                    id: modalId,
                    object: new Modal($modalEl, {
                        placement: placement
                            ? placement
                            : Default.placement,
                        backdrop: backdrop ? backdrop : Default.backdrop,
                    }),
                });
            }
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
        }
    });
    // support pre v1.6.0 data-modal-toggle initialization
    document.querySelectorAll('[data-modal-toggle]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-toggle');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var placement = $modalEl.getAttribute('data-modal-placement');
            var backdrop = $modalEl.getAttribute('data-modal-backdrop');
            var modal_1 = getModalInstance(modalId, modalInstances);
            if (!modal_1) {
                modal_1 = {
                    id: modalId,
                    object: new Modal($modalEl, {
                        placement: placement
                            ? placement
                            : Default.placement,
                        backdrop: backdrop ? backdrop : Default.backdrop,
                    }),
                };
                modalInstances.push(modal_1);
            }
            $triggerEl.addEventListener('click', function () {
                modal_1.object.toggle();
            });
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
        }
    });
    // show modal on click if exists based on id
    document.querySelectorAll('[data-modal-show]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-show');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var modal_2 = getModalInstance(modalId, modalInstances);
            if (modal_2) {
                $triggerEl.addEventListener('click', function () {
                    if (modal_2.object.isHidden) {
                        modal_2.object.show();
                    }
                });
            }
            else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
            }
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
        }
    });
    // hide modal on click if exists based on id
    document.querySelectorAll('[data-modal-hide]').forEach(function ($triggerEl) {
        var modalId = $triggerEl.getAttribute('data-modal-hide');
        var $modalEl = document.getElementById(modalId);
        if ($modalEl) {
            var modal_3 = getModalInstance(modalId, modalInstances);
            if (modal_3) {
                $triggerEl.addEventListener('click', function () {
                    if (modal_3.object.isVisible) {
                        modal_3.object.hide();
                    }
                });
            }
            else {
                console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
            }
        }
        else {
            console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Modal = Modal;
    window.initModals = initModals;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/modal/interface.js":
/*!*********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/modal/interface.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/modal/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/modal/types.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/popover/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/popover/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initPopovers: () => (/* binding */ initPopovers)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-empty-function */

var Default = {
    placement: 'top',
    offset: 10,
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var Popover = /** @class */ (function () {
    function Popover(targetEl, triggerEl, options) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = this._createPopperInstance();
        this._visible = false;
        this._init();
    }
    Popover.prototype._init = function () {
        if (this._triggerEl) {
            this._setupEventListeners();
        }
    };
    Popover.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        triggerEvents.showEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, function () {
                _this.show();
            });
            _this._targetEl.addEventListener(ev, function () {
                _this.show();
            });
        });
        triggerEvents.hideEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, function () {
                setTimeout(function () {
                    if (!_this._targetEl.matches(':hover')) {
                        _this.hide();
                    }
                }, 100);
            });
            _this._targetEl.addEventListener(ev, function () {
                setTimeout(function () {
                    if (!_this._triggerEl.matches(':hover')) {
                        _this.hide();
                    }
                }, 100);
            });
        });
    };
    Popover.prototype._createPopperInstance = function () {
        return (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_0__.createPopper)(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, this._options.offset],
                    },
                },
            ],
        });
    };
    Popover.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    Popover.prototype._setupKeydownListener = function () {
        var _this = this;
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Popover.prototype._removeKeydownListener = function () {
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Popover.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Popover.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Popover.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            this.isVisible()) {
            this.hide();
        }
    };
    Popover.prototype.isVisible = function () {
        return this._visible;
    };
    Popover.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
        this._options.onToggle(this);
    };
    Popover.prototype.show = function () {
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        // handle click outside
        this._setupClickOutsideListener();
        // handle esc keydown
        this._setupKeydownListener();
        // Update its position
        this._popperInstance.update();
        // set visibility to true
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Popover.prototype.hide = function () {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        // handle click outside
        this._removeClickOutsideListener();
        // handle esc keydown
        this._removeKeydownListener();
        // set visibility to false
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    return Popover;
}());
function initPopovers() {
    document.querySelectorAll('[data-popover-target]').forEach(function ($triggerEl) {
        var popoverID = $triggerEl.getAttribute('data-popover-target');
        var $popoverEl = document.getElementById(popoverID);
        if ($popoverEl) {
            var triggerType = $triggerEl.getAttribute('data-popover-trigger');
            var placement = $triggerEl.getAttribute('data-popover-placement');
            var offset = $triggerEl.getAttribute('data-popover-offset');
            new Popover($popoverEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                offset: offset ? parseInt(offset) : Default.offset,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
            });
        }
        else {
            console.error("The popover element with id \"".concat(popoverID, "\" does not exist. Please check the data-popover-target attribute."));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Popover = Popover;
    window.initPopovers = initPopovers;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popover);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/popover/interface.js":
/*!***********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/popover/interface.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/popover/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/popover/types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/tabs/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/tabs/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initTabs: () => (/* binding */ initTabs)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Default = {
    defaultTabId: null,
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: function () { },
};
var Tabs = /** @class */ (function () {
    function Tabs(items, options) {
        if (items === void 0) { items = []; }
        if (options === void 0) { options = Default; }
        this._items = items;
        this._activeTab = options ? this.getTab(options.defaultTabId) : null;
        this._options = __assign(__assign({}, Default), options);
        this._init();
    }
    Tabs.prototype._init = function () {
        var _this = this;
        if (this._items.length) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this._setActiveTab(this._items[0]);
            }
            // force show the first default tab
            this.show(this._activeTab.id, true);
            // show tab content based on click
            this._items.map(function (tab) {
                tab.triggerEl.addEventListener('click', function () {
                    _this.show(tab.id);
                });
            });
        }
    };
    Tabs.prototype.getActiveTab = function () {
        return this._activeTab;
    };
    Tabs.prototype._setActiveTab = function (tab) {
        this._activeTab = tab;
    };
    Tabs.prototype.getTab = function (id) {
        return this._items.filter(function (t) { return t.id === id; })[0];
    };
    Tabs.prototype.show = function (id, forceShow) {
        var _a, _b;
        var _this = this;
        if (forceShow === void 0) { forceShow = false; }
        var tab = this.getTab(id);
        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return;
        }
        // hide other tabs
        this._items.map(function (t) {
            var _a, _b;
            if (t !== tab) {
                (_a = t.triggerEl.classList).remove.apply(_a, _this._options.activeClasses.split(' '));
                (_b = t.triggerEl.classList).add.apply(_b, _this._options.inactiveClasses.split(' '));
                t.targetEl.classList.add('hidden');
                t.triggerEl.setAttribute('aria-selected', 'false');
            }
        });
        // show active tab
        (_a = tab.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(' '));
        (_b = tab.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(' '));
        tab.triggerEl.setAttribute('aria-selected', 'true');
        tab.targetEl.classList.remove('hidden');
        this._setActiveTab(tab);
        // callback function
        this._options.onShow(this, tab);
    };
    return Tabs;
}());
function initTabs() {
    document.querySelectorAll('[data-tabs-toggle]').forEach(function ($triggerEl) {
        var tabItems = [];
        var defaultTabId = null;
        $triggerEl
            .querySelectorAll('[role="tab"]')
            .forEach(function ($triggerEl) {
            var isActive = $triggerEl.getAttribute('aria-selected') === 'true';
            var tab = {
                id: $triggerEl.getAttribute('data-tabs-target'),
                triggerEl: $triggerEl,
                targetEl: document.querySelector($triggerEl.getAttribute('data-tabs-target')),
            };
            tabItems.push(tab);
            if (isActive) {
                defaultTabId = tab.id;
            }
        });
        new Tabs(tabItems, {
            defaultTabId: defaultTabId,
        });
    });
}
if (typeof window !== 'undefined') {
    window.Tabs = Tabs;
    window.initTabs = initTabs;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/tabs/interface.js":
/*!********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/tabs/interface.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/tabs/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/tabs/types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/tooltip/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/tooltip/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initTooltips: () => (/* binding */ initTooltips)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-empty-function */

var Default = {
    placement: 'top',
    triggerType: 'hover',
    onShow: function () { },
    onHide: function () { },
    onToggle: function () { },
};
var Tooltip = /** @class */ (function () {
    function Tooltip(targetEl, triggerEl, options) {
        if (targetEl === void 0) { targetEl = null; }
        if (triggerEl === void 0) { triggerEl = null; }
        if (options === void 0) { options = Default; }
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = __assign(__assign({}, Default), options);
        this._popperInstance = this._createPopperInstance();
        this._visible = false;
        this._init();
    }
    Tooltip.prototype._init = function () {
        if (this._triggerEl) {
            this._setupEventListeners();
        }
    };
    Tooltip.prototype._setupEventListeners = function () {
        var _this = this;
        var triggerEvents = this._getTriggerEvents();
        triggerEvents.showEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, function () {
                _this.show();
            });
        });
        triggerEvents.hideEvents.forEach(function (ev) {
            _this._triggerEl.addEventListener(ev, function () {
                _this.hide();
            });
        });
    };
    Tooltip.prototype._createPopperInstance = function () {
        return (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_0__.createPopper)(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    };
    Tooltip.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    };
    Tooltip.prototype._setupKeydownListener = function () {
        var _this = this;
        this._keydownEventListener = function (ev) {
            if (ev.key === 'Escape') {
                _this.hide();
            }
        };
        document.body.addEventListener('keydown', this._keydownEventListener, true);
    };
    Tooltip.prototype._removeKeydownListener = function () {
        document.body.removeEventListener('keydown', this._keydownEventListener, true);
    };
    Tooltip.prototype._setupClickOutsideListener = function () {
        var _this = this;
        this._clickOutsideEventListener = function (ev) {
            _this._handleClickOutside(ev, _this._targetEl);
        };
        document.body.addEventListener('click', this._clickOutsideEventListener, true);
    };
    Tooltip.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener('click', this._clickOutsideEventListener, true);
    };
    Tooltip.prototype._handleClickOutside = function (ev, targetEl) {
        var clickedEl = ev.target;
        if (clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            this.isVisible()) {
            this.hide();
        }
    };
    Tooltip.prototype.isVisible = function () {
        return this._visible;
    };
    Tooltip.prototype.toggle = function () {
        if (this.isVisible()) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Tooltip.prototype.show = function () {
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');
        // Enable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: true },
            ], false) })); });
        // handle click outside
        this._setupClickOutsideListener();
        // handle esc keydown
        this._setupKeydownListener();
        // Update its position
        this._popperInstance.update();
        // set visibility
        this._visible = true;
        // callback function
        this._options.onShow(this);
    };
    Tooltip.prototype.hide = function () {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');
        // Disable the event listeners
        this._popperInstance.setOptions(function (options) { return (__assign(__assign({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
                { name: 'eventListeners', enabled: false },
            ], false) })); });
        // handle click outside
        this._removeClickOutsideListener();
        // handle esc keydown
        this._removeKeydownListener();
        // set visibility
        this._visible = false;
        // callback function
        this._options.onHide(this);
    };
    return Tooltip;
}());
function initTooltips() {
    document.querySelectorAll('[data-tooltip-target]').forEach(function ($triggerEl) {
        var tooltipId = $triggerEl.getAttribute('data-tooltip-target');
        var $tooltipEl = document.getElementById(tooltipId);
        if ($tooltipEl) {
            var triggerType = $triggerEl.getAttribute('data-tooltip-trigger');
            var placement = $triggerEl.getAttribute('data-tooltip-placement');
            new Tooltip($tooltipEl, $triggerEl, {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType
                    ? triggerType
                    : Default.triggerType,
            });
        }
        else {
            console.error("The tooltip element with id \"".concat(tooltipId, "\" does not exist. Please check the data-tooltip-target attribute."));
        }
    });
}
if (typeof window !== 'undefined') {
    window.Tooltip = Tooltip;
    window.initTooltips = initTooltips;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/tooltip/interface.js":
/*!***********************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/tooltip/interface.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/components/tooltip/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/components/tooltip/types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/dom/events.js":
/*!*****************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/dom/events.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Events = /** @class */ (function () {
    function Events(eventType, eventFunctions) {
        if (eventFunctions === void 0) { eventFunctions = []; }
        this._eventType = eventType;
        this._eventFunctions = eventFunctions;
    }
    Events.prototype.init = function () {
        var _this = this;
        this._eventFunctions.forEach(function (eventFunction) {
            if (typeof window !== 'undefined') {
                window.addEventListener(_this._eventType, eventFunction);
            }
        });
    };
    return Events;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/flowbite/lib/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/flowbite/lib/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* reexport safe */ _components_accordion__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Carousel: () => (/* reexport safe */ _components_carousel__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Collapse: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Dial: () => (/* reexport safe */ _components_dial__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   Dismiss: () => (/* reexport safe */ _components_dismiss__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Drawer: () => (/* reexport safe */ _components_drawer__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Dropdown: () => (/* reexport safe */ _components_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Modal: () => (/* reexport safe */ _components_modal__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Popover: () => (/* reexport safe */ _components_popover__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Tabs: () => (/* reexport safe */ _components_tabs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Tooltip: () => (/* reexport safe */ _components_tooltip__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   initAccordions: () => (/* reexport safe */ _components_accordion__WEBPACK_IMPORTED_MODULE_1__.initAccordions),
/* harmony export */   initCarousels: () => (/* reexport safe */ _components_carousel__WEBPACK_IMPORTED_MODULE_3__.initCarousels),
/* harmony export */   initCollapses: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_2__.initCollapses),
/* harmony export */   initDials: () => (/* reexport safe */ _components_dial__WEBPACK_IMPORTED_MODULE_11__.initDials),
/* harmony export */   initDismisses: () => (/* reexport safe */ _components_dismiss__WEBPACK_IMPORTED_MODULE_4__.initDismisses),
/* harmony export */   initDrawers: () => (/* reexport safe */ _components_drawer__WEBPACK_IMPORTED_MODULE_7__.initDrawers),
/* harmony export */   initDropdowns: () => (/* reexport safe */ _components_dropdown__WEBPACK_IMPORTED_MODULE_5__.initDropdowns),
/* harmony export */   initFlowbite: () => (/* reexport safe */ _components_index__WEBPACK_IMPORTED_MODULE_12__.initFlowbite),
/* harmony export */   initModals: () => (/* reexport safe */ _components_modal__WEBPACK_IMPORTED_MODULE_6__.initModals),
/* harmony export */   initPopovers: () => (/* reexport safe */ _components_popover__WEBPACK_IMPORTED_MODULE_10__.initPopovers),
/* harmony export */   initTabs: () => (/* reexport safe */ _components_tabs__WEBPACK_IMPORTED_MODULE_8__.initTabs),
/* harmony export */   initTooltips: () => (/* reexport safe */ _components_tooltip__WEBPACK_IMPORTED_MODULE_9__.initTooltips)
/* harmony export */ });
/* harmony import */ var _dom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/events */ "./node_modules/flowbite/lib/esm/dom/events.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion */ "./node_modules/flowbite/lib/esm/components/accordion/index.js");
/* harmony import */ var _components_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/collapse */ "./node_modules/flowbite/lib/esm/components/collapse/index.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carousel */ "./node_modules/flowbite/lib/esm/components/carousel/index.js");
/* harmony import */ var _components_dismiss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dismiss */ "./node_modules/flowbite/lib/esm/components/dismiss/index.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dropdown */ "./node_modules/flowbite/lib/esm/components/dropdown/index.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal */ "./node_modules/flowbite/lib/esm/components/modal/index.js");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/drawer */ "./node_modules/flowbite/lib/esm/components/drawer/index.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs */ "./node_modules/flowbite/lib/esm/components/tabs/index.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tooltip */ "./node_modules/flowbite/lib/esm/components/tooltip/index.js");
/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/popover */ "./node_modules/flowbite/lib/esm/components/popover/index.js");
/* harmony import */ var _components_dial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dial */ "./node_modules/flowbite/lib/esm/components/dial/index.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/index */ "./node_modules/flowbite/lib/esm/components/index.js");
/* harmony import */ var _components_accordion_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/accordion/types */ "./node_modules/flowbite/lib/esm/components/accordion/types.js");
/* harmony import */ var _components_carousel_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/carousel/types */ "./node_modules/flowbite/lib/esm/components/carousel/types.js");
/* harmony import */ var _components_collapse_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/collapse/types */ "./node_modules/flowbite/lib/esm/components/collapse/types.js");
/* harmony import */ var _components_dial_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dial/types */ "./node_modules/flowbite/lib/esm/components/dial/types.js");
/* harmony import */ var _components_dismiss_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dismiss/types */ "./node_modules/flowbite/lib/esm/components/dismiss/types.js");
/* harmony import */ var _components_drawer_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/drawer/types */ "./node_modules/flowbite/lib/esm/components/drawer/types.js");
/* harmony import */ var _components_dropdown_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dropdown/types */ "./node_modules/flowbite/lib/esm/components/dropdown/types.js");
/* harmony import */ var _components_modal_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/types */ "./node_modules/flowbite/lib/esm/components/modal/types.js");
/* harmony import */ var _components_popover_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/popover/types */ "./node_modules/flowbite/lib/esm/components/popover/types.js");
/* harmony import */ var _components_tabs_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tabs/types */ "./node_modules/flowbite/lib/esm/components/tabs/types.js");
/* harmony import */ var _components_tooltip_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/tooltip/types */ "./node_modules/flowbite/lib/esm/components/tooltip/types.js");
/* harmony import */ var _components_accordion_interface__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/accordion/interface */ "./node_modules/flowbite/lib/esm/components/accordion/interface.js");
/* harmony import */ var _components_carousel_interface__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/carousel/interface */ "./node_modules/flowbite/lib/esm/components/carousel/interface.js");
/* harmony import */ var _components_collapse_interface__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/collapse/interface */ "./node_modules/flowbite/lib/esm/components/collapse/interface.js");
/* harmony import */ var _components_dial_interface__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dial/interface */ "./node_modules/flowbite/lib/esm/components/dial/interface.js");
/* harmony import */ var _components_dismiss_interface__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dismiss/interface */ "./node_modules/flowbite/lib/esm/components/dismiss/interface.js");
/* harmony import */ var _components_drawer_interface__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/drawer/interface */ "./node_modules/flowbite/lib/esm/components/drawer/interface.js");
/* harmony import */ var _components_dropdown_interface__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dropdown/interface */ "./node_modules/flowbite/lib/esm/components/dropdown/interface.js");
/* harmony import */ var _components_modal_interface__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/modal/interface */ "./node_modules/flowbite/lib/esm/components/modal/interface.js");
/* harmony import */ var _components_popover_interface__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/popover/interface */ "./node_modules/flowbite/lib/esm/components/popover/interface.js");
/* harmony import */ var _components_tabs_interface__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/tabs/interface */ "./node_modules/flowbite/lib/esm/components/tabs/interface.js");
/* harmony import */ var _components_tooltip_interface__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/tooltip/interface */ "./node_modules/flowbite/lib/esm/components/tooltip/interface.js");













// setup events for data attributes
var events = new _dom_events__WEBPACK_IMPORTED_MODULE_0__["default"]('load', [
    _components_accordion__WEBPACK_IMPORTED_MODULE_1__.initAccordions,
    _components_collapse__WEBPACK_IMPORTED_MODULE_2__.initCollapses,
    _components_carousel__WEBPACK_IMPORTED_MODULE_3__.initCarousels,
    _components_dismiss__WEBPACK_IMPORTED_MODULE_4__.initDismisses,
    _components_dropdown__WEBPACK_IMPORTED_MODULE_5__.initDropdowns,
    _components_modal__WEBPACK_IMPORTED_MODULE_6__.initModals,
    _components_drawer__WEBPACK_IMPORTED_MODULE_7__.initDrawers,
    _components_tabs__WEBPACK_IMPORTED_MODULE_8__.initTabs,
    _components_tooltip__WEBPACK_IMPORTED_MODULE_9__.initTooltips,
    _components_popover__WEBPACK_IMPORTED_MODULE_10__.initPopovers,
    _components_dial__WEBPACK_IMPORTED_MODULE_11__.initDials,
]);
events.init();
// export all components











// export all types











// export all interfaces











// export init functions











// export all init functions

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/tw-elements/dist/js/chart.es.js":
/*!******************************************************!*\
  !*** ./node_modules/tw-elements/dist/js/chart.es.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ye),
/* harmony export */   B: () => (/* binding */ Me),
/* harmony export */   P: () => (/* binding */ ve),
/* harmony export */   a: () => (/* binding */ K),
/* harmony export */   b: () => (/* binding */ D),
/* harmony export */   c: () => (/* binding */ I),
/* harmony export */   d: () => (/* binding */ O),
/* harmony export */   e: () => (/* binding */ E),
/* harmony export */   f: () => (/* binding */ Yc),
/* harmony export */   i: () => (/* binding */ T),
/* harmony export */   m: () => (/* binding */ ne),
/* harmony export */   r: () => (/* binding */ Zt),
/* harmony export */   t: () => (/* binding */ $),
/* harmony export */   v: () => (/* binding */ C)
/* harmony export */ });
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
function ct() {
}
const _o = function() {
  let i = 0;
  return function() {
    return i++;
  };
}();
function T(i) {
  return i === null || typeof i > "u";
}
function z(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function D(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
const N = (i) => (typeof i == "number" || i instanceof Number) && isFinite(+i);
function Q(i, t) {
  return N(i) ? i : t;
}
function C(i, t) {
  return typeof i > "u" ? t : i;
}
const yo = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t, an = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function I(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function E(i, t, e, s) {
  let n, o, r;
  if (z(i))
    if (o = i.length, s)
      for (n = o - 1; n >= 0; n--)
        t.call(e, i[n], n);
    else
      for (n = 0; n < o; n++)
        t.call(e, i[n], n);
  else if (D(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function ze(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Be(i) {
  if (z(i))
    return i.map(Be);
  if (D(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Be(i[e[n]]);
    return t;
  }
  return i;
}
function ln(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function vo(i, t, e, s) {
  if (!ln(i))
    return;
  const n = t[i], o = e[i];
  D(n) && D(o) ? ne(n, o, s) : t[i] = Be(o);
}
function ne(i, t, e) {
  const s = z(t) ? t : [t], n = s.length;
  if (!D(i))
    return i;
  e = e || {};
  const o = e.merger || vo;
  for (let r = 0; r < n; ++r) {
    if (t = s[r], !D(t))
      continue;
    const a = Object.keys(t);
    for (let l = 0, c = a.length; l < c; ++l)
      o(a[l], i, t, e);
  }
  return i;
}
function Qt(i, t) {
  return ne(i, t, { merger: Mo });
}
function Mo(i, t, e) {
  if (!ln(i))
    return;
  const s = t[i], n = e[i];
  D(s) && D(n) ? Qt(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Be(n));
}
const Xi = {
  "": (i) => i,
  x: (i) => i.x,
  y: (i) => i.y
};
function _t(i, t) {
  return (Xi[t] || (Xi[t] = ko(t)))(i);
}
function ko(i) {
  const t = wo(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function wo(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Oi(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const et = (i) => typeof i < "u", yt = (i) => typeof i == "function", Ui = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function So(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const B = Math.PI, F = 2 * B, Po = F + B, Ve = Number.POSITIVE_INFINITY, Co = B / 180, V = B / 2, $t = B / 4, Ki = B * 2 / 3, tt = Math.log10, lt = Math.sign;
function qi(i) {
  const t = Math.round(i);
  i = te(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(tt(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Do(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function Bt(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function te(i, t, e) {
  return Math.abs(i - t) < e;
}
function Oo(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function cn(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function nt(i) {
  return i * (B / 180);
}
function Ai(i) {
  return i * (180 / B);
}
function Gi(i) {
  if (!N(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function hn(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * B && (o += F), {
    angle: o,
    distance: n
  };
}
function bi(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Ao(i, t) {
  return (i - t + Po) % F - B;
}
function Z(i) {
  return (i % F + F) % F;
}
function oe(i, t, e, s) {
  const n = Z(i), o = Z(t), r = Z(e), a = Z(o - n), l = Z(r - n), c = Z(n - o), h = Z(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function Y(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function To(i) {
  return Y(i, -32768, 32767);
}
function ut(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Ti(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return { lo: n, hi: s };
}
const ft = (i, t, e, s) => Ti(i, e, s ? (n) => i[n][t] <= e : (n) => i[n][t] < e), Lo = (i, t, e) => Ti(i, e, (s) => i[s][t] >= e);
function Ro(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const dn = ["push", "pop", "shift", "splice", "unshift"];
function Eo(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [t]
    }
  }), dn.forEach((e) => {
    const s = "_onData" + Oi(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = n.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function Zi(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (dn.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function un(i) {
  const t = /* @__PURE__ */ new Set();
  let e, s;
  for (e = 0, s = i.length; e < s; ++e)
    t.add(i[e]);
  return t.size === s ? i : Array.from(t);
}
const fn = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function gn(i, t, e) {
  const s = e || ((r) => Array.prototype.slice.call(r));
  let n = !1, o = [];
  return function(...r) {
    o = s(r), n || (n = !0, fn.call(window, () => {
      n = !1, i.apply(t, o);
    }));
  };
}
function Fo(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Li = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", U = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Io = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function pn(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, _parsed: a } = i, l = r.axis, { min: c, max: h, minDefined: d, maxDefined: u } = r.getUserBounds();
    d && (n = Y(
      Math.min(
        ft(a, r.axis, c).lo,
        e ? s : ft(t, l, r.getPixelForValue(c)).lo
      ),
      0,
      s - 1
    )), u ? o = Y(
      Math.max(
        ft(a, r.axis, h, !0).hi + 1,
        e ? 0 : ft(t, l, r.getPixelForValue(h), !0).hi + 1
      ),
      n,
      s
    ) - n : o = s - n;
  }
  return { start: n, count: o };
}
function mn(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const we = (i) => i === 0 || i === 1, Ji = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * F / e)), Qi = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * F / e) + 1, ee = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * V) + 1,
  easeOutSine: (i) => Math.sin(i * V),
  easeInOutSine: (i) => -0.5 * (Math.cos(B * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => we(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => we(i) ? i : Ji(i, 0.075, 0.3),
  easeOutElastic: (i) => we(i) ? i : Qi(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return we(i) ? i : i < 0.5 ? 0.5 * Ji(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Qi(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - ee.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? ee.easeInBounce(i * 2) * 0.5 : ee.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
function he(i) {
  return i + 0.5 | 0;
}
const mt = (i, t, e) => Math.max(Math.min(i, e), t);
function Gt(i) {
  return mt(he(i * 2.55), 0, 255);
}
function xt(i) {
  return mt(he(i * 255), 0, 255);
}
function dt(i) {
  return mt(he(i / 2.55) / 100, 0, 1);
}
function ts(i) {
  return mt(he(i * 100), 0, 100);
}
const J = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, xi = [..."0123456789ABCDEF"], zo = (i) => xi[i & 15], Bo = (i) => xi[(i & 240) >> 4] + xi[i & 15], Se = (i) => (i & 240) >> 4 === (i & 15), Vo = (i) => Se(i.r) && Se(i.g) && Se(i.b) && Se(i.a);
function Wo(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & J[i[1]] * 17,
    g: 255 & J[i[2]] * 17,
    b: 255 & J[i[3]] * 17,
    a: t === 5 ? J[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: J[i[1]] << 4 | J[i[2]],
    g: J[i[3]] << 4 | J[i[4]],
    b: J[i[5]] << 4 | J[i[6]],
    a: t === 9 ? J[i[7]] << 4 | J[i[8]] : 255
  })), e;
}
const No = (i, t) => i < 255 ? t(i) : "";
function Ho(i) {
  var t = Vo(i) ? zo : Bo;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + No(i.a, t) : void 0;
}
const jo = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function bn(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function $o(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function Yo(i, t, e) {
  const s = bn(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function Xo(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Ri(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Xo(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Ei(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(xt);
}
function Fi(i, t, e) {
  return Ei(bn, i, t, e);
}
function Uo(i, t, e) {
  return Ei(Yo, i, t, e);
}
function Ko(i, t, e) {
  return Ei($o, i, t, e);
}
function xn(i) {
  return (i % 360 + 360) % 360;
}
function qo(i) {
  const t = jo.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Gt(+t[5]) : xt(+t[5]));
  const n = xn(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = Uo(n, o, r) : t[1] === "hsv" ? s = Ko(n, o, r) : s = Fi(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Go(i, t) {
  var e = Ri(i);
  e[0] = xn(e[0] + t), e = Fi(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Zo(i) {
  if (!i)
    return;
  const t = Ri(i), e = t[0], s = ts(t[1]), n = ts(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${dt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const es = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, is = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Jo() {
  const i = {}, t = Object.keys(is), e = Object.keys(es);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, es[o]);
    o = parseInt(is[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let Pe;
function Qo(i) {
  Pe || (Pe = Jo(), Pe.transparent = [0, 0, 0, 0]);
  const t = Pe[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const tr = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function er(i) {
  const t = tr.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Gt(r) : mt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Gt(s) : mt(s, 0, 255)), n = 255 & (t[4] ? Gt(n) : mt(n, 0, 255)), o = 255 & (t[6] ? Gt(o) : mt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function ir(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${dt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ni = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Ft = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function sr(i, t, e) {
  const s = Ft(dt(i.r)), n = Ft(dt(i.g)), o = Ft(dt(i.b));
  return {
    r: xt(ni(s + e * (Ft(dt(t.r)) - s))),
    g: xt(ni(n + e * (Ft(dt(t.g)) - n))),
    b: xt(ni(o + e * (Ft(dt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function Ce(i, t, e) {
  if (i) {
    let s = Ri(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Fi(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function _n(i, t) {
  return i && Object.assign(t || {}, i);
}
function ss(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = xt(i[3]))) : (t = _n(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = xt(t.a)), t;
}
function nr(i) {
  return i.charAt(0) === "r" ? er(i) : qo(i);
}
class We {
  constructor(t) {
    if (t instanceof We)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = ss(t) : e === "string" && (s = Wo(t) || Qo(t) || nr(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = _n(this._rgb);
    return t && (t.a = dt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = ss(t);
  }
  rgbString() {
    return this._valid ? ir(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ho(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Zo(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = sr(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new We(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = xt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = he(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return Ce(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ce(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ce(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ce(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Go(this._rgb, t), this;
  }
}
function yn(i) {
  return new We(i);
}
function vn(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ns(i) {
  return vn(i) ? i : yn(i);
}
function oi(i) {
  return vn(i) ? i : yn(i).saturate(0.5).darken(0.1).hexString();
}
const At = /* @__PURE__ */ Object.create(null), _i = /* @__PURE__ */ Object.create(null);
function ie(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ri(i, t, e) {
  return typeof t == "string" ? ne(ie(i, t), e) : ne(ie(i, ""), t);
}
class or {
  constructor(t) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (e) => e.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (e, s) => oi(s.backgroundColor), this.hoverBorderColor = (e, s) => oi(s.borderColor), this.hoverColor = (e, s) => oi(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t);
  }
  set(t, e) {
    return ri(this, t, e);
  }
  get(t) {
    return ie(this, t);
  }
  describe(t, e) {
    return ri(_i, t, e);
  }
  override(t, e) {
    return ri(At, t, e);
  }
  route(t, e, s, n) {
    const o = ie(this, t), r = ie(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return D(l) ? Object.assign({}, c, l) : C(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
}
var O = new or({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
});
function rr(i) {
  return !i || T(i.size) || T(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ne(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function ar(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && z(d) !== !0)
      r = Ne(i, n, o, r, d);
    else if (z(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !z(u) && (r = Ne(i, n, o, r, u));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function wt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function os(i, t) {
  t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
}
function yi(i, t, e, s) {
  Mn(i, t, e, s, null);
}
function Mn(i, t, e, s, n) {
  let o, r, a, l, c, h;
  const d = t.pointStyle, u = t.rotation, f = t.radius;
  let g = (u || 0) * Co;
  if (d && typeof d == "object" && (o = d.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(g), i.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), i.restore();
    return;
  }
  if (!(isNaN(f) || f <= 0)) {
    switch (i.beginPath(), d) {
      default:
        n ? i.ellipse(e, s, n / 2, f, 0, 0, F) : i.arc(e, s, f, 0, F), i.closePath();
        break;
      case "triangle":
        i.moveTo(e + Math.sin(g) * f, s - Math.cos(g) * f), g += Ki, i.lineTo(e + Math.sin(g) * f, s - Math.cos(g) * f), g += Ki, i.lineTo(e + Math.sin(g) * f, s - Math.cos(g) * f), i.closePath();
        break;
      case "rectRounded":
        c = f * 0.516, l = f - c, r = Math.cos(g + $t) * l, a = Math.sin(g + $t) * l, i.arc(e - r, s - a, c, g - B, g - V), i.arc(e + a, s - r, c, g - V, g), i.arc(e + r, s + a, c, g, g + V), i.arc(e - a, s + r, c, g + V, g + B), i.closePath();
        break;
      case "rect":
        if (!u) {
          l = Math.SQRT1_2 * f, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        g += $t;
      case "rectRot":
        r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + a, s - r), i.lineTo(e + r, s + a), i.lineTo(e - a, s + r), i.closePath();
        break;
      case "crossRot":
        g += $t;
      case "cross":
        r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r);
        break;
      case "star":
        r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r), g += $t, r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(g) * f, s + Math.sin(g) * f);
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function re(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Xe(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Ue(i) {
  i.restore();
}
function lr(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else
    n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function cr(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    s ? t.cp1x : t.cp2x,
    s ? t.cp1y : t.cp2y,
    s ? e.cp2x : e.cp1x,
    s ? e.cp2y : e.cp1y,
    e.x,
    e.y
  );
}
function Tt(i, t, e, s, n, o = {}) {
  const r = z(t) ? t : [t], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, hr(i, o), l = 0; l < r.length; ++l)
    c = r[l], a && (o.strokeColor && (i.strokeStyle = o.strokeColor), T(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), dr(i, e, s, c, o), s += n.lineHeight;
  i.restore();
}
function hr(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), T(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function dr(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function ae(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, -V, B, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, B, V, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, V, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -V, !0), i.lineTo(e + r.topLeft, s);
}
const ur = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/), fr = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function gr(i, t) {
  const e = ("" + i).match(ur);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const pr = (i) => +i || 0;
function Ii(i, t) {
  const e = {}, s = D(t), n = s ? Object.keys(t) : t, o = D(i) ? s ? (r) => C(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = pr(o(r));
  return e;
}
function kn(i) {
  return Ii(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Dt(i) {
  return Ii(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function K(i) {
  const t = kn(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function $(i, t) {
  i = i || {}, t = t || O.font;
  let e = C(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = C(i.style, t.style);
  s && !("" + s).match(fr) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
  const n = {
    family: C(i.family, t.family),
    lineHeight: gr(C(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: C(i.weight, t.weight),
    string: ""
  };
  return n.string = rr(n), n;
}
function Zt(i, t, e, s) {
  let n = !0, o, r, a;
  for (o = 0, r = i.length; o < r; ++o)
    if (a = i[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), n = !1), e !== void 0 && z(a) && (a = a[e % a.length], n = !1), a !== void 0))
      return s && !n && (s.cacheable = !1), a;
}
function mr(i, t, e) {
  const { min: s, max: n } = i, o = an(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function vt(i, t) {
  return Object.assign(Object.create(i), t);
}
function zi(i, t = [""], e = i, s, n = () => i[0]) {
  et(s) || (s = Cn("_fallback", i));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: e,
    _fallback: s,
    _getTarget: n,
    override: (r) => zi([r, ...i], t, e, s)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete i[0][a], !0;
    },
    get(r, a) {
      return Sn(
        r,
        a,
        () => wr(a, t, i, r)
      );
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(r, a) {
      return as(r).includes(a);
    },
    ownKeys(r) {
      return as(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = n());
      return r[a] = c[a] = l, delete r._keys, !0;
    }
  });
}
function Vt(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: wn(i, s),
    setContext: (o) => Vt(i, o, e, s),
    override: (o) => Vt(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    get(o, r, a) {
      return Sn(
        o,
        r,
        () => xr(o, r, a)
      );
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? { enumerable: !0, configurable: !0 } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(o, r) {
      return Reflect.has(i, r);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function wn(i, t = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: yt(e) ? e : () => e,
    isIndexable: yt(s) ? s : () => s
  };
}
const br = (i, t) => i ? i + Oi(t) : t, Bi = (i, t) => D(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Sn(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t))
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function xr(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return yt(a) && r.isScriptable(t) && (a = _r(t, a, i, e)), z(a) && a.length && (a = yr(t, a, i, r.isIndexable)), Bi(t, a) && (a = Vt(a, n, o && o[t], r)), a;
}
function _r(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  return a.add(i), t = t(o, r || s), a.delete(i), Bi(i, t) && (t = Vi(n._scopes, n, i, t)), t;
}
function yr(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (et(o.index) && s(i))
    t = t[o.index % t.length];
  else if (D(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Vi(c, n, i, h);
      t.push(Vt(d, o, r && r[i], a));
    }
  }
  return t;
}
function Pn(i, t, e) {
  return yt(i) ? i(t, e) : i;
}
const vr = (i, t) => i === !0 ? t : typeof i == "string" ? _t(t, i) : void 0;
function Mr(i, t, e, s, n) {
  for (const o of t) {
    const r = vr(e, o);
    if (r) {
      i.add(r);
      const a = Pn(r._fallback, e, n);
      if (et(a) && a !== e && a !== s)
        return a;
    } else if (r === !1 && et(s) && e !== s)
      return null;
  }
  return !1;
}
function Vi(i, t, e, s) {
  const n = t._rootScopes, o = Pn(t._fallback, e, s), r = [...i, ...n], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = rs(a, r, e, o || e, s);
  return l === null || et(o) && o !== e && (l = rs(a, r, o, l, s), l === null) ? !1 : zi(
    Array.from(a),
    [""],
    n,
    o,
    () => kr(t, e, s)
  );
}
function rs(i, t, e, s, n) {
  for (; e; )
    e = Mr(i, t, e, s, n);
  return e;
}
function kr(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return z(n) && D(e) ? e : n;
}
function wr(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Cn(br(o, i), e), et(n))
      return Bi(i, n) ? Vi(e, s, i, n) : n;
}
function Cn(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (et(s))
      return s;
  }
}
function as(i) {
  let t = i._keys;
  return t || (t = i._keys = Sr(i._scopes)), t;
}
function Sr(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Dn(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, h;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, h = t[c], r[a] = {
      r: n.parse(_t(h, o), c)
    };
  return r;
}
const Pr = Number.EPSILON || 1e-14, Wt = (i, t) => t < i.length && !i[t].skip && i[t], On = (i) => i === "x" ? "y" : "x";
function Cr(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = bi(o, n), l = bi(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, u = s * h;
  return {
    previous: {
      x: o.x - d * (r.x - n.x),
      y: o.y - d * (r.y - n.y)
    },
    next: {
      x: o.x + u * (r.x - n.x),
      y: o.y + u * (r.y - n.y)
    }
  };
}
function Dr(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Wt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Wt(i, h + 1), !(!l || !c)) {
      if (te(t[h], 0, Pr)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function Or(i, t, e = "x") {
  const s = On(e), n = i.length;
  let o, r, a, l = Wt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Wt(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function Ar(i, t = "x") {
  const e = On(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Wt(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Wt(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? lt(n[r - 1]) !== lt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  Dr(i, n, o), Or(i, o, t);
}
function De(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function Tr(i, t) {
  let e, s, n, o, r, a = re(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && re(i[e + 1], t), o && (n = i[e], r && (n.cp1x = De(n.cp1x, t.left, t.right), n.cp1y = De(n.cp1y, t.top, t.bottom)), a && (n.cp2x = De(n.cp2x, t.left, t.right), n.cp2y = De(n.cp2y, t.top, t.bottom)));
}
function Lr(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Ar(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = Cr(
        c,
        a,
        i[Math.min(o + 1, r - (s ? 0 : 1)) % r],
        t.tension
      ), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Tr(i, e);
}
function An() {
  return typeof window < "u" && typeof document < "u";
}
function Wi(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function He(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Ke = (i) => window.getComputedStyle(i, null);
function Rr(i, t) {
  return Ke(i).getPropertyValue(t);
}
const Er = ["top", "right", "bottom", "left"];
function Ot(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Er[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Fr = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ir(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Fr(n, o, i.target))
    a = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return { x: a, y: l, box: r };
}
function Pt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Ke(e), o = n.boxSizing === "border-box", r = Ot(n, "padding"), a = Ot(n, "border", "width"), { x: l, y: c, box: h } = Ir(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / f * e.width / s),
    y: Math.round((c - u) / g * e.height / s)
  };
}
function zr(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = Wi(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Ke(o), l = Ot(a, "border", "width"), c = Ot(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = He(a.maxWidth, o, "clientWidth"), n = He(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ve,
    maxHeight: n || Ve
  };
}
const ai = (i) => Math.round(i * 10) / 10;
function Br(i, t, e, s) {
  const n = Ke(i), o = Ot(n, "margin"), r = He(n.maxWidth, i, "clientWidth") || Ve, a = He(n.maxHeight, i, "clientHeight") || Ve, l = zr(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const d = Ot(n, "border", "width"), u = Ot(n, "padding");
    c -= u.width + d.width, h -= u.height + d.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? Math.floor(c / s) : h - o.height), c = ai(Math.min(c, r, l.maxWidth)), h = ai(Math.min(h, a, l.maxHeight)), c && !h && (h = ai(c / 2)), {
    width: c,
    height: h
  };
}
function ls(i, t, e) {
  const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
  i.height = n / s, i.width = o / s;
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Vr = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch {
  }
  return i;
}();
function cs(i, t) {
  const e = Rr(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Ct(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Wr(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Nr(i, t, e, s) {
  const n = { x: i.cp2x, y: i.cp2y }, o = { x: t.cp1x, y: t.cp1y }, r = Ct(i, n, e), a = Ct(n, o, e), l = Ct(o, t, e), c = Ct(r, a, e), h = Ct(a, l, e);
  return Ct(c, h, e);
}
const hs = /* @__PURE__ */ new Map();
function Hr(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = hs.get(e);
  return s || (s = new Intl.NumberFormat(i, t), hs.set(e, s)), s;
}
function de(i, t, e) {
  return Hr(t, e).format(i);
}
const jr = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, $r = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function zt(i, t, e) {
  return i ? jr(t, e) : $r();
}
function Tn(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Ln(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Rn(i) {
  return i === "angle" ? {
    between: oe,
    compare: Ao,
    normalize: Z
  } : {
    between: ut,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function ds({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Yr(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Rn(s), l = t.length;
  let { start: c, end: h, loop: d } = i, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][s]), n, o); ++u)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), { start: c, end: h, loop: d, style: i.style };
}
function En(i, t, e) {
  if (!e)
    return [i];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Rn(s), { start: h, end: d, loop: u, style: f } = Yr(i, t, e), g = [];
  let p = !1, m = null, b, x, v;
  const y = () => l(n, v, b) && a(n, v) !== 0, _ = () => a(o, b) === 0 || l(o, v, b), M = () => p || y(), k = () => !p || _();
  for (let S = h, w = h; S <= d; ++S)
    x = t[S % r], !x.skip && (b = c(x[s]), b !== v && (p = l(b, n, o), m === null && M() && (m = a(b, n) === 0 ? S : w), m !== null && k() && (g.push(ds({ start: m, end: S, loop: u, count: r, style: f })), m = null), w = S, v = b));
  return m !== null && g.push(ds({ start: m, end: d, loop: u, count: r, style: f })), g;
}
function Fn(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = En(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Xr(i, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; )
    o--;
  return o %= t, { start: n, end: o };
}
function Ur(i, t, e, s) {
  const n = i.length, o = [];
  let r = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? a.skip || (s = !1, o.push({ start: t % n, end: (l - 1) % n, loop: s }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({ start: t % n, end: r % n, loop: s }), o;
}
function Kr(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = Xr(e, n, o, s);
  if (s === !0)
    return us(i, [{ start: r, end: a, loop: o }], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return us(i, Ur(e, r, l, c), e, t);
}
function us(i, t, e, s) {
  return !s || !s.setContext || !e ? t : qr(i, t, e, s);
}
function qr(i, t, e, s) {
  const n = i._chart.getContext(), o = fs(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(g, p, m, b) {
    const x = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= x;
      for (; e[p % l].skip; )
        p += x;
      g % l !== p % l && (c.push({ start: g % l, end: p % l, loop: m, style: b }), h = b, d = p % l);
    }
  }
  for (const g of t) {
    d = a ? d : g.start;
    let p = e[d % l], m;
    for (u = d + 1; u <= g.end; u++) {
      const b = e[u % l];
      m = fs(s.setContext(vt(n, {
        type: "segment",
        p0: p,
        p1: b,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), Gr(m, h) && f(d, u - 1, g.loop, h), p = b, h = m;
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function fs(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function Gr(i, t) {
  return t && JSON.stringify(i) !== JSON.stringify(t);
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
class Zr {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(s - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = fn.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var at = new Zr();
const gs = "transparent", Jr = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = ns(i || gs), n = s.valid && ns(t || gs);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class In {
  constructor(t, e, s, n) {
    const o = e[s];
    n = Zt([t.to, n, o, t.from]);
    const r = Zt([t.from, o, n]);
    this._active = !0, this._fn = t.fn || Jr[t.type || typeof r], this._easing = ee[t.easing] || ee.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Zt([t.to, e, n, t.from]), this._from = Zt([t.from, n, e]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({ res: e, rej: s });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
const Qr = ["x", "y", "borderWidth", "radius", "tension"], ta = ["color", "borderColor", "backgroundColor"];
O.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0
});
const ea = Object.keys(O.animation);
O.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (i) => i !== "onProgress" && i !== "onComplete" && i !== "fn"
});
O.set("animations", {
  colors: {
    type: "color",
    properties: ta
  },
  numbers: {
    type: "number",
    properties: Qr
  }
});
O.describe("animations", {
  _fallback: "animation"
});
O.set("transitions", {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: "transparent"
      },
      visible: {
        type: "boolean",
        duration: 0
      }
    }
  },
  hide: {
    animations: {
      colors: {
        to: "transparent"
      },
      visible: {
        type: "boolean",
        easing: "linear",
        fn: (i) => i | 0
      }
    }
  }
});
class Ni {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!D(t))
      return;
    const e = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const n = t[s];
      if (!D(n))
        return;
      const o = {};
      for (const r of ea)
        o[r] = n[r];
      (z(n.properties) && n.properties || [s]).forEach((r) => {
        (r === s || !e.has(r)) && e.set(r, o);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = sa(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && ia(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const u = s.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, a);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new In(u, t, c, h), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return at.add(this._chart, s), !0;
  }
}
function ia(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function sa(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e;
}
function ps(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function na(i, t, e) {
  if (e === !1)
    return !1;
  const s = ps(i, e), n = ps(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function oa(i) {
  let t, e, s, n;
  return D(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function zn(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function ms(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = n.length; r < a; ++r) {
      if (l = +n[r], l === e) {
        if (s.all)
          continue;
        break;
      }
      c = i.values[l], N(c) && (o || t === 0 || lt(t) === lt(c)) && (t += c);
    }
    return t;
  }
}
function ra(i) {
  const t = Object.keys(i), e = new Array(t.length);
  let s, n, o;
  for (s = 0, n = t.length; s < n; ++s)
    o = t[s], e[s] = {
      x: o,
      y: i[o]
    };
  return e;
}
function bs(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function aa(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function la(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function ca(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function xs(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function _s(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = aa(o, r, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, b = g._stacks || (g._stacks = {});
    u = b[c] = ca(n, h, p), u[a] = m, u._top = xs(u, r, !0, s.type), u._bottom = xs(u, r, !1, s.type);
  }
}
function li(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function ha(i, t) {
  return vt(
    i,
    {
      active: !1,
      dataset: void 0,
      datasetIndex: t,
      index: t,
      mode: "default",
      type: "dataset"
    }
  );
}
function da(i, t, e) {
  return vt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Yt(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e];
    }
  }
}
const ci = (i) => i === "reset" || i === "none", ys = (i, t) => t ? i : Object.assign({}, i), ua = (i, t, e) => i && !t.hidden && t._stacked && { keys: zn(e, !0), values: null };
class it {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = bs(t.vScale, t), this.addElements();
  }
  updateIndex(t) {
    this.index !== t && Yt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = C(s.xAxisID, li(t, "x")), r = e.yAxisID = C(s.yAxisID, li(t, "y")), a = e.rAxisID = C(s.rAxisID, li(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Zi(this._data, this), t._stacked && Yt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (D(e))
      this._data = ra(e);
    else if (s !== e) {
      if (s) {
        Zi(s, this);
        const n = this._cachedMeta;
        Yt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Eo(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = bs(e.vScale, e), e.stack !== s.stack && (n = !0, Yt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && _s(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, u = n;
    else {
      z(n[t]) ? u = this.parseArrayData(s, n, t, e) : D(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
      const f = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      s._sorted = l;
    }
    r && _s(this, u);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let u, f, g;
    for (u = 0, f = n; u < f; ++u)
      g = u + s, d[u] = {
        [a]: h || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, u, f;
    for (h = 0, d = n; h < d; ++h)
      u = h + s, f = e[u], c[h] = {
        x: o.parse(_t(f, a), u),
        y: r.parse(_t(f, l), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: zn(n, !0),
      values: e._stacks[t.axis]
    };
    return ms(a, r, o.index, { mode: s });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = ms(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = ua(e, s, this.chart), c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: h, max: d } = la(a);
    let u, f;
    function g() {
      f = n[u];
      const p = f[a.axis];
      return !N(f[t.axis]) || h > p || d < p;
    }
    for (u = 0; u < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], N(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = oa(C(this.options.clip, na(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = da(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = ha(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && et(s);
    if (a)
      return ys(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(O.elements[t]), g = () => this.getContext(s, n), p = c.resolveNamedOptions(u, f, g, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(ys(p, l))), p;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, s, e));
    }
    const c = new Ni(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ci(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), { sharedOptions: o, includeOptions: r };
  }
  updateElement(t, e, s, n) {
    ci(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !ci(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, r = Math.min(o, n);
    r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Yt(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(["_removeElements", t, e]);
    const s = arguments.length - 2;
    s && this._sync(["_insertElements", t, s]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
it.defaults = {};
it.prototype.datasetElementType = null;
it.prototype.dataElementType = null;
function fa(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = un(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function ga(i) {
  const t = i.iScale, e = fa(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (et(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function pa(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return T(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function ma(i, t, e, s) {
  const n = t.pixels, o = n[i];
  let r = i > 0 ? n[i - 1] : null, a = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / s,
    ratio: e.barPercentage,
    start: c
  };
}
function ba(i, t, e, s) {
  const n = e.parse(i[0], s), o = e.parse(i[1], s), r = Math.min(n, o), a = Math.max(n, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: o,
    min: r,
    max: a
  };
}
function Bn(i, t, e, s) {
  return z(i) ? ba(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function vs(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, h, d, u;
  for (c = e, h = e + s; c < h; ++c)
    u = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(Bn(u, d, o, c));
  return l;
}
function hi(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function xa(i, t, e) {
  return i !== 0 ? lt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function _a(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), { start: e, end: s, reverse: t, top: n, bottom: o };
}
function ya(i, t, e, s) {
  let n = t.borderSkipped;
  const o = {};
  if (!n) {
    i.borderSkipped = o;
    return;
  }
  if (n === !0) {
    i.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: h } = _a(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Ms(h, r, a, l)] = !0, n = c)), o[Ms(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Ms(i, t, e, s) {
  return s ? (i = va(i, t, e), i = ks(i, e, t)) : i = ks(i, t, e), i;
}
function va(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function ks(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function Ma(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ue extends it {
  parsePrimitiveData(t, e, s, n) {
    return vs(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return vs(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
    let u, f, g, p;
    for (u = s, f = s + n; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(_t(p, c), u), d.push(Bn(_t(p, h), g, r, u));
    return d;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    const o = s._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = hi(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f), p = o || T(g[a.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h), b = (g._stacks || {})[a.axis], x = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !b || hi(g._custom) || r === b._top || r === b._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const v = x.options || t[f].options;
      ya(x, v, b, r), Ma(x, v, h.ratio), this.updateElement(t[f], f, x, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped), o = s.options.stacked, r = [], a = (l) => {
      const c = l.controller.getParsed(e), h = c && c[l.vScale.axis];
      if (T(h) || isNaN(h))
        return !0;
    };
    for (const l of n)
      if (!(e !== void 0 && a(l)) && ((o === !1 || r.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && r.push(l.stack), l.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const a = t.barThickness;
    return {
      min: a || ga(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: s }, options: { base: n, minBarLength: o } } = this, r = n || 0, a = this.getParsed(t), l = a._custom, c = hi(l);
    let h = a[e.axis], d = 0, u = s ? this.applyStack(e, a, s) : h, f, g;
    u !== h && (d = u - h, u = h), c && (h = l.barStart, u = l.barEnd - l.barStart, h !== 0 && lt(h) !== lt(l.barEnd) && (d = 0), d += h);
    const p = !T(n) && !c ? n : d;
    let m = e.getPixelForValue(p);
    if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, g = f - m, Math.abs(g) < o) {
      g = xa(g, e, r) * o, h === r && (m -= g / 2);
      const b = e.getPixelForDecimal(0), x = e.getPixelForDecimal(1), v = Math.min(b, x), y = Math.max(b, x);
      m = Math.max(Math.min(m, y), v), f = m + g;
    }
    if (m === e.getPixelForValue(r)) {
      const b = lt(g) * e.getLineWidthForValue(r) / 2;
      m += b, g -= b;
    }
    return {
      size: g,
      base: m,
      head: f,
      center: f + g / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = C(n.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? ma(t, e, n, c) : pa(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = h.start + h.chunk * d + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
    } else
      a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(r, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
    let o = 0;
    for (; o < n; ++o)
      this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
  }
}
ue.id = "bar";
ue.defaults = {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "base", "width", "height"]
    }
  }
};
ue.overrides = {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
};
class fe extends it {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, s, n) {
    const o = super.parsePrimitiveData(t, e, s, n);
    for (let r = 0; r < o.length; r++)
      o[r]._custom = this.resolveDataElementOptions(r + s).radius;
    return o;
  }
  parseArrayData(t, e, s, n) {
    const o = super.parseArrayData(t, e, s, n);
    for (let r = 0; r < o.length; r++) {
      const a = e[s + r];
      o[r]._custom = C(a[2], this.resolveDataElementOptions(r + s).radius);
    }
    return o;
  }
  parseObjectData(t, e, s, n) {
    const o = super.parseObjectData(t, e, s, n);
    for (let r = 0; r < o.length; r++) {
      const a = e[s + r];
      o[r]._custom = C(a && a.r && +a.r, this.resolveDataElementOptions(r + s).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let s = t.length - 1; s >= 0; --s)
      e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { xScale: s, yScale: n } = e, o = this.getParsed(t), r = s.getLabelForValue(o.x), a = n.getLabelForValue(o.y), l = o._custom;
    return {
      label: e.label,
      value: "(" + r + ", " + a + (l ? ", " + l : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n), h = r.axis, d = a.axis;
    for (let u = e; u < e + s; u++) {
      const f = t[u], g = !o && this.getParsed(u), p = {}, m = p[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(g[h]), b = p[d] = o ? a.getBasePixel() : a.getPixelForValue(g[d]);
      p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (p.options.radius = 0)), this.updateElement(f, u, p, n);
    }
  }
  resolveDataElementOptions(t, e) {
    const s = this.getParsed(t);
    let n = super.resolveDataElementOptions(t, e);
    n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
    const o = n.radius;
    return e !== "active" && (n.radius = 0), n.radius += C(s && s._custom, o), n;
  }
}
fe.id = "bubble";
fe.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius"]
    }
  }
};
fe.overrides = {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        }
      }
    }
  }
};
function ka(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < F) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (v, y, _) => oe(v, a, l, !0) ? 1 : Math.max(y, y * e, _, _ * e), g = (v, y, _) => oe(v, a, l, !0) ? -1 : Math.min(y, y * e, _, _ * e), p = f(0, c, d), m = f(V, h, u), b = g(B, c, d), x = g(B + V, h, u);
    s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, r = -(m + x) / 2;
  }
  return { ratioX: s, ratioY: n, offsetX: o, offsetY: r };
}
class Lt extends it {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = s;
    else {
      let o = (l) => +s[l];
      if (D(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +_t(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return nt(this.options.rotation - 90);
  }
  _getCircumference() {
    return nt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = F, e = -F;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s)) {
        const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), r = n._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(yo(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = ka(d, h, l), m = (s.width - r) / u, b = (s.height - r) / f, x = Math.max(Math.min(m, b) / 2, 0), v = an(this.options.radius, x), y = Math.max(v * l, 0), _ = (v - y) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * v, this.offsetY = p * v, n.total = this.calculateTotal(), this.outerRadius = v - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
    let b = this._getRotation(), x;
    for (x = 0; x < e; ++x)
      b += this._circumference(x, o);
    for (x = e; x < e + s; ++x) {
      const v = this._circumference(x, o), y = t[x], _ = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: b,
        endAngle: b + v,
        circumference: v,
        outerRadius: g,
        innerRadius: f
      };
      m && (_.options = p || this.resolveDataElementOptions(x, y.active ? "active" : n)), b += v, this.updateElement(y, x, _, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let s = 0, n;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? F * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = de(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, o, r, a, l;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n)
        if (s.isDatasetVisible(n)) {
          r = s.getDatasetMeta(n), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (n = 0, o = t.length; n < o; ++n)
      l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(C(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
Lt.id = "doughnut";
Lt.defaults = {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
};
Lt.descriptors = {
  _scriptable: (i) => i !== "spacing",
  _indexable: (i) => i !== "spacing"
};
Lt.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const { labels: { pointStyle: e } } = i.legend.options;
            return t.labels.map((s, n) => {
              const r = i.getDatasetMeta(0).controller.getStyle(n);
              return {
                text: s,
                fillStyle: r.backgroundColor,
                strokeStyle: r.borderColor,
                lineWidth: r.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(n),
                index: n
              };
            });
          }
          return [];
        }
      },
      onClick(i, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          let t = i.label;
          const e = ": " + i.formattedValue;
          return z(t) ? (t = t.slice(), t[0] += e) : t += e, t;
        }
      }
    }
  }
};
class ge extends it {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = pn(e, n, r);
    this._drawStart = a, this._drawCount = l, mn(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = Bt(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none";
    let x = e > 0 && this.getParsed(e - 1);
    for (let v = e; v < e + s; ++v) {
      const y = t[v], _ = this.getParsed(v), M = b ? y : {}, k = T(_[f]), S = M[u] = r.getPixelForValue(_[u], v), w = M[f] = o || k ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, _, l) : _[f], v);
      M.skip = isNaN(S) || isNaN(w) || k, M.stop = v > 0 && Math.abs(_[u] - x[u]) > m, p && (M.parsed = _, M.raw = c.data[v]), d && (M.options = h || this.resolveDataElementOptions(v, y.active ? "active" : n)), b || this.updateElement(y, v, M, n), x = _;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
ge.id = "line";
ge.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
};
ge.overrides = {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
};
class pe extends it {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = de(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return Dn.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return t.data.forEach((s, n) => {
      const o = this.getParsed(n).r;
      !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), r = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
    this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - 0.5 * B;
    let f = u, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let b = f, x = f + this._computeAngle(g, n, p), v = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = x, o && (l.animateScale && (v = 0), l.animateRotate && (b = x = u));
      const y = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: v,
        startAngle: b,
        endAngle: x,
        options: this.resolveDataElementOptions(g, m.active ? "active" : n)
      };
      this.updateElement(m, g, y, n);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((s, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
    }), e;
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t) ? nt(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
pe.id = "polarArea";
pe.defaults = {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
    }
  },
  indexAxis: "r",
  startAngle: 0
};
pe.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const { labels: { pointStyle: e } } = i.legend.options;
            return t.labels.map((s, n) => {
              const r = i.getDatasetMeta(0).controller.getStyle(n);
              return {
                text: s,
                fillStyle: r.backgroundColor,
                strokeStyle: r.borderColor,
                lineWidth: r.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(n),
                index: n
              };
            });
          }
          return [];
        }
      },
      onClick(i, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          return i.chart.data.labels[i.dataIndex] + ": " + i.formattedValue;
        }
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
};
class qe extends Lt {
}
qe.id = "pie";
qe.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
};
class me extends it {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(s[e.axis])
    };
  }
  parseObjectData(t, e, s, n) {
    return Dn.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
    if (s.points = n, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === n.length,
        options: r
      };
      this.updateElement(s, void 0, a, t);
    }
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, e, s, n) {
    const o = this._cachedMeta.rScale, r = n === "reset";
    for (let a = e; a < e + s; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : n), h = o.getPointPositionForValue(a, this.getParsed(a).r), d = r ? o.xCenter : h.x, u = r ? o.yCenter : h.y, f = {
        x: d,
        y: u,
        angle: h.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(l, a, f, n);
    }
  }
}
me.id = "radar";
me.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
};
me.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
};
class st {
  constructor() {
    this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
  }
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps(["x", "y"], t);
    return { x: e, y: s };
  }
  hasValue() {
    return Bt(this.x) && Bt(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
st.defaults = {};
st.defaultRoutes = void 0;
const Vn = {
  values(i) {
    return z(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = wa(i, e);
    }
    const r = tt(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = { notation: n, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), de(i, s, l);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const s = i / Math.pow(10, Math.floor(tt(i)));
    return s === 1 || s === 2 || s === 5 ? Vn.numeric.call(this, i, t, e) : "";
  }
};
function wa(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var be = { formatters: Vn };
O.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (i, t) => t.lineWidth,
    tickColor: (i, t) => t.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1
  },
  title: {
    display: !1,
    text: "",
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: be.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2
  }
});
O.route("scale.ticks", "color", "", "color");
O.route("scale.grid", "color", "", "borderColor");
O.route("scale.grid", "borderColor", "", "borderColor");
O.route("scale.title", "color", "", "color");
O.describe("scale", {
  _fallback: !1,
  _scriptable: (i) => !i.startsWith("before") && !i.startsWith("after") && i !== "callback" && i !== "parser",
  _indexable: (i) => i !== "borderDash" && i !== "tickBorderDash"
});
O.describe("scales", {
  _fallback: "scale"
});
O.describe("scale.ticks", {
  _scriptable: (i) => i !== "backdropPadding" && i !== "callback",
  _indexable: (i) => i !== "backdropPadding"
});
function Sa(i, t) {
  const e = i.options.ticks, s = e.maxTicksLimit || Pa(i), n = e.major.enabled ? Da(t) : [], o = n.length, r = n[0], a = n[o - 1], l = [];
  if (o > s)
    return Oa(t, l, n, o / s), l;
  const c = Ca(n, t, s);
  if (o > 0) {
    let h, d;
    const u = o > 1 ? Math.round((a - r) / (o - 1)) : null;
    for (Oe(t, l, c, T(u) ? 0 : r - u, r), h = 0, d = o - 1; h < d; h++)
      Oe(t, l, c, n[h], n[h + 1]);
    return Oe(t, l, c, a, T(u) ? t.length : a + u), l;
  }
  return Oe(t, l, c), l;
}
function Pa(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function Ca(i, t, e) {
  const s = Aa(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Do(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Da(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Oa(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Oe(i, t, e, s, n) {
  const o = C(s, 0), r = Math.min(C(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function Aa(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const Ta = (i) => i === "left" ? "right" : i === "right" ? "left" : i, ws = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e;
function Ss(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function La(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Ra(i, t) {
  E(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Xt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Ps(i, t) {
  if (!i.display)
    return 0;
  const e = $(i.font, t), s = K(i.padding);
  return (z(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Ea(i, t) {
  return vt(i, {
    scale: t,
    type: "scale"
  });
}
function Fa(i, t, e) {
  return vt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Ia(i, t, e) {
  let s = Li(i);
  return (e && t !== "right" || !e && t === "right") && (s = Ta(s)), s;
}
function za(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, u, f, g;
  const p = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (f = U(s, o, a), D(e)) {
      const b = Object.keys(e)[0], x = e[b];
      g = h[b].getPixelForValue(x) + p - t;
    } else
      e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = ws(i, e, t);
    u = a - o;
  } else {
    if (D(e)) {
      const b = Object.keys(e)[0], x = e[b];
      f = h[b].getPixelForValue(x) - m + t;
    } else
      e === "center" ? f = (c.left + c.right) / 2 - m + t : f = ws(i, e, t);
    g = U(s, r, n), d = e === "left" ? -V : V;
  }
  return { titleX: f, titleY: g, maxWidth: u, rotation: d };
}
class Mt extends st {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = Q(t, Number.POSITIVE_INFINITY), e = Q(e, Number.NEGATIVE_INFINITY), s = Q(s, Number.POSITIVE_INFINITY), n = Q(n, Number.NEGATIVE_INFINITY), {
      min: Q(t, s),
      max: Q(e, n),
      minDefined: N(t),
      maxDefined: N(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
    if (n && o)
      return { min: e, max: s };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: Q(e, Q(s, e)),
      max: Q(s, Q(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    I(this.options.beforeUpdate, [this]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = mr(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ss(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Sa(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    I(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    I(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    I(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), I(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    I(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = I(e.callback, [o.value, s, t], this);
  }
  afterTickToLabelConversion() {
    I(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    I(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = Y(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Xt(t.grid) - e.padding - Ps(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Ai(Math.min(
      Math.asin(Y((h.highest.height + 6) / a, -1, 1)),
      Math.asin(Y(l / c, -1, 1)) - Math.asin(Y(u / c, -1, 1))
    )), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    I(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    I(this.options.beforeFit, [this]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Ps(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Xt(o) + l) : (t.height = this.maxHeight, t.width = Xt(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g = nt(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const b = s.mirror ? 0 : m * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = s.mirror ? 0 : p * d.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, m, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    I(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      T(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Ss(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length);
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: s, _longestTextCache: n } = this, o = [], r = [];
    let a = 0, l = 0, c, h, d, u, f, g, p, m, b, x, v;
    for (c = 0; c < e; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = g = f.string, p = n[g] = n[g] || { data: {}, gc: [] }, m = f.lineHeight, b = x = 0, !T(u) && !z(u))
        b = Ne(s, p.data, p.gc, b, u), x = m;
      else if (z(u))
        for (h = 0, d = u.length; h < d; ++h)
          v = u[h], !T(v) && !z(v) && (b = Ne(s, p.data, p.gc, b, v), x += m);
      o.push(b), r.push(x), a = Math.max(b, a), l = Math.max(x, l);
    }
    Ra(n, e);
    const y = o.indexOf(a), _ = r.indexOf(l), M = (k) => ({ width: o[k] || 0, height: r[k] || 0 });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(y),
      highest: M(_),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return To(this._alignToPixels ? wt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = Fa(this.getContext(), t, s));
    }
    return this.$context || (this.$context = Ea(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = nt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r } = n, a = o.offset, l = this.isHorizontal(), h = this.ticks.length + (a ? 1 : 0), d = Xt(o), u = [], f = o.setContext(this.getContext()), g = f.drawBorder ? f.borderWidth : 0, p = g / 2, m = function(P) {
      return wt(s, P, g);
    };
    let b, x, v, y, _, M, k, S, w, L, R, A;
    if (r === "top")
      b = m(this.bottom), M = this.bottom - d, S = b - p, L = m(t.top) + p, A = t.bottom;
    else if (r === "bottom")
      b = m(this.top), L = t.top, A = m(t.bottom) - p, M = b + p, S = this.top + d;
    else if (r === "left")
      b = m(this.right), _ = this.right - d, k = b - p, w = m(t.left) + p, R = t.right;
    else if (r === "right")
      b = m(this.left), w = t.left, R = m(t.right) - p, _ = b + p, k = this.left + d;
    else if (e === "x") {
      if (r === "center")
        b = m((t.top + t.bottom) / 2 + 0.5);
      else if (D(r)) {
        const P = Object.keys(r)[0], j = r[P];
        b = m(this.chart.scales[P].getPixelForValue(j));
      }
      L = t.top, A = t.bottom, M = b + p, S = M + d;
    } else if (e === "y") {
      if (r === "center")
        b = m((t.left + t.right) / 2);
      else if (D(r)) {
        const P = Object.keys(r)[0], j = r[P];
        b = m(this.chart.scales[P].getPixelForValue(j));
      }
      _ = b - p, k = _ - d, w = t.left, R = t.right;
    }
    const H = C(n.ticks.maxTicksLimit, h), q = Math.max(1, Math.ceil(h / H));
    for (x = 0; x < h; x += q) {
      const P = o.setContext(this.getContext(x)), j = P.lineWidth, W = P.color, kt = P.borderDash || [], ti = P.borderDashOffset, Rt = P.tickWidth, ke = P.tickColor, Et = P.tickBorderDash || [], jt = P.tickBorderDashOffset;
      v = La(this, x, a), v !== void 0 && (y = wt(s, v, j), l ? _ = k = w = R = y : M = S = L = A = y, u.push({
        tx1: _,
        ty1: M,
        tx2: k,
        ty2: S,
        x1: w,
        y1: L,
        x2: R,
        y2: A,
        width: j,
        color: W,
        borderDash: kt,
        borderDashOffset: ti,
        tickWidth: Rt,
        tickColor: ke,
        tickBorderDash: Et,
        tickBorderDashOffset: jt
      }));
    }
    return this._ticksLength = h, this._borderValue = b, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Xt(s.grid), f = u + h, g = d ? -h : f, p = -nt(this.labelRotation), m = [];
    let b, x, v, y, _, M, k, S, w, L, R, A, H = "middle";
    if (n === "top")
      M = this.bottom - g, k = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      M = this.top + g, k = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const P = this._getYAxisLabelAlignment(u);
      k = P.textAlign, _ = P.x;
    } else if (n === "right") {
      const P = this._getYAxisLabelAlignment(u);
      k = P.textAlign, _ = P.x;
    } else if (e === "x") {
      if (n === "center")
        M = (t.top + t.bottom) / 2 + f;
      else if (D(n)) {
        const P = Object.keys(n)[0], j = n[P];
        M = this.chart.scales[P].getPixelForValue(j) + f;
      }
      k = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        _ = (t.left + t.right) / 2 - f;
      else if (D(n)) {
        const P = Object.keys(n)[0], j = n[P];
        _ = this.chart.scales[P].getPixelForValue(j);
      }
      k = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
    const q = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      v = a[b], y = v.label;
      const P = o.setContext(this.getContext(b));
      S = this.getPixelForTick(b) + o.labelOffset, w = this._resolveTickFontOptions(b), L = w.lineHeight, R = z(y) ? y.length : 1;
      const j = R / 2, W = P.color, kt = P.textStrokeColor, ti = P.textStrokeWidth;
      let Rt = k;
      r ? (_ = S, k === "inner" && (b === x - 1 ? Rt = this.options.reverse ? "left" : "right" : b === 0 ? Rt = this.options.reverse ? "right" : "left" : Rt = "center"), n === "top" ? c === "near" || p !== 0 ? A = -R * L + L / 2 : c === "center" ? A = -q.highest.height / 2 - j * L + L : A = -q.highest.height + L / 2 : c === "near" || p !== 0 ? A = L / 2 : c === "center" ? A = q.highest.height / 2 - j * L : A = q.highest.height - R * L, d && (A *= -1)) : (M = S, A = (1 - R) * L / 2);
      let ke;
      if (P.showLabelBackdrop) {
        const Et = K(P.backdropPadding), jt = q.heights[b], ei = q.widths[b];
        let ii = M + A - Et.top, si = _ - Et.left;
        switch (H) {
          case "middle":
            ii -= jt / 2;
            break;
          case "bottom":
            ii -= jt;
            break;
        }
        switch (k) {
          case "center":
            si -= ei / 2;
            break;
          case "right":
            si -= ei;
            break;
        }
        ke = {
          left: si,
          top: ii,
          width: ei + Et.width,
          height: jt + Et.height,
          color: P.backdropColor
        };
      }
      m.push({
        rotation: p,
        label: y,
        font: w,
        color: W,
        strokeColor: kt,
        strokeWidth: ti,
        textOffset: A,
        textAlign: Rt,
        textBaseline: H,
        translation: [_, M],
        backdrop: ke
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-nt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", { textAlign: c, x: h };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === "top" || e === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        e.drawOnChartArea && a(
          { x: l.x1, y: l.y1 },
          { x: l.x2, y: l.y2 },
          l
        ), e.drawTicks && a(
          { x: l.tx1, y: l.ty1 },
          { x: l.tx2, y: l.ty2 },
          {
            color: l.tickColor,
            width: l.tickWidth,
            borderDash: l.tickBorderDash,
            borderDashOffset: l.tickBorderDashOffset
          }
        );
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { grid: s } } = this, n = s.setContext(this.getContext()), o = s.drawBorder ? n.borderWidth : 0;
    if (!o)
      return;
    const r = s.setContext(this.getContext(0)).lineWidth, a = this._borderValue;
    let l, c, h, d;
    this.isHorizontal() ? (l = wt(t, this.left, o) - o / 2, c = wt(t, this.right, r) + r / 2, h = d = a) : (h = wt(t, this.top, o) - o / 2, d = wt(t, this.bottom, r) + r / 2, l = c = a), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(l, h), e.lineTo(c, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && Xe(s, n);
    const o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
    let r, a;
    for (r = 0, a = o.length; r < a; ++r) {
      const l = o[r], c = l.font, h = l.label;
      l.backdrop && (s.fillStyle = l.backdrop.color, s.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height));
      let d = l.textOffset;
      Tt(s, h, 0, d, c, l);
    }
    n && Ue(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = $(s.font), r = K(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || D(e) ? (l += r.bottom, z(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = za(this, l, e, a);
    Tt(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: Ia(a, e, n),
      textBaseline: "middle",
      translation: [c, h]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = C(t.grid && t.grid.z, -1);
    return !this._isVisible() || this.draw !== Mt.prototype.draw ? [{
      z: e,
      draw: (n) => {
        this.draw(n);
      }
    }] : [{
      z: s,
      draw: (n) => {
        this.drawBackground(), this.drawGrid(n), this.drawTitle();
      }
    }, {
      z: s + 1,
      draw: () => {
        this.drawBorder();
      }
    }, {
      z: e,
      draw: (n) => {
        this.drawLabels(n);
      }
    }];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return $(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ae {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Wa(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, Ba(t, r, s), this.override && O.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in O[n] && (delete O[n][s], this.override && delete At[s]);
  }
}
function Ba(i, t, e) {
  const s = ne(/* @__PURE__ */ Object.create(null), [
    e ? O.get(e) : {},
    O.get(t),
    i.defaults
  ]);
  O.set(t, s), i.defaultRoutes && Va(t, i.defaultRoutes), i.descriptors && O.describe(t, i.descriptors);
}
function Va(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [i].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    O.route(o, n, l, a);
  });
}
function Wa(i) {
  return "id" in i && "defaults" in i;
}
class Na {
  constructor() {
    this.controllers = new Ae(it, "datasets", !0), this.elements = new Ae(st, "elements"), this.plugins = new Ae(Object, "plugins"), this.scales = new Ae(Mt, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [...e].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : E(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Oi(t);
    I(s["before" + n], [], s), e[t](s), I(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var ot = new Na();
class xe extends it {
  update(t) {
    const e = this._cachedMeta, { data: s = [] } = e, n = this.chart._animationsDisabled;
    let { start: o, count: r } = pn(e, s, n);
    if (this._drawStart = o, this._drawCount = r, mn(e) && (o = 0, r = s.length), this.options.showLine) {
      const { dataset: a, _dataset: l } = e;
      a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!l._decimated, a.points = s;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(a, void 0, {
        animated: !n,
        options: c
      }, t);
    }
    this.updateElements(s, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = ot.getElement("line")), super.addElements();
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h), u = this.includeOptions(n, d), f = r.axis, g = a.axis, { spanGaps: p, segment: m } = this.options, b = Bt(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || n === "none";
    let v = e > 0 && this.getParsed(e - 1);
    for (let y = e; y < e + s; ++y) {
      const _ = t[y], M = this.getParsed(y), k = x ? _ : {}, S = T(M[g]), w = k[f] = r.getPixelForValue(M[f], y), L = k[g] = o || S ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[g], y);
      k.skip = isNaN(w) || isNaN(L) || S, k.stop = y > 0 && Math.abs(M[f] - v[f]) > b, m && (k.parsed = M, k.raw = c.data[y]), u && (k.options = d || this.resolveDataElementOptions(y, _.active ? "active" : n)), x || this.updateElement(_, y, k, n), v = M;
    }
    this.updateSharedOptions(d, n, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = e.length - 1; l >= 0; --l)
        a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const s = t.dataset, n = s.options && s.options.borderWidth || 0;
    if (!e.length)
      return n;
    const o = e[0].size(this.resolveDataElementOptions(0)), r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(n, o, r) / 2;
  }
}
xe.id = "scatter";
xe.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
};
xe.overrides = {
  interaction: {
    mode: "point"
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          return "(" + i.label + ", " + i.formattedValue + ")";
        }
      }
    }
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
};
var Wn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: ue,
  BubbleController: fe,
  DoughnutController: Lt,
  LineController: ge,
  PolarAreaController: pe,
  PieController: qe,
  RadarController: me,
  ScatterController: xe
});
function St() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class vi {
  constructor(t) {
    this.options = t || {};
  }
  init(t) {
  }
  formats() {
    return St();
  }
  parse(t, e) {
    return St();
  }
  format(t, e) {
    return St();
  }
  add(t, e, s) {
    return St();
  }
  diff(t, e, s) {
    return St();
  }
  startOf(t, e, s) {
    return St();
  }
  endOf(t, e) {
    return St();
  }
}
vi.override = function(i) {
  Object.assign(vi.prototype, i);
};
var Nn = {
  _date: vi
};
function Ha(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Lo : ft;
    if (s) {
      if (n._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h), u = l(o, t, e + h);
          return { lo: d.lo, hi: u.hi };
        }
      }
    } else
      return l(o, t, e);
  }
  return { lo: 0, hi: o.length - 1 };
}
function _e(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = Ha(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function ja(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function di(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || _e(i, e, t, function(a, l, c) {
    !n && !re(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({ element: a, datasetIndex: l, index: c });
  }, !0), o;
}
function $a(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps(["startAngle", "endAngle"], s), { angle: d } = hn(r, { x: t.x, y: t.y });
    oe(d, c, h) && n.push({ element: r, datasetIndex: a, index: l });
  }
  return _e(i, e, t, o), n;
}
function Ya(i, t, e, s, n, o) {
  let r = [];
  const a = ja(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const g = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !f)
      return;
    const m = a(t, g);
    m < l ? (r = [{ element: h, datasetIndex: d, index: u }], l = m) : m === l && r.push({ element: h, datasetIndex: d, index: u });
  }
  return _e(i, e, t, c), r;
}
function ui(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? $a(i, t, e, n) : Ya(i, t, e, s, n, o);
}
function Cs(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return _e(i, e, t, (l, c, h) => {
    l[r](t[e], n) && (o.push({ element: l, datasetIndex: c, index: h }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var Hn = {
  evaluateInteractionItems: _e,
  modes: {
    index(i, t, e, s) {
      const n = Pt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? di(i, n, o, s, r) : ui(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({ element: d, datasetIndex: c.index, index: h });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = Pt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? di(i, n, o, s, r) : ui(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({ element: c[h], datasetIndex: l, index: h });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = Pt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return di(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = Pt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ui(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = Pt(t, i);
      return Cs(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = Pt(t, i);
      return Cs(i, n, "y", e.intersect, s);
    }
  }
};
const jn = ["left", "top", "right", "bottom"];
function Ut(i, t) {
  return i.filter((e) => e.pos === t);
}
function Ds(i, t) {
  return i.filter((e) => jn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Kt(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Xa(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Ua(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !jn.includes(n))
      continue;
    const r = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, r.weight += o;
  }
  return t;
}
function Ka(i, t) {
  const e = Ua(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function qa(i) {
  const t = Xa(i), e = Kt(t.filter((c) => c.box.fullSize), !0), s = Kt(Ut(t, "left"), !0), n = Kt(Ut(t, "right")), o = Kt(Ut(t, "top"), !0), r = Kt(Ut(t, "bottom")), a = Ds(t, "x"), l = Ds(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Ut(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Os(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function $n(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Ga(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!D(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || { size: 0, count: 1 };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && $n(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Os(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Os(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? { same: c, other: h } : { same: h, other: c };
}
function Za(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Ja(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return n.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return s(i ? ["left", "right"] : ["top", "bottom"]);
}
function Jt(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(
      a.width || t.w,
      a.height || t.h,
      Ja(a.horizontal, t)
    );
    const { same: d, other: u } = Ga(t, e, a, s);
    c |= d && n.length, h = h || u, l.fullSize || n.push(a);
  }
  return c && Jt(n, t, e, s) || h;
}
function Te(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function As(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || { count: 1, placed: 0, weight: 1 }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      et(c.start) && (r = c.start), l.fullSize ? Te(l, n.left, r, e.outerWidth - n.right - n.left, u) : Te(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      et(c.start) && (o = c.start), l.fullSize ? Te(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Te(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
O.set("layout", {
  autoPadding: !0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var X = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [{
        z: 0,
        draw(e) {
          t.draw(e);
        }
      }];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = K(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = qa(i.boxes), l = a.vertical, c = a.horizontal;
    E(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, n);
    $n(u, K(s));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Ka(l.concat(c), d);
    Jt(a.fullSize, f, d, g), Jt(l, f, d, g), Jt(c, f, d, g) && Jt(l, f, d, g), Za(f), As(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, As(a.rightAndBottom, f, d, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, E(a.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, i.chartArea), m.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
    });
  }
};
class Hi {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Yn extends Hi {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ie = "$chartjs", Qa = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Ts = (i) => i === null || i === "";
function tl(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ie] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Ts(n)) {
    const o = cs(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Ts(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = cs(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Xn = Vr ? { passive: !0 } : !1;
function el(i, t, e) {
  i.addEventListener(t, e, Xn);
}
function il(i, t, e) {
  i.canvas.removeEventListener(t, e, Xn);
}
function sl(i, t) {
  const e = Qa[i.type] || i.type, { x: s, y: n } = Pt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function je(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function nl(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || je(a.addedNodes, s), r = r && !je(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
function ol(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || je(a.removedNodes, s), r = r && !je(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
const le = /* @__PURE__ */ new Map();
let Ls = 0;
function Un() {
  const i = window.devicePixelRatio;
  i !== Ls && (Ls = i, le.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function rl(i, t) {
  le.size || window.addEventListener("resize", Un), le.set(i, t);
}
function al(i) {
  le.delete(i), le.size || window.removeEventListener("resize", Un);
}
function ll(i, t, e) {
  const s = i.canvas, n = s && Wi(s);
  if (!n)
    return;
  const o = gn((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), rl(i, o), r;
}
function fi(i, t, e) {
  e && e.disconnect(), t === "resize" && al(i);
}
function cl(i, t, e) {
  const s = i.canvas, n = gn((o) => {
    i.ctx !== null && e(sl(o, i));
  }, i, (o) => {
    const r = o[0];
    return [r, r.offsetX, r.offsetY];
  });
  return el(s, t, n), n;
}
class Kn extends Hi {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (tl(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ie])
      return !1;
    const s = e[Ie].initial;
    ["height", "width"].forEach((o) => {
      const r = s[o];
      T(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ie], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: nl,
      detach: ol,
      resize: ll
    }[e] || cl;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: fi,
      detach: fi,
      resize: fi
    }[e] || il)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Br(t, e, s, n);
  }
  isAttached(t) {
    const e = Wi(t);
    return !!(e && e.isConnected);
  }
}
function qn(i) {
  return !An() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Yn : Kn;
}
class hl {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [e, n, o.options];
      if (I(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    T(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = C(s.options && s.options.plugins, {}), o = dl(s);
    return n === !1 && !e ? [] : fl(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function dl(i) {
  const t = {}, e = [], s = Object.keys(ot.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(ot.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return { plugins: e, localIds: t };
}
function ul(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function fl(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = ul(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: gl(i.config, { plugin: a, local: e[l] }, c, r)
    });
  }
  return o;
}
function gl(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [""], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Mi(i, t) {
  const e = O.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function pl(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function ml(i, t) {
  return i === t ? "_index_" : "_value_";
}
function bl(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function ki(i, t) {
  return i === "x" || i === "y" ? i : t.axis || bl(t.position) || i.charAt(0).toLowerCase();
}
function xl(i, t) {
  const e = At[i.type] || { scales: {} }, s = t.scales || {}, n = Mi(i.type, t), o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((a) => {
    const l = s[a];
    if (!D(l))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (l._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const c = ki(a, l), h = ml(c, n), d = e.scales || {};
    o[c] = o[c] || a, r[a] = Qt(/* @__PURE__ */ Object.create(null), [{ axis: c }, l, d[c], d[h]]);
  }), i.data.datasets.forEach((a) => {
    const l = a.type || i.type, c = a.indexAxis || Mi(l, t), d = (At[l] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const f = pl(u, c), g = a[f + "AxisID"] || o[f] || f;
      r[g] = r[g] || /* @__PURE__ */ Object.create(null), Qt(r[g], [{ axis: f }, s[g], d[u]]);
    });
  }), Object.keys(r).forEach((a) => {
    const l = r[a];
    Qt(l, [O.scales[l.type], O.scale]);
  }), r;
}
function Gn(i) {
  const t = i.options || (i.options = {});
  t.plugins = C(t.plugins, {}), t.scales = xl(i, t);
}
function Zn(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function _l(i) {
  return i = i || {}, i.data = Zn(i.data), Gn(i), i;
}
const Rs = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Set();
function Le(i, t) {
  let e = Rs.get(i);
  return e || (e = t(), Rs.set(i, e), Jn.add(e)), e;
}
const qt = (i, t, e) => {
  const s = _t(t, e);
  s !== void 0 && i.add(s);
};
class yl {
  constructor(t) {
    this._config = _l(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Zn(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Gn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Le(
      t,
      () => [[
        `datasets.${t}`,
        ""
      ]]
    );
  }
  datasetAnimationScopeKeys(t, e) {
    return Le(
      `${t}.transition.${e}`,
      () => [
        [
          `datasets.${t}.transitions.${e}`,
          `transitions.${e}`
        ],
        [
          `datasets.${t}`,
          ""
        ]
      ]
    );
  }
  datasetElementScopeKeys(t, e) {
    return Le(
      `${t}-${e}`,
      () => [[
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]]
    );
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return Le(
      `${s}-plugin-${e}`,
      () => [[
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]]
    );
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => qt(l, t, d))), h.forEach((d) => qt(l, n, d)), h.forEach((d) => qt(l, At[o] || {}, d)), h.forEach((d) => qt(l, O, d)), h.forEach((d) => qt(l, _i, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Jn.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      At[e] || {},
      O.datasets[e] || {},
      { type: e },
      O,
      _i
    ];
  }
  resolveNamedOptions(t, e, s, n = [""]) {
    const o = { $shared: !0 }, { resolver: r, subPrefixes: a } = Es(this._resolverCache, t, n);
    let l = r;
    if (Ml(r, e)) {
      o.$shared = !1, s = yt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Vt(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [""], n) {
    const { resolver: o } = Es(this._resolverCache, t, s);
    return D(e) ? Vt(o, e, void 0, n) : o;
  }
}
function Es(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: zi(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const vl = (i) => D(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || yt(i[e]), !1);
function Ml(i, t) {
  const { isScriptable: e, isIndexable: s } = wn(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (yt(a) || vl(a)) || r && z(a))
      return !0;
  }
  return !1;
}
var kl = "3.9.1";
const wl = ["top", "bottom", "left", "right", "chartArea"];
function Fs(i, t) {
  return i === "top" || i === "bottom" || wl.indexOf(i) === -1 && t === "x";
}
function Is(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function zs(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), I(e && e.onComplete, [i], t);
}
function Sl(i) {
  const t = i.chart, e = t.options.animation;
  I(e && e.onProgress, [i], t);
}
function Qn(i) {
  return An() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const $e = {}, to = (i) => {
  const t = Qn(i);
  return Object.values($e).filter((e) => e.canvas === t).pop();
};
function Pl(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Cl(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
class ji {
  constructor(t, e) {
    const s = this.config = new yl(e), n = Qn(t), o = to(n);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused."
      );
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || qn(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = _o(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new hl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Fo((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], $e[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    at.listen(this, "complete", zs), at.listen(this, "progress", Sl), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return T(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ls(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return os(this.canvas, this.ctx), this;
  }
  stop() {
    return at.stop(this), this;
  }
  resize(t, e) {
    at.running(this) ? this._resizeBeforeDraw = { width: t, height: e } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ls(this, a, !0) && (this.notifyPlugins("resize", { size: r }), I(s.onResize, [this, r], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    E(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(
      Object.keys(e).map((r) => {
        const a = e[r], l = ki(r, a), c = l === "r", h = l === "x";
        return {
          options: a,
          dposition: c ? "chartArea" : h ? "bottom" : "left",
          dtype: c ? "radialLinear" : h ? "category" : "linear"
        };
      })
    )), E(o, (r) => {
      const a = r.options, l = a.id, c = ki(l, a), h = C(a.type, r.dtype);
      (a.position === void 0 || Fs(a.position, c) !== Fs(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const u = ot.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), E(n, (r, a) => {
      r || delete s[a];
    }), E(s, (r) => {
      X.configure(this, r, r.options), X.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Is("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Mi(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = ot.getController(a), { datasetElementType: c, dataElementType: h } = O.datasets[a];
        Object.assign(l.prototype, {
          dataElementType: ot.getElement(h),
          datasetElementType: c && ot.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    E(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || E(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(Is("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    E(this.scales, (t) => {
      X.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Ui(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      Pl(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(
      t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))
    ), n = s(0);
    for (let o = 1; o < e; o++)
      if (!Ui(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1)
      return;
    X.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], E(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, yt(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = { meta: s, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 && (at.has(this) ? this.attached && !at.running(this) && at.start(this) : (this.draw(), zs({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resize(s, n), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = t._clip, n = !s.disabled, o = this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && Xe(e, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), n && Ue(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return re(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Hn.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = vt(null, { chart: this, type: "chart" }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
    et(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, { visible: s }), this.update((a) => a.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), at.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), os(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete $e[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, n = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    E(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    E(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, E(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !ze(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = So(t), c = Cl(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, I(o.onHover, [t, a, this], this), l && I(o.onClick, [t, a, this], this));
    const h = !ze(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
}
const Bs = () => E(ji.instances, (i) => i._plugins.invalidate()), pt = !0;
Object.defineProperties(ji, {
  defaults: {
    enumerable: pt,
    value: O
  },
  instances: {
    enumerable: pt,
    value: $e
  },
  overrides: {
    enumerable: pt,
    value: At
  },
  registry: {
    enumerable: pt,
    value: ot
  },
  version: {
    enumerable: pt,
    value: kl
  },
  getChart: {
    enumerable: pt,
    value: to
  },
  register: {
    enumerable: pt,
    value: (...i) => {
      ot.add(...i), Bs();
    }
  },
  unregister: {
    enumerable: pt,
    value: (...i) => {
      ot.remove(...i), Bs();
    }
  }
});
function eo(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + V, s - V), i.closePath(), i.clip();
}
function Dl(i) {
  return Ii(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Ol(i, t, e, s) {
  const n = Dl(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return Y(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: Y(n.innerStart, 0, r),
    innerEnd: Y(n.innerEnd, 0, r)
  };
}
function It(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function wi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const P = h > 0 ? h - s : 0, j = d > 0 ? d - s : 0, W = (P + j) / 2, kt = W !== 0 ? g * W / (W + s) : g;
    f = (g - kt) / 2;
  }
  const p = Math.max(1e-3, g * d - e / B) / d, m = (g - p) / 2, b = l + m + f, x = n - m - f, { outerStart: v, outerEnd: y, innerStart: _, innerEnd: M } = Ol(t, u, d, x - b), k = d - v, S = d - y, w = b + v / k, L = x - y / S, R = u + _, A = u + M, H = b + _ / R, q = x - M / A;
  if (i.beginPath(), o) {
    if (i.arc(r, a, d, w, L), y > 0) {
      const W = It(S, L, r, a);
      i.arc(W.x, W.y, y, L, x + V);
    }
    const P = It(A, x, r, a);
    if (i.lineTo(P.x, P.y), M > 0) {
      const W = It(A, q, r, a);
      i.arc(W.x, W.y, M, x + V, q + Math.PI);
    }
    if (i.arc(r, a, u, x - M / u, b + _ / u, !0), _ > 0) {
      const W = It(R, H, r, a);
      i.arc(W.x, W.y, _, H + Math.PI, b - V);
    }
    const j = It(k, b, r, a);
    if (i.lineTo(j.x, j.y), v > 0) {
      const W = It(k, w, r, a);
      i.arc(W.x, W.y, v, b - V, w);
    }
  } else {
    i.moveTo(r, a);
    const P = Math.cos(w) * d + r, j = Math.sin(w) * d + a;
    i.lineTo(P, j);
    const W = Math.cos(L) * d + r, kt = Math.sin(L) * d + a;
    i.lineTo(W, kt);
  }
  i.closePath();
}
function Al(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    wi(i, t, e, s, r + F, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + a % F, a % F === 0 && (l += F));
  }
  return wi(i, t, e, s, l, n), i.fill(), l;
}
function Tl(i, t, e) {
  const { x: s, y: n, startAngle: o, pixelMargin: r, fullCircles: a } = t, l = Math.max(t.outerRadius - r, 0), c = t.innerRadius + r;
  let h;
  for (e && eo(i, t, o + F), i.beginPath(), i.arc(s, n, c, o + F, o, !0), h = 0; h < a; ++h)
    i.stroke();
  for (i.beginPath(), i.arc(s, n, l, o, o + F), h = 0; h < a; ++h)
    i.stroke();
}
function Ll(i, t, e, s, n, o) {
  const { options: r } = t, { borderWidth: a, borderJoinStyle: l } = r, c = r.borderAlign === "inner";
  a && (c ? (i.lineWidth = a * 2, i.lineJoin = l || "round") : (i.lineWidth = a, i.lineJoin = l || "bevel"), t.fullCircles && Tl(i, t, c), c && eo(i, t, n), wi(i, t, e, s, n, o), i.stroke());
}
class ye extends st {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.getProps(["x", "y"], s), { angle: o, distance: r } = hn(n, { x: t, y: e }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), u = this.options.spacing / 2, g = C(d, l - a) >= F || oe(o, a, l), p = ut(r, c + u, h + u);
    return g && p;
  }
  getCenterPoint(t) {
    const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l, spacing: c } = this.options, h = (n + o) / 2, d = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(h) * d,
      y: s + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: s } = this, n = (e.offset || 0) / 2, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > F ? Math.floor(s / F) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    let a = 0;
    if (n) {
      a = n / 2;
      const c = (this.startAngle + this.endAngle) / 2;
      t.translate(Math.cos(c) * a, Math.sin(c) * a), this.circumference >= B && (a = n);
    }
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
    const l = Al(t, this, a, o, r);
    Ll(t, this, a, o, l, r), t.restore();
  }
}
ye.id = "arc";
ye.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
};
ye.defaultRoutes = {
  backgroundColor: "backgroundColor"
};
function io(i, t, e = t) {
  i.lineCap = C(e.borderCapStyle, t.borderCapStyle), i.setLineDash(C(e.borderDash, t.borderDash)), i.lineDashOffset = C(e.borderDashOffset, t.borderDashOffset), i.lineJoin = C(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = C(e.borderWidth, t.borderWidth), i.strokeStyle = C(e.borderColor, t.borderColor);
}
function Rl(i, t, e) {
  i.lineTo(e.x, e.y);
}
function El(i) {
  return i.stepped ? lr : i.tension || i.cubicInterpolationMode === "monotone" ? cr : Rl;
}
function so(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Fl(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = so(n, e, s), h = El(o);
  let { move: d = !0, reverse: u } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (u ? c - f : f)) % r], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
  return l && (g = n[(a + (u ? c : 0)) % r], h(i, p, g, u, o.stepped)), !!l;
}
function Il(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = so(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, g, p, m, b;
  const x = (y) => (r + (c ? a - y : y)) % o, v = () => {
    p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
  };
  for (l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = n[x(u)], f.skip)
      continue;
    const y = f.x, _ = f.y, M = y | 0;
    M === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + y) / ++d) : (v(), i.lineTo(y, _), g = M, d = 0, p = m = _), b = _;
  }
  v();
}
function Si(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Il : Fl;
}
function zl(i) {
  return i.stepped ? Wr : i.tension || i.cubicInterpolationMode === "monotone" ? Nr : Ct;
}
function Bl(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), io(i, t.options), i.stroke(n);
}
function Vl(i, t, e, s) {
  const { segments: n, options: o } = t, r = Si(t);
  for (const a of n)
    io(i, o, a.style), i.beginPath(), r(i, t, a, { start: e, end: e + s - 1 }) && i.closePath(), i.stroke();
}
const Wl = typeof Path2D == "function";
function Nl(i, t, e, s) {
  Wl && !t.options.segment ? Bl(i, t, e, s) : Vl(i, t, e, s);
}
class gt extends st {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      Lr(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Kr(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], o = this.points, r = Fn(this, { property: e, start: n, end: n });
    if (!r.length)
      return;
    const a = [], l = zl(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c], f = o[d], g = o[u];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return Si(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Si(this);
    let r = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const a of n)
      r &= o(t, this, a, { start: e, end: e + s - 1 });
    return !!r;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Nl(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
gt.id = "line";
gt.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
};
gt.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
gt.descriptors = {
  _scriptable: !0,
  _indexable: (i) => i !== "borderDash" && i !== "fill"
};
function Vs(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([e], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class ve extends st {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.options, { x: o, y: r } = this.getProps(["x", "y"], s);
    return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return Vs(this, t, "x", e);
  }
  inYRange(t, e) {
    return Vs(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: s } = this.getProps(["x", "y"], t);
    return { x: e, y: s };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !re(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, yi(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
ve.id = "point";
ve.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
};
ve.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
function no(i, t) {
  const { x: e, y: s, base: n, width: o, height: r } = i.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, c, h, d;
  return i.horizontal ? (d = r / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, a = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), { left: a, top: c, right: l, bottom: h };
}
function bt(i, t, e, s) {
  return i ? 0 : Y(t, e, s);
}
function Hl(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = kn(s);
  return {
    t: bt(n.top, o.top, 0, e),
    r: bt(n.right, o.right, 0, t),
    b: bt(n.bottom, o.bottom, 0, e),
    l: bt(n.left, o.left, 0, t)
  };
}
function jl(i, t, e) {
  const { enableBorderRadius: s } = i.getProps(["enableBorderRadius"]), n = i.options.borderRadius, o = Dt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || D(n);
  return {
    topLeft: bt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: bt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: bt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: bt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function $l(i) {
  const t = no(i), e = t.right - t.left, s = t.bottom - t.top, n = Hl(i, e / 2, s / 2), o = jl(i, e / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: s,
      radius: o
    },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function gi(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && no(i, s);
  return a && (n || ut(t, a.left, a.right)) && (o || ut(e, a.top, a.bottom));
}
function Yl(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Xl(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function pi(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class Me extends st {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = $l(this), a = Yl(r.radius) ? ae : Xl;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, pi(r, e, o)), t.clip(), a(t, pi(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, pi(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return gi(this, t, e, s);
  }
  inXRange(t, e) {
    return gi(this, t, null, e);
  }
  inYRange(t, e) {
    return gi(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: s, base: n, horizontal: o } = this.getProps(["x", "y", "base", "horizontal"], t);
    return {
      x: o ? (e + n) / 2 : e,
      y: o ? s : (s + n) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
Me.id = "bar";
Me.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
};
Me.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
var oo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: ye,
  LineElement: gt,
  PointElement: ve,
  BarElement: Me
});
function Ul(i, t, e, s, n) {
  const o = n.samples || s;
  if (o >= e)
    return i.slice(t, t + e);
  const r = [], a = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t, d, u, f, g, p;
  for (r[l++] = i[h], d = 0; d < o - 2; d++) {
    let m = 0, b = 0, x;
    const v = Math.floor((d + 1) * a) + 1 + t, y = Math.min(Math.floor((d + 2) * a) + 1, e) + t, _ = y - v;
    for (x = v; x < y; x++)
      m += i[x].x, b += i[x].y;
    m /= _, b /= _;
    const M = Math.floor(d * a) + 1 + t, k = Math.min(Math.floor((d + 1) * a) + 1, e) + t, { x: S, y: w } = i[h];
    for (f = g = -1, x = M; x < k; x++)
      g = 0.5 * Math.abs(
        (S - m) * (i[x].y - w) - (S - i[x].x) * (b - w)
      ), g > f && (f = g, u = i[x], p = x);
    r[l++] = u, h = p;
  }
  return r[l++] = i[c], r;
}
function Kl(i, t, e, s) {
  let n = 0, o = 0, r, a, l, c, h, d, u, f, g, p;
  const m = [], b = t + e - 1, x = i[t].x, y = i[b].x - x;
  for (r = t; r < t + e; ++r) {
    a = i[r], l = (a.x - x) / y * s, c = a.y;
    const _ = l | 0;
    if (_ === h)
      c < g ? (g = c, d = r) : c > p && (p = c, u = r), n = (o * n + a.x) / ++o;
    else {
      const M = r - 1;
      if (!T(d) && !T(u)) {
        const k = Math.min(d, u), S = Math.max(d, u);
        k !== f && k !== M && m.push({
          ...i[k],
          x: n
        }), S !== f && S !== M && m.push({
          ...i[S],
          x: n
        });
      }
      r > 0 && M !== f && m.push(i[M]), m.push(a), h = _, o = 0, g = p = c, d = u = f = r;
    }
  }
  return m;
}
function ro(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated, delete i._data, Object.defineProperty(i, "data", { value: t });
  }
}
function Ws(i) {
  i.data.datasets.forEach((t) => {
    ro(t);
  });
}
function ql(i, t) {
  const e = t.length;
  let s = 0, n;
  const { iScale: o } = i, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (s = Y(ft(t, o.axis, r).lo, 0, e - 1)), c ? n = Y(ft(t, o.axis, a).hi + 1, s, e) - s : n = e - s, { start: s, count: n };
}
var ao = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      Ws(i);
      return;
    }
    const s = i.width;
    i.data.datasets.forEach((n, o) => {
      const { _data: r, indexAxis: a } = n, l = i.getDatasetMeta(o), c = r || n.data;
      if (Zt([a, i.options.indexAxis]) === "y" || !l.controller.supportsDecimation)
        return;
      const h = i.scales[l.xAxisID];
      if (h.type !== "linear" && h.type !== "time" || i.options.parsing)
        return;
      let { start: d, count: u } = ql(l, c);
      const f = e.threshold || 4 * s;
      if (u <= f) {
        ro(n);
        return;
      }
      T(r) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(p) {
          this._data = p;
        }
      }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = Ul(c, d, u, s, e);
          break;
        case "min-max":
          g = Kl(c, d, u, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      n._decimated = g;
    });
  },
  destroy(i) {
    Ws(i);
  }
};
function Gl(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = $i(l, c, n);
    const h = Pi(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = Fn(t, h);
    for (const u of d) {
      const f = Pi(e, o[u.start], o[u.end], u.loop), g = En(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: {
            [e]: Ns(h, f, "start", Math.max)
          },
          end: {
            [e]: Ns(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Pi(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = Z(n), o = Z(o)), { property: i, start: n, end: o };
}
function Zl(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = $i(r, a, n);
    const l = n[r], c = n[a];
    s !== null ? (o.push({ x: l.x, y: s }), o.push({ x: c.x, y: s })) : e !== null && (o.push({ x: e, y: l.y }), o.push({ x: e, y: c.y }));
  }), o;
}
function $i(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Ns(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function lo(i, t) {
  let e = [], s = !1;
  return z(i) ? (s = !0, e = i) : e = Zl(i, t), e.length ? new gt({
    points: e,
    options: { tension: 0 },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Hs(i) {
  return i && i.fill !== !1;
}
function Jl(i, t, e) {
  let n = i[t].fill;
  const o = [t];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!N(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function Ql(i, t, e) {
  const s = sc(i);
  if (D(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return N(n) && Math.floor(n) === n ? tc(s[0], t, n, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
}
function tc(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function ec(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : D(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function ic(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : D(i) ? s = i.value : s = t.getBaseValue(), s;
}
function sc(i) {
  const t = i.options, e = t.fill;
  let s = C(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function nc(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = oc(t, e);
  a.push(lo({ x: null, y: t.bottom }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      rc(n, r[h], a);
  }
  return new gt({ points: n, options: {} });
}
function oc(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function rc(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = ac(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function ac(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][e], u = r[h.end][e];
    if (ut(n, d, u)) {
      a = n === d, l = n === u;
      break;
    }
  }
  return { first: a, last: l, point: s };
}
class co {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || { start: 0, end: F }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: e, y: s, radius: n } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * n,
      y: s + Math.sin(o) * n,
      angle: o
    };
  }
}
function lc(i) {
  const { chart: t, fill: e, line: s } = i;
  if (N(e))
    return cc(t, e);
  if (e === "stack")
    return nc(i);
  if (e === "shape")
    return !0;
  const n = hc(i);
  return n instanceof co ? n : lo(n, s);
}
function cc(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function hc(i) {
  return (i.scale || {}).getPointPositionForValue ? uc(i) : dc(i);
}
function dc(i) {
  const { scale: t = {}, fill: e } = i, s = ec(e, t);
  if (N(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function uc(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = ic(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new co({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function mi(i, t, e) {
  const s = lc(t), { line: n, scale: o, axis: r } = t, a = n.options, l = a.fill, c = a.backgroundColor, { above: h = c, below: d = c } = l || {};
  s && n.points.length && (Xe(i, e), fc(i, { line: n, target: s, above: h, below: d, area: e, scale: o, axis: r }), Ue(i));
}
function fc(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a } = t, l = e._loop ? "angle" : t.axis;
  i.save(), l === "x" && o !== n && (js(i, s, r.top), $s(i, { line: e, target: s, color: n, scale: a, property: l }), i.restore(), i.save(), js(i, s, r.bottom)), $s(i, { line: e, target: s, color: o, scale: a, property: l }), i.restore();
}
function js(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[$i(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, { move: r }), r ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function $s(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r } = t, a = Gl(e, s, n);
  for (const { source: l, target: c, start: h, end: d } of a) {
    const { style: { backgroundColor: u = o } = {} } = l, f = s !== !0;
    i.save(), i.fillStyle = u, gc(i, r, f && Pi(n, h, d)), i.beginPath();
    const g = !!e.pathSegment(i, l);
    let p;
    if (f) {
      g ? i.closePath() : Ys(i, s, d, n);
      const m = !!s.pathSegment(i, c, { move: g, reverse: !0 });
      p = g && m, p || Ys(i, s, h, n);
    }
    i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
  }
}
function gc(i, t, e) {
  const { top: s, bottom: n } = t.chart.chartArea, { property: o, start: r, end: a } = e || {};
  o === "x" && (i.beginPath(), i.rect(r, s, a - r, n - s), i.clip());
}
function Ys(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var ho = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof gt && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: Ql(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = Jl(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && mi(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      Hs(o) && mi(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !Hs(s) || e.drawTime !== "beforeDatasetDraw" || mi(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Xs = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, pc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Us extends st {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = I(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = $(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Xs(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, o, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [0], h = n + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((g, p) => {
      const m = s + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = { left: 0, top: f, row: u, width: m, height: n }, c[c.length - 1] += m + a;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, u = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, b) => {
      const x = s + e / 2 + o.measureText(m.text).width;
      b > 0 && f + n + 2 * a > h && (d += u + a, c.push({ width: u, height: f }), g += u + a, p++, u = f = 0), l[b] = { left: g, top: f, col: p, width: x, height: n }, u = Math.max(u, x), f += n + a;
    }), d += u, c.push({ width: u, height: f }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = zt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = U(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = U(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = U(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = U(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Xe(t, this), this._draw(), Ue(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = O.color, l = zt(t.rtl, this.left, this.width), c = $(r.font), { color: h, padding: d } = r, u = c.size, f = u / 2;
    let g;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: p, boxHeight: m, itemHeight: b } = Xs(r, u), x = function(k, S, w) {
      if (isNaN(p) || p <= 0 || isNaN(m) || m < 0)
        return;
      n.save();
      const L = C(w.lineWidth, 1);
      if (n.fillStyle = C(w.fillStyle, a), n.lineCap = C(w.lineCap, "butt"), n.lineDashOffset = C(w.lineDashOffset, 0), n.lineJoin = C(w.lineJoin, "miter"), n.lineWidth = L, n.strokeStyle = C(w.strokeStyle, a), n.setLineDash(C(w.lineDash, [])), r.usePointStyle) {
        const R = {
          radius: m * Math.SQRT2 / 2,
          pointStyle: w.pointStyle,
          rotation: w.rotation,
          borderWidth: L
        }, A = l.xPlus(k, p / 2), H = S + f;
        Mn(n, R, A, H, r.pointStyleWidth && p);
      } else {
        const R = S + Math.max((u - m) / 2, 0), A = l.leftForLtr(k, p), H = Dt(w.borderRadius);
        n.beginPath(), Object.values(H).some((q) => q !== 0) ? ae(n, {
          x: A,
          y: R,
          w: p,
          h: m,
          radius: H
        }) : n.rect(A, R, p, m), n.fill(), L !== 0 && n.stroke();
      }
      n.restore();
    }, v = function(k, S, w) {
      Tt(n, w.text, k, S + b / 2, c, {
        strikethrough: w.hidden,
        textAlign: l.textAlign(w.textAlign)
      });
    }, y = this.isHorizontal(), _ = this._computeTitleHeight();
    y ? g = {
      x: U(o, this.left + d, this.right - s[0]),
      y: this.top + d + _,
      line: 0
    } : g = {
      x: this.left + d,
      y: U(o, this.top + _ + d, this.bottom - e[0].height),
      line: 0
    }, Tn(this.ctx, t.textDirection);
    const M = b + d;
    this.legendItems.forEach((k, S) => {
      n.strokeStyle = k.fontColor || h, n.fillStyle = k.fontColor || h;
      const w = n.measureText(k.text).width, L = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), R = p + f + w;
      let A = g.x, H = g.y;
      l.setWidth(this.width), y ? S > 0 && A + R + d > this.right && (H = g.y += M, g.line++, A = g.x = U(o, this.left + d, this.right - s[g.line])) : S > 0 && H + M > this.bottom && (A = g.x = A + e[g.line].width + d, g.line++, H = g.y = U(o, this.top + _ + d, this.bottom - e[g.line].height));
      const q = l.x(A);
      x(q, H, k), A = Io(L, A + p + f, y ? A + R : this.right, t.rtl), v(l.x(A), H, k), y ? g.x += R + d : g.y += M;
    }), Ln(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = $(e.font), n = K(e.padding);
    if (!e.display)
      return;
    const o = zt(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = U(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h = c + U(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = U(a, d, d + u);
    r.textAlign = o.textAlign(Li(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, Tt(r, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = $(t.font), s = K(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (ut(t, this.left, this.right) && ut(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], ut(t, n.left, n.left + n.width) && ut(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!mc(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = pc(n, s);
      n && !o && I(e.onLeave, [t, n, this], this), this._hoveredItem = s, s && !o && I(e.onHover, [t, s, this], this);
    } else
      s && I(e.onClick, [t, s, this], this);
  }
}
function mc(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var uo = {
  id: "legend",
  _element: Us,
  start(i, t, e) {
    const s = i.legend = new Us({ ctx: i.ctx, options: e, chart: i });
    X.configure(i, s, e), X.addBox(i, s);
  },
  stop(i) {
    X.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    X.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o } } = i.legend.options;
        return i._getSortedDatasetMetas().map((r) => {
          const a = r.controller.getStyle(e ? 0 : void 0), l = K(a.borderWidth);
          return {
            text: t[r.index].label,
            fillStyle: a.backgroundColor,
            fontColor: o,
            hidden: !r.visible,
            lineCap: a.borderCapStyle,
            lineDash: a.borderDash,
            lineDashOffset: a.borderDashOffset,
            lineJoin: a.borderJoinStyle,
            lineWidth: (l.width + l.height) / 4,
            strokeStyle: a.borderColor,
            pointStyle: s || a.pointStyle,
            rotation: a.rotation,
            textAlign: n || a.textAlign,
            borderRadius: 0,
            datasetIndex: r.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i)
    }
  }
};
class Yi extends st {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = z(s.text) ? s.text.length : 1;
    this._padding = K(s.padding);
    const o = n * $(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = U(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = U(a, n, e), l = B * -0.5) : (h = o - t, d = U(a, e, n), l = B * 0.5), c = n - e), { titleX: h, titleY: d, maxWidth: c, rotation: l };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = $(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Tt(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Li(e.align),
      textBaseline: "middle",
      translation: [r, a]
    });
  }
}
function bc(i, t) {
  const e = new Yi({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  X.configure(i, e, t), X.addBox(i, e), i.titleBlock = e;
}
var fo = {
  id: "title",
  _element: Yi,
  start(i, t, e) {
    bc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    X.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    X.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Re = /* @__PURE__ */ new WeakMap();
var go = {
  id: "subtitle",
  start(i, t, e) {
    const s = new Yi({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    X.configure(i, s, e), X.addBox(i, s), Re.set(i, s);
  },
  stop(i) {
    X.removeBox(i, Re.get(i)), Re.delete(i);
  },
  beforeUpdate(i, t, e) {
    const s = Re.get(i);
    X.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const se = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = 0, n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const r = i[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        s += a.x, n += a.y, ++o;
      }
    }
    return {
      x: s / o,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = bi(t, c);
        h < n && (n = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function rt(i, t) {
  return t && (z(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ht(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function xc(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function Ks(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = $(t.bodyFont), c = $(t.titleFont), h = $(t.footerFont), d = o.length, u = n.length, f = s.length, g = K(t.padding);
  let p = g.height, m = 0, b = s.reduce((y, _) => y + _.before.length + _.lines.length + _.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const y = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let x = 0;
  const v = function(y) {
    m = Math.max(m, e.measureText(y).width + x);
  };
  return e.save(), e.font = c.string, E(i.title, v), e.font = l.string, E(i.beforeBody.concat(i.afterBody), v), x = t.displayColors ? r + 2 + t.boxPadding : 0, E(s, (y) => {
    E(y.before, v), E(y.lines, v), E(y.after, v);
  }), x = 0, e.font = h.string, E(i.footer, v), e.restore(), m += g.width, { width: m, height: p };
}
function _c(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function yc(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function vc(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), yc(c, i, t, e) && (c = "center"), c;
}
function qs(i, t, e) {
  const s = e.yAlign || t.yAlign || _c(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || vc(i, t, e, s),
    yAlign: s
  };
}
function Mc(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function kc(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function Gs(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Dt(r);
  let g = Mc(t, a);
  const p = kc(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, u) + n : a === "right" && (g += Math.max(d, f) + n), {
    x: Y(g, 0, s.width - t.width),
    y: Y(p, 0, s.height - t.height)
  };
}
function Ee(i, t, e) {
  const s = K(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Zs(i) {
  return rt([], ht(i));
}
function wc(i, t, e) {
  return vt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Js(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
class Ci extends st {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Ni(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = wc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = s.beforeTitle.apply(this, [t]), o = s.title.apply(this, [t]), r = s.afterTitle.apply(this, [t]);
    let a = [];
    return a = rt(a, ht(n)), a = rt(a, ht(o)), a = rt(a, ht(r)), a;
  }
  getBeforeBody(t, e) {
    return Zs(e.callbacks.beforeBody.apply(this, [t]));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return E(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Js(s, o);
      rt(r.before, ht(a.beforeLabel.call(this, o))), rt(r.lines, a.label.call(this, o)), rt(r.after, ht(a.afterLabel.call(this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return Zs(e.callbacks.afterBody.apply(this, [t]));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = s.beforeFooter.apply(this, [t]), o = s.footer.apply(this, [t]), r = s.afterFooter.apply(this, [t]);
    let a = [];
    return a = rt(a, ht(n)), a = rt(a, ht(o)), a = rt(a, ht(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(xc(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), E(a, (h) => {
      const d = Js(t.callbacks, h);
      n.push(d.labelColor.call(this, h)), o.push(d.labelPointStyle.call(this, h)), r.push(d.labelTextColor.call(this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, r = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = se[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Ks(this, s), c = Object.assign({}, a, l), h = qs(this.chart, s, c), d = Gs(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Dt(a), { x: u, y: f } = t, { width: g, height: p } = e;
    let m, b, x, v, y, _;
    return o === "center" ? (y = f + p / 2, n === "left" ? (m = u, b = m - r, v = y + r, _ = y - r) : (m = u + g, b = m + r, v = y - r, _ = y + r), x = m) : (n === "left" ? b = u + Math.max(l, h) + r : n === "right" ? b = u + g - Math.max(c, d) - r : b = this.caretX, o === "top" ? (v = f, y = v - r, m = b - r, x = b + r) : (v = f + p, y = v + r, m = b + r, x = b - r), _ = v), { x1: m, x2: b, x3: x, y1: v, y2: y, y3: _ };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = zt(s.rtl, this.x, this.width);
      for (t.x = Ee(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = $(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = $(o.bodyFont), u = Ee(this, "left", o), f = n.x(u), g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = e.y + g;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(f, c) + c / 2, x = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, yi(t, m, b, x), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, yi(t, m, b, x);
    } else {
      t.lineWidth = D(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const m = n.leftForLtr(f, c - h), b = n.leftForLtr(n.xPlus(f, 1), c - h - 2), x = Dt(r.borderRadius);
      Object.values(x).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ae(t, {
        x: m,
        y: p,
        w: c,
        h: l,
        radius: x
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), ae(t, {
        x: b,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: x
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, p, c, l), t.strokeRect(m, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(b, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = $(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = zt(s.rtl, this.x, this.width), p = function(S) {
      e.fillText(S, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, m = g.textAlign(r);
    let b, x, v, y, _, M, k;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Ee(this, m, s), e.fillStyle = s.bodyColor, E(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, y = 0, M = n.length; y < M; ++y) {
      for (b = n[y], x = this.labelTextColors[y], e.fillStyle = x, E(b.before, p), v = b.lines, a && v.length && (this._drawColorBox(e, t, y, g, s), u = Math.max(d.lineHeight, l)), _ = 0, k = v.length; _ < k; ++_)
        p(v[_]), u = d.lineHeight;
      E(b.after, p);
    }
    f = 0, u = d.lineHeight, E(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = zt(s.rtl, this.x, this.width);
      for (t.x = Ee(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = $(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = Dt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = se[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Ks(this, t), l = Object.assign({}, r, this._size), c = qs(e, t, l), h = Gs(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = K(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Tn(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ln(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !ze(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !ze(r, o) || a;
    return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, r = se[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
Ci.positioners = se;
var po = {
  id: "tooltip",
  _element: Ci,
  positioners: se,
  afterInit(i, t, e) {
    e && (i.tooltip = new Ci({ chart: i, options: e }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", e) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: ct,
      title(i) {
        if (i.length > 0) {
          const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
          if (this && this.options && this.options.mode === "dataset")
            return t.dataset.label || "";
          if (t.label)
            return t.label;
          if (s > 0 && t.dataIndex < s)
            return e[t.dataIndex];
        }
        return "";
      },
      afterTitle: ct,
      beforeBody: ct,
      beforeLabel: ct,
      label(i) {
        if (this && this.options && this.options.mode === "dataset")
          return i.label + ": " + i.formattedValue || i.formattedValue;
        let t = i.dataset.label || "";
        t && (t += ": ");
        const e = i.formattedValue;
        return T(e) || (t += e), t;
      },
      labelColor(i) {
        const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
          borderColor: e.borderColor,
          backgroundColor: e.backgroundColor,
          borderWidth: e.borderWidth,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderRadius: 0
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(i) {
        const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
          pointStyle: e.pointStyle,
          rotation: e.rotation
        };
      },
      afterLabel: ct,
      afterBody: ct,
      beforeFooter: ct,
      footer: ct,
      afterFooter: ct
    }
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: ["interaction"]
}, mo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Decimation: ao,
  Filler: ho,
  Legend: uo,
  SubTitle: go,
  Title: fo,
  Tooltip: po
});
const Sc = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({ index: e, label: t })) : isNaN(t) && (e = null), e);
function Pc(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Sc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Cc = (i, t) => i === null ? null : Y(Math.round(i), 0, t);
class ce extends Mt {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (T(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Pc(s, t, C(e, t), this._addedLabels), Cc(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      n.push({ value: r });
    return n;
  }
  getLabelForValue(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
ce.id = "category";
ce.defaults = {
  ticks: {
    callback: ce.prototype.getLabelForValue
  }
};
function Dc(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, g = h - 1, { min: p, max: m } = t, b = !T(r), x = !T(a), v = !T(c), y = (m - p) / (d + 1);
  let _ = qi((m - p) / g / f) * f, M, k, S, w;
  if (_ < 1e-14 && !b && !x)
    return [{ value: p }, { value: m }];
  w = Math.ceil(m / _) - Math.floor(p / _), w > g && (_ = qi(w * _ / g / f) * f), T(l) || (M = Math.pow(10, l), _ = Math.ceil(_ * M) / M), n === "ticks" ? (k = Math.floor(p / _) * _, S = Math.ceil(m / _) * _) : (k = p, S = m), b && x && o && Oo((a - r) / o, _ / 1e3) ? (w = Math.round(Math.min((a - r) / _, h)), _ = (a - r) / w, k = r, S = a) : v ? (k = b ? r : k, S = x ? a : S, w = c - 1, _ = (S - k) / w) : (w = (S - k) / _, te(w, Math.round(w), _ / 1e3) ? w = Math.round(w) : w = Math.ceil(w));
  const L = Math.max(
    Gi(_),
    Gi(k)
  );
  M = Math.pow(10, T(l) ? L : l), k = Math.round(k * M) / M, S = Math.round(S * M) / M;
  let R = 0;
  for (b && (u && k !== r ? (e.push({ value: r }), k < r && R++, te(Math.round((k + R * _) * M) / M, r, Qs(r, y, i)) && R++) : k < r && R++); R < w; ++R)
    e.push({ value: Math.round((k + R * _) * M) / M });
  return x && u && S !== a ? e.length && te(e[e.length - 1].value, a, Qs(a, y, i)) ? e[e.length - 1].value = a : e.push({ value: a }) : (!x || S === a) && e.push({ value: S }), e;
}
function Qs(i, t, { horizontal: e, minRotation: s }) {
  const n = nt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ye extends Mt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return T(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = lt(n), c = lt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = 1;
      (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(o * 0.05)), a(o + l), t || r(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = Dc(n, o);
    return t.bounds === "ticks" && cn(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return de(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ge extends Ye {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = N(t) ? t : 0, this.max = N(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = nt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
Ge.id = "linear";
Ge.defaults = {
  ticks: {
    callback: be.formatters.numeric
  }
};
function tn(i) {
  return i / Math.pow(10, Math.floor(tt(i))) === 1;
}
function Oc(i, t) {
  const e = Math.floor(tt(t.max)), s = Math.ceil(t.max / Math.pow(10, e)), n = [];
  let o = Q(i.min, Math.pow(10, Math.floor(tt(t.min)))), r = Math.floor(tt(o)), a = Math.floor(o / Math.pow(10, r)), l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  do
    n.push({ value: o, major: tn(o) }), ++a, a === 10 && (a = 1, ++r, l = r >= 0 ? 1 : l), o = Math.round(a * Math.pow(10, r) * l) / l;
  while (r < e || r === e && a < s);
  const c = Q(i.max, o);
  return n.push({ value: c, major: tn(o) }), n;
}
class Ze extends Mt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const s = Ye.prototype.parse.apply(this, [t, e]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return N(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = N(t) ? Math.max(0, t) : null, this.max = N(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min, n = this.max;
    const o = (l) => s = t ? s : l, r = (l) => n = e ? n : l, a = (l, c) => Math.pow(10, Math.floor(tt(l)) + c);
    s === n && (s <= 0 ? (o(1), r(10)) : (o(a(s, -1)), r(a(n, 1)))), s <= 0 && o(a(n, -1)), n <= 0 && r(a(s, 1)), this._zero && this.min !== this._suggestedMin && s === a(this.min, 0) && o(a(s, -1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, s = Oc(e, this);
    return t.bounds === "ticks" && cn(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : de(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = tt(t), this._valueRange = tt(this.max) - tt(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (tt(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
Ze.id = "logarithmic";
Ze.defaults = {
  ticks: {
    callback: be.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
};
function Di(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = K(t.backdropPadding);
    return C(t.font && t.font.size, O.font.size) + e.height;
  }
  return 0;
}
function Ac(i, t, e) {
  return e = z(e) ? e : [e], {
    w: ar(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function en(i, t, e, s, n) {
  return i === s || i === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < s || i > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Tc(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? B / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = $(c.font), u = Ac(i.ctx, d, i._pointLabels[l]);
    s[l] = u;
    const f = Z(i.getIndexAngle(l) + a), g = Math.round(Ai(f)), p = en(g, h.x, u.w, 0, 180), m = en(g, h.y, u.h, 90, 270);
    Lc(e, t, f, p, m);
  }
  i.setCenterPoint(
    t.l - e.l,
    e.r - t.r,
    t.t - e.t,
    e.b - t.b
  ), i._pointLabelItems = Rc(i, s, n);
}
function Lc(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Rc(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, r = Di(o) / 2, a = i.drawingArea, l = o.pointLabels.centerPointLabels ? B / n : 0;
  for (let c = 0; c < n; c++) {
    const h = i.getPointPosition(c, a + r + e[c], l), d = Math.round(Ai(Z(h.angle + V))), u = t[c], f = Ic(h.y, u.h, d), g = Ec(d), p = Fc(h.x, u.w, g);
    s.push({
      x: h.x,
      y: f,
      textAlign: g,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h
    });
  }
  return s;
}
function Ec(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Fc(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Ic(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function zc(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = s.setContext(i.getPointLabelContext(n)), r = $(o.font), { x: a, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = i._pointLabelItems[n], { backdropColor: g } = o;
    if (!T(g)) {
      const p = Dt(o.borderRadius), m = K(o.backdropPadding);
      e.fillStyle = g;
      const b = h - m.left, x = d - m.top, v = u - h + m.width, y = f - d + m.height;
      Object.values(p).some((_) => _ !== 0) ? (e.beginPath(), ae(e, {
        x: b,
        y: x,
        w: v,
        h: y,
        radius: p
      }), e.fill()) : e.fillRect(b, x, v, y);
    }
    Tt(
      e,
      i._pointLabels[n],
      a,
      l + r.lineHeight / 2,
      r,
      {
        color: o.color,
        textAlign: c,
        textBaseline: "middle"
      }
    );
  }
}
function bo(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, F);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function Bc(i, t, e, s) {
  const n = i.ctx, o = t.circular, { color: r, lineWidth: a } = t;
  !o && !s || !r || !a || e < 0 || (n.save(), n.strokeStyle = r, n.lineWidth = a, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.beginPath(), bo(i, e, o, s), n.closePath(), n.stroke(), n.restore());
}
function Vc(i, t, e) {
  return vt(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Nt extends Ye {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = K(Di(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = N(t) && !isNaN(t) ? t : 0, this.max = N(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Di(this.options));
  }
  generateTickLabels(t) {
    Ye.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = I(this.options.pointLabels.callback, [e, s], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Tc(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = F / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return Z(t * e + nt(s));
  }
  getDistanceFromCenterForValue(t) {
    if (T(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (T(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Vc(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - V + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), bo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n } = e, o = this._pointLabels.length;
    let r, a, l;
    if (e.pointLabels.display && zc(this, o), n.display && this.ticks.forEach((c, h) => {
      if (h !== 0) {
        a = this.getDistanceFromCenterForValue(c.value);
        const d = n.setContext(this.getContext(h - 1));
        Bc(this, d, a, o);
      }
    }), s.display) {
      for (t.save(), r = o - 1; r >= 0; r--) {
        const c = s.setContext(this.getPointLabelContext(r)), { color: h, lineWidth: d } = c;
        !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(c.borderDash), t.lineDashOffset = c.borderDashOffset, a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(r, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display)
      return;
    const n = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && !e.reverse)
        return;
      const c = s.setContext(this.getContext(l)), h = $(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = K(c.backdropPadding);
        t.fillRect(
          -r / 2 - d.left,
          -o - h.size / 2 - d.top,
          r + d.width,
          h.size + d.height
        );
      }
      Tt(t, a.label, 0, -o, h, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
Nt.id = "radialLinear";
Nt.defaults = {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: be.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(i) {
      return i;
    },
    padding: 5,
    centerPointLabels: !1
  }
};
Nt.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
};
Nt.descriptors = {
  angleLines: {
    _fallback: "grid"
  }
};
const Je = {
  millisecond: { common: !0, size: 1, steps: 1e3 },
  second: { common: !0, size: 1e3, steps: 60 },
  minute: { common: !0, size: 6e4, steps: 60 },
  hour: { common: !0, size: 36e5, steps: 24 },
  day: { common: !0, size: 864e5, steps: 30 },
  week: { common: !1, size: 6048e5, steps: 4 },
  month: { common: !0, size: 2628e6, steps: 12 },
  quarter: { common: !1, size: 7884e6, steps: 4 },
  year: { common: !0, size: 3154e7 }
}, G = Object.keys(Je);
function Wc(i, t) {
  return i - t;
}
function sn(i, t) {
  if (T(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), N(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (Bt(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function nn(i, t, e, s) {
  const n = G.length;
  for (let o = G.indexOf(i); o < n - 1; ++o) {
    const r = Je[G[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return G[o];
  }
  return G[n - 1];
}
function Nc(i, t, e, s, n) {
  for (let o = G.length - 1; o >= G.indexOf(e); o--) {
    const r = G[o];
    if (Je[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return G[e ? G.indexOf(e) : 0];
}
function Hc(i) {
  for (let t = G.indexOf(i) + 1, e = G.length; t < e; ++t)
    if (Je[G[t]].common)
      return G[t];
}
function on(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Ti(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function jc(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function rn(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : jc(i, s, n, e);
}
class Ht extends Mt {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e) {
    const s = t.time || (t.time = {}), n = this._adapter = new Nn._date(t.adapters.date);
    n.init(e), Qt(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : sn(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = N(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = N(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), { min: e, max: s };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, r = this.max, a = Ro(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? nn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Nc(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Hc(this._unit), this.initOffsets(n), t.reverse && a.reverse(), rn(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = Y(e, 0, r), s = Y(s, 0, r), this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || nn(o.minUnit, e, s, this._getLabelCapacity(e)), a = C(o.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Bt(l) || l === !0, h = {};
    let d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, a, r), f++)
      on(h, u, g);
    return (u === s || n.bounds === "ticks" || f === 1) && on(h, u, g), Object.keys(h).sort((p, m) => p - m).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, r = o.time.displayFormats, a = this._unit, l = this._majorUnit, c = a && r[a], h = l && r[l], d = s[e], u = l && h && d && d.major, f = this._adapter.format(t, n || (u ? h : c)), g = o.ticks.callback;
    return g ? I(g, [f, e, s], this) : f;
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = nt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, rn(this, [t], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(sn(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return un(t.sort(Wc));
  }
}
Ht.id = "time";
Ht.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    major: {
      enabled: !1
    }
  }
};
function Fe(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = ft(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = ft(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Qe extends Ht {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Fe(e, this.min), this._tableRange = Fe(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        { time: e, pos: 0 },
        { time: s, pos: 1 }
      ];
    for (r = 0, a = n.length; r < a; ++r)
      h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Fe(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Fe(this._table, s * this._tableRange + this._minPos, !0);
  }
}
Qe.id = "timeseries";
Qe.defaults = Ht.defaults;
var xo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: ce,
  LinearScale: Ge,
  LogarithmicScale: Ze,
  RadialLinearScale: Nt,
  TimeScale: Ht,
  TimeSeriesScale: Qe
});
const $c = [
  Wn,
  oo,
  mo,
  xo
], Yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: In,
  Animations: Ni,
  ArcElement: ye,
  BarController: ue,
  BarElement: Me,
  BasePlatform: Hi,
  BasicPlatform: Yn,
  BubbleController: fe,
  CategoryScale: ce,
  Chart: ji,
  DatasetController: it,
  Decimation: ao,
  DomPlatform: Kn,
  DoughnutController: Lt,
  Element: st,
  Filler: ho,
  Interaction: Hn,
  Legend: uo,
  LineController: ge,
  LineElement: gt,
  LinearScale: Ge,
  LogarithmicScale: Ze,
  PieController: qe,
  PointElement: ve,
  PolarAreaController: pe,
  RadarController: me,
  RadialLinearScale: Nt,
  Scale: Mt,
  ScatterController: xe,
  SubTitle: go,
  Ticks: be,
  TimeScale: Ht,
  TimeSeriesScale: Qe,
  Title: fo,
  Tooltip: po,
  _adapters: Nn,
  _detectPlatform: qn,
  animator: at,
  controllers: Wn,
  defaults: O,
  elements: oo,
  layouts: X,
  plugins: mo,
  registerables: $c,
  registry: ot,
  scales: xo
}, Symbol.toStringTag, { value: "Module" }));

//# sourceMappingURL=chart.es.js.map


/***/ }),

/***/ "./node_modules/tw-elements/dist/js/chartjs-plugin-datalabels.es.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tw-elements/dist/js/chartjs-plugin-datalabels.es.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Me)
/* harmony export */ });
/* harmony import */ var _chart_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.es.js */ "./node_modules/tw-elements/dist/js/chart.es.js");

/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */
var D = function() {
  if (typeof window < "u") {
    if (window.devicePixelRatio)
      return window.devicePixelRatio;
    var e = window.screen;
    if (e)
      return (e.deviceXDPI || 1) / (e.logicalXDPI || 1);
  }
  return 1;
}(), m = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function(e) {
    var t = [], r;
    for (e = [].concat(e); e.length; )
      r = e.pop(), typeof r == "string" ? t.unshift.apply(t, r.split(`
`)) : Array.isArray(r) ? e.push.apply(e, r) : (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.i)(e) || t.unshift("" + r);
    return t;
  },
  // @todo move this in Chart.helpers.canvas.textSize
  // @todo cache calls of measureText if font doesn't change?!
  textSize: function(e, t, r) {
    var a = [].concat(t), i = a.length, n = e.font, o = 0, s;
    for (e.font = r.string, s = 0; s < i; ++s)
      o = Math.max(e.measureText(a[s]).width, o);
    return e.font = n, {
      height: i * r.lineHeight,
      width: o
    };
  },
  /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */
  bound: function(e, t, r) {
    return Math.max(e, Math.min(t, r));
  },
  /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */
  arrayDiff: function(e, t) {
    var r = e.slice(), a = [], i, n, o, s;
    for (i = 0, o = t.length; i < o; ++i)
      s = t[i], n = r.indexOf(s), n === -1 ? a.push([s, 1]) : r.splice(n, 1);
    for (i = 0, o = r.length; i < o; ++i)
      a.push([r[i], -1]);
    return a;
  },
  /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */
  rasterize: function(e) {
    return Math.round(e * D) / D;
  }
};
function A(e, t) {
  var r = t.x, a = t.y;
  if (r === null)
    return { x: 0, y: -1 };
  if (a === null)
    return { x: 1, y: 0 };
  var i = e.x - r, n = e.y - a, o = Math.sqrt(i * i + n * n);
  return {
    x: o ? i / o : 0,
    y: o ? n / o : -1
  };
}
function ae(e, t, r, a, i) {
  switch (i) {
    case "center":
      r = a = 0;
      break;
    case "bottom":
      r = 0, a = 1;
      break;
    case "right":
      r = 1, a = 0;
      break;
    case "left":
      r = -1, a = 0;
      break;
    case "top":
      r = 0, a = -1;
      break;
    case "start":
      r = -r, a = -a;
      break;
    case "end":
      break;
    default:
      i *= Math.PI / 180, r = Math.cos(i), a = Math.sin(i);
      break;
  }
  return {
    x: e,
    y: t,
    vx: r,
    vy: a
  };
}
var te = 0, j = 1, N = 2, O = 4, F = 8;
function M(e, t, r) {
  var a = te;
  return e < r.left ? a |= j : e > r.right && (a |= N), t < r.top ? a |= F : t > r.bottom && (a |= O), a;
}
function ie(e, t) {
  for (var r = e.x0, a = e.y0, i = e.x1, n = e.y1, o = M(r, a, t), s = M(i, n, t), l, u, v; !(!(o | s) || o & s); )
    l = o || s, l & F ? (u = r + (i - r) * (t.top - a) / (n - a), v = t.top) : l & O ? (u = r + (i - r) * (t.bottom - a) / (n - a), v = t.bottom) : l & N ? (v = a + (n - a) * (t.right - r) / (i - r), u = t.right) : l & j && (v = a + (n - a) * (t.left - r) / (i - r), u = t.left), l === o ? (r = u, a = v, o = M(r, a, t)) : (i = u, n = v, s = M(i, n, t));
  return {
    x0: r,
    x1: i,
    y0: a,
    y1: n
  };
}
function P(e, t) {
  var r = t.anchor, a = e, i, n;
  return t.clamp && (a = ie(a, t.area)), r === "start" ? (i = a.x0, n = a.y0) : r === "end" ? (i = a.x1, n = a.y1) : (i = (a.x0 + a.x1) / 2, n = (a.y0 + a.y1) / 2), ae(i, n, e.vx, e.vy, t.align);
}
var E = {
  arc: function(e, t) {
    var r = (e.startAngle + e.endAngle) / 2, a = Math.cos(r), i = Math.sin(r), n = e.innerRadius, o = e.outerRadius;
    return P({
      x0: e.x + a * n,
      y0: e.y + i * n,
      x1: e.x + a * o,
      y1: e.y + i * o,
      vx: a,
      vy: i
    }, t);
  },
  point: function(e, t) {
    var r = A(e, t.origin), a = r.x * e.options.radius, i = r.y * e.options.radius;
    return P({
      x0: e.x - a,
      y0: e.y - i,
      x1: e.x + a,
      y1: e.y + i,
      vx: r.x,
      vy: r.y
    }, t);
  },
  bar: function(e, t) {
    var r = A(e, t.origin), a = e.x, i = e.y, n = 0, o = 0;
    return e.horizontal ? (a = Math.min(e.x, e.base), n = Math.abs(e.base - e.x)) : (i = Math.min(e.y, e.base), o = Math.abs(e.base - e.y)), P({
      x0: a,
      y0: i + o,
      x1: a + n,
      y1: i,
      vx: r.x,
      vy: r.y
    }, t);
  },
  fallback: function(e, t) {
    var r = A(e, t.origin);
    return P({
      x0: e.x,
      y0: e.y,
      x1: e.x + (e.width || 0),
      y1: e.y + (e.height || 0),
      vx: r.x,
      vy: r.y
    }, t);
  }
}, x = m.rasterize;
function ne(e) {
  var t = e.borderWidth || 0, r = e.padding, a = e.size.height, i = e.size.width, n = -i / 2, o = -a / 2;
  return {
    frame: {
      x: n - r.left - t,
      y: o - r.top - t,
      w: i + r.width + t * 2,
      h: a + r.height + t * 2
    },
    text: {
      x: n,
      y: o,
      w: i,
      h: a
    }
  };
}
function oe(e, t) {
  var r = t.chart.getDatasetMeta(t.datasetIndex).vScale;
  if (!r)
    return null;
  if (r.xCenter !== void 0 && r.yCenter !== void 0)
    return { x: r.xCenter, y: r.yCenter };
  var a = r.getBasePixel();
  return e.horizontal ? { x: a, y: null } : { x: null, y: a };
}
function se(e) {
  return e instanceof _chart_es_js__WEBPACK_IMPORTED_MODULE_0__.A ? E.arc : e instanceof _chart_es_js__WEBPACK_IMPORTED_MODULE_0__.P ? E.point : e instanceof _chart_es_js__WEBPACK_IMPORTED_MODULE_0__.B ? E.bar : E.fallback;
}
function le(e, t, r, a, i, n) {
  var o = Math.PI / 2;
  if (n) {
    var s = Math.min(n, i / 2, a / 2), l = t + s, u = r + s, v = t + a - s, d = r + i - s;
    e.moveTo(t, u), l < v && u < d ? (e.arc(l, u, s, -Math.PI, -o), e.arc(v, u, s, -o, 0), e.arc(v, d, s, 0, o), e.arc(l, d, s, o, Math.PI)) : l < v ? (e.moveTo(l, r), e.arc(v, u, s, -o, o), e.arc(l, u, s, o, Math.PI + o)) : u < d ? (e.arc(l, u, s, -Math.PI, 0), e.arc(l, d, s, 0, Math.PI)) : e.arc(l, u, s, -Math.PI, Math.PI), e.closePath(), e.moveTo(t, r);
  } else
    e.rect(t, r, a, i);
}
function ue(e, t, r) {
  var a = r.backgroundColor, i = r.borderColor, n = r.borderWidth;
  !a && (!i || !n) || (e.beginPath(), le(
    e,
    x(t.x) + n / 2,
    x(t.y) + n / 2,
    x(t.w) - n,
    x(t.h) - n,
    r.borderRadius
  ), e.closePath(), a && (e.fillStyle = a, e.fill()), i && n && (e.strokeStyle = i, e.lineWidth = n, e.lineJoin = "miter", e.stroke()));
}
function ve(e, t, r) {
  var a = r.lineHeight, i = e.w, n = e.x, o = e.y + a / 2;
  return t === "center" ? n += i / 2 : (t === "end" || t === "right") && (n += i), {
    h: a,
    w: i,
    x: n,
    y: o
  };
}
function de(e, t, r) {
  var a = e.shadowBlur, i = r.stroked, n = x(r.x), o = x(r.y), s = x(r.w);
  i && e.strokeText(t, n, o, s), r.filled && (a && i && (e.shadowBlur = 0), e.fillText(t, n, o, s), a && i && (e.shadowBlur = a));
}
function fe(e, t, r, a) {
  var i = a.textAlign, n = a.color, o = !!n, s = a.font, l = t.length, u = a.textStrokeColor, v = a.textStrokeWidth, d = u && v, y;
  if (!(!l || !o && !d))
    for (r = ve(r, i, s), e.font = s.string, e.textAlign = i, e.textBaseline = "middle", e.shadowBlur = a.textShadowBlur, e.shadowColor = a.textShadowColor, o && (e.fillStyle = n), d && (e.lineJoin = "round", e.lineWidth = v, e.strokeStyle = u), y = 0, l = t.length; y < l; ++y)
      de(e, t[y], {
        stroked: d,
        filled: o,
        w: r.w,
        x: r.x,
        y: r.y + r.h * y
      });
}
var L = function(e, t, r, a) {
  var i = this;
  i._config = e, i._index = a, i._model = null, i._rects = null, i._ctx = t, i._el = r;
};
(0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.m)(L.prototype, {
  /**
   * @private
   */
  _modelize: function(e, t, r, a) {
    var i = this, n = i._index, o = (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.t)((0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.font, {}], a, n)), s = (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.color, _chart_es_js__WEBPACK_IMPORTED_MODULE_0__.d.color], a, n);
    return {
      align: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.align, "center"], a, n),
      anchor: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.anchor, "center"], a, n),
      area: a.chart.chartArea,
      backgroundColor: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.backgroundColor, null], a, n),
      borderColor: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.borderColor, null], a, n),
      borderRadius: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.borderRadius, 0], a, n),
      borderWidth: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.borderWidth, 0], a, n),
      clamp: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.clamp, !1], a, n),
      clip: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.clip, !1], a, n),
      color: s,
      display: e,
      font: o,
      lines: t,
      offset: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.offset, 4], a, n),
      opacity: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.opacity, 1], a, n),
      origin: oe(i._el, a),
      padding: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.a)((0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.padding, 4], a, n)),
      positioner: se(i._el),
      rotation: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.rotation, 0], a, n) * (Math.PI / 180),
      size: m.textSize(i._ctx, t, o),
      textAlign: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.textAlign, "start"], a, n),
      textShadowBlur: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.textShadowBlur, 0], a, n),
      textShadowColor: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.textShadowColor, s], a, n),
      textStrokeColor: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.textStrokeColor, s], a, n),
      textStrokeWidth: (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([r.textStrokeWidth, 0], a, n)
    };
  },
  update: function(e) {
    var t = this, r = null, a = null, i = t._index, n = t._config, o, s, l, u = (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.r)([n.display, !0], e, i);
    u && (o = e.dataset.data[i], s = (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.v)((0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.c)(n.formatter, [o, e]), o), l = (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.i)(s) ? [] : m.toTextLines(s), l.length && (r = t._modelize(u, l, n, e), a = ne(r))), t._model = r, t._rects = a;
  },
  geometry: function() {
    return this._rects ? this._rects.frame : {};
  },
  rotation: function() {
    return this._model ? this._model.rotation : 0;
  },
  visible: function() {
    return this._model && this._model.opacity;
  },
  model: function() {
    return this._model;
  },
  draw: function(e, t) {
    var r = this, a = e.ctx, i = r._model, n = r._rects, o;
    this.visible() && (a.save(), i.clip && (o = i.area, a.beginPath(), a.rect(
      o.left,
      o.top,
      o.right - o.left,
      o.bottom - o.top
    ), a.clip()), a.globalAlpha = m.bound(0, i.opacity, 1), a.translate(x(t.x), x(t.y)), a.rotate(i.rotation), ue(a, n.frame, i), fe(a, i.lines, n.text, i), a.restore());
  }
});
var he = Number.MIN_SAFE_INTEGER || -9007199254740991, ye = Number.MAX_SAFE_INTEGER || 9007199254740991;
function b(e, t, r) {
  var a = Math.cos(r), i = Math.sin(r), n = t.x, o = t.y;
  return {
    x: n + a * (e.x - n) - i * (e.y - o),
    y: o + i * (e.x - n) + a * (e.y - o)
  };
}
function W(e, t) {
  var r = ye, a = he, i = t.origin, n, o, s, l, u;
  for (n = 0; n < e.length; ++n)
    o = e[n], s = o.x - i.x, l = o.y - i.y, u = t.vx * s + t.vy * l, r = Math.min(r, u), a = Math.max(a, u);
  return {
    min: r,
    max: a
  };
}
function I(e, t) {
  var r = t.x - e.x, a = t.y - e.y, i = Math.sqrt(r * r + a * a);
  return {
    vx: (t.x - e.x) / i,
    vy: (t.y - e.y) / i,
    origin: e,
    ln: i
  };
}
var G = function() {
  this._rotation = 0, this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};
(0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.m)(G.prototype, {
  center: function() {
    var e = this._rect;
    return {
      x: e.x + e.w / 2,
      y: e.y + e.h / 2
    };
  },
  update: function(e, t, r) {
    this._rotation = r, this._rect = {
      x: t.x + e.x,
      y: t.y + e.y,
      w: t.w,
      h: t.h
    };
  },
  contains: function(e) {
    var t = this, r = 1, a = t._rect;
    return e = b(e, t.center(), -t._rotation), !(e.x < a.x - r || e.y < a.y - r || e.x > a.x + a.w + r * 2 || e.y > a.y + a.h + r * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function(e) {
    var t = this._points(), r = e._points(), a = [
      I(t[0], t[1]),
      I(t[0], t[3])
    ], i, n, o;
    for (this._rotation !== e._rotation && a.push(
      I(r[0], r[1]),
      I(r[0], r[3])
    ), i = 0; i < a.length; ++i)
      if (n = W(t, a[i]), o = W(r, a[i]), n.max < o.min || o.max < n.min)
        return !1;
    return !0;
  },
  /**
   * @private
   */
  _points: function() {
    var e = this, t = e._rect, r = e._rotation, a = e.center();
    return [
      b({ x: t.x, y: t.y }, a, r),
      b({ x: t.x + t.w, y: t.y }, a, r),
      b({ x: t.x + t.w, y: t.y + t.h }, a, r),
      b({ x: t.x, y: t.y + t.h }, a, r)
    ];
  }
});
function H(e, t, r) {
  var a = t.positioner(e, t), i = a.vx, n = a.vy;
  if (!i && !n)
    return { x: a.x, y: a.y };
  var o = r.w, s = r.h, l = t.rotation, u = Math.abs(o / 2 * Math.cos(l)) + Math.abs(s / 2 * Math.sin(l)), v = Math.abs(o / 2 * Math.sin(l)) + Math.abs(s / 2 * Math.cos(l)), d = 1 / Math.max(Math.abs(i), Math.abs(n));
  return u *= i * d, v *= n * d, u += t.offset * i, v += t.offset * n, {
    x: a.x + u,
    y: a.y + v
  };
}
function xe(e, t) {
  var r, a, i, n;
  for (r = e.length - 1; r >= 0; --r)
    for (i = e[r].$layout, a = r - 1; a >= 0 && i._visible; --a)
      n = e[a].$layout, n._visible && i._box.intersects(n._box) && t(i, n);
  return e;
}
function _e(e) {
  var t, r, a, i, n, o, s;
  for (t = 0, r = e.length; t < r; ++t)
    a = e[t], i = a.$layout, i._visible && (s = new Proxy(a._el, { get: (l, u) => l.getProps([u], !0)[u] }), n = a.geometry(), o = H(s, a.model(), n), i._box.update(o, n, a.rotation()));
  return xe(e, function(l, u) {
    var v = l._hidable, d = u._hidable;
    v && d || d ? u._visible = !1 : v && (l._visible = !1);
  });
}
var w = {
  prepare: function(e) {
    var t = [], r, a, i, n, o;
    for (r = 0, i = e.length; r < i; ++r)
      for (a = 0, n = e[r].length; a < n; ++a)
        o = e[r][a], t.push(o), o.$layout = {
          _box: new G(),
          _hidable: !1,
          _visible: !0,
          _set: r,
          _idx: o._index
        };
    return t.sort(function(s, l) {
      var u = s.$layout, v = l.$layout;
      return u._idx === v._idx ? v._set - u._set : v._idx - u._idx;
    }), this.update(t), t;
  },
  update: function(e) {
    var t = !1, r, a, i, n, o;
    for (r = 0, a = e.length; r < a; ++r)
      i = e[r], n = i.model(), o = i.$layout, o._hidable = n && n.display === "auto", o._visible = i.visible(), t |= o._hidable;
    t && _e(e);
  },
  lookup: function(e, t) {
    var r, a;
    for (r = e.length - 1; r >= 0; --r)
      if (a = e[r].$layout, a && a._visible && a._box.contains(t))
        return e[r];
    return null;
  },
  draw: function(e, t) {
    var r, a, i, n, o, s;
    for (r = 0, a = t.length; r < a; ++r)
      i = t[r], n = i.$layout, n._visible && (o = i.geometry(), s = H(i._el, i.model(), o), n._box.update(s, o, i.rotation()), i.draw(e, s));
  }
}, ce = function(e) {
  if ((0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.i)(e))
    return null;
  var t = e, r, a, i;
  if ((0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.b)(e))
    if (!(0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.i)(e.label))
      t = e.label;
    else if (!(0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.i)(e.r))
      t = e.r;
    else
      for (t = "", r = Object.keys(e), i = 0, a = r.length; i < a; ++i)
        t += (i !== 0 ? ", " : "") + r[i] + ": " + e[r[i]];
  return "" + t;
}, be = {
  align: "center",
  anchor: "center",
  backgroundColor: null,
  borderColor: null,
  borderRadius: 0,
  borderWidth: 0,
  clamp: !1,
  clip: !1,
  color: void 0,
  display: !0,
  font: {
    family: void 0,
    lineHeight: 1.2,
    size: void 0,
    style: void 0,
    weight: null
  },
  formatter: ce,
  labels: void 0,
  listeners: {},
  offset: 4,
  opacity: 1,
  padding: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },
  rotation: 0,
  textAlign: "start",
  textStrokeColor: void 0,
  textStrokeWidth: 0,
  textShadowBlur: 0,
  textShadowColor: void 0
}, h = "$datalabels", U = "$default";
function pe(e, t) {
  var r = e.datalabels, a = {}, i = [], n, o;
  return r === !1 ? null : (r === !0 && (r = {}), t = (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.m)({}, [t, r]), n = t.labels || {}, o = Object.keys(n), delete t.labels, o.length ? o.forEach(function(s) {
    n[s] && i.push((0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.m)({}, [
      t,
      n[s],
      { _key: s }
    ]));
  }) : i.push(t), a = i.reduce(function(s, l) {
    return (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.e)(l.listeners || {}, function(u, v) {
      s[v] = s[v] || {}, s[v][l._key || U] = u;
    }), delete l.listeners, s;
  }, {}), {
    labels: i,
    listeners: a
  });
}
function R(e, t, r, a) {
  if (t) {
    var i = r.$context, n = r.$groups, o;
    t[n._set] && (o = t[n._set][n._key], o && (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.c)(o, [i, a]) === !0 && (e[h]._dirty = !0, r.update(i)));
  }
}
function me(e, t, r, a, i) {
  var n, o;
  !r && !a || (r ? a ? r !== a && (o = n = !0) : o = !0 : n = !0, o && R(e, t.leave, r, i), n && R(e, t.enter, a, i));
}
function we(e, t) {
  var r = e[h], a = r._listeners, i, n;
  if (!(!a.enter && !a.leave)) {
    if (t.type === "mousemove")
      n = w.lookup(r._labels, t);
    else if (t.type !== "mouseout")
      return;
    i = r._hovered, r._hovered = n, me(e, a, i, n, t);
  }
}
function ge(e, t) {
  var r = e[h], a = r._listeners.click, i = a && w.lookup(r._labels, t);
  i && R(e, a, i, t);
}
var Me = {
  id: "datalabels",
  defaults: be,
  beforeInit: function(e) {
    e[h] = {
      _actives: []
    };
  },
  beforeUpdate: function(e) {
    var t = e[h];
    t._listened = !1, t._listeners = {}, t._datasets = [], t._labels = [];
  },
  afterDatasetUpdate: function(e, t, r) {
    var a = t.index, i = e[h], n = i._datasets[a] = [], o = e.isDatasetVisible(a), s = e.data.datasets[a], l = pe(s, r), u = t.meta.data || [], v = e.ctx, d, y, $, T, S, B, c, _;
    for (v.save(), d = 0, $ = u.length; d < $; ++d)
      if (c = u[d], c[h] = [], o && c && e.getDataVisibility(d) && !c.skip)
        for (y = 0, T = l.labels.length; y < T; ++y)
          S = l.labels[y], B = S._key, _ = new L(S, v, c, d), _.$groups = {
            _set: a,
            _key: B || U
          }, _.$context = {
            active: !1,
            chart: e,
            dataIndex: d,
            dataset: s,
            datasetIndex: a
          }, _.update(_.$context), c[h].push(_), n.push(_);
    v.restore(), (0,_chart_es_js__WEBPACK_IMPORTED_MODULE_0__.m)(i._listeners, l.listeners, {
      merger: function(k, C, X) {
        C[k] = C[k] || {}, C[k][t.index] = X[k], i._listened = !0;
      }
    });
  },
  afterUpdate: function(e) {
    e[h]._labels = w.prepare(e[h]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function(e) {
    w.draw(e, e[h]._labels);
  },
  beforeEvent: function(e, t) {
    if (e[h]._listened) {
      var r = t.event;
      switch (r.type) {
        case "mousemove":
        case "mouseout":
          we(e, r);
          break;
        case "click":
          ge(e, r);
          break;
      }
    }
  },
  afterEvent: function(e) {
    var t = e[h], r = t._actives, a = t._actives = e.getActiveElements(), i = m.arrayDiff(r, a), n, o, s, l, u, v, d;
    for (n = 0, o = i.length; n < o; ++n)
      if (u = i[n], u[1])
        for (d = u[0].element[h] || [], s = 0, l = d.length; s < l; ++s)
          v = d[s], v.$context.active = u[1] === 1, v.update(v.$context);
    (t._dirty || i.length) && (w.update(t._labels), e.render()), delete t._dirty;
  }
};

//# sourceMappingURL=chartjs-plugin-datalabels.es.js.map


/***/ }),

/***/ "./node_modules/tw-elements/dist/js/tw-elements.es.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/tw-elements/dist/js/tw-elements.es.min.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Hl),
/* harmony export */   Animate: () => (/* binding */ Jl),
/* harmony export */   Button: () => (/* binding */ dl),
/* harmony export */   Carousel: () => (/* binding */ Ut),
/* harmony export */   Chart: () => (/* binding */ vc),
/* harmony export */   Chip: () => (/* binding */ hi),
/* harmony export */   ChipsInput: () => (/* binding */ K0),
/* harmony export */   Collapse: () => (/* binding */ qt),
/* harmony export */   Datatable: () => (/* binding */ wc),
/* harmony export */   Datepicker: () => (/* binding */ F0),
/* harmony export */   Dropdown: () => (/* binding */ It),
/* harmony export */   Input: () => (/* binding */ W),
/* harmony export */   Lightbox: () => (/* binding */ Ls),
/* harmony export */   Modal: () => (/* binding */ Fl),
/* harmony export */   Offcanvas: () => (/* binding */ no),
/* harmony export */   PerfectScrollbar: () => (/* binding */ yc),
/* harmony export */   Popconfirm: () => (/* binding */ kc),
/* harmony export */   Popover: () => (/* binding */ Yl),
/* harmony export */   Rating: () => (/* binding */ z0),
/* harmony export */   Ripple: () => (/* binding */ Ue),
/* harmony export */   ScrollSpy: () => (/* binding */ zl),
/* harmony export */   Select: () => (/* binding */ $o),
/* harmony export */   Sidenav: () => (/* binding */ pi),
/* harmony export */   Stepper: () => (/* binding */ j0),
/* harmony export */   Tab: () => (/* binding */ Ul),
/* harmony export */   Timepicker: () => (/* binding */ Y0),
/* harmony export */   Toast: () => (/* binding */ Xl),
/* harmony export */   Tooltip: () => (/* binding */ Qe),
/* harmony export */   initTE: () => (/* binding */ U0)
/* harmony export */ });
/*!
* Tailwind Elements 1.0.0-beta3
* 
* Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
*/
var Nc = Object.defineProperty;
var Rc = (s, t, e) => t in s ? Nc(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var At = (s, t, e) => (Rc(s, typeof t != "symbol" ? t + "" : t, e), e);
const Zs = (() => {
  const s = {};
  let t = 1;
  return {
    set(e, i, n) {
      typeof e[i] > "u" && (e[i] = {
        key: i,
        id: t
      }, t++), s[e[i].id] = n;
    },
    get(e, i) {
      if (!e || typeof e[i] > "u")
        return null;
      const n = e[i];
      return n.key === i ? s[n.id] : null;
    },
    delete(e, i) {
      if (typeof e[i] > "u")
        return;
      const n = e[i];
      n.key === i && (delete s[n.id], delete e[i]);
    }
  };
})(), I = {
  setData(s, t, e) {
    Zs.set(s, t, e);
  },
  getData(s, t) {
    return Zs.get(s, t);
  },
  removeData(s, t) {
    Zs.delete(s, t);
  }
}, Pc = 1e6, Bc = 1e3, Qn = "transitionend", Hc = (s) => s == null ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(), bt = (s) => {
  do
    s += Math.floor(Math.random() * Pc);
  while (document.getElementById(s));
  return s;
}, Qa = (s) => {
  let t = s.getAttribute("data-te-target");
  if (!t || t === "#") {
    let e = s.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
}, fo = (s) => {
  const t = Qa(s);
  return t && document.querySelector(t) ? t : null;
}, Qt = (s) => {
  const t = Qa(s);
  return t ? document.querySelector(t) : null;
}, Wc = (s) => {
  if (!s)
    return 0;
  let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(s);
  const i = Number.parseFloat(t), n = Number.parseFloat(e);
  return !i && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * Bc);
}, Ja = (s) => {
  s.dispatchEvent(new Event(Qn));
}, Ve = (s) => !s || typeof s != "object" ? !1 : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u"), Jt = (s) => Ve(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null, L = (s, t, e) => {
  Object.keys(e).forEach((i) => {
    const n = e[i], o = t[i], r = o && Ve(o) ? "element" : Hc(o);
    if (!new RegExp(n).test(r))
      throw new Error(
        `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
      );
  });
}, Lt = (s) => {
  if (!s || s.getClientRects().length === 0)
    return !1;
  if (s.style && s.parentNode && s.parentNode.style) {
    const t = getComputedStyle(s), e = getComputedStyle(s.parentNode);
    return getComputedStyle(s).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, me = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? !0 : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false", tl = (s) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof s.getRootNode == "function") {
    const t = s.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return s instanceof ShadowRoot ? s : s.parentNode ? tl(s.parentNode) : null;
}, Ms = () => function() {
}, Ge = (s) => {
  s.offsetHeight;
}, el = () => {
  const { jQuery: s } = window;
  return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
}, Qs = [], il = (s) => {
  document.readyState === "loading" ? (Qs.length || document.addEventListener("DOMContentLoaded", () => {
    Qs.forEach((t) => t());
  }), Qs.push(s)) : s();
}, F = () => document.documentElement.dir === "rtl", Vc = (s) => Array.from(s), D = (s) => document.createElement(s), fe = (s) => {
  typeof s == "function" && s();
}, sl = (s, t, e = !0) => {
  if (!e) {
    fe(s);
    return;
  }
  const i = 5, n = Wc(t) + i;
  let o = !1;
  const r = ({ target: a }) => {
    a === t && (o = !0, t.removeEventListener(Qn, r), fe(s));
  };
  t.addEventListener(Qn, r), setTimeout(() => {
    o || Ja(t);
  }, n);
}, nl = (s, t, e, i) => {
  let n = s.indexOf(t);
  if (n === -1)
    return s[!e && i ? s.length - 1 : 0];
  const o = s.length;
  return n += e ? 1 : -1, i && (n = (n + o) % o), s[Math.max(0, Math.min(n, o - 1))];
}, Fc = /[^.]*(?=\..*)\.|.*/, Yc = /\..*/, jc = /::\d+$/, Js = {};
let Yo = 1;
const Kc = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, zc = /^(mouseenter|mouseleave)/i, ol = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function rl(s, t) {
  return t && `${t}::${Yo++}` || s.uidEvent || Yo++;
}
function al(s) {
  const t = rl(s);
  return s.uidEvent = t, Js[t] = Js[t] || {}, Js[t];
}
function Uc(s, t) {
  return function e(i) {
    return i.delegateTarget = s, e.oneOff && h.off(s, i.type, t), t.apply(s, [i]);
  };
}
function Xc(s, t, e) {
  return function i(n) {
    const o = s.querySelectorAll(t);
    for (let { target: r } = n; r && r !== this; r = r.parentNode)
      for (let a = o.length; a--; "")
        if (o[a] === r)
          return n.delegateTarget = r, i.oneOff && h.off(s, n.type, e), e.apply(r, [n]);
    return null;
  };
}
function ll(s, t, e = null) {
  const i = Object.keys(s);
  for (let n = 0, o = i.length; n < o; n++) {
    const r = s[i[n]];
    if (r.originalHandler === t && r.delegationSelector === e)
      return r;
  }
  return null;
}
function cl(s, t, e) {
  const i = typeof t == "string", n = i ? e : t;
  let o = hl(s);
  return ol.has(o) || (o = s), [i, n, o];
}
function jo(s, t, e, i, n) {
  if (typeof t != "string" || !s)
    return;
  if (e || (e = i, i = null), zc.test(t)) {
    const m = (g) => function(v) {
      if (!v.relatedTarget || v.relatedTarget !== v.delegateTarget && !v.delegateTarget.contains(v.relatedTarget))
        return g.call(this, v);
    };
    i ? i = m(i) : e = m(e);
  }
  const [o, r, a] = cl(
    t,
    e,
    i
  ), l = al(s), p = l[a] || (l[a] = {}), u = ll(
    p,
    r,
    o ? e : null
  );
  if (u) {
    u.oneOff = u.oneOff && n;
    return;
  }
  const f = rl(
    r,
    t.replace(Fc, "")
  ), _ = o ? Xc(s, e, i) : Uc(s, e);
  _.delegationSelector = o ? e : null, _.originalHandler = r, _.oneOff = n, _.uidEvent = f, p[f] = _, s.addEventListener(a, _, o);
}
function Jn(s, t, e, i, n) {
  const o = ll(t[e], i, n);
  o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
}
function Gc(s, t, e, i) {
  const n = t[e] || {};
  Object.keys(n).forEach((o) => {
    if (o.includes(i)) {
      const r = n[o];
      Jn(
        s,
        t,
        e,
        r.originalHandler,
        r.delegationSelector
      );
    }
  });
}
function hl(s) {
  return s = s.replace(Yc, ""), Kc[s] || s;
}
const h = {
  on(s, t, e, i) {
    jo(s, t, e, i, !1);
  },
  one(s, t, e, i) {
    jo(s, t, e, i, !0);
  },
  off(s, t, e, i) {
    if (typeof t != "string" || !s)
      return;
    const [n, o, r] = cl(
      t,
      e,
      i
    ), a = r !== t, l = al(s), p = t.startsWith(".");
    if (typeof o < "u") {
      if (!l || !l[r])
        return;
      Jn(
        s,
        l,
        r,
        o,
        n ? e : null
      );
      return;
    }
    p && Object.keys(l).forEach((f) => {
      Gc(
        s,
        l,
        f,
        t.slice(1)
      );
    });
    const u = l[r] || {};
    Object.keys(u).forEach((f) => {
      const _ = f.replace(jc, "");
      if (!a || t.includes(_)) {
        const m = u[f];
        Jn(
          s,
          l,
          r,
          m.originalHandler,
          m.delegationSelector
        );
      }
    });
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s)
      return null;
    const i = el(), n = hl(t), o = t !== n, r = ol.has(n);
    let a, l = !0, p = !0, u = !1, f = null;
    return o && i && (a = i.Event(t, e), i(s).trigger(a), l = !a.isPropagationStopped(), p = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (f = document.createEvent("HTMLEvents"), f.initEvent(n, l, !0)) : f = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), typeof e < "u" && Object.keys(e).forEach((_) => {
      Object.defineProperty(f, _, {
        get() {
          return e[_];
        }
      });
    }), u && f.preventDefault(), p && s.dispatchEvent(f), f.defaultPrevented && typeof a < "u" && a.preventDefault(), f;
  }
}, oe = {
  on(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      h.on(s, n[o], e, i);
  },
  off(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      h.off(s, n[o], e, i);
  }
}, qc = "5.1.3";
class Et {
  constructor(t) {
    t = Jt(t), t && (this._element = t, I.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    I.removeData(this._element, this.constructor.DATA_KEY), h.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, e, i = !0) {
    sl(t, e, i);
  }
  /** Static */
  static getInstance(t) {
    return I.getData(Jt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return qc;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
}
const Zc = "button", Qc = "active";
class dl extends Et {
  // Getters
  static get NAME() {
    return Zc;
  }
  // Public
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(Qc)
    );
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = dl.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
var Q = "top", ht = "bottom", dt = "right", J = "left", Ii = "auto", qe = [Q, ht, dt, J], ve = "start", Fe = "end", ul = "clippingParents", mo = "viewport", Ie = "popper", pl = "reference", to = /* @__PURE__ */ qe.reduce(function(s, t) {
  return s.concat([t + "-" + ve, t + "-" + Fe]);
}, []), go = /* @__PURE__ */ [].concat(qe, [Ii]).reduce(function(s, t) {
  return s.concat([t, t + "-" + ve, t + "-" + Fe]);
}, []), _l = "beforeRead", fl = "read", ml = "afterRead", gl = "beforeMain", bl = "main", vl = "afterMain", Tl = "beforeWrite", El = "write", Cl = "afterWrite", Ns = [_l, fl, ml, gl, bl, vl, Tl, El, Cl];
function Nt(s) {
  return s ? (s.nodeName || "").toLowerCase() : null;
}
function ut(s) {
  if (s == null)
    return window;
  if (s.toString() !== "[object Window]") {
    var t = s.ownerDocument;
    return t && t.defaultView || window;
  }
  return s;
}
function Te(s) {
  var t = ut(s).Element;
  return s instanceof t || s instanceof Element;
}
function ct(s) {
  var t = ut(s).HTMLElement;
  return s instanceof t || s instanceof HTMLElement;
}
function bo(s) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ut(s).ShadowRoot;
  return s instanceof t || s instanceof ShadowRoot;
}
function Jc(s) {
  var t = s.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
    !ct(o) || !Nt(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(r) {
      var a = n[r];
      a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? "" : a);
    }));
  });
}
function th(s) {
  var t = s.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var n = t.elements[i], o = t.attributes[i] || {}, r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = r.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !ct(n) || !Nt(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
const vo = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Jc,
  effect: th,
  requires: ["computeStyles"]
};
function vt(s) {
  return s.split("-")[0];
}
var ge = Math.max, Rs = Math.min, Ye = Math.round;
function eo() {
  var s = navigator.userAgentData;
  return s != null && s.brands && Array.isArray(s.brands) ? s.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Al() {
  return !/^((?!chrome|android).)*safari/i.test(eo());
}
function je(s, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var i = s.getBoundingClientRect(), n = 1, o = 1;
  t && ct(s) && (n = s.offsetWidth > 0 && Ye(i.width) / s.offsetWidth || 1, o = s.offsetHeight > 0 && Ye(i.height) / s.offsetHeight || 1);
  var r = Te(s) ? ut(s) : window, a = r.visualViewport, l = !Al() && e, p = (i.left + (l && a ? a.offsetLeft : 0)) / n, u = (i.top + (l && a ? a.offsetTop : 0)) / o, f = i.width / n, _ = i.height / o;
  return {
    width: f,
    height: _,
    top: u,
    right: p + f,
    bottom: u + _,
    left: p,
    x: p,
    y: u
  };
}
function To(s) {
  var t = je(s), e = s.offsetWidth, i = s.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: s.offsetLeft,
    y: s.offsetTop,
    width: e,
    height: i
  };
}
function yl(s, t) {
  var e = t.getRootNode && t.getRootNode();
  if (s.contains(t))
    return !0;
  if (e && bo(e)) {
    var i = t;
    do {
      if (i && s.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Tt(s) {
  return ut(s).getComputedStyle(s);
}
function eh(s) {
  return ["table", "td", "th"].indexOf(Nt(s)) >= 0;
}
function te(s) {
  return ((Te(s) ? s.ownerDocument : (
    // $FlowFixMe[prop-missing]
    s.document
  )) || window.document).documentElement;
}
function Hs(s) {
  return Nt(s) === "html" ? s : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    s.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    s.parentNode || // DOM Element detected
    (bo(s) ? s.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    te(s)
  );
}
function Ko(s) {
  return !ct(s) || // https://github.com/popperjs/popper-core/issues/837
  Tt(s).position === "fixed" ? null : s.offsetParent;
}
function ih(s) {
  var t = /firefox/i.test(eo()), e = /Trident/i.test(eo());
  if (e && ct(s)) {
    var i = Tt(s);
    if (i.position === "fixed")
      return null;
  }
  var n = Hs(s);
  for (bo(n) && (n = n.host); ct(n) && ["html", "body"].indexOf(Nt(n)) < 0; ) {
    var o = Tt(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function Di(s) {
  for (var t = ut(s), e = Ko(s); e && eh(e) && Tt(e).position === "static"; )
    e = Ko(e);
  return e && (Nt(e) === "html" || Nt(e) === "body" && Tt(e).position === "static") ? t : e || ih(s) || t;
}
function Eo(s) {
  return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
}
function Ei(s, t, e) {
  return ge(s, Rs(t, e));
}
function sh(s, t, e) {
  var i = Ei(s, t, e);
  return i > e ? e : i;
}
function wl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function xl(s) {
  return Object.assign({}, wl(), s);
}
function kl(s, t) {
  return t.reduce(function(e, i) {
    return e[i] = s, e;
  }, {});
}
var nh = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, xl(typeof t != "number" ? t : kl(t, qe));
};
function oh(s) {
  var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = vt(e.placement), l = Eo(a), p = [J, dt].indexOf(a) >= 0, u = p ? "height" : "width";
  if (!(!o || !r)) {
    var f = nh(n.padding, e), _ = To(o), m = l === "y" ? Q : J, g = l === "y" ? ht : dt, v = e.rects.reference[u] + e.rects.reference[l] - r[l] - e.rects.popper[u], b = r[l] - e.rects.reference[l], C = Di(o), y = C ? l === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, E = v / 2 - b / 2, T = f[m], A = y - _[u] - f[g], w = y / 2 - _[u] / 2 + E, S = Ei(T, w, A), k = l;
    e.modifiersData[i] = (t = {}, t[k] = S, t.centerOffset = S - w, t);
  }
}
function rh(s) {
  var t = s.state, e = s.options, i = e.element, n = i === void 0 ? "[data-popper-arrow]" : i;
  if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
    if ({}.NODE_ENV !== "production" && (ct(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !yl(t.elements.popper, n)) {
      ({}).NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = n;
  }
}
const Ol = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oh,
  effect: rh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ke(s) {
  return s.split("-")[1];
}
var ah = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function lh(s, t) {
  var e = s.x, i = s.y, n = t.devicePixelRatio || 1;
  return {
    x: Ye(e * n) / n || 0,
    y: Ye(i * n) / n || 0
  };
}
function zo(s) {
  var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, r = s.offsets, a = s.position, l = s.gpuAcceleration, p = s.adaptive, u = s.roundOffsets, f = s.isFixed, _ = r.x, m = _ === void 0 ? 0 : _, g = r.y, v = g === void 0 ? 0 : g, b = typeof u == "function" ? u({
    x: m,
    y: v
  }) : {
    x: m,
    y: v
  };
  m = b.x, v = b.y;
  var C = r.hasOwnProperty("x"), y = r.hasOwnProperty("y"), E = J, T = Q, A = window;
  if (p) {
    var w = Di(e), S = "clientHeight", k = "clientWidth";
    if (w === ut(e) && (w = te(e), Tt(w).position !== "static" && a === "absolute" && (S = "scrollHeight", k = "scrollWidth")), w = w, n === Q || (n === J || n === dt) && o === Fe) {
      T = ht;
      var x = f && w === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[S]
      );
      v -= x - i.height, v *= l ? 1 : -1;
    }
    if (n === J || (n === Q || n === ht) && o === Fe) {
      E = dt;
      var $ = f && w === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[k]
      );
      m -= $ - i.width, m *= l ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: a
  }, p && ah), M = u === !0 ? lh({
    x: m,
    y: v
  }, ut(e)) : {
    x: m,
    y: v
  };
  if (m = M.x, v = M.y, l) {
    var P;
    return Object.assign({}, O, (P = {}, P[T] = y ? "0" : "", P[E] = C ? "0" : "", P.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", P));
  }
  return Object.assign({}, O, (t = {}, t[T] = y ? v + "px" : "", t[E] = C ? m + "px" : "", t.transform = "", t));
}
function ch(s) {
  var t = s.state, e = s.options, i = e.gpuAcceleration, n = i === void 0 ? !0 : i, o = e.adaptive, r = o === void 0 ? !0 : o, a = e.roundOffsets, l = a === void 0 ? !0 : a;
  if ({}.NODE_ENV !== "production") {
    var p = Tt(t.elements.popper).transitionProperty || "";
    r && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return p.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: vt(t.placement),
    variation: Ke(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, zo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, zo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Co = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ch,
  data: {}
};
var ji = {
  passive: !0
};
function hh(s) {
  var t = s.state, e = s.instance, i = s.options, n = i.scroll, o = n === void 0 ? !0 : n, r = i.resize, a = r === void 0 ? !0 : r, l = ut(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(u) {
    u.addEventListener("scroll", e.update, ji);
  }), a && l.addEventListener("resize", e.update, ji), function() {
    o && p.forEach(function(u) {
      u.removeEventListener("scroll", e.update, ji);
    }), a && l.removeEventListener("resize", e.update, ji);
  };
}
const Ao = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hh,
  data: {}
};
var dh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bs(s) {
  return s.replace(/left|right|bottom|top/g, function(t) {
    return dh[t];
  });
}
var uh = {
  start: "end",
  end: "start"
};
function Uo(s) {
  return s.replace(/start|end/g, function(t) {
    return uh[t];
  });
}
function yo(s) {
  var t = ut(s), e = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: i
  };
}
function wo(s) {
  return je(te(s)).left + yo(s).scrollLeft;
}
function ph(s, t) {
  var e = ut(s), i = te(s), n = e.visualViewport, o = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    o = n.width, r = n.height;
    var p = Al();
    (p || !p && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a + wo(s),
    y: l
  };
}
function _h(s) {
  var t, e = te(s), i = yo(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = ge(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = ge(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + wo(s), l = -i.scrollTop;
  return Tt(n || e).direction === "rtl" && (a += ge(e.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function xo(s) {
  var t = Tt(s), e = t.overflow, i = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + i);
}
function Sl(s) {
  return ["html", "body", "#document"].indexOf(Nt(s)) >= 0 ? s.ownerDocument.body : ct(s) && xo(s) ? s : Sl(Hs(s));
}
function Ci(s, t) {
  var e;
  t === void 0 && (t = []);
  var i = Sl(s), n = i === ((e = s.ownerDocument) == null ? void 0 : e.body), o = ut(i), r = n ? [o].concat(o.visualViewport || [], xo(i) ? i : []) : i, a = t.concat(r);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Ci(Hs(r)))
  );
}
function io(s) {
  return Object.assign({}, s, {
    left: s.x,
    top: s.y,
    right: s.x + s.width,
    bottom: s.y + s.height
  });
}
function fh(s, t) {
  var e = je(s, !1, t === "fixed");
  return e.top = e.top + s.clientTop, e.left = e.left + s.clientLeft, e.bottom = e.top + s.clientHeight, e.right = e.left + s.clientWidth, e.width = s.clientWidth, e.height = s.clientHeight, e.x = e.left, e.y = e.top, e;
}
function Xo(s, t, e) {
  return t === mo ? io(ph(s, e)) : Te(t) ? fh(t, e) : io(_h(te(s)));
}
function mh(s) {
  var t = Ci(Hs(s)), e = ["absolute", "fixed"].indexOf(Tt(s).position) >= 0, i = e && ct(s) ? Di(s) : s;
  return Te(i) ? t.filter(function(n) {
    return Te(n) && yl(n, i) && Nt(n) !== "body";
  }) : [];
}
function gh(s, t, e, i) {
  var n = t === "clippingParents" ? mh(s) : [].concat(t), o = [].concat(n, [e]), r = o[0], a = o.reduce(function(l, p) {
    var u = Xo(s, p, i);
    return l.top = ge(u.top, l.top), l.right = Rs(u.right, l.right), l.bottom = Rs(u.bottom, l.bottom), l.left = ge(u.left, l.left), l;
  }, Xo(s, r, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Il(s) {
  var t = s.reference, e = s.element, i = s.placement, n = i ? vt(i) : null, o = i ? Ke(i) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (n) {
    case Q:
      l = {
        x: r,
        y: t.y - e.height
      };
      break;
    case ht:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case dt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case J:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var p = n ? Eo(n) : null;
  if (p != null) {
    var u = p === "y" ? "height" : "width";
    switch (o) {
      case ve:
        l[p] = l[p] - (t[u] / 2 - e[u] / 2);
        break;
      case Fe:
        l[p] = l[p] + (t[u] / 2 - e[u] / 2);
        break;
    }
  }
  return l;
}
function ze(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = i === void 0 ? s.placement : i, o = e.strategy, r = o === void 0 ? s.strategy : o, a = e.boundary, l = a === void 0 ? ul : a, p = e.rootBoundary, u = p === void 0 ? mo : p, f = e.elementContext, _ = f === void 0 ? Ie : f, m = e.altBoundary, g = m === void 0 ? !1 : m, v = e.padding, b = v === void 0 ? 0 : v, C = xl(typeof b != "number" ? b : kl(b, qe)), y = _ === Ie ? pl : Ie, E = s.rects.popper, T = s.elements[g ? y : _], A = gh(Te(T) ? T : T.contextElement || te(s.elements.popper), l, u, r), w = je(s.elements.reference), S = Il({
    reference: w,
    element: E,
    strategy: "absolute",
    placement: n
  }), k = io(Object.assign({}, E, S)), x = _ === Ie ? k : w, $ = {
    top: A.top - x.top + C.top,
    bottom: x.bottom - A.bottom + C.bottom,
    left: A.left - x.left + C.left,
    right: x.right - A.right + C.right
  }, O = s.modifiersData.offset;
  if (_ === Ie && O) {
    var M = O[n];
    Object.keys($).forEach(function(P) {
      var tt = [dt, ht].indexOf(P) >= 0 ? 1 : -1, et = [Q, ht].indexOf(P) >= 0 ? "y" : "x";
      $[P] += M[et] * tt;
    });
  }
  return $;
}
function bh(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, p = l === void 0 ? go : l, u = Ke(i), f = u ? a ? to : to.filter(function(g) {
    return Ke(g) === u;
  }) : qe, _ = f.filter(function(g) {
    return p.indexOf(g) >= 0;
  });
  _.length === 0 && (_ = f, {}.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = _.reduce(function(g, v) {
    return g[v] = ze(s, {
      placement: v,
      boundary: n,
      rootBoundary: o,
      padding: r
    })[vt(v)], g;
  }, {});
  return Object.keys(m).sort(function(g, v) {
    return m[g] - m[v];
  });
}
function vh(s) {
  if (vt(s) === Ii)
    return [];
  var t = bs(s);
  return [Uo(s), t, Uo(t)];
}
function Th(s) {
  var t = s.state, e = s.options, i = s.name;
  if (!t.modifiersData[i]._skip) {
    for (var n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !0 : r, l = e.fallbackPlacements, p = e.padding, u = e.boundary, f = e.rootBoundary, _ = e.altBoundary, m = e.flipVariations, g = m === void 0 ? !0 : m, v = e.allowedAutoPlacements, b = t.options.placement, C = vt(b), y = C === b, E = l || (y || !g ? [bs(b)] : vh(b)), T = [b].concat(E).reduce(function(Ae, Ht) {
      return Ae.concat(vt(Ht) === Ii ? bh(t, {
        placement: Ht,
        boundary: u,
        rootBoundary: f,
        padding: p,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : Ht);
    }, []), A = t.rects.reference, w = t.rects.popper, S = /* @__PURE__ */ new Map(), k = !0, x = T[0], $ = 0; $ < T.length; $++) {
      var O = T[$], M = vt(O), P = Ke(O) === ve, tt = [Q, ht].indexOf(M) >= 0, et = tt ? "width" : "height", U = ze(t, {
        placement: O,
        boundary: u,
        rootBoundary: f,
        altBoundary: _,
        padding: p
      }), mt = tt ? P ? dt : J : P ? ht : Q;
      A[et] > w[et] && (mt = bs(mt));
      var Hi = bs(mt), ie = [];
      if (o && ie.push(U[M] <= 0), a && ie.push(U[mt] <= 0, U[Hi] <= 0), ie.every(function(Ae) {
        return Ae;
      })) {
        x = O, k = !1;
        break;
      }
      S.set(O, ie);
    }
    if (k)
      for (var Wi = g ? 3 : 1, Us = function(Ht) {
        var ii = T.find(function(Fi) {
          var se = S.get(Fi);
          if (se)
            return se.slice(0, Ht).every(function(Xs) {
              return Xs;
            });
        });
        if (ii)
          return x = ii, "break";
      }, ei = Wi; ei > 0; ei--) {
        var Vi = Us(ei);
        if (Vi === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[i]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Dl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Th,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Go(s, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: s.top - t.height - e.y,
    right: s.right - t.width + e.x,
    bottom: s.bottom - t.height + e.y,
    left: s.left - t.width - e.x
  };
}
function qo(s) {
  return [Q, dt, ht, J].some(function(t) {
    return s[t] >= 0;
  });
}
function Eh(s) {
  var t = s.state, e = s.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = ze(t, {
    elementContext: "reference"
  }), a = ze(t, {
    altBoundary: !0
  }), l = Go(r, i), p = Go(a, n, o), u = qo(l), f = qo(p);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const $l = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Eh
};
function Ch(s, t, e) {
  var i = vt(s), n = [J, Q].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
    placement: s
  })) : e, r = o[0], a = o[1];
  return r = r || 0, a = (a || 0) * n, [J, dt].indexOf(i) >= 0 ? {
    x: a,
    y: r
  } : {
    x: r,
    y: a
  };
}
function Ah(s) {
  var t = s.state, e = s.options, i = s.name, n = e.offset, o = n === void 0 ? [0, 0] : n, r = go.reduce(function(u, f) {
    return u[f] = Ch(f, t.rects, o), u;
  }, {}), a = r[t.placement], l = a.x, p = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = r;
}
const Ll = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ah
};
function yh(s) {
  var t = s.state, e = s.name;
  t.modifiersData[e] = Il({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ko = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yh,
  data: {}
};
function wh(s) {
  return s === "x" ? "y" : "x";
}
function xh(s) {
  var t = s.state, e = s.options, i = s.name, n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !1 : r, l = e.boundary, p = e.rootBoundary, u = e.altBoundary, f = e.padding, _ = e.tether, m = _ === void 0 ? !0 : _, g = e.tetherOffset, v = g === void 0 ? 0 : g, b = ze(t, {
    boundary: l,
    rootBoundary: p,
    padding: f,
    altBoundary: u
  }), C = vt(t.placement), y = Ke(t.placement), E = !y, T = Eo(C), A = wh(T), w = t.modifiersData.popperOffsets, S = t.rects.reference, k = t.rects.popper, x = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, $ = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (w) {
    if (o) {
      var P, tt = T === "y" ? Q : J, et = T === "y" ? ht : dt, U = T === "y" ? "height" : "width", mt = w[T], Hi = mt + b[tt], ie = mt - b[et], Wi = m ? -k[U] / 2 : 0, Us = y === ve ? S[U] : k[U], ei = y === ve ? -k[U] : -S[U], Vi = t.elements.arrow, Ae = m && Vi ? To(Vi) : {
        width: 0,
        height: 0
      }, Ht = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wl(), ii = Ht[tt], Fi = Ht[et], se = Ei(0, S[U], Ae[U]), Xs = E ? S[U] / 2 - Wi - se - ii - $.mainAxis : Us - se - ii - $.mainAxis, Sc = E ? -S[U] / 2 + Wi + se + Fi + $.mainAxis : ei + se + Fi + $.mainAxis, Gs = t.elements.arrow && Di(t.elements.arrow), Ic = Gs ? T === "y" ? Gs.clientTop || 0 : Gs.clientLeft || 0 : 0, Mo = (P = O == null ? void 0 : O[T]) != null ? P : 0, Dc = mt + Xs - Mo - Ic, $c = mt + Sc - Mo, No = Ei(m ? Rs(Hi, Dc) : Hi, mt, m ? ge(ie, $c) : ie);
      w[T] = No, M[T] = No - mt;
    }
    if (a) {
      var Ro, Lc = T === "x" ? Q : J, Mc = T === "x" ? ht : dt, ne = w[A], Yi = A === "y" ? "height" : "width", Po = ne + b[Lc], Bo = ne - b[Mc], qs = [Q, J].indexOf(C) !== -1, Ho = (Ro = O == null ? void 0 : O[A]) != null ? Ro : 0, Wo = qs ? Po : ne - S[Yi] - k[Yi] - Ho + $.altAxis, Vo = qs ? ne + S[Yi] + k[Yi] - Ho - $.altAxis : Bo, Fo = m && qs ? sh(Wo, ne, Vo) : Ei(m ? Wo : Po, ne, m ? Vo : Bo);
      w[A] = Fo, M[A] = Fo - ne;
    }
    t.modifiersData[i] = M;
  }
}
const Ml = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xh,
  requiresIfExists: ["offset"]
};
function kh(s) {
  return {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  };
}
function Oh(s) {
  return s === ut(s) || !ct(s) ? yo(s) : kh(s);
}
function Sh(s) {
  var t = s.getBoundingClientRect(), e = Ye(t.width) / s.offsetWidth || 1, i = Ye(t.height) / s.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
function Ih(s, t, e) {
  e === void 0 && (e = !1);
  var i = ct(t), n = ct(t) && Sh(t), o = te(t), r = je(s, n, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !e) && ((Nt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xo(o)) && (a = Oh(t)), ct(t) ? (l = je(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = wo(o))), {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Dh(s) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  s.forEach(function(o) {
    t.set(o.name, o);
  });
  function n(o) {
    e.add(o.name);
    var r = [].concat(o.requires || [], o.requiresIfExists || []);
    r.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && n(l);
      }
    }), i.push(o);
  }
  return s.forEach(function(o) {
    e.has(o.name) || n(o);
  }), i;
}
function $h(s) {
  var t = Dh(s);
  return Ns.reduce(function(e, i) {
    return e.concat(t.filter(function(n) {
      return n.phase === i;
    }));
  }, []);
}
function Lh(s) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(s());
      });
    })), t;
  };
}
function Wt(s) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    e[i - 1] = arguments[i];
  return [].concat(e).reduce(function(n, o) {
    return n.replace(/%s/, o);
  }, s);
}
var re = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Mh = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Zo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Nh(s) {
  s.forEach(function(t) {
    [].concat(Object.keys(t), Zo).filter(function(e, i, n) {
      return n.indexOf(e) === i;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(Wt(re, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Wt(re, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Ns.indexOf(t.phase) < 0 && console.error(Wt(re, t.name, '"phase"', "either " + Ns.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Wt(re, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Wt(re, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Wt(re, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Wt(re, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Zo.map(function(i) {
            return '"' + i + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(i) {
        s.find(function(n) {
          return n.name === i;
        }) == null && console.error(Wt(Mh, String(t.name), i, i));
      });
    });
  });
}
function Rh(s, t) {
  var e = /* @__PURE__ */ new Set();
  return s.filter(function(i) {
    var n = t(i);
    if (!e.has(n))
      return e.add(n), !0;
  });
}
function Ph(s) {
  var t = s.reduce(function(e, i) {
    var n = e[i.name];
    return e[i.name] = n ? Object.assign({}, n, i, {
      options: Object.assign({}, n.options, i.options),
      data: Object.assign({}, n.data, i.data)
    }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var Qo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Bh = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Jo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function tr() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Ws(s) {
  s === void 0 && (s = {});
  var t = s, e = t.defaultModifiers, i = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? Jo : n;
  return function(a, l, p) {
    p === void 0 && (p = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Jo, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], _ = !1, m = {
      state: u,
      setOptions: function(C) {
        var y = typeof C == "function" ? C(u.options) : C;
        v(), u.options = Object.assign({}, o, u.options, y), u.scrollParents = {
          reference: Te(a) ? Ci(a) : a.contextElement ? Ci(a.contextElement) : [],
          popper: Ci(l)
        };
        var E = $h(Ph([].concat(i, u.options.modifiers)));
        if (u.orderedModifiers = E.filter(function(O) {
          return O.enabled;
        }), {}.NODE_ENV !== "production") {
          var T = Rh([].concat(E, u.options.modifiers), function(O) {
            var M = O.name;
            return M;
          });
          if (Nh(T), vt(u.options.placement) === Ii) {
            var A = u.orderedModifiers.find(function(O) {
              var M = O.name;
              return M === "flip";
            });
            A || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = Tt(l), S = w.marginTop, k = w.marginRight, x = w.marginBottom, $ = w.marginLeft;
          [S, k, x, $].some(function(O) {
            return parseFloat(O);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!_) {
          var C = u.elements, y = C.reference, E = C.popper;
          if (!tr(y, E)) {
            ({}).NODE_ENV !== "production" && console.error(Qo);
            return;
          }
          u.rects = {
            reference: Ih(y, Di(E), u.options.strategy === "fixed"),
            popper: To(E)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
            return u.modifiersData[O.name] = Object.assign({}, O.data);
          });
          for (var T = 0, A = 0; A < u.orderedModifiers.length; A++) {
            if ({}.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Bh);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, A = -1;
              continue;
            }
            var w = u.orderedModifiers[A], S = w.fn, k = w.options, x = k === void 0 ? {} : k, $ = w.name;
            typeof S == "function" && (u = S({
              state: u,
              options: x,
              name: $,
              instance: m
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Lh(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(u);
        });
      }),
      destroy: function() {
        v(), _ = !0;
      }
    };
    if (!tr(a, l))
      return {}.NODE_ENV !== "production" && console.error(Qo), m;
    m.setOptions(p).then(function(b) {
      !_ && p.onFirstUpdate && p.onFirstUpdate(b);
    });
    function g() {
      u.orderedModifiers.forEach(function(b) {
        var C = b.name, y = b.options, E = y === void 0 ? {} : y, T = b.effect;
        if (typeof T == "function") {
          var A = T({
            state: u,
            name: C,
            instance: m,
            options: E
          }), w = function() {
          };
          f.push(A || w);
        }
      });
    }
    function v() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return m;
  };
}
var Hh = /* @__PURE__ */ Ws(), Wh = [Ao, ko, Co, vo], Vh = /* @__PURE__ */ Ws({
  defaultModifiers: Wh
}), Fh = [Ao, ko, Co, vo, Ll, Dl, Ml, Ol, $l], Ee = /* @__PURE__ */ Ws({
  defaultModifiers: Fh
});
const Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: vl,
  afterRead: ml,
  afterWrite: Cl,
  applyStyles: vo,
  arrow: Ol,
  auto: Ii,
  basePlacements: qe,
  beforeMain: gl,
  beforeRead: _l,
  beforeWrite: Tl,
  bottom: ht,
  clippingParents: ul,
  computeStyles: Co,
  createPopper: Ee,
  createPopperBase: Hh,
  createPopperLite: Vh,
  detectOverflow: ze,
  end: Fe,
  eventListeners: Ao,
  flip: Dl,
  hide: $l,
  left: J,
  main: bl,
  modifierPhases: Ns,
  offset: Ll,
  placements: go,
  popper: Ie,
  popperGenerator: Ws,
  popperOffsets: ko,
  preventOverflow: Ml,
  read: fl,
  reference: pl,
  right: dt,
  start: ve,
  top: Q,
  variationPlacements: to,
  viewport: mo,
  write: El
}, Symbol.toStringTag, { value: "Module" }));
function tn(s) {
  return s === "true" ? !0 : s === "false" ? !1 : s === Number(s).toString() ? Number(s) : s === "" || s === "null" ? null : s;
}
function en(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const c = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-te-${en(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-te-${en(t)}`);
  },
  getDataAttributes(s) {
    if (!s)
      return {};
    const t = {};
    return Object.keys(s.dataset).filter((e) => e.startsWith("te")).forEach((e) => {
      if (e.startsWith("teClass"))
        return;
      let i = e.replace(/^te/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = tn(s.dataset[e]);
    }), t;
  },
  getDataClassAttributes(s) {
    if (!s)
      return {};
    const t = {
      ...s.dataset
    };
    return Object.keys(t).filter((e) => e.startsWith("teClass")).forEach((e) => {
      let i = e.replace(/^teClass/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = tn(t[e]);
    }), t;
  },
  getDataAttribute(s, t) {
    return tn(
      s.getAttribute(`data-te-${en(t)}`)
    );
  },
  offset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(s) {
    return {
      top: s.offsetTop,
      left: s.offsetLeft
    };
  },
  style(s, t) {
    Object.assign(s.style, t);
  },
  toggleClass(s, t) {
    s && sn(t).forEach((e) => {
      s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e);
    });
  },
  addClass(s, t) {
    sn(t).forEach(
      (e) => !s.classList.contains(e) && s.classList.add(e)
    );
  },
  addStyle(s, t) {
    Object.keys(t).forEach((e) => {
      s.style[e] = t[e];
    });
  },
  removeClass(s, t) {
    sn(t).forEach(
      (e) => s.classList.contains(e) && s.classList.remove(e)
    );
  },
  hasClass(s, t) {
    return s.classList.contains(t);
  },
  maxOffset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function sn(s) {
  return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : !1;
}
const Yh = 3, d = {
  closest(s, t) {
    return s.closest(t);
  },
  matches(s, t) {
    return s.matches(t);
  },
  find(s, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, s)
    );
  },
  findOne(s, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, s);
  },
  children(s, t) {
    return [].concat(...s.children).filter((i) => i.matches(t));
  },
  parents(s, t) {
    const e = [];
    let i = s.parentNode;
    for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== Yh; )
      this.matches(i, t) && e.push(i), i = i.parentNode;
    return e;
  },
  prev(s, t) {
    let e = s.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  next(s, t) {
    let e = s.nextElementSibling;
    for (; e; ) {
      if (this.matches(e, t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(s) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
    return this.find(t, s).filter(
      (e) => !me(e) && Lt(e)
    );
  }
}, nn = "dropdown", jh = "te.dropdown", Ce = `.${jh}`, Oo = ".data-api", vs = "Escape", er = "Space", ir = "Tab", so = "ArrowUp", Ts = "ArrowDown", Kh = 2, zh = new RegExp(
  `${so}|${Ts}|${vs}`
), Uh = `hide${Ce}`, Xh = `hidden${Ce}`, Gh = `show${Ce}`, qh = `shown${Ce}`, Zh = `click${Ce}${Oo}`, sr = `keydown${Ce}${Oo}`, Qh = `keyup${Ce}${Oo}`, Vt = "show", Jh = "dropup", td = "dropend", ed = "dropstart", id = "[data-te-navbar-ref]", Ki = "[data-te-dropdown-toggle-ref]", on = "[data-te-dropdown-menu-ref]", sd = "[data-te-navbar-nav-ref]", nd = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)", od = F() ? "top-end" : "top-start", rd = F() ? "top-start" : "top-end", ad = F() ? "bottom-end" : "bottom-start", ld = F() ? "bottom-start" : "bottom-end", cd = F() ? "left-start" : "right-start", hd = F() ? "right-start" : "left-start", dd = [{ opacity: "0" }, { opacity: "1" }], ud = [{ opacity: "1" }, { opacity: "0" }], zi = {
  duration: 550,
  iterations: 1,
  easing: "ease",
  fill: "both"
}, pd = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0,
  dropdownAnimation: "on"
}, _d = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string"
};
class It extends Et {
  constructor(t, e) {
    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const i = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !i, this._didInit = !1, this._init();
  }
  // Getters
  static get Default() {
    return pd;
  }
  static get DefaultType() {
    return _d;
  }
  static get NAME() {
    return nn;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (me(this._element) || this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    if (h.trigger(
      this._element,
      Gh,
      t
    ).defaultPrevented)
      return;
    const i = It.getParentFromElement(this._element);
    this._inNavbar ? c.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(sd) && [].concat(...document.body.children).forEach((n) => h.on(n, "mouseover", Ms)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.setAttribute(`data-te-dropdown-${Vt}`, ""), this._animationCanPlay && this._menu.animate(dd, zi), this._element.setAttribute(`data-te-dropdown-${Vt}`, ""), setTimeout(
      () => {
        h.trigger(this._element, qh, t);
      },
      this._animationCanPlay ? zi.duration : 0
    );
  }
  hide() {
    if (me(this._element) || !this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (h.on(
      document,
      sr,
      Ki,
      It.dataApiKeydownHandler
    ), h.on(
      document,
      sr,
      on,
      It.dataApiKeydownHandler
    ), h.on(document, Zh, It.clearMenus), h.on(document, Qh, It.clearMenus), this._didInit = !0);
  }
  _completeHide(t) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || h.trigger(
      this._element,
      Uh,
      t
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((i) => h.off(i, "mouseover", Ms)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(
      ud,
      zi
    )), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Vt}`), this._element.removeAttribute(`data-te-dropdown-${Vt}`), this._element.setAttribute("aria-expanded", "false"), c.removeDataAttribute(this._menu, "popper"), h.trigger(this._element, Xh, t);
      },
      this._animationCanPlay ? zi.duration : 0
    ));
  }
  _getConfig(t) {
    if (t = {
      ...this.constructor.Default,
      ...c.getDataAttributes(this._element),
      ...t
    }, L(nn, t, this.constructor.DefaultType), typeof t.reference == "object" && !Ve(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${nn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof Nl > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    this._config.reference === "parent" ? e = t : Ve(this._config.reference) ? e = Jt(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const i = this._getPopperConfig(), n = i.modifiers.find(
      (o) => o.name === "applyStyles" && o.enabled === !1
    );
    this._popper = Ee(
      e,
      this._menu,
      i
    ), n && c.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.dataset[`teDropdown${Vt.charAt(0).toUpperCase() + Vt.slice(1)}`] === "";
  }
  _getMenuElement() {
    return d.next(this._element, on)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.dataset.teDropdownPosition === td)
      return cd;
    if (t.dataset.teDropdownPosition === ed)
      return hd;
    const e = getComputedStyle(this._menu).getPropertyValue("--te-position").trim() === "end";
    return t.dataset.teDropdownPosition === Jh ? e ? rd : od : e ? ld : ad;
  }
  _detectNavbar() {
    return this._element.closest(id) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (t.modifiers = [
      {
        name: "applyStyles",
        enabled: !1
      }
    ]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({ key: t, target: e }) {
    const i = d.find(
      nd,
      this._menu
    ).filter(Lt);
    i.length && nl(
      i,
      e,
      t === Ts,
      !i.includes(e)
    ).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = It.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === Kh || t.type === "keyup" && t.key !== ir))
      return;
    const e = d.find(Ki);
    for (let i = 0, n = e.length; i < n; i++) {
      const o = It.getInstance(e[i]);
      if (!o || o._config.autoClose === !1 || !o._isShown())
        continue;
      const r = {
        relatedTarget: o._element
      };
      if (t) {
        const a = t.composedPath(), l = a.includes(o._menu);
        if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === ir || /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        t.type === "click" && (r.clickEvent = t);
      }
      o._completeHide(r);
    }
  }
  static getParentFromElement(t) {
    return Qt(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (/input|textarea/i.test(t.target.tagName) ? t.key === er || t.key !== vs && (t.key !== Ts && t.key !== so || t.target.closest(on)) : !zh.test(t.key))
      return;
    const e = this.dataset[`teDropdown${Vt.charAt(0).toUpperCase() + Vt.slice(1)}`] === "";
    if (!e && t.key === vs || (t.preventDefault(), t.stopPropagation(), me(this)))
      return;
    const i = this.matches(Ki) ? this : d.prev(this, Ki)[0], n = It.getOrCreateInstance(i);
    if (t.key === vs) {
      n.hide();
      return;
    }
    if (t.key === so || t.key === Ts) {
      e || n.show(), n._selectMenuItem(t);
      return;
    }
    (!e || t.key === er) && It.clearMenus();
  }
}
const rn = "collapse", Rl = "te.collapse", Vs = `.${Rl}`, nr = {
  toggle: !0,
  parent: null
}, fd = {
  toggle: "boolean",
  parent: "(null|element)"
}, md = `show${Vs}`, gd = `shown${Vs}`, bd = `hide${Vs}`, vd = `hidden${Vs}`, an = "data-te-collapse-show", or = "data-te-collapse-collapsed", Ui = "data-te-collapse-collapsing", Td = "data-te-collapse-horizontal", Le = "data-te-collapse-item", rr = `:scope [${Le}] [${Le}]`, Ed = "width", Cd = "height", Ad = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", ar = "[data-te-collapse-init]", yd = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, wd = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class qt extends Et {
  constructor(t, e, i) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._triggerArray = [];
    const n = d.find(ar);
    for (let o = 0, r = n.length; o < r; o++) {
      const a = n[o], l = fo(a), p = d.find(l).filter(
        (u) => u === this._element
      );
      l !== null && p.length && (this._selector = l, this._triggerArray.push(a));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return nr;
  }
  static get NAME() {
    return rn;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], e;
    if (this._config.parent) {
      const u = d.find(
        rr,
        this._config.parent
      );
      t = d.find(
        Ad,
        this._config.parent
      ).filter((f) => !u.includes(f));
    }
    const i = d.findOne(this._selector);
    if (t.length) {
      const u = t.find((f) => i !== f);
      if (e = u ? qt.getInstance(u) : null, e && e._isTransitioning)
        return;
    }
    if (h.trigger(this._element, md).defaultPrevented)
      return;
    t.forEach((u) => {
      i !== u && qt.getOrCreateInstance(u, { toggle: !1 }).hide(), e || I.setData(u, Rl, null);
    });
    const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    c.removeClass(this._element, this._classes.visible), c.removeClass(this._element, this._classes.hidden), c.addClass(this._element, r), this._element.removeAttribute(Le), this._element.setAttribute(Ui, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, c.removeClass(this._element, this._classes.hidden), c.removeClass(this._element, r), c.addClass(this._element, this._classes.visible), this._element.removeAttribute(Ui), this._element.setAttribute(Le, ""), this._element.setAttribute(an, ""), this._element.style[o] = "", h.trigger(this._element, gd);
    }, p = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(a, this._element, !0), this._element.style[o] = `${this._element[p]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || h.trigger(this._element, bd).defaultPrevented)
      return;
    const e = this._getDimension(), i = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Ge(this._element), c.addClass(this._element, i), c.removeClass(this._element, this._classes.visible), c.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Ui, ""), this._element.removeAttribute(Le), this._element.removeAttribute(an);
    const n = this._triggerArray.length;
    for (let r = 0; r < n; r++) {
      const a = this._triggerArray[r], l = Qt(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, c.removeClass(this._element, i), c.addClass(this._element, this._classes.visible), c.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Ui), this._element.setAttribute(Le, ""), h.trigger(this._element, vd);
    };
    this._element.style[e] = "", this._queueCallback(o, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(an);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...nr,
      ...c.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = Jt(t.parent), L(rn, t, fd), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...yd,
      ...e,
      ...t
    }, L(rn, t, wd), t;
  }
  _getDimension() {
    return this._element.hasAttribute(Td) ? Ed : Cd;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = d.find(
      rr,
      this._config.parent
    );
    d.find(ar, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
      const i = Qt(e);
      i && this._addAriaAndCollapsedClass([e], this._isShown(i));
    });
  }
  _addAriaAndCollapsedClass(t, e) {
    t.length && t.forEach((i) => {
      e ? i.removeAttribute(or) : i.setAttribute(`${or}`, ""), i.setAttribute("aria-expanded", e);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = {};
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1);
      const i = qt.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    });
  }
}
const lr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cr = ".sticky-top";
class ki {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(
      this._element,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      lr,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      cr,
      "marginRight",
      (e) => e - t
    );
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, i) {
    const n = this.getWidth(), o = (r) => {
      if (r !== this._element && window.innerWidth > r.clientWidth + n)
        return;
      this._saveInitialAttribute(r, e);
      const a = window.getComputedStyle(r)[e];
      r.style[e] = `${i(
        Number.parseFloat(a)
      )}px`;
    };
    this._applyManipulationCallback(t, o);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(lr, "paddingRight"), this._resetElementAttributes(cr, "marginRight");
  }
  _saveInitialAttribute(t, e) {
    const i = t.style[e];
    i && c.setDataAttribute(t, e, i);
  }
  _resetElementAttributes(t, e) {
    const i = (n) => {
      const o = c.getDataAttribute(n, e);
      typeof o > "u" ? n.style.removeProperty(e) : (c.removeDataAttribute(n, e), n.style[e] = o);
    };
    this._applyManipulationCallback(t, i);
  }
  _applyManipulationCallback(t, e) {
    Ve(t) ? e(t) : d.find(t, this._element).forEach(e);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
}
const xd = {
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: !1,
  rootElement: "body",
  // give the choice to place backdrop under different elements
  clickCallback: null,
  backdropClasses: null
}, kd = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)",
  backdropClasses: "(array|null)"
}, Pl = "backdrop", hr = `mousedown.te.${Pl}`;
class So {
  constructor(t) {
    this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  show(t) {
    if (!this._config.isVisible) {
      fe(t);
      return;
    }
    this._append(), this._config.isAnimated && Ge(this._getElement());
    const e = this._config.backdropClasses || [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "fixed",
      "top-0",
      "left-0",
      "z-[1040]",
      "bg-black",
      "w-screen",
      "h-screen"
    ];
    c.removeClass(this._getElement(), "opacity-0"), c.addClass(this._getElement(), e), this._element.setAttribute("data-te-backdrop-show", ""), this._emulateAnimation(() => {
      fe(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      fe(t);
      return;
    }
    this._element.removeAttribute("data-te-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(() => {
      this.dispose(), fe(t);
    });
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add("opacity-50"), this._element = t;
    }
    return this._element;
  }
  _getConfig(t) {
    return t = {
      ...xd,
      ...typeof t == "object" ? t : {}
    }, t.rootElement = Jt(t.rootElement), L(Pl, t, kd), t;
  }
  _append() {
    this._isAppended || (this._config.rootElement.append(this._getElement()), h.on(this._getElement(), hr, () => {
      fe(this._config.clickCallback);
    }), this._isAppended = !0);
  }
  dispose() {
    this._isAppended && (h.off(this._element, hr), this._element.remove(), this._isAppended = !1);
  }
  _emulateAnimation(t) {
    sl(
      t,
      this._getElement(),
      this._config.isAnimated
    );
  }
}
class $i {
  constructor(t, e = {}, i) {
    this._element = t, this._toggler = i, this._event = e.event || "blur", this._condition = e.condition || (() => !0), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || !1, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n) => {
      this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
    };
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap();
  }
  disable() {
    this._focusableElements.forEach((t) => {
      t.removeEventListener(this._event, this.handler);
    }), this._toggler && this._toggler.focus();
  }
  update() {
    this._setElements(), this._setFocusTrap();
  }
  _init() {
    const t = (e) => {
      !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
    };
    window.addEventListener("keydown", t);
  }
  _filterVisible(t) {
    return t.filter((e) => {
      if (!Lt(e))
        return !1;
      const i = d.parents(e, "*");
      for (let n = 0; n < i.length; n++) {
        const o = window.getComputedStyle(i[n]);
        if (o && (o.display === "none" || o.visibility === "hidden"))
          return !1;
      }
      return !0;
    });
  }
  _setElements() {
    this._focusableElements = d.focusableChildren(this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
  }
  _setFocusTrap() {
    this._focusableElements.forEach((t, e) => {
      e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
    });
  }
}
const dr = "offcanvas", Od = "te.offcanvas", Ze = `.${Od}`, Sd = ".data-api", Id = `load${Ze}${Sd}`, Dd = "Escape", ur = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, $d = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
}, pr = "show", Ld = "[data-te-offcanvas-init][data-te-offcanvas-show]", Md = `show${Ze}`, Nd = `shown${Ze}`, Rd = `hide${Ze}`, Pd = `hidden${Ze}`, Bd = `keydown.dismiss${Ze}`;
class no extends Et {
  constructor(t, e) {
    super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = !1, this._init();
  }
  // Getters
  static get NAME() {
    return dr;
  }
  static get Default() {
    return ur;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || h.trigger(this._element, Md, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ki().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-te-offcanvas-${pr}`, "");
    const i = () => {
      this._config.scroll || this._focustrap.trap(), h.trigger(this._element, Nd, { relatedTarget: t });
    };
    this._queueCallback(i, this._element, !0);
  }
  hide() {
    if (!this._isShown || h.trigger(this._element, Rd).defaultPrevented)
      return;
    this._focustrap.disable(), this._element.blur(), this._isShown = !1, this._element.removeAttribute(`data-te-offcanvas-${pr}`), this._backdrop.hide();
    const e = () => {
      this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new ki().reset(), h.trigger(this._element, Pd);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (h.on(
      window,
      Id,
      () => d.find(Ld).forEach(
        (t) => no.getOrCreateInstance(t).show()
      )
    ), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...ur,
      ...c.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, L(dr, t, $d), t;
  }
  _initializeBackDrop() {
    return new So({
      isVisible: this._config.backdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }
  _initializeFocusTrap() {
    return new $i(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _addEventListeners() {
    h.on(this._element, Bd, (t) => {
      this._config.keyboard && t.key === Dd && this.hide();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = no.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const ln = "alert", Hd = "te.alert", Bl = `.${Hd}`, Wd = `close${Bl}`, Vd = `closed${Bl}`, si = "data-te-alert-show", Fd = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, _r = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, Yd = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, jd = {
  fadeIn: "string",
  fadeOut: "string"
};
class Hl extends Et {
  constructor(t, e, i) {
    super(t), this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i);
  }
  // Getters
  static get DefaultType() {
    return Fd;
  }
  static get Default() {
    return _r;
  }
  static get NAME() {
    return ln;
  }
  // Public
  close() {
    if (h.trigger(this._element, Wd).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, c.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(si), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(si) && (c.removeClass(this._element, "hidden"), c.addClass(this._element, "block"), Lt(this._element))) {
        const t = (e) => {
          c.removeClass(this._element, "hidden"), c.addClass(this._element, "block"), h.off(e.target, "animationend", t);
        };
        this._element.setAttribute(si, ""), h.on(this._element, "animationend", t);
      }
      this._config.animation && (c.removeClass(this._element, this._classes.fadeOut), c.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(si)) {
      this._element.removeAttribute(si);
      const t = (e) => {
        c.addClass(this._element, "hidden"), c.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), h.off(e.target, "animationend", t);
      };
      h.on(this._element, "animationend", t), c.removeClass(this._element, this._classes.fadeIn), c.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _getConfig(t) {
    return t = {
      ..._r,
      ...c.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, L(ln, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Yd,
      ...e,
      ...t
    }, L(ln, t, jd), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), h.trigger(this._element, Vd), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Hl.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const cn = "carousel", Kd = "te.carousel", pt = `.${Kd}`, Wl = ".data-api", zd = "ArrowLeft", Ud = "ArrowRight", Xd = 500, Gd = 40, fr = {
  interval: 5e3,
  keyboard: !0,
  ride: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
}, qd = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  ride: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
}, Zd = {
  pointer: "touch-pan-y",
  block: "!block",
  visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
  invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-[600ms] data-[te-carousel-fade]:delay-600",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full"
}, Qd = {
  pointer: "string",
  block: "string",
  visible: "string",
  invisible: "string",
  slideRight: "string",
  slideLeft: "string"
}, ae = "next", le = "prev", pe = "left", ui = "right", Jd = {
  [zd]: ui,
  [Ud]: pe
}, tu = `slide${pt}`, hn = `slid${pt}`, eu = `keydown${pt}`, iu = `mouseenter${pt}`, su = `mouseleave${pt}`, nu = `touchstart${pt}`, ou = `touchmove${pt}`, ru = `touchend${pt}`, au = `pointerdown${pt}`, lu = `pointerup${pt}`, cu = `dragstart${pt}`, hu = `load${pt}${Wl}`, du = `click${pt}${Wl}`, mr = "data-te-carousel-init", ce = "data-te-carousel-active", uu = "data-te-carousel-item-end", dn = "data-te-carousel-item-start", pu = "data-te-carousel-item-next", _u = "data-te-carousel-item-prev", fu = "data-te-carousel-pointer-event", mu = "[data-te-carousel-init]", Vl = "[data-te-carousel-active]", Io = "[data-te-carousel-item]", ye = `${Vl}${Io}`, gu = `${Io} img`, bu = "[data-te-carousel-item-next], [data-te-carousel-item-prev]", vu = "[data-te-carousel-indicators]", Tu = "[data-te-target]", Eu = "[data-te-slide], [data-te-slide-to]", Cu = "touch", Au = "pen";
class Ut extends Et {
  constructor(t, e, i) {
    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._indicatorsElement = d.findOne(
      vu,
      this._element
    ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = !1, this._init(), this._config.ride === "carousel" && this.cycle();
  }
  // Getters
  static get Default() {
    return fr;
  }
  static get NAME() {
    return cn;
  }
  // Public
  next() {
    this._slide(ae);
  }
  nextWhenVisible() {
    !document.hidden && Lt(this._element) && this.next();
  }
  prev() {
    this._slide(le);
  }
  pause(t) {
    t || (this._isPaused = !0), d.findOne(bu, this._element) && (Ja(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
  }
  cycle(t) {
    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
      (document.visibilityState ? this.nextWhenVisible : this.next).bind(
        this
      ),
      this._config.interval
    ));
  }
  to(t) {
    this._activeElement = d.findOne(
      ye,
      this._element
    );
    const e = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      h.one(this._element, hn, () => this.to(t));
      return;
    }
    if (e === t) {
      this.pause(), this.cycle();
      return;
    }
    const i = t > e ? ae : le;
    this._slide(i, this._items[t]);
  }
  // Private
  _init() {
    this._didInit || (h.on(
      document,
      du,
      Eu,
      Ut.dataApiClickHandler
    ), h.on(window, hu, () => {
      const t = d.find(mu);
      for (let e = 0, i = t.length; e < i; e++)
        Ut.carouselInterface(
          t[e],
          Ut.getInstance(t[e])
        );
    }), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...fr,
      ...c.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, L(cn, t, qd), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Zd,
      ...e,
      ...t
    }, L(cn, t, Qd), t;
  }
  _enableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        h.one(this._element, hn, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  _applyInitialClasses() {
    const t = d.findOne(
      ye,
      this._element
    );
    t.classList.add(
      this._classes.block,
      ...this._classes.visible.split(" ")
    ), this._setActiveIndicatorElement(t);
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= Gd)
      return;
    const e = t / this.touchDeltaX;
    this.touchDeltaX = 0, e && this._slide(e > 0 ? ui : pe);
  }
  _setActiveElementClass() {
    this._activeElement = d.findOne(
      ye,
      this._element
    ), c.addClass(this._activeElement, "hidden");
  }
  _addEventListeners() {
    this._config.keyboard && h.on(
      this._element,
      eu,
      (t) => this._keydown(t)
    ), this._config.pause === "hover" && (h.on(
      this._element,
      iu,
      (t) => this.pause(t)
    ), h.on(
      this._element,
      su,
      (t) => this._enableCycle(t)
    )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
  }
  _addTouchEventListeners() {
    const t = (o) => this._pointerEvent && (o.pointerType === Au || o.pointerType === Cu), e = (o) => {
      t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
    }, i = (o) => {
      this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
    }, n = (o) => {
      t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
        (r) => this._enableCycle(r),
        Xd + this._config.interval
      ));
    };
    d.find(gu, this._element).forEach(
      (o) => {
        h.on(
          o,
          cu,
          (r) => r.preventDefault()
        );
      }
    ), this._pointerEvent ? (h.on(
      this._element,
      au,
      (o) => e(o)
    ), h.on(this._element, lu, (o) => n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${fu}`, "")) : (h.on(this._element, nu, (o) => e(o)), h.on(this._element, ou, (o) => i(o)), h.on(this._element, ru, (o) => n(o)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = Jd[t.key];
    e && (t.preventDefault(), this._slide(e));
  }
  _getItemIndex(t) {
    return this._items = t && t.parentNode ? d.find(Io, t.parentNode) : [], this._items.indexOf(t);
  }
  _getItemByOrder(t, e) {
    const i = t === ae;
    return nl(
      this._items,
      e,
      i,
      this._config.wrap
    );
  }
  _triggerSlideEvent(t, e) {
    const i = this._getItemIndex(t), n = this._getItemIndex(
      d.findOne(ye, this._element)
    );
    return h.trigger(this._element, tu, {
      relatedTarget: t,
      direction: e,
      from: n,
      to: i
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const e = d.findOne(
        Vl,
        this._indicatorsElement
      );
      e.removeAttribute(ce), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
      const i = d.find(
        Tu,
        this._indicatorsElement
      );
      for (let n = 0; n < i.length; n++)
        if (Number.parseInt(
          i[n].getAttribute("data-te-slide-to"),
          10
        ) === this._getItemIndex(t)) {
          i[n].setAttribute(`${ce}`, ""), i[n].setAttribute("aria-current", "true"), i[n].classList.add("!opacity-100");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || d.findOne(ye, this._element);
    if (!t)
      return;
    const e = Number.parseInt(
      t.getAttribute("data-te-interval"),
      10
    );
    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
  }
  _slide(t, e) {
    const i = this._directionToOrder(t), n = d.findOne(
      ye,
      this._element
    ), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), a = this._getItemIndex(r), l = !!this._interval, p = i === ae, u = p ? dn : uu, f = p ? pu : _u, _ = this._orderToDirection(i), m = u === dn ? this._classes.slideLeft : this._classes.slideRight, g = u !== dn ? this._classes.slideLeft : this._classes.slideRight;
    if (r && r.hasAttribute(ce)) {
      this._isSliding = !1;
      return;
    }
    if (this._isSliding || this._triggerSlideEvent(r, _).defaultPrevented || !n || !r)
      return;
    this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
    const b = () => {
      h.trigger(this._element, hn, {
        relatedTarget: r,
        direction: _,
        from: o,
        to: a
      });
    };
    if (this._element.hasAttribute(mr)) {
      r.setAttribute(`${f}`, ""), r.classList.add(this._classes.block, g), Ge(r), n.setAttribute(`${u}`, ""), n.classList.add(
        m,
        ...this._classes.invisible.split(" ")
      ), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${u}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(
        this._classes.slideRight,
        this._classes.slideLeft
      );
      const C = () => {
        r.removeAttribute(u), r.removeAttribute(f), r.setAttribute(`${ce}`, ""), n.removeAttribute(ce), n.classList.remove(
          m,
          ...this._classes.invisible.split(" "),
          this._classes.block
        ), n.removeAttribute(f), n.removeAttribute(u), this._isSliding = !1, setTimeout(b, 0);
      };
      this._queueCallback(C, n, !0);
    } else
      n.removeAttribute(ce), n.classList.remove(this._classes.block), r.setAttribute(`${ce}`, ""), r.classList.add(this._classes.block), this._isSliding = !1, b();
    l && this.cycle();
  }
  _directionToOrder(t) {
    return [ui, pe].includes(t) ? F() ? t === pe ? le : ae : t === pe ? ae : le : t;
  }
  _orderToDirection(t) {
    return [ae, le].includes(t) ? F() ? t === le ? pe : ui : t === le ? ui : pe : t;
  }
  // Static
  static carouselInterface(t, e) {
    const i = Ut.getOrCreateInstance(t, e);
    let { _config: n } = i;
    typeof e == "object" && (n = {
      ...n,
      ...e
    });
    const o = typeof e == "string" ? e : e.slide;
    if (typeof e == "number") {
      i.to(e);
      return;
    }
    if (typeof o == "string") {
      if (typeof i[o] > "u")
        throw new TypeError(`No method named "${o}"`);
      i[o]();
    } else
      n.interval && n.ride === !0 && i.pause();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      Ut.carouselInterface(this, t);
    });
  }
  static dataApiClickHandler(t) {
    const e = Qt(this);
    if (!e || !e.hasAttribute(mr))
      return;
    const i = {
      ...c.getDataAttributes(e),
      ...c.getDataAttributes(this)
    }, n = this.getAttribute("data-te-slide-to");
    n && (i.interval = !1), Ut.carouselInterface(e, i), n && Ut.getInstance(e).to(n), t.preventDefault();
  }
}
const un = "modal", yu = "te.modal", Ct = `.${yu}`, gr = "Escape", br = {
  backdrop: !0,
  keyboard: !0,
  focus: !0
}, wu = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
}, xu = {
  show: "transform-none",
  static: "scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out"
}, ku = {
  show: "string",
  static: "string",
  staticProperties: "string"
}, Ou = `hide${Ct}`, Su = `hidePrevented${Ct}`, Iu = `hidden${Ct}`, Du = `show${Ct}`, $u = `shown${Ct}`, vr = `resize${Ct}`, Tr = `click.dismiss${Ct}`, Er = `keydown.dismiss${Ct}`, Lu = `mouseup.dismiss${Ct}`, Cr = `mousedown.dismiss${Ct}`, Ar = "data-te-modal-open", yr = "data-te-open", ni = "[data-te-modal-dialog-ref]", Mu = "[data-te-modal-body-ref]";
class Fl extends Et {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._dialog = d.findOne(ni, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ki();
  }
  // Getters
  static get Default() {
    return br;
  }
  static get NAME() {
    return un;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || h.trigger(this._element, Du, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.setAttribute(Ar, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), h.on(this._dialog, Cr, () => {
      h.one(this._element, Lu, (i) => {
        i.target === this._element && (this._ignoreBackdropClick = !0);
      });
    }), this._showElement(t), this._showBackdrop());
  }
  hide() {
    if (!this._isShown || this._isTransitioning || h.trigger(this._element, Ou).defaultPrevented)
      return;
    this._isShown = !1;
    const e = this._isAnimated();
    e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), d.findOne(ni, this._element).classList.remove(this._classes.show), h.off(this._element, Tr), h.off(this._dialog, Cr), this._queueCallback(() => this._hideModal(), this._element, e), this._element.removeAttribute(yr);
  }
  dispose() {
    [window, this._dialog].forEach(
      (t) => h.off(t, Ct)
    ), this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new So({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new $i(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _getConfig(t) {
    return t = {
      ...br,
      ...c.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, L(un, t, wu), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...xu,
      ...e,
      ...t
    }, L(un, t, ku), t;
  }
  _showElement(t) {
    const e = this._isAnimated(), i = d.findOne(Mu, this._dialog);
    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${yr}`, "true"), this._element.scrollTop = 0;
    const n = d.findOne(ni, this._element);
    n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), i && (i.scrollTop = 0), e && Ge(this._element);
    const o = () => {
      this._config.focus && this._focustrap.trap(), this._isTransitioning = !1, h.trigger(this._element, $u, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, e);
  }
  _setEscapeEvent() {
    this._isShown ? h.on(document, Er, (t) => {
      this._config.keyboard && t.key === gr ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === gr && this._triggerBackdropTransition();
    }) : h.off(this._element, Er);
  }
  _setResizeEvent() {
    this._isShown ? h.on(window, vr, () => this._adjustDialog()) : h.off(window, vr);
  }
  _hideModal() {
    const t = d.findOne(ni, this._element);
    t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0"), setTimeout(() => {
      this._element.style.display = "none";
    }, 300), this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.removeAttribute(Ar), this._resetAdjustments(), this._scrollBar.reset(), h.trigger(this._element, Iu);
    });
  }
  _showBackdrop(t) {
    h.on(this._element, Tr, (e) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = !1;
        return;
      }
      e.target === e.currentTarget && (this._config.backdrop === !0 ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
    }), this._backdrop.show(t);
  }
  _isAnimated() {
    return !!d.findOne(ni, this._element);
  }
  _triggerBackdropTransition() {
    if (h.trigger(this._element, Su).defaultPrevented)
      return;
    const { classList: e, scrollHeight: i, style: n } = this._element, o = i > document.documentElement.clientHeight;
    !o && n.overflowY === "hidden" || e.contains(this._classes.static) || (o || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" ")), this._queueCallback(() => {
      e.remove(this._classes.static), setTimeout(() => {
        e.remove(...this._classes.staticProperties.split(" "));
      }, 300), o || this._queueCallback(() => {
        n.overflowY = "";
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
    (!i && t && !F() || i && !t && F()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !F() || !i && t && F()) && (this._element.style.paddingRight = `${e}px`);
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = Fl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
const Nu = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]), Ru = /^aria-[\w-]*$/i, Pu = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Bu = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Hu = (s, t) => {
  const e = s.nodeName.toLowerCase();
  if (t.includes(e))
    return Nu.has(e) ? !!(Pu.test(s.nodeValue) || Bu.test(s.nodeValue)) : !0;
  const i = t.filter(
    (n) => n instanceof RegExp
  );
  for (let n = 0, o = i.length; n < o; n++)
    if (i[n].test(e))
      return !0;
  return !1;
}, Wu = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Ru],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function wr(s, t, e) {
  if (!s.length)
    return s;
  if (e && typeof e == "function")
    return e(s);
  const n = new window.DOMParser().parseFromString(s, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
  for (let r = 0, a = o.length; r < a; r++) {
    const l = o[r], p = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(p)) {
      l.remove();
      continue;
    }
    const u = [].concat(...l.attributes), f = [].concat(
      t["*"] || [],
      t[p] || []
    );
    u.forEach((_) => {
      Hu(_, f) || l.removeAttribute(_.nodeName);
    });
  }
  return n.body.innerHTML;
}
const xr = "tooltip", Vu = "te.tooltip", yt = `.${Vu}`, Fu = "te-tooltip", Yu = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ju = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
}, Ku = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: F() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: F() ? "right" : "left"
}, zu = {
  animation: !0,
  template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: Wu,
  popperConfig: { hide: !0 }
}, Uu = {
  HIDE: `hide${yt}`,
  HIDDEN: `hidden${yt}`,
  SHOW: `show${yt}`,
  SHOWN: `shown${yt}`,
  INSERTED: `inserted${yt}`,
  CLICK: `click${yt}`,
  FOCUSIN: `focusin${yt}`,
  FOCUSOUT: `focusout${yt}`,
  MOUSEENTER: `mouseenter${yt}`,
  MOUSELEAVE: `mouseleave${yt}`
}, Xu = "fade", Gu = "modal", pn = "show", oi = "show", _n = "out", kr = ".tooltip-inner", Or = `.${Gu}`, Sr = "hide.te.modal", ri = "hover", fn = "focus", qu = "click", Zu = "manual";
class Qe extends Et {
  constructor(t, e) {
    if (typeof Nl > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
  }
  // Getters
  static get Default() {
    return zu;
  }
  static get NAME() {
    return xr;
  }
  static get Event() {
    return Uu;
  }
  static get DefaultType() {
    return ju;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (this._isEnabled)
      if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains(pn)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout), h.off(
      this._element.closest(Or),
      Sr,
      this._hideModalHandler
    ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled))
      return;
    const t = h.trigger(
      this._element,
      this.constructor.Event.SHOW
    ), e = tl(this._element), i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
    if (t.defaultPrevented || !i)
      return;
    this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(kr).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
    const n = this.getTipElement(), o = bt(this.constructor.NAME);
    n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(() => {
      this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
    }, 100);
    const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
    this._addAttachmentClass(a);
    const { container: l } = this._config;
    if (I.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), h.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ee(
      this._element,
      n,
      this._getPopperConfig(a)
    ), n.getAttribute("id").includes("tooltip"))
      switch (r) {
        case "bottom":
          n.classList.add("py-[0.4rem]");
          break;
        case "left":
          n.classList.add("px-[0.4rem]");
          break;
        case "right":
          n.classList.add("px-[0.4rem]");
          break;
        default:
          n.classList.add("py-[0.4rem]");
          break;
      }
    const u = this._resolvePossibleFunction(this._config.customClass);
    u && n.classList.add(...u.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((m) => {
      h.on(m, "mouseover", Ms);
    });
    const f = () => {
      const m = this._hoverState;
      this._hoverState = null, h.trigger(this._element, this.constructor.Event.SHOWN), m === _n && this._leave(null, this);
    }, _ = this.tip.classList.contains("transition-opacity");
    this._queueCallback(f, this.tip, _);
  }
  hide() {
    if (!this._popper)
      return;
    const t = this.getTipElement(), e = () => {
      this._isWithActiveTrigger() || (this._hoverState !== oi && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), h.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
    };
    if (h.trigger(
      this._element,
      this.constructor.Event.HIDE
    ).defaultPrevented)
      return;
    t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o) => h.off(o, "mouseover", Ms)), this._activeTrigger[qu] = !1, this._activeTrigger[fn] = !1, this._activeTrigger[ri] = !1;
    const n = this.tip.classList.contains("opacity-0");
    this._queueCallback(e, this.tip, n), this._hoverState = "";
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  // Protected
  isWithContent() {
    return !!this.getTitle();
  }
  getTipElement() {
    if (this.tip)
      return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const e = t.children[0];
    return this.setContent(e), e.classList.remove(Xu, pn), this.tip = e, this.tip;
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), kr);
  }
  _sanitizeAndSetContent(t, e, i) {
    const n = d.findOne(i, t);
    if (!e && n) {
      n.remove();
      return;
    }
    this.setElementContent(n, e);
  }
  setElementContent(t, e) {
    if (t !== null) {
      if (Ve(e)) {
        e = Jt(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
        return;
      }
      this._config.html ? (this._config.sanitize && (e = wr(
        e,
        this._config.allowList,
        this._config.sanitizeFn
      )), t.innerHTML = e) : t.textContent = e;
    }
  }
  getTitle() {
    const t = this._element.getAttribute("data-te-original-title") || this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  // Private
  _initializeOnDelegatedTarget(t, e) {
    return e || this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        },
        {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: (i) => this._handlePopperPlacementChange(i)
        }
      ],
      onFirstUpdate: (i) => {
        i.options.placement !== i.placement && this._handlePopperPlacementChange(i);
      }
    };
    return {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return Ku[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((e) => {
      if (e === "click")
        h.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (i) => this.toggle(i)
        );
      else if (e !== Zu) {
        const i = e === ri ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === ri ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        h.on(
          this._element,
          i,
          this._config.selector,
          (o) => this._enter(o)
        ), h.on(
          this._element,
          n,
          this._config.selector,
          (o) => this._leave(o)
        );
      }
    }), this._hideModalHandler = () => {
      this._element && this.hide();
    }, h.on(
      this._element.closest(Or),
      Sr,
      this._hideModalHandler
    ), this._config.selector ? this._config = {
      ...this._config,
      trigger: "manual",
      selector: ""
    } : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
      "data-te-original-title"
    );
    (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
  }
  _enter(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? fn : ri] = !0), e.getTipElement().classList.contains(pn) || e._hoverState === oi) {
      e._hoverState = oi;
      return;
    }
    if (clearTimeout(e._timeout), e._hoverState = oi, !e._config.delay || !e._config.delay.show) {
      e.show();
      return;
    }
    e._timeout = setTimeout(() => {
      e._hoverState === oi && e.show();
    }, e._config.delay.show);
  }
  _leave(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? fn : ri] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
      if (clearTimeout(e._timeout), e._hoverState = _n, !e._config.delay || !e._config.delay.hide) {
        e.hide();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === _n && e.hide();
      }, e._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger)
      if (this._activeTrigger[t])
        return !0;
    return !1;
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    return Object.keys(e).forEach((i) => {
      Yu.has(i) && delete e[i];
    }), t = {
      ...this.constructor.Default,
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t.container = t.container === !1 ? document.body : Jt(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), L(xr, t, this.constructor.DefaultType), t.sanitize && (t.template = wr(
      t.template,
      t.allowList,
      t.sanitizeFn
    )), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(), e = new RegExp(
      `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
      "g"
    ), i = t.getAttribute("class").match(e);
    i !== null && i.length > 0 && i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
  }
  _getBasicClassPrefix() {
    return Fu;
  }
  _handlePopperPlacementChange(t) {
    const { state: e } = t;
    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Qe.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Qu = "popover", Ju = "te.popover", wt = `.${Ju}`, tp = "te-popover", ep = {
  ...Qe.Default,
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
}, ip = {
  ...Qe.DefaultType,
  content: "(string|element|function)"
}, sp = {
  HIDE: `hide${wt}`,
  HIDDEN: `hidden${wt}`,
  SHOW: `show${wt}`,
  SHOWN: `shown${wt}`,
  INSERTED: `inserted${wt}`,
  CLICK: `click${wt}`,
  FOCUSIN: `focusin${wt}`,
  FOCUSOUT: `focusout${wt}`,
  MOUSEENTER: `mouseenter${wt}`,
  MOUSELEAVE: `mouseleave${wt}`
}, np = ".popover-header", op = ".popover-body";
class Yl extends Qe {
  // Getters
  static get Default() {
    return ep;
  }
  static get NAME() {
    return Qu;
  }
  static get Event() {
    return sp;
  }
  static get DefaultType() {
    return ip;
  }
  // Overrides
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), np), this._sanitizeAndSetContent(t, this._getContent(), op);
  }
  // Private
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return tp;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Yl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const mn = "scrollspy", rp = "te.scrollspy", Do = `.${rp}`, Ir = {
  offset: 10,
  method: "auto",
  target: ""
}, ap = {
  offset: "number",
  method: "string",
  target: "(string|element)"
}, lp = {
  active: "!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
}, cp = {
  active: "string"
}, hp = `activate${Do}`, dp = `scroll${Do}`, gn = "data-te-nav-link-active", jl = "[data-te-dropdown-item-ref]", up = "[data-te-nav-list-ref]", oo = "[data-te-nav-link-ref]", pp = "[data-te-nav-item-ref]", Kl = "[data-te-list-group-item-ref]", bn = `${oo}, ${Kl}, ${jl}`, _p = "[data-te-dropdown-ref]", fp = "[data-te-dropdown-toggle-ref]", mp = "maxOffset", Dr = "position";
class zl extends Et {
  constructor(t, e, i) {
    super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, h.on(this._scrollElement, dp, () => this._process()), this.refresh(), this._process();
  }
  // Getters
  static get Default() {
    return Ir;
  }
  static get NAME() {
    return mn;
  }
  // Public
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? mp : Dr, e = this._config.method === "auto" ? t : this._config.method, i = e === Dr ? this._getScrollTop() : 0;
    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), d.find(
      bn,
      this._config.target
    ).map((o) => {
      const r = fo(o), a = r ? d.findOne(r) : null;
      if (a) {
        const l = a.getBoundingClientRect();
        if (l.width || l.height)
          return [
            c[e](a).top + i,
            r
          ];
      }
      return null;
    }).filter((o) => o).sort((o, r) => o[0] - r[0]).forEach((o) => {
      this._offsets.push(o[0]), this._targets.push(o[1]);
    });
  }
  dispose() {
    h.off(this._scrollElement, Do), super.dispose();
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Ir,
      ...c.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, t.target = Jt(t.target) || document.documentElement, L(mn, t, ap), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...lp,
      ...e,
      ...t
    }, L(mn, t, cp), t;
  }
  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
    if (this._scrollHeight !== e && this.refresh(), t >= i) {
      const n = this._targets[this._targets.length - 1];
      this._activeTarget !== n && this._activate(n);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null, this._clear();
      return;
    }
    for (let n = this._offsets.length; n--; )
      this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
  }
  _activate(t) {
    this._activeTarget = t, this._clear();
    const e = bn.split(",").map(
      (n) => `${n}[data-te-target="${t}"],${n}[href="${t}"]`
    ), i = d.findOne(e.join(","), this._config.target);
    i.classList.add(...this._classes.active.split(" ")), i.setAttribute(gn, ""), i.getAttribute(jl) ? d.findOne(
      fp,
      i.closest(_p)
    ).classList.add(...this._classes.active.split(" ")) : d.parents(i, up).forEach(
      (n) => {
        d.prev(
          n,
          `${oo}, ${Kl}`
        ).forEach((o) => {
          o.classList.add(...this._classes.active.split(" ")), o.setAttribute(gn, "");
        }), d.prev(n, pp).forEach(
          (o) => {
            d.children(o, oo).forEach(
              (r) => r.classList.add(...this._classes.active.split(" "))
            );
          }
        );
      }
    ), h.trigger(this._scrollElement, hp, {
      relatedTarget: t
    });
  }
  _clear() {
    d.find(bn, this._config.target).filter(
      (t) => t.classList.contains(...this._classes.active.split(" "))
    ).forEach((t) => {
      t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(gn);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = zl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const $r = "tab", gp = "te.tab", Fs = `.${gp}`, bp = `hide${Fs}`, vp = `hidden${Fs}`, Tp = `show${Fs}`, Ep = `shown${Fs}`, Cp = "data-te-dropdown-menu-ref", De = "data-te-tab-active", Es = "data-te-nav-active", Ap = "[data-te-dropdown-ref]", yp = "[data-te-nav-ref]", Lr = `[${De}]`, wp = `[${Es}]`, Mr = ":scope > li > .active", xp = "[data-te-dropdown-toggle-ref]", kp = ":scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]", Op = {
  show: "opacity-100",
  hide: "opacity-0"
}, Sp = {
  show: "string",
  hide: "string"
};
class Ul extends Et {
  constructor(t, e) {
    super(t), this._classes = this._getClasses(e);
  }
  // Getters
  static get NAME() {
    return $r;
  }
  // Public
  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(Es) === "")
      return;
    let t;
    const e = Qt(this._element), i = this._element.closest(yp), n = d.findOne(
      wp,
      i
    );
    if (i) {
      const l = i.nodeName === "UL" || i.nodeName === "OL" ? Mr : Lr;
      t = d.find(l, i), t = t[t.length - 1];
    }
    const o = t ? h.trigger(t, bp, {
      relatedTarget: this._element
    }) : null;
    if (h.trigger(this._element, Tp, {
      relatedTarget: t
    }).defaultPrevented || o !== null && o.defaultPrevented)
      return;
    this._activate(
      this._element,
      i,
      null,
      n,
      this._element
    );
    const a = () => {
      h.trigger(t, vp, {
        relatedTarget: this._element
      }), h.trigger(this._element, Ep, {
        relatedTarget: t
      });
    };
    e ? this._activate(
      e,
      e.parentNode,
      a,
      n,
      this._element
    ) : a();
  }
  // Private
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Op,
      ...e,
      ...t
    }, L($r, t, Sp), t;
  }
  _activate(t, e, i, n, o) {
    const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? d.find(Mr, e) : d.children(e, Lr))[0], l = i && a && a.hasAttribute(De), p = () => this._transitionComplete(
      t,
      a,
      i,
      n,
      o
    );
    a && l ? (c.removeClass(a, this._classes.show), c.addClass(a, this._classes.hide), this._queueCallback(p, t, !0)) : p();
  }
  _transitionComplete(t, e, i, n, o) {
    if (e && n) {
      e.removeAttribute(De), n.removeAttribute(Es);
      const a = d.findOne(
        kp,
        e.parentNode
      );
      a && a.removeAttribute(De), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", !1);
    }
    t.setAttribute(De, ""), o.setAttribute(Es, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !0), Ge(t), t.classList.contains(this._classes.hide) && (c.removeClass(t, this._classes.hide), c.addClass(t, this._classes.show));
    let r = t.parentNode;
    if (r && r.nodeName === "LI" && (r = r.parentNode), r && r.hasAttribute(Cp)) {
      const a = t.closest(Ap);
      a && d.find(xp, a).forEach(
        (l) => l.setAttribute(De, "")
      ), t.setAttribute("aria-expanded", !0);
    }
    i && i();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ul.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const vn = "toast", Ip = "te.toast", ee = `.${Ip}`, Dp = `mouseover${ee}`, $p = `mouseout${ee}`, Lp = `focusin${ee}`, Mp = `focusout${ee}`, Np = `hide${ee}`, Rp = `hidden${ee}`, Pp = `show${ee}`, Bp = `shown${ee}`, Nr = "data-te-toast-hide", Tn = "data-te-toast-show", Xi = "data-te-toast-showing", Hp = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Rr = {
  animation: !0,
  autohide: !0,
  delay: 5e3
}, Wp = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, Vp = {
  fadeIn: "string",
  fadeOut: "string"
};
class Xl extends Et {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get DefaultType() {
    return Hp;
  }
  static get Default() {
    return Rr;
  }
  static get NAME() {
    return vn;
  }
  // Public
  show() {
    if (h.trigger(this._element, Pp).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && (c.removeClass(this._element, this._classes.fadeOut), c.addClass(this._element, this._classes.fadeIn));
    const e = () => {
      this._element.removeAttribute(Xi), h.trigger(this._element, Bp), this._maybeScheduleHide();
    };
    this._element.removeAttribute(Nr), Ge(this._element), this._element.setAttribute(Tn, ""), this._element.setAttribute(Xi, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this._element || this._element.dataset.teToastShow === void 0 || h.trigger(this._element, Np).defaultPrevented)
      return;
    const e = () => {
      let i = 0;
      this._config.animation && (i = 300, c.removeClass(this._element, this._classes.fadeIn), c.addClass(this._element, this._classes.fadeOut)), setTimeout(() => {
        this._element.setAttribute(Nr, ""), this._element.removeAttribute(Xi), this._element.removeAttribute(Tn), h.trigger(this._element, Rp);
      }, i);
    };
    this._element.setAttribute(Xi, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this._element.dataset.teToastShow !== void 0 && this._element.removeAttribute(Tn), super.dispose();
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Rr,
      ...c.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, L(vn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Wp,
      ...e,
      ...t
    }, L(vn, t, Vp), t;
  }
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout":
        this._hasMouseInteraction = e;
        break;
      case "focusin":
      case "focusout":
        this._hasKeyboardInteraction = e;
        break;
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const i = t.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    h.on(
      this._element,
      Dp,
      (t) => this._onInteraction(t, !0)
    ), h.on(
      this._element,
      $p,
      (t) => this._onInteraction(t, !1)
    ), h.on(
      this._element,
      Lp,
      (t) => this._onInteraction(t, !0)
    ), h.on(
      this._element,
      Mp,
      (t) => this._onInteraction(t, !1)
    );
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Xl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
(() => {
  var s = { 454: (i, n, o) => {
    o.d(n, { Z: () => l });
    var r = o(645), a = o.n(r)()(function(p) {
      return p[1];
    });
    a.push([i.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = a;
  }, 645: (i) => {
    i.exports = function(n) {
      var o = [];
      return o.toString = function() {
        return this.map(function(r) {
          var a = n(r);
          return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
        }).join("");
      }, o.i = function(r, a, l) {
        typeof r == "string" && (r = [[null, r, ""]]);
        var p = {};
        if (l)
          for (var u = 0; u < this.length; u++) {
            var f = this[u][0];
            f != null && (p[f] = !0);
          }
        for (var _ = 0; _ < r.length; _++) {
          var m = [].concat(r[_]);
          l && p[m[0]] || (a && (m[2] ? m[2] = "".concat(a, " and ").concat(m[2]) : m[2] = a), o.push(m));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var i = new window.CustomEvent("test", { cancelable: !0 });
          if (i.preventDefault(), i.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var n = function(r, a) {
            var l, p;
            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), p = l.preventDefault, l.preventDefault = function() {
              p.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, l;
          };
          n.prototype = window.Event.prototype, window.CustomEvent = n;
        }
    })();
  }, 379: (i, n, o) => {
    var r, a = function() {
      var E = {};
      return function(T) {
        if (E[T] === void 0) {
          var A = document.querySelector(T);
          if (window.HTMLIFrameElement && A instanceof window.HTMLIFrameElement)
            try {
              A = A.contentDocument.head;
            } catch {
              A = null;
            }
          E[T] = A;
        }
        return E[T];
      };
    }(), l = [];
    function p(E) {
      for (var T = -1, A = 0; A < l.length; A++)
        if (l[A].identifier === E) {
          T = A;
          break;
        }
      return T;
    }
    function u(E, T) {
      for (var A = {}, w = [], S = 0; S < E.length; S++) {
        var k = E[S], x = T.base ? k[0] + T.base : k[0], $ = A[x] || 0, O = "".concat(x, " ").concat($);
        A[x] = $ + 1;
        var M = p(O), P = { css: k[1], media: k[2], sourceMap: k[3] };
        M !== -1 ? (l[M].references++, l[M].updater(P)) : l.push({ identifier: O, updater: y(P, T), references: 1 }), w.push(O);
      }
      return w;
    }
    function f(E) {
      var T = document.createElement("style"), A = E.attributes || {};
      if (A.nonce === void 0) {
        var w = o.nc;
        w && (A.nonce = w);
      }
      if (Object.keys(A).forEach(function(k) {
        T.setAttribute(k, A[k]);
      }), typeof E.insert == "function")
        E.insert(T);
      else {
        var S = a(E.insert || "head");
        if (!S)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        S.appendChild(T);
      }
      return T;
    }
    var _, m = (_ = [], function(E, T) {
      return _[E] = T, _.filter(Boolean).join(`
`);
    });
    function g(E, T, A, w) {
      var S = A ? "" : w.media ? "@media ".concat(w.media, " {").concat(w.css, "}") : w.css;
      if (E.styleSheet)
        E.styleSheet.cssText = m(T, S);
      else {
        var k = document.createTextNode(S), x = E.childNodes;
        x[T] && E.removeChild(x[T]), x.length ? E.insertBefore(k, x[T]) : E.appendChild(k);
      }
    }
    function v(E, T, A) {
      var w = A.css, S = A.media, k = A.sourceMap;
      if (S ? E.setAttribute("media", S) : E.removeAttribute("media"), k && typeof btoa < "u" && (w += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k)))), " */")), E.styleSheet)
        E.styleSheet.cssText = w;
      else {
        for (; E.firstChild; )
          E.removeChild(E.firstChild);
        E.appendChild(document.createTextNode(w));
      }
    }
    var b = null, C = 0;
    function y(E, T) {
      var A, w, S;
      if (T.singleton) {
        var k = C++;
        A = b || (b = f(T)), w = g.bind(null, A, k, !1), S = g.bind(null, A, k, !0);
      } else
        A = f(T), w = v.bind(null, A, T), S = function() {
          (function(x) {
            if (x.parentNode === null)
              return !1;
            x.parentNode.removeChild(x);
          })(A);
        };
      return w(E), function(x) {
        if (x) {
          if (x.css === E.css && x.media === E.media && x.sourceMap === E.sourceMap)
            return;
          w(E = x);
        } else
          S();
      };
    }
    i.exports = function(E, T) {
      (T = T || {}).singleton || typeof T.singleton == "boolean" || (T.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
      var A = u(E = E || [], T);
      return function(w) {
        if (w = w || [], Object.prototype.toString.call(w) === "[object Array]") {
          for (var S = 0; S < A.length; S++) {
            var k = p(A[S]);
            l[k].references--;
          }
          for (var x = u(w, T), $ = 0; $ < A.length; $++) {
            var O = p(A[$]);
            l[O].references === 0 && (l[O].updater(), l.splice(O, 1));
          }
          A = x;
        }
      };
    };
  } }, t = {};
  function e(i) {
    var n = t[i];
    if (n !== void 0)
      return n.exports;
    var o = t[i] = { id: i, exports: {} };
    return s[i](o, o.exports, e), o.exports;
  }
  e.n = (i) => {
    var n = i && i.__esModule ? () => i.default : () => i;
    return e.d(n, { a: n }), n;
  }, e.d = (i, n) => {
    for (var o in n)
      e.o(n, o) && !e.o(i, o) && Object.defineProperty(i, o, { enumerable: !0, get: n[o] });
  }, e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n), (() => {
    var i = e(379), n = e.n(i), o = e(454);
    function r(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var p = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        l.dispatchEvent(p) || (l.value = "");
      }
    }
    function a(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    n()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
    }, !0), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
    }, !0);
  })();
})();
const En = "input", Gi = "te.input", Gl = "data-te-input-wrapper-init", ql = "data-te-input-notch-ref", Zl = "data-te-input-notch-leading-ref", Ql = "data-te-input-notch-middle-ref", Fp = "data-te-input-notch-trailing-ref", Yp = "data-te-input-helper-ref", jp = "data-te-input-placeholder-active", Ft = "data-te-input-state-active", Pr = "data-te-input-focused", Br = "data-te-input-form-counter", he = `[${Gl}] input`, de = `[${Gl}] textarea`, we = `[${ql}]`, Hr = `[${Zl}]`, Wr = `[${Ql}]`, Kp = `[${Yp}]`, zp = {
  inputFormWhite: !1
}, Up = {
  inputFormWhite: "(boolean)"
}, Xp = {
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0",
  notchLeadingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchLeadingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent",
  notchMiddleNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchMiddleWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0",
  notchTrailingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchTrailingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  counter: "text-right leading-[1.6]"
}, Gp = {
  notch: "string",
  notchLeading: "string",
  notchLeadingNormal: "string",
  notchLeadingWhite: "string",
  notchMiddle: "string",
  notchMiddleNormal: "string",
  notchMiddleWhite: "string",
  notchTrailing: "string",
  notchTrailingNormal: "string",
  notchTrailingWhite: "string",
  counter: "string"
};
class W {
  constructor(t, e, i) {
    this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(i), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = !1, this._helper = null, this._counter = !1, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (I.setData(t, Gi, this), this.init());
  }
  // Getters
  static get NAME() {
    return En;
  }
  get input() {
    return d.findOne("input", this._element) || d.findOne("textarea", this._element);
  }
  // Public
  init() {
    this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = !0);
  }
  update() {
    this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
  }
  forceActive() {
    this.input.setAttribute(Ft, ""), d.findOne(we, this.input.parentNode).setAttribute(
      Ft,
      ""
    );
  }
  forceInactive() {
    this.input.removeAttribute(Ft), d.findOne(
      we,
      this.input.parentNode
    ).removeAttribute(Ft);
  }
  dispose() {
    this._removeBorder(), I.removeData(this._element, Gi), this._element = null;
  }
  // Private
  _getConfig(t, e) {
    return t = {
      ...zp,
      ...c.getDataAttributes(e),
      ...typeof t == "object" ? t : {}
    }, L(En, t, Up), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Xp,
      ...e,
      ...t
    }, L(En, t, Gp), t;
  }
  _getLabelData() {
    this._label = d.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
  }
  _getHelper() {
    this._helper = d.findOne(Kp, this._element);
  }
  _getCounter() {
    this._counter = c.getDataAttribute(
      this.input,
      "inputShowcounter"
    ), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
  }
  _getEvents() {
    h.on(
      document,
      "focus",
      he,
      W.activate(new W())
    ), h.on(
      document,
      "input",
      he,
      W.activate(new W())
    ), h.on(
      document,
      "blur",
      he,
      W.deactivate(new W())
    ), h.on(
      document,
      "focus",
      de,
      W.activate(new W())
    ), h.on(
      document,
      "input",
      de,
      W.activate(new W())
    ), h.on(
      document,
      "blur",
      de,
      W.deactivate(new W())
    ), h.on(window, "shown.te.modal", (t) => {
      d.find(he, t.target).forEach(
        (e) => {
          const i = W.getInstance(e.parentNode);
          i && i.update();
        }
      ), d.find(de, t.target).forEach(
        (e) => {
          const i = W.getInstance(e.parentNode);
          i && i.update();
        }
      );
    }), h.on(window, "shown.te.dropdown", (t) => {
      const e = t.target.parentNode.querySelector(
        "[data-te-dropdown-menu-ref]"
      );
      e && (d.find(he, e).forEach(
        (i) => {
          const n = W.getInstance(i.parentNode);
          n && n.update();
        }
      ), d.find(de, e).forEach(
        (i) => {
          const n = W.getInstance(i.parentNode);
          n && n.update();
        }
      ));
    }), h.on(window, "shown.te.tab", (t) => {
      let e;
      t.target.href ? e = t.target.href.split("#")[1] : e = c.getDataAttribute(t.target, "target").split(
        "#"
      )[1];
      const i = d.findOne(`#${e}`);
      d.find(he, i).forEach((n) => {
        const o = W.getInstance(n.parentNode);
        o && o.update();
      }), d.find(de, i).forEach(
        (n) => {
          const o = W.getInstance(n.parentNode);
          o && o.update();
        }
      );
    }), h.on(window, "reset", (t) => {
      d.find(he, t.target).forEach(
        (e) => {
          const i = W.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      ), d.find(de, t.target).forEach(
        (e) => {
          const i = W.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      );
    }), h.on(window, "onautocomplete", (t) => {
      const e = W.getInstance(t.target.parentNode);
      !e || !t.cancelable || e.forceActive();
    });
  }
  _showCounter() {
    if (d.find(
      `[${Br}]`,
      this._element
    ).length > 0)
      return;
    this._counterElement = document.createElement("div"), c.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(Br, "");
    const e = this.input.value.length;
    this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
  }
  _bindCounter() {
    h.on(this.input, "input", () => {
      const t = this.input.value.length;
      this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
    });
  }
  _toggleDefaultDatePlaceholder(t = this.input) {
    if (!(t.getAttribute("type") === "date"))
      return;
    !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
  }
  _showPlaceholder() {
    this.input.setAttribute(jp, "");
  }
  _getNotchData() {
    this._notchMiddle = d.findOne(
      Wr,
      this._element
    ), this._notchLeading = d.findOne(
      Hr,
      this._element
    );
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _getLabelPositionInInputGroup() {
    if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-te-input-group-ref"))
      return;
    const t = this.input, e = d.prev(
      t,
      "[data-te-input-group-text-ref]"
    )[0];
    e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
  }
  _applyDivs() {
    const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, i = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = d.find(we, this._element), o = D("div");
    c.addClass(o, this._classes.notch), o.setAttribute(ql, ""), this._notchLeading = D("div"), c.addClass(
      this._notchLeading,
      `${this._classes.notchLeading} ${t}`
    ), this._notchLeading.setAttribute(Zl, ""), this._notchMiddle = D("div"), c.addClass(
      this._notchMiddle,
      `${this._classes.notchMiddle} ${e}`
    ), this._notchMiddle.setAttribute(Ql, ""), this._notchTrailing = D("div"), c.addClass(
      this._notchTrailing,
      `${this._classes.notchTrailing} ${i}`
    ), this._notchTrailing.setAttribute(Fp, ""), !(n.length >= 1) && (o.append(this._notchLeading), o.append(this._notchMiddle), o.append(this._notchTrailing), this._element.append(o));
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _removeBorder() {
    const t = d.findOne(we, this._element);
    t && t.remove();
  }
  _activate(t) {
    il(() => {
      this._getElements(t);
      const e = t ? t.target : this.input, i = d.findOne(
        we,
        this._element
      );
      t && t.type === "focus" && i.setAttribute(Pr, ""), e.value !== "" && (e.setAttribute(Ft, ""), i.setAttribute(Ft, "")), this._toggleDefaultDatePlaceholder(e);
    });
  }
  _getElements(t) {
    if (t && (this._element = t.target.parentNode, this._label = d.findOne("label", this._element)), t && this._label) {
      const e = this._labelWidth;
      this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = d.findOne(
        Wr,
        t.target.parentNode
      ), this._notchLeading = d.findOne(
        Hr,
        t.target.parentNode
      ), this._applyNotch());
    }
  }
  _deactivate(t) {
    const e = t ? t.target : this.input, i = d.findOne(
      we,
      e.parentNode
    );
    i.removeAttribute(Pr), e.value === "" && (e.removeAttribute(Ft), i.removeAttribute(Ft)), this._toggleDefaultDatePlaceholder(e);
  }
  static activate(t) {
    return function(e) {
      t._activate(e);
    };
  }
  static deactivate(t) {
    return function(e) {
      t._deactivate(e);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, Gi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new W(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, Gi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Vr = "animation", Cn = "te.animation", qp = {
  animation: "string",
  animationStart: "string",
  animationShowOnLoad: "boolean",
  onStart: "(null|function)",
  onEnd: "(null|function)",
  onHide: "(null|function)",
  onShow: "(null|function)",
  animationOnScroll: "(string)",
  animationWindowHeight: "number",
  animationOffset: "(number|string)",
  animationDelay: "(number|string)",
  animationReverse: "boolean",
  animationInterval: "(number|string)",
  animationRepeat: "(number|boolean)",
  animationReset: "boolean"
}, Zp = {
  animation: "fade",
  animationStart: "onClick",
  animationShowOnLoad: !0,
  onStart: null,
  onEnd: null,
  onHide: null,
  onShow: null,
  animationOnScroll: "once",
  animationWindowHeight: 0,
  animationOffset: 0,
  animationDelay: 0,
  animationReverse: !1,
  animationInterval: 0,
  animationRepeat: !1,
  animationReset: !1
};
class Jl {
  constructor(t, e) {
    this._element = t, this._animateElement = this._getAnimateElement(), this._isFirstScroll = !0, this._repeatAnimateOnScroll = !0, this._options = this._getConfig(e), this._element && (I.setData(t, Cn, this), this._init());
  }
  // Getters
  static get NAME() {
    return Vr;
  }
  // Public
  init() {
    this._init();
  }
  startAnimation() {
    this._startAnimation();
  }
  stopAnimation() {
    this._clearAnimationClass();
  }
  changeAnimationType(t) {
    this._options.animation = t;
  }
  dispose() {
    h.off(this._element, "mousedown"), h.off(this._animateElement, "animationend"), h.off(window, "scroll"), h.off(this._element, "mouseover"), I.removeData(this._element, Cn), this._element = null, this._animateElement = null, this._isFirstScroll = null, this._repeatAnimateOnScroll = null, this._options = null;
  }
  // Private
  _init() {
    switch (this._options.animationStart) {
      case "onHover":
        this._bindHoverEvents();
        break;
      case "onLoad":
        this._startAnimation();
        break;
      case "onScroll":
        this._bindScrollEvents();
        break;
      case "onClick":
        this._bindClickEvents();
        break;
    }
    this._bindTriggerOnEndCallback(), this._options.animationReset && this._bindResetAnimationAfterFinish();
  }
  _getAnimateElement() {
    const t = c.getDataAttribute(
      this._element,
      "animation-target"
    );
    return t ? d.find(t)[0] : this._element;
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._animateElement);
    return t = {
      ...Zp,
      ...e,
      ...t
    }, L(Vr, t, qp), t;
  }
  _animateOnScroll() {
    const t = c.offset(this._animateElement).top, e = this._animateElement.offsetHeight, i = window.innerHeight, n = t + this._options.animationOffset <= i && t + this._options.animationOffset + e >= 0, o = this._animateElement.style.visibility === "visible";
    switch (!0) {
      case (n && this._isFirstScroll):
        this._isFirstScroll = !1, this._startAnimation();
        break;
      case (!n && this._isFirstScroll):
        this._isFirstScroll = !1, this._hideAnimateElement();
        break;
      case (n && !o && this._repeatAnimateOnScroll):
        this._options.animationOnScroll !== "repeat" && (this._repeatAnimateOnScroll = !1), this._callback(this._options.onShow), this._showAnimateElement(), this._startAnimation();
        break;
      case (!n && o && this._repeatAnimateOnScroll):
        this._hideAnimateElement(), this._clearAnimationClass(), this._callback(this._options.onHide);
        break;
    }
  }
  _addAnimatedClass() {
    c.addClass(
      this._animateElement,
      `animate-${this._options.animation}`
    );
  }
  _clearAnimationClass() {
    this._animateElement.classList.remove(`animate-${this._options.animation}`);
  }
  _startAnimation() {
    this._callback(this._options.onStart), this._addAnimatedClass(), this._options.animationRepeat && !this._options.animationInterval && this._setAnimationRepeat(), this._options.animationReverse && this._setAnimationReverse(), this._options.animationDelay && this._setAnimationDelay(), this._options.animationDuration && this._setAnimationDuration(), this._options.animationInterval && this._setAnimationInterval();
  }
  _setAnimationReverse() {
    c.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : "2",
      animationDirection: "alternate"
    });
  }
  _setAnimationDuration() {
    c.style(this._animateElement, {
      animationDuration: `${this._options.animationDuration}ms`
    });
  }
  _setAnimationDelay() {
    c.style(this._animateElement, {
      animationDelay: `${this._options.animationDelay}ms`
    });
  }
  _setAnimationRepeat() {
    c.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : this._options.animationRepeat
    });
  }
  _setAnimationInterval() {
    h.on(this._animateElement, "click", () => {
      this._clearAnimationClass(), setTimeout(() => {
        this._addAnimatedClass();
      }, this._options.animationInterval);
    });
  }
  _hideAnimateElement() {
    c.style(this._animateElement, { visibility: "hidden" });
  }
  _showAnimateElement() {
    c.style(this._animateElement, { visibility: "visible" });
  }
  _bindResetAnimationAfterFinish() {
    h.on(this._animateElement, "animationend", () => {
      this._clearAnimationClass();
    });
  }
  _bindTriggerOnEndCallback() {
    h.on(this._animateElement, "animationend", () => {
      this._callback(this._options.onEnd);
    });
  }
  _bindScrollEvents() {
    this._options.animationShowOnLoad || this._animateOnScroll(), h.on(window, "scroll", () => {
      this._animateOnScroll();
    });
  }
  _bindClickEvents() {
    h.on(this._element, "mousedown", () => {
      this._startAnimation();
    });
  }
  _bindHoverEvents() {
    h.one(this._element, "mouseover", () => {
      this._startAnimation();
    }), h.one(this._animateElement, "animationend", () => {
      setTimeout(() => {
        this._bindHoverEvents();
      }, 100);
    });
  }
  _callback(t) {
    t instanceof Function && t();
  }
  // Static
  static autoInit(t) {
    t._init();
  }
  static jQueryInterface(t) {
    new Jl(this[0], t).init();
  }
  static getInstance(t) {
    return I.getData(t, Cn);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const An = "ripple", qi = "te.ripple", Qp = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", Jp = ["[data-te-ripple-init]"], Zi = [0, 0, 0], t_ = [
  { name: "primary", gradientColor: "#3B71CA" },
  { name: "secondary", gradientColor: "#9FA6B2" },
  { name: "success", gradientColor: "#14A44D" },
  { name: "danger", gradientColor: "#DC4C64" },
  { name: "warning", gradientColor: "#E4A11B" },
  { name: "info", gradientColor: "#54B4D3" },
  { name: "light", gradientColor: "#fbfbfb" },
  { name: "dark", gradientColor: "#262626" }
], Fr = 0.5, e_ = {
  rippleCentered: !1,
  rippleColor: "",
  rippleColorDark: "",
  rippleDuration: "500ms",
  rippleRadius: 0,
  rippleUnbound: !1
}, i_ = {
  rippleCentered: "boolean",
  rippleColor: "string",
  rippleColorDark: "string",
  rippleDuration: "string",
  rippleRadius: "number",
  rippleUnbound: "boolean"
}, s_ = {
  ripple: "relative overflow-hidden inline-block align-bottom",
  rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
  unbound: "overflow-visible"
}, n_ = {
  ripple: "string",
  rippleWave: "string",
  unbound: "string"
};
class Ue {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && (I.setData(t, qi, this), c.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = !1, this._initialClasses = null, this.init();
  }
  // Getters
  static get NAME() {
    return An;
  }
  // Public
  init() {
    this._addClickEvent(this._element);
  }
  dispose() {
    I.removeData(this._element, qi), h.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
  }
  // Private
  _autoInit(t) {
    Jp.forEach((e) => {
      d.closest(t.target, e) && (this._element = d.closest(t.target, e));
    }), this._element.style.minWidth || (c.style(this._element, {
      "min-width": getComputedStyle(this._element).width
    }), this._isMinWidthSet = !0), this._options = this._getConfig(), this._classes = this._getClasses(), this._initialClasses = [...this._element.classList], c.addClass(this._element, this._classes.ripple), this._createRipple(t);
  }
  _addClickEvent(t) {
    h.on(t, "mousedown", this._clickHandler);
  }
  _createRipple(t) {
    this._element.className.indexOf(this._classes.ripple) < 0 && c.addClass(this._element, this._classes.ripple);
    const { layerX: e, layerY: i } = t, n = t.offsetX || e, o = t.offsetY || i, r = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), p = {
      offsetX: this._options.rippleCentered ? r / 2 : n,
      offsetY: this._options.rippleCentered ? a / 2 : o,
      height: r,
      width: a
    }, u = this._getDiameter(p), f = this._options.rippleRadius || u / 2, _ = {
      delay: l * Fr,
      duration: l - l * Fr
    }, m = {
      left: this._options.rippleCentered ? `${a / 2 - f}px` : `${n - f}px`,
      top: this._options.rippleCentered ? `${r / 2 - f}px` : `${o - f}px`,
      height: `${this._options.rippleRadius * 2 || u}px`,
      width: `${this._options.rippleRadius * 2 || u}px`,
      transitionDelay: `0s, ${_.delay}ms`,
      transitionDuration: `${l}ms, ${_.duration}ms`
    }, g = D("div");
    this._createHTMLRipple({
      wrapper: this._element,
      ripple: g,
      styles: m
    }), this._removeHTMLRipple({ ripple: g, duration: l });
  }
  _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
    Object.keys(i).forEach(
      (n) => e.style[n] = i[n]
    ), c.addClass(e, this._classes.rippleWave), e.setAttribute("data-te-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
  }
  _removeHTMLRipple({ ripple: t, duration: e }) {
    this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(() => {
      t.classList.add("!opacity-0");
    }, 10), this._rippleTimer = setTimeout(() => {
      if (t && (t.remove(), this._element)) {
        d.find("[data-te-ripple-ref]", this._element).forEach(
          (n) => {
            n.remove();
          }
        ), this._isMinWidthSet && (c.style(this._element, { "min-width": "" }), this._isMinWidthSet = !1);
        const i = this._initialClasses ? this._addedNewRippleClasses(
          this._classes.ripple,
          this._initialClasses
        ) : this._classes.ripple.split(" ");
        c.removeClass(this._element, i);
      }
    }, e);
  }
  _addedNewRippleClasses(t, e) {
    return t.split(" ").filter(
      (i) => e.findIndex((n) => i === n) === -1
    );
  }
  _durationToMsNumber(t) {
    return Number(t.replace("ms", "").replace("s", "000"));
  }
  _getConfig(t = {}) {
    const e = c.getDataAttributes(this._element);
    return t = {
      ...e_,
      ...e,
      ...t
    }, L(An, t, i_), t;
  }
  _getClasses(t = {}) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...s_,
      ...e,
      ...t
    }, L(An, t, n_), t;
  }
  _getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
    const o = e <= i / 2, r = t <= n / 2, a = (_, m) => Math.sqrt(_ ** 2 + m ** 2), l = e === i / 2 && t === n / 2, p = {
      first: o === !0 && r === !1,
      second: o === !0 && r === !0,
      third: o === !1 && r === !0,
      fourth: o === !1 && r === !1
    }, u = {
      topLeft: a(t, e),
      topRight: a(n - t, e),
      bottomLeft: a(t, i - e),
      bottomRight: a(n - t, i - e)
    };
    let f = 0;
    return l || p.fourth ? f = u.topLeft : p.third ? f = u.topRight : p.second ? f = u.bottomRight : p.first && (f = u.bottomLeft), f * 2;
  }
  _appendRipple(t, e) {
    e.appendChild(t), setTimeout(() => {
      c.addClass(t, "opacity-0 scale-100");
    }, 50);
  }
  _toggleUnbound(t) {
    this._options.rippleUnbound === !0 ? c.addClass(t, this._classes.unbound) : c.removeClass(t, this._classes.unbound);
  }
  _addColor(t) {
    let e = this._options.rippleColor || "rgb(0,0,0)";
    (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
    const i = t_.find(
      (r) => r.name === e.toLowerCase()
    ), n = i ? this._colorToRGB(i.gradientColor).join(",") : this._colorToRGB(e).join(","), o = Qp.split("{{color}}").join(`${n}`);
    t.style.backgroundImage = `radial-gradient(circle, ${o})`;
  }
  _colorToRGB(t) {
    function e(o) {
      return o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`), [
        parseInt(o.substr(1, 2), 16),
        parseInt(o.substr(3, 2), 16),
        parseInt(o.substr(5, 2), 16)
      ];
    }
    function i(o) {
      const r = document.body.appendChild(
        document.createElement("fictum")
      ), a = "rgb(1, 2, 3)";
      return r.style.color = a, r.style.color !== a || (r.style.color = o, r.style.color === a || r.style.color === "") ? Zi : (o = getComputedStyle(r).color, document.body.removeChild(r), o);
    }
    function n(o) {
      return o = o.match(/[.\d]+/g).map((r) => +Number(r)), o.length = 3, o;
    }
    return t.toLowerCase() === "transparent" ? Zi : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = i(t)), t.indexOf("rgb") === 0 ? n(t) : Zi);
  }
  // Static
  static autoInitial(t) {
    return function(e) {
      t._autoInit(e);
    };
  }
  static jQueryInterface(t) {
    return this.each(function() {
      return I.getData(this, qi) ? null : new Ue(this, t);
    });
  }
  static getInstance(t) {
    return I.getData(t, qi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
function Z(s) {
  return s.getDate();
}
function Cs(s) {
  return s.getDay();
}
function Y(s) {
  return s.getMonth();
}
function B(s) {
  return s.getFullYear();
}
function o_(s, t, e) {
  const i = e.startDay, n = i > 0 ? 7 - i : 0, r = new Date(s, t).getDay() + n;
  return r >= 7 ? r - 7 : r;
}
function ro(s) {
  return r_(s).getDate();
}
function r_(s) {
  return Mt(s.getFullYear(), s.getMonth() + 1, 0);
}
function Re() {
  return /* @__PURE__ */ new Date();
}
function it(s, t) {
  return nt(s, t * 12);
}
function nt(s, t) {
  const e = Mt(
    s.getFullYear(),
    s.getMonth() + t,
    s.getDate()
  ), i = Z(s), n = Z(e);
  return i !== n && e.setDate(0), e;
}
function xe(s, t) {
  return Mt(s.getFullYear(), s.getMonth(), s.getDate() + t);
}
function Mt(s, t, e) {
  const i = new Date(s, t, e);
  return s >= 0 && s < 100 && i.setFullYear(i.getFullYear() - 1900), i;
}
function Yr(s) {
  const t = s.split("-"), e = t[0], i = t[1], n = t[2];
  return Mt(e, i, n);
}
function a_(s) {
  return !Number.isNaN(s.getTime());
}
function Me(s, t) {
  return B(s) - B(t) || Y(s) - Y(t) || Z(s) - Z(t);
}
function _e(s, t) {
  return s.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), s.getTime() === t.getTime();
}
function As(s, t) {
  const i = B(s) - c_();
  return l_(i, t);
}
function l_(s, t) {
  return (s % t + t) % t;
}
function c_(s, t, e) {
  let i = 0;
  return e ? i = B(e) - s + 1 : t && (i = B(t)), i;
}
function Ps(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date();
  r.setHours(0, 0, 0, 0);
  const a = t && Me(s, t) <= -1, l = e && Me(s, e) >= 1, p = n && Me(s, r) <= -1, u = o && Me(s, r) >= 1, f = i && i(s) === !1;
  return a || l || f || p || u;
}
function tc(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date(), a = i && B(i), l = i && Y(i), p = e && B(e), u = e && Y(e), f = B(r), _ = Y(r), m = l && a && (t > a || t === a && s > l), g = u && p && (t < p || t === p && s < u), v = n && (t < f || t === f && s < _), b = o && (t > f || t === f && s > _);
  return m || g || v || b;
}
function ao(s, t, e, i, n) {
  const o = t && B(t), r = e && B(e), a = B(/* @__PURE__ */ new Date()), l = r && s > r, p = o && s < o, u = i && s < a, f = n && s > a;
  return l || p || u || f;
}
function h_(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && o && Me(o, l) < 0 || s) && (o = l), o && Ai(
    t,
    o,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function d_(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && n && Me(n, l) < 0 || s) && (n = l), n && Ai(
    t,
    n,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function Ai(s, t, e, i, n, o, r, a) {
  return e === "days" ? B(s) === B(t) && Y(s) === Y(t) : e === "months" ? B(s) === B(t) : e === "years" ? B(t) >= a && B(t) <= r : !1;
}
const u_ = "data-te-datepicker-modal-container-ref", p_ = "data-te-datepicker-dropdown-container-ref", __ = "data-te-dropdown-backdrop-ref", f_ = "data-te-datepicker-date-text-ref", jr = "data-te-datepicker-view-ref", m_ = "data-te-datepicker-previous-button-ref", g_ = "data-te-datepicker-next-button-ref", b_ = "data-te-datepicker-ok-button-ref", v_ = "data-te-datepicker-cancel-button-ref", T_ = "data-te-datepicker-clear-button-ref", E_ = "data-te-datepicker-view-change-button-ref";
function C_(s, t, e, i, n, o, r, a, l, p) {
  const u = Y(s), f = B(s), _ = Z(s), m = Cs(s), g = D("div"), v = `
        ${Kr(
    s,
    u,
    f,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `, b = `
      ${y_(_, m, u, n, p)}
      ${Kr(
    s,
    u,
    f,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `;
  return n.inline ? (c.addClass(g, p.datepickerDropdownContainer), g.setAttribute(p_, l), g.innerHTML = v) : (c.addClass(g, p.modalContainer), g.setAttribute(u_, l), g.innerHTML = b), g;
}
function A_(s) {
  const t = D("div");
  return c.addClass(t, s), t.setAttribute(__, ""), t;
}
function y_(s, t, e, i, n) {
  return `
      <div class="${n.datepickerHeader}">
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${i.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${f_} >${i.weekdaysShort[t]}, ${i.monthsShort[e]} ${s}</span>
        </div>
      </div>
    `;
}
function Kr(s, t, e, i, n, o, r, a, l, p, u) {
  let f;
  return r.inline ? f = `
    <div class="${u.datepickerMain}">
      ${Ur(t, e, r, u)}
      <div class="${u.datepickerView}" ${jr} tabindex="0">
        ${zr(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
    </div>
  ` : f = `
    <div class="${u.datepickerMain}">
      ${Ur(t, e, r, u)}
      <div class="${u.datepickerView}" ${jr} tabindex="0">
        ${zr(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
      ${w_(r, u)}
    </div>
  `, f;
}
function zr(s, t, e, i, n, o, r, a, l, p) {
  let u;
  return o.view === "days" ? u = ys(s, e, o, p) : o.view === "months" ? u = ws(
    t,
    i,
    n,
    o,
    r,
    p
  ) : u = xs(
    s,
    i,
    o,
    a,
    l,
    p
  ), u;
}
function Ur(s, t, e, i) {
  return `
    <div class="${i.datepickerDateControls}">
      <button class="${i.datepickerViewChangeButton}" aria-label="${e.switchToMultiYearViewLabel}" ${E_}>
        ${e.monthsFull[s]} ${t} ${Dt(
    e,
    i
  )}
      </button>
      <div class="${i.datepickerArrowControls}">
        <button class="${i.datepickerPreviousButton}" aria-label="${e.prevMonthLabel}" ${m_}>${e.changeMonthIconTemplate}</button>
        <button class="${i.datepickerNextButton}" aria-label="${e.nextMonthLabel}" ${g_}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `;
}
function Dt(s, t) {
  return `
  <span class="${t.datepickerViewChangeIcon}">
  ${s.viewChangeIconTemplate}
  </span>
  `;
}
function w_(s, t) {
  const e = `<button class="${t.datepickerFooterBtn}" aria-label="${s.okBtnLabel}" ${b_}>${s.okBtnText}</button>`, i = `<button class="${t.datepickerFooterBtn}" aria-label="${s.cancelBtnLabel}" ${v_}>${s.cancelBtnText}</button>`, n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${s.clearBtnLabel}" ${T_}>${s.clearBtnText}</button>`;
  return `
        <div class="${t.datepickerFooter}">
          
        ${s.removeClearBtn ? "" : n}
        ${s.removeCancelBtn ? "" : i}
        ${s.removeOkBtn ? "" : e}
        </div>
      `;
}
function ys(s, t, e, i) {
  const n = x_(s, t, e), r = `
      <tr>
        ${e.weekdaysNarrow.map((l, p) => `<th class="${i.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[p]}">${l}</th>`).join("")}
      </tr>
    `, a = n.map((l) => `
        <tr>
          ${l.map((p) => `
              <td
              class="${i.datepickerCell} ${i.datepickerCellSmall}"
              data-te-date="${B(p.date)}-${Y(
    p.date
  )}-${Z(p.date)}"
              aria-label="${p.date}"
              aria-selected="${p.isSelected}"
              ${p.isSelected ? "data-te-datepicker-cell-selected" : ""}
              ${!p.currentMonth || p.disabled ? "data-te-datepicker-cell-disabled" : ""}
              ${p.isToday ? "data-te-datepicker-cell-current" : ""}
              >
                <div
                  class="${i.datepickerCellContent} ${i.datepickerCellContentSmall}"
                  style="${p.currentMonth ? "display: block" : "display: none"}"
                  >
                  ${p.dayNumber}
                  </div>
              </td>
            `).join("")}
        </tr>
      `).join("");
  return `
      <table class="${i.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `;
}
function x_(s, t, e) {
  const i = [], n = Y(s), o = Y(nt(s, -1)), r = Y(nt(s, 1)), a = B(s), l = o_(a, n, e), p = ro(s), u = ro(nt(s, -1)), f = 7;
  let _ = 1, m = !1;
  for (let g = 1; g < f; g++) {
    const v = [];
    if (g === 1) {
      const b = u - l + 1;
      for (let y = b; y <= u; y++) {
        const E = Mt(a, o, y);
        v.push({
          date: E,
          currentMonth: m,
          isSelected: t && _e(E, t),
          isToday: _e(E, Re()),
          dayNumber: Z(E)
        });
      }
      m = !0;
      const C = f - v.length;
      for (let y = 0; y < C; y++) {
        const E = Mt(a, n, _);
        v.push({
          date: E,
          currentMonth: m,
          isSelected: t && _e(E, t),
          isToday: _e(E, Re()),
          dayNumber: Z(E),
          disabled: Ps(
            E,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), _++;
      }
    } else
      for (let b = 1; b < 8; b++) {
        _ > p && (_ = 1, m = !1);
        const C = Mt(
          a,
          m ? n : r,
          _
        );
        v.push({
          date: C,
          currentMonth: m,
          isSelected: t && _e(C, t),
          isToday: _e(C, Re()),
          dayNumber: Z(C),
          disabled: Ps(
            C,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), _++;
      }
    i.push(v);
  }
  return i;
}
function ws(s, t, e, i, n, o) {
  const r = k_(i, n), a = Y(Re()), l = B(Re()), p = `
      ${r.map((u) => `
          <tr>
            ${u.map((f) => {
    const _ = i.monthsShort.indexOf(f);
    return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${tc(
      _,
      s,
      i.min,
      i.max,
      i.disablePast,
      i.disableFuture
    ) ? "data-te-datepicker-cell-disabled" : ""}
                
                data-te-month="${_}" data-te-year="${s}" aria-label="${f}, ${s}"
                ${_ === e && s === t ? "data-te-datepicker-cell-selected" : ""}
                ${_ === a && s === l ? "data-te-datepicker-cell-current" : ""}" data-te-month="${_}" data-te-year="${s}" aria-label="${f}, ${s}">
                  <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${f}</div>
                </td>
              `;
  }).join("")}
          </tr>
        `).join("")}
    `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${p}
        </tbody>
      </table>
    `;
}
function k_(s, t) {
  const e = [];
  let i = [];
  for (let n = 0; n < s.monthsShort.length; n++)
    if (i.push(s.monthsShort[n]), i.length === t) {
      const o = i;
      e.push(o), i = [];
    }
  return e;
}
function xs(s, t, e, i, n, o) {
  const r = O_(s, i, n), a = B(Re()), l = `
    ${r.map((p) => `
        <tr>
          ${p.map((u) => `
              <td class="${o.datepickerCell} ${o.datepickerCellLarge}"  aria-label="${u}" data-te-year="${u}"
              ${ao(
    u,
    e.min,
    e.max,
    e.disablePast,
    e.disableFuture
  ) ? "data-te-datepicker-cell-disabled" : ""}
              ${u === t ? "data-te-datepicker-cell-selected" : ""}
              ${u === a ? "data-te-datepicker-cell-current" : ""}
              >
                <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${u}</div>
              </td>
            `).join("")}
        </tr>
      `).join("")}
  `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `;
}
function O_(s, t, e) {
  const i = [], n = B(s), o = As(s, t), r = n - o;
  let a = [];
  for (let l = 0; l < t; l++)
    if (a.push(r + l), a.length === e) {
      const p = a;
      i.push(p), a = [];
    }
  return i;
}
function S_(s, t) {
  return `
    <button id="${s}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `;
}
const Pe = 37, rt = 38, Be = 39, z = 40, He = 36, We = 35, yn = 33, wn = 34, lt = 13, ks = 32, Li = 27, Oi = 9, I_ = 8, D_ = 46, gt = 24, Qi = 4, Ji = 4, xn = "datepicker", Os = "te.datepicker", Ys = `.${Os}`, $_ = ".data-api", L_ = `close${Ys}`, M_ = `open${Ys}`, N_ = `dateChange${Ys}`, ts = `click${Ys}${$_}`, ec = "data-te-datepicker-modal-container-ref", ic = "data-te-datepicker-dropdown-container-ref", es = "[data-te-datepicker-toggle-ref]", R_ = `[${ec}]`, P_ = `[${ic}]`, B_ = "[data-te-datepicker-view-change-button-ref]", H_ = "[data-te-datepicker-previous-button-ref]", W_ = "[data-te-datepicker-next-button-ref]", V_ = "[data-te-datepicker-ok-button-ref]", F_ = "[data-te-datepicker-cancel-button-ref]", Y_ = "[data-te-datepicker-clear-button-ref]", j_ = "[data-te-datepicker-view-ref]", K_ = "[data-te-datepicker-toggle-button-ref]", z_ = "[data-te-datepicker-date-text-ref]", U_ = "[data-te-dropdown-backdrop-ref]", X_ = "animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", G_ = "animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", q_ = "animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Z_ = "animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Q_ = "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-zinc-700", J_ = "w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]", tf = "relative h-full", ef = "xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-zinc-800", sf = "h-8 flex flex-col justify-end", nf = "text-[10px] font-normal uppercase tracking-[1.7px] text-white", of = "xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end", rf = "text-[34px] font-normal text-white", af = "outline-none px-3", lf = "px-3 pt-2.5 pb-0 flex justify-between text-black/[64]", cf = "flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", hf = "mt-2.5", df = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto", uf = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto", pf = "h-14 flex absolute w-full bottom-0 justify-end items-center px-3", _f = "outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", ff = "mr-auto", mf = "w-10 h-10 text-center text-[12px] font-normal dark:text-white", gf = "text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group", bf = "w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8", vf = "w-[76px] h-[42px]", Tf = "mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500", Ef = "w-9 h-9 leading-9 rounded-[50%] text-[13px]", Cf = "w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]", Af = "mx-auto w-[304px]", yf = "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200", wf = "inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white", xf = "w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-zinc-700", kf = {
  title: "Select date",
  container: "body",
  disablePast: !1,
  disableFuture: !1,
  monthsFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  weekdaysFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"],
  okBtnText: "Ok",
  clearBtnText: "Clear",
  cancelBtnText: "Cancel",
  okBtnLabel: "Confirm selection",
  clearBtnLabel: "Clear selection",
  cancelBtnLabel: "Cancel selection",
  nextMonthLabel: "Next month",
  prevMonthLabel: "Previous month",
  nextYearLabel: "Next year",
  prevYearLabel: "Previous year",
  changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
  nextMultiYearLabel: "Next 24 years",
  prevMultiYearLabel: "Previous 24 years",
  switchToMultiYearViewLabel: "Choose year and month",
  switchToMonthViewLabel: "Choose date",
  switchToDayViewLabel: "Choose date",
  startDate: null,
  startDay: 0,
  format: "dd/mm/yyyy",
  view: "days",
  viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
  min: null,
  max: null,
  filter: null,
  inline: !1,
  toggleButton: !0,
  disableToggleButton: !1,
  disableInput: !1,
  animations: !0,
  confirmDateOnSelect: !1,
  removeOkBtn: !1,
  removeCancelBtn: !1,
  removeClearBtn: !1
}, Of = {
  title: "string",
  container: "string",
  disablePast: "boolean",
  disableFuture: "boolean",
  monthsFull: "array",
  monthsShort: "array",
  weekdaysFull: "array",
  weekdaysShort: "array",
  weekdaysNarrow: "array",
  okBtnText: "string",
  clearBtnText: "string",
  cancelBtnText: "string",
  okBtnLabel: "string",
  clearBtnLabel: "string",
  cancelBtnLabel: "string",
  nextMonthLabel: "string",
  prevMonthLabel: "string",
  nextYearLabel: "string",
  prevYearLabel: "string",
  nextMultiYearLabel: "string",
  prevMultiYearLabel: "string",
  changeMonthIconTemplate: "string",
  switchToMultiYearViewLabel: "string",
  switchToMonthViewLabel: "string",
  switchToDayViewLabel: "string",
  startDate: "(null|string|date)",
  startDay: "number",
  format: "string",
  view: "string",
  viewChangeIconTemplate: "string",
  min: "(null|string|date)",
  max: "(null|string|date)",
  filter: "(null|function)",
  inline: "boolean",
  toggleButton: "boolean",
  disableToggleButton: "boolean",
  disableInput: "boolean",
  animations: "boolean",
  confirmDateOnSelect: "boolean",
  removeOkBtn: "boolean",
  removeCancelBtn: "boolean",
  removeClearBtn: "boolean"
}, Sf = {
  fadeIn: X_,
  fadeOut: G_,
  fadeInShort: q_,
  fadeOutShort: Z_,
  modalContainer: Q_,
  datepickerBackdrop: J_,
  datepickerMain: tf,
  datepickerHeader: ef,
  datepickerTitle: sf,
  datepickerTitleText: nf,
  datepickerDate: of,
  datepickerDateText: rf,
  datepickerView: af,
  datepickerDateControls: lf,
  datepickerViewChangeButton: cf,
  datepickerViewChangeIcon: wf,
  datepickerArrowControls: hf,
  datepickerPreviousButton: df,
  datepickerNextButton: uf,
  datepickerFooter: pf,
  datepickerFooterBtn: _f,
  datepickerClearBtn: ff,
  datepickerDayHeading: mf,
  datepickerCell: gf,
  datepickerCellSmall: bf,
  datepickerCellLarge: vf,
  datepickerCellContent: Tf,
  datepickerCellContentSmall: Ef,
  datepickerCellContentLarge: Cf,
  datepickerTable: Af,
  datepickerToggleButton: yf,
  datepickerDropdownContainer: xf
}, If = {
  fadeIn: "string",
  fadeOut: "string",
  fadeInShort: "string",
  fadeOutShort: "string",
  modalContainer: "string",
  datepickerBackdrop: "string",
  datepickerMain: "string",
  datepickerHeader: "string",
  datepickerTitle: "string",
  datepickerTitleText: "string",
  datepickerDate: "string",
  datepickerDateText: "string",
  datepickerView: "string",
  datepickerDateControls: "string",
  datepickerViewChangeButton: "string",
  datepickerArrowControls: "string",
  datepickerPreviousButton: "string",
  datepickerNextButton: "string",
  datepickerFooter: "string",
  datepickerFooterBtn: "string",
  datepickerClearBtn: "string",
  datepickerDayHeading: "string",
  datepickerCell: "string",
  datepickerCellSmall: "string",
  datepickerCellLarge: "string",
  datepickerCellContent: "string",
  datepickerCellContentSmall: "string",
  datepickerCellContentLarge: "string",
  datepickerTable: "string",
  datepickerToggleButton: "string",
  datepickerDropdownContainer: "string"
};
class F0 {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = !1, this._toggleButtonId = bt("datepicker-toggle-"), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this._scrollBar = new ki(), this._element && I.setData(t, Os, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
  }
  // Getters
  static get NAME() {
    return xn;
  }
  get container() {
    return d.findOne(
      `[${ec}='${this._toggleButtonId}']`
    ) || d.findOne(
      `[${ic}='${this._toggleButtonId}']`
    );
  }
  get options() {
    return this._options;
  }
  get activeCell() {
    let t;
    return this._view === "days" && (t = this._getActiveDayCell()), this._view === "months" && (t = this._getActiveMonthCell()), this._view === "years" && (t = this._getActiveYearCell()), t;
  }
  get activeDay() {
    return Z(this._activeDate);
  }
  get activeMonth() {
    return Y(this._activeDate);
  }
  get activeYear() {
    return B(this._activeDate);
  }
  get firstYearInView() {
    return this.activeYear - As(this._activeDate, gt);
  }
  get lastYearInView() {
    return this.firstYearInView + gt - 1;
  }
  get viewChangeButton() {
    return d.findOne(B_, this.container);
  }
  get previousButton() {
    return d.findOne(H_, this.container);
  }
  get nextButton() {
    return d.findOne(W_, this.container);
  }
  get okButton() {
    return d.findOne(V_, this.container);
  }
  get cancelButton() {
    return d.findOne(F_, this.container);
  }
  get clearButton() {
    return d.findOne(Y_, this.container);
  }
  get datesContainer() {
    return d.findOne(j_, this.container);
  }
  get toggleButton() {
    return d.findOne(K_, this._element);
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    if (t = {
      ...kf,
      ...e,
      ...t
    }, L(xn, t, Of), t.max && typeof t.max == "string" && (t.max = new Date(t.max)), t.min && typeof t.min == "string" && (t.min = new Date(t.min)), t.startDay && t.startDay !== 0) {
      const i = this._getNewDaysOrderArray(t);
      t.weekdaysNarrow = i;
    }
    return t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Sf,
      ...e,
      ...t
    }, L(xn, t, If), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getNewDaysOrderArray(t) {
    const e = t.startDay, i = t.weekdaysNarrow;
    return i.slice(e).concat(i.slice(0, e));
  }
  _init() {
    !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
  }
  _appendToggleButton() {
    const t = S_(
      this._toggleButtonId,
      this._classes.datepickerToggleButton
    );
    this._element.insertAdjacentHTML("beforeend", t);
  }
  open() {
    if (this._input.readOnly || this._input.disabled)
      return;
    const t = h.trigger(this._element, M_);
    if (this._isOpen || t.defaultPrevented)
      return;
    this._setInitialDate();
    const e = A_(this._classes.datepickerBackdrop), i = C_(
      this._activeDate,
      this._selectedDate,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Ji,
      gt,
      Qi,
      this._toggleButtonId,
      this._classes
    );
    this._options.inline ? this._openDropdown(i) : (this._openModal(e, i), this._scrollBar.hide()), this._animations && (c.addClass(this.container, this._classes.fadeIn), c.addClass(e, this._classes.fadeInShort)), this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._updateControlsDisabledState(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = !0, setTimeout(() => {
      this._listenToOutsideClick();
    }, 0);
  }
  _openDropdown(t) {
    this._popper = Ee(this._input, t, {
      placement: "bottom-start"
    }), this._getContainer().appendChild(t);
  }
  _openModal(t, e) {
    const i = this._getContainer();
    i.appendChild(t), i.appendChild(e);
  }
  _setFocusTrap(t) {
    this._focusTrap = new $i(t, {
      event: "keydown",
      condition: (e) => e.key === "Tab"
    }), this._focusTrap.trap();
  }
  _listenToUserInput() {
    h.on(this._input, "input", (t) => {
      this._handleUserInput(t.target.value);
    });
  }
  _listenToToggleClick() {
    h.on(
      this._element,
      ts,
      es,
      (t) => {
        t.preventDefault(), this.open();
      }
    );
  }
  _listenToToggleKeydown() {
    h.on(
      this._element,
      "keydown",
      es,
      (t) => {
        t.keyCode === lt && !this._isOpen && this.open();
      }
    );
  }
  _listenToDateSelection() {
    h.on(this.datesContainer, "click", (t) => {
      this._handleDateSelection(t);
    });
  }
  _handleDateSelection(t) {
    const e = t.target.nodeName === "DIV" ? t.target.parentNode.dataset : t.target.dataset, i = t.target.nodeName === "DIV" ? t.target.parentNode : t.target;
    if (e.teDate && this._pickDay(e.teDate, i), e.teMonth && e.teYear) {
      const n = parseInt(e.teMonth, 10), o = parseInt(e.teYear, 10);
      this._pickMonth(n, o);
    }
    if (e.teYear && !e.teMonth) {
      const n = parseInt(e.teYear, 10);
      this._pickYear(n);
    }
    this._options.inline || this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _updateHeaderDate(t, e, i) {
    const n = d.findOne(
      z_,
      this.container
    ), o = Y(t), r = Z(t), a = Cs(t);
    n.innerHTML = `${i[a]}, ${e[o]} ${r}`;
  }
  _addControlsListeners() {
    h.on(this.nextButton, "click", () => {
      this._view === "days" ? this.nextMonth() : this._view === "years" ? this.nextYears() : this.nextYear(), this._updateControlsDisabledState();
    }), h.on(this.previousButton, "click", () => {
      this._view === "days" ? this.previousMonth() : this._view === "years" ? this.previousYears() : this.previousYear(), this._updateControlsDisabledState();
    }), h.on(this.viewChangeButton, "click", () => {
      this._view === "days" ? this._changeView("years") : (this._view === "years" || this._view === "months") && this._changeView("days");
    }), this._options.inline || this._listenToFooterButtonsClick();
  }
  _listenToFooterButtonsClick() {
    h.on(this.okButton, "click", () => this.handleOk()), h.on(this.cancelButton, "click", () => this.handleCancel()), h.on(this.clearButton, "click", () => this.handleClear());
  }
  _listenToOutsideClick() {
    h.on(document, ts, (t) => {
      const e = t.target === this.container, i = this.container && this.container.contains(t.target);
      !e && !i && this.close();
    });
  }
  _listenToEscapeClick() {
    h.on(document, "keydown", (t) => {
      t.keyCode === Li && this._isOpen && this.close();
    });
  }
  _listenToKeyboardNavigation() {
    h.on(this.datesContainer, "keydown", (t) => {
      this._handleKeydown(t);
    });
  }
  _listenToDatesContainerFocus() {
    h.on(this.datesContainer, "focus", () => {
      this._focusActiveCell(this.activeCell);
    });
  }
  _listenToDatesContainerBlur() {
    h.on(this.datesContainer, "blur", () => {
      this._removeCurrentFocusStyles();
    });
  }
  _handleKeydown(t) {
    this._view === "days" && this._handleDaysViewKeydown(t), this._view === "months" && this._handleMonthsViewKeydown(t), this._view === "years" && this._handleYearsViewKeydown(t);
  }
  _handleDaysViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Pe:
        this._activeDate = xe(this._activeDate, F() ? 1 : -1);
        break;
      case Be:
        this._activeDate = xe(this._activeDate, F() ? -1 : 1);
        break;
      case rt:
        this._activeDate = xe(this._activeDate, -7);
        break;
      case z:
        this._activeDate = xe(this._activeDate, 7);
        break;
      case He:
        this._activeDate = xe(
          this._activeDate,
          1 - Z(this._activeDate)
        );
        break;
      case We:
        this._activeDate = xe(
          this._activeDate,
          ro(this._activeDate) - Z(this._activeDate)
        );
        break;
      case yn:
        this._activeDate = nt(this._activeDate, -1);
        break;
      case wn:
        this._activeDate = nt(this._activeDate, 1);
        break;
      case lt:
      case ks:
        this._selectDate(this._activeDate), this._handleDateSelection(t), t.preventDefault();
        return;
      default:
        return;
    }
    Ai(
      e,
      this._activeDate,
      this._view,
      gt,
      this._options.min,
      this._options.max
    ) || this._changeView("days"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _asyncFocusDatesContainer() {
    setTimeout(() => {
      this.datesContainer.focus();
    }, 0);
  }
  _focusActiveCell(t) {
    t && t.setAttribute("data-te-datepicker-cell-focused", "");
  }
  _removeHighlightFromCell(t) {
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  _getActiveDayCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = Yr(i.dataset.teDate);
      return _e(n, this._activeDate);
    });
  }
  _handleMonthsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Pe:
        this._activeDate = nt(this._activeDate, F() ? 1 : -1);
        break;
      case Be:
        this._activeDate = nt(this._activeDate, F() ? -1 : 1);
        break;
      case rt:
        this._activeDate = nt(this._activeDate, -4);
        break;
      case z:
        this._activeDate = nt(this._activeDate, 4);
        break;
      case He:
        this._activeDate = nt(this._activeDate, -this.activeMonth);
        break;
      case We:
        this._activeDate = nt(this._activeDate, 11 - this.activeMonth);
        break;
      case yn:
        this._activeDate = it(this._activeDate, -1);
        break;
      case wn:
        this._activeDate = it(this._activeDate, 1);
        break;
      case lt:
      case ks:
        this._selectMonth(this.activeMonth);
        return;
      default:
        return;
    }
    Ai(
      e,
      this._activeDate,
      this._view,
      gt,
      this._options.min,
      this._options.max
    ) || this._changeView("months"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveMonthCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = parseInt(i.dataset.teYear, 10), o = parseInt(i.dataset.teMonth, 10);
      return n === this.activeYear && o === this.activeMonth;
    });
  }
  _handleYearsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell, n = 4, o = 24;
    switch (t.keyCode) {
      case Pe:
        this._activeDate = it(this._activeDate, F() ? 1 : -1);
        break;
      case Be:
        this._activeDate = it(this._activeDate, F() ? -1 : 1);
        break;
      case rt:
        this._activeDate = it(this._activeDate, -n);
        break;
      case z:
        this._activeDate = it(this._activeDate, n);
        break;
      case He:
        this._activeDate = it(
          this._activeDate,
          -As(this._activeDate, o)
        );
        break;
      case We:
        this._activeDate = it(
          this._activeDate,
          o - As(this._activeDate, o) - 1
        );
        break;
      case yn:
        this._activeDate = it(this._activeDate, -o);
        break;
      case wn:
        this._activeDate = it(this._activeDate, o);
        break;
      case lt:
      case ks:
        this._selectYear(this.activeYear);
        return;
      default:
        return;
    }
    Ai(
      e,
      this._activeDate,
      this._view,
      gt,
      this._options.min,
      this._options.max
    ) || this._changeView("years"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveYearCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => parseInt(i.dataset.teYear, 10) === this.activeYear);
  }
  _setInitialDate() {
    this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = /* @__PURE__ */ new Date();
  }
  close() {
    const t = h.trigger(this._element, L_);
    !this._isOpen || t.defaultPrevented || (this._removeDatepickerListeners(), this._animations && c.addClass(this.container, this._classes.fadeOut), this._options.inline ? this._closeDropdown() : this._closeModal(), this._isOpen = !1, this._view = this._options.view, this.toggleButton ? this.toggleButton.focus() : this._input.focus());
  }
  _closeDropdown() {
    const t = d.findOne(P_), e = this._getContainer();
    window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t && e.removeChild(t), this._popper && this._popper.destroy()), t.addEventListener("animationend", () => {
      t && e.removeChild(t), this._popper && this._popper.destroy();
    }), this._removeFocusTrap();
  }
  _closeModal() {
    const t = d.findOne(U_), e = d.findOne(R_);
    !e || !t || (this._animations ? (c.addClass(t, this._classes.fadeOutShort), t.addEventListener("animationend", () => {
      this._removePicker(t, e), this._scrollBar.reset();
    })) : (this._removePicker(t, e), this._scrollBar.reset()));
  }
  _removePicker(t, e) {
    const i = this._getContainer();
    i.removeChild(t), i.removeChild(e);
  }
  _removeFocusTrap() {
    this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
  }
  _removeDatepickerListeners() {
    h.off(this.nextButton, "click"), h.off(this.previousButton, "click"), h.off(this.viewChangeButton, "click"), h.off(this.okButton, "click"), h.off(this.cancelButton, "click"), h.off(this.clearButton, "click"), h.off(this.datesContainer, "click"), h.off(this.datesContainer, "keydown"), h.off(this.datesContainer, "focus"), h.off(this.datesContainer, "blur"), h.off(document, ts);
  }
  dispose() {
    this._isOpen && this.close(), this._removeInputAndToggleListeners();
    const t = d.findOne(
      `#${this._toggleButtonId}`
    );
    t && this._element.removeChild(t), I.removeData(this._element, Os), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
  }
  _removeInputAndToggleListeners() {
    h.off(this._input, "input"), h.off(
      this._element,
      ts,
      es
    ), h.off(this._element, "keydown", es);
  }
  handleOk() {
    this._confirmSelection(this._headerDate), this.close();
  }
  _selectDate(t, e = this.activeCell) {
    const { min: i, max: n, filter: o, disablePast: r, disableFuture: a } = this._options;
    Ps(t, i, n, o, r, a) || (this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._selectedDate = t, this._selectedYear = B(t), this._selectedMonth = Y(t), this._headerDate = t, (this._options.inline || this.options.confirmDateOnSelect) && (this._confirmSelection(t), this.close()));
  }
  _selectYear(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerYear = t, this._asyncChangeView("months");
  }
  _selectMonth(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerMonth = t, this._asyncChangeView("days");
  }
  _removeSelectedStyles(t) {
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _addSelectedStyles(t) {
    t && t.setAttribute("data-te-datepicker-cell-selected", "");
  }
  _confirmSelection(t) {
    if (t) {
      const e = this.formatDate(t);
      this._input.value = e, h.trigger(this._element, N_, { date: t }), h.trigger(this._input, "input");
    }
  }
  handleCancel() {
    this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
  }
  handleClear() {
    this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._setInitialDate(), this._changeView("days"), this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _removeCurrentSelectionStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-selected]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _removeCurrentFocusStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-focused]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  formatDate(t) {
    const e = Z(t), i = this._addLeadingZero(Z(t)), n = this._options.weekdaysShort[Cs(t)], o = this._options.weekdaysFull[Cs(t)], r = Y(t) + 1, a = this._addLeadingZero(Y(t) + 1), l = this._options.monthsShort[Y(t)], p = this._options.monthsFull[Y(t)], u = B(t).toString().length === 2 ? B(t) : B(t).toString().slice(2, 4), f = B(t), _ = this._options.format.split(
      /(d{1,4}|m{1,4}|y{4}|yy|!.)/g
    );
    let m = "";
    return _.forEach((g) => {
      switch (g) {
        case "dddd":
          g = g.replace(g, o);
          break;
        case "ddd":
          g = g.replace(g, n);
          break;
        case "dd":
          g = g.replace(g, i);
          break;
        case "d":
          g = g.replace(g, e);
          break;
        case "mmmm":
          g = g.replace(g, p);
          break;
        case "mmm":
          g = g.replace(g, l);
          break;
        case "mm":
          g = g.replace(g, a);
          break;
        case "m":
          g = g.replace(g, r);
          break;
        case "yyyy":
          g = g.replace(g, f);
          break;
        case "yy":
          g = g.replace(g, u);
          break;
      }
      m += g;
    }), m;
  }
  _addLeadingZero(t) {
    return parseInt(t, 10) < 10 ? `0${t}` : t;
  }
  _pickDay(t, e) {
    const i = Yr(t), { min: n, max: o, filter: r, disablePast: a, disableFuture: l } = this._options;
    Ps(i, n, o, r, a, l) || (this._activeDate = i, this._selectDate(i, e));
  }
  _pickYear(t) {
    const { min: e, max: i, disablePast: n, disableFuture: o } = this._options;
    if (ao(t, e, i, n, o))
      return;
    const r = Mt(t, this.activeMonth, this.activeDay);
    this._activeDate = r, this._selectedDate = r, this._selectYear(t);
  }
  _pickMonth(t, e) {
    const { min: i, max: n, disablePast: o, disableFuture: r } = this._options;
    if (tc(t, e, i, n, o, r) || ao(e, i, n, o, r))
      return;
    const a = Mt(e, t, this.activeDay);
    this._activeDate = a, this._selectMonth(t);
  }
  nextMonth() {
    const t = nt(this._activeDate, 1), e = ys(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this._activeDate = t, this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousMonth() {
    const t = nt(this._activeDate, -1);
    this._activeDate = t;
    const e = ys(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  nextYear() {
    const t = it(this._activeDate, 1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    );
    const e = ws(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Ji,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  previousYear() {
    const t = it(this._activeDate, -1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    );
    const e = ws(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Ji,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  nextYears() {
    const t = it(this._activeDate, 24);
    this._activeDate = t;
    const e = xs(
      t,
      this._selectedYear,
      this._options,
      gt,
      Qi,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousYears() {
    const t = it(this._activeDate, -24);
    this._activeDate = t;
    const e = xs(
      t,
      this._selectedYear,
      this._options,
      gt,
      Qi,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  _asyncChangeView(t) {
    setTimeout(() => {
      this._changeView(t);
    }, 0);
  }
  _changeView(t) {
    this._view = t, this.datesContainer.blur(), t === "days" && (this.datesContainer.innerHTML = ys(
      this._activeDate,
      this._headerDate,
      this._options,
      this._classes
    )), t === "months" && (this.datesContainer.innerHTML = ws(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      Ji,
      this._classes
    )), t === "years" && (this.datesContainer.innerHTML = xs(
      this._activeDate,
      this._selectedYear,
      this._options,
      gt,
      Qi,
      this._classes
    )), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t), this._updateControlsDisabledState();
  }
  _updateViewControlsAndAttributes(t) {
    t === "days" && (this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMultiYearViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMonthLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t === "months" && (this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToDayViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevYearLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t === "years" && (this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += Dt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMonthViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMultiYearLabel
    ), this.nextButton.setAttribute(
      "aria-label",
      this._options.nextMultiYearLabel
    ));
  }
  _updateControlsDisabledState() {
    h_(
      this._options.disableFuture,
      this._activeDate,
      this._view,
      gt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.nextButton.disabled = !0 : this.nextButton.disabled = !1, d_(
      this._options.disablePast,
      this._activeDate,
      this._view,
      gt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.previousButton.disabled = !0 : this.previousButton.disabled = !1;
  }
  _handleUserInput(t) {
    const e = this._getDelimeters(this._options.format), i = this._parseDate(t, this._options.format, e);
    a_(i) ? (this._activeDate = i, this._selectedDate = i, this._selectedYear = B(i), this._selectedMonth = Y(i), this._headerDate = i) : (this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null);
  }
  _getDelimeters(t) {
    return t.match(/[^(dmy)]{1,}/g);
  }
  _parseDate(t, e, i) {
    let n;
    i[0] !== i[1] ? n = i[0] + i[1] : n = i[0];
    const o = new RegExp(`[${n}]`), r = t.split(o), a = e.split(o), l = e.indexOf("mmm") !== -1, p = [];
    for (let v = 0; v < a.length; v++)
      a[v].indexOf("yy") !== -1 && (p[0] = { value: r[v], format: a[v] }), a[v].indexOf("m") !== -1 && (p[1] = { value: r[v], format: a[v] }), a[v].indexOf("d") !== -1 && a[v].length <= 2 && (p[2] = { value: r[v], format: a[v] });
    let u;
    e.indexOf("mmmm") !== -1 ? u = this._options.monthsFull : u = this._options.monthsShort;
    const f = Number(p[0].value), _ = l ? this.getMonthNumberByMonthName(p[1].value, u) : Number(p[1].value) - 1, m = Number(p[2].value);
    return Mt(f, _, m);
  }
  getMonthNumberByMonthName(t, e) {
    return e.findIndex((i) => i === t);
  }
  static getInstance(t) {
    return I.getData(t, Os);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Df = ({
  format24: s,
  okLabel: t,
  cancelLabel: e,
  headID: i,
  footerID: n,
  bodyID: o,
  pickerID: r,
  clearLabel: a,
  inline: l,
  showClearBtn: p,
  amLabel: u,
  pmLabel: f
}, _) => {
  const m = `<div id='${r}' class='${_.timepickerWrapper}' data-te-timepicker-wrapper>
      <div class="${_.timepickerContainer}">
        <div class="${_.timepickerElements}">
        <div id='${i}' class='${_.timepickerHead}' style='padding-right:${s ? 50 : 10}px'>
        <div class='${_.timepickerHeadContent}'>
            <div class="${_.timepickerCurrentWrapper}">
              <span class="${_.timepickerCurrentButtonWrapper}">
                <button type='button' class='${_.timepickerCurrentButton}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${_.timepickerDot}' disabled>:</button>
            <span class="${_.timepickerCurrentButtonWrapper}">
              <button type='button' class='${_.timepickerCurrentButton}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${s ? "" : `<div class="${_.timepickerModeWrapper}">
                  <button type='button' class="${_.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${u}</button>
                  <button class="${_.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${f}</button>
                </div>`}
        </div>
      </div>
      ${l ? "" : `<div id='${o}' class='${_.timepickerClockWrapper}' data-te-timepicker-clock-wrapper>
            <div class='${_.timepickerClock}' data-te-timepicker-clock>
              <span class='${_.timepickerMiddleDot}' data-te-timepicker-middle-dot></span>
              <div class='${_.timepickerHandPointer}' data-te-timepicker-hand-pointer>
                <div class='${_.timepickerPointerCircle}' data-te-timepicker-circle></div>
              </div>
              ${s ? '<div class="' + _.timepickerClockInner + '" data-te-timepicker-clock-inner></div>' : ""}
            </div>
          </div>`}
    </div>
    <div id='${n}' class='${_.timepickerFooterWrapper}'>
      <div class="${_.timepickerFooter}">
        ${p ? `<button type='button' class='${_.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>` : ""}
        <button type='button' class='${_.timepickerFooterButton}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${_.timepickerFooterButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`, g = `<div id='${r}' class='${_.timepickerInlineWrapper}' data-te-timepicker-wrapper>
        <div class="${_.timepickerInlineContainer}">
          <div class="${_.timepickerInlineElements}">
          <div id='${i}' class='${_.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${_.timepickerInlineHeadContent}'>
              <div class="${_.timepickerCurrentWrapper}">
                <span class="${_.timepickerInlineHourWrapper}" data-te-timepicker-inline-hour-icons>
                  <span class="${_.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${_.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${_.timepickerInlineCurrentButton}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${_.timepickerInlineIconDown}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${_.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${_.timepickerInlineDot}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${_.timepickerCurrentMinuteWrapper}">
                <span class="${_.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${_.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${_.timepickerInlineCurrentButton}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${_.timepickerInlineIconDown}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${_.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${s ? "" : `<div class="${_.timepickerInlineModeWrapper}">
                      <button type='button' class="${_.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${u}</button>
                      <button class="${_.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${f}</button>
                      <button type='button' class='${_.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`}
              ${s ? `<button class='${_.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
</div>`;
  return l ? g : m;
}, $f = (s, t, e) => {
  const { iconSVG: i } = s;
  return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${i}
  </button>
`;
}, js = "data-te-timepicker-disabled", is = "data-te-timepicker-active", be = (s) => {
  if (s === "")
    return;
  let t, e, i, n;
  return sc(s) ? (t = s.getHours(), n = t, e = s.getMinutes(), t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM"), e = e < 10 ? `0${e}` : e) : ([t, e, i] = R(s, !1), n = t, t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM")), {
    hours: t,
    minutes: e,
    amOrPm: i
  };
}, sc = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !Number.isNaN(s), Xr = (s) => {
  if (s === "")
    return;
  let t, e;
  return sc(s) ? (t = s.getHours(), e = s.getMinutes()) : [t, e] = R(s, !1), e = Number(e) < 10 ? `0${Number(e)}` : e, {
    hours: t,
    minutes: e
  };
}, Lf = (s, t, e) => h.on(document, s, t, ({ target: i }) => {
  if (i.hasAttribute(is))
    return;
  document.querySelectorAll(t).forEach((o) => {
    o.hasAttribute(is) && (c.removeClass(o, e.opacity), o.removeAttribute(is));
  }), c.addClass(i, e.opacity), i.setAttribute(is, "");
}), Gr = ({ clientX: s, clientY: t, touches: e }, i, n = !1) => {
  const { left: o, top: r } = i.getBoundingClientRect();
  let a = {};
  return !n || !e ? a = {
    x: s - o,
    y: t - r
  } : n && Object.keys(e).length > 0 && (a = {
    x: e[0].clientX - o,
    y: e[0].clientY - r
  }), a;
}, ss = () => navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), R = (s, t = !0) => t ? s.value.replace(/:/gi, " ").split(" ") : s.replace(/:/gi, " ").split(" "), nc = (s, t) => {
  const [e, i, n] = R(s, !1), [o, r, a] = R(t, !1);
  return n === "PM" && a === "AM" || n === a && e > o || i > r;
}, oc = () => {
  const s = /* @__PURE__ */ new Date(), t = s.getHours(), e = s.getMinutes();
  return `${t}:${e < 10 ? `0${e}` : e}`;
}, Xt = (s, t, e) => {
  if (!t)
    return s;
  let i = oc();
  return e && (i = `${be(i).hours}:${be(i).minutes} ${be(i).amOrPm}`), (s !== "" && nc(i, s) || s === "") && (s = i), s;
}, Gt = (s, t, e) => {
  if (!t)
    return s;
  let i = oc();
  return e && (i = `${be(i).hours}:${be(i).minutes} ${be(i).amOrPm}`), (s !== "" && !nc(i, s) || s === "") && (s = i), s;
}, Mf = ({ format12: s, maxTime: t, minTime: e, disablePast: i, disableFuture: n }, o, r) => {
  const a = R(o)[1];
  e = Xt(e, i, s), t = Gt(t, n, s);
  const [l, p, u] = R(t, !1), [f, _, m] = R(e, !1);
  if (u !== void 0 || m !== void 0)
    return [r, a];
  if (!(l !== "" && f === "" && Number(r) > Number(l)) && !(l === "" && f !== "" && p === void 0 && _ !== "" && Number(r) < Number(f)))
    return [r, a];
}, qr = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, (n.textContent === "00" || Number(n.textContent === "12" && i ? "0" : n.textContent) > t) && (c.addClass(n, e.tipsDisabled), n.setAttribute(js, ""));
  });
}, Zr = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, n.textContent !== "00" && Number(n.textContent === "12" && i ? "0" : n.textContent) < Number(t) && (c.addClass(n, e.tipsDisabled), n.setAttribute(js, ""));
  });
}, rc = (s, t, e, i) => {
  if (t === "12" || t === "24")
    return;
  const n = e ? 12 : 24;
  return i === "max" ? (Number(s) === n ? 0 : Number(s)) > Number(t) : (Number(s) === n ? 0 : Number(s)) < Number(t);
}, Nf = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (rc(i, e, o, "max") || Number(r.textContent) > t && Number(i) === Number(e)) && (c.addClass(r, n.tipsDisabled), r.setAttribute(js, ""));
  });
}, Rf = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (rc(i, e, o, "min") || Number(r.textContent) < t && Number(i) === Number(e)) && (c.addClass(r, n.tipsDisabled), r.setAttribute(js, ""));
  });
}, Pf = (s) => s.startsWith("0") ? Number(s.slice(1)) : Number(s), yi = "timepicker", N = `data-te-${yi}`, Qr = "[data-te-toggle]", Ss = `te.${yi}`, Rt = `.${Ss}`, Pt = ".data-api", Jr = `click${Rt}${Pt}`, ns = `keydown${Rt}${Pt}`, ta = `mousedown${Rt}${Pt}`, ea = `mouseup${Rt}${Pt}`, ia = `mousemove${Rt}${Pt}`, sa = `mouseleave${Rt}${Pt}`, na = `mouseover${Rt}${Pt}`, oa = `touchmove${Rt}${Pt}`, ra = `touchend${Rt}${Pt}`, aa = `touchstart${Rt}${Pt}`, Bf = `[${N}-am]`, Hf = `[${N}-pm]`, Wf = `[${N}-format24]`, os = `[${N}-current]`, rs = `[${N}-hour-mode]`, Vf = `[${N}-toggle-button]`, kn = `${N}-cancel`, la = `${N}-clear`, On = `${N}-submit`, Ff = `${N}-icon`, Sn = `${N}-icon-up`, In = `${N}-icon-down`, Yf = `${N}-icon-inline-hour`, jf = `${N}-icon-inline-minute`, ca = `${N}-inline-hour-icons`, Kf = `${N}-current-inline`, zf = "readonly", ha = `${N}-invalid-feedback`, Dn = `${N}-is-invalid`, Yt = `${N}-disabled`, H = `${N}-active`, Uf = `${N}-input`, ue = `${N}-clock`, ai = `${N}-clock-inner`, $n = `${N}-wrapper`, da = `${N}-clock-wrapper`, as = `${N}-hour`, Ln = `${N}-minute`, ls = `${N}-tips-element`, K = `${N}-tips-hours`, X = `${N}-tips-minutes`, at = `${N}-tips-inner`, cs = `${N}-tips-inner-element`, ua = `${N}-middle-dot`, Mn = `${N}-hand-pointer`, Nn = `${N}-circle`, pa = `${N}-modal`, Xf = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`, Gf = {
  appendValidationInfo: !0,
  bodyID: "",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  closeModalOnBackdropClick: !0,
  closeModalOnMinutesClick: !1,
  container: "body",
  defaultTime: "",
  disabled: !1,
  disablePast: !1,
  disableFuture: !1,
  enableValidation: !0,
  focusInputAfterApprove: !1,
  footerID: "",
  format12: !0,
  format24: !1,
  headID: "",
  increment: !1,
  inline: !1,
  invalidLabel: "Invalid Time Format",
  maxTime: "",
  minTime: "",
  modalID: "",
  okLabel: "Ok",
  overflowHidden: !0,
  pickerID: "",
  readOnly: !1,
  showClearBtn: !0,
  switchHoursToMinutesOnClick: !0,
  iconSVG: Xf,
  withIcon: !0,
  pmLabel: "PM",
  amLabel: "AM",
  animations: !0
}, qf = {
  appendValidationInfo: "boolean",
  bodyID: "string",
  cancelLabel: "string",
  clearLabel: "string",
  closeModalOnBackdropClick: "boolean",
  closeModalOnMinutesClick: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  enableValidation: "boolean",
  footerID: "string",
  format12: "boolean",
  format24: "boolean",
  headID: "string",
  increment: "boolean",
  inline: "boolean",
  invalidLabel: "string",
  modalID: "string",
  okLabel: "string",
  overflowHidden: "boolean",
  pickerID: "string",
  readOnly: "boolean",
  showClearBtn: "boolean",
  switchHoursToMinutesOnClick: "boolean",
  defaultTime: "(string|date|number)",
  iconSVG: "string",
  withIcon: "boolean",
  pmLabel: "string",
  amLabel: "string",
  animations: "boolean"
}, Zf = {
  tips: "absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent",
  tipsActive: "text-white bg-[#3b71ca] font-normal",
  tipsDisabled: "text-[#b3afaf] pointer-events-none bg-transparent",
  transform: "transition-[transform,height] ease-in-out duration-[400ms]",
  modal: "z-[1065]",
  clockAnimation: "animate-[show-up-clock_350ms_linear]",
  opacity: "!opacity-100",
  timepickerWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed",
  timepickerContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg",
  timepickerElements: "flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center",
  timepickerHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly",
  timepickerCurrentWrapper: "[direction:ltr] rtl:[direction:rtl]",
  timepickerCurrentButtonWrapper: "relative h-full",
  timepickerCurrentButton: "text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ",
  timepickerDot: "font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal",
  timepickerModeWrapper: "flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerModeAm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerModePm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerClockWrapper: "min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500",
  timepickerClock: "relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50",
  timepickerMiddleDot: "top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute",
  timepickerHandPointer: "bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute",
  timepickerPointerCircle: "-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute",
  timepickerClockInner: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]",
  timepickerFooterWrapper: "rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500",
  timepickerFooter: "w-full flex justify-between",
  timepickerFooterButton: "text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none",
  timepickerInlineWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg",
  timepickerInlineContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
  timepickerInlineElements: "flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerInlineHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg",
  timepickerInlineHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center",
  timepickerInlineHourWrapper: "relative h-full !opacity-100",
  timepickerCurrentMinuteWrapper: "relative h-full",
  timepickerInlineIconUp: "absolute fill-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineIconSvg: "h-4 w-4",
  timepickerInlineCurrentButton: "font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]",
  timepickerInlineIconDown: "absolute fill-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineDot: "font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]",
  timepickerInlineModeWrapper: "flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerInlineModeAm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6",
  timepickerInlineModePm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer",
  timepickerInlineSubmitButton: "hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0",
  timepickerToggleButton: "h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white",
  invalidFeedback: "block absolute text-sm text-red-500 dark:text-red-300"
}, Qf = {
  tips: "string",
  tipsActive: "string",
  tipsDisabled: "string",
  transform: "string",
  modal: "string",
  clockAnimation: "string",
  opacity: "string",
  timepickerWrapper: "string",
  timepickerContainer: "string",
  timepickerElements: "string",
  timepickerHead: "string",
  timepickerHeadContent: "string",
  timepickerCurrentWrapper: "string",
  timepickerCurrentButtonWrapper: "string",
  timepickerCurrentButton: "string",
  timepickerDot: "string",
  timepickerModeWrapper: "string",
  timepickerModeAm: "string",
  timepickerModePm: "string",
  timepickerClockWrapper: "string",
  timepickerClock: "string",
  timepickerMiddleDot: "string",
  timepickerHandPointer: "string",
  timepickerPointerCircle: "string",
  timepickerClockInner: "string",
  timepickerFooterWrapper: "string",
  timepickerFooterButton: "string",
  timepickerInlineWrapper: "string",
  timepickerInlineContainer: "string",
  timepickerInlineElements: "string",
  timepickerInlineHead: "string",
  timepickerInlineHeadContent: "string",
  timepickerInlineHourWrapper: "string",
  timepickerCurrentMinuteWrapper: "string",
  timepickerInlineIconUp: "string",
  timepickerInlineIconSvg: "string",
  timepickerInlineCurrentButton: "string",
  timepickerInlineIconDown: "string",
  timepickerInlineDot: "string",
  timepickerInlineModeWrapper: "string",
  timepickerInlineModeAm: "string",
  timepickerInlineModePm: "string",
  timepickerInlineSubmitButton: "string",
  timepickerToggleButton: "string",
  invalidFeedback: "string"
};
class Y0 {
  constructor(t, e = {}, i) {
    At(this, "_toggleAmPm", (t) => {
      t === "PM" ? (this._isPmEnabled = !0, this._isAmEnabled = !1) : t === "AM" && (this._isPmEnabled = !1, this._isAmEnabled = !0);
    });
    At(this, "_toggleBackgroundColorCircle", (t) => {
      if (this._modal.querySelector(`${t}[${H}]`) !== null) {
        c.addStyle(this._circle, {
          backgroundColor: "#1976d2"
        });
        return;
      }
      c.addStyle(this._circle, {
        backgroundColor: "transparent"
      });
    });
    At(this, "_toggleClassActive", (t, { textContent: e }, i) => {
      const n = [...t].find(
        (o) => Number(o) === Number(e)
      );
      return i.forEach((o) => {
        if (!o.hasAttribute(Yt)) {
          if (o.textContent === n) {
            c.addClass(o, this._classes.tipsActive), o.setAttribute(H, "");
            return;
          }
          c.removeClass(o, this._classes.tipsActive), o.removeAttribute(H);
        }
      });
    });
    At(this, "_makeMinutesDegrees", (t, e) => {
      const { increment: i } = this._options;
      return t < 0 ? (e = Math.round(360 + t / 6) % 60, t = 360 + Math.round(t / 6) * 6) : (e = Math.round(t / 6) % 60, t = Math.round(t / 6) * 6), i && (t = Math.round(t / 30) * 30, e = Math.round(t / 6) * 6 / 6, e === 60 && (e = "00")), t >= 360 && (t = 0), {
        degrees: t,
        minute: e,
        addDegrees: i ? 30 : 6
      };
    });
    At(this, "_makeHourDegrees", (t, e, i) => {
      if (t)
        return this._hasTargetInnerClass(t) ? e < 0 ? (i = Math.round(360 + e / 30) % 24, e = 360 + e) : (i = Math.round(e / 30) + 12, i === 12 && (i = "00")) : e < 0 ? (i = Math.round(360 + e / 30) % 12, e = 360 + e) : (i = Math.round(e / 30) % 12, (i === 0 || i > 12) && (i = 12)), e >= 360 && (e = 0), {
          degrees: e,
          hour: i,
          addDegrees: 30
        };
    });
    At(this, "_makeInnerHoursDegrees", (t, e) => (t < 0 ? (e = Math.round(360 + t / 30) % 24, t = 360 + t) : (e = Math.round(t / 30) + 12, e === 12 && (e = "00")), {
      degrees: t,
      hour: e,
      addDegrees: 30
    }));
    At(this, "_getAppendClock", (t = [], e = `[${ue}]`, i) => {
      let { minTime: n, maxTime: o } = this._options;
      const { inline: r, format12: a, disablePast: l, disableFuture: p } = this._options;
      n = Xt(n, l, a), o = Gt(o, p, a);
      const [u, f, _] = R(
        o,
        !1
      ), [m, g, v] = R(
        n,
        !1
      );
      !r && a && this._isInvalidTimeFormat && !this._AM.hasAttribute(H) && (c.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
      const b = d.findOne(e), C = 360 / t.length;
      function y(w) {
        return w * (Math.PI / 180);
      }
      if (b === null)
        return;
      const E = (b.offsetWidth - 32) / 2, T = (b.offsetHeight - 32) / 2, A = E - 4;
      setTimeout(() => {
        let w;
        a && (w = d.findOne(
          `${rs}[${H}]`
        ).textContent), this._handleDisablingTipsMinTime(
          w,
          v,
          g,
          m
        ), this._handleDisablingTipsMaxTime(
          w,
          _,
          f,
          u
        );
      }, 0), [...t].forEach((w, S) => {
        const k = y(S * C), x = D("span"), $ = D("span");
        $.innerHTML = w, c.addClass(x, this._classes.tips), x.setAttribute(i, "");
        const O = x.offsetWidth, M = x.offsetHeight;
        return c.addStyle(x, {
          left: `${E + Math.sin(k) * A - O}px`,
          bottom: `${T + Math.cos(k) * A - M}px`
        }), t.includes("05") && x.setAttribute(X, ""), t.includes("13") ? $.setAttribute(cs, "") : $.setAttribute(ls, ""), x.appendChild($), b.appendChild(x);
      });
    });
    this._element = t, this._element && I.setData(t, Ss, this), this._document = document, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._currentTime = null, this._toggleButtonId = bt("timepicker-toggle-"), this.hoursArray = [
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ], this.innerHours = [
      "00",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ], this.minutesArray = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ], this.input = d.findOne("input", this._element), this.dataWithIcon = t.dataset.withIcon, this.dataToggle = t.dataset.toggle, this.customIcon = d.findOne(
      Vf,
      this._element
    ), this._checkToggleButton(), this.inputFormatShow = d.findOne(
      Wf,
      this._element
    ), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = d.findOne(
      Qr,
      this._element
    ), this.toggleElement = Object.values(
      t.querySelector(Qr).dataset
    )[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format24 && (this._options.format12 = !1, this._currentTime = Xr(this._inputValue)), this._options.format12 && (this._options.format24 = !1, this._currentTime = be(this._inputValue)), this._options.readOnly && this.input.setAttribute(zf, !0), this.inputFormat === "true" && this.inputFormat !== "" && (this._options.format12 = !1, this._options.format24 = !0, this._currentTime = Xr(this._inputValue)), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this.init(), this._isHours = !0, this._isMinutes = !1, this._isInvalidTimeFormat = !1, this._isMouseMove = !1, this._isInner = !1, this._isAmEnabled = !1, this._isPmEnabled = !1, this._options.format12 && !this._options.defaultTime && (this._isPmEnabled = !0), this._objWithDataOnChange = { degrees: null }, this._scrollBar = new ki();
  }
  // Getters
  static get NAME() {
    return yi;
  }
  // Public
  init() {
    const { format12: t, format24: e, enableValidation: i } = this._options;
    let n, o, r;
    if (this.input.setAttribute(Uf, ""), this._currentTime !== void 0) {
      const { hours: a, minutes: l, amOrPm: p } = this._currentTime;
      n = Number(a) < 10 ? 0 : "", o = `${n}${Number(a)}:${l}`, r = p, t ? this.input.value = `${o} ${r}` : e && (this.input.value = `${o}`);
    } else
      n = "", o = "", r = "", this.input.value = "";
    this.input.value.length > 0 && this.input.value !== "" && (this.input.setAttribute(H, ""), h.trigger(this.input, "input")), !(this._options === null && this._element === null) && (i && this._getValidate("keydown change blur focus"), this._handleOpen(), this._listenToToggleKeydown());
  }
  dispose() {
    this._removeModal(), this._element !== null && I.removeData(this._element, Ss), setTimeout(() => {
      this._element = null, this._options = null, this.input = null, this._focusTrap = null;
    }, 350), h.off(
      this._document,
      "click",
      `[data-te-toggle='${this.toggleElement}']`
    ), h.off(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`
    );
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  // private
  _checkToggleButton() {
    this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
  }
  _appendToggleButton() {
    const t = $f(
      this._options,
      this._toggleButtonId,
      this._classes
    );
    this.input.insertAdjacentHTML("afterend", t);
  }
  _getDomElements() {
    this._hour = d.findOne(`[${as}]`), this._minutes = d.findOne(`[${Ln}]`), this._AM = d.findOne(Bf), this._PM = d.findOne(Hf), this._wrapper = d.findOne(`[${$n}]`), this._modal = d.findOne(`[${pa}]`), this._hand = d.findOne(`[${Mn}]`), this._circle = d.findOne(`[${Nn}]`), this._clock = d.findOne(`[${ue}]`), this._clockInner = d.findOne(
      `[${ai}]`
    );
  }
  _handlerMaxMinHoursOptions(t, e, i, n, o, r) {
    if (!e && !i)
      return !0;
    const { format24: a, format12: l, disablePast: p, disableFuture: u } = this._options, { _isAmEnabled: f, _isPmEnabled: _ } = this, m = r.keyCode, g = r.target.hasAttribute(ai) || r.target.hasAttribute(at) || r.target.hasAttribute(cs);
    i = Xt(i, p, l), e = Gt(e, u, l), typeof e != "number" && (e = R(e, !1)[0]);
    const v = e !== "" ? e * 30 : "", b = i !== "" ? i * 30 : "";
    t < 0 && (t = 360 + t), t = t === 360 ? 0 : t;
    const C = () => {
      const S = document.querySelectorAll(
        `[${ls}]`
      ), k = document.querySelectorAll(
        `[${cs}]`
      ), x = Pf(this._hour.innerText);
      let $, O, M;
      return m === rt ? O = 1 : m === z && (O = -1), x === 12 && m === rt ? M = 1 : x === 0 && m === rt ? M = 13 : x === 0 && m === z ? M = 23 : x === 13 && m === z ? M = 0 : x === 1 && m === z ? M = 12 : M = x + O, S.forEach((P) => {
        Number(P.textContent) === M && ($ = P);
      }), k.forEach((P) => {
        Number(P.textContent) === M && ($ = P);
      }), !$.parentElement.hasAttribute(Yt);
    }, y = () => {
      const S = i !== "" && i > 12 ? (i - 12) * 30 : "", k = e !== "" && e > 12 ? (e - 12) * 30 : "";
      if (!(S && t < S || k && t > k || e && e < 12))
        return !0;
    };
    if (a && r.type !== "keydown" && g)
      return y();
    if (r.type === "keydown")
      return C();
    const E = !o || o === "PM" && _ || i !== "" && o === "AM" && f, T = !n || n === "PM" && _ || e !== "" && n === "AM" && f, A = () => {
      const S = b === 360 && l ? 0 : b;
      if (i) {
        if (o === "PM" && f || E && t < S)
          return;
      } else
        return !0;
      return !0;
    }, w = () => {
      const S = v === 360 && l ? 0 : v;
      if (e) {
        if (n === "AM" && _ || T && t > S)
          return;
      } else
        return !0;
      return !0;
    };
    return A() && w();
  }
  _handleKeyboard() {
    h.on(this._document, ns, "", (t) => {
      let e, i, n;
      const {
        increment: o,
        maxTime: r,
        minTime: a,
        format12: l,
        disablePast: p,
        disableFuture: u
      } = this._options;
      let f = R(a, !1)[0], _ = R(r, !1)[0];
      const m = R(a, !1)[2], g = R(r, !1)[2];
      f = Xt(f, p, l), _ = Gt(_, u, l), typeof _ != "number" && (_ = R(_, !1)[0]);
      const v = d.findOne(`[${X}]`) === null, b = d.findOne(`[${at}]`) !== null, C = Number(this._hand.style.transform.replace(/[^\d-]/g, "")), y = d.find(
        `[${X}]`,
        this._modal
      ), E = d.find(
        `[${K}]`,
        this._modal
      ), T = d.find(
        `[${at}]`,
        this._modal
      );
      let A = this._makeHourDegrees(t.target, C, e).hour;
      const { degrees: w, addDegrees: S } = this._makeHourDegrees(
        t.target,
        C,
        e
      );
      let { minute: k, degrees: x } = this._makeMinutesDegrees(C, i);
      const $ = this._makeMinutesDegrees(
        C,
        i
      ).addDegrees;
      let { hour: O } = this._makeInnerHoursDegrees(
        C,
        n
      );
      if (t.keyCode === Li) {
        const M = d.findOne(
          `[${kn}]`,
          this._modal
        );
        h.trigger(M, "click");
      } else if (v) {
        if (b && (t.keyCode === Be && (this._isInner = !1, c.addStyle(this._hand, {
          height: "calc(40% + 1px)"
        }), this._hour.textContent = this._setHourOrMinute(
          A > 12 ? 1 : A
        ), this._toggleClassActive(this.hoursArray, this._hour, E), this._toggleClassActive(this.innerHours, this._hour, T)), t.keyCode === Pe && (this._isInner = !0, c.addStyle(this._hand, {
          height: "21.5%"
        }), this._hour.textContent = this._setHourOrMinute(
          O >= 24 || O === "00" ? 0 : O
        ), this._toggleClassActive(this.innerHours, this._hour, T), this._toggleClassActive(
          this.hoursArray,
          this._hour - 1,
          E
        ))), t.keyCode === rt) {
          if (!this._handlerMaxMinHoursOptions(
            w + 30,
            _,
            f,
            g,
            m,
            t
          ))
            return;
          c.addStyle(this._hand, {
            transform: `rotateZ(${w + S}deg)`
          }), this._isInner ? (O += 1, O === 24 ? O = 0 : (O === 25 || O === "001") && (O = 13), this._hour.textContent = this._setHourOrMinute(O), this._toggleClassActive(this.innerHours, this._hour, T)) : (A += 1, this._hour.textContent = this._setHourOrMinute(
            A > 12 ? 1 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, E));
        }
        if (t.keyCode === z) {
          if (!this._handlerMaxMinHoursOptions(
            w - 30,
            _,
            f,
            g,
            m,
            t
          ))
            return;
          c.addStyle(this._hand, {
            transform: `rotateZ(${w - S}deg)`
          }), this._isInner ? (O -= 1, O === 12 ? O = 0 : O === -1 && (O = 23), this._hour.textContent = this._setHourOrMinute(O), this._toggleClassActive(this.innerHours, this._hour, T)) : (A -= 1, this._hour.textContent = this._setHourOrMinute(
            A === 0 ? 12 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, E));
        }
      } else
        t.keyCode === rt && (x += $, c.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), k += 1, o && (k += 4, k === "0014" && (k = 5)), this._minutes.textContent = this._setHourOrMinute(
          k > 59 ? 0 : k
        ), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          y
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        )), t.keyCode === z && (x -= $, c.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), o ? k -= 5 : k -= 1, k === -1 ? k = 59 : k === -5 && (k = 55), this._minutes.textContent = this._setHourOrMinute(k), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          y
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        ));
    });
  }
  _setActiveClassToTipsOnOpen(t, ...e) {
    if (!this._isInvalidTimeFormat)
      if (this._options.format24) {
        const i = d.find(
          `[${K}]`,
          this._modal
        ), n = d.find(
          `[${at}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t), this._addActiveClassToTip(n, t);
      } else {
        [...e].filter((n) => (n === "PM" ? (c.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")) : n === "AM" ? (c.addClass(this._AM, this._classes.opacity), this._AM.setAttribute(H, "")) : (c.removeClass(this._AM, this._classes.opacity), c.removeClass(this._PM, this._classes.opacity), this._AM.removeAttribute(H), this._PM.removeAttribute(H)), n));
        const i = d.find(
          `[${K}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t);
      }
  }
  _setTipsAndTimesDependOnInputValue(t, e) {
    const { inline: i, format12: n } = this._options;
    if (this._isInvalidTimeFormat)
      this._hour.textContent = "12", this._minutes.textContent = "00", i || c.addStyle(this._hand, {
        transform: "rotateZ(0deg)"
      }), n && (c.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
    else {
      const o = t > 12 ? t * 30 - 360 : t * 30;
      this._hour.textContent = t, this._minutes.textContent = e, i || (c.addStyle(this._hand, {
        transform: `rotateZ(${o}deg)`
      }), c.addStyle(this._circle, {
        backgroundColor: "#1976d2"
      }), (Number(t) > 12 || t === "00") && c.addStyle(this._hand, {
        height: "21.5%"
      }));
    }
  }
  _listenToToggleKeydown() {
    h.on(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`,
      (t) => {
        t.keyCode === lt && (t.preventDefault(), h.trigger(this.elementToggle, "click"));
      }
    );
  }
  _handleOpen() {
    const t = this._getContainer();
    oe.on(
      this._element,
      "click",
      `[data-te-toggle='${this.toggleElement}']`,
      (e) => {
        if (this._options === null)
          return;
        const i = c.getDataAttribute(this.input, "toggle") !== null ? 200 : 0;
        setTimeout(() => {
          c.addStyle(this.elementToggle, {
            pointerEvents: "none"
          }), this.elementToggle.blur();
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const { modalID: o, inline: r, format12: a } = this._options, [l, p, u] = n, f = D("div");
          if ((Number(l) > 12 || l === "00") && (this._isInner = !0), this.input.blur(), e.target.blur(), f.innerHTML = Df(this._options, this._classes), c.addClass(f, this._classes.modal), f.setAttribute(pa, ""), f.setAttribute("role", "dialog"), f.setAttribute("tabIndex", "-1"), f.setAttribute("id", o), r ? (this._popper = Ee(this.input, f, {
            placement: "bottom-start"
          }), t.appendChild(f)) : (t.appendChild(f), this._scrollBar.hide()), this._getDomElements(), this._animations ? this._toggleBackdropAnimation() : c.addClass(this._wrapper, this._classes.opacity), this._setActiveClassToTipsOnOpen(l, p, u), this._appendTimes(), this._setActiveClassToTipsOnOpen(l, p, u), this._setTipsAndTimesDependOnInputValue(l, p), this.input.value === "") {
            const _ = d.find(
              `[${K}]`,
              this._modal
            );
            a && (c.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")), this._hour.textContent = "12", this._minutes.textContent = "00", this._addActiveClassToTip(
              _,
              Number(this._hour.textContent)
            );
          }
          if (this._handleSwitchTimeMode(), this._handleOkButton(), this._handleClose(), r)
            this._handleHoverInlineBtn(), this._handleDocumentClickInline(), this._handleInlineClicks();
          else {
            this._handleSwitchHourMinute(), this._handleClockClick(), this._handleKeyboard();
            const _ = document.querySelector(
              `${os}[${H}]`
            );
            c.addClass(_, this._classes.opacity), c.addStyle(this._hour, {
              pointerEvents: "none"
            }), c.addStyle(this._minutes, {
              pointerEvents: ""
            });
          }
          this._focusTrap = new $i(this._wrapper, {
            event: "keydown",
            condition: ({ key: _ }) => _ === "Tab"
          }), this._focusTrap.trap();
        }, i);
      }
    );
  }
  _handleInlineClicks() {
    let t, e;
    const i = (_) => {
      let m = _;
      return m > 59 ? m = 0 : m < 0 && (m = 59), m;
    }, n = (_) => {
      let m = _;
      return this._options.format24 ? (m > 24 ? m = 1 : m < 0 && (m = 23), m > 23 && (m = 0)) : (m > 12 ? m = 1 : m < 1 && (m = 12), m > 12 && (m = 1)), m;
    }, o = (_) => {
      const m = n(_);
      this._hour.textContent = this._setHourOrMinute(m);
    }, r = (_) => {
      const m = i(_);
      this._minutes.textContent = this._setHourOrMinute(m);
    }, a = () => {
      t += 1, o(t);
    }, l = () => {
      e += 1, r(e);
    }, p = () => {
      t -= 1, o(t);
    }, u = () => {
      e -= 1, r(e);
    }, f = (_) => {
      clearInterval(this._interval), this._interval = setInterval(_, 100);
    };
    oe.on(
      this._modal,
      "click mousedown mouseup touchstart touchend contextmenu",
      `[${Sn}], [${In}]`,
      (_) => {
        t = Number(this._hour.textContent), e = Number(this._minutes.textContent);
        const { target: m, type: g } = _, v = g === "mousedown" || g === "touchstart";
        m.closest(`[${Sn}]`) ? m.closest(`[${Sn}]`).parentNode.hasAttribute(ca) ? v ? f(a) : g === "mouseup" || g === "touchend" || g === "contextmenu" ? clearInterval(this._interval) : a() : v ? f(l) : g === "mouseup" || g === "touchend" || g === "contextmenu" ? clearInterval(this._interval) : l() : m.closest(`[${In}]`) && (m.closest(`[${In}]`).parentNode.hasAttribute(ca) ? v ? f(p) : g === "mouseup" || g === "touchend" ? clearInterval(this._interval) : p() : v ? f(u) : g === "mouseup" || g === "touchend" ? clearInterval(this._interval) : u());
      }
    ), h.on(window, ns, (_) => {
      const m = _.code, g = document.activeElement.hasAttribute(as), v = document.activeElement.hasAttribute(
        Ln
      ), b = document.activeElement === document.body;
      switch (t = Number(this._hour.textContent), e = Number(this._minutes.textContent), m) {
        case "ArrowUp":
          _.preventDefault(), b || g ? (this._hour.focus(), a()) : v && l();
          break;
        case "ArrowDown":
          _.preventDefault(), b || g ? (this._hour.focus(), p()) : v && u();
          break;
      }
    });
  }
  _handleClose() {
    h.on(
      this._modal,
      "click",
      `[${$n}], [${kn}], [${la}]`,
      ({ target: t }) => {
        const { closeModalOnBackdropClick: e } = this._options, i = () => {
          var n;
          c.addStyle(this.elementToggle, {
            pointerEvents: "auto"
          }), this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), (n = this._focusTrap) == null || n.disable(), this._focusTrap = null, this.elementToggle ? this.elementToggle.focus() : this.input && this.input.focus();
        };
        if (t.hasAttribute(la)) {
          this._toggleAmPm("PM"), this.input.value = "", this.input.removeAttribute(H);
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const [o, r, a] = n;
          this._setTipsAndTimesDependOnInputValue("12", "00"), this._setActiveClassToTipsOnOpen(o, r, a), this._hour.click();
        } else
          (t.hasAttribute(kn) || t.hasAttribute(On) || t.hasAttribute($n) && e) && i();
      }
    );
  }
  showValueInput() {
    return this.input.value;
  }
  _handleOkButton() {
    oe.on(
      this._modal,
      "click",
      `[${On}]`,
      () => {
        let { maxTime: t, minTime: e } = this._options;
        const {
          format12: i,
          format24: n,
          readOnly: o,
          focusInputAfterApprove: r,
          disablePast: a,
          disableFuture: l
        } = this._options, p = this._document.querySelector(
          `${rs}[${H}]`
        ), u = `${this._hour.textContent}:${this._minutes.textContent}`, f = Number(this._hour.textContent), _ = f === 12 && i ? 0 : f, m = Number(this._minutes.textContent);
        e = Xt(e, a, i), t = Gt(t, l, i);
        let [g, v, b] = R(
          t,
          !1
        ), [C, y, E] = R(
          e,
          !1
        );
        C = C === "12" && i ? "00" : C, g = g === "12" && i ? "00" : g;
        const T = _ < Number(C), A = _ > Number(g);
        let w = !0;
        p && (w = b === p.textContent);
        let S = !0;
        p && (S = E === p.textContent);
        const k = m > v && _ === Number(g), x = m < y && _ === Number(C);
        if (this.input.setAttribute(H, ""), c.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), t !== "") {
          if (w && (A || k))
            return;
          if (b === "AM" && p.textContent === "PM")
            return;
        }
        e !== "" && (S && (T || x) || E === "PM" && p.textContent === "AM") || Mf(
          this._options,
          this.input,
          this._hour.textContent
        ) !== void 0 && (this._isInvalidTimeFormat && this.input.removeAttribute(Dn), !o && r && this.input.focus(), c.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), n ? this.input.value = u : p === null ? this.input.value = `${u} PM` : this.input.value = `${u} ${p.textContent}`, this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), h.trigger(this.input, "input.te.timepicker"), h.trigger(this.input, "input"));
      }
    );
  }
  _handleHoverInlineBtn() {
    oe.on(
      this._modal,
      "mouseover mouseleave",
      `[${Kf}]`,
      ({ type: t, target: e }) => {
        const i = d.find(
          `[${Yf}]`,
          this._modal
        ), n = d.find(
          `[${jf}]`,
          this._modal
        ), o = (l, p) => l.forEach((u) => {
          if (p) {
            c.addClass(u, this._classes.opacity), u.setAttribute(H, "");
            return;
          }
          c.removeClass(u, this._classes.opacity), u.removeAttribute(H);
        }), a = e.hasAttribute(as) ? i : n;
        o(a, t === "mouseover");
      }
    );
  }
  _handleDocumentClickInline() {
    h.on(document, Jr, ({ target: t }) => {
      if (this._modal && !this._modal.contains(t) && !t.hasAttribute(Ff)) {
        if (clearInterval(this._interval), c.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), this._removeModal(), !this._animations)
          return;
        this._toggleBackdropAnimation(!0);
      }
    });
  }
  _handleSwitchHourMinute() {
    Lf(
      "click",
      os,
      this._classes
    ), h.on(
      this._modal,
      "click",
      os,
      () => {
        const { format24: t } = this._options, e = d.find(
          os,
          this._modal
        ), i = d.find(
          `[${X}]`,
          this._modal
        ), n = d.find(
          `[${K}]`,
          this._modal
        ), o = d.find(
          `[${at}]`,
          this._modal
        ), r = Number(this._hour.textContent), a = Number(this._minutes.textContent), l = (p, u) => {
          n.forEach((_) => _.remove()), i.forEach((_) => _.remove()), c.addClass(this._hand, this._classes.transform), setTimeout(() => {
            c.removeClass(this._hand, this._classes.transform);
          }, 401), this._getAppendClock(p, `[${ue}]`, u);
          const f = () => {
            const _ = d.find(
              `[${K}]`,
              this._modal
            ), m = d.find(
              `[${X}]`,
              this._modal
            );
            this._addActiveClassToTip(_, r), this._addActiveClassToTip(m, a);
          };
          if (!t)
            setTimeout(() => {
              f();
            }, 401);
          else {
            const _ = d.find(
              `[${at}]`,
              this._modal
            );
            setTimeout(() => {
              this._addActiveClassToTip(_, r), f();
            }, 401);
          }
        };
        e.forEach((p) => {
          p.hasAttribute(H) && (p.hasAttribute(Ln) ? (c.addClass(this._hand, this._classes.transform), c.addStyle(this._hand, {
            transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
            height: "calc(40% + 1px)"
          }), t && o.length > 0 && o.forEach((u) => u.remove()), l(
            this.minutesArray,
            X
          ), this._hour.style.pointerEvents = "", this._minutes.style.pointerEvents = "none") : p.hasAttribute(as) && (c.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30}deg)`
          }), Number(this._hour.textContent) > 12 ? (c.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30 - 360}deg)`,
            height: "21.5%"
          }), Number(this._hour.textContent) > 12 && c.addStyle(this._hand, {
            height: "21.5%"
          })) : c.addStyle(this._hand, {
            height: "calc(40% + 1px)"
          }), t && this._getAppendClock(
            this.innerHours,
            `[${ai}]`,
            at
          ), o.length > 0 && o.forEach((u) => u.remove()), l(
            this.hoursArray,
            K
          ), c.addStyle(this._hour, {
            pointerEvents: "none"
          }), c.addStyle(this._minutes, {
            pointerEvents: ""
          })));
        });
      }
    );
  }
  _handleDisablingTipsMaxTime(t, e, i, n) {
    if (!this._options.maxTime && !this._options.disableFuture)
      return;
    const o = d.find(
      `[${K}]`
    ), r = d.find(
      `[${at}]`
    ), a = d.find(
      `[${X}]`
    );
    if (!e || e === t) {
      qr(
        r,
        n,
        this._classes,
        this._options.format12
      ), qr(
        o,
        n,
        this._classes,
        this._options.format12
      ), Nf(
        a,
        i,
        n,
        this._hour.textContent,
        this._classes,
        this._options.format12
      );
      return;
    }
    e === "AM" && t === "PM" && (o.forEach((l) => {
      c.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }), a.forEach((l) => {
      c.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }));
  }
  _handleDisablingTipsMinTime(t, e, i, n) {
    if (!this._options.minTime && !this._options.disablePast)
      return;
    const o = d.find(
      `[${K}]`
    ), r = d.find(
      `[${at}]`
    ), a = d.find(
      `[${X}]`
    );
    !e || e === t ? (Zr(
      o,
      n,
      this._classes,
      this._options.format12
    ), Zr(
      r,
      n,
      this._classes,
      this._options.format12
    ), Rf(
      a,
      i,
      n,
      this._hour.textContent,
      this._classes,
      this._options.format12
    )) : e === "PM" && t === "AM" && (o.forEach((l) => {
      c.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }), a.forEach((l) => {
      c.addClass(l, this._classes.tipsDisabled), l.setAttribute(Yt, "");
    }));
  }
  _handleSwitchTimeMode() {
    h.on(
      document,
      "click",
      rs,
      ({ target: t }) => {
        let { maxTime: e, minTime: i } = this._options;
        const { disablePast: n, disableFuture: o, format12: r } = this._options;
        i = Xt(i, n, r), e = Gt(e, o, r);
        const [a, l, p] = R(
          e,
          !1
        ), [u, f, _] = R(
          i,
          !1
        ), m = d.find(
          `[${K}]`
        ), g = d.find(
          `[${X}]`
        );
        (() => {
          m.forEach((b) => {
            c.removeClass(b, this._classes.tipsDisabled), b.removeAttribute(Yt);
          }), g.forEach((b) => {
            c.removeClass(b, this._classes.tipsDisabled), b.removeAttribute(Yt);
          });
        })(), this._handleDisablingTipsMinTime(
          t.textContent,
          _,
          f,
          u
        ), this._handleDisablingTipsMaxTime(
          t.textContent,
          p,
          l,
          a
        ), this._toggleAmPm(t.textContent), t.hasAttribute(H) || (d.find(
          rs
        ).forEach((C) => {
          C.hasAttribute(H) && (c.removeClass(C, this._classes.opacity), C.removeAttribute(H));
        }), c.addClass(t, this._classes.opacity), t.setAttribute(H, ""));
      }
    );
  }
  _handleClockClick() {
    let { maxTime: t, minTime: e } = this._options;
    const { disablePast: i, disableFuture: n, format12: o } = this._options;
    e = Xt(e, i, o), t = Gt(t, n, o);
    const r = R(t, !1)[2], a = R(e, !1)[2], l = R(t, !1)[0], p = R(e, !1)[0], u = d.findOne(
      `[${da}]`
    );
    oe.on(
      document,
      `${ta} ${ea} ${ia} ${sa} ${na} ${aa} ${oa} ${ra}`,
      "",
      (f) => {
        ss() || f.preventDefault();
        const { type: _, target: m } = f, { closeModalOnMinutesClick: g, switchHoursToMinutesOnClick: v } = this._options, b = d.findOne(
          `[${X}]`,
          this._modal
        ) !== null, C = d.findOne(
          `[${K}]`,
          this._modal
        ) !== null, y = d.findOne(
          `[${at}]`,
          this._modal
        ) !== null, E = d.find(
          `[${X}]`,
          this._modal
        ), T = Gr(f, u), A = u.offsetWidth / 2;
        let w = Math.atan2(T.y - A, T.x - A);
        if (ss()) {
          const $ = Gr(f, u, !0);
          w = Math.atan2($.y - A, $.x - A);
        }
        let S = null, k = null, x = null;
        if (_ === "mousedown" || _ === "mousemove" || _ === "touchmove" || _ === "touchstart")
          (_ === "mousedown" || _ === "touchstart" || _ === "touchmove") && (this._hasTargetInnerClass(m) || m.hasAttribute(da) || m.hasAttribute(ue) || m.hasAttribute(X) || m.hasAttribute(K) || m.hasAttribute(Nn) || m.hasAttribute(Mn) || m.hasAttribute(ua) || m.hasAttribute(ls)) && (this._isMouseMove = !0, ss() && f.touches && (S = f.touches[0].clientX, k = f.touches[0].clientY, x = document.elementFromPoint(S, k)));
        else if (_ === "mouseup" || _ === "touchend") {
          if (this._isMouseMove = !1, this._hasTargetInnerClass(m) || m.hasAttribute(ue) || m.hasAttribute(K) || m.hasAttribute(Nn) || m.hasAttribute(Mn) || m.hasAttribute(ua) || m.hasAttribute(ls)) {
            if ((C || y) && v) {
              const $ = Number(this._hour.textContent) > l || Number(this._hour.textContent) < p;
              if (this._options.format24 && l !== "" && p !== "" && $)
                return;
              if (this._options.format24 && p !== "" && Number(this._hour.textContent) < p)
                return;
            }
            h.trigger(this._minutes, "click");
          }
          if (b && g) {
            const $ = d.findOne(
              `[${On}]`,
              this._modal
            );
            h.trigger($, "click");
          }
        }
        if (b) {
          let $;
          const O = Math.trunc(w * 180 / Math.PI) + 90, { degrees: M, minute: P } = this._makeMinutesDegrees(O, $);
          if (this._handlerMaxMinMinutesOptions(M, P) === void 0)
            return;
          const { degrees: tt, minute: et } = this._handlerMaxMinMinutesOptions(M, P);
          if (this._isMouseMove) {
            if (c.addStyle(this._hand, {
              transform: `rotateZ(${tt}deg)`
            }), et === void 0)
              return;
            const U = () => et >= 10 || et === "00" ? et : `0${et}`;
            this._minutes.textContent = U(), this._toggleClassActive(
              this.minutesArray,
              this._minutes,
              E
            ), this._toggleBackgroundColorCircle(
              `[${X}]`
            ), this._objWithDataOnChange.degreesMinutes = tt, this._objWithDataOnChange.minutes = et;
          }
        }
        if (C || y) {
          let $, O = Math.trunc(w * 180 / Math.PI) + 90;
          if (O = Math.round(O / 30) * 30, c.addStyle(this._circle, {
            backgroundColor: "#1976d2"
          }), this._makeHourDegrees(m, O, $) === void 0)
            return;
          const M = () => {
            if (ss() && O && x) {
              const { degrees: P, hour: tt } = this._makeHourDegrees(x, O, $);
              return this._handleMoveHand(
                x,
                tt,
                P
              );
            } else {
              const { degrees: P, hour: tt } = this._makeHourDegrees(m, O, $);
              return this._handleMoveHand(m, tt, P);
            }
          };
          this._objWithDataOnChange.degreesHours = O, this._handlerMaxMinHoursOptions(
            O,
            l,
            p,
            r,
            a,
            f
          ) && M();
        }
        f.stopPropagation();
      }
    );
  }
  _hasTargetInnerClass(t) {
    return t.hasAttribute(ai) || t.hasAttribute(at) || t.hasAttribute(cs);
  }
  _handleMoveHand(t, e, i) {
    const n = d.find(
      `[${K}]`,
      this._modal
    ), o = d.find(
      `[${at}]`,
      this._modal
    );
    this._isMouseMove && (this._hasTargetInnerClass(t) ? c.addStyle(this._hand, {
      height: "21.5%"
    }) : c.addStyle(this._hand, {
      height: "calc(40% + 1px)"
    }), c.addStyle(this._hand, {
      transform: `rotateZ(${i}deg)`
    }), this._hour.textContent = e >= 10 || e === "00" ? e : `0${e}`, this._toggleClassActive(this.hoursArray, this._hour, n), this._toggleClassActive(this.innerHours, this._hour, o), this._objWithDataOnChange.hour = e >= 10 || e === "00" ? e : `0${e}`);
  }
  _handlerMaxMinMinutesOptions(t, e) {
    let { maxTime: i, minTime: n } = this._options;
    const { format12: o, increment: r, disablePast: a, disableFuture: l } = this._options;
    n = Xt(n, a, o), i = Gt(i, l, o);
    const p = R(i, !1)[1], u = R(n, !1)[1], f = R(i, !1)[0], _ = R(n, !1)[0], m = _ === "12" && o ? "0" : _, g = f === "12" && o ? "0" : f, v = R(i, !1)[2], b = R(n, !1)[2], C = p !== "" ? p * 6 : "", y = u !== "" ? u * 6 : "", E = Number(this._hour.textContent), T = E === 12 && o ? 0 : E;
    if (!v && !b) {
      if (i !== "" && n !== "") {
        if (Number(g) === T && t > C || Number(m) === T && t < y)
          return t;
      } else if (n !== "" && T <= Number(m)) {
        if (t <= y - 6)
          return t;
      } else if (i !== "" && T >= Number(g) && t >= C + 6)
        return t;
    } else {
      if (n !== "") {
        if (b === "PM" && this._isAmEnabled)
          return;
        if (b === "PM" && this._isPmEnabled) {
          if (T < Number(m))
            return;
          if (T <= Number(m) && t <= y - 6)
            return t;
        } else if (b === "AM" && this._isAmEnabled) {
          if (T < Number(m))
            return;
          if (T <= Number(m) && t <= y - 6)
            return t;
        }
      }
      if (i !== "") {
        if (v === "AM" && this._isPmEnabled)
          return;
        if (v === "PM" && this._isPmEnabled) {
          if (T >= Number(g) && t >= C + 6)
            return t;
        } else if (v === "AM" && this._isAmEnabled && T >= Number(g) && t >= C + 6)
          return t;
      }
    }
    return r && (t = Math.round(t / 30) * 30), t < 0 ? t = 360 + t : t >= 360 && (t = 0), {
      degrees: t,
      minute: e
    };
  }
  _removeModal() {
    this._animations ? setTimeout(() => {
      this._removeModalElements(), this._scrollBar.reset();
    }, 300) : (this._removeModalElements(), this._scrollBar.reset()), oe.off(
      this._document,
      `${Jr} ${ns} ${ta} ${ea} ${ia} ${sa} ${na} ${aa} ${oa} ${ra}`
    ), h.off(window, ns);
  }
  _removeModalElements() {
    this._modal && this._modal.remove();
  }
  _toggleBackdropAnimation(t = !1) {
    t ? this._wrapper.classList.add("animate-[fade-out_350ms_ease-in-out]") : (this._wrapper.classList.add("animate-[fade-in_350ms_ease-in-out]"), this._options.inline || c.addClass(this._clock, this._classes.clockAnimation)), setTimeout(() => {
      this._wrapper.classList.remove(
        "animate-[fade-out_350ms_ease-in-out]",
        "animate-[fade-in_350ms_ease-in-out]"
      );
    }, 351);
  }
  _addActiveClassToTip(t, e) {
    t.forEach((i) => {
      Number(i.textContent) === Number(e) && (c.addClass(i, this._classes.tipsActive), i.setAttribute(H, ""));
    });
  }
  _setHourOrMinute(t) {
    return t < 10 ? `0${t}` : t;
  }
  _appendTimes() {
    const { format24: t } = this._options;
    if (t) {
      this._getAppendClock(
        this.hoursArray,
        `[${ue}]`,
        K
      ), this._getAppendClock(
        this.innerHours,
        `[${ai}]`,
        at
      );
      return;
    }
    this._getAppendClock(
      this.hoursArray,
      `[${ue}]`,
      K
    );
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    return t = {
      ...Gf,
      ...e,
      ...t
    }, L(yi, t, qf), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...Zf,
      ...e,
      ...t
    }, L(yi, t, Qf), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getValidate(t) {
    const { invalidLabel: e, format24: i, format12: n, appendValidationInfo: o } = this._options;
    let r;
    o && (r = D("div"), r.setAttribute(ha, ""), c.addClass(r, this._classes.invalidFeedback), r.innerHTML = e), oe.on(this.input, t, ({ target: a }) => {
      if (this._options === null || this.input.value === "")
        return;
      const l = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, p = /^([01]\d|2[0-3])(:[0-5]\d)$/, u = l.test(a.value);
      if (p.test(a.value) !== !0 && i || u !== !0 && n) {
        o && (this.input.setAttribute(Dn, ""), this.input.parentNode.insertBefore(
          r,
          this.input.nextSibling
        )), c.addStyle(a, { marginBottom: 0 }), c.addStyle(r, { bottom: "-23px" }), this._isInvalidTimeFormat = !0;
        return;
      }
      this.input.removeAttribute(Dn), this._isInvalidTimeFormat = !1;
      const _ = d.findOne(
        `[${ha}]`
      );
      _ !== null && _.remove();
    });
  }
  // Static
  static getInstance(t) {
    return I.getData(t, Ss);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Jf = {
  threshold: 10,
  direction: "all"
};
class tm {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = {
      ...Jf,
      ...e
    };
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      h.trigger(this._element, `swipe${r}`), h.trigger(this._element, "swipe", { direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (h.trigger(this._element, `swipe${n[o].direction}`), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
}
class em {
  constructor(t, e = "swipe", i = {}) {
    this._element = t, this._event = e, this.swipe = new tm(t, i), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this);
  }
  dispose() {
    this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler);
  }
  init() {
    this._element.addEventListener(
      "touchstart",
      (t) => this._handleTouchStart(t)
    ), this._element.addEventListener(
      "touchmove",
      (t) => this._handleTouchMove(t)
    ), window.addEventListener("touchend", (t) => this._handleTouchEnd(t));
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
}
const _a = "sidenav", hs = "te.sidenav", im = "data-te-sidenav-rotate-icon-ref", Rn = "[data-te-sidenav-toggle-ref]", sm = "[data-te-collapse-init]", nm = '[data-te-sidenav-slim="true"]', om = '[data-te-sidenav-slim="false"]', rm = "[data-te-sidenav-menu-ref]", ke = "[data-te-sidenav-collapse-ref]", li = "[data-te-sidenav-link-ref]", am = F() ? 100 : -100, lm = F() ? -100 : 100, cm = {
  sidenavAccordion: "(boolean)",
  sidenavBackdrop: "(boolean)",
  sidenavBackdropClass: "(null|string)",
  sidenavCloseOnEsc: "(boolean)",
  sidenavColor: "(string)",
  sidenavContent: "(null|string)",
  sidenavExpandable: "(boolean)",
  sidenavExpandOnHover: "(boolean)",
  sidenavFocusTrap: "(boolean)",
  sidenavHidden: "(boolean)",
  sidenavMode: "(string)",
  sidenavModeBreakpointOver: "(null|string|number)",
  sidenavModeBreakpointSide: "(null|string|number)",
  sidenavModeBreakpointPush: "(null|string|number)",
  sidenavBreakpointSm: "(number)",
  sidenavBreakpointMd: "(number)",
  sidenavBreakpointLg: "(number)",
  sidenavBreakpointXl: "(number)",
  sidenavBreakpoint2xl: "(number)",
  sidenavScrollContainer: "(null|string)",
  sidenavSlim: "(boolean)",
  sidenavSlimCollapsed: "(boolean)",
  sidenavSlimWidth: "(number)",
  sidenavPosition: "(string)",
  sidenavRight: "(boolean)",
  sidenavTransitionDuration: "(number)",
  sidenavWidth: "(number)"
}, hm = {
  sidenavAccordion: !1,
  sidenavBackdrop: !0,
  sidenavBackdropClass: null,
  sidenavCloseOnEsc: !0,
  sidenavColor: "primary",
  sidenavContent: null,
  sidenavExpandable: !0,
  sidenavExpandOnHover: !1,
  sidenavFocusTrap: !0,
  sidenavHidden: !0,
  sidenavMode: "over",
  sidenavModeBreakpointOver: null,
  sidenavModeBreakpointSide: null,
  sidenavModeBreakpointPush: null,
  sidenavBreakpointSm: 640,
  sidenavBreakpointMd: 768,
  sidenavBreakpointLg: 1024,
  sidenavBreakpointXl: 1280,
  sidenavBreakpoint2xl: 1536,
  sidenavScrollContainer: null,
  sidenavSlim: !1,
  sidenavSlimCollapsed: !1,
  sidenavSlimWidth: 77,
  sidenavPosition: "fixed",
  sidenavRight: !1,
  sidenavTransitionDuration: 300,
  sidenavWidth: 240
};
class pi {
  constructor(t, e = {}) {
    At(this, "_addBackdropOnInit", () => {
      this._options.sidenavHidden || (this._backdrop.show(), h.off(this._element, "transitionend", this._addBackdropOnInit));
    });
    this._element = t, this._options = e, this._ID = bt(""), this._content = null, this._initialContentStyle = null, this._slimCollapsed = !1, this._activeNode = null, this._tempSlim = !1, this._backdrop = this._initializeBackDrop(), this._focusTrap = null, this._perfectScrollbar = null, this._touch = null, this._setModeFromBreakpoints(), this.escHandler = (i) => {
      i.keyCode === Li && this.toggler && Lt(this.toggler) && (this._update(!1), h.off(window, "keydown", this.escHandler));
    }, this.hashHandler = () => {
      this._setActiveElements();
    }, t && (I.setData(t, hs, this), this._setup()), this.options.sidenavBackdrop && !this.options.sidenavHidden && this.options.sidenavMode === "over" && h.on(this._element, "transitionend", this._addBackdropOnInit), this._didInit = !1, this._init();
  }
  // Getters
  static get NAME() {
    return _a;
  }
  get container() {
    if (this.options.sidenavPosition === "fixed")
      return d.findOne("body");
    const t = (e) => !e.parentNode || e.parentNode === document ? e : e.parentNode.style.position === "relative" || e.parentNode.classList.contains("relative") ? e.parentNode : t(e.parentNode);
    return t(this._element);
  }
  get isVisible() {
    let t = 0, e = window.innerWidth;
    if (this.options.sidenavPosition !== "fixed") {
      const n = this.container.getBoundingClientRect();
      t = n.x, e = n.x + n.width;
    }
    const { x: i } = this._element.getBoundingClientRect();
    return this.options.sidenavRight ? Math.abs(i - e) > 10 : Math.abs(i - t) < 10;
  }
  get links() {
    return d.find(li, this._element);
  }
  get navigation() {
    return d.find(rm, this._element);
  }
  get options() {
    const t = {
      ...hm,
      ...c.getDataAttributes(this._element),
      ...this._options
    };
    return L(_a, t, cm), t;
  }
  get sidenavStyle() {
    return {
      width: `${this.width}px`,
      height: this.options.sidenavPosition === "fixed" ? "100vh" : "100%",
      position: this.options.sidenavPosition,
      transition: `all ${this.transitionDuration} linear`
    };
  }
  get toggler() {
    return d.find(Rn).find(
      (e) => {
        const i = c.getDataAttribute(e, "target");
        return d.findOne(i) === this._element;
      }
    );
  }
  get transitionDuration() {
    return `${this.options.sidenavTransitionDuration / 1e3}s`;
  }
  get translation() {
    return this.options.sidenavRight ? lm : am;
  }
  get width() {
    return this._slimCollapsed ? this.options.sidenavSlimWidth : this.options.sidenavWidth;
  }
  get isBackdropVisible() {
    return !!this._backdrop._element;
  }
  // Public
  changeMode(t) {
    this._setMode(t);
  }
  dispose() {
    h.off(window, "keydown", this.escHandler), this.options.sidenavBackdrop && this._backdrop.dispose(), h.off(window, "hashchange", this.hashHandler), this._touch.dispose(), I.removeData(this._element, hs), this._element = null;
  }
  hide() {
    this._emitEvents(!1), this._update(!1), this._options.sidenavBackdrop && this.isBackdropVisible && this._backdrop.hide();
  }
  show() {
    this._emitEvents(!0), this._update(!0), this._options.sidenavBackdrop && this._options.sidenavMode === "over" && this._backdrop.show();
  }
  toggle() {
    this._emitEvents(!this.isVisible), this._update(!this.isVisible);
  }
  toggleSlim() {
    this._setSlim(!this._slimCollapsed);
  }
  update(t) {
    this._options = t, this._setup();
  }
  getBreakpoint(t) {
    return this._transformBreakpointValuesToObject()[t];
  }
  // Private
  _init() {
    this._didInit || (h.on(
      document,
      "click",
      Rn,
      pi.toggleSidenav()
    ), this._didInit = !0);
  }
  _transformBreakpointValuesToObject() {
    return {
      sm: this.options.sidenavBreakpointSm,
      md: this.options.sidenavBreakpointMd,
      lg: this.options.sidenavBreakpointLg,
      xl: this.options.sidenavBreakpointXl,
      "2xl": this.options.sidenavBreakpoint2xl
    };
  }
  _setModeFromBreakpoints() {
    const t = window.innerWidth, e = this._transformBreakpointValuesToObject();
    if (t === void 0 || !e)
      return;
    const i = typeof this.options.sidenavModeBreakpointOver == "number" ? t - this.options.sidenavModeBreakpointOver : t - e[this.options.sidenavModeBreakpointOver], n = typeof this.options.sidenavModeBreakpointSide == "number" ? t - this.options.sidenavModeBreakpointSide : t - e[this.options.sidenavModeBreakpointSide], o = typeof this.options.sidenavModeBreakpointPush == "number" ? t - this.options.sidenavModeBreakpointPush : t - e[this.options.sidenavModeBreakpointPush], r = (l, p) => l - p < 0 ? -1 : p - l < 0 ? 1 : 0, a = [i, n, o].filter((l) => l != null && l >= 0).sort(r)[0];
    i > 0 && i === a ? (this._options.sidenavMode = "over", this._options.sidenavHidden = !0) : n > 0 && n === a ? this._options.sidenavMode = "side" : o > 0 && o === a && (this._options.sidenavMode = "push");
  }
  _collapseItems() {
    this.navigation.forEach((t) => {
      d.find(ke, t).forEach((i) => {
        qt.getInstance(i).hide();
      });
    });
  }
  _getOffsetValue(t, { index: e, property: i, offsets: n }) {
    const o = this._getPxValue(
      this._initialContentStyle[e][n[i].property]
    ), r = t ? n[i].value : 0;
    return o + r;
  }
  _getProperty(...t) {
    return t.map((e, i) => i === 0 ? e : e[0].toUpperCase().concat(e.slice(1))).join("");
  }
  _getPxValue(t) {
    return t ? parseFloat(t) : 0;
  }
  _handleSwipe(t, e) {
    e && this._slimCollapsed && this.options.sidenavSlim && this.options.sidenavExpandable ? this.toggleSlim() : e || (this._slimCollapsed || !this.options.sidenavSlim || !this.options.sidenavExpandable ? this.toggler && Lt(this.toggler) && this.toggle() : this.toggleSlim());
  }
  _isActive(t, e) {
    return e ? e === t : t.attributes.href ? new URL(t, window.location.href).href === window.location.href : !1;
  }
  _isAllToBeCollapsed() {
    return d.find(
      sm,
      this._element
    ).filter(
      (i) => i.getAttribute("aria-expanded") === "true"
    ).length === 0;
  }
  _isAllCollapsed() {
    return d.find(ke, this._element).filter(
      (t) => Lt(t)
    ).length === 0;
  }
  _initializeBackDrop() {
    if (!this.options.sidenavBackdrop)
      return;
    const t = this.options.sidenavBackdropClass ? this.options.sidenavBackdropClass.split(" ") : this.options.sidenavPosition ? [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      this.options.sidenavPosition,
      "top-0",
      "left-0",
      "z-50",
      "bg-black/10",
      "dark:bg-black-60",
      "w-full",
      "h-full",
      this._element.id
    ] : null;
    return new So({
      isVisible: this.options.sidenavBackdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      backdropClasses: t,
      clickCallback: () => this.hide()
    });
  }
  _updateBackdrop(t) {
    if (this.options.sidenavMode === "over") {
      t ? this._backdrop.show() : this.isBackdropVisible && this._backdrop.hide();
      return;
    }
    this.isBackdropVisible && this._backdrop.hide();
  }
  _setup() {
    this._setupTouch(), this.options.sidenavFocusTrap && this._setupFocusTrap(), this._setupCollapse(), this.options.sidenavSlim && this._setupSlim(), this._setupInitialStyling(), this._setupScrolling(), this.options.sidenavContent && this._setupContent(), this._setupActiveState(), this._setupRippleEffect(), this.options.sidenavHidden || this._updateOffsets(!0, !0), this.options.sidenavMode === "over" && this._setTabindex(!0);
  }
  _setupActiveState() {
    this._setActiveElements(), this.links.forEach((t) => {
      h.on(t, "click", () => this._setActiveElements(t)), h.on(t, "keydown", (e) => {
        e.keyCode === lt && this._setActiveElements(t);
      });
    }), h.on(window, "hashchange", this.hashHandler);
  }
  _setupCollapse() {
    this.navigation.forEach((t, e) => {
      d.find(ke, t).forEach(
        (n, o) => this._setupCollapseList({ list: n, index: o, menu: t, menuIndex: e })
      );
    });
  }
  _generateCollpaseID(t, e) {
    return `sidenav-collapse-${this._ID}-${e}-${t}`;
  }
  _setupCollapseList({ list: t, index: e, menu: i, menuIndex: n }) {
    const o = this._generateCollpaseID(e, n);
    t.setAttribute("id", o), t.setAttribute("data-te-collapse-item", "");
    const [r] = d.prev(t, li);
    c.setDataAttribute(r, "collapse-init", ""), r.setAttribute("href", `#${o}`), r.setAttribute("role", "button");
    const a = qt.getInstance(t) || new qt(t, {
      toggle: !1,
      parent: this.options.sidenavAccordion ? i : t
    });
    (t.dataset.teSidenavStateShow === "" || t.dataset.teCollapseShow === "") && this._rotateArrow(r, !1), h.on(r, "click", (l) => {
      this._toggleCategory(l, a, t), this._tempSlim && this._isAllToBeCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), h.on(
      t,
      "show.te.collapse",
      () => this._rotateArrow(r, !1)
    ), h.on(
      t,
      "hide.te.collapse",
      () => this._rotateArrow(r, !0)
    ), h.on(t, "shown.te.collapse", () => {
      this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), h.on(t, "hidden.te.collapse", () => {
      this._tempSlim && this._isAllCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    });
  }
  _setupContent() {
    this._content = d.find(this.options.sidenavContent), this._content.forEach((t) => {
      const e = [
        "!p",
        "!m",
        "!px",
        "!pl",
        "!pr",
        "!mx",
        "!ml",
        "!mr",
        "!-p",
        "!-m",
        "!-px",
        "!-pl",
        "!-pr",
        "!-mx",
        "!-ml",
        "!-mr"
      ];
      [...t.classList].filter(
        (n) => e.findIndex((o) => n.includes(o)) >= 0
      ).forEach((n) => t.classList.remove(n));
    }), this._initialContentStyle = this._content.map((t) => {
      const { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r } = window.getComputedStyle(t);
      return { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r };
    });
  }
  _setupFocusTrap() {
    this._focusTrap = new $i(
      this._element,
      {
        event: "keydown",
        condition: (t) => t.keyCode === Oi,
        onlyVisible: !0
      },
      this.toggler
    );
  }
  _setupInitialStyling() {
    this._setColor(), c.style(this._element, this.sidenavStyle);
  }
  _setupScrolling() {
    let t = this._element;
    if (this.options.sidenavScrollContainer) {
      t = d.findOne(
        this.options.sidenavScrollContainer,
        this._element
      );
      const i = Vc(t.parentNode.children).filter(
        (n) => n !== t
      ).reduce((n, o) => n + o.clientHeight, 0);
      c.style(t, {
        maxHeight: `calc(100% - ${i}px)`,
        position: "relative"
      });
    }
    this._perfectScrollbar = new yc(t, {
      suppressScrollX: !0,
      handlers: ["click-rail", "drag-thumb", "wheel", "touch"]
    });
  }
  _setupSlim() {
    this._slimCollapsed = this.options.sidenavSlimCollapsed, this._toggleSlimDisplay(this._slimCollapsed), this.options.sidenavExpandOnHover && (this._element.addEventListener("mouseenter", () => {
      this._slimCollapsed && this._setSlim(!1);
    }), this._element.addEventListener("mouseleave", () => {
      this._slimCollapsed || this._setSlim(!0);
    }));
  }
  _setupRippleEffect() {
    this.links.forEach((t) => {
      let e = Ue.getInstance(t), i = this.options.sidenavColor;
      if (e && e._options.sidenavColor !== this.options.sidenavColor)
        e.dispose();
      else if (e)
        return;
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (i = "white"), e = new Ue(t, { rippleColor: i });
    });
  }
  _setupTouch() {
    this._touch = new em(this._element, "swipe", { threshold: 20 }), this._touch.init(), h.on(
      this._element,
      "swipeleft",
      (t) => this._handleSwipe(t, this.options.sidenavRight)
    ), h.on(
      this._element,
      "swiperight",
      (t) => this._handleSwipe(t, !this.options.sidenavRight)
    );
  }
  _setActive(t, e) {
    t.setAttribute("data-te-sidebar-state-active", ""), this._activeNode && t.removeAttribute("data-te-sidebar-state-active"), this._activeNode = t;
    const [i] = d.parents(
      this._activeNode,
      ke
    );
    if (!i) {
      this._setActiveCategory();
      return;
    }
    const [n] = d.prev(i, li);
    this._setActiveCategory(n), !e && !this._slimCollapsed && qt.getInstance(i).show();
  }
  _setActiveCategory(t) {
    this.navigation.forEach((e) => {
      d.find(ke, e).forEach((n) => {
        const [o] = d.prev(n, li);
        o !== t ? o.removeAttribute("data-te-sidenav-state-active") : o.setAttribute("data-te-sidenav-state-active", "");
      });
    });
  }
  _setActiveElements(t) {
    this.navigation.forEach((e) => {
      d.find(li, e).filter((n) => d.next(n, ke).length === 0).forEach((n) => {
        this._isActive(n, t) && n !== this._activeNode && this._setActive(n, t);
      });
    }), t && this._updateFocus(this.isVisible);
  }
  _setColor() {
    const t = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "light",
      "dark"
    ], { sidenavColor: e } = this.options, i = t.includes(e) ? e : "primary";
    t.forEach((n) => {
      this._element.classList.remove(`sidenav-${n}`);
    }), c.addClass(this._element, `sidenav-${i}`);
  }
  _setContentOffsets(t, e, i) {
    this._content.forEach((n, o) => {
      const r = this._getOffsetValue(t, {
        index: o,
        property: "padding",
        offsets: e
      }), a = this._getOffsetValue(t, {
        index: o,
        property: "margin",
        offsets: e
      }), l = {};
      if (i || (l.transition = `all ${this.transitionDuration} linear`), l[e.padding.property] = `${r}px`, l[e.margin.property] = `${a}px`, c.style(n, l), !!t) {
        if (i) {
          c.style(n, {
            transition: this._initialContentStyle[o].transition
          });
          return;
        }
        h.on(n, "transitionend", () => {
          c.style(n, {
            transition: this._initialContentStyle[o].transition
          });
        });
      }
    });
  }
  _setMode(t) {
    this.options.sidenavMode !== t && (this._options.sidenavMode = t, this._update(this.isVisible));
  }
  _setSlim(t) {
    const e = t ? ["collapse", "collapsed"] : ["expand", "expanded"];
    this._triggerEvents(...e), t && this._collapseItems(), this._slimCollapsed = t, this._toggleSlimDisplay(t), c.style(this._element, { width: `${this.width}px` }), this._updateOffsets(this.isVisible);
  }
  _setTabindex(t) {
    this.links.forEach((e) => {
      e.tabIndex = t ? 0 : -1;
    });
  }
  _emitEvents(t) {
    const e = t ? ["show", "shown"] : ["hide", "hidden"];
    this._triggerEvents(...e);
  }
  _rotateArrow(t, e) {
    const [i] = d.children(t, `[${im}]`);
    i && (e ? c.removeClass(i, "rotate-180") : c.addClass(i, "rotate-180"));
  }
  _toggleCategory(t, e) {
    t.preventDefault(), e.toggle(), this._slimCollapsed && this.options.sidenavExpandable && (this._tempSlim = !0, this._setSlim(!1));
  }
  _toggleSlimDisplay(t) {
    const e = d.find(
      nm,
      this._element
    ), i = d.find(
      om,
      this._element
    ), n = () => {
      e.forEach((o) => {
        c.style(o, {
          display: this._slimCollapsed ? "unset" : "none"
        });
      }), i.forEach((o) => {
        c.style(o, {
          display: this._slimCollapsed ? "none" : "unset"
        });
      });
    };
    t ? setTimeout(
      () => n(),
      this.options.sidenavTransitionDuration
    ) : n();
  }
  async _triggerEvents(t, e) {
    h.trigger(this._element, `${t}.te.sidenav`), e && await setTimeout(() => {
      h.trigger(this._element, `${e}.te.sidenav`);
    }, this.options.sidenavTransitionDuration + 5);
  }
  _isiPhone() {
    return /iPhone|iPod/i.test(navigator.userAgent);
  }
  _update(t) {
    t && this._isiPhone() && c.addClass(this._element, "ps--scrolling-y"), this.toggler && this._updateTogglerAria(t), this._updateDisplay(t), this.options.sidenavBackdrop && this._updateBackdrop(t), this._updateOffsets(t), t && this.options.sidenavCloseOnEsc && this.options.sidenavMode !== "side" && h.on(window, "keydown", this.escHandler), this.options.sidenavFocusTrap && this._updateFocus(t);
  }
  _updateDisplay(t) {
    const e = t ? 0 : this.translation;
    c.style(this._element, {
      transform: `translateX(${e}%)`
    });
  }
  _updateFocus(t) {
    if (this._setTabindex(t), this.options.sidenavMode === "over" && this.options.sidenavFocusTrap) {
      if (t) {
        this._focusTrap.trap();
        return;
      }
      this._focusTrap.disable();
    }
    this._focusTrap.disable();
  }
  _updateOffsets(t, e = !1) {
    const [i, n] = this.options.sidenavRight ? ["right", "left"] : ["left", "right"], o = {
      property: this._getProperty("padding", i),
      value: this.options.sidenavMode === "over" ? 0 : this.width
    }, r = {
      property: this._getProperty("margin", n),
      value: this.options.sidenavMode === "push" ? -1 * this.width : 0
    };
    h.trigger(this._element, "update.te.sidenav", {
      margin: r,
      padding: o
    }), this._content && (this._content.className = "", this._setContentOffsets(t, { padding: o, margin: r }, e));
  }
  _updateTogglerAria(t) {
    this.toggler.setAttribute("aria-expanded", t);
  }
  // Static
  static toggleSidenav() {
    return function(t) {
      const e = d.closest(t.target, Rn), i = c.getDataAttributes(e).target;
      d.find(i).forEach((n) => {
        (pi.getInstance(n) || new pi(n)).toggle();
      });
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, hs);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new pi(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, hs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const lo = "stepper", Is = "te.stepper", Ks = `.${Is}`, Mi = `data-te-${lo}`, _i = "horizontal", xt = "vertical", dm = {
  stepperType: "string",
  stepperLinear: "boolean",
  stepperNoEditable: "boolean",
  stepperActive: "string",
  stepperCompleted: "string",
  stepperInvalid: "string",
  stepperDisabled: "string",
  stepperVerticalBreakpoint: "number",
  stepperMobileBreakpoint: "number",
  stepperMobileBarBreakpoint: "number"
}, um = {
  stepperType: _i,
  stepperLinear: !1,
  stepperNoEditable: !1,
  stepperActive: "",
  stepperCompleted: "",
  stepperInvalid: "",
  stepperDisabled: "",
  stepperVerticalBreakpoint: 0,
  stepperMobileBreakpoint: 0,
  stepperMobileBarBreakpoint: 4
}, fa = `mousedown${Ks}`, ma = `keydown${Ks}`, pm = `keyup${Ks}`, ga = `resize${Ks}`, jt = `[${Mi}-step-ref]`, G = `[${Mi}-head-ref]`, ba = `[${Mi}-head-text-ref]`, ds = `[${Mi}-head-icon-ref]`, st = `[${Mi}-content-ref]`;
class j0 {
  constructor(t, e) {
    this._element = t, this._options = this._getConfig(e), this._elementHeight = 0, this._steps = d.find(`${jt}`, this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._element && (I.setData(t, Is, this), this._init());
  }
  // Getters
  static get NAME() {
    return lo;
  }
  get activeStep() {
    return this._steps[this._activeStepIndex];
  }
  get activeStepIndex() {
    return this._activeStepIndex;
  }
  // Public
  dispose() {
    this._steps.forEach((t) => {
      h.off(t, fa), h.off(t, ma);
    }), h.off(window, ga), I.removeData(this._element, Is), this._element = null;
  }
  changeStep(t) {
    this._toggleStep(t);
  }
  nextStep() {
    this._toggleStep(this._activeStepIndex + 1);
  }
  previousStep() {
    this._toggleStep(this._activeStepIndex - 1);
  }
  // Private
  _init() {
    const t = d.find(`${jt}`, this._element)[this._activeStepIndex].setAttribute("data-te", "active-step"), e = d.find(
      `${ba}`,
      this._element
    ), i = d.find(
      `${ds}`,
      this._element
    );
    switch (t ? (this._activeStepIndex = this._steps.indexOf(t), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    ), e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700")) : (e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    )), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType) {
      case xt:
        this._toggleVertical();
        break;
      default:
        this._toggleHorizontal();
        break;
    }
    (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    return t = {
      ...um,
      ...e,
      ...t
    }, L(lo, t, dm), t;
  }
  _bindMouseDown() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${G}`, t);
      h.on(e, fa, (i) => {
        const n = d.parents(i.target, `${jt}`)[0], o = this._steps.indexOf(n);
        i.preventDefault(), this._toggleStep(o);
      });
    });
  }
  _bindResize() {
    h.on(window, ga, () => {
      this._currentView === xt && this._setSingleStepHeight(this.activeStep), this._currentView === _i && this._setHeight(this.activeStep), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView();
    });
  }
  _toggleStepperView() {
    const t = this._options.stepperVerticalBreakpoint < window.innerWidth, e = this._options.stepperVerticalBreakpoint > window.innerWidth, i = this._options.stepperMobileBreakpoint > window.innerWidth;
    t && this._currentView !== _i && this._toggleHorizontal(), e && !i && this._currentView !== xt && (this._steps.forEach((n) => {
      const o = d.findOne(`${st}`, n);
      this._resetStepperHeight(), this._showElement(o);
    }), this._toggleVertical());
  }
  _toggleStep(t) {
    this._activeStepIndex !== t && (this._options.stepperNoEditable && this._toggleDisabled(), this._showElement(
      d.findOne(`${st}`, this._steps[t])
    ), this._toggleActive(t), t > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === _i ? this._animateHorizontalStep(t) : (this._animateVerticalStep(t), this._setSingleStepHeight(this._steps[t])), this._toggleStepTabIndex(
      d.findOne(`${G}`, this.activeStep),
      d.findOne(`${G}`, this._steps[t])
    ), this._activeStepIndex = t, this._steps[this._activeStepIndex].setAttribute("data-te", "active-step"), this._steps.forEach((e, i) => {
      e[this._activeStepIndex] !== i && e.removeAttribute("data-te");
    }));
  }
  _resetStepperHeight() {
    this._element.style.height = "";
  }
  _setStepsHeight() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${st}`, t), i = window.getComputedStyle(e);
      this._verticalStepperStyles.push({
        paddingTop: parseFloat(i.paddingTop),
        paddingBottom: parseFloat(i.paddingBottom)
      });
      const n = e.scrollHeight;
      e.style.height = `${n}px`;
    });
  }
  _setSingleStepHeight(t) {
    const e = d.findOne(`${st}`, t), i = this.activeStep === t, n = this._steps.indexOf(t);
    let o;
    i ? (e.style.height = "", o = e.scrollHeight) : o = e.scrollHeight + this._verticalStepperStyles[n].paddingTop + this._verticalStepperStyles[n].paddingBottom, e.style.height = `${o}px`;
  }
  _toggleVertical() {
    this._currentView = xt, this._setStepsHeight(), this._hideInactiveSteps();
  }
  _toggleHorizontal() {
    this._currentView = _i, this._setHeight(this.activeStep), this._hideInactiveSteps();
  }
  _toggleStepperClass() {
    d.findOne(
      "[data-te-stepper-type]",
      this._element
    ) !== null && this._steps.forEach((e) => {
      d.findOne(`${st}`, e).classList.remove("!my-0"), d.findOne(`${st}`, e).classList.remove("!py-0"), d.findOne(`${st}`, e).classList.remove("!h-0");
    });
  }
  _toggleStepClass(t, e, i) {
    i && this._steps[t].classList[e](i);
  }
  _bindKeysNavigation() {
    this._toggleStepTabIndex(
      !1,
      d.findOne(`${G}`, this.activeStep)
    ), this._steps.forEach((t) => {
      const e = d.findOne(`${G}`, t);
      h.on(e, ma, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${jt}`
        )[0], o = d.next(n, `${jt}`)[0], r = d.prev(n, `${jt}`)[0], a = d.findOne(
          `${G}`,
          n
        ), l = d.findOne(
          `${G}`,
          this.activeStep
        );
        let p = null, u = null;
        if (o && (p = d.findOne(`${G}`, o)), r && (u = d.findOne(`${G}`, r)), i.keyCode === Pe && this._currentView !== xt && (u ? (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus()) : p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === Be && this._currentView !== xt && (p ? (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus()) : u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === z && this._currentView === xt && (i.preventDefault(), p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === rt && this._currentView === xt && (i.preventDefault(), u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === He) {
          const f = d.findOne(
            `${G}`,
            this._steps[0]
          );
          this._toggleStepTabIndex(a, f), this._toggleOutlineStyles(a, f), f.focus();
        }
        if (i.keyCode === We) {
          const f = this._steps[this._steps.length - 1], _ = d.findOne(`${G}`, f);
          this._toggleStepTabIndex(a, _), this._toggleOutlineStyles(a, _), _.focus();
        }
        (i.keyCode === lt || i.keyCode === ks) && (i.preventDefault(), this.changeStep(this._steps.indexOf(n))), i.keyCode === Oi && (this._toggleStepTabIndex(a, l), this._toggleOutlineStyles(a, !1), l.focus());
      }), h.on(e, pm, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${jt}`
        )[0], o = d.findOne(
          `${G}`,
          n
        ), r = d.findOne(
          `${G}`,
          this.activeStep
        );
        i.keyCode === Oi && (this._toggleStepTabIndex(o, r), this._toggleOutlineStyles(!1, r), r.focus());
      });
    });
  }
  _toggleStepTabIndex(t, e) {
    t && t.setAttribute("tabIndex", -1), e && e.setAttribute("tabIndex", 0);
  }
  _toggleOutlineStyles(t, e) {
    t && (t.style.outline = ""), e && (e.style.outline = "revert");
  }
  _toggleDisabled() {
    const t = d.find(`${G}`, this._element), e = d.find(
      `${ds}`,
      this._element
    );
    t[this._activeStepIndex].classList.add("color-[#858585]"), t[this._activeStepIndex].classList.add("cursor-default"), e[this._activeStepIndex].classList.add("!bg-[#858585]"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperDisabled
    );
  }
  _toggleActive(t) {
    const e = d.find(
      `${ba}`,
      this._element
    ), i = d.find(
      `${ds}`,
      this._element
    );
    e[t].classList.add("font-medium"), i[t].classList.add("!bg-primary-100"), i[t].classList.add("!text-primary-700"), i[t].classList.remove("!bg-success-100"), i[t].classList.remove("!text-success-700"), e[this._activeStepIndex].classList.remove("font-medium"), i[this._activeStepIndex].classList.remove("!bg-primary-100"), i[this._activeStepIndex].classList.remove(
      "!text-primary-700"
    ), this._toggleStepClass(t, "add", this._options.stepperActive), this._toggleStepClass(
      this._activeStepIndex,
      "remove",
      this._options.stepperActive
    );
  }
  _toggleCompleted(t) {
    const e = d.find(
      `${ds}`,
      this._element
    );
    e[t].classList.add("!bg-success-100"), e[t].classList.add("!text-success-700"), e[t].classList.remove("!bg-danger-100"), e[t].classList.remove("!text-danger-700"), this._toggleStepClass(t, "add", this._options.stepperCompleted), this._toggleStepClass(t, "remove", this._options.stepperInvalid);
  }
  _hideInactiveSteps() {
    this._steps.forEach((t) => {
      t.getAttribute("data-te") || this._hideElement(d.findOne(`${st}`, t));
    });
  }
  _setHeight(t) {
    const e = d.findOne(`${st}`, t), i = getComputedStyle(e), n = d.findOne(`${G}`, t), o = getComputedStyle(n), r = e.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom), a = n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom);
    this._element.style.height = `${a + r}px`;
  }
  _hideElement(t) {
    !d.parents(
      t,
      `${jt}`
    )[0].getAttribute("data-te") && this._currentView !== xt || (t.classList.add("!my-0"), t.classList.add("!py-0"), t.classList.add("!h-0"));
  }
  _showElement(t) {
    this._currentView === xt ? (t.classList.remove("!my-0"), t.classList.remove("!py-0"), t.classList.remove("!h-0")) : t.style.display = "block";
  }
  _animateHorizontalStep(t) {
    const e = t > this._activeStepIndex, i = d.findOne(
      `${st}`,
      this._steps[t]
    ), n = d.findOne(
      `${st}`,
      this.activeStep
    );
    let o, r;
    this._steps.forEach((u, f) => {
      const _ = d.findOne(`${st}`, u);
      f !== t && f !== this._activeStepIndex && this._hideElement(_);
    });
    const a = "translate-x-[150%]", l = "-translate-x-[150%]", p = "translate-0";
    e ? (r = l, o = p, i.classList.remove("translate-x-[150%]"), i.classList.remove("-translate-x-[150%]")) : (r = a, o = p, i.classList.remove("-translate-x-[150%]"), i.classList.remove("translate-x-[150%]")), n.classList.add(r), i.classList.add(o), this._setHeight(this._steps[t]);
  }
  _animateVerticalStep(t) {
    const e = d.findOne(
      `${st}`,
      this._steps[t]
    ), i = d.findOne(
      `${st}`,
      this.activeStep
    );
    this._hideElement(i), this._showElement(e);
  }
  static getInstance(t) {
    return I.getData(t, Is);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const va = "data-te-input-state-active", us = "data-te-input-selected", Ta = "data-te-input-multiple-active", Ea = "[data-te-form-check-input]";
class Ca {
  constructor(t, e, i, n, o, r, a, l, p, u, f) {
    this.id = t, this.nativeOption = e, this.multiple = i, this.value = n, this.label = o, this.selected = r, this.disabled = a, this.hidden = l, this.secondaryText = p, this.groupId = u, this.icon = f, this.node = null, this.active = !1;
  }
  select() {
    this.multiple ? this._selectMultiple() : this._selectSingle();
  }
  _selectSingle() {
    this.selected || (this.node.setAttribute(us, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0));
  }
  _selectMultiple() {
    if (!this.selected) {
      const t = d.findOne(
        Ea,
        this.node
      );
      t.checked = !0, this.node.setAttribute(us, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0);
    }
  }
  deselect() {
    this.multiple ? this._deselectMultiple() : this._deselectSingle();
  }
  _deselectSingle() {
    this.selected && (this.node.removeAttribute(us), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1));
  }
  _deselectMultiple() {
    if (this.selected) {
      const t = d.findOne(
        Ea,
        this.node
      );
      t.checked = !1, this.node.removeAttribute(us), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1);
    }
  }
  setNode(t) {
    this.node = t;
  }
  setActiveStyles() {
    if (!this.active) {
      if (this.multiple) {
        this.node.setAttribute(Ta, "");
        return;
      }
      this.active = !0, this.node.setAttribute(va, "");
    }
  }
  removeActiveStyles() {
    this.active && (this.active = !1, this.node.removeAttribute(va)), this.multiple && this.node.removeAttribute(Ta);
  }
}
class _m {
  constructor(t = !1) {
    this._multiple = t, this._selections = [];
  }
  select(t) {
    this._multiple ? this._selections.push(t) : this._selections = [t];
  }
  deselect(t) {
    if (this._multiple) {
      const e = this._selections.findIndex(
        (i) => t === i
      );
      this._selections.splice(e, 1);
    } else
      this._selections = [];
  }
  clear() {
    this._selections = [];
  }
  get selection() {
    return this._selections[0];
  }
  get selections() {
    return this._selections;
  }
  get label() {
    return this._selections[0] && this.selection.label;
  }
  get labels() {
    return this._selections.map((t) => t.label).join(", ");
  }
  get value() {
    return this.selections[0] && this.selection.value;
  }
  get values() {
    return this._selections.map((t) => t.value);
  }
}
function co(s) {
  return s.filter((t) => !t.disabled).every((t) => t.selected);
}
const fm = "data-te-select-form-outline-ref", mm = "data-te-select-wrapper-ref", gm = "data-te-select-input-ref", bm = "data-te-select-clear-btn-ref", vm = "data-te-select-dropdown-container-ref", Tm = "data-te-select-dropdown-ref", Em = "data-te-select-options-wrapper-ref", Cm = "data-te-select-options-list-ref", Am = "data-te-select-input-filter-ref", ac = "data-te-select-option-ref", ym = "data-te-select-option-all-ref", wm = "data-te-select-option-text-ref", xm = "data-te-form-check-input", km = "data-te-select-option-group-ref", Om = "data-te-select-option-group-label-ref", lc = "data-te-select-selected", Sm = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`, Im = (s) => {
  s.code === "Tab" || s.code === "Esc" || s.preventDefault();
};
function ps(s, t, e, i, n) {
  t.selectSize === "default" && c.addClass(s, e), t.selectSize === "sm" && c.addClass(s, i), t.selectSize === "lg" && c.addClass(s, n);
}
function Dm(s, t, e, i) {
  const n = document.createElement("div");
  n.setAttribute("id", s), n.setAttribute(mm, "");
  const o = D("div");
  o.setAttribute(fm, ""), c.addClass(o, i.formOutline);
  const r = D("input"), a = t.selectFilter ? "combobox" : "listbox", l = t.multiple ? "true" : "false", p = t.disabled ? "true" : "false";
  r.setAttribute(gm, ""), c.addClass(r, i.selectInput), ps(
    r,
    t,
    i.selectInputSizeDefault,
    i.selectInputSizeSm,
    i.selectInputSizeLg
  ), t.selectFormWhite && c.addClass(r, i.selectInputWhite), r.setAttribute("type", "text"), r.setAttribute("role", a), r.setAttribute("aria-multiselectable", l), r.setAttribute("aria-disabled", p), r.setAttribute("aria-haspopup", "true"), r.setAttribute("aria-expanded", !1), t.tabIndex && r.setAttribute("tabIndex", t.tabIndex), t.disabled && r.setAttribute("disabled", ""), t.selectPlaceholder !== "" && r.setAttribute("placeholder", t.selectPlaceholder), t.selectValidation ? (c.addStyle(r, {
    "pointer-events": "none",
    "caret-color": "transparent"
  }), c.addStyle(o, { cursor: "pointer" })) : r.setAttribute("readonly", "true"), t.selectValidation && (r.setAttribute("required", "true"), r.setAttribute("aria-required", "true"), r.addEventListener("keydown", Im));
  const u = D("div");
  c.addClass(u, i.selectValidationValid);
  const f = document.createTextNode(
    `${t.selectValidFeedback}`
  );
  u.appendChild(f);
  const _ = D("div");
  c.addClass(_, i.selectValidationInvalid);
  const m = document.createTextNode(
    `${t.selectInvalidFeedback}`
  );
  _.appendChild(m);
  const g = D("span");
  g.setAttribute(bm, ""), c.addClass(g, i.selectClearBtn), ps(
    g,
    t,
    i.selectClearBtnDefault,
    i.selectClearBtnSm,
    i.selectClearBtnLg
  ), t.selectFormWhite && c.addClass(g, i.selectClearBtnWhite);
  const v = document.createTextNode("✕");
  g.appendChild(v), g.setAttribute("tabindex", "0");
  const b = D("span");
  return c.addClass(b, i.selectArrow), ps(
    b,
    t,
    i.selectArrowDefault,
    i.selectArrowSm,
    i.selectArrowLg
  ), t.selectFormWhite && c.addClass(b, i.selectArrowWhite), b.innerHTML = Sm, o.appendChild(r), e && (c.addClass(e, i.selectLabel), ps(
    e,
    t,
    i.selectLabelSizeDefault,
    i.selectLabelSizeSm,
    i.selectLabelSizeLg
  ), t.selectFormWhite && c.addClass(e, i.selectLabelWhite), o.appendChild(e)), t.selectValidation && (o.appendChild(u), o.appendChild(_)), t.selectClearButton && o.appendChild(g), o.appendChild(b), n.appendChild(o), n;
}
function Aa(s, t, e, i, n, o, r, a) {
  const l = document.createElement("div");
  l.setAttribute(vm, ""), c.addClass(l, a.selectDropdownContainer), l.setAttribute("id", `${s}`), l.style.width = `${e}px`;
  const p = document.createElement("div");
  p.setAttribute("tabindex", 0), p.setAttribute(Tm, ""), c.addClass(p, a.dropdown);
  const u = D("div");
  u.setAttribute(Em, ""), c.addClass(u, a.optionsWrapper), c.addClass(u, a.optionsWrapperScrollbar), u.style.maxHeight = `${i}px`;
  const f = cc(
    o,
    n,
    t,
    a
  );
  return u.appendChild(f), t.selectFilter && p.appendChild(
    $m(t.selectSearchPlaceholder, a)
  ), p.appendChild(u), r && p.appendChild(r), l.appendChild(p), l;
}
function cc(s, t, e, i) {
  const n = D("div");
  n.setAttribute(Cm, ""), c.addClass(n, i.optionsList);
  let o;
  return e.multiple ? o = Mm(
    s,
    t,
    e,
    i
  ) : o = Lm(s, e, i), o.forEach((r) => {
    n.appendChild(r);
  }), n;
}
function $m(s, t) {
  const e = D("div");
  c.addClass(e, t.inputGroup);
  const i = D("input");
  return i.setAttribute(Am, ""), c.addClass(i, t.selectFilterInput), i.placeholder = s, i.setAttribute("role", "searchbox"), i.setAttribute("type", "text"), e.appendChild(i), e;
}
function Lm(s, t, e) {
  return hc(s, t, e);
}
function Mm(s, t, e, i) {
  let n = null;
  e.selectAll && (n = Nm(
    t,
    s,
    e,
    i
  ));
  const o = hc(s, e, i);
  return n ? [n, ...o] : o;
}
function hc(s, t, e) {
  const i = [];
  return s.forEach((n) => {
    if (Object.prototype.hasOwnProperty.call(
      n,
      "options"
    )) {
      const r = Hm(n, t, e);
      i.push(r);
    } else
      i.push(dc(n, t, e));
  }), i;
}
function Nm(s, t, e, i) {
  const n = co(t), o = D("div");
  return o.setAttribute(ac, ""), c.addClass(o, i.selectOption), o.setAttribute(ym, ""), c.addStyle(o, {
    height: `${e.selectOptionHeight}px`
  }), o.setAttribute("role", "option"), o.setAttribute("aria-selected", n), n && o.setAttribute(lc, ""), o.appendChild(uc(s, e, i)), s.setNode(o), o;
}
function dc(s, t, e) {
  if (s.node)
    return s.node;
  const i = D("div");
  return i.setAttribute(ac, ""), c.addClass(i, e.selectOption), c.addStyle(i, {
    height: `${t.selectOptionHeight}px`
  }), c.setDataAttribute(i, "id", s.id), i.setAttribute("role", "option"), i.setAttribute("aria-selected", s.selected), i.setAttribute("aria-disabled", s.disabled), s.selected && i.setAttribute(lc, ""), s.disabled && i.setAttribute("data-te-select-option-disabled", !0), s.hidden && c.addClass(i, "hidden"), i.appendChild(uc(s, t, e)), s.icon && i.appendChild(Bm(s, e)), s.setNode(i), i;
}
function uc(s, t, e) {
  const i = D("span");
  i.setAttribute(wm, ""), c.addClass(i, e.selectOptionText);
  const n = document.createTextNode(s.label);
  return t.multiple && i.appendChild(Pm(s, e)), i.appendChild(n), (s.secondaryText || typeof s.secondaryText == "number") && i.appendChild(
    Rm(s.secondaryText, e)
  ), i;
}
function Rm(s, t) {
  const e = D("span");
  c.addClass(e, t.selectOptionSecondaryText);
  const i = document.createTextNode(s);
  return e.appendChild(i), e;
}
function Pm(s, t) {
  const e = D("input");
  e.setAttribute("type", "checkbox"), c.addClass(e, t.formCheckInput), e.setAttribute(xm, "");
  const i = D("label");
  return s.selected && e.setAttribute("checked", !0), s.disabled && e.setAttribute("disabled", !0), e.appendChild(i), e;
}
function Bm(s, t) {
  const e = D("span"), i = D("img");
  return c.addClass(i, t.selectOptionIcon), i.src = s.icon, e.appendChild(i), e;
}
function Hm(s, t, e) {
  const i = D("div");
  i.setAttribute(km, ""), c.addClass(i, e.selectOptionGroup), i.setAttribute("role", "group"), i.setAttribute("id", s.id), s.hidden && c.addClass(i, "hidden");
  const n = D("label");
  return n.setAttribute(Om, ""), c.addClass(n, e.selectOptionGroupLabel), c.addStyle(n, { height: `${t.selectOptionHeight}px` }), n.setAttribute("for", s.id), n.textContent = s.label, i.appendChild(n), s.options.forEach((o) => {
    i.appendChild(dc(o, t, e));
  }), i;
}
function Wm(s, t) {
  const e = D("div");
  return e.innerHTML = s, c.addClass(e, t.selectLabel), c.addClass(e, t.selectFakeValue), e;
}
const Pn = "select", fi = "te.select", Ni = `.${fi}`, Vm = `close${Ni}`, Fm = `open${Ni}`, ya = `optionSelect${Ni}`, wa = `optionDeselect${Ni}`, Ym = `valueChange${Ni}`, jm = "change", xa = "data-te-select-init", pc = "data-te-select-no-results-ref", ka = "data-te-select-open", q = "data-te-input-state-active", Kt = "data-te-input-focused", Bn = "data-te-input-disabled", Km = "data-te-select-option-group-label-ref", zm = "data-te-select-option-all-ref", ci = "data-te-select-selected", Um = "[data-te-select-label-ref]", Oa = "[data-te-select-input-ref]", Xm = "[data-te-select-input-filter-ref]", Gm = "[data-te-select-dropdown-ref]", qm = "[data-te-select-options-wrapper-ref]", Sa = "[data-te-select-options-list-ref]", Zm = "[data-te-select-option-ref]", Qm = "[data-te-select-clear-btn-ref]", Jm = "[data-te-select-custom-content-ref]", tg = `[${pc}]`, Ia = "[data-te-select-form-outline-ref]", eg = "[data-te-select-toggle]", Hn = "[data-te-input-notch-ref]", ig = 200, sg = {
  selectAutoSelect: !1,
  selectContainer: "body",
  selectClearButton: !1,
  disabled: !1,
  selectDisplayedLabels: 5,
  selectFormWhite: !1,
  multiple: !1,
  selectOptionsSelectedLabel: "options selected",
  selectOptionHeight: 38,
  selectAll: !0,
  selectAllLabel: "Select all",
  selectSearchPlaceholder: "Search...",
  selectSize: "default",
  selectVisibleOptions: 5,
  selectFilter: !1,
  selectFilterDebounce: 300,
  selectNoResultText: "No results",
  selectValidation: !1,
  selectValidFeedback: "Valid",
  selectInvalidFeedback: "Invalid",
  selectPlaceholder: ""
}, ng = {
  selectAutoSelect: "boolean",
  selectContainer: "string",
  selectClearButton: "boolean",
  disabled: "boolean",
  selectDisplayedLabels: "number",
  selectFormWhite: "boolean",
  multiple: "boolean",
  selectOptionsSelectedLabel: "string",
  selectOptionHeight: "number",
  selectAll: "boolean",
  selectAllLabel: "string",
  selectSearchPlaceholder: "string",
  selectSize: "string",
  selectVisibleOptions: "number",
  selectFilter: "boolean",
  selectFilterDebounce: "number",
  selectNoResultText: "string",
  selectValidation: "boolean",
  selectValidFeedback: "string",
  selectInvalidFeedback: "string",
  selectPlaceholder: "string"
}, og = {
  dropdown: "relative outline-none min-w-[100px] m-0 scale-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-zinc-700",
  formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
  formOutline: "relative",
  initialized: "hidden",
  inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
  noResult: "flex items-center px-4",
  optionsList: "list-none m-0 p-0",
  optionsWrapper: "overflow-y-auto",
  optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5",
  selectArrowWhite: "text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white",
  selectArrowDefault: "top-2",
  selectArrowLg: "top-[13px]",
  selectArrowSm: "top-1",
  selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200",
  selectClearBtnWhite: "!text-gray-50",
  selectClearBtnDefault: "top-2 text-base",
  selectClearBtnLg: "top-[11px] text-base",
  selectClearBtnSm: "top-1 text-[0.8rem]",
  selectDropdownContainer: "z-[1070]",
  selectFakeValue: "transform-none hidden data-[te-input-state-active]:block",
  selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
  selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600",
  selectInputWhite: "!text-gray-50",
  selectInputSizeDefault: "py-[0.32rem] px-3 leading-[1.6]",
  selectInputSizeLg: "py-[0.32rem] px-3 leading-[2.15]",
  selectInputSizeSm: "py-[0.33rem] px-3 text-xs leading-[1.5]",
  selectLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary",
  selectLabelWhite: "!text-gray-50",
  selectLabelSizeDefault: "pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]",
  selectLabelSizeLg: "pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]",
  selectLabelSizeSm: "pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]",
  selectOption: "flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30",
  selectOptionGroup: "group/opt",
  selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
  selectOptionIcon: "w-7 h-7 rounded-full",
  selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300",
  selectOptionText: "group",
  selectValidationValid: "hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block",
  selectValidationInvalid: "hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block"
}, rg = {
  dropdown: "string",
  formCheckInput: "string",
  formOutline: "string",
  initialized: "string",
  inputGroup: "string",
  noResult: "string",
  optionsList: "string",
  optionsWrapper: "string",
  optionsWrapperScrollbar: "string",
  selectArrow: "string",
  selectArrowDefault: "string",
  selectArrowLg: "string",
  selectArrowSm: "string",
  selectClearBtn: "string",
  selectClearBtnDefault: "string",
  selectClearBtnLg: "string",
  selectClearBtnSm: "string",
  selectDropdownContainer: "string",
  selectFakeValue: "string",
  selectFilterInput: "string",
  selectInput: "string",
  selectInputSizeDefault: "string",
  selectInputSizeLg: "string",
  selectInputSizeSm: "string",
  selectLabel: "string",
  selectLabelSizeDefault: "string",
  selectLabelSizeLg: "string",
  selectLabelSizeSm: "string",
  selectOption: "string",
  selectOptionGroup: "string",
  selectOptionGroupLabel: "string",
  selectOptionIcon: "string",
  selectOptionSecondaryText: "string",
  selectOptionText: "string"
};
class $o {
  constructor(t, e, i) {
    this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._config.selectPlaceholder && !this._config.multiple && this._addPlaceholderOption(), this._optionsToRender = this._getOptionsToRender(t), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._filteredOptionsList = null, this._selectionModel = new _m(this.multiple), this._activeOptionIndex = -1, this._activeOption = null, this._wrapperId = bt("select-wrapper-"), this._dropdownContainerId = bt("select-dropdown-container-"), this._selectAllId = bt("select-all-"), this._debounceTimeoutId = null, this._dropdownHeight = this._config.selectOptionHeight * this._config.selectVisibleOptions, this._popper = null, this._input = null, this._label = d.next(this._element, Um)[0], this._notch = null, this._fakeValue = null, this._isFakeValueActive = !1, this._customContent = d.next(
      t,
      Jm
    )[0], this._toggleButton = null, this._elementToggle = null, this._wrapper = null, this._inputEl = null, this._dropdownContainer = null, this._container = null, this._selectAllOption = null, this._init(), this._mutationObserver = null, this._isOpen = !1, this._addMutationObserver(), this._element && I.setData(t, fi, this);
  }
  static get NAME() {
    return Pn;
  }
  get filterInput() {
    return d.findOne(
      Xm,
      this._dropdownContainer
    );
  }
  get dropdown() {
    return d.findOne(Gm, this._dropdownContainer);
  }
  get optionsList() {
    return d.findOne(
      Sa,
      this._dropdownContainer
    );
  }
  get optionsWrapper() {
    return d.findOne(
      qm,
      this._dropdownContainer
    );
  }
  get clearButton() {
    return d.findOne(Qm, this._wrapper);
  }
  get options() {
    return this._filteredOptionsList ? this._filteredOptionsList : this._plainOptions;
  }
  get value() {
    return this.multiple ? this._selectionModel.values : this._selectionModel.value;
  }
  get multiple() {
    return this._config.multiple;
  }
  get hasSelectAll() {
    return this.multiple && this._config.selectAll;
  }
  get hasSelection() {
    return this._selectionModel.selection || this._selectionModel.selections.length > 0;
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    return t = {
      ...sg,
      ...e,
      ...t
    }, this._element.hasAttribute("multiple") && (t.multiple = !0), this._element.hasAttribute("disabled") && (t.disabled = !0), this._element.tabIndex && (t.tabIndex = this._element.getAttribute("tabIndex")), L(Pn, t, ng), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...og,
      ...e,
      ...t
    }, L(Pn, t, rg), t;
  }
  _addPlaceholderOption() {
    const t = new Option("", "", !0, !0);
    t.hidden = !0, t.selected = !0, this._element.prepend(t);
  }
  _getOptionsToRender(t) {
    const e = [];
    return t.childNodes.forEach((n) => {
      if (n.nodeName === "OPTGROUP") {
        const o = {
          id: bt("group-"),
          label: n.label,
          disabled: n.hasAttribute("disabled"),
          hidden: n.hasAttribute("hidden"),
          options: []
        };
        n.childNodes.forEach((a) => {
          a.nodeName === "OPTION" && o.options.push(
            this._createOptionObject(a, o)
          );
        }), e.push(o);
      } else
        n.nodeName === "OPTION" && e.push(this._createOptionObject(n));
    }), e;
  }
  _getPlainOptions(t) {
    if (!d.findOne("optgroup", this._element))
      return t;
    const i = [];
    return t.forEach((n) => {
      Object.prototype.hasOwnProperty.call(
        n,
        "options"
      ) ? n.options.forEach((r) => {
        i.push(r);
      }) : i.push(n);
    }), i;
  }
  _createOptionObject(t, e = {}) {
    const i = bt("option-"), n = e.id ? e.id : null, o = e.disabled ? e.disabled : !1, r = t.selected || t.hasAttribute(ci), a = t.hasAttribute("disabled") || o, l = t.hasAttribute("hidden") || e && e.hidden, p = this.multiple, u = t.value, f = t.label, _ = c.getDataAttribute(
      t,
      "selectSecondaryText"
    ), m = c.getDataAttribute(t, "select-icon");
    return new Ca(
      i,
      t,
      p,
      u,
      f,
      r,
      a,
      l,
      _,
      n,
      m
    );
  }
  _getNavigationOptions() {
    const t = this.options.filter((e) => !e.hidden);
    return this.hasSelectAll ? [this._selectAllOption, ...t] : t;
  }
  _init() {
    this._renderMaterialWrapper(), this._wrapper = d.findOne(`#${this._wrapperId}`), this._input = d.findOne(Oa, this._wrapper), this._config.disabled && this._input.setAttribute(Bn, "");
    const t = this._config.selectContainer;
    t === "body" ? this._container = document.body : this._container = d.findOne(t), this._initOutlineInput(), this._setDefaultSelections(), this._updateInputValue(), this._appendFakeValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._bindComponentEvents(), this.hasSelectAll && (this._selectAllOption = this._createSelectAllOption()), this._dropdownContainer = Aa(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    ), this._setFirstActiveOption(), this._listenToFocusChange();
  }
  _renderMaterialWrapper() {
    const t = Dm(
      this._wrapperId,
      this._config,
      this._label,
      this._classes
    );
    this._element.parentNode.insertBefore(t, this._element), c.addClass(this._element, this._classes.initialized), t.appendChild(this._element);
  }
  _initOutlineInput() {
    const t = d.findOne(
      Ia,
      this._wrapper
    );
    new W(
      t,
      {
        inputFormWhite: this._config.selectFormWhite
      },
      this._classes
    ).init(), this._notch = d.findOne(Hn, this._wrapper);
  }
  _bindComponentEvents() {
    this._listenToComponentKeydown(), this._listenToWrapperClick(), this._listenToClearBtnClick(), this._listenToClearBtnKeydown();
  }
  _setDefaultSelections() {
    this.options.forEach((t) => {
      t.selected && this._selectionModel.select(t);
    });
  }
  _listenToComponentKeydown() {
    h.on(this._wrapper, "keydown", this._handleKeydown.bind(this));
  }
  _handleKeydown(t) {
    this._isOpen && !this._config.selectFilter ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
  }
  _handleOpenKeydown(t) {
    const e = t.keyCode, i = e === Li || e === rt && t.altKey || e === Oi;
    if (e === Oi && this._config.selectAutoSelect && !this.multiple && this._handleAutoSelection(this._activeOption), i) {
      this.close(), this._input.focus();
      return;
    }
    switch (e) {
      case z:
        this._setNextOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case rt:
        this._setPreviousOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case He:
        this._setFirstOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case We:
        this._setLastOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case lt:
        t.preventDefault(), this._activeOption && (this.hasSelectAll && this._activeOptionIndex === 0 ? this._handleSelectAll() : this._handleSelection(this._activeOption));
        return;
      default:
        return;
    }
    t.preventDefault();
  }
  _handleClosedKeydown(t) {
    const e = t.keyCode;
    if (e === lt && t.preventDefault(), (e === lt || e === z && t.altKey || e === z && this.multiple) && this.open(), this.multiple)
      switch (e) {
        case z:
          this.open();
          break;
        case rt:
          this.open();
          break;
        default:
          return;
      }
    else
      switch (e) {
        case z:
          this._setNextOptionActive(), this._handleSelection(this._activeOption);
          break;
        case rt:
          this._setPreviousOptionActive(), this._handleSelection(this._activeOption);
          break;
        case He:
          this._setFirstOptionActive(), this._handleSelection(this._activeOption);
          break;
        case We:
          this._setLastOptionActive(), this._handleSelection(this._activeOption);
          break;
        default:
          return;
      }
    t.preventDefault();
  }
  _scrollToOption(t) {
    if (!t)
      return;
    let e;
    const i = this.options.filter((u) => !u.hidden);
    this.hasSelectAll ? e = i.indexOf(t) + 1 : e = i.indexOf(t);
    const n = this._getNumberOfGroupsBeforeOption(e), o = e + n, r = this.optionsWrapper, a = r.offsetHeight, l = this._config.selectOptionHeight, p = r.scrollTop;
    if (e > -1) {
      const u = o * l, f = u + l > p + a;
      u < p ? r.scrollTop = u : f ? r.scrollTop = u - a + l : r.scrollTop = p;
    }
  }
  _getNumberOfGroupsBeforeOption(t) {
    const e = this.options.filter((r) => !r.hidden), i = this._optionsToRender.filter((r) => !r.hidden), n = this.hasSelectAll ? t - 1 : t;
    let o = 0;
    for (let r = 0; r <= n; r++)
      e[r].groupId && i[o] && i[o].id && e[r].groupId === i[o].id && o++;
    return o;
  }
  _setNextOptionActive() {
    let t = this._activeOptionIndex + 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t += 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setPreviousOptionActive() {
    let t = this._activeOptionIndex - 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t -= 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setFirstOptionActive() {
    const e = this._getNavigationOptions();
    this._updateActiveOption(e[0], 0);
  }
  _setLastOptionActive() {
    const t = this._getNavigationOptions(), e = t.length - 1;
    this._updateActiveOption(t[e], e);
  }
  _updateActiveOption(t, e) {
    const i = this._activeOption;
    i && i.removeActiveStyles(), t.setActiveStyles(), this._activeOptionIndex = e, this._activeOption = t;
  }
  _listenToWrapperClick() {
    h.on(this._wrapper, "click", () => {
      this.toggle();
    });
  }
  _listenToClearBtnClick() {
    h.on(this.clearButton, "click", (t) => {
      t.preventDefault(), t.stopPropagation(), this._handleClear();
    });
  }
  _listenToClearBtnKeydown() {
    h.on(this.clearButton, "keydown", (t) => {
      t.keyCode === lt && (this._handleClear(), t.preventDefault(), t.stopPropagation());
    });
  }
  _handleClear() {
    if (this.multiple)
      this._selectionModel.clear(), this._deselectAllOptions(this.options), this.hasSelectAll && this._updateSelectAllState();
    else {
      const t = this._selectionModel.selection;
      this._selectionModel.clear(), t.deselect();
    }
    this._fakeValue.innerHTML = "", this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(null), this._emitNativeChangeEvent();
  }
  _listenToOptionsClick() {
    h.on(this.optionsWrapper, "click", (t) => {
      if (t.target.hasAttribute(
        Km
      ))
        return;
      const i = t.target.nodeName === "DIV" ? t.target : d.closest(t.target, Zm);
      if (i.hasAttribute(zm)) {
        this._handleSelectAll();
        return;
      }
      const o = i.dataset.teId, r = this.options.find((a) => a.id === o);
      r && !r.disabled && this._handleSelection(r);
    });
  }
  _handleSelectAll() {
    this._selectAllOption.selected ? (this._deselectAllOptions(this.options), this._selectAllOption.deselect()) : (this._selectAllOptions(this.options), this._selectAllOption.select()), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _selectAllOptions(t) {
    t.forEach((e) => {
      !e.selected && !e.disabled && (this._selectionModel.select(e), e.select());
    });
  }
  _deselectAllOptions(t) {
    t.forEach((e) => {
      e.selected && !e.disabled && (this._selectionModel.deselect(e), e.deselect());
    });
  }
  _handleSelection(t) {
    this.multiple ? (this._handleMultiSelection(t), this.hasSelectAll && this._updateSelectAllState()) : this._handleSingleSelection(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleAutoSelection(t) {
    this._singleOptionSelect(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleSingleSelection(t) {
    this._singleOptionSelect(t), this.close(), this._input.focus();
  }
  _singleOptionSelect(t) {
    const e = this._selectionModel.selections[0];
    e && e !== t && (this._selectionModel.deselect(e), e.deselect(), e.node.setAttribute(ci, !1), h.trigger(this._element, wa, {
      value: e.value
    })), (!e || e && t !== e) && (this._selectionModel.select(t), t.select(), t.node.setAttribute(ci, !0), h.trigger(this._element, ya, {
      value: t.value
    }), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent());
  }
  _handleMultiSelection(t) {
    t.selected ? (this._selectionModel.deselect(t), t.deselect(), t.node.setAttribute(ci, !1), h.trigger(this._element, wa, {
      value: t.value
    })) : (this._selectionModel.select(t), t.select(), t.node.setAttribute(ci, !0), h.trigger(this._element, ya, {
      value: t.value
    })), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _emitValueChangeEvent(t) {
    h.trigger(this._element, Ym, { value: t });
  }
  _emitNativeChangeEvent() {
    h.trigger(this._element, jm);
  }
  _updateInputValue() {
    const t = this.multiple ? this._selectionModel.labels : this._selectionModel.label;
    let e;
    this.multiple && this._config.selectDisplayedLabels !== -1 && this._selectionModel.selections.length > this._config.selectDisplayedLabels ? e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}` : e = t, !this.multiple && !this._isSelectionValid(this._selectionModel.selection) ? this._input.value = "" : this._isLabelEmpty(this._selectionModel.selection) ? this._input.value = " " : e ? this._input.value = e : this.multiple || !this._optionsToRender[0] ? this._input.value = "" : this._input.value = this._optionsToRender[0].label;
  }
  _isSelectionValid(t) {
    return !(t && (t.disabled || t.value === ""));
  }
  _isLabelEmpty(t) {
    return !!(t && t.label === "");
  }
  _appendFakeValue() {
    if (!this._selectionModel.selection || this._selectionModel._multiple)
      return;
    const t = this._selectionModel.selection.label;
    this._fakeValue = Wm(t, this._classes), d.findOne(
      Ia,
      this._wrapper
    ).appendChild(this._fakeValue);
  }
  _updateLabelPosition() {
    const t = this._element.hasAttribute(xa), e = this._input.value !== "";
    this._label && (t && (e || this._isOpen || this._isFakeValueActive) ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q, "")));
  }
  _updateLabelPositionWhileClosing() {
    this._label && (this._input.value !== "" || this._isFakeValueActive ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q)));
  }
  _updateFakeLabelPosition() {
    this._fakeValue && (this._input.value === "" && this._fakeValue.innerHTML !== "" && !this._config.selectPlaceholder ? (this._isFakeValueActive = !0, this._fakeValue.setAttribute(q, "")) : (this._isFakeValueActive = !1, this._fakeValue.removeAttribute(q)));
  }
  _updateClearButtonVisibility() {
    if (!this.clearButton)
      return;
    this._selectionModel.selection || this._selectionModel.selections.length > 0 ? c.addStyle(this.clearButton, { display: "block" }) : c.addStyle(this.clearButton, { display: "none" });
  }
  _updateSelectAllState() {
    const t = this._selectAllOption.selected, e = co(this.options);
    !e && t ? this._selectAllOption.deselect() : e && !t && this._selectAllOption.select();
  }
  toggle() {
    this._isOpen ? this.close() : this.open();
  }
  open() {
    const t = this._config.disabled, e = h.trigger(this._element, Fm);
    this._isOpen || t || e.defaultPrevented || (this._openDropdown(), this._updateDropdownWidth(), this._setFirstActiveOption(), this._scrollToOption(this._activeOption), this._config.selectFilter && (setTimeout(() => {
      this.filterInput.focus();
    }, 0), this._listenToSelectSearch(), this._listenToDropdownKeydown()), this._listenToOptionsClick(), this._listenToOutsideClick(), this._listenToWindowResize(), this._isOpen = !0, this._updateLabelPosition(), this._setInputActiveStyles());
  }
  _openDropdown() {
    this._popper = Ee(this._input, this._dropdownContainer, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 1]
          }
        }
      ]
    }), this._container.appendChild(this._dropdownContainer), setTimeout(() => {
      this.dropdown.setAttribute(ka, "");
    }, 0);
  }
  _updateDropdownWidth() {
    const t = this._input.offsetWidth;
    c.addStyle(this._dropdownContainer, { width: `${t}px` });
  }
  _setFirstActiveOption() {
    const t = this._getNavigationOptions(), e = this._activeOption;
    e && e.removeActiveStyles();
    const i = this.multiple ? this._selectionModel.selections[0] : this._selectionModel.selection;
    i ? (this._activeOption = i, i.setActiveStyles(), this._activeOptionIndex = t.findIndex(
      (n) => n === i
    )) : (this._activeOption = null, this._activeOptionIndex = -1);
  }
  _setInputActiveStyles() {
    this._input.setAttribute(Kt, ""), d.findOne(Hn, this._wrapper).setAttribute(
      Kt,
      ""
    );
  }
  _listenToWindowResize() {
    h.on(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleWindowResize() {
    this._dropdownContainer && this._updateDropdownWidth();
  }
  _listenToSelectSearch() {
    this.filterInput.addEventListener("input", (t) => {
      const e = t.target.value, i = this._config.selectFilterDebounce;
      this._debounceFilter(e, i);
    });
  }
  _debounceFilter(t, e) {
    this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(() => {
      this._filterOptions(t);
    }, e);
  }
  _filterOptions(t) {
    const e = [];
    this._optionsToRender.forEach((o) => {
      const r = Object.prototype.hasOwnProperty.call(
        o,
        "options"
      ), a = !r && o.label.toLowerCase().includes(t.toLowerCase()), l = {};
      r && (l.label = o.label, l.options = this._filter(t, o.options), l.options.length > 0 && e.push(l)), a && e.push(o);
    });
    const i = this._config.selectNoResultText !== "", n = e.length !== 0;
    if (n)
      this._updateOptionsListTemplate(e), this._popper.forceUpdate(), this._filteredOptionsList = this._getPlainOptions(e), this.hasSelectAll && this._updateSelectAllState(), this._setFirstActiveOption();
    else if (!n && i) {
      const o = this._getNoResultTemplate();
      this.optionsWrapper.innerHTML = o;
    }
  }
  _updateOptionsListTemplate(t) {
    const e = d.findOne(Sa, this._dropdownContainer) || d.findOne(tg, this._dropdownContainer), i = cc(
      t,
      this._selectAllOption,
      this._config,
      this._classes
    );
    this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(i);
  }
  _getNoResultTemplate() {
    return `<div class="${this._classes.noResult}" ${pc} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`;
  }
  _filter(t, e) {
    const i = t.toLowerCase();
    return e.filter(
      (n) => n.label.toLowerCase().includes(i)
    );
  }
  _listenToDropdownKeydown() {
    h.on(
      this.dropdown,
      "keydown",
      this._handleOpenKeydown.bind(this)
    );
  }
  _listenToOutsideClick() {
    this._outsideClick = this._handleOutSideClick.bind(this), h.on(document, "click", this._outsideClick);
  }
  _listenToFocusChange(t = !0) {
    if (t === !1) {
      h.off(
        this._input,
        "focus",
        () => this._notch.setAttribute(Kt, "")
      ), h.off(
        this._input,
        "blur",
        () => this._notch.removeAttribute(Kt)
      );
      return;
    }
    h.on(
      this._input,
      "focus",
      () => this._notch.setAttribute(Kt, "")
    ), h.on(
      this._input,
      "blur",
      () => this._notch.removeAttribute(Kt)
    );
  }
  _handleOutSideClick(t) {
    const e = this._wrapper && this._wrapper.contains(t.target), i = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
    let o;
    this._toggleButton || (this._elementToggle = d.find(eg)), this._elementToggle && this._elementToggle.forEach((r) => {
      const a = c.getDataAttribute(
        r,
        "select-toggle"
      );
      (a === this._element.id || this._element.classList.contains(a)) && (this._toggleButton = r, o = this._toggleButton.contains(t.target));
    }), !e && !i && !n && !o && this.close();
  }
  close() {
    const t = h.trigger(this._element, Vm);
    !this._isOpen || t.defaultPrevented || (this._config.selectFilter && this.hasSelectAll && (this._resetFilterState(), this._updateOptionsListTemplate(this._optionsToRender), this._config.multiple && this._updateSelectAllState()), this._removeDropdownEvents(), this.dropdown.removeAttribute(ka), setTimeout(() => {
      this._input.removeAttribute(Kt), this._input.blur(), d.findOne(Hn, this._wrapper).removeAttribute(
        Kt
      ), this._label && !this.hasSelection && (this._label.removeAttribute(q), this._notch.setAttribute(q, ""), this._input.removeAttribute(q), this._notch.removeAttribute(q)), this._updateLabelPositionWhileClosing();
    }, 0), setTimeout(() => {
      this._container && this._dropdownContainer.parentNode === this._container && this._container.removeChild(this._dropdownContainer), this._popper.destroy(), this._isOpen = !1, h.off(this.dropdown, "transitionend");
    }, ig));
  }
  _resetFilterState() {
    this.filterInput.value = "", this._filteredOptionsList = null;
  }
  _removeDropdownEvents() {
    h.off(document, "click", this._outsideClick), this._config.selectFilter && h.off(this.dropdown, "keydown"), h.off(this.optionsWrapper, "click");
  }
  _addMutationObserver() {
    this._mutationObserver = new MutationObserver(() => {
      this._wrapper && (this._updateSelections(), this._updateDisabledState());
    }), this._observeMutationObserver();
  }
  _updateSelections() {
    this._optionsToRender = this._getOptionsToRender(this._element), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._selectionModel.clear(), this._setDefaultSelections(), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this.hasSelectAll && this._updateSelectAllState();
    const t = this._config.filter && this.filterInput && this.filterInput.value;
    this._isOpen && !t ? (this._updateOptionsListTemplate(this._optionsToRender), this._setFirstActiveOption()) : this._isOpen && t ? (this._filterOptions(this.filterInput.value), this._setFirstActiveOption()) : this._dropdownContainer = Aa(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    );
  }
  _updateDisabledState() {
    const t = d.findOne(Oa, this._wrapper);
    this._element.hasAttribute("disabled") ? (this._config.disabled = !0, t.setAttribute("disabled", ""), t.setAttribute(Bn, "")) : (this._config.disabled = !1, t.removeAttribute("disabled"), t.removeAttribute(Bn));
  }
  _observeMutationObserver() {
    this._mutationObserver && this._mutationObserver.observe(this._element, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    });
  }
  _disconnectMutationObserver() {
    this.mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
  }
  _createSelectAllOption() {
    const t = this._selectAllId, e = null, i = !0, n = "select-all", o = this._config.selectAllLabel, r = co(this.options), a = !1, l = !1, p = null, u = null, f = null;
    return new Ca(
      t,
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      f
    );
  }
  dispose() {
    this._removeComponentEvents(), this._destroyMaterialSelect(), this._listenToFocusChange(!1), I.removeData(this._element, fi);
  }
  _removeComponentEvents() {
    h.off(this.input, "click"), h.off(this.wrapper, this._handleKeydown.bind(this)), h.off(this.clearButton, "click"), h.off(this.clearButton, "keydown"), h.off(window, "resize", this._handleWindowResize.bind(this));
  }
  _destroyMaterialSelect() {
    this._isOpen && this.close(), this._destroyMaterialTemplate();
  }
  _destroyMaterialTemplate() {
    const t = this._wrapper.parentNode, e = d.find("label", this._wrapper);
    t.appendChild(this._element), e.forEach((i) => {
      t.appendChild(i);
    }), e.forEach((i) => {
      i.removeAttribute(q);
    }), c.removeClass(this._element, this._classes.initialized), this._element.removeAttribute(xa), t.removeChild(this._wrapper);
  }
  setValue(t) {
    this.options.filter((i) => i.selected).forEach((i) => i.nativeOption.selected = !1), Array.isArray(t) ? t.forEach((i) => {
      this._selectByValue(i);
    }) : this._selectByValue(t), this._updateSelections();
  }
  _selectByValue(t) {
    const e = this.options.find(
      (i) => i.value === t
    );
    return e ? (e.nativeOption.selected = !0, !0) : !1;
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, fi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new $o(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, fi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const ag = ({ inputID: s, labelText: t }, e) => `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${s}"
          placeholder="Example label" />
        <label
          for="${s}"
          class="${e.chipsLabel}"
          >${t}
        </label>
      </div>
    </div>`, lg = ({ text: s, iconSVG: t }, e) => `<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${s}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`, Ds = "chip", cg = `te.${Ds}`, _c = "data-te-chip-close", Wn = `[${_c}]`, hg = "delete.te.chips", dg = "select.te.chip", ug = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>', pg = {
  text: "string",
  closeIcon: "boolean",
  img: "object",
  iconSVG: "string"
}, _g = {
  text: "",
  closeIcon: !1,
  img: { path: "", alt: "" },
  iconSVG: ug
}, fg = {
  icon: "float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out",
  chipElement: "flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded",
  chipCloseIcon: "w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
}, mg = {
  icon: "string",
  chipElement: "string",
  chipCloseIcon: "string"
};
class hi {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i);
  }
  // Getters
  static get NAME() {
    return Ds;
  }
  // Public
  init() {
    this._appendCloseIcon(), this._handleDelete(), this._handleTextChip(), this._handleClickOnChip();
  }
  dispose() {
    this._element = null, this._options = null, h.off(this._element, "click");
  }
  appendChip() {
    const { text: t, closeIcon: e, iconSVG: i } = this._options;
    return lg({ text: t, closeIcon: e, iconSVG: i }, this._classes);
  }
  // Private
  _appendCloseIcon(t = this._element) {
    if (!(d.find(Wn, this._element).length > 0) && this._options.closeIcon) {
      const e = D("span");
      e.classList = this._classes.icon, e.setAttribute(_c), e.innerHTML = this._options.iconSVG, t.insertAdjacentElement("beforeend", e);
    }
  }
  _handleClickOnChip() {
    h.on(this._element, "click", (t) => {
      const { textContent: e } = t.target, i = {};
      i.tag = e.trim(), h.trigger(dg, { event: t, obj: i });
    });
  }
  _handleDelete() {
    d.find(
      Wn,
      this._element
    ).length !== 0 && h.on(this._element, "click", Wn, () => {
      h.trigger(this._element, hg), this._element.remove();
    });
  }
  _handleTextChip() {
    this._element.innerText === "" && (this._element.innerText = this._options.text);
  }
  _getConfig(t) {
    const e = {
      ..._g,
      ...c.getDataAttributes(this._element),
      ...t
    };
    return L(Ds, e, pg), e;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...fg,
      ...e,
      ...t
    }, L(Ds, t, mg), t;
  }
  static getInstance(t) {
    return I.getData(t, cg);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const wi = "chips", Ri = `data-te-${wi}`, Da = `te.${wi}`, gg = `${Ri}-input-init`, ft = `${Ri}-active`, $a = `${Ri}-initial`, fc = `${Ri}-placeholder`, bg = `${Ri}-input-wrapper`, ho = "data-te-chip-init", mc = "data-te-chip-close", gc = "data-te-chip-text", vg = `[${ft}]`, uo = `[${ho}]`, Tg = `${uo}${vg}`, Vn = `[${mc}]`, Eg = `[${bg}]`, Cg = `[${gc}]`, Ag = `[${fc}]`, yg = "data-te-input-notch-leading-ref", wg = "data-te-input-notch-middle-ref", xg = `[${yg}]`, kg = `[${wg}]`, Oe = "data-te-input-state-active", Fn = "[data-te-input-notch-ref]", Og = "add.te.chips", Sg = "arrowDown.te.chips", Ig = "arrowLeft.te.chips", Dg = "arrowRight.te.chips", $g = "arrowUp.te.chips", La = "delete.te.chips", Ma = "select.te.chips", Lg = {
  inputID: "string",
  parentSelector: "string",
  initialValues: "array",
  editable: "boolean",
  labelText: "string",
  inputClasses: "object",
  inputOptions: "object"
}, Mg = {
  inputID: bt("chips-input-"),
  parentSelector: "",
  initialValues: [{ tag: "init1" }, { tag: "init2" }],
  editable: !1,
  labelText: "Example label",
  inputClasses: {},
  inputOptions: {}
}, Ng = {
  opacity: "opacity-0",
  inputWrapperPadding: "p-[5px]",
  transition: "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  contentEditable: "outline-none !border-[3px] !border-solid !border-[#b2b3b4]",
  chipsInputWrapper: "relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  chipsInput: "peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
  chipsLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200"
}, Rg = {
  opacity: "string",
  inputWrapperPadding: "string",
  transition: "string",
  contentEditable: "string",
  chipsInputWrapper: "string",
  chipsInput: "string",
  chipsLabel: "string"
};
class K0 extends hi {
  constructor(e, i = {}, n) {
    super(e, i);
    At(this, "_handleBlurInput", ({ target: e }) => {
      e.value.length > 0 && this._handleCreateChip(e, e.value), this.allChips.length > 0 ? (e.setAttribute(ft, ""), this.input.setAttribute(Oe, ""), d.findOne(
        Fn,
        this.input.parentNode
      ).setAttribute(Oe, ""), this.chipsInputWrapper.classList.add(
        ...this._classes.inputWrapperPadding.split(" ")
      )) : (e.removeAttribute(ft), this.input.removeAttribute(Oe), d.findOne(
        Fn,
        this.input.parentNode
      ).removeAttribute(Oe), this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      )), this.allChips.forEach((i) => i.removeAttribute(ft));
    });
    this._element = e, this._inputInstance = null, this._element && I.setData(e, Da, this), this._options = this._getConfig(i), this._classes = this._getClasses(n), this.numberClicks = 0, this.init();
  }
  // Getters
  static get NAME() {
    return wi;
  }
  get activeChip() {
    return d.findOne(Tg, this._element);
  }
  get input() {
    return d.findOne("input", this._element);
  }
  get allChips() {
    return d.find(uo, this._element);
  }
  get chipsInputWrapper() {
    return d.findOne(Eg, this._element);
  }
  // Public
  init() {
    this._setChipsClass(), this._appendInputToElement(fc), this._handleInitialValue(), this._handleInputText(), this._handleKeyboard(), this._handleChipsOnSelect(), this._handleEditable(), this._handleChipsFocus(), this._handleClicksOnChips(), this._inputInstance._getLabelWidth(), this._inputInstance._applyNotch();
  }
  dispose() {
    this._element = null, this._options = null;
  }
  // Private
  _getNotchData() {
    this._notchMiddle = d.findOne(
      kg,
      this._element
    ), this._notchLeading = d.findOne(
      xg,
      this._element
    );
  }
  _setChipsClass() {
    this._element.setAttribute(gg, "");
  }
  _handleDeleteEvents(e) {
    const [i] = this.allChips.slice(-1);
    if (this.activeChip === null)
      i.remove(), this._handleEvents(e, La);
    else {
      const n = this.allChips.findIndex((a) => a === this.activeChip), o = this._handleActiveChipAfterRemove(n), r = [];
      if (this.activeChip === null)
        return;
      this.activeChip.remove(), this._handleEvents(e, La), this.numberClicks = n, o.setAttribute(ft, ""), this.allChips.forEach((a) => {
        a.hasAttribute(ft) && (r.push(a), r.length > 1 && this.allChips.forEach((l) => l.remove()));
      });
    }
  }
  _handleUpEvents(e) {
    this.numberClicks += 1, this.numberClicks === this.allChips.length + 1 && (this.numberClicks = 0), this._handleRightKeyboardArrow(this.numberClicks), this._handleEvents(e, Dg), this._handleEvents(e, $g);
  }
  _handleDownEvents(e) {
    this.numberClicks -= 1, this.numberClicks <= 0 && (this.numberClicks = this.allChips.length), this._handleLeftKeyboardArrow(this.numberClicks), this._handleEvents(e, Ig), this._handleEvents(e, Sg);
  }
  _keyboardEvents(e) {
    const { target: i, keyCode: n, ctrlKey: o } = e;
    i.value.length > 0 || this.allChips.length === 0 || (n === I_ || n === D_ ? this._handleDeleteEvents(e) : n === Be || n === rt ? this._handleUpEvents(e) : n === Pe || n === z ? this._handleDownEvents(e) : n === 65 && o && this._handleAddActiveClass());
  }
  _handleKeyboard() {
    h.on(
      this.input,
      "keydown",
      (e) => this._keyboardEvents(e)
    );
  }
  _handleEditable() {
    const { editable: e } = this._options;
    e && this.allChips.forEach((i) => {
      h.on(i, "dblclick", (n) => {
        const o = d.findOne(Vn, i);
        i.classList.add(...this._classes.contentEditable.split(" ")), i.contentEditable = !0, i.focus(), setTimeout(() => {
          c.addStyle(o, { display: "none" });
        }, 200), o.classList.add(...this._classes.opacity.split(" ")), n.target.textContent, h.trigger(i, Ma, {
          event: n,
          allChips: this.allChips
        });
      }), h.on(document, "click", ({ target: n }) => {
        const o = d.findOne(Vn, i), r = d.findOne(Cg, i), a = n === i, l = i && i.contains(n);
        !a && !l && (i.contentEditable = !1, i.classList.remove(...this._classes.contentEditable.split(" ")), r.textContent !== "" && setTimeout(() => {
          c.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
        }, 160)), r.textContent === "" && (setTimeout(() => {
          i.classList.add(...this._classes.opacity.split(" "));
        }, 200), setTimeout(() => {
          i.remove();
        }, 300));
      });
    });
  }
  _handleRemoveActiveClass() {
    this.allChips.forEach((e) => e.removeAttribute(ft));
  }
  _handleAddActiveClass() {
    this.allChips.forEach((e) => e.setAttribute(ft, ""));
  }
  _handleRightKeyboardArrow(e) {
    this._handleRemoveActiveClass(), e === 0 && (e = 1), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleLeftKeyboardArrow(e) {
    this._handleRemoveActiveClass(), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleActiveChipAfterRemove(e) {
    const i = e === 0 ? 1 : e - 1;
    return this.allChips[i];
  }
  _handleClicksOnChips() {
    h.on(this._element, "click", () => {
      this.allChips.length === 0 && (this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      ), this.input.removeAttribute(ft));
    });
  }
  _handleTextContent() {
    const e = [];
    return this.allChips.forEach((i) => e.push({ tag: i.textContent.trim() })), e;
  }
  _handleEvents(e, i) {
    const n = this._handleTextContent(), o = this.allChips.filter(
      (r) => r.hasAttribute(ft) && r
    );
    h.trigger(this._element, i, {
      event: e,
      allChips: this.allChips,
      arrOfObjects: n,
      active: o,
      activeObj: {
        tag: o.length <= 0 ? "" : o[0].textContent.trim()
      }
    });
  }
  _handleChipsFocus() {
    h.on(this._element, "click", ({ target: { attributes: e } }) => {
      const i = [...e];
      i.includes(ho) || i.includes(mc) || i.includes(gc) || this.input.focus();
    });
  }
  _handleInitialValue() {
    if (this._appendInputToElement($a), this._element.hasAttribute($a)) {
      const { initialValues: e } = this._options;
      e.forEach(
        ({ tag: i }) => this._handleCreateChip(this.input, i)
      ), d.findOne(
        Fn,
        this.input.parentNode
      ).setAttribute(Oe, ""), this.input.setAttribute(ft, ""), this.input.setAttribute(Oe, "");
    }
    this.allChips.length > 0 && (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    ));
  }
  _handleKeysInputToElement(e) {
    const { keyCode: i, target: n } = e;
    if (n.hasAttribute(ho)) {
      const o = d.findOne(Vn, n);
      i === lt && (n.contentEditable = !1, n.classList.remove(...this._classes.contentEditable.split(" ")), n.textContent !== "" ? setTimeout(() => {
        c.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
      }, 160) : n.textContent === "" && (setTimeout(() => {
        n.classList.add(...this._classes.opacity.split(" "));
      }, 200), setTimeout(() => {
        n.remove();
      }, 300)));
      return;
    }
    if (i === lt) {
      if (n.value === "")
        return;
      this._handleCreateChip(n, n.value), this._handleRemoveActiveClass(), this.numberClicks = this.allChips.length + 1, this._handleEvents(e, Og);
    }
    this.allChips.length > 0 ? (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    )) : this.chipsInputWrapper.classList.remove(
      ...this._classes.inputWrapperPadding.split(" ")
    );
  }
  _handleInputText() {
    const e = d.findOne(
      Ag,
      this._element
    );
    h.on(
      this._element,
      "keyup",
      e,
      (i) => this._handleKeysInputToElement(i)
    ), h.on(this.input, "blur", (i) => this._handleBlurInput(i));
  }
  _appendInputToElement(e) {
    if (!this._element.hasAttribute(e))
      return;
    const i = ag(this._options, this._classes);
    this._element.insertAdjacentHTML("beforeend", i);
    const n = d.findOne(
      "[data-te-chips-input-wrapper]",
      this._element
    );
    this._inputInstance = new W(
      n,
      this._options.inputOptions,
      this._options.inputClasses
    );
  }
  _handleCreateChip(e, i) {
    const n = D("div"), o = hi.getInstance(n), r = new hi(o, { text: i }, this._classes);
    this._options.parentSelector !== "" ? document.querySelector(this._options.parentSelector).insertAdjacentHTML("beforeend", r.appendChip()) : e.insertAdjacentHTML("beforebegin", r.appendChip()), e.value = "", d.find(uo).forEach((a) => {
      let l = hi.getInstance(a);
      return l || (l = new hi(a, {}, this._classes)), l.init();
    }), this._handleEditable();
  }
  _handleChipsOnSelect() {
    this.allChips.forEach((e) => {
      h.on(this._element, "click", (i) => {
        h.trigger(e, Ma, {
          event: i,
          allChips: this.allChips
        });
      });
    });
  }
  _handleAddActiveClassWithKebyboard(e) {
    let i;
    this.allChips[e - 1] === void 0 ? i = this.allChips[e - 2] : i = this.allChips[e - 1], i.setAttribute(ft);
  }
  _getConfig(e) {
    const i = {
      ...Mg,
      ...c.getDataAttributes(this._element),
      ...e
    };
    return L(wi, i, Lg), i;
  }
  _getClasses(e) {
    const i = c.getDataClassAttributes(this._element);
    return e = {
      ...Ng,
      ...i,
      ...e
    }, L(wi, e, Rg), e;
  }
  static getInstance(e) {
    return I.getData(e, Da);
  }
  static getOrCreateInstance(e, i = {}) {
    return this.getInstance(e) || new this(e, typeof i == "object" ? i : null);
  }
}
const zt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, mi = {
  line: {
    options: {
      ...zt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...zt,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !0,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...zt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  doughnut: {
    options: {
      ...zt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  polarArea: {
    options: {
      ...zt,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  radar: {
    options: {
      ...zt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  scatter: {
    options: {
      ...zt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...zt,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      scales: {
        x: {
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
var Pg = function(t) {
  return Bg(t) && !Hg(t);
};
function Bg(s) {
  return !!s && typeof s == "object";
}
function Hg(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || Fg(s);
}
var Wg = typeof Symbol == "function" && Symbol.for, Vg = Wg ? Symbol.for("react.element") : 60103;
function Fg(s) {
  return s.$$typeof === Vg;
}
function Yg(s) {
  return Array.isArray(s) ? [] : {};
}
function Si(s, t) {
  return t.clone !== !1 && t.isMergeableObject(s) ? Xe(Yg(s), s, t) : s;
}
function jg(s, t, e) {
  return s.concat(t).map(function(i) {
    return Si(i, e);
  });
}
function Kg(s, t) {
  if (!t.customMerge)
    return Xe;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : Xe;
}
function zg(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return Object.propertyIsEnumerable.call(s, t);
  }) : [];
}
function Na(s) {
  return Object.keys(s).concat(zg(s));
}
function bc(s, t) {
  try {
    return t in s;
  } catch {
    return !1;
  }
}
function Ug(s, t) {
  return bc(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function Xg(s, t, e) {
  var i = {};
  return e.isMergeableObject(s) && Na(s).forEach(function(n) {
    i[n] = Si(s[n], e);
  }), Na(t).forEach(function(n) {
    Ug(s, n) || (bc(s, n) && e.isMergeableObject(t[n]) ? i[n] = Kg(n, e)(s[n], t[n], e) : i[n] = Si(t[n], e));
  }), i;
}
function Xe(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || jg, e.isMergeableObject = e.isMergeableObject || Pg, e.cloneUnlessOtherwiseSpecified = Si;
  var i = Array.isArray(t), n = Array.isArray(s), o = i === n;
  return o ? i ? e.arrayMerge(s, t, e) : Xg(s, t, e) : Si(t, e);
}
Xe.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, n) {
    return Xe(i, n, e);
  }, {});
};
var Gg = Xe, po = Gg;
const Ra = "chart", _s = "te.chart", qg = "chart", Yn = (s, t, e) => {
  const i = (n, o, r) => {
    const a = n.slice();
    return o.forEach((l, p) => {
      typeof a[p] > "u" ? a[p] = r.cloneUnlessOtherwiseSpecified(
        l,
        r
      ) : r.isMergeableObject(l) ? a[p] = po(n[p], l, r) : n.indexOf(l) === -1 && a.push(l);
    }), a;
  };
  return po(e[t], s, {
    arrayMerge: i
  });
}, Zg = {
  darkTicksColor: "#fff",
  darkLabelColor: "#fff",
  darkGridLinesColor: "#555",
  darkmodeOff: "undefined",
  darkMode: null,
  darkBgColor: "#262626",
  darkBgColorLight: "#fff",
  options: null
}, Qg = {
  darkTicksColor: "string",
  darkLabelColor: "string",
  darkGridLinesColor: "string",
  darkmodeOff: "(string|null)",
  darkMode: "(string|null)",
  darkBgColor: "string",
  darkBgColorLight: "string",
  options: "(object|null)"
};
class vc {
  constructor(t, e, i = {}, n = {}) {
    this._waitForCharts(t, e, i, n);
  }
  async _getChartjs() {
    const {
      Chart: t,
      ArcElement: e,
      LineElement: i,
      BarElement: n,
      PointElement: o,
      BarController: r,
      BubbleController: a,
      DoughnutController: l,
      LineController: p,
      PieController: u,
      PolarAreaController: f,
      RadarController: _,
      ScatterController: m,
      CategoryScale: g,
      LinearScale: v,
      LogarithmicScale: b,
      RadialLinearScale: C,
      TimeScale: y,
      TimeSeriesScale: E,
      Decimation: T,
      Filler: A,
      Legend: w,
      Title: S,
      Tooltip: k,
      SubTitle: x
    } = await __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! ./chart.es.js */ "./node_modules/tw-elements/dist/js/chart.es.js")).then(($) => $.f);
    return t.register(
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      f,
      _,
      m,
      g,
      v,
      b,
      C,
      y,
      E,
      T,
      A,
      w,
      S,
      k,
      x
    ), t;
  }
  async _getChartDataLabels() {
    return await __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! ./chartjs-plugin-datalabels.es.js */ "./node_modules/tw-elements/dist/js/chartjs-plugin-datalabels.es.js"));
  }
  async _waitForCharts(t, e, i = {}, n = {}) {
    if (this._Chartjs = await this._getChartjs(), this._ChartDataLabels = await this._getChartDataLabels(), this._element = t, this._data = e, this._options = i, this._type = e.type, this._canvas = null, this._chart = null, this._darkOptions = this._getDarkConfig(n), this._darkModeClassContainer = document.querySelector("html"), this._prevConfig = null, this._observer = null, this._element && (I.setData(t, _s, this), c.addClass(this._element, qg), this._chartConstructor()), this._darkOptions.darkmodeOff !== null) {
      const o = this._darkOptions.darkMode === "dark" ? "dark" : this._darkOptions.darkMode === "light" ? "light" : this.systemColorMode;
      this._handleMode(o), this._observer = new MutationObserver(this._observerCallback.bind(this)), this._observer.observe(this._darkModeClassContainer, {
        attributes: !0
      });
    }
  }
  // Getters
  static get NAME() {
    return Ra;
  }
  get systemColorMode() {
    return localStorage.theme || (this._darkModeClassContainer.classList.contains("dark") ? "dark" : "light");
  }
  // Public
  dispose() {
    this._observer.disconnect(), I.removeData(this._element, _s), this._element = null;
  }
  update(t, e) {
    t && (this._data = { ...this._data, ...t }, this._chart.data = this._data);
    const i = Object.prototype.hasOwnProperty.call(
      e,
      "options"
    ) ? e : { options: { ...e } };
    this._options = po(this._options, i), this._chart.options = Yn(
      this._options,
      this._type,
      mi
    ).options, this._chart.update();
  }
  setTheme(t) {
    t !== "dark" && t !== "light" || !this._data || this._handleMode(t);
  }
  // Private
  _getDarkConfig(t) {
    let e = {};
    const i = c.getDataAttributes(this._element);
    Object.keys(i).forEach(
      (p) => p.startsWith("dark") && (e[p] = i[p])
    ), e = {
      ...Zg,
      ...e
    };
    const n = {
      y: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      },
      x: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      }
    }, o = {
      r: {
        ticks: {
          color: e.darkTicksColor,
          backdropColor: e.darkBgColor
        },
        grid: {
          color: e.darkGridLinesColor
        },
        pointLabels: {
          color: e.darkTicksColor
        }
      }
    }, l = {
      scales: ["pie", "doughnut", "polarArea", "radar"].includes(this._type) ? ["polarArea", "radar"].includes(this._type) ? o : {} : n,
      plugins: {
        legend: {
          labels: {
            color: e.darkLabelColor
          }
        }
      }
    };
    return t = {
      ...e,
      options: {
        ...l
      },
      ...t
    }, L(Ra, t, Qg), t;
  }
  _chartConstructor() {
    if (this._data) {
      this._createCanvas();
      const t = Yn(this._options, this._type, mi), e = [];
      t.dataLabelsPlugin && e.push(this._ChartDataLabels.default), this._prevConfig = t, this._chart = new this._Chartjs(this._canvas, {
        ...this._data,
        ...t,
        plugins: e
      });
    }
  }
  _createCanvas() {
    this._canvas || (this._element.nodeName === "CANVAS" ? this._canvas = this._element : (this._canvas = D("canvas"), this._element.appendChild(this._canvas)));
  }
  _handleMode(t) {
    t === "dark" ? (this._changeDatasetBorderColor(), this.update(null, this._darkOptions.options)) : (this._changeDatasetBorderColor(!1), this._prevConfig && this.update(null, this._prevConfig));
  }
  _observerCallback(t) {
    for (const e of t)
      e.type === "attributes" && this._handleMode(this.systemColorMode);
  }
  _changeDatasetBorderColor(t = !0) {
    [...this._data.data.datasets].forEach(
      (e) => ["pie", "doughnut", "polarArea"].includes(this._type) && (e.borderColor = t ? this._darkOptions.darkBgColor : this._darkOptions.darkBgColorLight)
    );
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = I.getData(this, _s);
      if (!(!n && /dispose/.test(t))) {
        if (!n) {
          const o = e ? Yn(e, i, mi) : mi[i];
          n = new vc(this, {
            ...t,
            ...o
          });
        }
        if (typeof t == "string") {
          if (typeof n[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          n[t](e, i);
        }
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, _s);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function $t(s) {
  return getComputedStyle(s);
}
function ot(s, t) {
  for (var e in t) {
    var i = t[e];
    typeof i == "number" && (i = i + "px"), s.style[e] = i;
  }
  return s;
}
function fs(s) {
  var t = document.createElement("div");
  return t.className = s, t;
}
var Pa = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function Zt(s, t) {
  if (!Pa)
    throw new Error("No element matching method supported");
  return Pa.call(s, t);
}
function Ne(s) {
  s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s);
}
function Ba(s, t) {
  return Array.prototype.filter.call(
    s.children,
    function(e) {
      return Zt(e, t);
    }
  );
}
var j = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function(s) {
      return "ps__thumb-" + s;
    },
    rail: function(s) {
      return "ps__rail-" + s;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function(s) {
      return "ps--active-" + s;
    },
    scrolling: function(s) {
      return "ps--scrolling-" + s;
    }
  }
}, Tc = { x: null, y: null };
function Ec(s, t) {
  var e = s.element.classList, i = j.state.scrolling(t);
  e.contains(i) ? clearTimeout(Tc[t]) : e.add(i);
}
function Cc(s, t) {
  Tc[t] = setTimeout(
    function() {
      return s.isAlive && s.element.classList.remove(j.state.scrolling(t));
    },
    s.settings.scrollingThreshold
  );
}
function Jg(s, t) {
  Ec(s, t), Cc(s, t);
}
var Pi = function(t) {
  this.element = t, this.handlers = {};
}, Ac = { isEmpty: { configurable: !0 } };
Pi.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Pi.prototype.unbind = function(t, e) {
  var i = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (i.element.removeEventListener(t, n, !1), !1);
  });
};
Pi.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Ac.isEmpty.get = function() {
  var s = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return s.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(Pi.prototype, Ac);
var Je = function() {
  this.eventElements = [];
};
Je.prototype.eventElement = function(t) {
  var e = this.eventElements.filter(function(i) {
    return i.element === t;
  })[0];
  return e || (e = new Pi(t), this.eventElements.push(e)), e;
};
Je.prototype.bind = function(t, e, i) {
  this.eventElement(t).bind(e, i);
};
Je.prototype.unbind = function(t, e, i) {
  var n = this.eventElement(t);
  n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
};
Je.prototype.unbindAll = function() {
  this.eventElements.forEach(function(t) {
    return t.unbindAll();
  }), this.eventElements = [];
};
Je.prototype.once = function(t, e, i) {
  var n = this.eventElement(t), o = function(r) {
    n.unbind(e, o), i(r);
  };
  n.bind(e, o);
};
function ms(s) {
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(s);
  var t = document.createEvent("CustomEvent");
  return t.initCustomEvent(s, !1, !1, void 0), t;
}
function Bs(s, t, e, i, n) {
  i === void 0 && (i = !0), n === void 0 && (n = !1);
  var o;
  if (t === "top")
    o = [
      "contentHeight",
      "containerHeight",
      "scrollTop",
      "y",
      "up",
      "down"
    ];
  else if (t === "left")
    o = [
      "contentWidth",
      "containerWidth",
      "scrollLeft",
      "x",
      "left",
      "right"
    ];
  else
    throw new Error("A proper axis should be provided");
  tb(s, e, o, i, n);
}
function tb(s, t, e, i, n) {
  var o = e[0], r = e[1], a = e[2], l = e[3], p = e[4], u = e[5];
  i === void 0 && (i = !0), n === void 0 && (n = !1);
  var f = s.element;
  s.reach[l] = null, f[a] < 1 && (s.reach[l] = "start"), f[a] > s[o] - s[r] - 1 && (s.reach[l] = "end"), t && (f.dispatchEvent(ms("ps-scroll-" + l)), t < 0 ? f.dispatchEvent(ms("ps-scroll-" + p)) : t > 0 && f.dispatchEvent(ms("ps-scroll-" + u)), i && Jg(s, l)), s.reach[l] && (t || n) && f.dispatchEvent(ms("ps-" + l + "-reach-" + s.reach[l]));
}
function V(s) {
  return parseInt(s, 10) || 0;
}
function eb(s) {
  return Zt(s, "input,[contenteditable]") || Zt(s, "select,[contenteditable]") || Zt(s, "textarea,[contenteditable]") || Zt(s, "button,[contenteditable]");
}
function ib(s) {
  var t = $t(s);
  return V(t.width) + V(t.paddingLeft) + V(t.paddingRight) + V(t.borderLeftWidth) + V(t.borderRightWidth);
}
var $e = {
  isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
};
function Bt(s) {
  var t = s.element, e = Math.floor(t.scrollTop), i = t.getBoundingClientRect();
  s.containerWidth = Math.round(i.width), s.containerHeight = Math.round(i.height), s.contentWidth = t.scrollWidth, s.contentHeight = t.scrollHeight, t.contains(s.scrollbarXRail) || (Ba(t, j.element.rail("x")).forEach(
    function(n) {
      return Ne(n);
    }
  ), t.appendChild(s.scrollbarXRail)), t.contains(s.scrollbarYRail) || (Ba(t, j.element.rail("y")).forEach(
    function(n) {
      return Ne(n);
    }
  ), t.appendChild(s.scrollbarYRail)), !s.settings.suppressScrollX && s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth ? (s.scrollbarXActive = !0, s.railXWidth = s.containerWidth - s.railXMarginWidth, s.railXRatio = s.containerWidth / s.railXWidth, s.scrollbarXWidth = Ha(
    s,
    V(s.railXWidth * s.containerWidth / s.contentWidth)
  ), s.scrollbarXLeft = V(
    (s.negativeScrollAdjustment + t.scrollLeft) * (s.railXWidth - s.scrollbarXWidth) / (s.contentWidth - s.containerWidth)
  )) : s.scrollbarXActive = !1, !s.settings.suppressScrollY && s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight ? (s.scrollbarYActive = !0, s.railYHeight = s.containerHeight - s.railYMarginHeight, s.railYRatio = s.containerHeight / s.railYHeight, s.scrollbarYHeight = Ha(
    s,
    V(s.railYHeight * s.containerHeight / s.contentHeight)
  ), s.scrollbarYTop = V(
    e * (s.railYHeight - s.scrollbarYHeight) / (s.contentHeight - s.containerHeight)
  )) : s.scrollbarYActive = !1, s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth && (s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth), s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight && (s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight), sb(t, s), s.scrollbarXActive ? t.classList.add(j.state.active("x")) : (t.classList.remove(j.state.active("x")), s.scrollbarXWidth = 0, s.scrollbarXLeft = 0, t.scrollLeft = s.isRtl === !0 ? s.contentWidth : 0), s.scrollbarYActive ? t.classList.add(j.state.active("y")) : (t.classList.remove(j.state.active("y")), s.scrollbarYHeight = 0, s.scrollbarYTop = 0, t.scrollTop = 0);
}
function Ha(s, t) {
  return s.settings.minScrollbarLength && (t = Math.max(t, s.settings.minScrollbarLength)), s.settings.maxScrollbarLength && (t = Math.min(t, s.settings.maxScrollbarLength)), t;
}
function sb(s, t) {
  var e = { width: t.railXWidth }, i = Math.floor(s.scrollTop);
  t.isRtl ? e.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth - t.contentWidth : e.left = s.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - i : e.top = t.scrollbarXTop + i, ot(t.scrollbarXRail, e);
  var n = { top: i, height: t.railYHeight };
  t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + s.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - s.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + s.scrollLeft, ot(t.scrollbarYRail, n), ot(t.scrollbarX, {
    left: t.scrollbarXLeft,
    width: t.scrollbarXWidth - t.railBorderXWidth
  }), ot(t.scrollbarY, {
    top: t.scrollbarYTop,
    height: t.scrollbarYHeight - t.railBorderYWidth
  });
}
function nb(s) {
  s.element, s.event.bind(s.scrollbarY, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarYRail, "mousedown", function(t) {
    var e = t.pageY - window.pageYOffset - s.scrollbarYRail.getBoundingClientRect().top, i = e > s.scrollbarYTop ? 1 : -1;
    s.element.scrollTop += i * s.containerHeight, Bt(s), t.stopPropagation();
  }), s.event.bind(s.scrollbarX, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarXRail, "mousedown", function(t) {
    var e = t.pageX - window.pageXOffset - s.scrollbarXRail.getBoundingClientRect().left, i = e > s.scrollbarXLeft ? 1 : -1;
    s.element.scrollLeft += i * s.containerWidth, Bt(s), t.stopPropagation();
  });
}
function ob(s) {
  Wa(s, [
    "containerWidth",
    "contentWidth",
    "pageX",
    "railXWidth",
    "scrollbarX",
    "scrollbarXWidth",
    "scrollLeft",
    "x",
    "scrollbarXRail"
  ]), Wa(s, [
    "containerHeight",
    "contentHeight",
    "pageY",
    "railYHeight",
    "scrollbarY",
    "scrollbarYHeight",
    "scrollTop",
    "y",
    "scrollbarYRail"
  ]);
}
function Wa(s, t) {
  var e = t[0], i = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], p = t[7], u = t[8], f = s.element, _ = null, m = null, g = null;
  function v(y) {
    y.touches && y.touches[0] && (y[n] = y.touches[0].pageY), f[l] = _ + g * (y[n] - m), Ec(s, p), Bt(s), y.stopPropagation(), y.type.startsWith("touch") && y.changedTouches.length > 1 && y.preventDefault();
  }
  function b() {
    Cc(s, p), s[u].classList.remove(j.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", v);
  }
  function C(y, E) {
    _ = f[l], E && y.touches && (y[n] = y.touches[0].pageY), m = y[n], g = (s[i] - s[e]) / (s[o] - s[a]), E ? s.event.bind(s.ownerDocument, "touchmove", v) : (s.event.bind(s.ownerDocument, "mousemove", v), s.event.once(s.ownerDocument, "mouseup", b), y.preventDefault()), s[u].classList.add(j.state.clicking), y.stopPropagation();
  }
  s.event.bind(s[r], "mousedown", function(y) {
    C(y);
  }), s.event.bind(s[r], "touchstart", function(y) {
    C(y, !0);
  });
}
function rb(s) {
  var t = s.element, e = function() {
    return Zt(t, ":hover");
  }, i = function() {
    return Zt(s.scrollbarX, ":focus") || Zt(s.scrollbarY, ":focus");
  };
  function n(o, r) {
    var a = Math.floor(t.scrollTop);
    if (o === 0) {
      if (!s.scrollbarYActive)
        return !1;
      if (a === 0 && r > 0 || a >= s.contentHeight - s.containerHeight && r < 0)
        return !s.settings.wheelPropagation;
    }
    var l = t.scrollLeft;
    if (r === 0) {
      if (!s.scrollbarXActive)
        return !1;
      if (l === 0 && o < 0 || l >= s.contentWidth - s.containerWidth && o > 0)
        return !s.settings.wheelPropagation;
    }
    return !0;
  }
  s.event.bind(s.ownerDocument, "keydown", function(o) {
    if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !i())) {
      var r = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
      if (r) {
        if (r.tagName === "IFRAME")
          r = r.contentDocument.activeElement;
        else
          for (; r.shadowRoot; )
            r = r.shadowRoot.activeElement;
        if (eb(r))
          return;
      }
      var a = 0, l = 0;
      switch (o.which) {
        case 37:
          o.metaKey ? a = -s.contentWidth : o.altKey ? a = -s.containerWidth : a = -30;
          break;
        case 38:
          o.metaKey ? l = s.contentHeight : o.altKey ? l = s.containerHeight : l = 30;
          break;
        case 39:
          o.metaKey ? a = s.contentWidth : o.altKey ? a = s.containerWidth : a = 30;
          break;
        case 40:
          o.metaKey ? l = -s.contentHeight : o.altKey ? l = -s.containerHeight : l = -30;
          break;
        case 32:
          o.shiftKey ? l = s.containerHeight : l = -s.containerHeight;
          break;
        case 33:
          l = s.containerHeight;
          break;
        case 34:
          l = -s.containerHeight;
          break;
        case 36:
          l = s.contentHeight;
          break;
        case 35:
          l = -s.contentHeight;
          break;
        default:
          return;
      }
      s.settings.suppressScrollX && a !== 0 || s.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Bt(s), n(a, l) && o.preventDefault());
    }
  });
}
function ab(s) {
  var t = s.element;
  function e(r, a) {
    var l = Math.floor(t.scrollTop), p = t.scrollTop === 0, u = l + t.offsetHeight === t.scrollHeight, f = t.scrollLeft === 0, _ = t.scrollLeft + t.offsetWidth === t.scrollWidth, m;
    return Math.abs(a) > Math.abs(r) ? m = p || u : m = f || _, m ? !s.settings.wheelPropagation : !0;
  }
  function i(r) {
    var a = r.deltaX, l = -1 * r.deltaY;
    return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [-l, -a] : [a, l];
  }
  function n(r, a, l) {
    if (!$e.isWebKit && t.querySelector("select:focus"))
      return !0;
    if (!t.contains(r))
      return !1;
    for (var p = r; p && p !== t; ) {
      if (p.classList.contains(j.element.consuming))
        return !0;
      var u = $t(p);
      if (l && u.overflowY.match(/(scroll|auto)/)) {
        var f = p.scrollHeight - p.clientHeight;
        if (f > 0 && (p.scrollTop > 0 && l < 0 || p.scrollTop < f && l > 0))
          return !0;
      }
      if (a && u.overflowX.match(/(scroll|auto)/)) {
        var _ = p.scrollWidth - p.clientWidth;
        if (_ > 0 && (p.scrollLeft > 0 && a < 0 || p.scrollLeft < _ && a > 0))
          return !0;
      }
      p = p.parentNode;
    }
    return !1;
  }
  function o(r) {
    var a = i(r), l = a[0], p = a[1];
    if (!n(r.target, l, p)) {
      var u = !1;
      s.settings.useBothWheelAxes ? s.scrollbarYActive && !s.scrollbarXActive ? (p ? t.scrollTop -= p * s.settings.wheelSpeed : t.scrollTop += l * s.settings.wheelSpeed, u = !0) : s.scrollbarXActive && !s.scrollbarYActive && (l ? t.scrollLeft += l * s.settings.wheelSpeed : t.scrollLeft -= p * s.settings.wheelSpeed, u = !0) : (t.scrollTop -= p * s.settings.wheelSpeed, t.scrollLeft += l * s.settings.wheelSpeed), Bt(s), u = u || e(l, p), u && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
    }
  }
  typeof window.onwheel < "u" ? s.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && s.event.bind(t, "mousewheel", o);
}
function lb(s) {
  if (!$e.supportsTouch && !$e.supportsIePointer)
    return;
  var t = s.element;
  function e(g, v) {
    var b = Math.floor(t.scrollTop), C = t.scrollLeft, y = Math.abs(g), E = Math.abs(v);
    if (E > y) {
      if (v < 0 && b === s.contentHeight - s.containerHeight || v > 0 && b === 0)
        return window.scrollY === 0 && v > 0 && $e.isChrome;
    } else if (y > E && (g < 0 && C === s.contentWidth - s.containerWidth || g > 0 && C === 0))
      return !0;
    return !0;
  }
  function i(g, v) {
    t.scrollTop -= v, t.scrollLeft -= g, Bt(s);
  }
  var n = {}, o = 0, r = {}, a = null;
  function l(g) {
    return g.targetTouches ? g.targetTouches[0] : g;
  }
  function p(g) {
    return g.pointerType && g.pointerType === "pen" && g.buttons === 0 ? !1 : !!(g.targetTouches && g.targetTouches.length === 1 || g.pointerType && g.pointerType !== "mouse" && g.pointerType !== g.MSPOINTER_TYPE_MOUSE);
  }
  function u(g) {
    if (p(g)) {
      var v = l(g);
      n.pageX = v.pageX, n.pageY = v.pageY, o = (/* @__PURE__ */ new Date()).getTime(), a !== null && clearInterval(a);
    }
  }
  function f(g, v, b) {
    if (!t.contains(g))
      return !1;
    for (var C = g; C && C !== t; ) {
      if (C.classList.contains(j.element.consuming))
        return !0;
      var y = $t(C);
      if (b && y.overflowY.match(/(scroll|auto)/)) {
        var E = C.scrollHeight - C.clientHeight;
        if (E > 0 && (C.scrollTop > 0 && b < 0 || C.scrollTop < E && b > 0))
          return !0;
      }
      if (v && y.overflowX.match(/(scroll|auto)/)) {
        var T = C.scrollWidth - C.clientWidth;
        if (T > 0 && (C.scrollLeft > 0 && v < 0 || C.scrollLeft < T && v > 0))
          return !0;
      }
      C = C.parentNode;
    }
    return !1;
  }
  function _(g) {
    if (p(g)) {
      var v = l(g), b = { pageX: v.pageX, pageY: v.pageY }, C = b.pageX - n.pageX, y = b.pageY - n.pageY;
      if (f(g.target, C, y))
        return;
      i(C, y), n = b;
      var E = (/* @__PURE__ */ new Date()).getTime(), T = E - o;
      T > 0 && (r.x = C / T, r.y = y / T, o = E), e(C, y) && g.preventDefault();
    }
  }
  function m() {
    s.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
      if (s.isInitialized) {
        clearInterval(a);
        return;
      }
      if (!r.x && !r.y) {
        clearInterval(a);
        return;
      }
      if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
        clearInterval(a);
        return;
      }
      if (!s.element) {
        clearInterval(a);
        return;
      }
      i(r.x * 30, r.y * 30), r.x *= 0.8, r.y *= 0.8;
    }, 10));
  }
  $e.supportsTouch ? (s.event.bind(t, "touchstart", u), s.event.bind(t, "touchmove", _), s.event.bind(t, "touchend", m)) : $e.supportsIePointer && (window.PointerEvent ? (s.event.bind(t, "pointerdown", u), s.event.bind(t, "pointermove", _), s.event.bind(t, "pointerup", m)) : window.MSPointerEvent && (s.event.bind(t, "MSPointerDown", u), s.event.bind(t, "MSPointerMove", _), s.event.bind(t, "MSPointerUp", m)));
}
var cb = function() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: !1,
    suppressScrollY: !1,
    swipeEasing: !0,
    useBothWheelAxes: !1,
    wheelPropagation: !0,
    wheelSpeed: 1
  };
}, hb = {
  "click-rail": nb,
  "drag-thumb": ob,
  keyboard: rb,
  wheel: ab,
  touch: lb
}, Bi = function(t, e) {
  var i = this;
  if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName)
    throw new Error("no element is specified to initialize PerfectScrollbar");
  this.element = t, t.classList.add(j.main), this.settings = cb();
  for (var n in e)
    this.settings[n] = e[n];
  this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
  var o = function() {
    return t.classList.add(j.state.focus);
  }, r = function() {
    return t.classList.remove(j.state.focus);
  };
  this.isRtl = $t(t).direction === "rtl", this.isRtl === !0 && t.classList.add(j.rtl), this.isNegativeScroll = function() {
    var p = t.scrollLeft, u = null;
    return t.scrollLeft = -1, u = t.scrollLeft < 0, t.scrollLeft = p, u;
  }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new Je(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = fs(j.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = fs(j.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
  var a = $t(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = V(a.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = V(a.borderLeftWidth) + V(a.borderRightWidth), ot(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = V(a.marginLeft) + V(a.marginRight), ot(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = fs(j.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = fs(j.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
  var l = $t(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = V(l.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? ib(this.scrollbarY) : null, this.railBorderYWidth = V(l.borderTopWidth) + V(l.borderBottomWidth), ot(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = V(l.marginTop) + V(l.marginBottom), ot(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = {
    x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  }, this.isAlive = !0, this.settings.handlers.forEach(function(p) {
    return hb[p](i);
  }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(p) {
    return i.onScroll(p);
  }), Bt(this);
};
Bi.prototype.update = function() {
  this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, ot(this.scrollbarXRail, { display: "block" }), ot(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = V($t(this.scrollbarXRail).marginLeft) + V($t(this.scrollbarXRail).marginRight), this.railYMarginHeight = V($t(this.scrollbarYRail).marginTop) + V($t(this.scrollbarYRail).marginBottom), ot(this.scrollbarXRail, { display: "none" }), ot(this.scrollbarYRail, { display: "none" }), Bt(this), Bs(this, "top", 0, !1, !0), Bs(this, "left", 0, !1, !0), ot(this.scrollbarXRail, { display: "" }), ot(this.scrollbarYRail, { display: "" }));
};
Bi.prototype.onScroll = function(t) {
  this.isAlive && (Bt(this), Bs(this, "top", this.element.scrollTop - this.lastScrollTop), Bs(
    this,
    "left",
    this.element.scrollLeft - this.lastScrollLeft
  ), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
};
Bi.prototype.destroy = function() {
  this.isAlive && (this.event.unbindAll(), Ne(this.scrollbarX), Ne(this.scrollbarY), Ne(this.scrollbarXRail), Ne(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
};
Bi.prototype.removePsClasses = function() {
  this.element.className = this.element.className.split(" ").filter(function(t) {
    return !t.match(/^ps([-_].+|)$/);
  }).join(" ");
};
const jn = "perfectScrollbar", db = "perfect-scrollbar", gs = "te.perfectScrollbar", kt = "te", Ot = "ps", Kn = [
  { te: `scrollX.${kt}.${Ot}`, ps: "ps-scroll-x" },
  { te: `scrollY.${kt}.${Ot}`, ps: "ps-scroll-y" },
  { te: `scrollUp.${kt}.${Ot}`, ps: "ps-scroll-up" },
  { te: `scrollDown.${kt}.${Ot}`, ps: "ps-scroll-down" },
  { te: `scrollLeft.${kt}.${Ot}`, ps: "ps-scroll-left" },
  { te: `scrollRight.${kt}.${Ot}`, ps: "ps-scroll-right" },
  { te: `scrollXEnd.${kt}.${Ot}`, ps: "ps-x-reach-end" },
  { te: `scrollYEnd.${kt}.${Ot}`, ps: "ps-y-reach-end" },
  { te: `scrollXStart.${kt}.${Ot}`, ps: "ps-x-reach-start" },
  { te: `scrollYStart.${kt}.${Ot}`, ps: "ps-y-reach-start" }
], ub = {
  handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 1,
  wheelPropagation: !0,
  swipeEasing: !0,
  minScrollbarLength: null,
  maxScrollbarLength: null,
  scrollingThreshold: 1e3,
  useBothWheelAxes: !1,
  suppressScrollX: !1,
  suppressScrollY: !1,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  positionRight: !0
}, pb = {
  handlers: "(string|array)",
  wheelSpeed: "number",
  wheelPropagation: "boolean",
  swipeEasing: "boolean",
  minScrollbarLength: "(number|null)",
  maxScrollbarLength: "(number|null)",
  scrollingThreshold: "number",
  useBothWheelAxes: "boolean",
  suppressScrollX: "boolean",
  suppressScrollY: "boolean",
  scrollXMarginOffset: "number",
  scrollYMarginOffset: "number",
  positionRight: "boolean"
}, _b = {
  ps: "group/ps overflow-hidden [overflow-anchor:none] touch-none",
  railX: "group/x absolute bottom-0 h-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-x]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railXColors: "group-[&.ps--active-x]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railXThumb: "absolute bottom-0.5 rounded-md h-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:h-[11px] group-focus/x:h-[0.6875rem] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none",
  railXThumbColors: "bg-[#aaa] group-hover/x:bg-[#999] group-focus/x:bg-[#999]",
  railY: "group/y absolute right-0 w-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-y]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railYColors: "group-[&.ps--active-y]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railYThumb: "absolute right-0.5 rounded-md w-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_width_.2s_ease-in-out,_opacity] group-hover/y:w-[11px] group-focus/y:w-[0.6875rem] group-[&.ps--clicking]/y:w-[11px] outline-none",
  railYThumbColors: "bg-[#aaa] group-hover/y:bg-[#999] group-focus/y:bg-[#999] group-[&.ps--clicking]/y:bg-[#999]"
}, fb = {
  ps: "string",
  railX: "string",
  railXColors: "string",
  railXThumb: "string",
  railXThumbColors: "string",
  railY: "string",
  railYColors: "string",
  railYThumb: "string",
  railYThumbColors: "string"
};
class Lo {
  constructor(t, e = {}, i = {}) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this.perfectScrollbar = null, this._observer = null, this._psClasses = [
      {
        ps: "ps__rail-x",
        te: this._classes.railX,
        teColor: this._classes.railXColors
      },
      {
        ps: "ps__rail-y",
        te: this._classes.railY,
        teColor: this._classes.railYColors
      },
      {
        ps: "ps__thumb-x",
        te: this._classes.railXThumb,
        teColor: this._classes.railXThumbColors
      },
      {
        ps: "ps__thumb-y",
        te: this._classes.railYThumb,
        teColor: this._classes.railYThumbColors
      }
    ], this._element && (I.setData(t, gs, this), c.addClass(this._element, db)), this.init();
  }
  // Getters
  static get NAME() {
    return jn;
  }
  get railX() {
    return d.findOne(".ps__rail-x", this._element);
  }
  get railY() {
    return d.findOne(".ps__rail-y", this._element);
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    return e.handlers !== void 0 && (e.handlers = e.handlers.split(" ")), t = {
      ...ub,
      ...e,
      ...t
    }, L(jn, t, pb), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ..._b,
      ...e,
      ...t
    }, L(jn, t, fb), t;
  }
  // Public
  dispose() {
    this._options.positionRight && this._observer.disconnect(), I.removeData(this._element, gs), this._element = null, this._dataAttrOptions = null, this._options = null, this.perfectScrollbar.destroy(), this.removeEvent(Kn), this.perfectScrollbar = null;
  }
  init() {
    if (this.perfectScrollbar = new Bi(this._element, this._options), this._addPerfectScrollbarStyles(), this._updateScrollPosition(), this.perfectScrollbar.update(), this._initEvents(Kn), this._options.positionRight) {
      this._observer = new ResizeObserver(() => {
        setTimeout(() => {
          this._updateScrollPosition();
        }, 100);
      });
      const t = {
        attributes: !0,
        attributeFilter: ["class", "className"]
      };
      this._observer.observe(this._element, t);
    }
  }
  _updateScrollPosition() {
    const t = getComputedStyle(this._element).getPropertyValue("height"), e = getComputedStyle(this._element).getPropertyValue("width");
    this.railX && (this.railX.style.transform = `translateY(calc(-100% + ${this._canTransform(t) ? t : "0px"}))`), this.railY && (this.railY.style.transform = `translateX(calc(-100% + ${this._canTransform(e) ? e : "0px"}))`);
  }
  _canTransform(t) {
    return t && t.includes("px");
  }
  update() {
    return this.perfectScrollbar.update();
  }
  _initEvents(t = []) {
    t.forEach(
      ({ ps: e, te: i }) => h.on(
        this._element,
        e,
        (n) => h.trigger(this._element, i, { e: n })
      )
    );
  }
  _addPerfectScrollbarStyles() {
    this._psClasses.forEach((t) => {
      const e = d.findOne(`.${t.ps}`, this._element);
      c.addClass(e, t.te), c.addClass(e, t.teColor);
    }), c.addClass(this._element, this._classes.ps), c.removeClass(this._element, "ps");
  }
  removeEvent(t) {
    let e = [];
    typeof t == "string" && (e = Kn.filter(({ te: i }) => i === t)), e.forEach(({ ps: i, te: n }) => {
      h.off(this._element, i), h.off(this._element, n);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = I.getData(this, gs);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose|hide/.test(t)) && (e || (e = new Lo(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, gs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const yc = Lo, mb = "data-te-datatable-select-ref", gb = "data-te-datatable-pagination-nav-ref", bb = "data-te-datatable-pagination-right-ref", vb = "data-te-datatable-pagination-left-ref", Tb = "data-te-datatable-pagination-start-ref", Eb = "data-te-datatable-pagination-end-ref", Cb = ({
  text: s,
  entries: t,
  entriesOptions: e,
  fullPagination: i,
  rowsText: n,
  allText: o,
  paginationStartIconTemplate: r,
  paginationLeftIconTemplate: a,
  paginationRightIconTemplate: l,
  paginationEndIconTemplate: p,
  classes: u
}, f, _) => {
  const m = e.map((g) => g === "All" ? `<option value="${g}" ${g === t ? "selected" : ""}>${o}</option>` : `<option value="${g}" ${g === t ? "selected" : ""}>${g}</option>`).join(`
`);
  return `
<div class="${u.pagination} ${_ ? `${u.paginationBordered}` : ""} ${u.borderColor} ${u.color}">
  <div class="${u.selectItemsWrapper}">  
    <p class="${u.paginationRowsText} ${f ? `${u.loadingPaginationRowsText}` : ""}">${n}</p>
    <div class="${u.selectWrapper} ${f ? `${u.loadingPaginationSelectWrapper}` : ""}">
      <select name="entries"
        ${f ? "disabled" : ""} class="select" ${mb}>
        ${m}
      </select>
    </div>
  </div>
  <div class="${u.paginationNav} ${f ? `${u.loadingPaginationNav}` : ""}" ${gb}>
  ${s}
  </div>
  <div class="${u.paginationButtonsWrapper}">
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationStartButton}" ${Tb}>
           ${r}
          </button>` : ""}
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationLeftButton}" ${vb}>
      ${a}
  </button>
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationRightButton}" ${bb}>
      ${l}
  </button>
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationEndButton}" ${Eb}>
           ${p}
          </button>` : ""}
  </div>
</div>
`;
}, Ab = "data-te-datatable-sort-icon-ref", yb = "data-te-datatable-header-checkbox-ref", wb = (s, t, e, i, n, o, r, a) => {
  const l = e ? `
  <th scope="col">
    <div class="${a.checkboxHeaderWrapper}">
      <input
        class="${a.checkboxHeader}"
        type="checkbox"
        value=""
        ${yb}
        />
    </div>
  </th>
  ` : '<th scope="col"></th>', p = s.map((u, f) => {
    const _ = u.fixed ? s.filter((m, g) => m.fixed === u.fixed && g < f).reduce((m, g) => m + g.width, 0) : null;
    return `<th class="${a.column} ${i ? `${a.tableBordered}` : ""} ${a.borderColor} ${n ? `${a.sm}` : ""} ${u.fixed ? `${a.fixedHeader} ${a.color}` : ""} ${o ? `${a.loadingColumn}` : ""}" style="${u.fixed ? `${u.fixed === "right" ? "right" : "left"}: ${_}px;` : ""}" scope="col">${u.sort ? `<div class="${a.sortIconWrapper}"><span class="${a.sortIcon} ${o ? "invisible" : ""}" data-te-sort="${u.field}" ${Ab}>${r}</span>` : ""} <span class="${u.sort ? "" : "pl-[18px]"}">${u.label}</span></div></th>`;
  });
  return [t ? l : "", ...p].join(`
`);
}, xb = "data-te-datatable-row-ref", kb = "data-te-datatable-row-checkbox-ref", Ob = "data-te-datatable-cell-ref", Sb = ({
  rows: s,
  columns: t,
  noFoundMessage: e,
  edit: i,
  selectable: n,
  loading: o,
  bordered: r,
  borderless: a,
  striped: l,
  hover: p,
  sm: u,
  classes: f
}) => {
  const _ = s.map((m) => {
    const g = `
      <td data-te-field="checkbox" class="${r ? `${f.tableBordered} ${f.borderColor}` : ""}">
        <div class="${f.checkboxRowWrapper}">
          <input
            class="${f.checkboxRow}"
            type="checkbox"
            value=""
            data-te-row-index="${m.rowIndex}"  ${kb}/>
        </div>
      </td>`, v = t.map((b, C) => {
      const y = {};
      if (b.width && (y["min-width"] = `${b.width - 1}px`, y["max-width"] = `${b.width}px`, y.width = `${b.width}px`), b.fixed) {
        const T = t.filter((A, w) => A.fixed === b.fixed && w < C).reduce((A, w) => A + w.width, 0);
        y[b.fixed === "right" ? "right" : "left"] = `${T}px`;
      }
      return `<td style="${Object.keys(y).map((T) => `${T}: ${y[T]}`).join("; ")}" class="${f.rowItem} ${f.borderColor} ${i ? `${f.edit}` : ""} ${r ? `${f.tableBordered}` : ""} ${u ? `${f.sm}` : ""} ${b.fixed ? `${f.fixedHeader} ${f.color}` : ""}" ${Ob} data-te-field="${b.field}" ${i && 'contenteditable="true"'}>${m[b.field]}</td>`;
    }).join("");
    return `<tr scope="row" class="${f.row} ${f.borderColor} ${f.rowAnimation} ${l ? `${f.striped}` : ""} ${a ? `${f.borderless}` : ""} ${p ? `${f.hoverRow}` : ""}" data-te-index="${m.rowIndex}" ${xb}>${n ? g : ""}${v}</tr>`;
  });
  return s.length > 0 || o ? _.join(`
`) : `<tr class="${f.noFoundMessageWrapper} ${f.borderColor}"><td class="${f.noFoundMessage}">${e}</td></tr>`;
}, Ib = "data-te-datatable-inner-ref", Db = "data-te-datatable-header-ref", Va = ({
  columns: s,
  rows: t,
  noFoundMessage: e,
  edit: i,
  multi: n,
  selectable: o,
  loading: r,
  loadingMessage: a,
  pagination: l,
  bordered: p,
  borderless: u,
  striped: f,
  hover: _,
  fixedHeader: m,
  sm: g,
  sortIconTemplate: v,
  classes: b
}) => {
  const C = Sb({
    rows: t,
    columns: s,
    noFoundMessage: e,
    edit: i,
    loading: r,
    selectable: o,
    bordered: p,
    borderless: u,
    striped: f,
    hover: _,
    sm: g,
    classes: b
  }), y = wb(
    s,
    o,
    n,
    p,
    g,
    r,
    v,
    b
  );
  return { table: `
<div class="${b.color}" ${Ib}>
  <table class="${b.table}">
    <thead class="${b.tableHeader} ${p ? `${b.tableBordered}` : ""} ${u ? `${b.borderless}` : ""} ${b.borderColor}" ${Db}>
      <tr>
        ${y}
      </tr>
    </thead>
    <tbody class="${m ? `${b.fixedHeaderBody}` : ""}">
      ${r ? "" : C}
    </tbody>
  </table>
</div>
${r ? `
  <div class="${b.loadingItemsWrapper}">
    <div class="${b.loadingProgressBarWrapper}">
      <div class="${b.loadingProgressBar}"></div>
    </div>
  </div>
<p class="${b.loadingMessage}">${a}</p>
` : ""}
${l.enable ? Cb(l, r, p) : ""}
  `, rows: C, column: y };
}, $b = ({ rows: s, field: t, order: e }) => s.sort((n, o) => {
  let r = n[t], a = o[t];
  return typeof r == "string" && (r = r.toLowerCase()), typeof a == "string" && (a = a.toLowerCase()), r < a ? e === "desc" ? 1 : -1 : r > a ? e === "desc" ? -1 : 1 : 0;
}), Lb = (s, t, e) => {
  if (!t)
    return s;
  const i = (n) => {
    const o = document.createElement("div");
    return o.innerHTML = n, n = o.textContent || o.innerText || "", n.toString().toLowerCase().match(t.toLowerCase());
  };
  return s.filter((n) => {
    if (e && typeof e == "string")
      return i(n[e]);
    let o = Object.values(n);
    return e && Array.isArray(e) && (o = Object.keys(n).filter((r) => e.includes(r)).map((r) => n[r])), o.filter((r) => i(r)).length > 0;
  });
}, Fa = ({ rows: s, entries: t, activePage: e }) => {
  const i = e * t;
  return s.slice(i, i + Number(t));
}, xi = "datatable", _t = `data-te-${xi}`, gi = `te.${xi}`, zs = `.${gi}`, Mb = `[${_t}-inner-ref]`, zn = `[${_t}-cell-ref]`, Nb = `[${_t}-header-ref]`, Rb = `[${_t}-header-checkbox-ref]`, Pb = `[${_t}-pagination-right-ref]`, Bb = `[${_t}-pagination-left-ref]`, Hb = `[${_t}-pagination-start-ref]`, Wb = `[${_t}-pagination-end-ref]`, Vb = `[${_t}-pagination-nav-ref]`, Fb = `[${_t}-select-ref]`, Un = `[${_t}-sort-icon-ref]`, di = `[${_t}-row-ref]`, Xn = `[${_t}-row-checkbox-ref]`, Yb = `selectRows${zs}`, Ya = `render${zs}`, jb = `rowClick${zs}`, Kb = `update${zs}`, zb = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>`, Ub = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>`, Xb = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>`, Gb = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`, qb = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
</svg>`, Zb = "border-neutral-200 dark:border-neutral-500", Qb = "border-none", Jb = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400", tv = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center", ev = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400", iv = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center", sv = "bg-white dark:bg-neutral-800", nv = "py-4 pl-1 text-clip overflow-hidden text-[#212529] dark:text-white", ov = "focus:outline-none", rv = "sticky top-0 z-30", av = "sticky z-10 bg-inherit", lv = "hover:bg-neutral-100 dark:hover:bg-neutral-700", cv = "pointer-events-none cursor-none text-neutral-400 dark:text-neutral-300", hv = "h-[2px] relative w-full overflow-hidden", dv = "text-center text-neutral-500 font-ligh text-sm my-4 dark:text-neutral-400", uv = "text-neutral-500 dark:text-neutral-300", pv = "text-neutral-500 dark:text-neutral-300", _v = "pointer-events-none cursor-none", fv = "h-full w-[45%] bg-primary-400 dark:bg-primary-600", mv = "h-full animate-[progress_3s_ease-in-out_infinite]", gv = "pl-2 py-3 font-light text-sm dark:text-neutral-300", bv = "border-b", vv = "flex md:flex-row justify-end items-center py-2 space-x-4 text-sm flex-col leading-[1.6]", Tv = "border border-t-0", Ev = "order-1 my-3 md:order-none md:my-0 md:pr-1", Cv = "inline-block rounded p-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", Av = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", yv = "font-normal order-2 mb-3 md:order-none md:mb-0", wv = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", xv = "font-light", kv = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", Ov = "border-b", Sv = "transition ease-in-out duration-300 motion-reduce:transition-none", Iv = "whitespace-nowrap text-clip overflow-hidden px-[1.4rem] py-4", Dv = "relative", $v = "!bg-neutral-100 dark:!bg-neutral-600", Lv = "flex items-center space-x-4 order-3 md:order-none", Mv = "w-[70px]", Nv = "!py-2", Rv = "w-[15px] h-[10px] origin-bottom font-black mr-1 opacity-0 text-neutral-500 group-hover:opacity-100 transition hover:ease-in-out transform ease-linear duration-300 motion-reduce:transition-none dark:text-neutral-400", Pv = "flex flex-row group", Bv = "[&:nth-child(odd)]:bg-neutral-50 [&:nth-child(odd)]:dark:bg-neutral-700", Hv = "border", Wv = "border-b font-normal px-[1.4rem]", Vv = "text-left text-sm font-light w-full leading-[1.6]", Fv = {
  bordered: "boolean",
  borderless: "boolean",
  clickableRows: "boolean",
  defaultValue: "string",
  edit: "boolean",
  entries: "(number|string)",
  entriesOptions: "array",
  fullPagination: "boolean",
  hover: "boolean",
  loading: "boolean",
  loadingMessage: "string",
  maxWidth: "(null|number|string)",
  maxHeight: "(null|number|string)",
  multi: "boolean",
  noFoundMessage: "string",
  pagination: "boolean",
  selectable: "boolean",
  sm: "boolean",
  sortField: "(null|string)",
  sortOrder: "string",
  fixedHeader: "boolean",
  striped: "boolean",
  rowsText: "string",
  ofText: "string",
  allText: "string",
  forceSort: "boolean",
  sortIconTemplate: "string",
  paginationStartIconTemplate: "string",
  paginationEndIconTemplate: "string",
  paginationLeftIconTemplate: "string",
  paginationRightIconTemplate: "string"
}, Yv = {
  bordered: !1,
  borderless: !1,
  clickableRows: !1,
  defaultValue: "-",
  edit: !1,
  entries: 10,
  entriesOptions: [10, 25, 50, 200],
  fixedHeader: !1,
  fullPagination: !1,
  hover: !1,
  loading: !1,
  loadingMessage: "Loading results...",
  maxWidth: null,
  maxHeight: null,
  multi: !1,
  noFoundMessage: "No matching results found",
  pagination: !0,
  selectable: !1,
  sm: !1,
  sortField: null,
  sortOrder: "asc",
  striped: !1,
  rowsText: "Rows per page:",
  ofText: "of",
  allText: "All",
  forceSort: !1,
  sortIconTemplate: zb,
  paginationStartIconTemplate: Ub,
  paginationEndIconTemplate: qb,
  paginationLeftIconTemplate: Xb,
  paginationRightIconTemplate: Gb
}, jv = {
  label: "string",
  field: "string",
  fixed: "(boolean|string)",
  format: "(function|null)",
  width: "(number|null)",
  sort: "boolean",
  columnIndex: "number"
}, Kv = {
  label: "",
  field: "",
  fixed: !1,
  format: null,
  width: null,
  sort: !0,
  columnIndex: 0
}, zv = {
  table: Vv,
  tableHeader: Wv,
  column: nv,
  pagination: vv,
  selectWrapper: Mv,
  scroll: Dv,
  tableBordered: Hv,
  paginationBordered: Tv,
  borderless: Qb,
  checkboxRowWrapper: iv,
  checkboxRow: ev,
  checkboxHeaderWrapper: tv,
  checkboxHeader: Jb,
  row: Ov,
  rowItem: Iv,
  striped: Bv,
  sortIconWrapper: Pv,
  sortIcon: Rv,
  paginationRowsText: xv,
  paginationNav: yv,
  paginationButtonsWrapper: Ev,
  hoverRow: lv,
  borderColor: Zb,
  color: sv,
  fixedHeader: rv,
  fixedHeaderBody: av,
  selectableRow: $v,
  rowAnimation: Sv,
  sm: Nv,
  edit: ov,
  selectItemsWrapper: Lv,
  paginationStartButton: kv,
  paginationLeftButton: Av,
  paginationRightButton: wv,
  paginationEndButton: Cv,
  loadingItemsWrapper: hv,
  loadingProgressBarWrapper: mv,
  loadingProgressBar: fv,
  loadingMessage: dv,
  loadingPaginationRowsText: pv,
  loadingPaginationSelectWrapper: _v,
  loadingPaginationNav: uv,
  loadingColumn: cv,
  noFoundMessageWrapper: bv,
  noFoundMessage: gv
}, Uv = {
  table: "string",
  tableHeader: "string",
  column: "string",
  pagination: "string",
  selectWrapper: "string",
  scroll: "string",
  tableBordered: "string",
  paginationBordered: "string",
  borderless: "string",
  checkboxRowWrapper: "string",
  checkboxRow: "string",
  checkboxHeaderWrapper: "string",
  checkboxHeader: "string",
  row: "string",
  rowItem: "string",
  striped: "string",
  sortIconWrapper: "string",
  sortIcon: "string",
  paginationRowsText: "string",
  paginationNav: "string",
  paginationButtonsWrapper: "string",
  hoverRow: "string",
  borderColor: "string",
  color: "string",
  fixedHeader: "string",
  fixedHeaderBody: "string",
  selectableRow: "string",
  rowAnimation: "string",
  sm: "string",
  edit: "string",
  selectItemsWrapper: "string",
  paginationStartButton: "string",
  paginationLeftButton: "string",
  paginationRightButton: "string",
  paginationEndButton: "string",
  loadingItemsWrapper: "string",
  loadingProgressBarWrapper: "string",
  loadingProgressBar: "string",
  loadingMessage: "string",
  loadingPaginationRowsText: "string",
  loadingPaginationSelectWrapper: "string",
  loadingPaginationNav: "string",
  loadingColumn: "string",
  noFoundMessageWrapper: "string",
  noFoundMessage: "string"
};
class wc {
  constructor(t, e = {}, i = {}, n = {}) {
    this._element = t, this._options = this._getOptions(i), this._classes = this._getClasses(n), this._sortReverse = !1, this._activePage = 0, this._search = "", this._searchColumn = null, this._paginationLeft = null, this._paginationRight = null, this._paginationStart = null, this._paginationEnd = null, this._select = null, this._selectInstance = null, this._selected = [], this._checkboxes = null, this._headerCheckbox = null, this._rows = this._getRows(e.rows), this._columns = this._getColumns(e.columns), this._element && (I.setData(t, gi, this), this._perfectScrollbar = null, this._setup());
  }
  // Getters
  static get NAME() {
    return xi;
  }
  get columns() {
    return this._columns.map((t, e) => {
      let i = {
        ...Kv,
        field: `field_${e}`,
        columnIndex: e
      };
      return typeof t == "string" ? i.label = t : typeof t == "object" && (i = {
        ...i,
        ...t
      }), L("column", i, jv), i;
    });
  }
  get rows() {
    return this._rows.map((t, e) => {
      const i = {
        rowIndex: e
      };
      return Array.isArray(t) ? this.columns.forEach((n, o) => {
        t[o] === 0 ? i[n.field] = t[o] : i[n.field] = t[o] || this._options.defaultValue;
      }) : typeof t == "object" && this.columns.forEach((n) => {
        t[n.field] === 0 ? i[n.field] = t[n.field] : i[n.field] = t[n.field] || this._options.defaultValue;
      }), i;
    });
  }
  get searchResult() {
    return Lb(this.rows, this._search, this._searchColumn);
  }
  get computedRows() {
    let t = [...this.searchResult];
    return this._options.sortOrder && (t = $b({
      rows: t,
      field: this._options.sortField,
      order: this._options.sortOrder
    })), this._options.pagination && (this._options.entries === "All" ? t = Fa({
      rows: t,
      entries: t.length,
      activePage: this._activePage
    }) : t = Fa({
      rows: t,
      entries: this._options.entries,
      activePage: this._activePage
    })), t;
  }
  get pages() {
    return this._options.entries === "All" ? 1 : Math.ceil(this.searchResult.length / this._options.entries);
  }
  get navigationText() {
    const t = this._activePage * this._options.entries;
    return this.searchResult.length === 0 ? `0 ${this._options.ofText} 0` : this._options.entries === "All" ? `1 - ${this.searchResult.length} ${this._options.ofText} ${this.searchResult.length}` : `${t + 1} - ${this.computedRows.length + t} ${this._options.ofText} ${this.searchResult.length}`;
  }
  get tableOptions() {
    return {
      classes: this._classes,
      columns: this.columns,
      rows: this.computedRows,
      noFoundMessage: this._options.noFoundMessage,
      edit: this._options.edit,
      loading: this._options.loading,
      loaderClass: this._options.loaderClass,
      loadingMessage: this._options.loadingMessage,
      selectable: this._options.selectable,
      multi: this._options.multi,
      bordered: this._options.bordered,
      borderless: this._options.borderless,
      striped: this._options.striped,
      hover: this._options.hover,
      fixedHeader: this._options.fixedHeader,
      sm: this._options.sm,
      sortIconTemplate: this._options.sortIconTemplate,
      pagination: {
        enable: this._options.pagination,
        text: this.navigationText,
        entries: this._options.entries,
        entriesOptions: this._options.entriesOptions,
        fullPagination: this._options.fullPagination,
        rowsText: this._options.rowsText,
        ofText: this._options.ofText,
        allText: this._options.allText,
        paginationStartIconTemplate: this._options.paginationStartIconTemplate,
        paginationLeftIconTemplate: this._options.paginationLeftIconTemplate,
        paginationRightIconTemplate: this._options.paginationRightIconTemplate,
        paginationEndIconTemplate: this._options.paginationEndIconTemplate,
        classes: this._classes
      },
      forceSort: this._options.forceSort
    };
  }
  // Public
  update(t, e = {}) {
    t && t.rows && (this._rows = t.rows), t && t.columns && (this._columns = t.columns), this._clearClassList(e), this._options = this._getOptions({ ...this._options, ...e }), this._setup(), this._performSort();
  }
  dispose() {
    this._selectInstance && this._selectInstance.dispose(), I.removeData(this._element, gi), this._removeEventListeners(), this._perfectScrollbar.destroy(), this._element = null;
  }
  search(t, e) {
    this._search = t, this._searchColumn = e, this._activePage = 0, this._options.pagination && this._toggleDisableState(), this._renderRows(), this._options.maxHeight && (this._perfectScrollbar.element.scrollTop = 0, this._perfectScrollbar.update());
  }
  sort(t, e = "asc") {
    this._options.sortOrder = e, typeof t == "string" ? this._options.sortField = this.columns.find(
      (n) => n.label === t
    ).field : this._options.sortField = t.field;
    const i = d.findOne(
      `[data-te-sort="${this._options.sortField}"]`,
      this._element
    );
    this._activePage = 0, this._toggleDisableState(), this._renderRows(), this._setActiveSortIcon(i);
  }
  setActivePage(t) {
    t < this.pages && this._changeActivePage(t);
  }
  // Private
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...zv,
      ...e,
      ...t
    }, L(xi, t, Uv), t;
  }
  _changeActivePage(t) {
    this._activePage = t, this._toggleDisableState(), this._renderRows();
  }
  _clearClassList(t) {
    ["hover", "bordered", "borderless", "sm", "striped"].forEach((e) => {
      this._options[e] && !t[e] && c.removeDataAttribute(`data-te-${e}`);
    });
  }
  _emitSelectEvent() {
    h.trigger(this._element, Yb, {
      selectedRows: this.rows.filter(
        (t) => this._selected.indexOf(t.rowIndex) !== -1
      ),
      selectedIndexes: this._selected,
      allSelected: this._selected.length === this.rows.length
    });
  }
  _getRows(t = []) {
    const e = d.findOne("tbody", this._element);
    return e ? [...d.find("tr", e).map((n) => d.find("td", n).map((o) => o.innerHTML)), ...t] : t;
  }
  _getColumns(t = []) {
    const e = d.findOne("thead", this._element);
    if (!e)
      return t;
    const i = d.findOne("tr", e);
    return [...d.find("th", i).map((o) => ({
      label: o.innerHTML,
      ...c.getDataAttributes(o)
    })), ...t];
  }
  _getCSSValue(t) {
    return typeof t == "string" ? t : `${t}px`;
  }
  _getOptions(t) {
    const e = {
      ...Yv,
      ...c.getDataAttributes(this._element),
      ...t
    };
    return L(xi, e, Fv), e;
  }
  _setActiveRows() {
    d.find(di, this._element).forEach((t) => {
      this._selected.includes(c.getDataAttribute(t, "index")) ? c.addClass(t, `active ${this._classes.selectableRow}`) : c.removeClass(t, `active ${this._classes.selectableRow}`);
    });
  }
  _setEntries(t) {
    this._options = this._getOptions({
      ...this._options,
      entries: t.target.value
    }), this._activePage > this.pages - 1 && (this._activePage = this.pages - 1), this._toggleDisableState(), this._renderRows();
  }
  _setSelected() {
    d.find(Xn, this._element).forEach(
      (t) => {
        const e = c.getDataAttribute(t, "rowIndex");
        t.checked = this._selected.includes(e);
      }
    ), this._setActiveRows();
  }
  _setActiveSortIcon(t) {
    d.find(Un, this._element).forEach((e) => {
      const i = this._options.sortOrder === "desc" && e === t ? 180 : 0;
      c.style(e, {
        transform: `rotate(${i}deg)`
      }), e === t && this._options.sortOrder ? c.addClass(e, "opacity-100") : c.removeClass(e, "opacity-100");
    });
  }
  _setup() {
    this._renderTable(), this._options.pagination && this._setupPagination(), this._options.edit && this._setupEditable(), this._options.clickableRows && this._setupClickableRows(), this._options.selectable && this._setupSelectable(), this._setupScroll(), this._setupSort();
  }
  _setupClickableRows() {
    d.find(di, this._element).forEach((t) => {
      const e = c.getDataAttribute(t, "index");
      c.addClass(t, "cursor-pointer"), h.on(t, "click", (i) => {
        d.matches(i.target, Xn) || h.trigger(this._element, jb, {
          index: e,
          row: this.rows[e]
        });
      });
    });
  }
  _setupEditable() {
    d.find(di, this._element).forEach((t) => {
      const e = c.getDataAttribute(t, "index");
      d.find(zn, t).forEach((i) => {
        h.on(i, "input", (n) => this._updateRow(n, e));
      });
    });
  }
  _setupScroll() {
    const t = d.findOne(Mb, this._element), e = {};
    if (this._options.maxHeight && (e.maxHeight = this._getCSSValue(this._options.maxHeight)), this._options.maxWidth) {
      const i = this._getCSSValue(this._options.maxWidth);
      e.maxWidth = i, c.style(this._element, { maxWidth: i });
    }
    if (c.style(t, e), c.addClass(t, `${this._classes.scroll}`), this._options.fixedHeader) {
      let i = d.find(Nb, this._element);
      this._options.selectable && (i = i.filter((n, o) => (c.addClass(
        n,
        `${this._classes.fixedHeader} ${this._classes.color}`
      ), o !== 0))), i.forEach((n, o) => {
        c.addClass(
          n,
          `${this._classes.fixedHeader} ${this._classes.color}`
        ), this.columns[o].fixed && c.addClass(n, "!z-40");
      });
    }
    this._perfectScrollbar = new yc(t);
  }
  _setupSort() {
    d.find(Un, this._element).forEach((t) => {
      const e = c.getDataAttribute(t, "sort"), [i] = d.parents(t, "th");
      if (this.columns.sort)
        c.addClass(i, "cursor-pointer");
      else
        return;
      e === this._options.sortField && this._setActiveSortIcon(t), h.on(i, "click", () => {
        this._options.sortField === e && this._options.sortOrder === "asc" ? this._options.sortOrder = "desc" : this._options.sortField === e && this._options.sortOrder === "desc" ? this._options.sortOrder = this._options.forceSort ? "asc" : null : this._options.sortOrder = "asc", this._options.sortField = e, this._activePage = 0, this._performSort(), this._setActiveSortIcon(t);
      });
    });
  }
  _performSort() {
    this._toggleDisableState(), this._renderRows();
  }
  _setupSelectable() {
    this._checkboxes = d.find(Xn, this._element), this._headerCheckbox = d.findOne(
      Rb,
      this._element
    ), h.on(
      this._headerCheckbox,
      "input",
      (t) => this._toggleSelectAll(t)
    ), this._checkboxes.forEach((t) => {
      const e = c.getDataAttribute(t, "rowIndex");
      h.on(
        t,
        "input",
        (i) => this._toggleSelectRow(i, e)
      );
    });
  }
  _setupPagination() {
    this._paginationRight = d.findOne(
      Pb,
      this._element
    ), this._paginationLeft = d.findOne(
      Bb,
      this._element
    ), h.on(
      this._paginationRight,
      "click",
      () => this._changeActivePage(this._activePage + 1)
    ), h.on(
      this._paginationLeft,
      "click",
      () => this._changeActivePage(this._activePage - 1)
    ), this._options.fullPagination && (this._paginationStart = d.findOne(
      Hb,
      this._element
    ), this._paginationEnd = d.findOne(
      Wb,
      this._element
    ), h.on(
      this._paginationStart,
      "click",
      () => this._changeActivePage(0)
    ), h.on(
      this._paginationEnd,
      "click",
      () => this._changeActivePage(this.pages - 1)
    )), this._toggleDisableState(), this._setupPaginationSelect();
  }
  _setupPaginationSelect() {
    this._select = d.findOne(Fb, this._element), this._selectInstance = new $o(this._select), h.on(
      this._select,
      "valueChange.te.select",
      (t) => this._setEntries(t)
    );
  }
  _removeEventListeners() {
    this._options.pagination && (h.off(this._paginationRight, "click"), h.off(this._paginationLeft, "click"), h.off(this._select, "valueChange.te.select"), this._options.fullPagination && (h.off(this._paginationStart, "click"), h.off(this._paginationEnd, "click"))), this._options.edit && d.find(zn, this._element).forEach((t) => {
      h.off(t, "input");
    }), this._options.clickableRows && d.find(di, this._element).forEach((t) => {
      h.off(t, "click");
    }), d.find(Un, this._element).forEach((t) => {
      const [e] = d.parents(t, "th");
      h.off(e, "click");
    }), this._options.selectable && (h.off(this._headerCheckbox, "input"), this._checkboxes.forEach((t) => {
      h.off(t, "input");
    }));
  }
  _renderTable() {
    this._element.innerHTML = Va(this.tableOptions).table, this._formatCells(), h.trigger(this._element, Ya);
  }
  _renderRows() {
    const t = d.findOne("tbody", this._element);
    if (this._options.pagination) {
      const e = d.findOne(
        Vb,
        this._element
      );
      e.innerText = this.navigationText;
    }
    t.innerHTML = Va(this.tableOptions).rows, this._formatCells(), this._options.edit && this._setupEditable(), this._options.selectable && (this._setupSelectable(), this._setSelected()), this._options.clickableRows && this._setupClickableRows(), h.trigger(this._element, Ya);
  }
  _formatCells() {
    d.find(di, this._element).forEach((e) => {
      const i = c.getDataAttribute(e, "index");
      d.find(zn, e).forEach((o) => {
        const r = c.getDataAttribute(o, "field"), a = this.columns.find((l) => l.field === r);
        a && a.format !== null && a.format(o, this.rows[i][r]);
      });
    });
  }
  _toggleDisableState() {
    this._options.pagination !== !1 && (this._activePage === 0 || this._options.loading ? (this._paginationLeft.setAttribute("disabled", ""), this._options.fullPagination && this._paginationStart.setAttribute("disabled", "")) : (this._paginationLeft.removeAttribute("disabled"), this._options.fullPagination && this._paginationStart.removeAttribute("disabled")), this._activePage === this.pages - 1 || this._options.loading || this.pages === 0 ? (this._paginationRight.setAttribute("disabled", ""), this._options.fullPagination && this._paginationEnd.setAttribute("disabled", "")) : (this._paginationRight.removeAttribute("disabled"), this._options.fullPagination && this._paginationEnd.removeAttribute("disabled")));
  }
  _toggleSelectAll(t) {
    t.target.checked ? this._selected = this.rows.map((e) => e.rowIndex) : this._selected = [], this._setSelected(), this._emitSelectEvent();
  }
  _toggleSelectRow(t, e) {
    t.target.checked ? this._options.multi && !this._selected.includes(e) ? this._selected = [...this._selected, e] : (this._selected = [e], this._checkboxes.forEach((i) => {
      i !== t.target && (i.checked = !1);
    })) : this._selected = this._selected.filter((i) => i !== e), this._options.multi && !t.target.checked && (this._headerCheckbox.checked = !1), this._setActiveRows(), this._emitSelectEvent();
  }
  _updateRow(t, e) {
    const i = c.getDataAttribute(t.target, "field"), n = t.target.textContent, o = this._rows[e];
    if (Array.isArray(o)) {
      const a = this.columns.find((l) => l.field === i).columnIndex;
      o[a] = n;
    } else
      o[i] = n;
    h.trigger(this._element, Kb, {
      rows: this._rows,
      columns: this._columns
    });
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = I.getData(this, gi);
      const o = typeof t == "object" && t;
      if (!(!n && /dispose/.test(t)) && (n || (n = new wc(this, o, e)), typeof t == "string")) {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](e, i);
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, gi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const ja = "rating", $s = "te.rating", Xv = "data-te-rating-init", Gv = "[data-te-rating-icon-ref]", ti = `.${$s}`, qv = "ArrowLeft", Zv = "ArrowRight", Qv = {
  tooltip: "string",
  value: "(string|number)",
  readonly: "boolean",
  after: "string",
  before: "string",
  dynamic: "boolean",
  active: "string"
}, Jv = {
  tooltip: "top",
  value: "",
  readonly: !1,
  after: "",
  before: "",
  dynamic: !1,
  active: "fill-current"
}, Ka = `onSelect${ti}`, t0 = `onHover${ti}`, za = `keyup${ti}`, Ua = `focusout${ti}`, Xa = `keydown${ti}`, Ga = `mousedown${ti}`;
class z0 {
  constructor(t, e) {
    this._element = t, this._icons = d.find(Gv, this._element), this._options = this._getConfig(e), this._index = -1, this._savedIndex = null, this._originalClassList = [], this._originalIcons = [], this._fn = {}, this._tooltips = [], this._element && (I.setData(t, $s, this), this._init());
  }
  // Getters
  static get NAME() {
    return ja;
  }
  dispose() {
    I.removeData(this._element, $s), this._options.readonly || (h.off(this._element, za), h.off(this._element, Ua), h.off(this._element, Xa), this._element.removeEventListener("mouseleave", this._fn.mouseleave), this._icons.forEach((t, e) => {
      h.off(t, Ga), t.removeEventListener("mouseenter", this._fn.mouseenter[e]), c.removeClass(t, "cursor-pointer");
    }), this._tooltips.forEach((t) => {
      t._element.removeAttribute(Xv), t.dispose();
    }), this._icons.removeAttribute("tabIndex")), this._element = null;
  }
  // Private
  _init() {
    this._options.readonly || (this._bindMouseEnter(), this._bindMouseLeave(), this._bindMouseDown(), this._bindKeyDown(), this._bindKeyUp(), this._bindFocusLost(), this._icons.forEach((t) => {
      c.addClass(t, "cursor-pointer");
    })), this._options.dynamic && (this._saveOriginalClassList(), this._saveOriginalIcons()), this._setCustomText(), this._setToolTips(), this._options.value && (this._index = this._options.value - 1, this._updateRating(this._index));
  }
  _getConfig(t) {
    const e = c.getDataAttributes(this._element);
    return t = {
      ...Jv,
      ...e,
      ...t
    }, L(ja, t, Qv), t;
  }
  _bindMouseEnter() {
    this._fn.mouseenter = [], this._icons.forEach((t, e) => {
      t.addEventListener(
        "mouseenter",
        // this._fn.mouseenter[i] is needed to create reference and unpin events after call dispose
        // prettier-ignore
        this._fn.mouseenter[e] = (i) => {
          this._index = this._icons.indexOf(i.target), this._updateRating(this._index), this._triggerEvents(t, t0);
        }
      );
    });
  }
  _bindMouseLeave() {
    this._element.addEventListener(
      "mouseleave",
      // this._fn.mouseleave is needed to create reference and unpin events after call dispose
      // prettier-ignore
      this._fn.mouseleave = () => {
        this._savedIndex !== null ? (this._updateRating(this._savedIndex), this._index = this._savedIndex) : this._options.value ? (this._updateRating(this._options.value - 1), this._index = this._options.value - 1) : (this._index = -1, this._clearRating());
      }
    );
  }
  _bindMouseDown() {
    this._icons.forEach((t) => {
      h.on(t, Ga, () => {
        this._setElementOutline("none"), this._savedIndex = this._index, this._triggerEvents(t, Ka);
      });
    });
  }
  _bindKeyDown() {
    this._element.tabIndex = 0, h.on(
      this._element,
      Xa,
      (t) => this._updateAfterKeyDown(t)
    );
  }
  _bindKeyUp() {
    h.on(
      this._element,
      za,
      () => this._setElementOutline("auto")
    );
  }
  _bindFocusLost() {
    h.on(
      this._element,
      Ua,
      () => this._setElementOutline("none")
    );
  }
  _setElementOutline(t) {
    this._element.style.outline = t;
  }
  _triggerEvents(t, e) {
    h.trigger(t, e, {
      value: this._index + 1
    });
  }
  _updateAfterKeyDown(t) {
    const e = this._icons.length - 1, i = this._index;
    t.key === Zv && this._index < e && (this._index += 1), t.key === qv && this._index > -1 && (this._index -= 1), i !== this._index && (this._savedIndex = this._index, this._updateRating(this._savedIndex), this._triggerEvents(this._icons[this._savedIndex], Ka));
  }
  _updateRating(t) {
    this._clearRating(), this._options.dynamic && this._restoreOriginalIcon(t), this._icons.forEach((e, i) => {
      i <= t && c.addClass(e.querySelector("svg"), this._options.active);
    });
  }
  _clearRating() {
    this._icons.forEach((t, e) => {
      const i = t.querySelector("svg");
      this._options.dynamic && (t.classList = this._originalClassList[e], i.innerHTML = this._originalIcons[e]), c.removeClass(i, this._options.active);
    });
  }
  _setToolTips() {
    this._icons.forEach((t, e) => {
      const i = c.getDataAttribute(t, "toggle");
      t.title && !i && (c.setDataAttribute(t, "toggle", "tooltip"), this._tooltips[e] = new Qe(t, {
        placement: this._options.tooltip
      }));
    });
  }
  _setCustomText() {
    this._icons.forEach((t) => {
      const e = c.getDataAttribute(t, "after"), i = c.getDataAttribute(t, "before");
      e && t.insertAdjacentHTML("afterEnd", e), i && t.insertAdjacentHTML("beforeBegin", i);
    });
  }
  _saveOriginalClassList() {
    this._icons.forEach((t) => {
      const e = t.classList.value;
      this._originalClassList.push(e);
    });
  }
  _saveOriginalIcons() {
    this._icons.forEach((t) => {
      const e = t.querySelector("svg").innerHTML;
      this._originalIcons.push(e);
    });
  }
  _restoreOriginalIcon(t) {
    const e = this._originalClassList[t], i = this._originalIcons[t];
    this._icons.forEach((n, o) => {
      if (o <= t) {
        const r = n.querySelector("svg");
        r.innerHTML = i, n.classList = e;
      }
    });
  }
  // Static
  static getInstance(t) {
    return I.getData(t, $s);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Gn = "popconfirm", bi = "te.popconfirm", xc = `.${bi}`, e0 = `cancel${xc}`, i0 = `confirm${xc}`, s0 = "[data-te-popconfirm-body]", qn = "data-te-popconfirm-popover", n0 = "data-te-popconfirm-modal", qa = "data-te-popconfirm-backdrop", o0 = {
  popconfirmMode: "string",
  message: "string",
  cancelText: "(null|string)",
  okText: "(null|string)",
  popconfirmIconTemplate: "string",
  cancelLabel: "(null|string)",
  confirmLabel: "(null|string)",
  position: "(null|string)"
}, r0 = {
  popconfirmMode: "inline",
  message: "Are you sure?",
  cancelText: "Cancel",
  okText: "OK",
  popconfirmIconTemplate: "",
  cancelLabel: "Cancel",
  confirmLabel: "Confirm",
  position: "bottom"
}, a0 = {
  backdrop: "string",
  body: "string",
  btnCancel: "string",
  btnConfirm: "string",
  btnsContainer: "string",
  fade: "string",
  icon: "string",
  message: "string",
  messageText: "string",
  modal: "string",
  popover: "string"
}, l0 = {
  backdrop: "h-full w-full z-[1070] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center",
  body: "p-[1rem] bg-white rounded-[0.5rem] opacity-0 dark:bg-neutral-700",
  btnCancel: "inline-block rounded bg-primary-100 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200",
  btnConfirm: "inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  btnsContainer: "flex justify-end space-x-2",
  fade: "transition-opacity duration-[150ms] ease-linear",
  icon: "pr-2",
  message: "flex mb-3",
  messageText: "text-neutral-600 dark:text-white",
  modal: "absolute w-[300px] z-[1080] shadow-sm rounded-[0.5rem]",
  popover: "w-[300px] border-0 rounded-[0.5rem] z-[1080] shadow-sm"
};
class kc {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._popper = null, this._cancelButton = "", this._confirmButton = "", this._isOpen = !1, this._uid = this._element.id ? `popconfirm-${this._element.id}` : bt("popconfirm-"), t && I.setData(t, bi, this), this._clickHandler = this.open.bind(this), h.on(this._element, "click", this._clickHandler);
  }
  // Getters
  static get NAME() {
    return Gn;
  }
  get container() {
    return d.findOne(`#${this._uid}`);
  }
  get popconfirmBody() {
    return d.findOne(
      s0,
      this.container
    );
  }
  // Public
  dispose() {
    (this._isOpen || this.container !== null) && this.close(), I.removeData(this._element, bi), h.off(this._element, "click", this._clickHandler), this._element = null;
  }
  open() {
    this._isOpen || (this._options.popconfirmMode === "inline" ? this._openPopover(this._getPopoverTemplate()) : this._openModal(this._getModalTemplate()), this._handleCancelButtonClick(), this._handleConfirmButtonClick(), this._listenToEscapeKey(), this._listenToOutsideClick());
  }
  close() {
    if (this._isOpen) {
      if (this._popper !== null || d.findOne(`[${qn}]`) !== null)
        h.on(
          this.popconfirmBody,
          "transitionend",
          this._handlePopconfirmTransitionEnd.bind(this)
        ), c.removeClass(this.popconfirmBody, "opacity-100");
      else {
        const t = d.findOne(
          `[${qa}]`
        );
        c.removeClass(this.popconfirmBody, "opacity-100"), document.body.removeChild(t), this._isOpen = !1;
      }
      h.off(document, "click", this._handleOutsideClick.bind(this)), h.off(document, "keydown", this._handleEscapeKey.bind(this));
    }
  }
  _handlePopconfirmTransitionEnd(t) {
    if (t.target !== this.popconfirmBody)
      return;
    const e = d.findOne(
      `[${qn}]`
    );
    h.off(this.popconfirmBody, "transitionend"), this._isOpen && t && t.propertyName === "opacity" && (this._popper.destroy(), e && document.body.removeChild(e), this._isOpen = !1);
  }
  // Private
  _getPopoverTemplate() {
    const t = D("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(qn, ""), c.addClass(t, this._classes.popover), t.id = this._uid, t.innerHTML = e, t;
  }
  _getModalTemplate() {
    const t = D("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(n0, ""), c.addClass(t, `${this._classes.modal}`), t.id = this._uid, t.innerHTML = e, t;
  }
  _getPopconfirmTemplate() {
    return `<div data-te-popconfirm-body class="${this._classes.body}">
      <p class="${this._classes.message}">
      ${this._options.popconfirmIconTemplate ? `<span class="${this._classes.icon}">${this._options.popconfirmIconTemplate}</span>` : ""}
      <span class="${this._classes.messageText}">${this._options.message}</span>
      </p>
      <div class="${this._classes.btnsContainer}">
      ${this._options.cancelText ? `<button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-cancel" aria-label="${this._options.cancelLabel}"
        class="${this._classes.btnCancel}">${this._options.cancelText}</button>` : ""}
      <button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-confirm"
      aria-label="${this._options.confirmLabel}"
      class="${this._classes.btnConfirm}">${this._options.okText ? this._options.okText : "Ok"}</button>
      </div>
    </div>`;
  }
  _getConfig(t) {
    return t = {
      ...r0,
      ...c.getDataAttributes(this._element),
      ...t
    }, L(Gn, t, o0), t;
  }
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...l0,
      ...e,
      ...t
    }, L(Gn, t, a0), t;
  }
  _openPopover(t) {
    this._popper = Ee(this._element, t, {
      placement: this._translatePositionValue(),
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 5]
          }
        }
      ]
    }), document.body.appendChild(t), setTimeout(() => {
      c.addClass(
        this.popconfirmBody,
        `${this._classes.fade} opacity-100`
      ), this._isOpen = !0;
    }, 0);
  }
  _openModal(t) {
    const e = D("div");
    e.setAttribute(qa, ""), c.addClass(e, this._classes.backdrop), document.body.appendChild(e), e.appendChild(t), c.addClass(this.popconfirmBody, "opacity-100"), this._isOpen = !0;
  }
  _handleCancelButtonClick() {
    const t = this.container;
    this._cancelButton = d.findOne(
      "#popconfirm-button-cancel",
      t
    ), Ue.getOrCreateInstance(this._cancelButton, { rippleColor: "light" }), this._cancelButton !== null && h.on(this._cancelButton, "click", () => {
      this.close(), h.trigger(this._element, e0);
    });
  }
  _handleConfirmButtonClick() {
    const t = this.container;
    this._confirmButton = d.findOne(
      "#popconfirm-button-confirm",
      t
    ), Ue.getOrCreateInstance(this._confirmButton, { rippleColor: "light" }), h.on(this._confirmButton, "click", () => {
      this.close(), h.trigger(this._element, i0);
    });
  }
  _listenToEscapeKey() {
    h.on(document, "keydown", this._handleEscapeKey.bind(this));
  }
  _handleEscapeKey(t) {
    t.keyCode === Li && this.close();
  }
  _listenToOutsideClick() {
    h.on(document, "click", this._handleOutsideClick.bind(this));
  }
  _handleOutsideClick(t) {
    const e = this.container, i = t.target === e, n = e && e.contains(t.target), o = t.target === this._element, r = this._element && this._element.contains(t.target);
    !i && !n && !o && !r && this.close();
  }
  _translatePositionValue() {
    switch (this._options.position) {
      case "top left":
        return "top-end";
      case "top":
        return "top";
      case "top right":
        return "top-start";
      case "bottom left":
        return "bottom-end";
      case "bottom":
        return "bottom";
      case "bottom right":
        return "bottom-start";
      case "left":
        return "left";
      case "left top":
        return "left-end";
      case "left bottom":
        return "left-start";
      case "right":
        return "right";
      case "right top":
        return "right-end";
      case "right bottom":
        return "right-start";
      case void 0:
        return "bottom";
      default:
        return "bottom";
    }
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = I.getData(this, bi), n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t))) {
        if (!i)
          return new kc(this, n);
        if (typeof t == "string") {
          if (typeof i[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      }
    });
  }
  static getInstance(t) {
    return I.getData(t, bi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Zn = "lightbox", vi = "te.lightbox", c0 = `.${vi}`, h0 = ".data-api", Se = `click${c0}${h0}`, Oc = "[data-te-lightbox-init]", d0 = `${Oc} img:not([data-te-lightbox-disabled])`, Za = "data-te-lightbox-caption", u0 = "data-te-lightbox-disabled", St = "data-te-lightbox-active", p0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
`, _0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
`, f0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
`, m0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>
`, g0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
</svg>
`, b0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
</svg>
`, v0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`, T0 = {
  container: "string",
  zoomLevel: "(number|string)",
  prevIconTemplate: "string",
  nextIconTemplate: "string",
  showFullscreenIconTemplate: "string",
  hideFullscreenIconTemplate: "string",
  zoomInIconTemplate: "string",
  closeIconTemplate: "string",
  zoomOutIconTemplate: "string",
  spinnerContent: "string"
}, E0 = {
  container: "body",
  zoomLevel: 1,
  prevIconTemplate: p0,
  nextIconTemplate: _0,
  showFullscreenIconTemplate: f0,
  hideFullscreenIconTemplate: m0,
  zoomInIconTemplate: g0,
  zoomOutIconTemplate: b0,
  closeIconTemplate: v0,
  spinnerContent: "Loading..."
}, C0 = {
  caption: "text-white text-ellipsis overflow-hidden whitespace-nowrap mx-[10px] text-center",
  captionWrapper: "fixed left-0 bottom-0 w-full h-[50px] flex justify-center items-center",
  closeBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  fullscreenBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  gallery: "invisible fixed left-0 top-0 w-full h-full z-[1100] pointer-events-none opacity-0 bg-[#000000e6] transition-all duration-[400ms] motion-reduce:transition-none",
  galleryContent: "fixed top-[50px] left-[50px] w-[calc(100%-100px)] h-[calc(100%-100px)]",
  galleryCounter: "flex justify-center items-center px-[10px] mb-0 h-full text-[#b3b3b3]",
  img: "absolute left-0 top-0 w-full max-h-full h-auto cursor-pointer pointer-events-auto",
  imgWrapper: "absolute top-0 left-0 w-full h-full opacity-0 transform scale-[0.25] transition-all duration-[400ms] ease-out pointer-events-none motion-reduce:transition-none motion-reduce:transform-none",
  leftTools: "float-left h-full",
  loader: "fixed left-0 top-0 z-[2] w-full h-full text-neutral-50 opacity-1 flex justify-center items-center pointer-events-none transition-opacity duration-[1000ms] motion-reduce:transition-none",
  nextBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  nextBtnWrapper: "fixed right-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  prevBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  prevBtnWrapper: "fixed left-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  rightTools: "float-right",
  spinner: "inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]",
  spinnerContent: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
  toolbar: "absolute top-0 left-0 w-full h-[50px] z-20 transition-opacity duration-[400ms] motion-reduce:transition-none",
  vertical: "h-full max-h-full w-auto",
  zoomBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none"
}, A0 = {
  caption: "string",
  captionWrapper: "string",
  closeBtn: "string",
  fullscreenBtn: "string",
  gallery: "string",
  galleryContent: "string",
  galleryCounter: "string",
  img: "string",
  imgWrapper: "string",
  leftTools: "string",
  loader: "string",
  nextBtn: "string",
  nextBtnWrapper: "string",
  prevBtn: "string",
  prevBtnWrapper: "string",
  rightTools: "string",
  spinner: "string",
  spinnerContent: "string",
  toolbar: "string",
  vertical: "string",
  zoomBtn: "string"
};
class Ls {
  constructor(t, e = {}, i) {
    this._element = t, this._options = e, this._classes = this._getClasses(i), this._getContainer(), this._id = `lightbox-${Math.random().toString(36).substr(2, 9)}`, this._activeImg = 0, this._images = [], this._zoom = 1, this._gallery = null, this._galleryToolbar = null, this._galleryContent = null, this._loader = null, this._imgCounter = null, this._animating = !1, this._fullscreen = !1, this._zoomBtn = null, this._fullscreenBtn = null, this._toolsToggleTimer = 0, this._mousedown = !1, this._mousedownPositionX = 0, this._mousedownPositionY = 0, this._originalPositionX = 0, this._originalPositionY = 0, this._positionX = 0, this._positionY = 0, this._zoomTimer = 0, this._tapCounter = 0, this._tapTime = 0, this._rightArrow = null, this._leftArrowWrapper = null, this._rightArrowWrapper = null, this._initiated = !1, this._multitouch = !1, this._touchZoomPosition = [], this._element && (I.setData(t, vi, this), this.init());
  }
  // Getters
  static get NAME() {
    return Zn;
  }
  get activeImg() {
    return this._activeImg;
  }
  get currentImg() {
    return d.findOne(
      `[${St}]`,
      this._galleryContent
    );
  }
  get options() {
    const t = {
      ...E0,
      ...c.getDataAttributes(this._element),
      ...this._options
    };
    return L(Zn, t, T0), t;
  }
  // Public
  init() {
    this._initiated || (this._appendTemplate(), this._initiated = !0);
  }
  open(t = 0) {
    this._getImages(), this._setActiveImg(t), this._sortImages(), this._triggerEvents("open", "opened"), this._loadImages().then((e) => {
      this._resizeImages(e), this._toggleTemplate(), this._addEvents(), this._focusFullscreenBtn();
    });
  }
  close() {
    this.reset(), this._removeEvents(), this._toggleTemplate(), this._triggerEvents("close", "closed");
  }
  slide(t = "right") {
    this._animating === !0 || this._images.length <= 1 || (this._triggerEvents("slide", "slided"), this._beforeSlideEvents(), t === "right" && this._slideHorizontally(t), t === "left" && this._slideHorizontally(t), t === "first" && this._slideToTarget(t), t === "last" && this._slideToTarget(t), this._afterSlideEvents());
  }
  zoomIn() {
    this._zoom >= 3 || (this._triggerEvents("zoomIn", "zoomedIn"), this._zoom += parseFloat(this.options.zoomLevel), c.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn());
  }
  zoomOut() {
    this._zoom <= 1 || (this._triggerEvents("zoomOut", "zoomedOut"), this._zoom -= parseFloat(this.options.zoomLevel), c.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  toggleFullscreen() {
    this._fullscreen === !1 ? (this._fullscreenBtn.setAttribute(St, ""), this._fullscreenBtn.innerHTML = this.options.hideFullscreenIconTemplate, this._gallery.requestFullscreen && this._gallery.requestFullscreen(), this._fullscreen = !0) : (this._fullscreenBtn.removeAttribute(St), document.exitFullscreen && document.exitFullscreen(), this._fullscreen = !1);
  }
  reset() {
    this._restoreDefaultFullscreen(), this._restoreDefaultPosition(), this._restoreDefaultZoom(), clearTimeout(this._toolsToggleTimer), clearTimeout(this._doubleTapTimer);
  }
  dispose() {
    h.off(
      document,
      Se,
      d0,
      this.toggle
    ), this._galleryContent && this._removeEvents(), this._gallery && this._gallery.remove(), I.removeData(this._element, vi), this._element = null;
  }
  // Private
  _getClasses(t) {
    const e = c.getDataClassAttributes(this._element);
    return t = {
      ...C0,
      ...e,
      ...t
    }, L(Zn, t, A0), t;
  }
  _getImages() {
    const e = d.find("img", this._element).filter(
      (i) => !i.hasAttribute(u0)
    );
    this._images = e;
  }
  _getContainer() {
    this._container = d.findOne(this.options.container);
  }
  _setActiveImg(t) {
    this._activeImg = typeof t == "number" ? t : this._images.indexOf(t.target);
  }
  _appendTemplate() {
    this._gallery = D("div"), c.addClass(this._gallery, `${this._classes.gallery}`), this._element.dataset.id = this._id, this._gallery.id = this._id, this._appendLoader(), this._appendToolbar(), this._appendContent(), this._appendArrows(), this._appendCaption(), this._container.append(this._gallery);
  }
  _appendToolbar() {
    this._galleryToolbar = D("div"), this._imgCounter = D("p"), this._fullscreenBtn = D("button"), this._zoomBtn = D("button");
    const t = D("button"), e = D("div"), i = D("div");
    c.addClass(this._galleryToolbar, `${this._classes.toolbar}`), c.addClass(this._imgCounter, `${this._classes.galleryCounter}`), c.addClass(this._fullscreenBtn, `${this._classes.fullscreenBtn}`), c.addClass(this._zoomBtn, `${this._classes.zoomInBtn}`), c.addClass(this._zoomBtn, this._classes.zoomBtn), c.addClass(e, `${this._classes.leftTools}`), c.addClass(i, `${this._classes.rightTools}`), c.addClass(t, `${this._classes.closeBtn}`), this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, t.innerHTML = this.options.closeIconTemplate, this._zoomBtn.innerHTML = this.options.zoomInIconTemplate, this._fullscreenBtn.setAttribute("aria-label", "Toggle fullscreen"), this._zoomBtn.setAttribute("aria-label", "Zoom in"), t.setAttribute("aria-label", "Close"), h.on(
      this._fullscreenBtn,
      Se,
      () => this.toggleFullscreen()
    ), h.on(
      this._zoomBtn,
      Se,
      () => this._toggleZoom()
    ), h.on(t, Se, () => this.close()), e.append(this._imgCounter), i.append(this._fullscreenBtn), i.append(this._zoomBtn), i.append(t), this._galleryToolbar.append(e), this._galleryToolbar.append(i), this._gallery.append(this._galleryToolbar);
  }
  _appendContent() {
    this._galleryContent = D("div"), c.addClass(
      this._galleryContent,
      `${this._classes.galleryContent}`
    ), this._gallery.append(this._galleryContent);
  }
  _appendLoader() {
    this._loader = D("div");
    const t = D("div"), e = D("span");
    c.addClass(this._loader, `${this._classes.loader}`), c.addClass(t, `${this._classes.spinner}`), c.addClass(e, `${this._classes.spinnerContent}`), t.setAttribute("role", "status"), e.innerHTML = this.options.spinnerContent, t.append(e), this._loader.append(t), this._gallery.append(this._loader);
  }
  _appendArrows() {
    this._leftArrowWrapper = D("div"), c.addClass(
      this._leftArrowWrapper,
      `${this._classes.prevBtnWrapper}`
    );
    const t = D("button");
    t.setAttribute("aria-label", "Previous"), c.addClass(t, `${this._classes.prevBtn}`), h.on(t, Se, () => this.slide("left")), this._leftArrowWrapper.append(t), this._rightArrowWrapper = D("div"), c.addClass(
      this._rightArrowWrapper,
      `${this._classes.nextBtnWrapper}`
    ), this._rightArrow = D("button"), this._rightArrow.setAttribute("aria-label", "Next"), c.addClass(this._rightArrow, `${this._classes.nextBtn}`), h.on(this._rightArrow, Se, () => this.slide()), this._rightArrowWrapper.append(this._rightArrow), this._rightArrow.innerHTML = this.options.nextIconTemplate, t.innerHTML = this.options.prevIconTemplate, this._getImages(), !(this._images.length <= 1) && (this._gallery.append(this._leftArrowWrapper), this._gallery.append(this._rightArrowWrapper));
  }
  _appendCaption() {
    const t = D("div"), e = D("p");
    e.setAttribute(Za, ""), c.addClass(t, `${this._classes.captionWrapper}`), c.addClass(e, `${this._classes.caption}`), t.append(e), this._gallery.append(t);
  }
  _sortImages() {
    for (let t = 0; t < this._activeImg; t++)
      this._images.push(this._images.shift());
  }
  async _loadImages() {
    const t = [], e = [];
    this._galleryContent.innerHTML = "";
    let i = 0;
    return this._images.forEach((n, o) => {
      t.push(
        new Promise((r) => {
          const a = new Image(), l = D("div");
          c.addClass(l, `${this._classes.imgWrapper}`), c.addClass(a, `${this._classes.img}`), this._addImgStyles(a, l, i, o, n), l.append(a), this._galleryContent.append(l), a.onload = r, a.src = n.dataset.teImg || n.src, e.push(a), i += 100;
        })
      );
    }), await Promise.all(t), e;
  }
  _addImgStyles(t, e, i, n, o) {
    t.alt = o.alt, t.draggable = !1, c.style(e, {
      position: "absolute",
      left: `${i}%`,
      top: 0
    }), (o.dataset.teCaption || o.dataset.teCaption === "") && (t.dataset.caption = o.dataset.teCaption), i === 0 ? (o.width < o.height && c.addClass(t, `${this._classes.vertical}`), c.style(e, { opacity: 1 }), t.setAttribute(St, "")) : t.removeAttribute(St), n === this._images.length - 1 && this._images.length > 1 && c.style(e, { left: "-100%" });
  }
  _resizeImages(t) {
    t.forEach((e) => {
      this._calculateImgSize(e);
    });
  }
  _calculateImgSize(t) {
    t.width >= t.height ? (t.style.width = "100%", t.style.maxWidth = "100%", t.style.height = "auto", t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`, t.style.left = 0) : (t.style.height = "100%", t.style.maxHeight = "100%", t.style.width = "auto", t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`, t.style.top = 0), t.width >= t.parentNode.offsetWidth && (t.style.width = `${t.parentNode.offsetWidth}px`, t.style.height = "auto", t.style.left = 0, t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`), t.height >= t.parentNode.offsetHeight && (t.style.height = `${t.parentNode.offsetHeight}px`, t.style.width = "auto", t.style.top = 0, t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`), this._positionX = parseFloat(t.style.left) || 0, this._positionY = parseFloat(t.style.top) || 0;
  }
  _onResize() {
    this._images = d.find("img", this._galleryContent), this._images.forEach((t) => {
      this._calculateImgSize(t);
    });
  }
  _onFullscreenChange() {
    (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) === void 0 && (this._fullscreen = !1, this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, this._fullscreenBtn.removeAttribute(St));
  }
  _beforeSlideEvents() {
    this._animationStart(), this._restoreDefaultZoom(), this._restoreDefaultPosition(), this._resetDoubleTap();
  }
  _slideHorizontally(t) {
    this._images = d.find("img", this._galleryContent), this._images.forEach((e) => {
      let i;
      t === "right" ? (i = parseInt(e.parentNode.style.left, 10) - 100, i < -100 && (i = (this._images.length - 2) * 100)) : (i = parseInt(e.parentNode.style.left, 10) + 100, i === (this._images.length - 1) * 100 && (i = -100)), this._slideImg(e, i);
    }), this._updateActiveImg(t);
  }
  _slideImg(t, e) {
    e === 0 ? (t.setAttribute(St, ""), c.style(t.parentNode, { opacity: 1, transform: "scale(1)" })) : (t.removeAttribute(St), c.style(t.parentNode, {
      opacity: 0,
      transform: "scale(0.25)"
    })), t.parentNode.style.left = `${e}%`;
  }
  _slideToTarget(t) {
    t === "first" && this._activeImg === 0 || t === "last" && this._activeImg === this._images.length - 1 || (this.reset(), this._removeEvents(), this._showLoader(), this._getImages(), this._activeImg = t === "first" ? 0 : this._images.length - 1, this._sortImages(), c.style(this.currentImg.parentNode, {
      transform: "scale(0.25)",
      opacity: 0
    }), setTimeout(() => {
      this._loadImages().then((e) => {
        this._resizeImages(e), this._addEvents(), this._updateCaption(), this._hideLoader(), setTimeout(() => {
          c.style(this.currentImg.parentNode, {
            transform: "scale(1)",
            opacity: 1
          });
        }, 10);
      });
    }, 400));
  }
  _updateActiveImg(t) {
    t === "right" && (this._activeImg === this._images.length - 1 ? this._activeImg = 0 : this._activeImg++), t === "left" && (this._activeImg === 0 ? this._activeImg = this._images.length - 1 : this._activeImg--);
  }
  _afterSlideEvents() {
    this._updateCounter(), this._updateCaption();
  }
  _updateCounter() {
    this._images.length <= 1 || setTimeout(() => {
      this._imgCounter.innerHTML = `${this._activeImg + 1} / ${this._images.length}`;
    }, 200);
  }
  _updateCaption() {
    setTimeout(() => {
      let t = this.currentImg.alt;
      (this.currentImg.dataset.caption || this.currentImg.dataset.caption === "") && (t = this.currentImg.dataset.caption), d.findOne(
        `[${Za}]`,
        this._gallery
      ).innerHTML = t;
    }, 200);
  }
  _toggleTemplate() {
    this._gallery.style.visibility === "visible" ? (c.style(this.currentImg.parentNode, {
      transform: "scale(0.25)"
    }), setTimeout(() => {
      this._hideGallery(), this._enableScroll(), this._showLoader();
    }, 100)) : (this._showGallery(), this._disableScroll(), this._updateCounter(), this._updateCaption(), this._setToolsToggleTimout(), this._hideLoader());
  }
  _showLoader() {
    c.style(this._loader, { opacity: 1 });
  }
  _hideLoader() {
    c.style(this._loader, { opacity: 0 });
  }
  _hideGallery() {
    c.style(this._gallery, {
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden"
    });
  }
  _showGallery() {
    c.style(this._gallery, {
      opacity: 1,
      pointerEvents: "initial",
      visibility: "visible"
    }), setTimeout(() => {
      c.style(this.currentImg.parentNode, { transform: "scale(1)" });
    }, 50);
  }
  _toggleZoom() {
    this._zoom !== 1 ? this.zoomOut() : this.zoomIn();
  }
  _updateZoomBtn() {
    this._zoom > 1 ? (this._zoomBtn.setAttribute(St, ""), this._zoomBtn.setAttribute("aria-label", "Zoom out"), this._zoomBtn.innerHTML = this.options.zoomOutIconTemplate) : (this._zoomBtn.removeAttribute(St), this._zoomBtn.setAttribute("aria-label", "Zoom in"), this._zoomBtn.innerHTML = this.options.zoomInIconTemplate);
  }
  _updateImgPosition() {
    this._zoom === 1 && this._restoreDefaultPosition();
  }
  _addEvents() {
    const t = d.find("img", this._galleryContent);
    this._onWindowTouchmove = this._onWindowTouchmove.bind(this), this._onWindowTouchstart = this._onWindowTouchstart.bind(this), this._onImgMousedown = this._onMousedown.bind(this), this._onImgMousemove = this._onMousemove.bind(this), this._onImgWheel = this._onZoom.bind(this), this._onImgMouseup = this._onMouseup.bind(this), this._onImgTouchend = this._onTouchend.bind(this), this._onImgDoubleClick = this._onDoubleClick.bind(this), this._onWindowResize = this._onResize.bind(this), this._onWindowFullscreenChange = this._onFullscreenChange.bind(this), this._onAnyImgAction = this._resetToolsToggler.bind(this), this._onGalleryClick = this._onBackdropClick.bind(this), this._onKeyupEvent = this._onKeyup.bind(this), this._onRightArrowKeydownEvent = this._onRightArrowKeydown.bind(this), this._onFullscreenBtnKeydownEvent = this._onFullscreenBtnKeydown.bind(this), t.forEach((e) => {
      h.on(e, "mousedown", this._onImgMousedown, {
        passive: !0
      }), h.on(e, "touchstart", this._onImgMousedown, {
        passive: !0
      }), h.on(e, "mousemove", this._onImgMousemove, {
        passive: !0
      }), h.on(e, "touchmove", this._onImgMousemove, {
        passive: !0
      }), h.on(e, "wheel", this._onImgWheel, { passive: !0 }), h.on(e, "dblclick", this._onImgDoubleClick, {
        passive: !0
      });
    }), document.addEventListener("touchmove", this._onWindowTouchmove, {
      passive: !1
    }), h.on(window, "touchstart", this._onWindowTouchstart), h.on(window, "mouseup", this._onImgMouseup), h.on(window, "touchend", this._onImgTouchend), h.on(window, "resize", this._onWindowResize), h.on(window, "orientationchange", this._onWindowResize), h.on(window, "keyup", this._onKeyupEvent), h.on(window, "fullscreenchange", this._onWindowFullscreenChange), h.on(this._gallery, "mousemove", this._onAnyImgAction), h.on(this._gallery, "click", this._onGalleryClick), h.on(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), h.on(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _removeEvents() {
    d.find("img", this._galleryContent).forEach((e) => {
      h.off(e, "mousedown", this._onImgMousedown), h.off(e, "touchstart", this._onImgMousedown), h.off(e, "mousemove", this._onImgMousemove), h.off(e, "touchmove", this._onImgMousemove), h.off(e, "wheel", this._onImgWheel), h.off(e, "dblclick", this._onImgDoubleClick);
    }), document.removeEventListener("touchmove", this._onWindowTouchmove, {
      passive: !1
    }), h.off(window, "touchstart", this._onWindowTouchstart), h.off(window, "mouseup", this._onImgMouseup), h.off(window, "touchend", this._onImgTouchend), h.off(window, "resize", this._onWindowResize), h.off(window, "orientationchange", this._onWindowResize), h.off(window, "keyup", this._onKeyupEvent), h.off(
      window,
      "fullscreenchange",
      this._onWindowFullscreenChange
    ), h.off(this._gallery, "mousemove", this._onAnyImgAction), h.off(this._gallery, "click", this._onGalleryClick), h.off(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), h.off(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _onMousedown(t) {
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    this._originalPositionX = parseFloat(this.currentImg.style.left) || 0, this._originalPositionY = parseFloat(this.currentImg.style.top) || 0, this._positionX = this._originalPositionX, this._positionY = this._originalPositionY, this._mousedownPositionX = i * (1 / this._zoom) - this._positionX, this._mousedownPositionY = n * (1 / this._zoom) - this._positionY, this._mousedown = !0, t.type === "touchstart" && t.touches.length > 1 && (this._multitouch = !0, this._touchZoomPosition = t.touches);
  }
  _onMousemove(t) {
    if (!this._mousedown)
      return;
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    if (e && this._resetToolsToggler(), !this._multitouch)
      if (this._zoom !== 1)
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, this._positionY = n * (1 / this._zoom) - this._mousedownPositionY, c.style(this.currentImg, {
          left: `${this._positionX}px`,
          top: `${this._positionY}px`
        });
      else {
        if (this._images.length <= 1)
          return;
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, c.style(this.currentImg, { left: `${this._positionX}px` });
      }
  }
  _onMouseup(t) {
    this._mousedown = !1, this._moveImg(t.target);
  }
  _onTouchend(t) {
    this._mousedown = !1, this._multitouch ? t.targetTouches.length === 0 && (this._multitouch = !1, this._touchZoomPosition = []) : this._multitouch || (this._checkDoubleTap(t), this._moveImg(t.target));
  }
  _calculateTouchZoom(t) {
    const e = Math.hypot(
      this._touchZoomPosition[1].pageX - this._touchZoomPosition[0].pageX,
      this._touchZoomPosition[1].pageY - this._touchZoomPosition[0].pageY
    ), i = Math.hypot(
      t.touches[1].pageX - t.touches[0].pageX,
      t.touches[1].pageY - t.touches[0].pageY
    ), n = Math.abs(e - i), o = t.view.screen.width;
    n > o * 0.03 && (e <= i ? this.zoomIn() : this.zoomOut(), this._touchZoomPosition = t.touches);
  }
  _onWindowTouchstart(t) {
    t.touches.length > 1 && (this._multitouch = !0, this._touchZoomPosition = t.touches);
  }
  _onWindowTouchmove(t) {
    t.preventDefault(), t.type === "touchmove" && t.targetTouches.length > 1 && this._calculateTouchZoom(t);
  }
  _onRightArrowKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (t.shiftKey)
          break;
        t.preventDefault(), this._focusFullscreenBtn();
        break;
    }
  }
  _onFullscreenBtnKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (!t.shiftKey)
          break;
        t.preventDefault(), this._focusRightArrow();
        break;
    }
  }
  _onKeyup(t) {
    switch (this._resetToolsToggler(), t.keyCode) {
      case 39:
        this.slide();
        break;
      case 37:
        this.slide("left");
        break;
      case 27:
        this.close();
        break;
      case 36:
        this.slide("first");
        break;
      case 35:
        this.slide("last");
        break;
      case 38:
        this.zoomIn();
        break;
      case 40:
        this.zoomOut();
        break;
    }
  }
  _focusFullscreenBtn() {
    setTimeout(() => {
      this._fullscreenBtn.focus();
    }, 100);
  }
  _focusRightArrow() {
    this._rightArrow.focus();
  }
  _moveImg(t) {
    if (this._multitouch || this._zoom !== 1 || t !== this.currentImg || this._images.length <= 1)
      return;
    const e = this._positionX - this._originalPositionX;
    e > 0 ? this.slide("left") : e < 0 && this.slide();
  }
  _checkDoubleTap(t) {
    clearTimeout(this._doubleTapTimer);
    const i = (/* @__PURE__ */ new Date()).getTime() - this._tapTime;
    this._tapCounter > 0 && i < 500 ? (this._onDoubleClick(t), this._doubleTapTimer = setTimeout(() => {
      this._tapTime = (/* @__PURE__ */ new Date()).getTime(), this._tapCounter = 0;
    }, 300)) : (this._tapCounter++, this._tapTime = (/* @__PURE__ */ new Date()).getTime());
  }
  _resetDoubleTap() {
    this._tapTime = 0, this._tapCounter = 0, clearTimeout(this._doubleTapTimer);
  }
  _onDoubleClick(t) {
    this._multitouch || (t.touches || this._setNewPositionOnZoomIn(t), this._zoom !== 1 ? this._restoreDefaultZoom() : this.zoomIn());
  }
  _onZoom(t) {
    if (t.deltaY > 0)
      this.zoomOut();
    else {
      if (this._zoom >= 3)
        return;
      this._setNewPositionOnZoomIn(t), this.zoomIn();
    }
  }
  _onBackdropClick(t) {
    this._resetToolsToggler(), t.target.tagName === "DIV" && this.close();
  }
  _setNewPositionOnZoomIn(t) {
    clearTimeout(this._zoomTimer), this._positionX = window.innerWidth / 2 - t.offsetX - 50, this._positionY = window.innerHeight / 2 - t.offsetY - 50, this.currentImg.style.transition = "all 0.5s ease-out", this.currentImg.style.left = `${this._positionX}px`, this.currentImg.style.top = `${this._positionY}px`, this._zoomTimer = setTimeout(() => {
      this.currentImg.style.transition = "none";
    }, 500);
  }
  _resetToolsToggler() {
    this._showTools(), clearTimeout(this._toolsToggleTimer), this._setToolsToggleTimout();
  }
  _setToolsToggleTimout() {
    this._toolsToggleTimer = setTimeout(() => {
      this._hideTools(), clearTimeout(this._toolsToggleTimer);
    }, 4e3);
  }
  _hideTools() {
    c.style(this._galleryToolbar, { opacity: 0 }), c.style(this._leftArrowWrapper, { opacity: 0 }), c.style(this._rightArrowWrapper, { opacity: 0 });
  }
  _showTools() {
    c.style(this._galleryToolbar, { opacity: 1 }), c.style(this._leftArrowWrapper, { opacity: 1 }), c.style(this._rightArrowWrapper, { opacity: 1 });
  }
  _disableScroll() {
    c.addClass(document.body, "overflow-y-hidden relative"), document.documentElement.scrollHeight > document.documentElement.clientHeight && c.addClass(document.body, "md:pr-[17px]");
  }
  _enableScroll() {
    setTimeout(() => {
      c.removeClass(document.body, "overflow-y-hidden relative"), c.removeClass(document.body, "md:pr-[17px]");
    }, 300);
  }
  _animationStart() {
    this._animating = !0, setTimeout(() => {
      this._animating = !1;
    }, 400);
  }
  _restoreDefaultZoom() {
    this._zoom !== 1 && (this._zoom = 1, c.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  _restoreDefaultFullscreen() {
    this._fullscreen && this.toggleFullscreen();
  }
  _restoreDefaultPosition() {
    clearTimeout(this._zoomTimer);
    const t = this.currentImg;
    c.style(this.currentImg.parentNode, { left: 0, top: 0 }), c.style(this.currentImg, {
      transition: "all 0.5s ease-out",
      left: 0,
      top: 0
    }), this._calculateImgSize(t), setTimeout(() => {
      c.style(this.currentImg, { transition: "none" });
    }, 500);
  }
  async _triggerEvents(t, e) {
    h.trigger(this._element, `${t}.te.lightbox`), e && await setTimeout(() => {
      h.trigger(this._element, `${e}.te.lightbox`);
    }, 505);
  }
  static getInstance(t) {
    return I.getData(t, vi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static toggle() {
    return function(t) {
      const e = d.closest(
        t.target,
        `${Oc}`
      );
      (Ls.getInstance(e) || new Ls(e)).open(t);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = I.getData(this, vi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new Ls(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
const y0 = (s, t = "hide") => {
  const e = `click.dismiss${s.EVENT_KEY}`, i = s.NAME;
  h.on(
    document,
    e,
    `[data-te-${i}-dismiss]`,
    function(n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), me(this))
        return;
      const o = Qt(this) || this.closest(`.${i}`) || this.closest(`[data-te-${i}-init]`);
      if (!o)
        return;
      s.getOrCreateInstance(o)[t]();
    }
  );
}, w0 = (s) => {
  il(() => {
    const t = el();
    if (t) {
      const e = s.NAME, i = t.fn[e];
      t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface);
    }
  });
}, x0 = (s, t) => {
  h.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      e.preventDefault(), s.getOrCreateInstance(this).toggle();
    }
  );
}, k0 = (s, t) => {
  h.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), me(this))
        return;
      s.getOrCreateInstance(this).show();
    }
  );
}, O0 = (s, t) => {
  h.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      const i = Qt(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), me(this))
        return;
      h.one(i, s.EVENT_HIDDEN, () => {
        Lt(this) && this.focus();
      });
      const n = d.findOne(s.OPEN_SELECTOR);
      n && n !== i && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
}, S0 = (s, t) => {
  h.on(
    document,
    `click.te.${s.NAME}`,
    t,
    (e) => {
      e.preventDefault();
      const i = e.target.closest(t);
      s.getOrCreateInstance(i).toggle();
    }
  );
}, I0 = (s, t) => {
  h.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      const i = Qt(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), h.one(i, s.EVENT_SHOW, (r) => {
        r.defaultPrevented || h.one(i, s.EVENT_HIDDEN, () => {
          Lt(this) && this.focus();
        });
      });
      const n = d.findOne(
        `[${s.OPEN_SELECTOR}="true"]`
      );
      n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
}, D0 = (s, t) => {
  h.one(
    document,
    "mousedown",
    t,
    s.autoInitial(new s())
  );
}, $0 = (s, t) => {
  h.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
      const i = fo(this);
      d.find(i).forEach((o) => {
        s.getOrCreateInstance(o, { toggle: !1 }).toggle();
      });
    }
  );
}, L0 = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
}, M0 = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
}, N0 = (s, t) => {
  d.find(t).forEach((e) => {
    new s(e);
  }), h.on(
    document,
    `click.te.${s.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    s.toggle()
  );
}, R0 = (s, t) => {
  const e = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", i = (o) => typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o) => {
    const r = {};
    return Object.keys(o).forEach((a) => {
      if (a.match(/dataset.*/)) {
        const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
        r[l] = i(o[a]);
      }
    }), r;
  };
  d.find(t).forEach((o) => {
    if (c.getDataAttribute(o, "chart") !== "bubble" && c.getDataAttribute(o, "chart") !== "scatter") {
      const r = c.getDataAttributes(o), a = {
        data: {
          datasets: [n(r)]
        }
      };
      return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new s(o, {
        ...a,
        ...mi[a.type]
      });
    }
    return null;
  });
};
class P0 {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.inits.push(t);
  }
}
const _o = new P0(), Ti = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: !1,
    dismissMethod: "close"
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: !1
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: !1
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-input-init]",
    isToggler: !1
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: !1,
    onInit: "init"
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: !1
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: !1
  },
  perfectScrollbar: {
    name: "PerfectScrollbar",
    selector: "[data-te-perfect-scrollbar-init]",
    isToggler: !1
  },
  rating: {
    name: "Rating",
    selector: "[data-te-rating-init]",
    isToggler: !1
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: !1
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: !1
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: !1
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: !1
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: !1
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: !1,
    dismissMethod: "hide"
  },
  datatable: {
    name: "Datatable",
    selector: "[data-te-datatable-init]"
  },
  popconfirm: {
    name: "Popconfirm",
    selector: "[data-te-toggle='popconfirm']"
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: !1,
    advanced: R0
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: S0
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: $0
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: x0
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    dismissMethod: "hide",
    isToggler: !0,
    callback: I0
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: D0
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    dismissMethod: "hide",
    isToggler: !0,
    callback: O0
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: k0
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: L0
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: M0
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: N0
  }
}, B0 = (s) => Ti[s.NAME] || null, H0 = (s) => {
  if (!s || _o.isInited(s.NAME))
    return;
  _o.add(s.NAME);
  const t = B0(s), e = (t == null ? void 0 : t.isToggler) || !1;
  if (w0(s), t != null && t.dismissMethod && y0(s, t.dismissMethod), t != null && t.advanced) {
    t == null || t.advanced(s, t == null ? void 0 : t.selector);
    return;
  }
  if (e) {
    t == null || t.callback(s, t == null ? void 0 : t.selector);
    return;
  }
  d.find(t == null ? void 0 : t.selector).forEach((i) => {
    let n = s.getInstance(i);
    n || (n = new s(i), t != null && t.onInit && n[t.onInit]());
  });
}, W0 = (s) => {
  s.forEach((t) => H0(t));
}, U0 = (s, t = !1) => {
  const e = Object.keys(Ti).map((i) => {
    if (!!document.querySelector(Ti[i].selector)) {
      const o = s[Ti[i].name];
      return !o && !_o.isInited(i) && t && console.warn(
        `Please import ${Ti[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  W0(e);
};

//# sourceMappingURL=tw-elements.es.min.js.map


/***/ })

}]);