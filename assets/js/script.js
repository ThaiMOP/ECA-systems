// เลือก toggle ทุกตัว (ไอคอนหมวดหลัก)
document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parentLi = toggle.parentElement; // <li> ที่คลิก

    // ปิด <li> ทุกตัวใน .sitemap ก่อน
    document.querySelectorAll('.sitemap > li').forEach(li => {
      if (li !== parentLi) {
        li.classList.remove('open');
      }
    });

    // toggle class 'open' เฉพาะที่คลิก
    parentLi.classList.toggle('open');
  });
});
