"use strict";


const headerStickyWrapper = document.querySelector("header"),
    headerStickyTarget = document.querySelector(".header__sticky");
if (headerStickyTarget) {
    let headerHeight = headerStickyWrapper.clientHeight;
    window.addEventListener("scroll", (function() {
        let StickyTargetElement, TargetElementTopOffset = TopOffset(headerStickyWrapper).top;
        window.scrollY > TargetElementTopOffset ? headerStickyTarget.classList.add("sticky") : headerStickyTarget.classList.remove("sticky")
    }))
}
const scrollTop = document.getElementById("scroll__top");
scrollTop && (scrollTop.addEventListener("click", (function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})), window.addEventListener("scroll", (function() {
    window.scrollY > 300 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active")
})));



function offcanvsSidebar(openTrigger, closeTrigger, wrapper) {
    let OpenTriggerprimary__btn = document.querySelectorAll(openTrigger),
        closeTriggerprimary__btn = document.querySelector(closeTrigger),
        WrapperSidebar = document.querySelector(wrapper),
        wrapperOverlay = wrapper.replace(".", "");

    function handleBodyClass(evt) {
        let eventTarget = evt.target;
        eventTarget.closest(wrapper) || eventTarget.closest(openTrigger) || (WrapperSidebar.classList.remove("active"), document.querySelector("body").classList.remove(`${wrapperOverlay}_active`))
    }
    OpenTriggerprimary__btn && WrapperSidebar && OpenTriggerprimary__btn.forEach((function(singleItem) {
        singleItem.addEventListener("click", (function(e) {
            null != e.target.dataset.offcanvas && (WrapperSidebar.classList.add("active"), document.querySelector("body").classList.add(`${wrapperOverlay}_active`), document.body.addEventListener("click", handleBodyClass.bind(this)))
        }))
    })), closeTriggerprimary__btn && WrapperSidebar && closeTriggerprimary__btn.addEventListener("click", (function(e) {
        null != e.target.dataset.offcanvas && (WrapperSidebar.classList.remove("active"), document.querySelector("body").classList.remove(`${wrapperOverlay}_active`), document.body.removeEventListener("click", handleBodyClass.bind(this)))
    }))
}
activeClassAction(".account__currency--link", ".dropdown__currency"), activeClassAction(".language__switcher", ".dropdown__language"), activeClassAction(".offcanvas__language--switcher", ".offcanvas__dropdown--language"), activeClassAction(".offcanvas__account--currency__menu", ".offcanvas__account--currency__submenu"), activeClassAction(".footer__language--link", ".footer__dropdown--language"), activeClassAction(".footer__currency--link", ".footer__dropdown--currency"), offcanvsSidebar(".minicart__open--btn", ".minicart__close--btn", ".offCanvas__minicart"), offcanvsSidebar(".search__open--btn", ".predictive__search--close__btn", ".predictive__search--box"), offcanvsSidebar(".widget__filter--btn", ".offcanvas__filter--close", ".offcanvas__filter--sidebar");
const offcanvasHeader = function() {
    const offcanvasOpen = document.querySelector(".offcanvas__header--menu__open--btn"),
        offcanvasClose = document.querySelector(".offcanvas__close--btn"),
        offcanvasHeader = document.querySelector(".offcanvas__header"),
        offcanvasMenu = document.querySelector(".offcanvas__menu"),
        body = document.querySelector("body");
    offcanvasMenu && offcanvasMenu.querySelectorAll(".offcanvas__sub_menu").forEach((function(ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle"), ul.parentNode.appendChild(subMenuToggle)
    })), offcanvasOpen && offcanvasOpen.addEventListener("click", (function(e) {
        e.preventDefault(), null != e.target.dataset.offcanvas && (offcanvasHeader.classList.add("open"), body.classList.add("mobile_menu_open"))
    })), offcanvasClose && offcanvasClose.addEventListener("click", (function(e) {
        e.preventDefault(), null != e.target.dataset.offcanvas && (offcanvasHeader.classList.remove("open"), body.classList.remove("mobile_menu_open"))
    }));
    let mobileMenuWrapper = document.querySelector(".offcanvas__menu_ul");
    mobileMenuWrapper && mobileMenuWrapper.addEventListener("click", (function(e) {
        let targetElement = e.target;
        if (targetElement.classList.contains("offcanvas__sub_menu_toggle")) {
            const parent = targetElement.parentElement;
            parent.classList.contains("active") ? (targetElement.classList.remove("active"), parent.classList.remove("active"), parent.querySelectorAll(".offcanvas__sub_menu").forEach((function(subMenu) {
                subMenu.parentElement.classList.remove("active"), subMenu.nextElementSibling.classList.remove("active"), slideUp(subMenu)
            }))) : (targetElement.classList.add("active"), parent.classList.add("active"), slideDown(targetElement.previousElementSibling), getSiblings(parent).forEach((function(item) {
                item.classList.remove("active"), item.querySelectorAll(".offcanvas__sub_menu").forEach((function(subMenu) {
                    subMenu.parentElement.classList.remove("active"), subMenu.nextElementSibling.classList.remove("active"), slideUp(subMenu)
                }))
            })))
        }
    })), offcanvasHeader && document.addEventListener("click", (function(event) {
        event.target.closest(".offcanvas__header--menu__open--btn") || event.target.classList.contains(".offcanvas__header--menu__open--btn".replace(/\./, "")) || event.target.closest(".offcanvas__header") || event.target.classList.contains(".offcanvas__header".replace(/\./, "")) || (offcanvasHeader.classList.remove("open"), body.classList.remove("mobile_menu_open"))
    })), offcanvasHeader && window.addEventListener("resize", (function() {
        window.outerWidth >= 992 && (offcanvasHeader.classList.remove("open"), body.classList.remove("mobile_menu_open"))
    }))
};
offcanvasHeader();
const quantityWrapper = document.querySelectorAll(".quantity__box");
quantityWrapper && quantityWrapper.forEach((function(singleItem) {
    let increaseButton = singleItem.querySelector(".increase"),
        decreaseButton = singleItem.querySelector(".decrease");
    increaseButton.addEventListener("click", (function(e) {
        let input = e.target.previousElementSibling.children[0];
        if (null != input.dataset.counter) {
            let value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value, value++, input.value = value
        }
    })), decreaseButton.addEventListener("click", (function(e) {
        let input = e.target.nextElementSibling.children[0];
        if (null != input.dataset.counter) {
            let value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value, value < 1 && (value = 1), value--, input.value = value
        }
    }))
}));
const openEls = document.querySelectorAll("[data-open]"),
    closeEls = document.querySelectorAll("[data-close]"),
    isVisible = "is-visible";
for (const el of openEls) el.addEventListener("click", (function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible)
}));
for (const el of closeEls) el.addEventListener("click", (function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible)
}));

function customAccordion(accordionWrapper, singleItem, accordionBody) {
    let accoridonButtons;
    document.querySelectorAll(accordionWrapper).forEach((function(item) {
        item.addEventListener("click", (function(evt) {
            let itemTarget = evt.target;
            if (itemTarget.classList.contains("accordion__items--button") || itemTarget.classList.contains("widget__categories--menu__label")) {
                let singleAccordionWrapper = itemTarget.closest(singleItem),
                    singleAccordionBody = singleAccordionWrapper.querySelector(accordionBody);
                singleAccordionWrapper.classList.contains("active") ? (singleAccordionWrapper.classList.remove("active"), slideUp(singleAccordionBody)) : (singleAccordionWrapper.classList.add("active"), slideDown(singleAccordionBody), getSiblings(singleAccordionWrapper).forEach((function(item) {
                    let sibllingSingleAccordionBody = item.querySelector(accordionBody);
                    item.classList.remove("active"), slideUp(sibllingSingleAccordionBody)
                })))
            }
        }))
    }))
}
document.addEventListener("click", e => {
    e.target == document.querySelector(".modal.is-visible") && document.querySelector(".modal.is-visible").classList.remove(isVisible)
}), document.addEventListener("keyup", e => {
    "Escape" == e.key && document.querySelector(".modal.is-visible") && document.querySelector(".modal.is-visible").classList.remove(isVisible)
}), customAccordion(".accordion__container", ".accordion__items", ".accordion__items--body"), customAccordion(".widget__categories--menu", ".widget__categories--menu__list", ".widget__categories--sub__menu");
let accordion = !0;
const footerWidgetAccordion = function() {
    let footerWidgetContainer;
    accordion = !1, document.querySelector(".main__footer").addEventListener("click", (function(evt) {
        let singleItemTarget = evt.target;
        if (singleItemTarget.classList.contains("footer__widget--button")) {
            const footerWidget = singleItemTarget.closest(".footer__widget"),
                footerWidgetInner = footerWidget.querySelector(".footer__widget--inner");
            footerWidget.classList.contains("active") ? (footerWidget.classList.remove("active"), slideUp(footerWidgetInner)) : (footerWidget.classList.add("active"), slideDown(footerWidgetInner), getSiblings(footerWidget).forEach((function(item) {
                const footerWidgetInner = item.querySelector(".footer__widget--inner");
                item.classList.remove("active"), slideUp(footerWidgetInner)
            })))
        }
    }))
};
window.addEventListener("load", (function() {
    accordion && footerWidgetAccordion()
})), window.addEventListener("resize", (function() {
    document.querySelectorAll(".footer__widget").forEach((function(item) {
        window.outerWidth >= 768 && (item.classList.remove("active"), item.querySelector(".footer__widget--inner").style.display = "")
    })), accordion && footerWidgetAccordion()
}));
const customLightboxHTML = '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n    </div>\n    </div>',
    lightbox = GLightbox({
        touchNavigation: !0,
        lightboxHTML: customLightboxHTML,
        loop: !0
    }),
    wrapper = document.getElementById("funfactId");
if (wrapper) {
    const counters = wrapper.querySelectorAll(".js-counter"),
        duration = 1e3;
    let isCounted = !1;
    document.addEventListener("scroll", (function() {
        const wrapperPos = wrapper.offsetTop - window.innerHeight;
        !isCounted && window.scrollY > wrapperPos && (counters.forEach(counter => {
            const countTo = counter.dataset.count,
                countPerMs = countTo / duration;
            let currentCount = 0;
            const countInterval = setInterval((function() {
                currentCount >= countTo && clearInterval(countInterval), counter.textContent = Math.round(currentCount), currentCount += countPerMs
            }), 1)
        }), isCounted = !0)
    }))
}
const newsletterPopup = function() {
    let newsletterWrapper = document.querySelector(".newsletter__popup"),
        newsletterCloseButton = document.querySelector(".newsletter__popup--close__btn"),
        dontShowPopup = document.querySelector("#newsletter__dont--show"),
        popuDontShowMode = localStorage.getItem("newsletter__show");
    newsletterWrapper && null == popuDontShowMode && window.addEventListener("load", event => {
        setTimeout((function() {
            document.body.classList.add("overlay__active"), newsletterWrapper.classList.add("newsletter__show"), document.addEventListener("click", (function(event) {
                event.target.closest(".newsletter__popup--inner") || (document.body.classList.remove("overlay__active"), newsletterWrapper.classList.remove("newsletter__show"))
            })), newsletterCloseButton.addEventListener("click", (function() {
                document.body.classList.remove("overlay__active"), newsletterWrapper.classList.remove("newsletter__show")
            })), dontShowPopup.addEventListener("click", (function() {
                dontShowPopup.checked ? localStorage.setItem("newsletter__show", !0) : localStorage.removeItem("newsletter__show")
            }))
        }), 3e3)
    })
};
newsletterPopup();