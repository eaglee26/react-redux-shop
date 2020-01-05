import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookStoreService } from '../HOC';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;
        if (loading) {
            return <Spinner/>
        }
        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
    }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)