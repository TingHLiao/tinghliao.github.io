var btn_text_default = "Email";
var btn_text_hover = "Copy email";
var btn_text_copied = "Copied email!";
var is_copied = false;

// document.addEventListener("DOMContentLoaded", function () {
//   const btn = document.getElementById("emailBtn");
//   btn.addEventListener("click", function() { copyEmail(btn); });
//   btn.addEventListener("mouseover", function() { hoverEmail(btn); });
//   btn.addEventListener("mouseleave", function() { leaveEmail(btn); });
// });

function hoverEmail(btn) {
  btn.innerHTML = btn.innerHTML.replace(btn_text_default, btn_text_hover).replace(btn_text_copied, btn_text_default);
}

function leaveEmail(btn) {
  if (is_copied) {
    setTimeout(function() {
      btn.innerHTML = btn.innerHTML.replace(btn_text_hover, btn_text_default).replace(btn_text_copied, btn_text_default);
    //   btn.classList.remove("copied");
    //   btn.classList.add("notcopied");
      is_copied = false;
    }, 100);
  } else {
    btn.innerHTML = btn.innerHTML.replace(btn_text_hover, btn_text_default).replace(btn_text_copied, btn_text_default);
  }
}

function copyEmail(btn) {
    const email_addr = "ting1129@umd.edu";
    btn.innerHTML = btn.innerHTML.replace(btn_text_default, btn_text_copied).replace(btn_text_hover, btn_text_copied);
    // btn.classList.add("copied");
    // btn.classList.remove("notcopied");
    navigator.clipboard.writeText(email_addr);
    is_copied = true;
}