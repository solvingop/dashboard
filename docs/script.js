document.addEventListener('DOMContentLoaded', () => {
    const profileName = 'John Doe'; // Replace with actual data
    const profileEmail = 'johndoe@example.com'; // Replace with actual data
    const lessonsCompleted = 15; // Replace with actual data
    const totalLessons = 20; // Replace with actual data
    const quizzesTaken = 5; // Replace with actual data
    const totalQuizzes = 10; // Replace with actual data
    const highestScore = 95; // Replace with actual data
    const totalStudents = 100; // Replace with actual data
    const yourRank = 10; // Replace with actual data

    document.getElementById('profile-name').textContent = profileName;
    document.getElementById('profile-email').textContent = profileEmail;
    document.getElementById('lessons-completed').textContent = lessonsCompleted;
    document.querySelector('.progress-bar .progress').style.width = `${(lessonsCompleted / totalLessons) * 100}%`;
    document.getElementById('quizzes-taken').textContent = quizzesTaken;
    document.getElementById('highest-score').textContent = highestScore;
    document.getElementById('total-students').textContent = totalStudents;
    document.getElementById('your-rank').textContent = yourRank;

    const subjects = document.querySelectorAll('.subject');
    
    subjects.forEach(subject => {
        subject.addEventListener('click', () => {
            const subjectName = subject.getAttribute('data-subject');
            // Display sub-page logic here
            alert(`You clicked on ${subjectName}`);
        });
    });

    const quizForm = document.querySelector('.sample-quiz');
    const submitQuizButton = document.querySelector('.submit-quiz');

    submitQuizButton.addEventListener('click', () => {
        const answers = {
            q1: 'Paris',
            q2: '4'
        };
        let score = 0;
        
        const userAnswers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value
        };

        Object.keys(answers).forEach(key => {
            if (userAnswers[key] === answers[key]) {
                score += 1;
            }
        });

        alert(`Your score is: ${score}/2`);
    });
});
