 // JavaScript to disable the link on mobile devices
 window.onload = function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Check if the <a> tag exists
    if (isMobile) {
        var boidsLink = document.getElementById('boids-link');
       // Disable the <a> tag
       
      boidsLink.onclick=function(event){
        event.preventDefault();// Prevent the default action (navigation)
        return false;
      }
      // Optionally, change the link text to indicate it's disabled
      boidsLink.textContent = "Link (Disabled on Mobile)";
    }
};