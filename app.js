// const firstname = prompt('Please enter first name');
// const lastname = prompt('Please enter last name');

// const countFirstName = firstname.length;
// const countLastName = lastname.length;

// document.querySelector('h1').innerText = "Welcom " + firstname + " this name have " + countFirstName + " letters";
// document.querySelector('h2').innerText = firstname + ": " + countFirstName;
// document.querySelector('h2').innerText += " " + lastname + ": " + countLastName;


function showData (value) {

    const data = prompt('Please enter ' + value);
    const countData = data.length;
    document.querySelector('h2').innerText += value + ": " + data + " count: " + countData + "\n";
}

const div = document.querySelector('div');
const ul = div.querySelector('ul');
const lis = ul.querySelectorAll('li');
console.log(div);
console.log(div.innerHTML);