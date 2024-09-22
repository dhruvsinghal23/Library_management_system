const books = [
    { name: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { name: "1984", author: "George Orwell", genre: "Dystopian" },
    { name: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { name: "Moby Dick", author: "Herman Melville", genre: "Adventure" },
    { name: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    { name: "Introduction to Algorithms", author: "Thomas H. Cormen", genre: "Programming" },
    { name: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming" },
    { name: "The Joy of Cooking", author: "Irma S. Rombauer", genre: "Cooking" },
    { name: "Mastering the Art of French Cooking", author: "Julia Child", genre: "Cooking" },
    { name: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "History" },
    { name: "Educated", author: "Tara Westover", genre: "Biography" }
];

localStorage.setItem("books", JSON.stringify(books));
