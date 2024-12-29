// Update the events list
function listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {
      const events = response.result.items;
      const output = events.map(event => {
        const start = event.start.dateTime || event.start.date;
        return `
          <li>
            <span>${event.summary}</span>
            <p>Start: ${start}</p>
          </li>
        `;
      }).join('');
      document.getElementById('events').innerHTML = `<ul>${output}</ul>`;
    });
  }