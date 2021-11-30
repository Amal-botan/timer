const args = process.argv.slice(2);
console.log(args);



const timer1 = function(arr) {
  let arr1 = [];
  let val = 0;

  for (const values of arr) {
    val = parseInt(values);
    arr1.push(val);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        //console.log(arr1[i]);
      },arr1[i] * 1000);
    }
  }
};

timer1(args);