console.clear();

const cards = [
  {
    id: "1",
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
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter(user => user.id === "2");

const allCardsWith3Tags = cards.filter(e => e.tags.length === 3);


const allCardsThatAreNotBookmarked = cards.filter( e => e.isBookmarked === false)


const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((e) => {
  return e.isBookmarked && (e.tags.includes("html") || e.tags.includes("js"));
});



console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);





export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
