function checkAnswers() {
    const quiz = document.forms['math-quiz'];
    let score = 0;

    const answers = {
        q1: '1',
        q2: '210',
        q3: '37/60',
        q4: 'b < a < c',
        q5: '8'
    };

    for (let question in answers) {
        const selected = quiz[question].value;
        if (selected === answers[question]) {
            score++;
        }
    }

    document.getElementById('score').value = score;
}
