import books from "../../../../data/books"
import AvailableBooks from "./AvailableBooks"

export default function AvailableBooksSection(){
    return(
        <>
            <div className="grid grid-cols-1 gap-6 justify-cente mt-10 mb-10 md:grid-cols-2 xl:grid-cols-3">
                {/* Dados usados apenas para desenvolvimento */}
                {books.map((book) => {
                    return <AvailableBooks
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