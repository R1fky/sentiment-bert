const userString = localStorage.getItem("user");
console.log("userString:", userString);

const parsedUser = userString ? JSON.parse(userString) : null;
console.log("parsedUser:", parsedUser);

const token = localStorage.getItem("token");
console.log("token:", token);

const auth = document.getElementById("auth"); // Sidebar desktop
const mobileAuth = document.getElementById("mobile-auth"); // Navbar mobile

// Sembunyikan menu untuk non-admin
if (!parsedUser || parsedUser.role !== "ADMIN" || !token) {
  const sentimentMenus = document.querySelectorAll("a[href='/report']");
  sentimentMenus.forEach((menu) => {
    menu.style.display = "none";
  });

  const questionMenus = document.querySelectorAll("a[href='/question']");
  questionMenus.forEach((menu) => {
    menu.style.display = "none";
  });
}

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
