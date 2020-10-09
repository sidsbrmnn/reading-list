import { useEffect, useState } from 'react';

import BookList from '../components/BookList';
import NewBook from '../components/NewBook';
import { addBook, getBooks, deleteBook } from '../utils/books';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    async function updateBooks() {
        const data = await getBooks();
        setBooks(data);
    }

    useEffect(() => {
        updateBooks();
    }, []);

    // displayError = () => {
    //     const error = this.state.error;
    //     if (error)
    //         return (
    //             <div className="mb-0 alert alert-danger" role="alert">
    //                 {error}
    //             </div>
    //         );
    // };

    async function doSubmit(book) {
        const error = await addBook(book);
        if (error) {
            return;
        }

        updateBooks();
    }

    async function handleDelete(book) {
        const error = await deleteBook(book._id);
        if (error) {
            return;
        }

        updateBooks();
    }

    return (
        <>
            <section className="py-5">
                <h1>New Book</h1>
                <NewBook onSubmit={doSubmit} />
            </section>

            <section>
                <div className="mx-auto col-lg-4 col-md-6 col-sm-8 col-10">
                    {/* {this.displayError()} */}
                </div>
            </section>

            <section className="py-5">
                <h1>Book List</h1>
                <BookList data={books} onDelete={handleDelete} />
            </section>
        </>
    );
};

export default HomePage;
