function validation(){


   var name = document.getElementById("name").value;


   var valid_name_regex = /^[A-Za-z]+$/;


        if(name.match(valid_name_regex)){


         return true;
          
      }else{


         document.getElementById("name_error").style.visibility = "visible";
         document.getElementById("name").style.borderColor = "red";
         return false;
      }



      
   }


   function validation1(){


         var age = document.getElementById("age").value;


         var valid_age_regex = /^[0-9]+$/;


         if(age.match(valid_age_regex)){
         return true;
      }else{
         document.getElementById("age_error").style.visibility = "visible";
         document.getElementById("age").style.borderColor = "red";
         return false;
      }
   }

   function validation2(){
    var city=document.getElementById('city').value;

    if(!city==""){
        return true;
    }else{
         document.getElementById("city_error").style.visibility = "visible";
         document.getElementById("city").style.borderColor = "red";
         return false;
   }}