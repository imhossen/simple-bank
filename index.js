document.getElementById('submit').addEventListener('click', function () {
    console.log("Button Clicked");
    //User Email
    const userFeild = document.getElementById('user-email');
    const userMail = userFeild.value;
    //User Password
    const userFieldPass = document.getElementById('user-password');
    const userPass = userFieldPass.value;

    if (userMail == 'demo@gmail.com' && userPass == '1234') {
        console.log('Valid User');
        window.location.href = 'bank.html';
    }
    else {
        console.log("Please Input Valid Email and Password");
    }

})

