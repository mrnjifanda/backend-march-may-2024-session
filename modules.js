
function addition(...numbers) {

    let results = 0;
    for (let i = 0; i < numbers.length; i++) {

        const element = numbers[i];
        if (typeof element != 'number') throw new Error(element + " is not a number");
        results += element;
    }

    return results;
}

function multiplication (...numbers) {
    let results = 1;
    for (let i = 0; i < numbers.length; i++) {

        const element = numbers[i];
        if (typeof element != 'number') throw new Error(element + " is not a number");
        results *= element;
    }

    return results;
}

module.exports = { addition, multiplication };
// module.exports = { 
//     addition: addition,
//     multiplication: multiplication
// };