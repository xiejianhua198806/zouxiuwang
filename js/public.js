//获取用户名
function getUserName(){
    var user=localStorage.getItem('user');
    if(user){
        return JSON.parse(user).userID;
    }else{
        return null;
    }
};
//获取用户密码
function getUserPwd(){
    var user=localStorage.getItem('user');
    if(pwd){
        return JSON.parse(user).password;
    }else{
        return null;
    }
};
//搜索框
$("#search").on("#btn","click",function(){
	var value = $("#search").val();
		if(value.length > 2){
			var les = encodeURI(value);
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
				async:true,
				data:{selectText:les},
				dataType:"jsonp",
				success:function(data){
					// $.each(data,function (index) {
					// 	var goodsID = data[index].goodsID;
					// 	var $info = $('<li>' + data[index].goodsName + '</li>');
					// 	$(".datalist").append($info);
					// 	$info.on("touchend",function(){
					// 		window.location.href = "product.html?goodsID=" + encodeURI(goodsID);;
					// 	});
					// });
					
					// $(".datalist").show();
					console.log(data)
				}
			});
		}else{
			$(".datalist").empty().hide();
		}
});
//后退
$(".fa1").on("touchend",function(){
	history.back();
});
//查询url中的字符串
function getQueryString(name){
	//在你要添加的名字前面进行添加前缀 匹配元素的正则表达式
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
	//用来查询那个名称的
	var r = window.location.search.substr(1).match(reg);
	if(r!=null){
	return decodeURI(r[2]);
	}
	return null;
}