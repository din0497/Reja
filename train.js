/* 
F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi



*/


const findDoublers = (txt) => {
  const str = txt.split("");
  
  for (char of str) {
    let filtered = str.filter((ele) => ele == char);
    if (filtered.length > 1) {
      return true;
    }
  }
  return false;
};

const result = findDoublers("hello");

console.log(result);


