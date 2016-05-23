require(['modules/myModule'], function (myModule)
{
	alert("");
    var userId = myModule(); 
    console.log(userId);
});