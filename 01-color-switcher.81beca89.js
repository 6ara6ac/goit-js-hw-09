!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled",!0),t.addEventListener("click",(function(){a=setInterval((function(){evt="#".concat(Math.floor(16777215*Math.random()).toString(16)),r.style.backgroundColor=evt,t.setAttribute("disabled",!0),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(a)}));var a="null"}();
//# sourceMappingURL=01-color-switcher.81beca89.js.map
