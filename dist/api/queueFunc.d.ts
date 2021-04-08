declare type FuncWithNext = (next: () => void) => void;
declare class QueueFunc {
    private queues;
    private popEndCb;
    private canShow;
    constructor();
    runNext(): void;
    add(func: FuncWithNext, isAddToTop?: boolean): void;
    clear(): void;
    lastCbFunc(): void;
    showPopUI(cb: () => void): void;
    next(): void;
}
export default QueueFunc;
