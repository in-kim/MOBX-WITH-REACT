// import { action, makeObservable, observable} from "mobx";

// class Count {
//   number = 0

//   constructor() {
//     makeObservable(this, {
//       number: observable,
//       increase: action,
//       decrease: action,
//     })
//   }

//   increase = () => {
//     this.number ++
//   }
//   decrease = () => {
//     this.number --
//   }
// }

// const countStore = new Count()
// export default countStore


// ********* super나 subclassed에서는 사용이 불가
import { makeAutoObservable } from "mobx";

class Count {
  number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  increase = () => {
    this.number ++
  }
  decrease = () => {
    this.number --
  }
}

const countStore = new Count();
export default countStore