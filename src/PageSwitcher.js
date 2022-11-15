import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

const pages = ["home", "menu", "contact"];

export default function PageSwitcher() {
  const pageSwitcher = document.createElement("nav");
  pageSwitcher.classList.add("pageSwitcher");

  for (let i = 0; i < pages.length; i++) {
    const temp = buttonCreator(pages[i]);
    pageSwitcher.appendChild(temp);
    console.log("forloop", i, "   ", temp);
  }

  return pageSwitcher;
}

function buttonCreator(pageName) {
  const pageSwitchButton = document.createElement("button");
  pageSwitchButton.innerText = `
        ${pageName}
    `;
  pageSwitchButton.addEventListener("click", () => switchPage(pageName));
  console.log(pageSwitchButton);
  return pageSwitchButton;
}

function switchPage(requestedPage) {
  //first wipes out current content
  const content = document.querySelector("#content");
  content.removeChild(content.lastChild);
  console.log("requestedPage is" + requestedPage);
  //then inputs own event
  switch (requestedPage) {
    case "home":
      const homePage = Home();
      content.appendChild(homePage);
      break;
    case "contact":
      const contactPage = Contact();
      content.appendChild(contactPage);
      break;
    case "menu":
      const menuPage = Menu();
      content.appendChild(menuPage);
      break;
  }
}
