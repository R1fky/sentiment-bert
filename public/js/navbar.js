const userString = localStorage.getItem("user");
const parsedUser = userString ? JSON.parse(userString) : null;
window.token = localStorage.getItem("token");

const auth = document.getElementById("auth"); // Sidebar desktop
const mobileAuth = document.getElementById("mobile-auth"); // Navbar mobile

// 🔒 Sembunyikan menu jika bukan ADMIN / SUPERADMIN
if (!parsedUser || !["ADMIN", "SUPERADMIN"].includes(parsedUser.role) || !window.token) {
  const adminMenus = ["a[href='/dashboard']", "a[href='/forms']"];

  adminMenus.forEach((selector) => {
    document.querySelectorAll(selector).forEach((menu) => {
      menu.style.display = "none";
    });
  });
}

// 🔄 Render tombol login atau dropdown user
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

// 🔓 Fungsi logout
document.addEventListener("click", function (e) {
  if (e.target.id === "logout-btn") {
    e.preventDefault();

    // Bersihkan session
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; max-age=0";

    // Redirect ke halaman awal
    window.location.href = "/";
  }
});
