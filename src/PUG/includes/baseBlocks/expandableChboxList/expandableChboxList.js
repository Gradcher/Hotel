function goThroughExpandableChboxes(e) {
  const expandableChboxes = document.querySelectorAll('.expandable-chbox');

  if (expandableChboxes !== null) {
    /* eslint-disable-next-line */
    for (const expandableChbox of expandableChboxes) {
      expandableChbox.addEventListener('click', (e) => {
        expandableChbox.classList.toggle('expandable-chbox--active');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', goThroughExpandableChboxes);
