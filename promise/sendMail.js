function sendMail (email) {
    return {
        error: true,
        data: {
            email: email,
            name: 'Test Email'
        }
    }
}

const send = function (email) {

    // send mail with {email}
    let data = null;
    let error = null;
    let isSend = false;

    if (email) {
        const result = sendMail(email);
        if (result.error  === false) {
            isSend = true;
            data = result.data;
        } else {
            error = result.error;
        }
    }

    return new Promise(function (resolve, reject) {
        if (isSend) {
    
            resolve(data);
        } else {
    
            reject(error);
        }
    })
}

async function callMySendMethod () {
    try {
        const result = await send('seven@gmail.com');
        console.log(result);  
    } catch (error) {
        console.log(error);
    }
}

// .then(), .catch(), .finally() 
send('seven@gmail.com').then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('Execution end');
})

callMySendMethod();