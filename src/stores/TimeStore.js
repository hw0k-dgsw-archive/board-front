import { observable as Observable, action as Action } from 'mobx';

class TimeStore {
  @Observable
  currentTime = null;

  @Action
  getTime = async () => {
    this.currentTime = await new Date();
  };


}

export default TimeStore;