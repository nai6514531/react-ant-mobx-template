import { observable, action } from 'mobx'

class TestStore {

    @observable name = "test"

    @action
    Login() {
        if (this.name === "test") {
            this.name = "wen"
        } else {
            this.name = "test"
        }
    }
}

export default new TestStore();