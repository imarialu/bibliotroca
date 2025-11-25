import { useState, useEffect } from "react";

import { getUser } from "../../../../services/userService";
import { getBookExchange } from "../../../../services/bookService";

import ExchangedBooks from "./ExchangedBooks"

export default function ExchangedBooksSection(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBook = async () => {
            const userRes = await getUser();

            const response = await getBookExchange(userRes);
            setBooks(response);
        }

        fetchBook();
    }, []);

    return(
        <>
            <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-3 xl:grid-cols-5">
                {books.map((book) => {
                    return <ExchangedBooks
                        key={book.uuid}
                        image={book.imagem}
                        status={book.situacao}
                        title={book.titulo}
                        author={book.autor}
                    />
                })}
            </div>
        </>
    )
}