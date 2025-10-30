import books from "../../../../data/books"
import ExchangedBooks from "./ExchangedBooks"

export default function ExchangedBooksSection(){
    return(
        <>
            <div className="grid grid-cols-5 gap-y-5 gap-x-5 my-10">
                {/* Dados usados apenas para desenvolvimento */}
                {books.map((book) => {
                    return <ExchangedBooks
                        key={book.id}
                        image={book.image}
                        status={book.status}
                        title={book.title}
                        author={book.author}
                    />
                })}
            </div>
        </>
    )
}