import type { FormEvent } from 'react';

import Container from '../components/container';
import Head from '../components/head';

// TODO: Fix components
// import BookList from '../components/BookList';
// import NewBook from '../components/NewBook';

// TODO: Fix API calls
// import { addBook, getBooks, deleteBook } from '../utils/books';

const HomePage = () => {
    // const [books, setBooks] = useState([]);

    // async function updateBooks() {
    //     const data = await getBooks();
    //     setBooks(data);
    // }

    // useEffect(() => {
    //     updateBooks();
    // }, []);

    // displayError = () => {
    //     const error = this.state.error;
    //     if (error)
    //         return (
    //             <div className="mb-0 alert alert-danger" role="alert">
    //                 {error}
    //             </div>
    //         );
    // };

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // TODO: Configure API call
    }

    // async function handleDelete(book) {
    //     const error = await deleteBook(book._id);
    //     if (error) {
    //         return;
    //     }

    //     updateBooks();
    // }

    return (
        <>
            <Head title="Home | Reading List" />

            <section className="py-16">
                <Container>
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl md:text-5xl">
                        Keep your collection on the go
                    </h1>

                    <form
                        className="flex items-center max-w-2xl mx-auto mt-8 space-x-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex-grow">
                            <label className="sr-only" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md appearance-none hover:border-blue-300 focus:border-blue-400 focus:outline-none"
                                id="title"
                                name="title"
                                placeholder="Harry Potter"
                                type="text"
                            />
                        </div>

                        <div className="flex-grow">
                            <label className="sr-only" htmlFor="author">
                                Author
                            </label>
                            <input
                                className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md appearance-none hover:border-blue-300 focus:border-blue-400 focus:outline-none"
                                id="author"
                                name="author"
                                placeholder="JK Rowling"
                                type="text"
                            />
                        </div>

                        <button
                            className="px-4 py-3 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                            type="submit"
                        >
                            Add book
                        </button>
                    </form>
                </Container>
            </section>

            <section>
                <div className="mx-auto col-lg-4 col-md-6 col-sm-8 col-10">
                    {/* {this.displayError()} */}
                </div>
            </section>

            <section className="py-5">
                <h1>Book List</h1>
                {/* <BookList data={books} onDelete={handleDelete} /> */}
            </section>
        </>
    );
};

export default HomePage;
