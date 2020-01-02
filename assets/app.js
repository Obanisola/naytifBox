console.log("Connected");

const source = document.querySelector("#delivery-options");
const target = document.querySelector("#express-delivery-notice");

const displayWhenSelected = (source, value, target) => {
    const selectedIndex = source.selectedIndex;
    const isSelected = source[selectedIndex].value === value;
    target.classList[isSelected
        ? "add"
        : "remove"
    ]("show");
};
source.addEventListener("change", (evt) =>
    displayWhenSelected(source, "express", target)
);