import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { addSearchName,addListOfActors,addInjectName,addInjectSurname, addInjectStatus, addDeletionStatus } from './actor'

const combinedReducers = combineReducers({
                            searchName: addSearchName,
                            injectName: addInjectName,
                            injectSurname: addInjectSurname,
                            injectStatus: addInjectStatus,
                            deleteStatus: addDeletionStatus,
                            actors: addListOfActors
                         })

const store = createStore(combinedReducers)
export default store