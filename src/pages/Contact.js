export default function Contact() {
  const contact = document.createElement("div");
  contact.innerHTML = `
    <main>
      <div class='hero'>
        <h1>Contact Us</h1>
        <p>We can make more mac & cheese if you'd like</p>
      </div>

      <section class='contact'>
        <div class="contact-person">
          <h2>my friend Jake</h2>
          <p>he's chill</p>
          <p>777-777-7777</p>
          <p>google@gmail.com</p>
          </div>
          <div class="contact-person">
          <h2>my friend Richard</h2>
          <p>he's ok</p>
          <p>555-555-5555</p>
          <p>yahoo@gmail.com</p>
          </div>
          <div class="contact-person">
          <h2>my crush Emilia</h2>
          <p>she's cute sometimes</p>
          <p>444-444-4444</p>
          <p>aperture@gmail.com</p>
        </div>
      </section>
    </main>
  `;
  contact.classList.add("contact");
  return contact;
}
