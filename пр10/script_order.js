function generateString() {
    let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rs = "";

    while (rs.length < 5) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }

    return rs
}

let ans = "";
while (true) {
    let answer = generateString();
    ans = prompt('Введите строку ' + answer + ' ' );

    if(ans === answer) {
        break;
    }else{
        let n1 = Math.floor(Math.random() * 10);
        let n2 = Math.floor(Math.random() * 10);

        ans = prompt("Найдите сумму " + n1 + " + " + n2);
        answer = n1 + n2 + "";

        if(ans == answer)
        {
            break;
        }
        else{
            alert("Проверка не пройдена!");
        }
    }
}