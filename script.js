      async function sendWebhook(ev) {
        ev.preventDefault();

        const INSERT VARIABLE = document
          .getElementById('INSERT ID').value;

        const webhookBody = {
          embeds: [{
            title: 'INSERT TITLE',
            fields: [
              { name: 'INSERT TITLE', value: INSERT VARIABLE }
            ]
          }],
        };

        const webhookUrl = 'WEBHOOK URL HERE';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });
      }