import { useState, useEffect } from "react";
import AvailableBooks from "./AvailableBooks"

import { getUser } from "../../../../services/userService";
import { getBooksUser } from "../../../../services/bookService";

export default function AvailableBooksSection(){
    const [books, setBooks] = useState([]);

    const fetchBook = async () => {
        const userRes = await getUser();

        const response = await getBooksUser(userRes);
        setBooks(response);
    }

    useEffect(() => {
        fetchBook();
    }, []);
    
    return(
        <>
            <div className="grid grid-cols-1 gap-6 justify-cente mt-10 mb-10 md:grid-cols-2 xl:grid-cols-3">
                {books.map((book) => {
                    return <AvailableBooks
                        key={book.uuid}
                        uuid={book.uuid}
                        image={book.imagem}
                        status={book.situacao}
                        title={book.titulo}
                        author={book.autor}
                        onUpdate={fetchBook}
                    />
                })}
            </div>
        </>
    )
}