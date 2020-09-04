//////////////////////////THIS IS THE SECTION TO MAKE RGB BORDERS IN PAGE//////////////////////////////////////////////////////////////////
var cont1=0;
var cont2=254;
var cont3=125;

//function that act as chronometer for te rgb changes
var cambios =setInterval(aumento,100);
//this is the counters to make the 3 rgb(cont1,cont2,cont3) numbers, that are always changing
function aumento(){
    if(cont1==254){
        cont1=0;
    }
    cont1++;
    
    
     if(cont2==0){
        cont2=254;
    }
    cont2--;
    
     if(cont3==254){
        cont3=125;
    }
    cont3++;
   
    
    document.querySelectorAll('#ul li a')[0].style.color = 'rgb('+cont1+','+cont2+','+cont3+')';//menuitem1
    document.querySelectorAll('#ul li a')[1].style.color = 'rgb('+cont1+','+cont2+','+cont3+')';//menuitem2
    document.querySelectorAll('#ul li a')[2].style.color = 'rgb('+cont1+','+cont2+','+cont3+')';//menuitem3
    document.querySelectorAll('#ul li a')[3].style.color = 'rgb('+cont1+','+cont2+','+cont3+')';//menuitem4*/
    
    
    //then is just to assign the 3 counters to the rgb styles in borders, all this function works every .2 seconds WOW!!
    
    document.querySelector('nav').style.border = '8px solid rgb(' + cont1 + ',' + cont2+ ',' + cont3 + ')';//nav
   document.querySelector('.logoCircle').style.border = '13px solid rgb(' + cont1 + ',' + cont2 + ',' + cont3 + ')';//logo circle
    document.querySelector('.logoText').style.color = 'rgb('+cont1+','+cont2+','+cont3+')';   //logoText
    
    //and these <hr> labels alco can change color with rgb system
   document.querySelectorAll('hr')[0].style.backgroundColor = 'rgb('+cont1+','+cont2+','+cont3+')';//hr background
    document.querySelectorAll('hr')[0].style.width = cont3+'px';
    
    document.querySelector('.section1 div').style.border = '8px solid rgb(' + cont1 + ',' + cont2+ ',' + cont3 + ')';//section1 div 
     document.querySelector('.section1 div h2').style.color = 'rgb('+cont1+','+cont2+','+cont3+')';//section1 div h2
    document.querySelector('.section1 div p').style.color = 'rgb('+cont1+','+cont2+','+cont3+')';//section1 div p
    
     document.querySelectorAll('hr')[1].style.backgroundColor = 'rgb('+cont1+','+cont2+','+cont3+')';//hr2 background
    document.querySelectorAll('hr')[1].style.width = cont3+'px';
    
}
    
//////////////////////////THIS IS THE SECTION OF THE TOGGLE, IT MAKES OPEN AND CLOSE THE MENU NAV////////////////////////////////////////////////////////   
    //we create a boolean
    var toggle = false;//false ->close menu   ||   true ->open menu (simple)
    //take the btnToggle DOM to a var
    var btnMenuToggle = document.getElementById('btnMenuToggle');
    //Make the function that evaluate if the toggle is open or close and apply the changes
    function openMenu(e){
        if(e.type=='click'){
            if(toggle==false){
                document.getElementById('nav').style.borderRadius = "0px";
                document.getElementById('nav').style.height = '400px';
                document.getElementById('nav').style.width = '200px';
                timerOpacity();
            }
            else if(toggle==true){
                document.getElementById('nav').style.borderRadius = "50%";
                document.getElementById('nav').style.height = '80px';
                document.getElementById('nav').style.width = '80px';
                document.getElementById('ul').style.opacity = '0';
            }
            toggle = !toggle;
        }
    }
    //this is a small trick, it makes a DELAY to appear and desappear the (ul) in the (nav), just to don't bother the nav's borders
    function timerOpacity(){
        var tiempo = setTimeout(opacity,600);
    }

    function opacity(){
        document.getElementById('ul').style.opacity = '1';
    }
    //there's a better way to do this with a (.addEventListener) but, as i can see, it doesn't works at all like this one.
    btnMenuToggle.onclick = openMenu;



    




