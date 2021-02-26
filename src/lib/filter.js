import Vue from 'vue'
Date.prototype.Format = function (fmt) {    //时间戳封装  过滤器
  var o = {
    "y+": this.getFullYear(),
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()

  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
Vue.filter('formatMonthDay', value => {
  let t = value ? new Date(value).Format('MM-dd') : ''
  return t
})
Vue.filter('formatMonthDayTime', value => {
  let t = value ? new Date(value).Format('MM-dd hh:mm') : ''
  return t
})
Vue.filter('formatTime', value => {
  let t = value ? new Date(value).Format('yyyy-MM-dd hh:mm') : ''
  return t
})
Vue.filter('formatTimed', value => {
  let t = value ? new Date(value).Format('yyyy.MM.dd hh:mm') : ''
  return t
})
Vue.filter('formatAll', value => {
  let t = value ? new Date(value).Format('yyyy.MM.dd hh:mm:ss') : ''
  return t
})
Vue.filter('minuteSecond', value => {
  let t = value ? new Date(value).Format('hh:mm') : ''
  return t
})
Vue.filter('formatPrice', value => {
  let newPrice = 0
  if (value && value > 0) {
    newPrice = value / 100
    newPrice = newPrice.toFixed(2)
  }
  return newPrice
})
//时间显示问题（几天前、几分钟前）
Vue.filter('fomatTime',  value => {
  if(value){
    var newData =  Date.parse(new Date());
    var diffTime = Math.abs(newData-value);
    if (diffTime > 7 * 24 * 3600 * 1000) {
      var date = new Date(value);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('1' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return  m + '-' + d+' '+h+':'+minute;

    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // //注释("一周之内");

      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));
      return dayNum + "天前";

    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 60 * 1000));
      return dayNum + "小时前";

    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 1000));
      return dayNum + "分钟前";

    }
  }
})
//超过10个字过滤成...
Vue.filter('ellipsis', value => {
  if (!value) return ''
    if (value.length > 10) {
      return value.slice(0,10) + '...'
    }
    return value
})

