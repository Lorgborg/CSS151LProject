let userPoints = 50;

function buyItem(itemCost) {
    if (userPoints >= itemCost) {
        userPoints -= itemCost;
        updatePointsDisplay();
        updatePageStyles(); // Call a function to update the page styles
        alert("Item purchased!");
        showPoints();
    } else {
        alert("Not enough points to buy this item!");
    }
}

function updatePointsDisplay() {
    document.getElementById("user-points").innerText = userPoints;
}

function updatePageStyles() {
    // Example: Change the background color of the entire body
    document.body.style.backgroundColor = '#f0f0f0';
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0px";
  } else {
    document.getElementById("navbar").style.bottom = "-65px";
  }
  prevScrollpos = currentScrollPos;
}