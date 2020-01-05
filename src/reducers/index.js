const initialState = {
    books: [
        {
            id: 1, title: 'The Dark Tower I: The Gunslinger', author: 'Stephen King'
        },
        {
            id: 2, title: 'The Da Vinci Code', author : 'Den Brown'
        }
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default reducer;