/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function ($) {
    $(function () {
        var $city = $('#form-city');
        var flag = false;
        var Fun = {
            chooseCity: function () {
                var _globle = this;
                if (!flag) {//已经加载了城市数据--一般城市数据，都是读取后端的接口数据
                    var _globle = this;
                    var htmls = '';
                    $.ajax({
                        type: "get",//请求方式
                        url: "../../json/regions.json",//请求数据来源
                        dataType: "json",//格式
                        success: function (res) {
                            var list = res; //console.log(list)
                            var htmls = '';

                            htmls += '<div class="cascade__pop-up">'
                                + '<div class="first-level__container">';
                            list.forEach(function (province) {
                                htmls += '<div class="first-level__item">';
                                htmls += '<span class="areasNamesIds" ' +
                                    'province-name="' + province.name + '" ' +
                                    'province-id="' + province.id + '">' +
                                    province.name +
                                    '<i>' +
                                    '</i>' +
                                    '</span>';
                                htmls += '</div>';
                            });
                            htmls += '</div>';
                            list.forEach(function (province) {
                                htmls += '<div keys=' + province.id + '  class="second-level__container">';
                                if (0 < province.city.length) {
                                    province.city.forEach(function (city) {
                                        htmls += '<div class="second-level__item"  city-Name=' + city.name + ' city-id=' + city.id + '>';
                                        htmls += '<span>' + city.name + '</span>';
                                        htmls += '</div>';
                                    });
                                } else {
                                    htmls += '<span>暂无数据</span>';
                                };
                                htmls += '</div>';
                            });
                            htmls += '</div>';
                            $(".cascade__container").after(htmls);//把创建的元素插入 对应的位置
                            flag = true;//表示数据初始化了，只需要加载一次数据就可以了

                            $('.first-level__item').click(function (e) {//点击省 对应的事件
                                e.stopPropagation();//阻止冒泡
                                Fun.clickThings($(this), _globle);//每次点击，调用省份点击事件
                            }); //右边城市操作
                            $('.second-level__item').on('click', function (e) {//点击城市 对应的事件
                                e.stopPropagation();//阻止冒泡
                                Fun.chooseThis($(this), _globle);//每次点击，调用城市点击事件
                            })
                        }
                    });
                }
            },
            clickThings: function (target, _this) {//省份点击事件集合
                //console.log(target)
                var provinceId = $(target).children('.areasNamesIds').attr('province-id');// 获取省份id
                _this.provinceName = $(target).children('.areasNamesIds').attr('province-name');//获取省份名字
                _this.cityName = ''; //城市名字置空 ，每次选择都需要置空
                $city.attr({ 'provinceId': provinceId, 'cityId': '' }); //把点击的省份 获取的省份信息传递给输入框那边；后面提交数据之间获取对应的属性值
                $city.val(_this.provinceName + (_this.cityName ? ' - ' : '') + _this.cityName);//把点击的省份，传递给输入框，方便用户查看点击选择的数据（可视化）
                $(target).addClass('checked').siblings().removeClass('checked');//点击之后选中状态，移除其他的节点选中状态
                $('.second-level__item').removeClass('checked');//去掉城市节点的选中状态，即清理城市状态
                $('.second-level__container').hide();//同时候城市显示状态清楚
                $('.cascade__pop-up').find('div[keys=' + provinceId + ']').show();//点击的省对应的城市列表展示
            },
            chooseThis: function (target, _this) {//城市点击事件集合
                var cityId = $(target).attr('city-id');//获取城市id
                _this.cityName = $(target).attr('city-name');//获取点击的 城市名称 console.log(cityId, _this.cityName)
                $city.attr({ 'cityId': cityId });//把城市的id属性传递给点击的输入框地方，方便后期提交用户点击的城市id
                $city.val(_this.provinceName + (_this.cityName ? ' - ' : '') + _this.cityName)//把城市传递给输入选择的地方，即可视化选择城市
                $(target).addClass('checked').siblings().removeClass('checked');//点击选择城市之后，选中当前城市，其他的城市移除选中状态
                $('.cascade__pop-up').hide();
            },
            restForms: function () {//清理按钮，清理事件
                $city.val('');//选择框置空
                $city.attr({ 'provinceid': '', 'cityid': '' });//选者框属性置空
                $('.first-level__item,.second-level__item').removeClass('checked');//把选中状态去掉
            },
            onDestroy: function (e) {
                $('.cascade__pop-up,.second-level__container').hide();//隐藏
            },
            _init: function () {//事件集合，如果多个事件需要一开始加载，都可以写下面，都会被一开始初始化就加载
                var t = this; t.chooseCity();
            }
        }
        $('#form-city').on('click', function (e) {//点击选择框
            e.stopPropagation();//阻止冒泡
            $('.cascade__pop-up').show();//展示下拉
            Fun._init();//事件初始化
        });
        $('body').on('click', function (e) {//点击body隐藏
            Fun.onDestroy();
        });
        $("#form-upload").on("click", () => {
            let formDetail = {
                name: $("#form-name").val(),
                company: $("#form-company").val(),
                tel: $("#form-tel").val(),
                size: $("#form-size").val(),
                city: $("#form-city").val(),
                introduce: $("#form-introduce").val()
            }
            let validate = true;
            for (item in formDetail) {
                if (!validateFromItem(formDetail[item], item)) {
                    validate = false;
                }
            }
            if (!validate) {
                return;
            }
            if (formDetail.tel.length < 11) {
                toastError("请输入11位手机号码");
                return;
            }
            if (!formDetail.city.split("-")[1]) {
                toastError("请选择具体城市信息");
                return;
            }

            $.ajax({
                type: "post",//请求方式
                url: "../../php/agency_add.php",//请求数据来源
                dataType: "json",//格式
                data: {
                    app_key: "7ff47887933bece366de5259b1e20a25",
                    contact: formDetail.name,
                    company: formDetail.company,
                    mobile: formDetail.tel,
                    company_size: formDetail.size,
                    city: formDetail.city,
                    description: formDetail.introduce,
                },
                success: function (res) {
                    if (res.code === 10000) {
                        $(".form-success").show();
                        $("#form-name").val("");
                        $("#form-company").val("");
                        $("#form-tel").val("");
                        $("#form-size").val("");
                        $("#form-city").val("");
                        $("#form-introduce").val("");
                        return;
                    }
                    toastError(res.msg);
                }
            });
        });

        $(".form-success .layout").on("click", () => {
            $(".form-success").hide();
        });
        $(".form-success .confirm").on("click", () => {
            $(".form-success").hide();
        });
        $(".form-info .layout").on("click", () => {
            $(".form-info").hide();
        });
        $(".form-info .confirm").on("click", () => {
            $(".form-info").hide();
        });
        $(".toast .close").on("click", () => {
            $(".toast").hide();
        });

        $(".search__btn").on("click", () => {
            if (!$(".search__input").val()) {
                toastError("请输入公司名称");
                return;
            }
            $.ajax({
                type: "get",//请求方式
                url: "../../php/agency_search.php",//请求数据来源
                dataType: "json",//格式
                data: {
                    company_name: $(".search__input").val(),
                    app_key: "7ff47887933bece366de5259b1e20a25",
                },
                success: (res) => {
                    //if (res.code === 10000 && res.data.data && res.data.data.length) {
                    if (res.code === 10000){
                        toastInfo($(".search__input").val() + "是矩阵官方授权代理商");
                        return;
                    }
                    toastInfo("对不起，暂未查到该代理商信息，请联系矩阵官方客服核实");
                },
                error: () => {
                    toastInfo("对不起，暂未查到该代理商信息，请联系矩阵官方客服核实");
                }
            });
        });

    });

    function validateFromItem(value, prop) {
        if (value === "") {
            $(".form__item--" + prop + " .form__item__error").show();
            return false;
        } else {
            $(".form__item--" + prop + " .form__item__error").hide();
            return true;
        }
    }

    function toastInfo(msg) {
        $(".form-info .content").text(msg);
        $(".form-info").show();
    }

    function toastError(msg) {
        $(".toast-error .text").text(msg);
        $(".toast-error").show();
        setTimeout(() => {
            $(".toast-error").hide();
        }, 1500)
    }
})(jQuery)
