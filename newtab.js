
import colors from "./utils/colors.js";

const colorName = document.getElementById("colorName");
// const colorValue = document.getElementById("colorValue");
const colorCircle = document.getElementById("colorCircle");
// 随机从 colors 中取一个颜色
const randomColor = colors[Math.floor(Math.random() * colors.length)];
colorName.textContent = randomColor.colorName;
// colorValue.textContent = randomColor.colorValue;
// colorValue.style.backgroundColor = randomColor.colorValue;
colorCircle.style.backgroundColor = randomColor.colorValue;
document.body.style.backgroundColor = randomColor.colorValue;
