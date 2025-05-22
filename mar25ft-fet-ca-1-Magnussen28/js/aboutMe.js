$(document).ready(function () {
    $('p').filter(function () {
      return $(this).text().trim() === 'Something about me';
    }).text("I love building web apps, learning new tech, and going on nature walks.");

    $('.aboutme').text('I am Sander Magnussen - the code master');

    $('p').on('click', function () {
      const updatedText = "I love building web apps, learning new tech, and going on nature walks.";
      if ($(this).text().trim() === updatedText) {
        $(this).css({
          'background-color': 'powderblue',
          'color': 'white'
        });
      }
    });
  });