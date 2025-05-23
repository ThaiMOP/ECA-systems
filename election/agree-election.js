// ✅ สถานะเปิด/ปิดของการเลือกตั้งแต่ละประเภท
const electionStatus = {
  generalElection: true, // ❌ ปิด
  hrElection: false,       // ✅ เปิด
  senateElection: false   // ❌ ปิด
};

// ✅ Mapping ปุ่ม -> ลิงก์ปลายทาง
const redirectMap = {
      generalElection: '/election/ge.html',
      hrElection: '/election/hre.html',
      senateElection: '/election/se.html',
      report: 'https://rep-arlington.pages.dev/election/event',
      check: 'https://rep-arlington.pages.dev/election/enqelection-local'
};

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

// ✅ เปิดปุ่มที่อนุญาตให้ใช้งาน และมีการเปิดเลือกตั้ง
function enableElectionButtons() {
  Object.keys(redirectMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      if (electionStatus.hasOwnProperty(id)) {
        if (electionStatus[id]) {
          btn.disabled = false;
          btn.addEventListener('click', () => {
            window.location.href = redirectMap[id];
          });
        } else {
          btn.disabled = true;
        }
      } else {
        btn.disabled = false;
        btn.addEventListener('click', () => {
          window.location.href = redirectMap[id];
        });
      }
    }
  });
}

// ❌ ปิดทุกปุ่ม
function disableElectionButtons() {
  Object.keys(redirectMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.disabled = true;
    }
  });
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
