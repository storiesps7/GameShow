```javascript
const form = document.getElementById("addForm");
const allQDiv = document.getElementById("allQuestions");

function renderQuestions() {
allQDiv.innerHTML = "";
Object.keys(questions).forEach(category => {
Object.keys(questions[category]).forEach(level => {
questions[category][level].forEach((q, i) => {
const div = document.createElement("div");
div.className = "question-item";
div.innerHTML = `
<b>${category} (Level ${level})</b>: ${q.text}
<button onclick="deleteQuestion('${category}', ${level}, ${i})">Delete</button>
`;
allQDiv.appendChild(div);
});
});
});
}

form.onsubmit = e => {
e.preventDefault();
const cat = document.getElementById("category").value;
const lvl = document.getElementById("level").value;
const newQ = {
text: document.getElementById("questionText").value,
A: document.getElementById("optionA").value,
B: document.getElementById("optionB").value,
C: document.getElementById("optionC").value,
D: document.getElementById("optionD").value,
correct: document.getElementById("correct").value.toUpperCase()
};
if (!questions[cat]) questions[cat] = {};
if (!questions[cat][lvl]) questions[cat][lvl] = [];
questions[cat][lvl].push(newQ);
saveQuestions();
renderQuestions();
form.reset();
};

window.deleteQuestion = (cat, lvl, idx) => {
questions[cat][lvl].splice(idx, 1);
saveQuestions();
renderQuestions();
};

renderQuestions();
}
