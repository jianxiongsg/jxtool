
type FuncWithNext = (next: () => void) =>  void;
class QueueFunc {
    private queues: FuncWithNext[];
    private popEndCb:()=>void;
    private canShow:boolean;
    constructor() {
        this.queues = [];
        this.runNext = this.runNext.bind(this);
    }
    public runNext() {
        this.queues.shift();
        this.next();
    }
    public add(func: FuncWithNext,isAddToTop:boolean = false) {
        const isFirst = this.queues.length === 0;
        if(isAddToTop){
            this.queues.unshift(func)
        }else{
            this.queues.push(func);
        }
        if (isFirst && this.canShow) {
            this.next();
        }
    }
    public clear() {
        this.queues = [];
    }
    public lastCbFunc() {
        // 每当队列元素为0的时候调用一次
        // 不可重复调用
        if(this.popEndCb){
            this.popEndCb();
            this.popEndCb = null;
            this.canShow = true;
        }
    }
    public showPopUI(cb:()=>void){
        this.popEndCb = cb;
        this.next();
    }
    public next() {
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

export default QueueFunc;