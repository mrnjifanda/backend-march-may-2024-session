const nodemailer = require('nodemailer');

class MailService {

    env;
    constructor (env) {

        this.env = env;
    }

    transpoter () {

        return nodemailer.createTransport({
            host: this.env.MAIL_HOST,
            port: this.env.MAIL_PORT,
            auth: {
                user: this.env.MAIL_USER,
                pass: this.env.MAIL_PASSWORD
            }
        });
    }

    async send (receivers, subject, content, isHTML = false) {

        try {

            const data = {
                from: '"Level 5 TD 1" <' + this.env.MAIL_USER + '>',
                to: receivers,
                subject: subject
            }
    
            if (isHTML) {
    
               data['html'] = content;
            } else {
    
                data['text'] = content;
            }
    
            await this.transpoter().sendMail(data);
            return true;
        } catch (error) {

            console.log(error);
            return false;
        }
    }
}

module.exports = new MailService(process.env);
