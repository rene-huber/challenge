const cards = [
  {
    question:
      "In the Kingdom Hearts series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    isBookmarked: false,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["hewhomustnotbenamed", "danielradcliffe", "abracadabra"],
    isBookmarked: false,
  },
  {
    question:
      'In the game series "The Legend of Zelda" what is the name of the main character?',
    answer: "Link",
    tags: ["linktothepast", "linkbetweenworlds", "linkbetweenages"],
    isBookmarked: false,
  },
];
 import { Card } from "../../../components/Card/Card.js";
export function handleFormSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    const newCard = {
      question: data.question,
      answer: data.answer,
      tags: data.tags.split(","),
      isBookmarked: false,
    };
  
    cards.unshift(newCard);
  
    // To prevent the need to rerender, we add the new card to the DOM directly
    const cardList = document.querySelector(".card-list");
    const newCardElement = Card(newCard);
    cardList.prepend(newCardElement);
  
    event.target.reset();
    event.target.elements.question.focus();
  }