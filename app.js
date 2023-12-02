user_name = prompt("Enter user name","Nimra")
phoneno=prompt("Enter your phone number","0312888888")
email=prompt("Enter your Email Address","nimraf555gmai.com")
password=prompt("Enter your password")
confirmpassword=prompt("Confirm Password")
if(user_name==""||phoneno==""||email==""||password==""||confirmpassword=="")
{
    alert("Fill input")
}
else if(password==confirmpassword)
{
alert("You are login as successfully")
}
else 
{
alert("Your password is wrong")
}


