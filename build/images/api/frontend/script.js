document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000'; // Update this to your API URL
    const questionForm = document.getElementById('new-question-form');
    const questionsList = document.getElementById('questions-list');

    // Example function to fetch data from the API
    async function fetchData() {
        try {
            const response = await fetch(`${API_URL}/some-endpoint`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    //Call the function to fetch data
    fetchData();

    // Fetch and display existing questions
    function fetchQuestions() {
        fetch(`${API_URL}/questions`)
            .then(response => response.json())
            .then(questions => {
                questionsList.innerHTML = '';
                questions.forEach(question => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${question.name}</strong><p>${question.text}</p>`;
                    questionsList.appendChild(li);
                });
            });
    }

    // Handle new question form submission
    questionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const question = document.getElementById('question').value;

        fetch(`${API_URL}/questions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, text: question }),
        })
            .then(response => response.json())
            .then(data => {
                fetchQuestions(); // Refresh the list of questions
                questionForm.reset(); 
            })
            .catch(error => console.error('Error:', error));
    });

    // Initial fetch of questions
    fetchQuestions();
});
