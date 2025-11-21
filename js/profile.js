
function loadProfile() {
  
  const usernameEl = document.querySelector(".username");
  const bioEl = document.querySelector(".bio");

  const savedUsername = localStorage.getItem("username");
  const savedBio = localStorage.getItem("bio");

  if (savedUsername) usernameEl.textContent = savedUsername;
  if (savedBio) bioEl.textContent = savedBio;

 
  updateScore();
}


function updateScore() {
  const scoreEl = document.getElementById("score");
  const rankEl = document.getElementById("rank");

  const totalScore = parseInt(localStorage.getItem("totalScore") || "0");
  scoreEl.textContent = totalScore;
  rankEl.textContent = totalScore > 0 ? "#" + Math.max(1, 10000 - totalScore) : "#—";
}



const usernameEl = document.querySelector(".username");

document.getElementById("changeUsername").addEventListener("click", () => {
  const newUsername = prompt("Enter your new username:", usernameEl.textContent);
  if (newUsername) {
    usernameEl.textContent = newUsername;
    localStorage.setItem("username", newUsername);
    alert("Username updated!");
  }
});

document.getElementById("updateEmail").addEventListener("click", () => {
  const newEmail = prompt("Enter your new email:", localStorage.getItem("email") || "");
  if (newEmail) {
    localStorage.setItem("email", newEmail);
    alert("Email updated!");
  }
});

document.getElementById("deleteAccount").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete your account?")) {
    localStorage.clear();

    const container = document.querySelector(".profile-container");
    container.innerHTML = "<h2 style='text-align:center; color:#2e7d32; margin-top:50px;'>Account has been deleted!</h2>";
  }
});



const avatarEl = document.querySelector(".avatar");
document.getElementById("changeAvatar").addEventListener("click", () => {
  const newAvatar = prompt("Enter the URL of your new profile picture:", avatarEl.src);
  if (newAvatar) {
    avatarEl.src = newAvatar;
    localStorage.setItem("avatar", newAvatar);
    alert("Profile picture updated!");
  }
});

loadProfile();
