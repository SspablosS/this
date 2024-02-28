import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = readlineSync.question('Введите a: ');
    this.b = readlineSync.question('Введите b: ');
  },

  sum() {
    console.log(this.a + this.b);
  },

  mul() {
    console.log(this.a * this.b);
  },
};

export { calculator };
