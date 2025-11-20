let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

}

// ---- newsletter subscribe (simple client-side handler) ----
document.addEventListener('DOMContentLoaded', function () {
  // find the newsletter form used in your index.html
  const form = document.querySelector('.newletter form') || document.querySelector('.newsletter-content form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const input = form.querySelector('input[type="email"]');
    const email = input && input.value.trim();

    // basic validation
    if (!email || !/.+@.+\..+/.test(email)) {
      // simple inline message instead of alert
      showTemporaryMessage(form, 'Please enter a valid email address.', 3000, 'error');
      return;
    }

    // show success message
    showTemporaryMessage(form, 'Thanks — you are subscribed!', 4000, 'success');
    input.value = '';
  });

  // small helper: show temporary inline message under the form
  function showTemporaryMessage(container, text, ms = 3000, type = 'info') {
    // remove existing message if any
    const existing = container.querySelector('.subscribe-msg');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'subscribe-msg subscribe-' + type;
    msg.textContent = text;
    msg.style.marginTop = '8px';
    msg.style.padding = '8px 10px';
    msg.style.borderRadius = '6px';
    msg.style.fontWeight = '600';
    // simple inline colors to avoid editing CSS if you prefer
    if (type === 'success') { msg.style.background = '#eaf7ea'; msg.style.color = '#0a6b3a'; }
    else if (type === 'error') { msg.style.background = '#fdecea'; msg.style.color = '#a52222'; }
    else { msg.style.background = '#eef4ff'; msg.style.color = '#08306b'; }

    container.appendChild(msg);
    setTimeout(() => msg.remove(), ms);
  }
});
