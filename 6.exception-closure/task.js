function parseCount(value) {
  let resultOfParse = Number.parseFloat(value);
  if (isNaN(resultOfParse)) {
    throw new Error("Невалидное значение");
  }
  return resultOfParse;
}

function validateCount(newValue) {
  try {
    return parseCount(newValue);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.a + this.c < this.b
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = (this.a + this.b + this.c) / 2;   // не знаю как здесь правильно обратиться к результату предыдущего геттера
    let square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return square.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let newTriangle = new Triangle(a, b, c);
    newTriangle.get perimeter() = function() {       //Здесь не понимаю как обратиться к геттеру объекта, ведь он из двух слов
      return "Ошибка! Треугольник не существует";
    }
    newTriangle.get area() = function() {
      return "Ошибка! Треугольник не существует";
    }
    return newTriangle;
  }
}
