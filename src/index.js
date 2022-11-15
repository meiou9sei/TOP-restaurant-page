import PageSwitcher from "./PageSwitcher";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

function content() {
  const content = document.querySelector("#content");

  //pages
  const homePage = Home();
  content.appendChild(homePage);
  // const contactPage = Contact();
  // content.appendChild(contactPage);
  // const menuPage = Menu();
  // content.appendChild(menuPage);

  //nav
  const pageSwitcher = PageSwitcher();
  content.prepend(pageSwitcher);

  return content;
}

document.body.appendChild(content());
