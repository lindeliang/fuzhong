window.lib||(window.lib={}),lib.WeixinApi=function(){"use strict";function weixinShareTimeline(data,callbacks){callbacks=callbacks||{},wx.onMenuShareTimeline({title:data.title,link:data.link,imgUrl:data.imgUrl,trigger:function(res){callbacks.trigger&&callbacks.trigger(res)},success:function(res){callbacks.success&&callbacks.success(res)},cancel:function(res){callbacks.cancel&&callbacks.cancel(res)},fail:function(res){callbacks.fail&&callbacks.fail(res)}})}function weixinSendAppMessage(data,callbacks){callbacks=callbacks||{},wx.onMenuShareAppMessage({title:data.title,desc:data.desc,link:data.link,imgUrl:data.imgUrl,trigger:function(res){callbacks.trigger&&callbacks.trigger(res)},success:function(res){callbacks.success&&callbacks.success(res)},cancel:function(res){callbacks.cancel&&callbacks.cancel(res)},fail:function(res){callbacks.fail&&callbacks.fail(res)}})}function weixinShareQQ(data,callbacks){callbacks=callbacks||{},wx.onMenuShareQQ({title:data.title,desc:data.desc,link:data.link,imgUrl:data.imgUrl,trigger:function(res){callbacks.trigger&&callbacks.trigger(res)},success:function(res){callbacks.success&&callbacks.success(res)},cancel:function(res){callbacks.cancel&&callbacks.cancel(res)},fail:function(res){callbacks.fail&&callbacks.fail(res)}})}function weixinShareWeibo(data,callbacks){callbacks=callbacks||{},wx.onMenuShareWeibo({title:data.title,desc:data.desc,link:data.link,imgUrl:data.imgUrl,trigger:function(res){callbacks.trigger&&callbacks.trigger(res)},success:function(res){callbacks.success&&callbacks.success(res)},cancel:function(res){callbacks.cancel&&callbacks.cancel(res)},fail:function(res){callbacks.fail&&callbacks.fail(res)}})}function init(opts){if(!wx)throw"请先加载http://res.wx.qq.com/open/js/jweixin-1.0.0.js";var signUrl=opts.url||"http://m.yangdongxi.com/wxsign/";$.ajax({url:signUrl,dataType:"jsonp",data:{url:location.href},success:function(d){lib.WeixinApi.sign=d,wx.config({debug:opts.debug||!1,appId:d.appId,timestamp:d.timestamp,nonceStr:d.nonceStr,signature:d.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}),wx.ready(function(){opts.ready&&opts.ready.call(null,lib.WeixinApi)})}})}return{version:"1.0.0",init:init,shareToTimeline:weixinShareTimeline,shareToWeibo:weixinShareWeibo,shareToFriend:weixinSendAppMessage,shareToQQ:weixinShareQQ}}();