const user = localStorage.getItem("user");
const parsedUser = user ? JSON.parse(user) : null;

const auth = document.getElementById("auth"); // Sidebar desktop
const mobileAuth = document.getElementById("mobile-auth"); // Navbar mobile

function renderDropdown(username) {
  return `
      <div class="dropdown">
        <button class="btn btn-warning dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${username}
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#" id="logout-btn">Logout</a></li>
        </ul>
      </div>
    `;
}

function renderLoginButton() {
  return `<a class="btn btn-warning btn-sm" href="/auth">Login</a>`;
}

if (auth) {
  auth.innerHTML = parsedUser ? renderDropdown(parsedUser.username) : renderLoginButton();
}

if (mobileAuth) {
  mobileAuth.innerHTML = parsedUser ? renderDropdown(parsedUser.username) : renderLoginButton();
}

document.addEventListener("click", function (e) {
  if (e.target.id === "logout-btn") {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/auth";
  }
});
