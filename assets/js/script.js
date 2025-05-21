document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parentLi = toggle.closest('li');

    // ปิดหมวดอื่น ๆ
    document.querySelectorAll('.sitemap > li').forEach(li => {
      if (li !== parentLi) {
        li.classList.remove('open');
      }
    });

    // toggle เปิด/ปิด เฉพาะตัวที่คลิก
    parentLi.classList.toggle('open');
  });
});
