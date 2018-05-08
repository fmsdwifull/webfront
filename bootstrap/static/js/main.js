function over(id){
	var kong = document.getElementById('kong');
	var id =  document.getElementById(id);
	kong.style.width = '5%';
	id.style.width = '28%';
}
function out(id){
	var kong = document.getElementById('kong');
	var id =  document.getElementById(id);
	kong.style.width = '28%';
	id.style.width = '5%';
}
function telover()
{
	$('#showtelid').html("免费咨询&nbsp;&nbsp;<span style='font-family:GOTHIC;'>021-31262170</span>");
}
function telout()
{
	$('#showtelid').html("");
}	  
function smb() {
	$.ajax({
		//几个参数需要注意一下
		type: "POST",//方法类型
		//dataType: "json",//预期服务器返回的数据类型
		url: "http://www.cloud-open.cn/client.php?c=feedback&a=getClientInfo",//url
		//data: $(form[name=dd]).serialize(),
		data:"xxxd",
		success: function (result) {
			alert(result);
		},
		error: function () {
			alert("异常！");
		}
	})
}		
function setCheckState(obj)
{
	if(obj.value==0)
	{
		obj.src="../static/img/web/system/checked.png";
		obj.value=1;
	}else{
		obj.src="../static/img/web/system/unchecked.png";
		obj.value=0;
	}
}