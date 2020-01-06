export const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

export const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

export const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_ERROR',
        payload: error
    }
};

export const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};