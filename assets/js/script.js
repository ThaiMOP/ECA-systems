document.querySelectorAll('.toggle').forEach(item => {
  item.addEventListener('click', () => {
    const parentLi = item.parentElement;
    parentLi.classList.toggle('open');
  });
});
