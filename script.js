document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn1');
    const resultDiv = document.getElementById('result1');

    submitBtn.addEventListener('click', function () {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            const correctAnswer = 'paris'; // Correct answer value

            if (userAnswer === correctAnswer) {
                resultDiv.textContent = 'Correct!';
            } else {
                resultDiv.textContent = 'Incorrect. Please try again.';
            }
        } else {
            resultDiv.textContent = 'Please select an answer.';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn2');
    const resultDiv = document.getElementById('result2');

    submitBtn.addEventListener('click', function () {
        const userAnswer = document.getElementById('answerInput').value;
        const correctAnswer = 11; // Correct answer value

        if (userAnswer !== '') {
            if (parseInt(userAnswer) === correctAnswer) {
                resultDiv.textContent = 'Correct!';
            } else {
                resultDiv.textContent = 'Incorrect. Please try again.';
            }
        } else {
            resultDiv.textContent = 'Please enter an answer.';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn3');
    const resultDiv = document.getElementById('result3');

    submitBtn.addEventListener('click', function () {
        const selectedColor = document.querySelector('input[name="color"]:checked');

        if (selectedColor) {
            const userColor = selectedColor.value;
            const correctColor = 'blue'; // Correct color value

            if (userColor === correctColor) {
                resultDiv.textContent = 'Correct!';
            } else {
                resultDiv.textContent = 'Incorrect. Please try again.';
            }
        } else {
            resultDiv.textContent = 'Please select a color.';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const genderImage = document.getElementById('genderImage');
    
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            const selectedGender = document.querySelector('input[name="gender"]:checked').value;
            
            if (selectedGender === 'male') {
                genderImage.src = './img/male.png';
                genderImage.alt = 'Male';
            } else if (selectedGender === 'female') {
                genderImage.src = './img/female.png';
                genderImage.alt = 'Female';
            }
        });
    });
});
