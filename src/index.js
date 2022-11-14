import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

function content() {
  const content = document.querySelector("#content");
  const homePage = Home();
  const contactPage = Contact();
  const menuPage = Menu();

  content.appendChild(homePage);
  content.appendChild(contactPage);
  content.appendChild(menuPage);
}

document.body.appendChild(content());
