const surveyQuestions = {
  "surveyTitle": "Perfect Job Survey",
  "questions": [
    {
      "id": 1,
      "question": "Skills and Experience:",
      "type": "checkbox",
      "options": [
        "Technical/IT",
        "Marketing/Sales",
        "Finance/Accounting",
        "Creative/Design",
        "Customer Service",
      ]
    },
    {
      "id": 2,
      "question": "Work Preferences:",
      "type": "radio",
      "options": [
        "Fast-paced",
        "Collaborative",
        "Independent",
        "Structured"
      ]
    },
    {
      "id": 3,
      "question": "Career Goals:",
      "type": "checkbox",
      "options": [
        "Climbing the corporate ladder",
        "Entrepreneurship",
        "Work-life balance",
        "Skill development",
      ]
    },
    {
      "id": 4,
      "question": "Job Satisfaction:",
      "type": "checkbox",
      "options": [
        "Challenging projects",
        "Supportive team",
        "Opportunities for growth",
        "Work-life balance",
      ]
    },
    {
      "id": 5,
      "question": "Work-Life Balance:",
      "type": "radio",
      "options": [
        "Extremely important",
        "Important",
        "Neutral",
        "Not very important",
        "Not important at all"
      ]
    },
    {
      "id": 6,
      "question": "Company Culture:",
      "type": "checkbox",
      "options": [
        "Innovation",
        "Diversity and inclusion",
        "Work-life balance",
        "Integrity",
      ]
    },
    {
      "id": 7,
      "question": "Team Dynamics:",
      "type": "radio",
      "options": [
        "In-person meetings",
        "Virtual communication (e.g., video calls, chat)",
        "Both equally",
        "Prefer to work independently"
      ]
    },
    {
      "id": 8,
      "question": "Challenges and Growth Opportunities:",
      "type": "checkbox",
      "options": [
        "Problem-solving",
        "Leadership opportunities",
        "Learning new skills",
      ]
    },
    {
      "id": 9,
      "question": "Compensation and Benefits - Monthly Salary Range:",
      "type": "radio",
      "options": [
        "Below $10,000",
        "$10,000 - $20,000",
        "$20,000 - $30,000",
        "Above $30,000",
        ""
      ]
    },
    {
      "id": 10,
      "question": "Compensation and Benefits - Benefits:",
      "type": "checkbox",
      "options": [
        "Healthcare",
        "Retirement plans",
        "Paid time off",
        "Flexible work hours",
      ]
    }
  ]
};

const pointsPerAnswer = {
  "Technical/IT": 10,
  "Marketing/Sales": 8,
  "Finance/Accounting": 7,
  "Creative/Design": 9,
  "Customer Service": 6,
  "Fast-paced": 8,
  "Collaborative": 10,
  "Independent": 7,
  "Structured": 9,
  "Climbing the corporate ladder": 8,
  "Entrepreneurship": 9,
  "Work-life balance": 10,
  "Skill development": 8,
  "Challenging projects": 9,
  "Supportive team": 8,
  "Opportunities for growth": 9,
  "Extremely important": 10,
  "Important": 9,
  "Neutral": 7,
  "Not very important": 5,
  "Not important at all": 3,
  "Innovation": 9,
  "Diversity and inclusion": 8,
  "Integrity": 7,
  "In-person meetings": 7,
  "Virtual communication (e.g., video calls, chat)": 8,
  "Both equally": 9,
  "Prefer to work independently": 7,
  "Problem-solving": 9,
  "Leadership opportunities": 8,
  "Learning new skills": 9,
  "Below $10,000": 5,
  "$10,000 - $20,000": 8,
  "$20,000 - $30,000": 9,
  "Above $30,000": 10,
  "Healthcare": 8,
  "Retirement plans": 7,
  "Paid time off": 9,
  "Flexible work hours": 8,
};

let totalPoints = 0;

function addPoints(option) {
  totalPoints += pointsPerAnswer[option];
}

function displaySurveyQuestions() {
  const quizContainer = document.getElementById('quiz');

  surveyQuestions.questions.forEach(question => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    
    questionElement.appendChild(questionTitle);
    
    if (question.type === 'checkbox' || question.type === 'radio') {
      question.options.forEach(option => {
        const optionElement = document.createElement('input');
        optionElement.setAttribute('type', question.type);
        optionElement.setAttribute('name', `question_${question.id}`);
        optionElement.setAttribute('value', option);
        
        const label = document.createElement('label');
        label.textContent = option;
        
        optionElement.addEventListener('change', function() {
          if (this.checked) {
            addPoints(this.value);
          }
        });
        
        questionElement.appendChild(optionElement);
        questionElement.appendChild(label);
      });
    }
    
    quizContainer.appendChild(questionElement);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  alert(`Total points: ${totalPoints}`);
}

document.getElementById('submit').addEventListener('click', handleSubmit);

displaySurveyQuestions();