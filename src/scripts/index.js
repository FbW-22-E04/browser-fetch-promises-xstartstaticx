// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.querySelector(".modal");

const sixtySecondPromise = new Promise(() => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 60000);
});

const close = document.querySelector(".close");
const closeWindow = () => {
  modal.style.display = "none";
};

close.addEventListener("click", closeWindow);
