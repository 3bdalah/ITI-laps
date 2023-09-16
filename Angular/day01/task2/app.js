var Counter = /** @class */ (function () {
    function Counter(initialValue) {
        if (initialValue === void 0) { initialValue = 0; }
        this.counterValue = initialValue;
    }
    Counter.prototype.increase = function () {
        this.counterValue++;
        this.updateCounterDisplay();
    };
    Counter.prototype.decrease = function () {
        this.counterValue--;
        this.updateCounterDisplay();
    };
    Counter.prototype.reset = function () {
        this.counterValue = 0;
        this.updateCounterDisplay();
    };
    Counter.prototype.updateCounterDisplay = function () {
        var counterDisplayElement = document.getElementById("counter-display");
        if (counterDisplayElement) {
            counterDisplayElement.textContent = "Counter Value: " + this.counterValue;
        }
    };
    return Counter;
}());
var counterInstance = new Counter();
var increaseBtn = document.getElementById("increase-btn");
if (increaseBtn) {
    increaseBtn.addEventListener("click", function () {
        counterInstance.increase();
    });
}
var decreaseBtn = document.getElementById("decrease-btn");
if (decreaseBtn) {
    decreaseBtn.addEventListener("click", function () {
        counterInstance.decrease();
    });
}
var resetBtn = document.getElementById("reset-btn");
if (resetBtn) {
    resetBtn.addEventListener("click", function () {
        counterInstance.reset();
    });
}
