// const user = localStorage.getItem("user");
// const parsedUser = user ? JSON.parse(user) : null;

// // Desktop Auth
// const auth = document.getElementById("auth");

// // Mobile Auth
// const mobileUsername = document.getElementById("mobile-username");
// const mobileLoginBtn = document.getElementById("mobile-login-btn");
// const mobileLogoutBtn = document.getElementById("mobile-logout-btn");

// if (auth) {
//   if (parsedUser) {
//     auth.innerHTML = `<button id="desktop-logout-btn" class="btn btn-danger">Logout</button>`;
//   } else {
//     auth.innerHTML = `<a class="btn btn-warning" href="/auth">Login</a>`;
//   }
// }

// if (parsedUser) {
//   if (mobileUsername) {
//     mobileUsername.innerText = parsedUser.name || "User";
//     mobileUsername.classList.remove("d-none");
//   }
//   if (mobileLoginBtn) mobileLoginBtn.classList.add("d-none");
//   if (mobileLogoutBtn) mobileLogoutBtn.classList.remove("d-none");
// } else {
//   if (mobileUsername) mobileUsername.classList.add("d-none");
//   if (mobileLoginBtn) mobileLoginBtn.classList.remove("d-none");
//   if (mobileLogoutBtn) mobileLogoutBtn.classList.add("d-none");
// }

// if (mobileLoginBtn) {
//   mobileLoginBtn.addEventListener("click", () => {
//     window.location.href = "/auth";
//   });
// }

// if (mobileLogoutBtn) {
//   mobileLogoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     window.location.href = "/auth";
//   });
// }

// // logout
// const desktopLogoutBtn = document.getElementById("desktop-logout-btn");
// if (desktopLogoutBtn) {
//   desktopLogoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   });
// }

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
