//https://www.w3schools.com/howto/howto_js_topnav_responsive.asp for the solution of responsivness Navigation// 

function responsivenav() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }