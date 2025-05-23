document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const parentLi = toggle.closest('li');

    // ปิดทุก li ที่เปิดอยู่ ยกเว้นตัวที่คลิก
    document.querySelectorAll('li.open').forEach(li => {
      if (li !== parentLi && !li.contains(parentLi)) {
        li.classList.remove('open');
      }
    });

    // toggle เปิด/ปิด เฉพาะตัวที่คลิก
    parentLi.classList.toggle('open');
  });
});
