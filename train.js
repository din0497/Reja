const inquirer = require('inquirer');


/* A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi: */

const countLetter = (letter, text) => {
  let result = 0;
  for (ele of text) {
    ele === letter ? result++ : null;
  }
  return result;
};





inquirer
  .prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Sanashni istagan harfingizni kiriting:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Tekst kiriting:',
    },
  ])
  .then((answers) => {
    const letter = answers.letter.toUpperCase(); 
    const text = answers.text.toUpperCase();
    const count = countLetter(letter, text);
    
    console.log(`Siz kiritgan '${letter}', kiritilgan tekst ichida  ${count} marta ishtirok etgan!`);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });










// [21-22] NodeJS event loop, Callback, Asynchronous functionlar

/* console.log("Jack Ma maslahatlari");

const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yog endi", // 60
]; */

// CALLBACK function

/* function maslahatBering(a, callBack) {
  if (typeof a !== "number") throw new Error("Insert Number");
  else if (a <= 20) callBack(null, list[0]);
  else if (a > 20 && a <= 30) callBack(null, list[1]);
  else if (a > 30 && a <= 40) callBack(null, list[2]);
  else if (a > 40 && a <= 50) callBack(null, list[3]);
  else if (a > 50 && a <= 60) callBack(null, list[4]);
  else {
    setInterval(() => {
      callBack(null, list[5]);
    }, 1000);
  }
}

console.log("passed here 0");

maslahatBering(70, (err, data) => {
  if (err) console.log("ERR:", err);
  else {
    console.log(data);
  }
});

console.log("passed here 1"); */

/* async function maslahatBering(a, callBack) {
  if (typeof a !== "number") throw new Error("Insert Number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
} */

// call via then && catch

/*  maslahatBering(25)
  .then((data) => {
    console.log("jabob:", data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

console.log("Passed here 1");  */

//call via async && await

/* async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}

run();

 */



