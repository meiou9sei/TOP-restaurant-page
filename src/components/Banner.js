import noodlesLogo from "./../noodlesLogo.jpg";

export default function Banner() {
  const logoImageContainer = document.createElement("div");
  logoImageContainer.classList.add("logo-image-container");
  const logoImage = new Image();
  logoImage.src = noodlesLogo;
  logoImageContainer.appendChild(logoImage);
  logoImage.classList.add("logo-image");

  return logoImageContainer;
}
