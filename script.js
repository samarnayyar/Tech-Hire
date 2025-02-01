document.addEventListener("DOMContentLoaded", function () {
    // Mock Interview Timer
    let timer = 120; // 2 minutes
    const timerElement = document.getElementById("timer");
    const interval = setInterval(function () {
        timer--;
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timer <= 0) {
            clearInterval(interval);
            alert("Time's up! Please submit your answer.");
        }
    }, 1000);

    // Mock Interview Progress
    let progress = 0;
    const submitButton = document.getElementById("submit-answer");
    const progressBar = document.getElementById("interview-progress");
    const feedback = document.getElementById("feedback");
    
    submitButton.addEventListener("click", function () {
        progress++;
        progressBar.value = progress;
        document.getElementById("progress").textContent = `${(progress / 5) * 100}%`;
        feedback.textContent = "Great job! Keep it up.";
    });

    // Live Chat Community
    const chatSubmitButton = document.getElementById("chat-submit");
    const chatInput = document.getElementById("chat-input");
    const chatOutput = document.getElementById("chat-output");

    chatSubmitButton.addEventListener("click", function () {
        const userInput = chatInput.value;
        chatOutput.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        chatOutput.innerHTML += `<p><strong>Community Bot:</strong> Let me find out more for you!</p>`;
        chatInput.value = "";
    });

    // Hiring Insights - Sample Chart
    const ctx = document.getElementById("hiring-trends-chart").getContext("2d");
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Hiring Trends',
                data: [30, 45, 50, 70, 90],
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        }
    });
});
