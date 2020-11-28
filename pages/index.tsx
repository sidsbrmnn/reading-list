import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/container';
import Head from '../components/head';
import { parseCookies } from '../lib/cookies';

type Book = {
    title: string;
    author: string;
};

type Props = {
    initialBooks: string;
};

const defaultValues: Book = { title: '', author: '' };

const HomePage: NextPage<Props> = ({ initialBooks }) => {
    const { register, handleSubmit } = useForm<Book>({ defaultValues });
    const [books, setBooks] = useState<Book[]>(() => JSON.parse(initialBooks));

    useEffect(() => {
        Cookies.set('books', JSON.stringify(books));
    }, [books]);

    function onSubmit(values: Book) {
        const newBooks = [...books];
        newBooks.push(values);
        setBooks(newBooks);
    }

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
                        onSubmit={handleSubmit(onSubmit)}
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
                                ref={register({ required: true })}
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
                                ref={register({ required: true })}
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
                <ul>
                    {books.map((item, id) => (
                        <li key={id}>{`${item.title} - ${item.author}`}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

HomePage.getInitialProps = async ({ req }) => {
    const cookies = parseCookies(req);

    return { initialBooks: cookies.books || '[]' };
};

export default HomePage;
