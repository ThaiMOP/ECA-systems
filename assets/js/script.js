// เลือก toggle ทุกตัว (ไอคอนหมวดหลัก)
document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parentLi = toggle.parentElement;

    // toggle class 'open' เพื่อแสดงหรือซ่อนเมนูย่อย
    parentLi.classList.toggle('open');
  });
});
