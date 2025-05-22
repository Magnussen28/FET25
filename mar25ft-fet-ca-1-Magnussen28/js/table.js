document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('#personalTable tbody');
    const rows = [
      [1, 'bi-alarm', 'Early Riser', 'Wakes up at 5am', 'img/avatar1.png'],
      [2, 'bi-book', 'Book Lover', 'Reads 2 books a week', 'img/avatar2.png'],
      [3, 'bi-music-note', 'Music Addict', 'Plays guitar daily', 'img/avatar3.png'],
      [4, 'bi-globe', 'Traveler', 'Visited 10 countries', 'img/avatar1.png'],
      [5, 'bi-code-slash', 'Coder', 'Writes JavaScript for fun', 'img/avatar2.png'],
    ];
  
    rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row[0]}</td>
        <td><i class="bi ${row[1]}"></i></td>
        <td>${row[2]}</td>
        <td>${row[3]}</td>
        <td><img src="${row[4]}" alt="icon" class="table-img" width="50" style="cursor:pointer;"></td>
      `;
      table.appendChild(tr);
    });
    
    $(document).on('click', '.table-img', function () {
      const imgSrc = $(this).attr('src');
      window.open(imgSrc, '_blank');
    });
  
    $('#personalTable tbody tr:odd').hover(
      function () {
        $(this).css('color', 'blue');
      },
      function () {
        $(this).css('color', 'black');
      }
    );
  });