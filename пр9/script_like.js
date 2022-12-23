"use strict";
var isCliked = false;
var counters = document.getElementById('count');
var button = document.getElementById('button');
var heart = document.getElementById('heart');

var like_count = Number(counters.textContent);

function draw_cursor (e) {
    heart.style.position = "absolute";
    heart.style.backgroundColor = "transparent"; 
    heart.style.width = "2%";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    let img = heart.cloneNode(true);
    img.removeAttribute('id');
    img.classList.add('fordel');
    document.body.append(img);   
}
function remove_hearts(){
    var del = document.getElementsByClassName('fordel');

    while(del.length > 0 ){
        document.removeEventListener('mousemove', draw_cursor);
        del[0].remove();
    }
}

function btn_clik (){
    document.addEventListener('mousemove', draw_cursor);

    if (isCliked){
        isCliked = false;
        like_count -= 1;
        counters.textContent = like_count;

        heart.style.position = "static";
        heart.style.width = "25%";
        heart.style.backgroundColor = "transparent";
        remove_hearts();

        button.classList.remove('clicked');
    }
    else{  
        heart.style.backgroundColor = "#e73c7e";
        button.classList.add('clicked');
        button.style.zIndex = "100"; 
        like_count += 1;
        counters.textContent = like_count;
        isCliked = true;
    }
};



