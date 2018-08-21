var $ = require('jquery');
function Ajax() {

}
/**
 * 上传图片数据
 */
Ajax.prototype.upload = function (data) {
    $.ajax({
        type:'POST',
        data:data,
        dataType:'json',
        url:'/test/PHP/upload.php',
        success:function (result) {
            if(result.status){
                location.reload();
            }else{
                alert(result.msg);
            }
        }
    });
};
var ajax = new Ajax();
module.exports = ajax;
