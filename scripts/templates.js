// function to get the Books-Div Template
function getBookTemplate(index) {
    let item = books[index];
    return `
        <div class="books">
            <h3><b>${item.name}</b></h3>
            <img class="book_img" src="./assets/img/default_book_640.png">
            <p><b>Price:</b>${item.price}</p>
            <p><b>Author:</b>${item.author}</p>
            <p><b>Public release:</b>${item.publishedYear}</p>
            <p><b>Genre:</b>${item.genre}</p>
            <div id="likes">
                <p id="likeButton${index}"><img onClick="addLike(${index})" src="./assets/img/heart-empty_32x32.png"> <b>${item.likes}</b></p>  
            </div>
            <div id="comments${index}">
            </div>
        </div>
    `;
}


// function to get the Comments-Div Template
function getCommentTemplate(bookIndex) {
    return `
        <h4>Comments:</h4>
            <input id="commentInput${bookIndex}" type="text" placeholder="type new comment here...">
            <button onClick="addComment(${bookIndex})"><b>Add comment</b></button>
    `;
}