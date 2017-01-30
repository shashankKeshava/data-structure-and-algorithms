var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: "keshavashashank@gmail.com",
        pass: "@20070740346K#"
    }
});

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'Sender Name <keshavashashank@gmail.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <keshavashashank@gmail.com>',

    // Subject of the message
    subject: 'ToolBox is unicode friendly ✔',

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Hello Shashashank</b> to myself <img src="cid:note@node"/></p>' +
        '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
};

console.log('Sending Mail');
transport.sendMail(message, function(error) {
    if (error) {
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');


    transport.close(); // close the connection pool
});
