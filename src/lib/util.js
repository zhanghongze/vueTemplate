// 获取端上通过 url 传过来的参数，包括 header 字段和附加参数
function getParamsByUrl() {
    var url = document.location.href;
    var splitIndex = url.lastIndexOf("?") + 1;
    var paramStr = url.substr(splitIndex, url.length);
    var arr = decodeURI(paramStr).split('&');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      var kv = arr[i].split('=');
      obj[kv[0]] = kv[1];
    }
    return obj
  }
  const util = {
    paramsFromUrl: getParamsByUrl(),
  }
  
  export default util