"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locks = [];
var initClientY;
var documentListenerAdded = false;
const preventDefault = (e) => {
    if (e.cancelable)
        e.preventDefault();
};
const initPos = (e) => {
    if (e.targetTouches.length === 1) {
        initClientY = e.targetTouches[0].clientY;
    }
};
function isToBottomScroll(element) {
    var maxScroll = element.scrollHeight - element.clientHeight;
    return element.scrollTop + 1 >= maxScroll ? true : false;
}
function touchmove(e, element) {
    console.log(e, element);
    if (e.targetTouches.length === 1) {
        var scrolldir = e.targetTouches[0].clientY - initClientY;
        if (scrolldir > 0 && element.scrollTop === 0) {
            preventDefault(e);
            return;
        }
        if (scrolldir < 0 && isToBottomScroll(element)) {
            preventDefault(e);
            return;
        }
        e.stopPropagation();
        return;
    }
}
/**
 * 禁止背景滑动，dom里面可以滑动
 * @param element 滑动的dom
 */
function disableDodyScroll(element) {
    if (element) {
        if (locks.some(lock => lock === element)) {
            return;
        }
        locks.push(element);
        element.addEventListener('touchstart', initPos, { passive: false });
        element.addEventListener('touchmove', (e) => {
            touchmove(e, element);
        }, { passive: false });
    }
    if (!documentListenerAdded) {
        document.addEventListener('touchmove', preventDefault, { passive: false });
        documentListenerAdded = true;
    }
}
/**
 * 移除禁止背景滑动的事件
 * @param element dom
 */
function enableBodyScroll(element) {
    if (element) {
        element.ontouchstart = null;
        element.ontouchmove = null;
        element.removeEventListener('touchstart', initPos);
        element.removeEventListener('touchmove', (e) => {
            touchmove(e, element);
        });
        var idx = locks.indexOf(element);
        if (idx != -1) {
            locks.splice(idx, 1);
        }
    }
    if (locks.length === 0 && documentListenerAdded) {
        document.removeEventListener('touchmove', preventDefault);
    }
}
/**
 * 移除所有监听
 */
function clearAllBodyScrollLocks() {
    locks.forEach((element) => {
        element.ontouchstart = null;
        element.ontouchmove = null;
    });
    if (documentListenerAdded) {
        document.removeEventListener('touchmove', preventDefault);
        documentListenerAdded = false;
    }
    locks = [];
    initClientY = -1;
}
;
/**
 * 禁止dom滑动
 * @param element 要禁止的dom
 */
function lockScroll(element) {
    if (locks.some(lock => lock === element)) {
        return;
    }
    element.addEventListener('touchmove', preventDefault, { passive: false });
}
/**
 * 允许dom滑动
 * @param element 允许的dom
 */
function allowScroll(element) {
    element.removeEventListener('touchmove', preventDefault);
    var idx = locks.indexOf(element);
    if (idx != -1) {
        locks.splice(idx, 1);
    }
}
exports.default = {
    disableDodyScroll: disableDodyScroll,
    enableBodyScroll: enableBodyScroll,
    clearAllBodyScrollLocks: clearAllBodyScrollLocks,
    lockScroll: lockScroll,
    allowScroll: allowScroll
};
