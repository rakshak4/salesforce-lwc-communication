import { LightningElement } from "lwc";

export default class Controls extends LightningElement {
  factors = [1, 2, 3, 4, 5, 6, 7, 8];

  handleAdd() {
    this.dispatchEvent(new CustomEvent("add"));
  }

  handleSubtract() {
    this.dispatchEvent(new CustomEvent("subtract"));
  }

  handleMultiply(event) {
    const factor = event.target.dataset.factor;
    this.dispatchEvent(
      new CustomEvent("multiply", {
        detail: factor
      })
    );
  }
}
