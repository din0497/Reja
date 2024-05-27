/* 
D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

*/

const checkContent = (str1, str2) => {
  const sortedArr1 = str1.split("").sort().join();
  const sortedArr2 = str2.split("").sort().join();

  return sortedArr1 === sortedArr2;
};

const isMatch = checkContent("mitgroup", "gmtiprou");
console.log(isMatch);
