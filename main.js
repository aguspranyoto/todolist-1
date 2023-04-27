let inputActivity = document.getElementById("input-activity");
let buttonSave = document.getElementById("button-save");

buttonSave.addEventListener("click", function () {
  if (inputActivity.value == "") {
    alert("activity cannot be empty");
  } else {
    let listGroup = document.querySelector(".list-group");
    let todoHtml = listGroup.innerHTML;

    todoHtml += `
    <li class="list-group-item d-flex justify-content-between">
            <div>            
            <input class="form-check-input me-1" type="checkbox" />
            <span>${inputActivity.value}</span>
            </div>
            <button class="badge border-0 bg-danger btn-hapus">x</button>
    </li>`;
    listGroup.innerHTML = todoHtml;
    inputActivity.value = "";
    inputActivity.focus();

    let checkActivity = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < checkActivity.length; i++) {
      const input = checkActivity[i];
      input.addEventListener("change", function () {
        let todoSpan = input.nextElementSibling;
        todoSpan.classList.toggle("text-decoration-line-through");
      });
    }

    let btnHapus = document.querySelectorAll(".btn-hapus");
    for (let j = 0; j < btnHapus.length; j++) {
      const hapus = btnHapus[j];
      hapus.addEventListener("click", function () {
        this.parentElement.remove();
      });
    }
  }
});
