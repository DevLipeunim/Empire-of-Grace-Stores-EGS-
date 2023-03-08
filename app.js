const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const password_1 = document.querySelector(".password_1");
const password_2 = document.querySelector(".password_2");

let changeIcon = function(icon) {
  if (password_1.type === 'password' || password_2.type === 'password'){
    password_1.setAttribute('type', 'text');
    password_2.setAttribute('type', 'text');
    icon.classList.toggle('fa-eye-slash');
  }
  else{
    password_1.setAttribute('type', 'password');
    password_2.setAttribute('type', 'password');
    icon.classList.toggle('fa-eye');
  }
}

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
