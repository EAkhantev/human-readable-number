module.exports = function toReadable (number) {
   let numberArr = String(number).split('');
   let numberDigit = numberArr.length;
   let numberReadable = '';
   const numberDict = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'hundred',
   }

   if (numberDigit == 3) {
      numberReadable = numberDict[numberArr[0]] + ' ' + numberDict[100];
      if (numberArr[1] == 0 && numberArr[2] == 0) {
         return numberReadable
      }

      if (numberArr[1] >= 2 && numberArr[2] != 0) {
         numberReadable = numberReadable + ' ' + numberDict[numberArr[1]*10] + ' ' + numberDict[numberArr[2]];
      } else {
         numberReadable = numberReadable + ' ' + numberDict[Number(numberArr[1]+numberArr[2])];
      }
   }

   if (numberDigit == 2) {
      if (numberArr[0] >= 2 && numberArr[1] != 0) {
         numberReadable = numberDict[numberArr[0]*10] + ' ' + numberDict[numberArr[1]];
      } else {
         numberReadable = numberDict[Number(numberArr[0]+numberArr[1])];
      }
   }

   if (numberDigit == 1) {
      numberReadable = numberDict[numberArr[0]];
   }

   return numberReadable;
}
