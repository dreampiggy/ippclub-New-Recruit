function displaySubMenu(li){
  var subMenu=li.getElementsByTagName("ul")[0];
  subMenu.style.display="block";
}
function hideSubMenu(li){
  var subMenu=li.getElementsByTagName("ul")[0];
  subMenu.style.display="none";
}
function DY_scroll(wraper,prev,next,img,speed,or)
{ 
	var wraper = $(wraper);
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	var s = speed;
	next.click(function()
	{
		img.animate({'margin-left':-w},function()
		{
			img.find('li').eq(0).appendTo(img);
			img.css({'margin-left':0});
		});
	});
	prev.click(function()
	{
		img.find('li:last').prependTo(img);
		img.css({'margin-left':-w});
		img.animate({'margin-left':0});
	});
	if (or == true)
	{
		ad = setInterval(function() { next.click();},s*1000);
		wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
	}
}
DY_scroll('.img-scroll','.prev','.next','.img-list',3,true);