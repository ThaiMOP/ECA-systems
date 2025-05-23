document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const parentLi = toggle.closest('li');

    // ป้องกันไม่ให้ event ไปทำงานซ้ำถ้า span มี listener เอง
    e.stopPropagation();

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
