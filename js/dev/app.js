import { B as Bowser, S as Swiper, N as Navigation, A as Autoplay, a as Scrollbar, P as Pagination, E as EffectFade, C as Choices, F, b as AirDatepicker, l as localeEn } from "./vendor.min.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const SELECTORS = {
  ROOT: document.documentElement,
  BODY: document.body
};
const CLASSES = {
  ACTIVE: "_active",
  HIDDEN: "_hidden",
  SCROLLED: "_scrolled",
  LOADED: "_loaded",
  PC: "pc",
  TOUCH: "touch",
  DISABLE_SCROLL: "disable-scroll"
};
function isWebp() {
  function testWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function() {
      callback(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP((support) => {
    if (support) {
      SELECTORS.BODY.classList.add("webp");
    } else {
      SELECTORS.BODY.classList.add("no-webp");
    }
  });
}
function isMobile() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const platform = browser.getPlatformType(true);
  const isTouchDevice = platform === "mobile" || platform === "tablet";
  const hasTouchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isTouch = isTouchDevice || hasTouchSupport;
  if (isTouch) {
    SELECTORS.BODY.classList.remove(CLASSES.PC);
    SELECTORS.BODY.classList.add(CLASSES.TOUCH);
  } else {
    SELECTORS.BODY.classList.remove(CLASSES.TOUCH);
    SELECTORS.BODY.classList.add(CLASSES.PC);
  }
  return isTouch;
}
function disableScroll() {
  const pagePosition = window.scrollY;
  SELECTORS.BODY.classList.add(CLASSES.DISABLE_SCROLL);
  SELECTORS.BODY.dataset.position = pagePosition;
  SELECTORS.BODY.style.top = `${-pagePosition}px`;
}
function enableScroll() {
  const pagePosition = parseInt(SELECTORS.BODY.dataset.position, 10);
  SELECTORS.BODY.style.top = "auto";
  SELECTORS.BODY.classList.remove(CLASSES.DISABLE_SCROLL);
  window.scroll({ top: pagePosition, left: 0 });
  SELECTORS.BODY.removeAttribute("data-position");
}
const BREAKPOINT_QUERY = "(max-width: 61.99rem)";
const DATA_STATE = "data-state";
const UI_EVENTS = { SCROLL_LOCK: "ui:scroll-lock" };
const ROOT = SELECTORS?.ROOT || document.documentElement;
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function getFocusable(container) {
  return container ? Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)) : [];
}
function trapFocus(container, e) {
  const nodes = getFocusable(container);
  if (!nodes.length || e.key !== "Tab") return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (!nodes.includes(document.activeElement)) {
    e.preventDefault();
    first.focus();
    return;
  }
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}
function setAriaExpanded(btn, expanded, labels = {
  open: "Open Menu",
  close: "Close Menu"
}) {
  if (!btn) return;
  btn.setAttribute("aria-expanded", String(expanded));
  btn.setAttribute("aria-label", expanded ? labels.close : labels.open);
}
function ensureRoleDialog(el, labelledById = null, describedById = null) {
  if (!el) return;
  if (!el.hasAttribute("role")) el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  if (labelledById) el.setAttribute("aria-labelledby", labelledById);
  if (describedById) el.setAttribute("aria-describedby", describedById);
}
function initHeader(options = {}) {
  const {
    selector = ".header",
    isScrolled = true,
    isHidden = true,
    hideThreshold = 12,
    revealTopOffset = 8,
    respectReducedMotion = true,
    throttleDelay = 50
  } = options;
  const header = document.querySelector(selector);
  if (!header) return;
  const setHeaderHeight = (h) => ROOT.style.setProperty("--header-height", `${h}px`);
  const ro = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const h = Math.round(entry.target.getBoundingClientRect().height);
      setHeaderHeight(h);
    }
  });
  ro.observe(header);
  let lastY = window.scrollY;
  let scrollLocked = ROOT.hasAttribute("data-scroll-locked");
  let forcedScrolled = false;
  ROOT.addEventListener(UI_EVENTS.SCROLL_LOCK, (e) => {
    scrollLocked = !!e.detail?.locked;
    if (scrollLocked) {
      forcedScrolled = (e.detail?.y ?? window.scrollY) > 0;
      header.classList.toggle(CLASSES.SCROLLED, forcedScrolled);
      header.classList.remove(CLASSES.HIDDEN);
    } else {
      forcedScrolled = false;
      requestAnimationFrame(onScroll);
    }
  });
  const prefersReduced = respectReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isScrolled) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          header.classList.toggle(CLASSES.SCROLLED, !entry.isIntersecting);
        });
      },
      { rootMargin: `-${header.offsetHeight}px 0px 0px 0px`, threshold: 0 }
    );
    io.observe(header);
  }
  let timeoutId = null;
  function throttledScroll() {
    if (timeoutId) return;
    timeoutId = setTimeout(() => {
      onScroll();
      timeoutId = null;
    }, throttleDelay);
  }
  function onScroll() {
    if (scrollLocked) {
      if (isScrolled) header.classList.toggle(CLASSES.SCROLLED, forcedScrolled);
      return;
    }
    const y = window.scrollY;
    if (isHidden && !prefersReduced) {
      const delta = y - lastY;
      const pastTop = y > revealTopOffset;
      if (pastTop && Math.abs(delta) > hideThreshold) {
        if (delta > 0) header.classList.add(CLASSES.HIDDEN);
        else header.classList.remove(CLASSES.HIDDEN);
      }
      if (!pastTop) header.classList.remove(CLASSES.HIDDEN);
    }
    lastY = y;
  }
  window.addEventListener("scroll", throttledScroll, { passive: true });
  setHeaderHeight(header.offsetHeight);
}
const PAGES = [
  {
    title: "Home",
    href: "/iedd/",
    status: "done"
  },
  {
    title: "News",
    href: "/iedd/news.html",
    status: "done"
  },
  {
    title: "News Inner",
    href: "/iedd/news-inner.html",
    status: "done"
  },
  {
    title: "Events",
    href: "/iedd/events.html",
    status: "done"
  },
  {
    title: "Events Archive",
    href: "/iedd/events-archive.html",
    status: "done"
  },
  {
    title: "Events Inner",
    href: "/iedd/events-inner.html",
    status: "done"
  },
  {
    title: "About",
    href: "/iedd/about.html",
    status: "done"
  },
  {
    title: "Team",
    href: "/iedd/team.html",
    status: "done"
  },
  {
    title: "Team Member",
    href: "/iedd/team-member.html",
    status: "done"
  },
  {
    title: "Partners",
    href: "/iedd/partners.html",
    status: "done"
  },
  {
    title: "Contacts",
    href: "/iedd/contacts.html",
    status: "done"
  },
  {
    title: "Theme",
    href: "/iedd/theme.html",
    status: "done"
  },
  {
    title: "Theme Inner",
    href: "/iedd/theme-inner.html",
    status: "done"
  },
  {
    title: "Projects",
    href: "/iedd/projects.html",
    status: "done"
  },
  {
    title: "Projects (Finished)",
    href: "/iedd/projects-finished.html",
    status: "done"
  },
  {
    title: "Projects Inner",
    href: "/iedd/projects-inner.html",
    status: "done"
  },
  {
    title: "Products",
    href: "/iedd/products.html",
    status: "done"
  },
  {
    title: "Products Inner",
    href: "/iedd/products-inner.html",
    status: "done"
  },
  {
    title: "Databases",
    href: "/iedd/databases.html",
    status: "done"
  },
  {
    title: "Databases Inner 01",
    href: "/iedd/databases-inner.html",
    status: "done"
  },
  {
    title: "Databases Inner 02",
    href: "/iedd/databases-inner-02.html",
    status: "done"
  },
  {
    title: "Comments",
    href: "/iedd/comments.html",
    status: "done"
  },
  {
    title: "Comments Inner",
    href: "/iedd/expert-commentary.html",
    status: "done"
  },
  {
    title: "Error 404",
    href: "/iedd/error.html",
    status: "done"
  },
  {
    title: "Search Results",
    href: "/iedd/search-results.html",
    status: "done"
  },
  {
    title: "News | Search Results",
    href: "/iedd/news-search-results.html",
    status: "done"
  },
  {
    title: "Events | Search Results",
    href: "/iedd/events-search-results.html",
    status: "done"
  },
  {
    title: "Products | Search Results",
    href: "/iedd/products-search-results.html",
    status: "done"
  }
];
function createSitemapItem(page) {
  const { title, href, status } = page;
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = href;
  link.textContent = `${title} - ${status}`;
  link.classList.add(status === "done" ? "text-success" : "text-warning");
  listItem.append(link);
  return listItem;
}
function initSitemap(pages = PAGES) {
  const listElement = document.querySelector(".pages-list");
  if (!listElement) return;
  const fragment = document.createDocumentFragment();
  pages.forEach((page) => {
    fragment.append(createSitemapItem(page));
  });
  listElement.replaceChildren(fragment);
}
function initSwiper(selector, config) {
  const el = document.querySelector(selector);
  if (!el) return;
  return new Swiper(el, config);
}
function initSliders() {
  initSwiper("#donorsSlider", {
    modules: [Navigation, Autoplay, Scrollbar],
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 26,
    // loop: true,
    // autoplay: {
    //   delay: 0,
    // },
    navigation: {
      prevEl: "#donorsSliderPrev",
      nextEl: "#donorsSliderNext"
    },
    scrollbar: {
      el: "#donorsSliderScrollbar",
      draggable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 60
      },
      992: {
        spaceBetween: 76
      }
    }
  });
  initSwiper("#monitoringSlider", {
    modules: [Navigation, Pagination, EffectFade],
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 12,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: "#monitoringSliderPrev",
      nextEl: "#monitoringSliderNext"
    },
    pagination: {
      el: "#monitoringSliderPagination",
      clickable: true
    }
  });
  initSwiper("#swiperProjects", {
    modules: [Navigation, Pagination],
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
      prevEl: "#swiperProjectsPrev",
      nextEl: "#swiperProjectsNext"
    },
    pagination: {
      el: "#swiperProjectsPagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  initSwiper("#swiperProducts", {
    modules: [Navigation, Pagination],
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
      prevEl: "#swiperProductsPrev",
      nextEl: "#swiperProductsNext"
    },
    pagination: {
      el: "#swiperProductsPagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}
function initSelects() {
  const selects = document.querySelectorAll("[data-select]");
  if (!selects.length) return;
  selects.forEach((select) => {
    const searchAttr = select.dataset.selectSearch;
    const placeholderAttr = select.dataset.selectPlaceholder;
    const removeBtnAttr = select.dataset.selectRemoveButton;
    const placeholder = placeholderAttr || "Select an option";
    const choices = new Choices(select, {
      searchEnabled: !!searchAttr,
      itemSelectText: "",
      placeholderValue: placeholder,
      shouldSort: false,
      allowHTML: false,
      removeItemButton: removeBtnAttr === "true",
      duplicateItemsAllowed: false,
      placeholder: true,
      searchPlaceholderValue: "Search…",
      renderSelectedChoices: "auto"
    });
    select._choicesInstance = choices;
  });
}
function initContentTabs(scope = document, { syncHash = true, singleOpen = true, initialId = null, onChange = null } = {}) {
  const roots = Array.from(
    scope instanceof Element || scope instanceof Document ? scope.querySelectorAll("[data-ct]") : document.querySelectorAll("[data-ct]")
  );
  const controllers = [];
  roots.forEach((root) => {
    const ctId = root.getAttribute("data-ct") || "";
    const qAll = (sel) => Array.from(root.querySelectorAll(sel));
    const tabs = qAll("[data-ct-tab]");
    const toggles = qAll("[data-ct-toggle]");
    const panels = qAll("[data-ct-panel]");
    if (!tabs.length && !toggles.length) return;
    const byId = (arr, id) => arr.find(
      (el) => (el.dataset.ctTab ?? el.dataset.ctToggle ?? el.dataset.ctPanel) === id
    );
    function hideAll() {
      panels.forEach((p) => {
        p.hidden = true;
      });
      tabs.forEach((t) => {
        t.setAttribute("aria-selected", "false");
        t.tabIndex = -1;
      });
      toggles.forEach((tg) => tg.setAttribute("aria-expanded", "false"));
    }
    function activate(id, { allowCollapse = false } = {}) {
      const panel = byId(panels, id);
      const tab = byId(tabs, id);
      const toggle = byId(toggles, id);
      const isOpen = panel && !panel.hidden;
      if (allowCollapse && toggle && isOpen) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        if (tab) {
          tab.setAttribute("aria-selected", "false");
          tab.tabIndex = -1;
        }
        return;
      }
      if (tabs.length || singleOpen) hideAll();
      if (panel) panel.hidden = false;
      if (tab) {
        tabs.forEach((t) => {
          t.setAttribute("aria-selected", "false");
          t.tabIndex = -1;
        });
        tab.setAttribute("aria-selected", "true");
        tab.tabIndex = 0;
      }
      if (toggle) {
        if (singleOpen)
          toggles.forEach((tg) => tg.setAttribute("aria-expanded", "false"));
        toggle.setAttribute("aria-expanded", "true");
      }
      const detail = { ctId, id, root };
      root.dispatchEvent(new CustomEvent("ct:change", { detail }));
      if (typeof onChange === "function") onChange(detail);
    }
    const initial = initialId || tabs.find((t) => t.getAttribute("aria-selected") === "true")?.dataset.ctTab || toggles.find((t) => t.getAttribute("aria-expanded") === "true")?.dataset.ctToggle || panels.find((p) => !p.hidden)?.dataset.ctPanel || panels[0]?.dataset.ctPanel;
    if (initial) activate(initial);
    root.addEventListener("click", (e) => {
      const tabBtn = e.target.closest("[data-ct-tab]");
      if (tabBtn && root.contains(tabBtn)) {
        e.preventDefault();
        const id = tabBtn.dataset.ctTab;
        activate(id);
        tabBtn.focus();
        return;
      }
      const toggleBtn = e.target.closest("[data-ct-toggle]");
      if (toggleBtn && root.contains(toggleBtn)) {
        e.preventDefault();
        const id = toggleBtn.dataset.ctToggle;
        activate(id, { allowCollapse: true });
      }
    });
    if (tabs.length) {
      root.addEventListener("keydown", (e) => {
        const current = document.activeElement;
        if (!current || !current.matches("[data-ct-tab]")) return;
        const list = tabs;
        const i = list.indexOf(current);
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          const next = list[(i + 1) % list.length];
          activate(next.dataset.ctTab);
          next.focus();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = list[(i - 1 + list.length) % list.length];
          activate(prev.dataset.ctTab);
          prev.focus();
        } else if (e.key === "Home") {
          e.preventDefault();
          const first = list[0];
          activate(first.dataset.ctTab);
          first.focus();
        } else if (e.key === "End") {
          e.preventDefault();
          const last = list[list.length - 1];
          activate(last.dataset.ctTab);
          last.focus();
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
        }
      });
    }
    if (syncHash && location.hash.startsWith("#ct=")) {
      const id = decodeURIComponent(location.hash.slice(4));
      if (byId(panels, id)) activate(id);
    }
    controllers.push({ root, activate });
  });
  return controllers;
}
function initFancyboxes() {
  F.bind("[data-fancybox]", {});
}
function initDatepickers() {
  const inputs = document.querySelectorAll("[date-input]");
  if (!inputs.length) return;
  [...inputs].forEach((input) => {
    new AirDatepicker(input, {
      locale: localeEn,
      range: true,
      multipleDatesSeparator: " - "
    });
  });
}
function initPopups() {
  document.querySelectorAll("[data-popup-trigger]").forEach((trigger) => {
    const popupId = trigger.getAttribute("data-popup-trigger");
    const popup = popupId ? document.querySelector(`[data-popup="${popupId}"]`) : null;
    trigger.setAttribute(
      "aria-expanded",
      popup && popup.classList.contains(CLASSES.ACTIVE) ? "true" : "false"
    );
    trigger.addEventListener("click", handlePopupTriggerClick);
  });
  document.querySelectorAll("[data-popup-close]").forEach((button) => {
    button.addEventListener("click", handlePopupCloseClick);
  });
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("click", handleDocumentClick);
}
function handlePopupTriggerClick(e) {
  e.preventDefault();
  const popupId = this.getAttribute("data-popup-trigger");
  if (!popupId) return;
  const popup = document.querySelector(`[data-popup="${popupId}"]`);
  if (!popup) return;
  if (popup.classList.contains(CLASSES.ACTIVE)) {
    closePopup(popup);
    return;
  }
  openPopup(popupId, this);
}
function setTriggerExpanded(popupId, expanded) {
  if (!popupId) return;
  document.querySelectorAll(`[data-popup-trigger="${popupId}"]`).forEach(
    (trigger) => trigger.setAttribute("aria-expanded", expanded ? "true" : "false")
  );
}
function openPopup(popupId, triggerElement) {
  const popup = document.querySelector(`[data-popup="${popupId}"]`);
  if (popup) {
    popup.classList.add(CLASSES.ACTIVE);
    popup.setAttribute("aria-hidden", "false");
    setTriggerExpanded(popupId, true);
    if (triggerElement) {
      popup.dataset.triggerId = triggerElement.id || "";
    }
    const focusable = popup.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) {
      focusable.focus();
    } else {
      popup.setAttribute("tabindex", "-1");
      popup.focus();
    }
  }
}
function closePopup(popup) {
  if (popup) {
    popup.classList.remove(CLASSES.ACTIVE);
    popup.setAttribute("aria-hidden", "true");
    const popupId = popup.getAttribute("data-popup");
    setTriggerExpanded(popupId, false);
    const { triggerId } = popup.dataset;
    if (triggerId) {
      const trigger = document.getElementById(triggerId);
      if (trigger) {
        trigger.focus();
      }
    }
  }
}
function handlePopupCloseClick(e) {
  e.preventDefault();
  const popup = this.closest("[data-popup]._active");
  if (popup) {
    closePopup(popup);
  }
}
function handleKeyDown(e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    const activePopups = document.querySelectorAll("[data-popup]._active");
    if (activePopups.length > 0) {
      const lastPopup = activePopups[activePopups.length - 1];
      closePopup(lastPopup);
    }
  }
}
function handleDocumentClick(event) {
  const activePopups = document.querySelectorAll("[data-popup]._active");
  activePopups.forEach((popup) => {
    if (!popup.contains(event.target) && !event.target.closest("[data-popup-trigger]")) {
      closePopup(popup);
    }
  });
}
function initLangSelect() {
  const langSelects = document.querySelectorAll("[data-lang-select]");
  if (langSelects.length === 0) return;
  const instances = Array.from(langSelects).map((root) => {
    const toggleBtn = root.querySelector("[data-lang-select-toggle]");
    const popup = root.querySelector("[data-lang-select-popup]");
    const list = root.querySelector("[data-lang-select-list]");
    const options = root.querySelectorAll("[data-lang-select-code]");
    if (!toggleBtn || !popup || !list || options.length === 0) {
      return null;
    }
    return { root, toggleBtn, popup, list, options };
  }).filter(Boolean);
  if (instances.length === 0) return;
  const closePopup2 = (instance, shouldFocusToggle = false) => {
    const { toggleBtn, popup } = instance;
    toggleBtn.setAttribute("aria-expanded", "false");
    popup.classList.remove(CLASSES.ACTIVE);
    if (shouldFocusToggle) {
      toggleBtn.focus();
    }
  };
  const closeAll = (shouldFocusToggle) => {
    instances.forEach((instance) => {
      if (instance.popup.classList.contains(CLASSES.ACTIVE)) {
        closePopup2(instance, shouldFocusToggle);
      }
    });
  };
  const openPopup2 = (instance) => {
    const { toggleBtn, popup, list } = instance;
    closeAll(false);
    toggleBtn.setAttribute("aria-expanded", "true");
    popup.classList.add(CLASSES.ACTIVE);
    list.focus();
  };
  instances.forEach((instance) => {
    const { toggleBtn, popup, options } = instance;
    toggleBtn.addEventListener("click", () => {
      const isOpen = popup.classList.contains(CLASSES.ACTIVE);
      if (isOpen) {
        closePopup2(instance, true);
        return;
      }
      openPopup2(instance);
    });
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((o) => o.setAttribute("aria-selected", "false"));
        option.setAttribute("aria-selected", "true");
        toggleBtn.textContent = option.textContent;
        closePopup2(instance, true);
      });
      option.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          option.click();
        }
      });
    });
  });
  document.addEventListener("click", (e) => {
    instances.forEach((instance) => {
      if (instance.popup.classList.contains(CLASSES.ACTIVE) && !instance.root.contains(e.target)) {
        closePopup2(instance);
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAll(true);
    }
  });
}
function initMenu() {
  const menu = document.querySelector("[data-menu]");
  if (!menu) return;
  const menuBtn = menu.querySelector("[data-menu-burger]");
  const menuBody = menu.querySelector("[data-menu-body]");
  const menuOverlay = menu.querySelector("[data-menu-overlay]");
  const main = document.querySelector("main");
  if (!menuBtn || !menuBody) return;
  if (!menuBody.id) menuBody.id = "site-menu";
  menuBtn.setAttribute("aria-controls", menuBody.id);
  ensureRoleDialog(menuBody);
  setAriaExpanded(menuBtn, false);
  const isOpen = () => menuBody.getAttribute(DATA_STATE) === "open";
  function onKeydown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      setMenuOpen(false);
      return;
    }
    if (isOpen()) trapFocus(menuBody, e);
  }
  function setMenuOpen(open) {
    if (open) {
      ROOT.setAttribute("data-scroll-locked", "true");
      ROOT.dispatchEvent(
        new CustomEvent(UI_EVENTS.SCROLL_LOCK, { detail: { locked: true } })
      );
      menuBody.removeAttribute("inert");
      main?.setAttribute("inert", "");
      disableScroll();
    } else {
      menuBody.setAttribute("inert", "");
      main?.removeAttribute("inert");
      enableScroll();
      setTimeout(() => {
        ROOT.removeAttribute("data-scroll-locked");
        ROOT.dispatchEvent(
          new CustomEvent(UI_EVENTS.SCROLL_LOCK, { detail: { locked: false } })
        );
      }, 0);
    }
    menuBody.setAttribute(DATA_STATE, open ? "open" : "closed");
    menuBtn.classList.toggle(CLASSES.ACTIVE, open);
    menuBody.classList.toggle(CLASSES.ACTIVE, open);
    setAriaExpanded(menuBtn, open);
    if (open) {
      const focusables = getFocusable(menuBody);
      (focusables[0] || menuBody).focus();
      document.addEventListener("keydown", onKeydown, true);
    } else {
      document.removeEventListener("keydown", onKeydown, true);
    }
  }
  menuBody.addEventListener("click", (e) => {
    const arrow = e.target.closest("[data-menu-arrow]");
    if (arrow && menuBody.contains(arrow)) {
      e.preventDefault();
      e.stopPropagation();
      const parent = arrow.parentElement;
      parent?.classList.toggle(CLASSES.ACTIVE);
      const expanded = parent?.classList.contains(CLASSES.ACTIVE);
      arrow.setAttribute("aria-expanded", String(expanded));
      return;
    }
    const item = e.target.closest("[data-menu-item]");
    if (item && !item.closest("[data-menu-noclose]")) {
      setMenuOpen(false);
    }
  });
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setMenuOpen(!isOpen());
  });
  if (menuOverlay) {
    menuOverlay.addEventListener("pointerdown", () => setMenuOpen(false));
  } else {
    document.addEventListener("pointerdown", (e) => {
      if (!isOpen()) return;
      if (!menuBody.contains(e.target) && e.target !== menuBtn) {
        setMenuOpen(false);
      }
    });
  }
  function setupMenu(isMobile2) {
    if (isMobile2) {
      menuBody.setAttribute("inert", "");
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
      menuBody.removeAttribute("inert");
    }
  }
  const mql = window.matchMedia(BREAKPOINT_QUERY);
  const applyMql = () => setupMenu(mql.matches);
  applyMql();
  if (mql.addEventListener) mql.addEventListener("change", applyMql);
  else mql.addListener(applyMql);
}
document.addEventListener("DOMContentLoaded", () => {
  initHeader({
    selector: ".header",
    isScrolled: true,
    isHidden: false
  });
  initMenu();
  isWebp();
  isMobile();
  initSitemap();
  initSelects();
  initContentTabs();
  initSliders();
  initFancyboxes();
  initDatepickers();
  initPopups();
  initLangSelect();
  SELECTORS.BODY.classList.add(CLASSES.LOADED);
});
