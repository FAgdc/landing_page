/*------------------------------------------------ AUTOMATED HORIZONTAL SCROLL ------------------------------------------------*/
const mobile_MediaQuery = window.matchMedia('(max-width: 810px)');
const horizontal_scroll__bar = document.getElementById("horizontal_scroll_brands");

var scrollDirection = 1;
function pageScroll(){

    /*
    if(mobile_MediaQuery.matches){
        
        horizontal_scroll__bar.scrollBy(scrollDirection, 0); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScroll()',20); // scrolls every 50 milliseconds
        if(horizontal_scroll__bar.scrollLeft == horizontal_scroll__bar.scrollWidth - horizontal_scroll__bar.clientWidth){
            scrollDirection = -1*scrollDirection;
        }
        else if(horizontal_scroll__bar.scrollLeft == 0 && scrollDirection < 0){
            scrollDirection = -1*scrollDirection;
        }

    }*/

    horizontal_scroll__bar.scrollBy(scrollDirection, 0);
    scrolldelay = setTimeout('pageScroll()',20);
    if(horizontal_scroll__bar.scrollLeft == horizontal_scroll__bar.scrollWidth - horizontal_scroll__bar.clientWidth){
        scrollDirection = -1*scrollDirection;
    }
    else if(horizontal_scroll__bar.scrollLeft == 0 && scrollDirection < 0){
        scrollDirection = -1*scrollDirection;
    }
    /*console.log(horizontal_scroll__bar.scrollLeft);*/
}
pageScroll();
/*------------------------------------------------ AUTOMATED HORIZONTAL SCROLL ------------------------------------------------*/