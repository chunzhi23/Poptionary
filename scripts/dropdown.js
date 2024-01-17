document.addEventListener('click', (e) => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (e.target === dropdownToggle) {
    dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';
    dropdownContent.style.top = `${dropdownToggle.getBoundingClientRect().height + 16}px`;

  } else {
    if (!dropdownContent.contains(e.target)) {
      dropdownContent.style.display = 'none';
    }
  }
});
