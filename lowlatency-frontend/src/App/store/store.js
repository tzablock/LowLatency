import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { addSearchName,addListOfActors,addInjectName,addInjectSurname, addInjectStatus } from './actor'

const combinedReducers = combineReducers({
                            searchName: addSearchName,
                            injectName: addInjectName,
                            injectSurname: addInjectSurname,
                            injectStatus: addInjectStatus,
                            actors: addListOfActors
                         })

const store = createStore(combinedReducers)
export default store