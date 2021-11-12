function clock(){
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    if(hours<10){
        hours = "0"+hours
    }
    if(minutes<10){
        minutes = "0"+minutes
    }
    if(seconds<10){
        seconds = "0"+seconds
    }
    
    document.getElementById('hour').innerHTML=hours + " :";
    document.getElementById('minute').innerHTML=minutes+" :";
    document.getElementById('second').innerHTML=seconds;
    switch(day){
        case 1:
            document.getElementById('day').innerHTML="Pazartesi";
            break;
        case 2:
            document.getElementById('day').innerHTML="Salı";
            break;
        case 3:
            document.getElementById('day').innerHTML="Çarşamba";
            break;
        case 4:
            document.getElementById('day').innerHTML="Perşembe";
            break;
        case 5:
            document.getElementById('day').innerHTML="Cuma";
            break;
        case 6:
            document.getElementById('day').innerHTML="Cumartesi";
            break;
        case 7:
            document.getElementById('day').innerHTML="Pazar";
            break;        
    }
}
setInterval(function(){clock();},1000);

