export default class BookStore  {

    data = [
        {
            id: 1,
            title: 'The Dark Tower I: The Gunslinger',
            author: 'Stephen King',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
        },
        {
            id: 2,
            title: 'The Da Vinci Code',
            author : 'Den Brown',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        });
    }
};