"use strict";

var uuid4 = function() {
  //// return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  var uuid = '',
    ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += (Math.random() * 16 | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += (Math.random() * 4 | 8).toString(16);
        break;
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
    }
  }
  return uuid;
};



const Flex4Apps = function(endPoint){
  this.endPoint = endPoint;
  this.userId = uuid4();
}

Flex4Apps.prototype.identify = function (userId) {
  this.userId = userId;
}

Flex4Apps.prototype.track = function(event, metaData, cb) {
  const postData = {
    user: {
      id: this.userId, 
      role_id: 9,
      default_language_id: 1,
    },
    event: event, 
    metaData: metaData
  };
  $.ajax({
    type: 'POST',
    url: this.endPoint + '/event',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify(postData),
    success: function(data, status){cb (data, status)}});
}
