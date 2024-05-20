$(document).ready(function() {
  var windowHeight = 500;
  var scrollCenter = windowHeight / 2; // Fixed position to focus the cards

  function applyCardScaling() {
    $(".card").each(function() {
      var cardTop = $(this).offset().top - $(this).closest('.scrollable-cards').offset().top;
      var cardHeight = $(this).outerHeight();

      var distanceToCenter = Math.abs(cardTop + cardHeight / 2 - scrollCenter);

      var scale = 1 - distanceToCenter / (2 * windowHeight);
      scale = Math.max(scale, 0.8); // Limit minimum scale

      // Apply the scale to the card
      $(this).css("transform", "scale(" + scale + ")");

      if (Math.abs(cardTop + cardHeight / 2 - scrollCenter) < windowHeight / 2) {
        $(this).addClass("large-card");
      } else {
        $(this).removeClass("large-card");
      }
    });
  }

  // Initial application of card scaling
  applyCardScaling();

  // Bind the function to the scroll event to dynamically update the scaling
  $(".scrollable-cards").on("scroll", applyCardScaling);
});
