document.addEventListener("DOMContentLoaded", function() {
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          const headerElement = document.querySelector("header.mb-auto");
          if (headerElement) {
              headerElement.innerHTML = data;
              headerElement.style.display = "block";
          } else {
              console.error('Header element not found');
          }
      })
      .catch(error => {
          console.error('Error fetching header:', error);
      });
});

  