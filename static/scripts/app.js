function addGlobalListener(event, selector, callback) {
    document.addEventListener(event, (e) => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    });
}

function insertAfter(element, target) {
    target.parentNode.insertBefore(element, target.nextSibling);
}

window.addEventListener("DOMContentLoaded", () => {
    addGlobalListener("dragstart", ".todo__item", (e) => {
        e.target.classList.add("todo__item--drag-start");
    })

    addGlobalListener("dragend", ".todo__item", (e) => {
        e.target.classList.remove("todo__item--drag-start");
    })

    addGlobalListener("dragenter", ".todo__item", (e) => {
        e.preventDefault();

        e.target.classList.add("todo__item--drag-enter");
    })

    addGlobalListener("dragleave", ".todo__item", (e) => {
        e.preventDefault();

        e.target.classList.remove("todo__item--drag-enter");
    })

    addGlobalListener("dragover", ".todo__item", (e) => {
        e.preventDefault();
    })

    addGlobalListener("drop", ".todo__item", (e) => {
        const draggedElement = document.getElementsByClassName("todo__item--drag-start")[0];

        insertAfter(draggedElement, e.target);
        e.target.classList.remove("todo__item--drag-enter");
    })
});