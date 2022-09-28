// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.querySelector(".modal");

const sixtySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 60000);
});

sixtySecondPromise.then(() => {
  modal.style.display = "block";
});

const close = document.querySelector(".close");

const closeWindow = () => {
  modal.style.display = "none";
};

close.addEventListener("click", closeWindow);
