const isElementXPercentInViewport = function(el, percentVisible) {
    let rect = el.getBoundingClientRect()
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
};

function scrollListener(e) {
    let hiddenElements = document.getElementsByClassName("hide");

    for (element of hiddenElements) {
        if (isElementXPercentInViewport(element, 1)) {
            element.classList.add("show");
            element.classList.remove("hide");
        }
    };
}

document.onscroll = scrollListener
