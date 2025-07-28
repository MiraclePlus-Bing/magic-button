// 获取页面元素
const button = document.getElementById('magicBtn');
const colorDisplay = document.getElementById('colorValue');

// 按钮点击事件
button.addEventListener('click', () => {
  // 生成随机RGB颜色（0-255之间的三个随机数）
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  // 提示：使用以下格式设置按钮背景色 👇
   button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
  // 提示：使用以下格式显示颜色值 👇
   colorDisplay.textContent = `rgb(${r}, ${g}, ${b})`;
});
