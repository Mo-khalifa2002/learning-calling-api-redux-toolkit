import React, { Fragment } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { getBooks } from "../../store/BookSlice";
import { useDispatch, useSelector } from "react-redux";

import "./book.css";
import { useEffect } from "react";

const PostContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { isLoading, books } = useSelector((state) => state.books);

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList isLoading={isLoading} books={books} />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
