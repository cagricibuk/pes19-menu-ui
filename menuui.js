      


var container = document.getElementById('container');
var tabDizisi = document.getElementsByTagName('li');
var kartDizisi;
var altTabMode = false;
var currentKart = 0;
var currentTab = 0;
var kaymaOlcusu = 0;
var tablar = ["HOME","KICK OFF","ONLINE","OFFLINE","EXTRAS"];
var onceki = tabDizisi[currentTab];
var uzunluklar = [125,165,185,200];

var birKay = 30;

var tabUzunluklar = [125,225,275,200];

var stack = 0;

tabDizisi[currentTab].style.opacity = 1;
    tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";
        document.addEventListener('keydown', function(event) {
            if(currentTab > 0){
    if(event.keyCode == 37) {
       
        //alert('Left was pressed');
        if(altTabMode== false){
            currentTab--;



           

            if(currentTab<0){
            currentTab = 4;
            onceki=tabDizisi[0];
            onceki.style.opacity= "0.5";
            onceki.childNodes[0].style.color = "white";
        tabDizisi[currentTab].style.opacity = 1;
        tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";
           
        }else{

            if(currentTab == 0){
            $("#container").animate({left: '+='+tabUzunluklar[0]+'vw'},150);

        }
         if(currentTab == 1){
            $("#container").animate({left: '+='+tabUzunluklar[1]+'vw'},150);

        }
        if(currentTab == 2){
            $("#container").animate({left: '+='+tabUzunluklar[2]+'vw'},150);

        }
        if(currentTab == 3){
            $("#container").animate({left: '+='+tabUzunluklar[3]+'vw'},150);

        }
        if(currentTab == 4){
            $("#container").animate({left: '+='+tabUzunluklar[4]+'vw'},150);

        }

            
            onceki=tabDizisi[currentTab+1];
        onceki.style.opacity= "0.5";
        onceki.childNodes[0].style.color = "white";
        tabDizisi[currentTab].style.opacity = 1;
        tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";
        
        }
        }
        else{
            if(currentKart==1){
                console.log("atlama --"+currentKart);
                currentTab--;
                $("#container").animate({left: '+='+uzunluklar[0]+'vw'},150);
                
                currentKart--;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(+1);
            onceki =kartDizisi[2]
            onceki.style.backgroundColor = "white";
            
            }
            else if(currentKart==6){
                console.log("atlama --"+currentKart);
                currentTab--;
                $("#container").animate({left: '+='+uzunluklar[1]+'vw'},150);
                
                currentKart--;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(+1);
            onceki =kartDizisi[7]
            onceki.style.backgroundColor = "white";
                
}
else if(currentKart==13){
    console.log("atlama --"+currentKart);
                currentTab--;
                $("#container").animate({left: '+='+uzunluklar[2]+'vw'},150);
                
                currentKart--;
                stack = 3;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(+1);
            onceki =kartDizisi[14]
            onceki.style.backgroundColor = "white";
                
}
else if(currentKart==17){
    console.log("atlama --"+currentKart);
                currentTab--;
                $("#container").animate({left: '+='+uzunluklar[3]+'vw'},150);
                
                currentKart--;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(+1);
            onceki =kartDizisi[18]
            onceki.style.backgroundColor = "white";
                
}
            else if(currentKart > 3 && currentKart <= 5 || currentKart > 8 && currentKart <= 11){
                console.log((currentKart));
                $("#container").animate({left: '+='+birKay+'vw'},150);
                
                stack--;
                console.log("stack"+stack);
                currentKart--;
                tabGuncelle(+1);
                onceki =kartDizisi[currentKart+1];
                onceki.style.backgroundColor = "white";
                kartDizisi[currentKart].style.backgroundColor = "lightBlue";

            }
            else{
                console.log((currentKart));
                //$("#container").animate({left: '-=10vw'},150);
                
                
                currentKart--;
                
                onceki =kartDizisi[currentKart+1];
                onceki.style.backgroundColor = "white";
                kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            }
           
        }
        
        
        
        //alert(tablar[currentTab]);
        
    }
            }if(currentKart < 19){
            
     if(event.keyCode == 39) {
        
     //   alert('Right was pressed');
    //     $("#kickoff").animate({ 
    // left: "+=50",width:"toggle"},350);
    if(altTabMode == false){
        
        currentTab++;
    if(currentTab>4){
        currentTab = 0;
        onceki=tabDizisi[4];
        onceki.style.opacity= "0.5";
        onceki.childNodes[0].style.color = "white";
    tabDizisi[currentTab].style.opacity = 1;
    tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";
    }else{
        if(currentTab == 1){
            stack = 0;
            
            $("#container").animate({left: '-='+tabUzunluklar[0]+'vw'},150);

        }
         if(currentTab == 2){
            stack = 0;
            $("#container").animate({left: '-='+tabUzunluklar[1]+'vw'},150);

        }
        if(currentTab == 3){
            stack = 0;
            $("#container").animate({left: '-='+tabUzunluklar[2]+'vw'},150);

        }
        if(currentTab == 4){
            stack = 0;
            $("#container").animate({left: '-='+tabUzunluklar[3]+'vw'},150);

        }
        if(currentTab == 5){
            stack = 0;
            $("#container").animate({left: '-='+tabUzunluklar[4]+'vw'},150);

        }

        

        onceki=tabDizisi[currentTab-1];
        onceki.childNodes[0].style.color = "white";
    onceki.style.opacity= "0.5";
    tabDizisi[currentTab].style.opacity = 1;
    tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";

            }
            
        }
        else{
            //alert(currentTab);
            if(currentKart==0){
                console.log("atlama --"+currentKart);
                currentTab++;
                $("#container").animate({left: '-='+uzunluklar[0]+'vw'},150);
                
                currentKart++;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(-1);
            onceki =kartDizisi[0]
            onceki.style.backgroundColor = "white";
            
            }
            else if(currentKart==5){
                console.log("atlama --"+currentKart);
                currentTab++;
                $("#container").animate({left: '-='+uzunluklar[1]+'vw'},150);
                
                currentKart++;
                
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(-1);
            onceki =kartDizisi[4]
            onceki.style.backgroundColor = "white";
                
}
else if(currentKart==12){
    console.log("atlama --"+currentKart);
                currentTab++;
                $("#container").animate({left: '-='+uzunluklar[2]+'vw'},150);
                
                currentKart++;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(-1);
            onceki =kartDizisi[11]
            onceki.style.backgroundColor = "white";
                
}
else if(currentKart==16){
    console.log("atlama --"+currentKart);
                currentTab++;
                $("#container").animate({left: '-='+uzunluklar[3]+'vw'},150);
                
                currentKart++;
            kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            tabGuncelle(-1);
            onceki =kartDizisi[15]
            onceki.style.backgroundColor = "white";
                
}
            else if(currentKart >= 3 && currentKart <= 5 || currentKart >= 8 && currentKart <= 10){
                console.log((currentKart));
                $("#container").animate({left: '-='+birKay+'vw'},150);
                
                stack++;
                console.log("stack"+stack);
                currentKart++;
                onceki =kartDizisi[currentKart-1];
                tabGuncelle(-1);
                onceki.style.backgroundColor = "white";
                kartDizisi[currentKart].style.backgroundColor = "lightBlue";

            }
            else{
                console.log((currentKart));
                //$("#container").animate({left: '-=10vw'},150);
                
                
                currentKart++;
                onceki =kartDizisi[currentKart-1];
                onceki.style.backgroundColor = "white";
                tabGuncelle(-1);
                kartDizisi[currentKart].style.backgroundColor = "lightBlue";
            }
   

        }
    


       
        //alert(tablar[currentTab]);
        
    }
            }
     if(event.keyCode == 40){
         if(altTabMode == false){

         
        altTabMode = true;
        kartDizisi = document.getElementsByClassName('cardBack');
        if(currentTab == 0){
            currentKart = 0;
        }
        if(currentTab == 1){
            currentKart = 2;
        }
        if(currentTab == 2){
            currentKart = 7;
        }
        if(currentTab == 3){
            currentKart = 15;
        }
        if(currentTab == 4){
            currentKart = 19;
        }

        kartDizisi[currentKart].style.backgroundColor = "lightBlue";
        
        // onceki=tabDizisi[currentTab];
        //  onceki.style.opacity= "0.5";
        //      onceki.childNodes[0].style.color = "white";
            //kartDizisi[currentKart].style.opacity = 1;
            //kartDizisi[currentKart].childNodes[0].style.backgroundColor= "rgb(29, 207, 184)";


        }
    }
         if(event.keyCode == 38){
            if(stack>0){
                $("#container").animate({left: '+='+stack*birKay+'vw'},150);
                stack = 0;
            }
        if(altTabMode == true){
           

           
            for (let item of kartDizisi) {
   item.style.backgroundColor = "white";
}
        altTabMode = false;
        tabDizisi[currentTab].style.opacity = 1;
    tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";
        }
        }
});



function tabGuncelle(number){
    
        tabDizisi[currentTab+number].style.opacity = 0.5;
    tabDizisi[currentTab+number].childNodes[0].style.color = "white";
                tabDizisi[currentTab].style.opacity = 1;
    tabDizisi[currentTab].childNodes[0].style.color = "rgb(29, 207, 184)";
    
  
    
}

        