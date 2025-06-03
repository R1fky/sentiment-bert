document.getElementById("loginUser").addEventListener("submit", async function (event) {
  event.preventDefault();

  const formLogin = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  try {
    Swal.fire({
      title: "Sedang diproses...",
      html: "Mohon tunggu sebentar.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin),
    });

    const result = await response.json();

    if (result.success) {
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: result.message,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        localStorage.setItem("token", result.token);
        const user = {
          id: result.data.id,
          username: result.data.username,
          role: result.data.role,
        };
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/"; // Reload the page after success
      });
    } else {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Login Anda Gagal",
        text: result.message,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  } catch (error) {
    Swal.close();
    Swal.fire({
      icon: "error",
      title: "Failed to Login",
      text: result.message,
      timer: 2000,
      showConfirmButton: false,
    });
  }
});
