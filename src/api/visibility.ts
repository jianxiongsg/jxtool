var visibility = 'visible';
var timer = 0;
var watchQueue = [];

/**
 * 当前页面状态 visible 可见 hidden 不可见
*/
var getState = function () {
    return visibility;
};

var handleChange = function (event) {
    if (timer) {
      return;
    }
  
    timer = setTimeout(function () {
      watchQueue.forEach(function (cb) {
        cb && cb(event);
      });
      timer && clearTimeout(timer);
      timer = 0;
    }, 200);
};

/**
 * 监听方法
 * @param cb visibility 值 visible 可见 hidden 不可见
*/
var watch = function (cb:(visibility)=>void) {
    watchQueue.push(cb);
    if (typeof window === 'undefined') {
      return;
    }
  
    window.addEventListener('pageViewAppear', function () {
      if (visibility !== 'visible') {
        visibility = 'visible';
        handleChange('visible');
      }
    });
    window.addEventListener('pageViewDisappear', function () {
      if (visibility !== 'hidden') {
        visibility = 'hidden';
        handleChange('hidden');
      }
    });
  
    if (typeof document === 'undefined') {
      return;
    }
  
    document.addEventListener('WV.Event.APP.Background', function () {
      if (visibility !== 'hidden') {
        visibility = 'hidden';
        handleChange('hidden');
      }
    }, false);
    document.addEventListener('WV.Event.APP.Active', function () {
      if (visibility !== 'visible') {
        visibility = 'visible';
        handleChange('visible');
      }
    }, false);
    var visibilityStateName;
    var visibilityChangeEvtName;
  
    if (document.visibilityState) {
      visibilityStateName = 'visibilityState';
      visibilityChangeEvtName = 'visibilitychange'; // @ts-ignore
    } else if (document.mozVisibilityState) {
      visibilityStateName = 'mozVisibilityState';
      visibilityChangeEvtName = 'mozvisibilitychange'; // @ts-ignore
    } else if (document.msVisibilityState) {
      visibilityStateName = 'msVisibilityState';
      visibilityChangeEvtName = 'msvisibilitychange'; // @ts-ignore
    } else if (document.webkitVisibilityState) {
      visibilityStateName = 'webkitVisibilityState';
      visibilityChangeEvtName = 'webkitvisibilitychange';
    }
  
    if (visibilityStateName && visibilityChangeEvtName) {
      document.addEventListener(visibilityChangeEvtName, function () {
        var curState = document[visibilityStateName];
  
        if (visibility !== curState) {
          visibility = curState;
          handleChange(curState);
        }
      });
    }
  };

  export default {
      getState:getState,
      watch:watch
  }