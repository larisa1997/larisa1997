$(document).ready(function(){
        var jVal = {
                'fullName' : function() {
                        $('body').append('<div id="nameInfo" class="info"></div>');
                        var nameInfo = $('#nameInfo');
                        var ele = $('#fullname');
                        var pos = ele.offset();
						nameInfo.css({
                                top: pos.top-3,
                                left: pos.left+ele.width()+15
                        });
                        if(ele.val().length < 6) {
                                jVal.errors = true;
                                        nameInfo.removeClass('correct').addClass('error').html('← ievadiet vismaz 6 simbolus').show();
                                        ele.removeClass('normal').addClass('wrong');
                        } else {
                                        nameInfo.removeClass('error').addClass('correct').html('+').show();
                                        ele.removeClass('wrong').addClass('normal');
                        }
                },
                'birthDate' : function (){
                        $('body').append('<div id="birthInfo" class="info"></div>');
                        var birthInfo = $('#birthInfo');
                        var ele = $('#birthday');
                        var pos = ele.offset();
                        var patt = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/i;
                        if(!patt.test(ele.val())) {
                                jVal.errors = true;
                                        birthInfo.removeClass('correct').addClass('error').html('← ievadiet datumu pareizā formatā').show();
                                        ele.removeClass('normal').addClass('wrong');
                        } else {
                                        birthInfo.removeClass('error').addClass('correct').html('+').show();
                                        ele.removeClass('wrong').addClass('normal');
                        }
                },
                'gender' : function (){
                        $('body').append('<div id="genderInfo" class="info"></div>');
                        var genderInfo = $('#genderInfo');
                        var ele = $('#woman');
                        var pos = ele.offset();
                        if($('input[name="gender"]:checked').length === 0) {
                                jVal.errors = true;
                                        genderInfo.removeClass('correct').addClass('error').html('← jus esat zens vai meitene?').show();
                                        ele.removeClass('normal').addClass('wrong');
                        } else {
                                        genderInfo.removeClass('error').addClass('correct').html('+').show();
                                        ele.removeClass('wrong').addClass('normal');
                        }
                },
                'vehicle' : function (){
                        $('body').append('<div id="vehicleInfo" class="info"></div>');
                        var vehicleInfo = $('#vehicleInfo');
                        var ele = $('#ship');
                        var pos = ele.offset();
                        if($('input[name="vehicle"]:checked').length <= 1) {
                                jVal.errors = true;
                                        vehicleInfo.removeClass('correct').addClass('error').html('← Atzīmējiet vismas divus variantus!').show();
                                        ele.removeClass('normal').addClass('wrong');
                        } else {
                                        vehicleInfo.removeClass('error').addClass('correct').html('+').show();
                                        ele.removeClass('wrong').addClass('normal');
                        }
                },
                'email' : function() {
                        $('body').append('<div id="emailInfo" class="info"></div>');
                        var emailInfo = $('#emailInfo');
                        var ele = $('#email');
                        var pos = ele.offset();
                        var patt = /^.+@.+[.].{2,}$/i;
                        if(!patt.test(ele.val())) {
                                jVal.errors = true;
                                        emailInfo.removeClass('correct').addClass('error').html('← ievadiet e-mail adresu pareizajā formatā!').show();
                                        ele.removeClass('normal').addClass('wrong');
                        } else {
                                        emailInfo.removeClass('error').addClass('correct').html('+').show();
                                        ele.removeClass('wrong').addClass('normal');
                        }
                },
                'about' : function() {
                        $('body').append('<div id="aboutInfo" class="info"></div>');
                        var aboutInfo = $('#aboutInfo');
                        var ele = $('#about');
                        var pos = ele.offset();
                        if(ele.val().length < 75) {
                                jVal.errors = true;
                                        aboutInfo.removeClass('correct').addClass('error').html('← pastastiet mazliet vairāk par sevi(minimāli 75 simboli)!').show();
                                        ele.removeClass('normal').addClass('wrong').css({'font-weight': 'normal'});
                        } else {
                                        aboutInfo.removeClass('error').addClass('correct').html('+').show();
                                        ele.removeClass('wrong').addClass('normal');
                        }
                },
                'sendIt' : function (){
                        if(!jVal.errors) {
                                $('#jform').submit();
                        }
                }
        };
		
        $('#send').click(function (){
                var obj = $.browser.webkit ? $('body') : $('html');
                obj.animate({ scrollTop: $('#jform').offset().top }, 750, function (){
                        jVal.errors = false;
                        jVal.fullName();
                        jVal.birthDate();
                        jVal.gender();
                        jVal.vehicle();
                        jVal.email();
                        jVal.about();
                        jVal.sendIt();
                });
                return false;
        });
        $('#fullname').change(jVal.fullName);
        $('#birthday').change(jVal.birthDate);
        $('input[name="gender"]').change(jVal.gender);
        $('input[name="vehicle"]').change(jVal.vehicle);
        $('#email').change(jVal.email);
        $('#about').change(jVal.about);
});