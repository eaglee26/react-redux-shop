import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    const books = [
        {
            id: 1, title: 'The Dark Tower I: The Gunslinger', author: 'Stephen King'
        },
        {
            id: 2, title: 'The Da Vinci Code', author : 'Den Brown'
        }
    ];
    return (
        <BookList books={books} />
    )
};

export default HomePage;