import { action, computed, observable, runInAction, transaction, isObservableArray } from 'mobx'

export class MainStore {
    @observable counter = 0
    @observable simpleArray = []
    
}