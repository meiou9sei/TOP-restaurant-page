export default function Menu() {
  const menu = document.createElement("div");
  menu.innerHTML = `
    <main>
        <p>menu test</p>
    </main>
  `;
  menu.classList.add("menu");
  return menu;
}
