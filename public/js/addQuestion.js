const isLogin = localStorage.getItem("user");
window.token = localStorage.getItem("token");
if (!isLogin || !window.token) {
  window.location.href = "/"; // Redirect to login page
}
let questionCount = 1;
const maxQuestions = 10;

const questionContainer = document.getElementById("questionContainer");
const addBtn = document.getElementById("addQuestionBtn");

addBtn.addEventListener("click", () => {
  if (questionCount >= maxQuestions) {
    Swal.fire("Maksimal 10 pertanyaan!", "", "info");
    return;
  }

  questionCount++;

  // form
  const questionHTML = `
      <div class="question-block mb-4 p-4 border rounded-3 bg-light shadow-sm">
        <h5 class="mb-3 text-secondary">
          <i class="fas fa-question-circle me-2 text-warning"></i>Pertanyaan ${questionCount}
        </h5>

        <!-- Input Pertanyaan -->
        <div class="mb-3">
          <label class="form-label fw-bold">Teks Pertanyaan</label>
          <input type="text" class="form-control" name="question_text[]" placeholder="Masukkan pertanyaan..." required />
        </div>

        <!-- Kategori Pertanyaan -->
       <div class="mb-3">
              <label class="form-label fw-bold">Kategori Pertanyaan</label>
              <select class="form-select" name="question_category[]" required>
                <option disabled selected value="">-- Pilih Kategori --</option>
                <option value="Metode Pembelajaran">Metode Pembelajaran</option>
                <option value="Proses Pembelajaran">Proses Pembelajaran</option>
                <option value="Fasilitas dan Sarana">Fasilitas dan Sarana</option>
              </select>
            </div>

        <!-- Hidden Input: Tipe Jawaban tetap radio -->
        <input type="hidden" name="answer_type[]" value="radio" />
        <p class="text-muted small fst-italic">Tipe jawaban: Skala kepuasan (Sangat Puas → Sangat Tidak Puas)</p>
      </div>
    `;

  questionContainer.insertAdjacentHTML("beforeend", questionHTML);
});

document.getElementById("addQuestionform").addEventListener("submit", async function (event) {
  event.preventDefault();

  const questionTextElements = document.getElementsByName("question_text[]");
  const categoryElements = document.getElementsByName("question_category[]");
  const answerTypeElements = document.getElementsByName("answer_type[]");

  // Ambil semua nilai ke dalam array
  const question_text = Array.from(questionTextElements).map((input) => input.value);
  const category = Array.from(categoryElements).map((select) => select.value);
  const answer_type = Array.from(answerTypeElements).map((input) => input.value);

  const addForm = {
    question_text,
    category,
    answer_type,
  };

  try {
    const response = await fetch("/question/question-add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.token}`,
      },
      body: JSON.stringify(addForm),
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: result.message,
      }).then(() => {
        window.location.href = "/question";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: result.message,
      });
    }
  } catch (error) {
    console.error("gagal kirim data", error);
  }
});
