"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueueFunc {
    constructor() {
        this.queues = [];
        this.runNext = this.runNext.bind(this);
    }
    runNext() {
        this.queues.shift();
        this.next();
    }
    add(func, isAddToTop = false) {
        const isFirst = this.queues.length === 0;
        if (isAddToTop) {
            this.queues.unshift(func);
        }
        else {
            this.queues.push(func);
        }
        if (isFirst && this.canShow) {
            this.next();
        }
    }
    clear() {
        this.queues = [];
    }
    lastCbFunc() {
        // 每当队列元素为0的时候调用一次
        // 不可重复调用
        if (this.popEndCb) {
            this.popEndCb();
            this.popEndCb = null;
            this.canShow = true;
        }
    }
    showPopUI(cb) {
        this.popEndCb = cb;
        this.next();
    }
    next() {
        if (this.queues.length === 0) {
            if (this.lastCbFunc) {
                this.lastCbFunc();
            }
            return;
        }
        const func = this.queues[0]; // this.queues.shift();
        func(this.runNext);
    }
}
exports.default = QueueFunc;
