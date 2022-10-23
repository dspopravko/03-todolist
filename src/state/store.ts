import {tasksActionType, tasksReducer} from "./tasks-reducer";
import {todolistActionType, todolistReducer} from "./todolist-reducer";
import {combineReducers, legacy_createStore, Store} from 'redux'

export type ActionTypes = tasksActionType | todolistActionType
export type ReduxStateType = ReturnType<typeof rootReducer>
export type StoreType = Store<ReduxStateType, ActionTypes>

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistReducer
})

export const store: StoreType = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store