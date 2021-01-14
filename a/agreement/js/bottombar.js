/**
 * Created by huning on 16/2/25.
 */
;(function(lib) {
    //var $ = win['Zepto'];

    //bottombar相关数据
    var defaultBarData = [
        {
            text: '',
            link: '/index.html',
            icon: '&#xe606;'
        },
        {
            text: '',
            link: '/cart.html',
            icon: '&#xe604;'
        },
        {
            text: '',
            link: '/mine.html',
            icon: '&#xe607;'
        }
    ];

    var defaultCfg = {
        showBottom:true,
        host: "ushop.feed.9t2.net",
        width: '150px',
        bottom: '8px',
        left: '7px',
        callback: function(obj){
            //获取是否需要红点
            var orderNum =lib.storage.get('order_num');
            var cartNum = lib.storage.get('cart_num');
            var dot = obj.getElementsByClassName('dot');
            if(orderNum>0){
                dot[1].style.display='block';
            };
            if(cartNum>0){
                dot[0].innerText = cartNum;
                dot[0].style.display='block';
            }
        }
    };

    function renderBottomBar (cfg,host) {
        var htm = [];
        cfg.forEach(function (val) {
            htm.push('<li class="bbar">' +
                '<a href="http://'+host+ val.link + '">' +
                '<i class="icon iconfont" data-icon="' + val.icon + '">' + val.icon + '</i>' +
                '<p>' + val.text + '</p>' +
                '</a>' +
                '</li>')
        })

        var htmlText = document.createElement('div');
        htmlText.id = 'bottombar';
        htmlText.style.display='none';
        htmlText.innerHTML='<ul>' + htm.join('') + '</ul>';
        return htmlText;
    };

    // constructor
    function BottomBar(options) {
        this.options = {};
        this.options = options || defaultCfg;
        this.length = this.options.barData?this.options.barData.length:defaultBarData.length;
        this._init();
    }

    //批量添加css属性
    function addCss(obj,val){
        for(var i=0;i<(obj.length?obj.length:1);i++){
            for(j in val){
                (obj[i]?obj[i]:obj).style[j]=val[j];
            }
        }
    }

    BottomBar.prototype._init=function () {
        var that = this;
        var bodyTarget = document.getElementsByTagName('body');
        bottombar_html = this.options.barData?renderBottomBar(this.options.barData,this.options.host):renderBottomBar(defaultBarData,this.options.host);
        //显示或隐藏bottombar
        if(this.options.showBottom){
            that.addheadCss();
            bodyTarget[0].appendChild(bottombar_html);
            //添加信息
            that.addDot();
            //获取组件父元素
            var barDiv = document.getElementById('bottombar');
            //添加css
            that.addCss(barDiv)
            //显示导航
            that.show(barDiv);
            //获取数据
            if(that.options.callback&&typeof(that.options.callback)=='function'){
                that.options.callback(barDiv);
            };
        }else{
            that.hide(barDiv);
        }
    };
    BottomBar.prototype.hide=function(obj){
        obj.style.display = "none";
    };
    BottomBar.prototype.show=function(obj){
        obj.style.display = "block";
    };
    BottomBar.prototype.addCss = function(obj){
        var ulDom = obj.getElementsByTagName('ul');
        var liDom = obj.getElementsByClassName('bbar');
        var aDom = obj.getElementsByTagName('a');
        var dot = obj.getElementsByClassName('dot');
        var cir = obj.getElementsByClassName('circle');
        addCss(obj,{'width':this.options.width,'height':'37px','zIndex':'999','background':'rgba(0,0,0,.5)','borderTop':'1px solid #e5e5e5','position':'fixed','borderRadius':'5px','bottom':this.options.bottom,'left':this.options.left});
        addCss(ulDom,{'listStyle':'none','padding':'0','margin':'0'});
        addCss(liDom,{'listStyle':'none','cssFloat':'left','width':'33%','position':'relative'});
        addCss(aDom,{'color':'#fff','textDecoration':'none','display':'inline-block','width':'100%','textAlign':'center','paddingTop':'5px'});
        addCss(dot,{'display':'none','background':'#ff4b55','minWidth':'5px','height':'5px','color':'#fff','borderRadius':'18px','position':'absolute','top':'6px','right':'13px','text-align':'center','fontSize':'12px'});
        addCss(cir,{'top':'2px','right':'2px','minWidth':'18px','height':'18px','lineHeight':'18px'});
    };
    BottomBar.prototype.addheadCss=function(obj){
        var styleDom = document.createElement('style');
        var head = document.getElementsByTagName('head');
        styleDom.innerHTML+='@font-face{font-family: "iconfont";src: url("//at.alicdn.com/t/font_1440575380_8851519.eot");src: url("//at.alicdn.com/t/font_1440575380_8851519.eot?#iefix") format("embedded-opentype"),url("//at.alicdn.com/t/font_1440575380_8851519.woff") format("woff"),url("//at.alicdn.com/t/font_1440575380_8851519.ttf") format("truetype"),url("//at.alicdn.com/t/font_1440575380_8851519.svg#iconfont") format("svg");}';
        styleDom.innerHTML+='.iconfont{font-family:"iconfont" !important;font-size:26px;font-style:normal; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; -moz-osx-font-smoothing: grayscale;color: #fff;}'
        head[0].appendChild(styleDom);
    };
    BottomBar.prototype.addDot=function(){
        var bottombar = document.getElementById('bottombar');
        var redCircle=document.createElement('span');
        redCircle.className = 'dot circle';
        var cart=bottombar.getElementsByClassName("bbar")[1];
        cart.appendChild(redCircle);
        var redDot=document.createElement('span');
        redDot.className= 'dot';
        var user=bottombar.getElementsByClassName("bbar")[2];
        user.appendChild(redDot);
    };

    // export
    lib.ushopBottomBar = BottomBar;
    // window.onload =function(){
    //     new BottomBar({
    //         showBottom:true,
    //         host: "ushop.feed.9t2.net",
    //         width: '150px',
    //         bottom: '8px',
    //         left: '7px',
    //         callback: function(obj){
    //             //获取是否需要红点
    //             var orderNum =lib.storage.get('order_num');
    //             var cartNum = lib.storage.get('cart_num');
    //             var dot = obj.getElementsByClassName('dot');
    //             if(orderNum>0){
    //                 dot[1].style.display='block';
    //             };
    //             if(cartNum>0){
    //                 dot[0].innerText = cartNum;
    //                 dot[0].style.display='block';
    //             }
    //         }
    //     });
    // }
})(window['lib'] || (window['lib'] = {}));