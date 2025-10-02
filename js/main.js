import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";

/* ##############################
        Navigation
############################### */
$(function () {
    // show hide nav
    $(".navbar").hidescroll();

    // mobile dropdown menu
    const toggleBtn = $("#toggle_btn");
    const dropdownMenu = $(".dropdown-menu");

    toggleBtn.click(() => {
        dropdownMenu.toggleClass("open");
    });
});

/* ##############################
        Partner Logos
############################### */
$(function () {
    const container = document.querySelector("#partner-logo-list");
    partnerLogos.forEach((logo) => {
        const img = document.createElement("img");
        img.src = partnerLogoBasePath + logo.fileName;
        img.alt = logo.alt;
        img.classList.add("logo-ticker-image");
        container.appendChild(img);
    });
});

/* ##############################
        Products
############################### */
$("li:first").addClass("activeTab");

$("li").on("click", function () {
    $("li").removeClass("activeTab");
    $("div[id='products-tabs'] ul .r-tabs-state-active").addClass("activeTab");
});

$(function () {
    $("#products-tabs").responsiveTabs({
        animation: "slide",
    });
});

/* ##############################
        Best Seller
############################### */
$(function () {
    $(".slider").slick({
        autoplay: true,
        dots: true,
    });
});

/* ##############################
        Stats
############################### */
$(function () {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
        entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting && !el.classList.contains("is-visible")) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                });
                el.classList.add("is-visible");
            }
        });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelectorAll(".counter").forEach((node) => IO.observe(node));
    IO.observe(el);
});
