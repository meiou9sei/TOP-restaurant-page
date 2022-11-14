import noodlesLogo from "./../noodlesLogo.jpg";

export default function Home() {
  const home = document.createElement("div");
  home.innerHTML = `
    <main>
      <div class='hero'>
        <h1>Noodles and Co</h1>
        <p>I only order the wisconsin mac and cheese here</p>
      </div>

      <section class='description'>
        <h2>About Noodles</h2>
        <p>Noodles has the best macaroni and cheese. I've never ordered anything else from them so I don't even know what their other stuff is like. Yes, I understand they make a huge profit on the wisconsin mac and cheeses and I'm getting ripped off buying them when I could probably just make my own. But goddamnit do I love them mac and cheeses.</p>
      </section>

      <section class="hours">
        <h2>Hours</h2>
        <p class="dayTimes">Sunday: 8am - 8pm</p>
        <p class="dayTimes">Monday: 6am - 6pm</p>
        <p class="dayTimes">Tuesday: 6am - 6pm</p>
        <p class="dayTimes">Wednesday: 6am - 6pm</p>
        <p class="dayTimes">Thursday: 6am - 10pm</p>
        <p class="dayTimes">Friday: 6am - 10pm</p>
        <p class="dayTimes">Saturday: 8am - 10pm</p>
      </section>

      <section class="location">
        <h2>Location</h2>
        <p>Near my house, about 5 minutes, kinda a long walk :/</p>
      </section>
    </main>
  `;
  home.classList.add("home");

  const logoImage = new Image();
  logoImage.src = noodlesLogo;
  home.appendChild(logoImage);
  return home;
}
