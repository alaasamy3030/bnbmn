$(document).ready(function(){
  $("#searchbutton").click(function(){
    $("#searchbox").slideToggle()
  });
});

$(document).ready(function(){
  $(".comments .title").click(function(){
    $(".area").slideToggle()
  });
});

$(document).ready(function(){
  $(".addcomment .title").click(function(){
    $(".areaform").slideToggle()
  });
});








/* HERE FOR ONLY DEMO PAGE */

var speed, currentpos=curpos1=0,alt=1,curpos2=-1

function initialize(){
if (window.parent.scrollspeed!=0){
speed=window.parent.scrollspeed
scrollwindow()
}
}

function scrollwindow(){
temp=(document.all)? document.body.scrollTop : window.pageYOffset
alt=(alt==0)? 1 : 0
if (alt==0)
curpos1=temp
else
curpos2=temp

window.scrollBy(0,speed)
}

setInterval("initialize()",10)
