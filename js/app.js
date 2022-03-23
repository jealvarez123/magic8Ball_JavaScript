userName = 'Pepe hands';

// example of ternary expression
// day === "Monday" ? price -= 1.5 : price += 1.5;

userName === 'Pepe hands' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'will there be a tomorrow?';

console.log(`${userName} asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';


switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;

}
console.log(`The 8 Ball says ${eightBall}`)
