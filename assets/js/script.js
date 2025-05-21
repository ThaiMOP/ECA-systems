document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const sitemap = document.querySelector('.sitemap');
    const allLi = sitemap.querySelectorAll('li');

    // เอา class 'open' ออกจากทุก li
    allLi.forEach(li => li.classList.remove('open'));

    // เพิ่ม class 'open' ให้กับ li แรกใน sitemap
    const firstLi = sitemap.querySelector('li');
    if (firstLi) {
      firstLi.classList.add('open');
    }
  });
});
