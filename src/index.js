module.exports = function toReadable (num) {
  if (num === 0) {
    return 'zero'
  }
  let arrNum = num + '';
  let ones = {
    1 :'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  let tens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  let dozens = {
    20:'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
  for(let i = 0; i < arrNum.length; i++) {
    if (arrNum.length === 1) {
      return ones[num];
    }else if (arrNum.length === 2) {
      if(num < 20) {
        return tens[num];
      }else{
        return +arrNum[i + 1] === 0 ? dozens[num] :`${dozens[arrNum[i] * 10]} ${ones[arrNum[i + 1]]}`;
      }
    }else if (arrNum.length === 3) {
      if(+arrNum[i+1] === 0 && +arrNum[i+2] === 0) {
        return `${ones[arrNum[i]]} hundred`;
      } else if(+arrNum[i+1] !== 1 && +arrNum[i+2] === 0) { 
        return `${ones[arrNum[i]]} hundred ${dozens[(+arrNum[1] * 10)]}`;
        } else if(+arrNum[i+1] === 0 && +arrNum[i+2] !== 0) { 
        return `${ones[arrNum[i]]} hundred ${ones[arrNum[i+2]]}` 
      } else if(+arrNum[i+1] === 1 && +arrNum[i+2] === 0) {
        return `${ones[arrNum[i]]} hundred ten`;
      } else if(+arrNum[i+1] > 1 && +arrNum[i+2] > 0) {
        return `${ones[arrNum[i]]} hundred ${dozens[+arrNum[i+1] * 10]} ${ones[arrNum[i+2]]}`;
      }else{
        return `${ones[arrNum[i]]} hundred ${tens[arrNum[i+1] + arrNum[i+2]]}`;
      }
    }
  }
}

