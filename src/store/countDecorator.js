import { observable, action, makeObservable } from 'mobx';

export default class countDecorator {
  @observable number = 0;
  @observable name = '';
  
  constructor() {
    makeObservable(this)
  }

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }

  @action addNick = (nickName) => {
    const {target:{value}}= nickName;
    this.name = value
  }
}