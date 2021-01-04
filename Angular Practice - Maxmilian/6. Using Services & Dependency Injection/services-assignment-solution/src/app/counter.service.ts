export class CounterService{
    activeTransitions: number = 0;
    inActiveTransitions: number = 0;

    toActiveTransition() {
        this.activeTransitions++;
    }

    toInActiveTransition() {
        this.inActiveTransitions++;
    }
}