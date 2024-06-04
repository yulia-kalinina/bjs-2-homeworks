class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    let allValues = Object.values(this.alarmCollection);
    for (let i = 0; i < allValues.length; i++) {
      if (allValues[i] === time) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }

    for (let i = 0; i < this.alarmCollection.length; i++) {
      if ("canCall" in this.alarmCollection[i]) {
        this.alarmCollection[i].canCall = true;
      }
    }

    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: callback(),
    });
  }

  removeClock(time) {
    if (time === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm[time] !== time
    );
  }

  getCurrentFormattedTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let formattedTime = hours + ":" + minutes;
    return formattedTime;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    let resultOfInterval = setInterval(() => {
      this.alarmCollection.forEach((element) => {
        if (
          element[time] === this.getCurrentFormattedTime() &&
          element.canCall === true
        ) {
          element.canCall = false;
          element.callback();
        }
      });
    }, 1000);

    this.intervalId = resultOfInterval;
  }

  stop() {
    clearInterval(intervalId);
    intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => {
      element.canCall = true;
    });
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}
