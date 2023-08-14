function rand(start,end){
         var r = start + Math.floor(Math.random() * (end-start));
         return r;
}

function myprint(string){
    document.write(string);
}

function sumArray(arr){
    var i;
    var s=0;
    for(i=0 ; i<arr.length ; i++){
        s += arr[i];
    }
    return s;
}

function avgArray(arr){
    return sumArray(arr)/arr.length;
}

function sumAll(a){
    var s=0;
    var i;
    for( i in arguments){
        s += arguments[i];
    }
    return s ;
}


function fadeIn(elem){
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if(elemOpacity>=1){
    return;
    }
    elem.style.opacity =  Number(elemOpacity) + 0.01 ;
    setTimeout(function(){
     fadeIn(elem);
    },20)
 }


 function fadeOut(elem){
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if(elemOpacity<=0){
    return;
    }
    elem.style.opacity =  Number(elemOpacity) - 0.01 ;
    setTimeout(function(){
     fadeOut(elem);
    },20)
 }

 Element.prototype.fadeIn = function(){
     fadeIn(this);
 }

 Element.prototype.fadeOut = function(){
     fadeOut(this);
 }

 
 function smoothScroll(ypos){
    var step = 20;
    if(ypos < scrollY){
        step *= -1;
    }
    if(Math.abs(ypos - scrollY) <= step){
        return;
    }
    window.scrollBy(0, step);
    setTimeout(function(){
        smoothScroll(ypos)
    }, 3);
}
