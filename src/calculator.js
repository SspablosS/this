import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = readlineSync.questionInt('Введите a: ');
    this.b = readlineSync.questionInt('Введите b: ');
  },

  sum() {
    console.log(this.a + this.b);
  },

  mul() {
    console.log(this.a * this.b);
  },
};

export { calculator };
