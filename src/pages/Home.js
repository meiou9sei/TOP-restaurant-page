import noodlesLogo from "./../noodlesLogo.jpg";

export default function Home() {
  const home = document.createElement("div");
  home.innerHTML = `
    <main>
      <div class='hero'>
        <h1>Noodles and Co</h1>
        <p>I only order the wisconsin mac and cheese here</p>
      </div>
    </main>`;
  home.classList.add("home");

  const logoImage = new Image();
  logoImage.src = noodlesLogo;
  home.appendChild(logoImage);
  return home;
}
