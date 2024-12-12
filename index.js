let k = 1;

// Function to update the second h4 element
function todo() {
  document.querySelectorAll("h4")[1].innerHTML = k;
  k++; // Increment `k` after each update
}

setInterval(todo, 1000); // Call `todo` every 1 second
