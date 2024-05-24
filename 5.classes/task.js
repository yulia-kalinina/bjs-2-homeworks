class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let requestedBook = this.findBookBy("name", bookName);
    let indexOfRequestedBook = this.books.indexOf(requestedBook);
    if (indexOfRequestedBook !== -1) {
      return this.books.splice(indexOfRequestedBook, 1)[0];
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return 0;
    }

    if (this.marks["subjectName"] === undefined) {
      this.marks["subjectName"] = [];
    }

    this.marks["subjectName"].push(mark);
  }

  getAverageBySubject(subjectName) {
    if (this.marks["subjectName"] === undefined) {
      return 0;
    }

    if (this.marks["subjectName"].length === 0) {
      return 0;
    }

    let sum = this.marks["subjectName"].reduce((acc, item) => acc + item, 0);
    return sum / this.marks["subjectName"].length;
  }

  getAverage() {
    if (this.marks === undefined) {
      return 0;
    }

    let allSubjects = Object.keys(this.marks);
    let sumOfAverageMarks = 0;
    for (let i = 0; i < allSubjects.length; i++) {
      sumOfAverageMarks += getAverageBySubject(allSubjects[i]);
      return sumOfAverageMarks / allSubjects.length;
    }
    return 0;
  }
}
