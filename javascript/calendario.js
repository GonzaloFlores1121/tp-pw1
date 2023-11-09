document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'The eras Tour RECITAL',
                start: '2023-11-11',
                end: '2023-11-25'
            },
            {
                title: 'Andrés calamaro RECITAL',
                start: '2023-11-15',
                end:'2023-11-15'
            },
            {
                title: 'Rogers Waters RECITAL',
                start: '2024-01-01',
                end:'2024-01-10'
                
            },
            {
                title: 'Tan biónica RECITAL',
                start: '2023-12-01',
                end:'2023-12-03'
            }
        ]
    }); 

    calendar.render();
  });