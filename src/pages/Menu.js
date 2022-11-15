export default function Menu() {
  const menu = document.createElement("div");
  menu.innerHTML = `
    <main>
      <div class='hero'>
        <h1>Menu</h1>
        <p>Really the only thing I can talk about is their mac and cheese</p>
      </div>

      <section class='drinks'>
        <h2>Drinks</h2>
        <div class="menu-item">
          <h3>Water in Paper cup</h3>
          <p>I never get a drink, always ask for a cup for water</p>
        </div>
      </section>

      <section class='sides'>
        <h2>Sides</h2>
        <div class="menu-item">
          <h3>10 Korean BBQ Meatballs</h3>
          <p>Good for keeping the palette fresh between mac and cheese. Would probably get sick otherwise.</p>
        </div>
      </section>

      <section class='main-dishes'>
        <h2>Main Dishes</h2>
        <div class="menu-item">
          <h3>Wisconsin Mac & Cheese</h3>
          <p>Does the job.</p>
        </div>
        <div class="menu-item">
          <h3>BBQ Chicken Mac</h3>
          <p>I've ordered this a couple times years ago. Got tired of it quick</p>
        </div>
      </section>
    </main>
  `;
  menu.classList.add("menu");
  return menu;
}
