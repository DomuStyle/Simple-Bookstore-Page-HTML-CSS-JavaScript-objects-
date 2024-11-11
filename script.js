let books = [
{
    "name": "Die Geheimnisse des Ozeans",
    "author": "Clara Meer",
    "likes": 1250,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2018,
    "genre": "Fantasy",
    "comments": [
    {
        "name": "Leser123",
        "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
    },
    {
        "name": "Bookworm84",
        "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
    },
    {
        "name": "FantasyFanatic",
        "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
    },
    {
        "name": "SciFiGuru",
        "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
    },
    {
        "name": "NovelLover",
        "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
    }
    ]
},
{
    "name": "Der vergessene Pfad",
    "author": "Maximilian Schwarz",
    "likes": 980,
    "liked": false,
    "price": 14.50,
    "publishedYear": 2021,
    "genre": "Fantasy",
    "comments": []
},
{
    "name": "Die Farben des Himmels",
    "author": "Laura Blau",
    "likes": 1520,
    "liked": true,
    "price": 22.95,
    "publishedYear": 2019,
    "genre": "Romantik",
    "comments": [
     {
        "name": "LeserPeter",
        "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
    },
    {
        "name": "BookLover21",
        "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
    },
    {
        "name": "FantasyNerd",
        "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
    },
    {
        "name": "SciFiEnthusiast",
        "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
    },
    {
        "name": "ReadingAddict",
        "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
    }
    ]
},
{
    "name": "Das Rätsel der Zeit",
    "author": "Alexander Weiss",
    "likes": 750,
    "liked": false,
    "price": 18.00,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
    {
        "name": "BuchKenner",
        "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
    },
    {
        "name": "LeseWurm",
        "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
    }
    ]
},
{
    "name": "Der letzte Wächter",
    "author": "Sabine Grün",
    "likes": 1300,
    "liked": true,
    "price": 16.75,
    "publishedYear": 2017,
    "genre": "Fantasy",
    "comments": []
},
{
    "name": "Im Schatten des Mondes",
    "author": "Philipp Silber",
    "likes": 890,
    "liked": false,
    "price": 12.30,
    "publishedYear": 2022,
    "genre": "Science-Fiction",
    "comments": [
    {
        "name": "BücherLiebhaber",
        "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
    },
    {
        "name": "Leseratte",
        "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
    }
    ]
},
{
    "name": "Jenseits der Sterne",
    "author": "Oliver Schwarz",
    "likes": 1450,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2015,
    "genre": "Science-Fiction",
    "comments": [
    {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
    }
    ]
},
{
    "name": "Das verborgene Königreich",
    "author": "Elena Gold",
    "likes": 920,
    "liked": false,
    "price": 17.50,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "comments": [
    {
        "name": "Bookworm92",
        "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
    }
    ]
},
{
    "name": "Liebe in Zeiten des Krieges",
    "author": "Emilia Rot",
    "likes": 1800,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2016,
    "genre": "Romantik",
    "comments": [
    {
        "name": "Bibliophile23",
        "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
    },
    {
        "name": "StorySeeker",
        "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
    },
    {
        "name": "SciFiExplorer",
        "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
    }
    ]
}
]

loadFromLocalStorage();

// render books Objects(containers)
function renderBooks() {
    let booksRef = document.getElementById('content');
    booksRef.innerHTML = "";

    for (let index = 0; index < books.length; index++ ) {
        let itemHtml = getBookTemplate(index); // created function "getBookTemplate(index)" in templates.js and call it in this line

        booksRef.innerHTML += itemHtml;
        renderComments(index);
    }
}


// render comments function
function renderComments(bookIndex) {
    let book = books[bookIndex];
    let commentsDiv = document.getElementById('comments' + bookIndex);

    commentsDiv.innerHTML = "";

    commentsDiv.innerHTML += getCommentTemplate(bookIndex);

    if(book.comments.length > 0) {
        for (let index = 0; index < book.comments.length; index++) {
            let comment = book.comments[index];
            commentsDiv.innerHTML += `
                <p><b>${comment.name}:</b><br> ${comment.comment}
                </p> 
                `;
        }
    }   
    else {
        commentsDiv.innerHTML += "<p>No coments yet.</p>"; // if the books doesnt have any comments this will show up
    }

}


// add new comments to a book function
function addComment(bookIndex) {  //craetes the function "addComment"
    let commentInput = document.getElementById(`commentInput${bookIndex}`); // creates the var " commentInput" and assigns it to the input element with id "commentInput"
    let commentText = commentInput.value; // creates the var "commentText" and saves the new typed content(value)

    if (commentText.trim() !== "") {        // if request to check if there where only empty spaces typed in th inputfiled
        let newComment = {        // create a newComment object and stores the value from "commentText"    
            name: "anonymous",  // random fixed name as placeholder
            comment: commentText  // access the "commentText" value for "newComment" var
        };
        books[bookIndex].comments.push(newComment); // pushes the newComment into the existing "books" object
        commentInput.value = "";  // clears the input field after adding a comment
        renderComments(bookIndex);  // calls the function "renderComents"
    }
    else {
        alert("Please enter a comment before submitting"); // creates a notification Message thst displays the definded Warning-Message
    }
    saveToLocalStorage(); // calls the function "saveToLocalStorage" after each comment is added
}


// save comments to localStorage
function saveToLocalStorage() {
    let commentString = JSON.stringify(books); // creates the var " commentString" and stringifys the content inside
    localStorage.setItem('bookComments', commentString); // saves the JSON String to Local Storage using the Key: bookcomments
    console.log('comments saved in LS'); // log order for debugging
}


// load comments from local storage
function loadFromLocalStorage() {
    let commentsJson = localStorage.getItem('bookComments'); // access the bookComments inside the LocalStorage

    if (commentsJson !== null) {    // checks if there is any data inside the LocalStorage inside "bookComments"
        books = JSON.parse(commentsJson);  // parses the stringifyied comments back to an array to be readable by the browser
        console.log('comments where loaded from Local Storage'); // log order for debugging        
    } 
}


// onClick function for like button
function addLike(bookIndex) {
    let book = books[bookIndex];
    let likeButton = document.getElementById('likeButton' + bookIndex);
    let heartImage = likeButton.firstChild;
    let likesCount = likeButton.lastChild;

    if (book.liked) {
        heartImage.src = "./assets/img/heart_32x28.png";
        book.likes = book.likes +1;
    }
    else {
        heartImage.src = "./assets/img/heart-empty_32x32.png";
        book.likes = book.likes -1;
    }

    if (book.liked)  {
        book.liked = false;
    }
    else {
        book.liked = true;
    }

    likesCount.innerHTML = book.likes

    saveToLocalStorage();
}



// function to count up and down likes