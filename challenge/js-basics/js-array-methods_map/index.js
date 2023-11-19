console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map(e => e.answer.toLowerCase()); 
// ["as often as you like.", ...]


const questionsAndAnswersTogether = cards.map(e => `${e.question} - ${e.answer}`);
 // ["How often can I use <header>? - As often as you like.", ...]


 
 
 const questionAndAnswer = cards.map(e => ({Question: e.question, Answer: e.answer}));
 // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
 
 console.log(questionAndAnswer);


export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
