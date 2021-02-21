const num = [1,-2, 2, -3,3,4,5,6,7,8,9];
for (let i = 0; i < num.length; i++) {
    // break .... 
    if (num[i] > 5  ) {
        break
    }
    console.log(num[i])

//continue............ 
    if (num[i] < 0) {
        continue;
    }
    console.log(num[i]);
}