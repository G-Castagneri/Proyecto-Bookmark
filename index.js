function changeTab(evt, tabName) {
    // Declare all variables
    let i, tabContent, tabLinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabContent = document.getElementsByClassName("tab_content");
    for (i = 0 ; i < tabContent.length ; i++) {
        
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active space-between";
    
  }

  let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/* Dropdown responsive */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}