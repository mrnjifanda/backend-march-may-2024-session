const user = {
    name: "Seven",
    email: "seven@gmail.com",
    sex: "male",
    level: "5"
};

const name = user.name;
const email = user.email;
const other = {
    sex: user.sex,
    level: user.level
}

// const { name, email, ...other } = user;

function show (...values) {

    console.log(values);
}

show();
show('Good');
show('Thanks', 'Cars');
show('Seven', '1', [1, 2, 3]);