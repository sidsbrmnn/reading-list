import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:3000/api/books' });

export async function addBook(book) {
    try {
        await instance.post('/', book);
    } catch (ex) {
        if (ex.response.status !== 200) {
            return ex.response.data;
        }
    }
}

export async function getBooks() {
    const { data } = await instance.get('/');
    return data;
}

export async function deleteBook(id) {
    try {
        await instance.delete('/' + id);
    } catch (ex) {
        if (ex.response.status !== 200) {
            return ex.response.data;
        }
    }
}
