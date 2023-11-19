import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter(card => card.categories.includes('politics') );

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.sort((a, b) => a.body.length - b.body.length );
// sortedNews.sort((a, b) => b.body.length - a.body.length );



sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);