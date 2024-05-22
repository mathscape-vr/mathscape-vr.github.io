function checkAnswers() {
    const quiz = document.forms['math-quiz'];
    let score = 0;

    const answers = {
        q1: '8',        // Answer for "What is 5 + 3?"
        q2: '210',      // Answer for "Find the sum of numbers between 1 and 20"
        q3: '37/60',    // Answer for "What is 1/4 + 1/5 + 1/6"
        q4: 'b < a < c', // Answer for "a = 20/37, b = 11/37, c = 30/37"
        q5: '1'         // Answer for "2x + 6y = 22, x + y = 5 What is x?"
    };

    for (let question in answers) {
        const selected = quiz[question].value;
        if (selected === answers[question]) {
            score++;
        }
    }

    document.getElementById('score').value = score;

    let level;
    switch (score) {
        case 0:
        case 1:
            level = "Primary school";
            break;
        case 2:
            level = "Middle school";
            break;
        case 3:
            level = "High school";
            break;
        case 4:
            level = "University";
            break;
        case 5:
            level = "Advanced";
            break;
        default:
            level = "";
    }

    const levelContainer = document.getElementById('level-container');
    levelContainer.textContent = `Level: ${level}`;

}