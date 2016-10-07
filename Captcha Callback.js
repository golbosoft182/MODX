// Captcha Callback
var CaptchaCallback = function(){
  if(jQuery("#head-captcha").length){
    jQuery("#head-captcha .captcha").attr('id', 'captcha1');
    grecaptcha.render('captcha1', {'sitekey' : '6LdBjhETAAAAACApYh27MaaB6r9O2Y_pX9H1xG6X'});
  }
  if(jQuery("#content-captcha").length){
    jQuery("#content-captcha .captcha").attr('id', 'captcha2');
    grecaptcha.render('captcha2', {'sitekey' : '6LdBjhETAAAAACApYh27MaaB6r9O2Y_pX9H1xG6X'});
  }
};