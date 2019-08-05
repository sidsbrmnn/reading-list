import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/books";

export async function addBook(book) {
  try {
    await axios.post("/", book);
  } catch (ex) {
    if (ex.response.status !== 200) return ex.response.data;
  }
}

export async function getBooks() {
  const { data } = await axios.get("/");
  return data;
}

export async function deleteBook(id) {
  try {
    await axios.delete("/" + id);
  } catch (ex) {
    if (ex.response.status !== 200) return ex.response.data;
  }
}
