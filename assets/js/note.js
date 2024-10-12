const checkbox = document.getElementById("myCheckbox");
const labels = document.querySelectorAll(".label");

checkbox.addEventListener("change", () => {
  labels.forEach((label) => {
    label.classList.toggle("line-through", checkbox.checked);
  });
});
