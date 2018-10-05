'use strict'
/*------------------------------------------------*/
/*----------------------Selectors-------------------*/
console.time("Time to load:");
console.warn(document.head.childNodes[1].textContent , "is Powered by 🌐GeckoJS© 😉\nVisit: https:www.alexsan134.github.io/GeckoJS 🌐 ");
console.info("Try our original Limiters and Ranges (LnR)®❗️");
function g(str, arry){
    var el = document.querySelectorAll(str);
    var a = [];
    if(el.length > 1){
        if(arry == undefined){
            return document.querySelectorAll(str);
        }else{
    if(typeof(arry) == "object"){
         if(arry.length == 1){
            var l = arry[0];
            if(l >= el.length){
                l = el.length-1;
            }if(l < 0){
                l = el.length + l;
            }
            for(var i = 0;i<l+1;i++){
                a.push(el[i]);
            }
            return a; 
        }else{
            //DEF BOTH
            var mx = arry[1]+1;
            var mn = arry[0];
            if(mx < mn){
                if(mx > 0){
                    mx = arry[0]+1;
                    mn = arry[1];
                }else{
                    mn = arry[0];
                    mx = el.length+arry[1]+1;
                }
            }else if(mx > mn){
                if(mn < 0){
                    mn = arry[1];
                    mx = el.length+arry[0];
                }
            }
            if(arry[0] == arry[1]){
                return el[mx-1];
            }
            for(mn;mn < mx;mn++){
                a.push(el[mn]);
            }
            return a;
        }
    }else if(typeof(arry) == "number"){
        if(arry >= el.length){
            arry = el.length-1;
        }
        if(arry < 0){
            if(Math.abs(arry) > el.length-1){
                arry = 0;
            }else{
                arry = el.length + arry;
            }
            
        }
        return el[arry];
    }else{
        throw new Error("GeckoJS: selector is of type Number or Array");
    }
    }
    }else{
        return document.querySelectorAll(str)[0];
    }
}
Object.prototype.event = function(event, fn){
    if(event == undefined || event == ""){
        throw new Error("GeckoJS: No event");
    }else{
        if(fn == undefined || fn == ""){
            throw new Error("GeckoJS: No Callback");
        }else{
            if(this.length > 1){
                for(var i = 0;i<this.length;i++){
                    this[i].addEventListener(event, fn);
                }
            }else{
                this.addEventListener(event, fn); 
            }
        }
    }

}
Object.prototype.css = function(str, value){
    var arry = [];
        if(str == undefined || str == ""){
            if(this.length > 1){
                for(var i = 0;i < this.length;i++){
                    arry.push(window.getComputedStyle(this));
                }
                return arry;
            }else{
                return window.getComputedStyle(this);
            }
        }else{
            if(str == "get"){
                if(value == undefined || value == ""){
                    throw new Error("GeckoJS: no property value");
                }else{
                    if(this.length > 1){
                        for(var i = 0;i < this.length;i++){
                            arry.push(window.getComputedStyle(this[i]).getPropertyValue(value));
                        }
                        return arry;
                    }else{
                        return window.getComputedStyle(this).getPropertyValue(value);
                    }
                } 
            }else{
                if(this.length > 1){
                    for(var i = 0;i<this.length;i++){
                        this[i].style.cssText=str;
                    }
                }else{
                    this.style.cssText=str;
                }
            }
        }
}

Object.prototype.attr = function(str,value){
    var arry = [];
    if(str == undefined || str == ""){
        throw new Error("GeckoJS: no attribute");
    }else{
        if(value == undefined || value == ""){
            if(this.length > 1){
                for(var i = 0;i < this.length;i++){
                    arry.push(this[i].getAttribute(str));
                }
                return arry;
            }else{
                return this.getAttribute(str);
            }
        }else{
            if(str == "get"){
                if(this.length > 1){
                    for(var i = 0;i < this.length;i++){
                        arry.push(this[i].getAttribute(value));
                    }
                    return arry;
                }else{
                    return this.getAttribute(value);
                }
        }else if(str == "has"){
                if(this.length > 1){
                    for(var i = 0;i < this.length;i++){
                        arry.push(this[i].hasAttribute(value));
                    }
                    return arry;
                }else{
                    return this.hasAttribute(value);
                }
        }else if(str == "remove"){
                if(this.length > 1){
                    for(var i = 0;i < this.length;i++){
                        arry.push(this[i].removeAttribute(value));
                    }
                }else{
                    this.removeAttribute(value);
                }    
        }else{   
                if(this.length > 1){
                    for(var i = 0;i < this.length;i++){
                        this[i].setAttribute(str, value);
                    }
                }else{
                    this.setAttribute(str, value);
                }
        }
        }
    }
}
/*------------------------------------------------*/
/*----------------------DOM-------------------*/

/*------------------------------------------------*/
/*----------------------Functions-------------------*/
function trim (str) {
    return str.replace(/^\s+|\s+$/gm,'');
}

//Returns random number
function randomRange(min, max){
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

/*----------------------STRINGS-------------------*/
//Returns bolean of how much substrings are in a string
String.prototype.searchRepeat=function(rpt, str){
    var count = 0;
    for(var i = 0;i < this.length;i++){
        if(this.charAt(i) == str){
            count++;
        }
    }
    if(count == rpt){
        return true;
    }else{
        return false;
    }
}
//Converts string into int variable
String.prototype.toInt = function(){
    return Math.max(this);
}

//Converts string into Array
String.prototype.toArray = function(){
    var arry = [];
    for(var i = 0 ; i < this.length ;i++){
        arry.push(this.charAt(i));
    }
    return arry;
}


//Returns the position of a last substring found
String.prototype.lastIndexOf = function (str){
    for(var i = 0;i < this.length;i++){
        if( this.charAt(this.length - i) == str ){
            return this.length-i;
        }
    }
}

//Capitalize an element
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//Returns the position of a specifc substring in string position
String.prototype.getSearchPosition = function(str, index){
    var count = 0;
    for(var i = 0; i < this.length; i++){
        if(this.charAt(i) == str){
            count++;
            if(count == index){
                return i;
            }
        }
    }
}

//From RGB string to HEX code
String.prototype.toHex = function() {
      var parts = this.substring(this.indexOf("(")).split(","),
          r = parseInt(trim(parts[0].substring(1)), 10),
          g = parseInt(trim(parts[1]), 10),
          b = parseInt(trim(parts[2]), 10)
          if(r == 0){
              r = "00";
          }
          if (g == 0){
              g = "00";
          }
          if (b == 0){
              b = "00";
          }
          var hex = "#"+r.toString(16)+g.toString(16)+b.toString(16);
          return hex;
}

//From HEX string to RGB code
String.prototype.toRGB = function() {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(this)){
        c= this.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
}


//Replace a character in a specific index of a string
String.prototype.replaceAt = function(replace, index) {
    return this.substr(0, index) + replace + this.substr(index+replace.length);
}

//Cut a part of a string
String.prototype.cut = function(cutStart, cutEnd){
    return this.substr(0,cutStart) + this.substr(cutEnd);
}

//Search and replace a character in a specific index of a string
String.prototype.replaceIndex = function(search, SearchIndex, replace){
    var count = 0;
    for(var i = 0;i < this.length;i++){
        if(this.charAt(i) == search){
            count++;
            if(count == SearchIndex){
                var resp = this.replaceAt(i, replace);
                return resp;
            }
        }
    }
}

//String includes an Array?
String.prototype.includeArray = function(array){
    var respTS = false;
    for(var e = 0; e < array.length;e++){
        var arrC = this.toLowerCase();
        if(arrC.includes(array[e]) == true){
            respTS = true;
            break;
        }
    }
    return respTS;
}


/*------------------------------------------------*/
/*----------------------Numbers-------------------*/
//Return square root of a number default 2
Number.prototype.root = function(e){
    if(e == undefined){
        return  Math.sqrt(this);
    }else{
        return Math.pow(this, 1/e);
    }
}
//Return number elevate to an exponent default 2
Number.prototype.pow = function(e){
    if(e == undefined){
        return  Math.pow(this, 2);
    }else{
        return Math.pow(this, e);
    }
}
//Converts number into Array
Number.prototype.toArray = function(){ 
    var str = this.toString();
    var arry = [];
    for(var i = 0 ; i < str.length ;i++){
        arry.push(str.charAt(i));
    }
   return arry.map(Number);
}

/*------------------------------------------------*/
/*----------------------Arrays-------------------*/
//Converts array in Int variable
Array.prototype.toInt = function(){
    return Math.max(this);
}
//Converts array in String variable
Array.prototype.toString = function(){
    var tl =  this.map(String);
    return tl.join("");
}
//Random the order of the elements in array
Array.prototype.randomize = function(){
   for(var i = 0; i < this.length ; i++){
       var current = this[i];
       var rd = (Math.floor(Math.random() * (this.length)));
       var prev = this[rd];
        this[i] = prev;
        this[rd] = current;
   }
   return this;
}

//Return the same array with the operated values
Array.prototype.operation = function(sign, e){
    var r = this.map(Number);
    for(var i = 0; i < r.length; i++){
        if(sign == "+" || sign == "plus" || sign == "add"){
            r[i]=r[i]+e;
        }else if(sign == "-" || sign == "dif" || sign == "minus"){
            r[i]=r[i]-e;
        }else if(sign == "*" || sign == "mult"){
            r[i]=r[i]*e;
        }else if(sign == "/" || sign == "div"){
            r[i]=r[i]/e;
        }else if(sign == "^" || sign == "elev" || sign == "to"){
            r[i]= Math.pow(r[i], e);
        }else if(sign == "|" || sign == "root" || sign == "rad"){
            if(e == undefined){
                r[i]= Math.pow(r[i], 1/2);
            }else{
                r[i]= Math.pow(r[i], 1/e);
            }
        }
        else if(sign == "%" || sign == "mod"){
            r[i]=r[i]%e;
        }
        else if(sign == "." || sign == "concat" || sign == "ct"){
            this[i]=this[i]+e;
            return this;
        }
    }
    return r;
}

//Get the max value of an Array(list of numbers)
Array.prototype.max = function(){
    return Math.max(...this.map(Number));
}
//Get the min value of an Array(list of numbers)
Array.prototype.min = function(){
    return Math.min(...this.map(Number));
}

console.timeEnd("Time to load:");