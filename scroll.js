$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let target = this.hash;
      // height of navbar + a tiny extra
      let offset = 57;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        800,
        function () {
          // Add target (#) to URL when done scrolling (default click behavior)
          window.location.target = target;
        }
      );
    } // End if
  });
});
