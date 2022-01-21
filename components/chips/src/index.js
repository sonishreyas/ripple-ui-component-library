import "./root-styles.css";
import "./css/styles.css";
import "./css/basic-chips.css";
import "./css/input-chips.css";
import "./css/input-chips-with-icon.css";

// 1. Basic Chips
const rdc_chip_cross = document.querySelectorAll(".rdc-chip-cross");
rdc_chip_cross.forEach((item) => {
  item.addEventListener(
    "click",
    () => (item.parentElement.style.display = "none")
  );
});

// 2. Input Chips
const rdc_input_chip_input = document.querySelector(".rdc-input-chip--input");
const rdc_input_chip_container = document.querySelector(
  ".rdc-input-chip--container"
);

rdc_input_chip_input.addEventListener("keypress", (e) => {
  const section = document.createElement("section");
  if (e.key === "Enter") {
    const section = document.createElement("section");
    section.classList.add("rdc-basic-chip");
    const p_name = document.createElement("p");
    p_name.classList.add("rdc-chip-content");
    const p_cross = document.createElement("p");
    p_cross.classList.add("rdc-chip-cross");
    p_name.innerText = rdc_input_chip_input.value;
    p_cross.innerText = "x";
    section.append(p_name);
    section.append(p_cross);
    rdc_input_chip_container.insertBefore(section, rdc_input_chip_input);
    rdc_input_chip_input.value = "";
    const rdc_input_chip_cross = document.querySelectorAll(
      ".rdc-input-chip--container .rdc-chip-cross"
    );

    rdc_input_chip_cross.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
      });
    });
  }
});

// 3. Input Chips WIth Icon
const rdc_input_icon_chip_input = document.querySelector(
  ".rdc-input-icon-chip--input"
);
const rdc_input_with_icon_chip_container = document.querySelector(
  ".rdc-input-chip-with-icon--container"
);

rdc_input_with_icon_chip_container.addEventListener("keypress", (e) => {
  const section = document.createElement("section");
  if (e.key === "Enter") {
    const section = document.createElement("section");
    section.classList.add("rdc-basic-chip");
    const p_name = document.createElement("p");
    p_name.classList.add("rdc-chip-content");
    const p_cross = document.createElement("p");
    p_cross.classList.add("rdc-chip-cross");
    p_name.innerText = rdc_input_icon_chip_input.value;
    p_cross.innerText = "x";
    const img_icon = document.createElement("img");
    img_icon.srcset =
      "https://picsum.photos/300/200 1x, https://picsum.photos/200/200 2x";
    img_icon.src = "https://picsum.photos/300/200";
    img_icon.alt = "I";
    img_icon.classList.add("rdc-chip-icon");
    section.append(img_icon);
    section.append(p_name);
    section.append(p_cross);
    rdc_input_with_icon_chip_container.insertBefore(
      section,
      rdc_input_icon_chip_input
    );
    rdc_input_icon_chip_input.value = "";
    const rdc_input_chip_cross = document.querySelectorAll(
      ".rdc-input-chip--container .rdc-chip-cross"
    );

    rdc_input_chip_cross.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
      });
    });
  }
});
