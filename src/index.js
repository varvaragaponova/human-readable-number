module.exports = function toReadable (number) {
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(number < 20) return arr[number];
  if(number < 100) {
    if (number % 10 === 0) {
      return dozens[number / 10 - 2];
    }
    return dozens[Math.floor(number / 10) - 2] + ' ' + arr[number % 10];
  }

  if(number % 100 === 0) {
    return arr[number / 100] + ' hundred';
  } else if(number % 100 > 0 && number % 100 < 20) {
    return arr[Math.floor(number / 100)] + ' hundred' + ' ' + arr[number % 100];
  } else if (number % 10 === 0) {
    return arr[Math.floor(number / 100)] + ' hundred' + ' ' + dozens[(number % 100) / 10 - 2];
  } else if((number % 10 === 0) && (number % 100 !== 0)) {
    return arr[Math.floor(number / 100)] + ' hundred' + ' ' + dozens[(number % 100) / 10 - 2];
  } else {
    return arr[Math.floor(number / 100)] + ' hundred' + ' ' + dozens[Math.floor((number % 100) / 10) - 2] + ' ' + arr[number % 10];
  }
}
