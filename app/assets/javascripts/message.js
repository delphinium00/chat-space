$(function(){
  var buildHTML = function(message) {
    if (message.content && message.image) {
      var html = `<div class="message" data-message-id=` + message.id + `>` +
        `<div class="message__upper-info">` +
          `<div class="message__upper-info__talker">` +
            message.user_name +
          `</div>` +
          `<div class="message__upper-info__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="message-content">` +
          `<p class="message-content__text">` +
            message.content +
          `</p>` +
          `<img src="` + message.image + `" class="message-content__image" >` +
        `</div>` +
      `</div>`
    } else if (message.content) {
      var html = `<div class="message" data-message-id=` + message.id + `>` +
        `<div class="message__upper-info">` +
          `<div class="message__upper-info__talker">` +
            message.user_name +
          `</div>` +
          `<div class="message__upper-info__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="message-content">` +
          `<p class="message-content__text">` +
            message.content +
          `</p>` +
        `</div>` +
      `</div>`
    } else if (message.image) {
      var html = `<div class="message" data-message-id=` + message.id + `>` +
        `<div class="message__upper-info">` +
          `<div class="message__upper-info__talker">` +
            message.user_name +
          `</div>` +
          `<div class="message__upper-info__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="message-content">` +
          `<img src="` + message.image + `" class="message-content__image" >` +
        `</div>` +
      `</div>`
    };
    return html;
  };
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.messages').append(html);
       $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});      
       $('form')[0].reset();
       $('.submit-btn').attr('disabled', false);
     })
      .fail(function(){
        alert("メッセージ送信に失敗しました");
      });
      return false;
  });
});

var reloadMessages = function() {
  var last_message_id = $('.message:last').data("message-id");
  $.ajax({
    url: "api/messages",
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id}
  })
  .done(function(messages) {
    console.log('success');
  })
  .fail(function() {
    alert('error');
  });
};
