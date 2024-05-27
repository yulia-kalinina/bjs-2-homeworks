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
    if (a + b < c && b + c < a && a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = (this.a + this.b + this.c) / 2;
    let square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return square.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let newObject = {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
    return newObject;
  }
}
