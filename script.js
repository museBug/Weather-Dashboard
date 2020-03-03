$(document).ready(function(){
    $("#submitWeather").click(function() {
        let search = $(this).prev().val()
        const key = "81672af700b40743b9edff6253390173";
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + key;

        $.ajax({
            url: URL,
            method: "GET"
        })
        .then(function(response){
            let cityLoc = $("#city");
            cityLoc.text(response.name);
        })
    });
});

    