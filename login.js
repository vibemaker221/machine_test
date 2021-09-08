/*form validation functions*/
function validateform()
{  
    var username=document.getElementById('uid') 
    var password=document.getElementById('pwd')
  
    if (username.value == null || username.value =='')
      {  
      alert('Name is required');  
      return false;  
     }
    if(password.value.length <=0)
      {  
      alert('You must enter the Password to continue.')
      return false;  
      } 
      if(password.value.length <=8) 
      {
          alert('Password must be greater than 8 characters.')
      }
      if(password.value.length > 15)
      {  
      alert('Password must be lesser than 15 characters.')
      return false;  
    }
}