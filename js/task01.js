let arr1 = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];

for (var i in arr1) {
    if (arr1[i] == 'молоко') {
        console.log('Хорошо');
    } else if (arr1[i] == 'пиво') {
        console.log('Плохо');
    } else {
        console.log('Чето непонятное, бензин?');
    }
}
