import "./home.css"
import React from "react";
import NavMenu from "../components/navmenu";
import {useState, useEffect} from "react";
import book from '../assets/book.webp';
import library from '../assets/library.jpeg';

const Home = () => {
  const [books, setBooks] = useState(null);
  const [reviews, setReviews] = useState(null);

  // Get All Books on Page load
  useEffect(() => {
    fetch('http://localhost:8000/books', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }            
    }).then(res=> {
        return res.json();
    }).then(data => {
        console.log(data);
        setBooks(data);
    });
  }, []); 


  // After books array is filled
  useEffect(() => {
    showBook();
  }, [books]);


  // Will show a random book when the Recommend button is clicked
  async function showBook(e) {
    let bookName = document.getElementById('bookName');
    let body = document.getElementById('synopsisBody');

    if (books) {
      // random number in book array to recommend random book, though may recommend the same book
      // so could use better way
      let ranNum = (Math.floor(Math.random() * books.length))

      bookName.innerHTML = books[ranNum].name;
      body.innerHTML = books[ranNum].synopsis;
    }

    getReviews();

    return;
  }


  // Will fetch the reviews for a specific book from the backend
  async function getReviews(e){
    let bookName = document.getElementById('bookName').innerHTML;

    console.log(bookName);

    fetch('http://localhost:8000/reviews/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({   
        "book": bookName
      })     
    }).then(res=> {
      return res.json();
    }).then(data => {
      console.log(data);
      setReviews(data);
    });

    let reviewsDiv = document.getElementById('reviewsDiv');

    // close reviews of previous book.
    if (reviewsDiv && reviewsDiv.style.display == 'block') {
      reviewsDiv.style.display = "none";
    }

    return;
  }


  // Shows reviews Div
  async function showReviews(e){
    let reviewsDiv = document.getElementById('reviewsDiv');

    if (reviewsDiv && reviewsDiv.style.display == 'none') {
      reviewsDiv.style.display = "block";
    } else if (reviewsDiv && reviewsDiv.style.display == 'block') {
      reviewsDiv.style.display = "none";
    }

    return;
  }


  return (
    <>
      <NavMenu />

      <div id={'intro'}>
        <h1 id ={'title'}>About BookRecommend</h1>
        <div id={'homeImageDiv'}>
          <img id={'homeImage'} src={library} alt="Library"></img>
        </div>
        <p>
          If you are looking for a good book recommendation then BookRecommend will
          help you find what you are looking for. It can recommend many genres of 
          books which you may be interested in. Choose from Action, Adventure, Comedy,
          Mystery, Fantasy, Romance, etc. Below you will find a random book that has been
          chosen from the list of all the recommended books on the website. If you want to 
          view another recommendation, click Recommend. If you want to view the reviews of that
          book then click reviews and scroll down. The navigation menu will take you to a list of all 
          recommended books, a page to write a review on a book you have read, a list of your favorites, 
          or allow you to log in (none of this is implemented). *Synopses from Goodreads.com
        </p>
      </div>

      <div id={'recommend'}>
        <h2>Recommended</h2>
        <div id={'bookDiv'}>
          <h3 id={'bookName'}></h3>
            <img id={'bookPhoto'} src={book} alt="Book" ></img>
        </div>
        <div id={'bookSynopsis'}>
          <h3 id={'synopsis'}>Synopsis</h3>
            <p id={'synopsisBody'}></p>
          <input type={'button'} name={'Recommend'} value={'Recommend'} id={'recommendButton'} onClick={(e) => showBook(e)} />
          <input type={'button'} name={'Reviews'} value={'Reviews'} id={'reviewsButton'} onClick={(e) => showReviews(e)} />
        </div>
      </div>

      <div id={'reviewsDiv'} style={{display: 'none'}}>
        <h3>Reviews:</h3>
        {reviews && reviews.map((review, i) => (
          <div id={'review'} key={i}>
            <p>
              {review.username}:
              <br/><br/>
              {review.body}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home