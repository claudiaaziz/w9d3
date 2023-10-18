import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton
      toggleButton.addEventListener("click", (event) => this.handleClick(event));
  }

  async handleClick(event) {
    event.preventDefault()
    const button = event.target
    const userId = button.dataset.userId
    const followState = button.dataset.followState
    // debugger
    // fetch()
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}