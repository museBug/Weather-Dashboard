$(document).ready(function(){


 $("#submitWeather").click(function(){

       var city = $("#city").val();

       if (city != ''){

            $.ajax({
                  url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=81672af700b40743b9edff6253390173",
                  type: "GET",
                  dataType: "jsonp",
                  success: function(data){
                  console.log(data);
                  }

            });
             

       } else {
             $("#error").html("Field cannot be empty");
       }
      
});
});

