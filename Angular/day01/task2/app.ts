class Counter {
  private counterValue: number;

  constructor(initialValue: number = 0) {
    this.counterValue = initialValue;
  }

  increase() {
    this.counterValue++;
    this.updateCounterDisplay();
  }

  decrease() {
    this.counterValue--;
    this.updateCounterDisplay();
  }

  reset() {
    this.counterValue = 0;
    this.updateCounterDisplay();
  }

  private updateCounterDisplay() {
    const counterDisplayElement = document.getElementById("counter-display");
    if (counterDisplayElement) {
      counterDisplayElement.textContent = `Counter Value: ${this.counterValue}`;
    }
  }
}

const counterInstance = new Counter();

const increaseBtn = document.getElementById("increase-btn");
if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    counterInstance.increase();
  });
}

const decreaseBtn = document.getElementById("decrease-btn");
if (decreaseBtn) {
  decreaseBtn.addEventListener("click", () => {
    counterInstance.decrease();
  });
}

const resetBtn = document.getElementById("reset-btn");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    counterInstance.reset();
  });
}
