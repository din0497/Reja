/* 
E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"


*/

const getReverse = (txt) => {
  let result = "";
  for (i = txt.length - 1; i >= 0; i--) {
    result += txt[i];
  }
  return result;
};

const result = getReverse("hello");
console.log(result);
