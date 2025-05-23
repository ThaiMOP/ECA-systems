
    // 1. Mapping ปุ่มไปยังหน้าปลายทาง
    const redirectMap = {
      generalElection: '/election/ge.html',
      hrElection: '/election/hre.html',
      senateElection: '/election/se.html',
      report: 'https://rep-arlington.pages.dev/election/event',
      check: 'https://rep-arlington.pages.dev/election/enqelection-local'
    };
  
    // 2. ดึงข้อมูลผู้ใช้จาก localStorage
    const data = JSON.parse(localStorage.getItem("loggedUser"));
  
    if (!data) {
      // ถ้าไม่มีข้อมูลผู้ใช้ ให้กลับไปหน้า login
      window.location.href = "login.html";
    } else {
      // แสดงชื่อ
      document.getElementById('username').textContent = `${data.fname} ${data.lname}`;
      document.getElementById('profileContainer').style.display = 'block';
  
      // 3. กำหนดสิทธิ์ปุ่มเลือกตั้ง
      if (data.right === 'มี') {
        enableElectionButtons();
      } else {
        disableElectionButtons();
      }
    }
  
    // 4. ฟังก์ชันเปิดปุ่ม
    function enableElectionButtons() {
      Object.keys(redirectMap).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.disabled = false;
          btn.addEventListener('click', () => {
            window.location.href = redirectMap[id];
          });
        }
      });
    }
  
    // 5. ฟังก์ชันปิดปุ่ม
    function disableElectionButtons() {
      Object.keys(redirectMap).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.disabled = true;
        }
      });
    }
  
    // 6. Logout
    function logout() {
      localStorage.removeItem("loggedUser");
      window.location.href = "login.html";
    }
  
    // 7. จัดการ dropdown โปรไฟล์
    const profileContainer = document.getElementById('profileContainer');
    const profileBox = document.getElementById('profileBox');
  
    profileContainer.addEventListener('click', () => {
      profileBox.classList.toggle('show');
    });
  
    window.addEventListener('click', (e) => {
      if (!profileContainer.contains(e.target)) {
        profileBox.classList.remove('show');
      }
    });
