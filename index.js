// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I am ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["Teddy Bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
// }

// wrapGifts(gifts);

const names = ["Gabe", "Eliza", "Pistachio"];

function writeCards(arr) {
    const birthdayMessage = [];
    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        birthdayMessage.push(`Thank you, ${person}, for the wonderful surprise gift!`)
    }
    return birthdayMessage;
}

console.log(writeCards(names));

function writeCardsWithAWhileLoop(arr) {
    const birthdayMessage = [];
    let i = 0;
    while (i < arr.length) {
        let person = arr[i];
        birthdayMessage.push(`Thank you, ${person}, for the wonderful surprise gift!`)
        i++
    }
    return birthdayMessage;
}

console.log(writeCardsWithAWhileLoop(names))

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);