define("modules/myModule",function ()
{
    return function(){
        return requireVar.config.userId;
    }
});