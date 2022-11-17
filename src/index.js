import Banner from "./components/Banner";
import PageSwitcher from "./PageSwitcher";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import "./main.css";

function content() {
  const content = document.querySelector("#content");

  //banner image
  const bannerImage = Banner();
  content.appendChild(bannerImage);

  //nav
  const pageSwitcher = PageSwitcher();
  content.appendChild(pageSwitcher);

  //pages
  const homePage = Home();
  content.appendChild(homePage);
  // const contactPage = Contact();
  // content.appendChild(contactPage);
  // const menuPage = Menu();
  // content.appendChild(menuPage);

  return content;
}

document.body.appendChild(content());
