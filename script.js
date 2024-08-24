//your code here!
document.addEventListener('DOMContentLoaded', () => {
  const infiList = document.getElementById('infi-list');

  // Function to add items to the list
  function addItems(count) {
    for (let i = 0; i < count; i++) {
      const li = document.createElement('li');
      li.textContent = `Item ${infiList.children.length + 1}`;
      infiList.appendChild(li);
    }
  }

  // Initialize the list with 10 items
  addItems(10);

  // Function to check if the user has scrolled to the bottom
  function checkScroll() {
    const { scrollTop, scrollHeight, clientHeight } = infiList;
    if (scrollTop + clientHeight >= scrollHeight - 5) { // Trigger before reaching the bottom
      addItems(2); // Add 2 more items
    }
  }

  // Add event listener for scrolling
  infiList.addEventListener('scroll', checkScroll);
});


