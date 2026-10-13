const formKontak = document.getElementById("formKontak");
const btnKirim = document.getElementById("btnKirim");
const statusPesan = document.getElementById("statusPesan");
const modalElement = document.getElementById("modalKonfirmasi");
const modalKonfirmasi = bootstrap.Modal.getOrCreateInstance(modalElement);

document.getElementById("btnKonfirmasi").addEventListener("click", function () {
  statusPesan.textContent = "";
  if (!formKontak.checkValidity()) {
    formKontak.reportValidity();
    return;
  }
  modalKonfirmasi.show();
});

btnKirim.addEventListener("click", function () {
  if (!formKontak.checkValidity()) {
    modalKonfirmasi.hide();
    formKontak.reportValidity();
    return;
  }

  const nama = document.getElementById("nama").value.trim();
  statusPesan.textContent = `Terima kasih, ${nama}. Pesan berhasil dikonfirmasi untuk latihan ini.`;
  statusPesan.className = "small mt-3 mb-0 text-success";
  formKontak.reset();
  modalKonfirmasi.hide();
});


const navLinks = document.querySelectorAll(
  ".navbar-nav .nav-link"
);

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
