"use strict";let parallax=document.querySelector(".parallax");let navbar=document.querySelector(".nav");let headerImgContainer=document.querySelector(".header .container");window.addEventListener("scroll",parallaxFun);window.addEventListener("scroll",debounce(changeNavbar));function parallaxFun(){let a=window.pageYOffset;let l=parallax.offsetTop+parallax.offsetHeight;parallax.style.backgroundPositionY=a>parallax.offsetTop&&a<=l?(a-parallax.offsetTop)/1.5+"px":"0";} function changeNavbar(){let topDist=headerImgContainer.getBoundingClientRect().top;let navHeight=navbar.offsetHeight;if(topDist<navHeight){navbar.classList.add("fixed");}else{navbar.classList.remove("fixed");}} function debounce(func,wait=15,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};}