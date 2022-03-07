const API = {
  async getRecentWorkout() {
    let response;
    try {
      response = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const jsonRes = await response.json();

    return jsonRes[jsonRes.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const response = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const jsonRes = await response.json();

    return jsonRes;
  },
  async createWorkout(data = {}) {
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const jsonRes = await response.json();

    return jsonRes;
  },

  async getWorkoutsInRange() {
    const response = await fetch(`/api/workouts/range`);
    const jsonRes = await response.json();

    return jsonRes;
  },
};
