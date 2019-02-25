/*
Create a user account form having four fields 
1. Name 
2. Email
3. Passsword 
4. Confirm password
and the buttons for adding/editing and cancelling/resetting the form.

a) Provide the validation for all fields.
b) Provide the validation for matching the password and confirm password fields. Also, show a password meter to show strength password
c) Submit button should be disabled when form is invalid and when form is valid then on clicking the Submit button it will add the user in the users list and resets the form.

d) Create a dummy User array/JSON to show list and details of all users from array/JSON.
e) Provide edit and delete button for each user in the list.
f) On clicking the edit button it should show the user details in the user account form from where the user can be edited and show the Edit button in the form and hide the submit button and on clicking the form edit button it should update the user details in the users list, hide the form edit button and show the submit button and reset the form.
g) On clicking the delete button it will delete the particular user from the users list.
*/

/*
function vai(){
     var n=document.getElementById('name').innerHTML="mic";
    //if(name.value=="ag");
    alert(n);
}




document.querySelector('.submit').addEventListener('click',function()
{
    var n=document.querySelector('.name').value;
    alert(n);
});


*/
 var count=0;
 var user=[];
 
 document.querySelector('.del').style.display='none';
document.querySelector('.submit').addEventListener('click',(e)=>
{
    
    
    e.preventDefault();
    var name=document.querySelector('.name').value;
    var email=document.querySelector('.email').value;
    var pass=document.querySelector('.password').value;
    var cpass=document.querySelector('.cpassword').value;
    if( name=='')
    {
        
    alert("name shoud not be empty");
    return 1;
    }
    if (email!='')
{
    if(!(email.includes('@')))
    {
         alert("@ should  be there");
         return 1;
    }
    
}
    else
    {
       alert('email should not be empty');
       return 1;
    }
    if(pass=='')
    {
    alert('password should not be empty');
    return 1;
    }

    if(cpass=='')
    {
    alert('you should confirm the pawword first');
    return 1;
    }
    if (pass.length>=6)
    {
    if(pass!==cpass)
    {
    alert('password not match');
    return 1;
    }
    }
    else
    {
    alert("password is too short");
    return 1;
    }
    document.querySelector('.del').style.display='block';
    
    user.push(name);
    user.push(email);
    console.log(user);
     
      var table = document.querySelector('.tab');
      var row = table.insertRow(count+1);
      
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(1);
      count++;
     
      
      
      
      
      cell2.innerHTML = name;
      cell3.innerHTML= email;
    
    
     user=[];
   
 
   
    
})


document.querySelector('.del').addEventListener('click',(e)=>
{
    e.preventDefault();
   
   var d= prompt('enter the uid you want to remove');
   if(d==0)
   {
       alert('dont remove this');
    }

       else 
       {
           document.querySelector('.tab').deleteRow(d);
       }
      
       count--;
 
});



