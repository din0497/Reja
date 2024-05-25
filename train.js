const inquirer = require("inquirer");
const moment = require("moment");

/* MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/

class Shop {
  constructor(non, lagman, cola) {
    (this.non = non), (this.lagman = lagman), (this.cola = cola);
  }

  timeUpdate() {
    return moment().format("HH:mm");
  }
  qoldiq() {
    const time = this.timeUpdate();

    console.log(
      `Hozir ${time}da ${this.non}ta non, ${this.lagman}ta lagmon va ${this.cola}ta cola mavjud! `
    );
  }

  sotish(name, amount) {
    const time = this.timeUpdate();
    this[name] -= amount;
    console.log(`${time}da, ${name}dan ${amount}ta sotildi!`);
  }
  qabul(name, amount) {
    const time = this.timeUpdate();
    this[name] += amount;
    console.log(`${time}da, ${name}dan ${amount}ta qo'shildi!`);
  }
}

const shop = new Shop(4, 5, 2);
shop.sotish("non", 3);
shop.qabul("cola", 4);

shop.qoldiq();

/* B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
 */

/* const countDigits = (str) => {
  const number = str.replace(/\D/g, ""); // teksning raqamlarini filter qilib beradi
  return number.length;
}; */

/* A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi: */

/* const countLetter = (letter, text) => {
  let result = 0;
  for (ele of text) {
    ele === letter ? result++ : null;
  }
  return result;
};
 */

/* inquirer
  .prompt([
    {
      type: "input",
      name: "string",
      message: "Raqamlar aralashgan string kiriting:",
    },
    {
      type: "input",
      name: "text",
      message: "Tekst kiriting:",
    },
  ])
  .then((answers) => {
    const str = answers.string;
    const text = answers.text.toUpperCase(); 
    const count = countDigits(str);

    console.log(
      `Siz kiritgan '${str}' ichida  ${count}ta raqam ishtirok etgan!`
    );
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  }); */

/* ========================================================================== */

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
