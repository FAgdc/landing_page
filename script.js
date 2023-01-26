/*alert("SITO AGGIORNATO");*/
/*------------------------------------------------ AUTO CHANGE IMG ------------------------------------------------*/
const bg_strength = document.getElementById("strength__img");
const bg_strength__array = ["img/panca_piana.webp", "img/squat_rack.webp", "img/corpo_libero_rack.webp"];
const alt_strength__array = ["Panca Piana PowerGear Powerlifting", "Squat Rack PowerGear Powerlifting", "Palestra allenamento Crossfit"];
var bg_strength__count = 1;

function change_bg_strength(){
    try{
        bg_strength.src = bg_strength__array[bg_strength__count].toString();
        bg_strength.setAttribute('alt', alt_strength__array[bg_strength__count].toString());
        bg_strength.style.backgroundSize = "cover";
        if(bg_strength__count < ( bg_strength__array.length - 1 ) ){
            bg_strength__count++;
        }
        else{ bg_strength__count = 0; }
    }catch(error){}
}

setInterval(change_bg_strength, 5000);
/*------------------------------------------------ AUTO CHANGE IMG ------------------------------------------------*/




/*------------------------------------------------ DETECT BROWSER ------------------------------------------------*/
var checkSamsungBrowser = window.navigator.userAgent.indexOf("SamsungBrowser");
var checkSafariBrowser = window.navigator.userAgent.indexOf("safari") > -1 || window.navigator.userAgent.indexOf("CriOS") > -1 || window.navigator.userAgent.indexOf("FxiOS") > -1 || window.navigator.vendor.indexOf('Apple') > -1 || navigator.vendor.indexOf('Apple') > -1;

const popup = document.getElementById("popup__content");
const iframe360video_wrapper = document.getElementById("vid360_iframe_wrapper");
const iframe360video = document.getElementById("iframe_yt_360video");
const brand_list = document.getElementById("logo_list_wrapper");

if( checkSamsungBrowser > -1){ popup.style.display = "block";}
if( checkSafariBrowser === true){ replace_360iframe(); console.log("apple broswer detected"); }

function close_popup_message(){ popup.style.display = "none"; }
function replace_360iframe(){

    var element = document.createElement("a");
    element.setAttribute("href", "https://youtu.be/e-s9pl9cANE");
    element.setAttribute('target', '_blank');
    element.classList.add("iframe");
    element.style.backgroundImage = "url('img/video360cover.webp')";
    iframe360video_wrapper.appendChild(element);

    iframe360video.style.display = "none";
    logo_list_wrapper.style.borderBottom = "4px solid #e2e2e2;";
}
console.log(navigator.vendor);
/*------------------------------------------------ DETECT BROWSER ------------------------------------------------*/




/*------------------------------------------------ EXPAND LIST ------------------------------------------------*/
var input_show_list_checkbox = document.getElementById("show_list_checkbox");
const expanded_list_elements = document.getElementsByClassName("expanded_list");
const expanded_list_text = document.getElementById("show_list_text");

input_show_list_checkbox.addEventListener("click", ()=>{
    var input_show_list_checkbox__value = input_show_list_checkbox.checked;
    try{
        if (input_show_list_checkbox__value == true){
            expanded_list_text.innerText = "RIDUCI LISTA";
            for (var i = 0; i < expanded_list_elements.length; i++) {
                expanded_list_elements[i].style.display = "list-item";
            }
        }
        else{
            expanded_list_text.innerText = "MOSTRA TUTTO";
            for (var i = 0; i < expanded_list_elements.length; i++) {
                expanded_list_elements[i].style.display = "none";
            }  
        }
    }catch(error){}
});
/*------------------------------------------------ EXPAND LIST ------------------------------------------------*/




/*------------------------------------------------ CAROUSEL ------------------------------------------------*/
const carousel_img = document.getElementById("carousel__img__content");
const carousel_img__array = ["img/palestra_area_cardio.webp", "img/palestra_area_macchine.webp", "img/palestra_area_pesi.webp", "img/palestra_area_strength.webp", "img/palestra_area_esterno.webp"];
const alt_carousel__array = ["Palesta Area Cardio per Bruciare Grasso", "Palestra macchine isotoniche per sviluppare la muscolatura", "Palestra area pesi liberi per allenamento hardcore", "Palestra area Powerlifting e CrossFit", "Fitness Authority Palestra Trani Esterno"];
var bg_carousel__count = 0;

function prev_slide_carousel(){
    try{

        if(bg_carousel__count <= 0){ bg_carousel__count =  carousel_img__array.length - 1; }
        else{ bg_carousel__count--; }

        carousel_img.src = carousel_img__array[bg_carousel__count].toString();
        carousel_img.setAttribute('alt', alt_carousel__array[bg_carousel__count].toString());

        console.log(bg_carousel__count);

    }catch(error){}
}
function next_slide_carousel(){
    try{

        if(bg_carousel__count < ( carousel_img__array.length - 1 ) ){ bg_carousel__count++; }
        else{ bg_carousel__count = 0; }

        carousel_img.src = carousel_img__array[bg_carousel__count].toString();
        carousel_img.setAttribute('alt', alt_carousel__array[bg_carousel__count].toString());

        console.log(bg_carousel__count);

    }catch(error){}
}
/*------------------------------------------------ CAROUSEL ------------------------------------------------*/


document.getElementById("year_copyright").innerText = new Date().getFullYear();


/*------------------------------------------------ AUTOMATED HORIZONTAL SCROLL ------------------------------------------------*/
const mobile_MediaQuery = window.matchMedia('(max-width: 810px)');
const horizontal_scroll__bar = document.getElementById("horizontal_scroll_brands");

var scrollDirection = 1;
function pageScroll(){
    
    if(mobile_MediaQuery.matches){
        
        horizontal_scroll__bar.scrollBy(scrollDirection, 0); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScroll()',20); // scrolls every 50 milliseconds
        if(horizontal_scroll__bar.scrollLeft == horizontal_scroll__bar.scrollWidth - horizontal_scroll__bar.clientWidth){
            scrollDirection = -1*scrollDirection;
            /*alert("END LEFT");*/
        }
        else if(horizontal_scroll__bar.scrollLeft == 0 && scrollDirection < 0){
            scrollDirection = -1*scrollDirection;
            /*alert("END RIGHT");*/
        }
        /*console.log(horizontal_scroll__bar.scrollLeft);*/

    } 
}
pageScroll();
/*------------------------------------------------ AUTOMATED HORIZONTAL SCROLL ------------------------------------------------*/

history.scrollRestoration = "manual";
window.onbeforeunload = function(){ window.scrollTo(0,0);};