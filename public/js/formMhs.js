document.getElementById("formMhs").addEventListener("submit", async function (event) {
  event.preventDefault();

  const spinner = document.getElementById("loadingSpinner");

  // Validasi apakah semua pertanyaan telah dijawab
  const unansweredQuestions = [];
  document.querySelectorAll('[id^="q"]').forEach((group) => {
    const questionId = group.name.match(/\[(.*?)\]/)[1];
    if (!document.querySelector(`input[name="${group.name}"]:checked`)) {
      unansweredQuestions.push(questionId);
    }
  });

  if (unansweredQuestions.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Form Tidak Lengkap",
      text: "Silakan jawab semua pertanyaan sebelum submit.",
    });
    return;
  }

  // Ambil nilai input data mahasiswa
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nim = document.getElementById("nim").value;

  // Validasi email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Email Tidak Valid",
      text: "Silakan masukkan alamat email yang valid.",
    });
    return;
  }

  // Ambil nilai dari setiap pertanyaan
  const answers = {};
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  radioButtons.forEach((radioButton) => {
    const questionId = radioButton.name.match(/\[(.*?)\]/)[1];
    answers[questionId] = radioButton.value;
  });

  const formQuesioner = {
    nama: nama,
    email: email,
    nim: nim,
    answers: answers,
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

    const response = await fetch("/form/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formQuesioner),
    });

    const result = await response.json();

    if (result.success) {
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Berhasil Submit!",
        text: "Terima kasih atas partisipasinya.",
        timer: 2000,
        showConfirmButton: false,
      });

      // generate signature
      const sigRes = await fetch("/form/generate-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, email, nim }),
      });

      const { signature } = await sigRes.json();

      window.location.href = `/form/sentimenUser?nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&nim=${encodeURIComponent(nim)}&sig=${signature}`;
    } else {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Gagal Submit",
        text: result.message || "Terjadi kesalahan.",
      });
    }
  } catch (error) {
    Swal.close();
    spinner.classList.add("hidden");
    Swal.fire({
      icon: "error",
      title: "Kesalahan Server",
      text: error.message || "Gagal terhubung ke server.",
    });
  }
});

// Animasi form muncul
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formMhs");
  form.classList.remove("opacity-0", "translate-y-4");
  form.classList.add("opacity-100", "translate-y-0");
});
