// ✅ ดึงข้อมูลจาก localStorage
const data = JSON.parse(localStorage.getItem("loggedUser"));

if (!data) {
  window.location.href = "login.html";
} else {
  const usernameEl = document.getElementById('username');
  const profileContainer = document.getElementById('profileContainer');

  if (usernameEl && profileContainer) {
    usernameEl.textContent = `${data.fname} ${data.lname}`;
    profileContainer.style.display = 'block';
  }

  if (data.right === 'มี') {
    enableElectionButtons();
  } else {
    disableElectionButtons();
  }
}

// 🔐 ออกจากระบบ
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}

// 👤 โปรไฟล์ dropdown
const profileContainer = document.getElementById('profileContainer');
const profileBox = document.getElementById('profileBox');

if (profileContainer && profileBox) {
  profileContainer.addEventListener('click', () => {
    profileBox.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!profileContainer.contains(e.target)) {
      profileBox.classList.remove('show');
    }
  });
}
