document.addEventListener('DOMContentLoaded', function () {
    const getRandomFactBtn = document.getElementById('Btn');
    const factContainer = document.getElementById('Container');
  
    getRandomFactBtn.addEventListener('click', function () {
     
      fetchRandomFact()
        .then(fact => {
          
          displayFact(fact);
        })
        .catch(error => {
          console.error('Error fetching random fact:', error.message);
        });
    });
  
    function fetchRandomFact() {
      const apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';
  
      
      return fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          
          const fact = data.text;
          return fact;
        });
    }
  
    function displayFact(fact) {
     
      factContainer.innerHTML = `<p>${fact}</p>`;
    }
  });
  