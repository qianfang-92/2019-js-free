
    let atr2 = 'background-blend-mode';
    let arr = atr2.split('-');
    let temp = arr[0];
    for(let i = 1; i < arr.length;i++) {
       temp += arr[i][0].toUpperCase() + arr[i].substr(1)
    }
    console.log(temp);