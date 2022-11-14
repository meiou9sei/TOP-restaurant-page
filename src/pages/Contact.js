export default function Contact() {
  const contact = document.createElement("div");
  contact.innerHTML = `
    <main>
        <p>contact test</p>
    </main>
  `;
  contact.classList.add("contact");
  return contact;
}
