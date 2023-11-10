console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("section");
newPost.classList.add("post");


const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent = " Lorem ipsum dolor, sit amet consectetur adipisicing.";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

const newPostUsername = document.createElement(`span`);
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@newuser";




const newPostButton = document.createElement("button");
newPostButton.classList.add("post__button");
newPostButton.textContent = "♥ Like";
newPostButton.addEventListener("click", handleLikeButtonClick);

newPostFooter.append(newPostUsername);
newPostFooter.append(newPostButton);


newPost.append(newPostContent);
newPost.append(newPostFooter);


document.body.append(newPost);



{/*







*/}
