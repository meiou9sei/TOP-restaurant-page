import Home from "./pages/Home";

function content() {
  const content = document.querySelector("#content");
  const element = Home();
  content.appendChild(element);
}

document.body.appendChild(content());
