import React from "react";
import "./BookList.css";
import Loading from "../Loader/Loader";
import CoverImg from "../../images/cover_not_found.jpg";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book"
//https://covers.openlibrary.org/b/id/240727-S.jpg

function BookList() {
  const { books, loading, resultTitle,cover_id } = useGlobalContext();
  const booksWithCovres = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id
        ?  `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : CoverImg,
    };
  });
  // console.log(booksWithCovres)

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <h2>{resultTitle}</h2>
      </div>
      <div className="booklist-content grid">
        {
          booksWithCovres.map((item,index) => {
       return(
        <Book key={index} {...item}/>
       )
          })
        }
      </div>
    </section>
  );
}
export default BookList;
