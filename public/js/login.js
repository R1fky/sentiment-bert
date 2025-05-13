document.getElementById("loginUser").addEventListener("submit", async function (event) {
  event.preventDefault();
  const formLogin = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin),
    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: result.message,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/"; // Reload the page after success
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Anda Gagal",
        text: result.message,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  } catch (error) {}
});
