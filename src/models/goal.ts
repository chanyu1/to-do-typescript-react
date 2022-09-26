class Goal {
  id: string;
  text: string;

  constructor(goalText: string) {
    this.id = new Date().toISOString();
    this.text = goalText;
  }
}

export default Goal;
