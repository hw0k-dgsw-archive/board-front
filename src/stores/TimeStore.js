import { observable as Observable, action as Action, computed as Computed } from 'mobx';

class TimeStore {
  static __instance = null;
  static getInstance() {
    if (TimeStore.__instance === null) {
      TimeStore.__instance = new TimeStore();
    }
    return TimeStore.__instance;
  }
  constructor() {
    TimeStore.__instance = this;
  }

  @Observable
  currentTime = null;

  @Computed
  get ms() {
    return this.currentTime
      ? this.currentTime.getMilliseconds()
      : 'not set';
  }

  @Action
  getTime = async () => {
    this.currentTime = await new Date();
  };


}

export default TimeStore.getInstance();
