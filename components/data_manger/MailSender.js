
function MailSender() {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdullah.awankhalid05@gmail.com",
        Password : "2293D3D70FA42AB64A2AEAB51D4D4A7135B8",
        To : 'abdullah.awankhalid05@gmail.com',
        From : "abdullah.awankhalid05@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

main().catch(console.error);
}





