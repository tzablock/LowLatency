import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { addEditionStatus, addSearchName,
         addListOfActors,addInjectName,
         addInjectSurname, addInjectStatus,
         addDeletionStatus, addActorIdToEdit } from './actor'

const combinedReducers = combineReducers({
                            searchName: addSearchName,
                            injectName: addInjectName,
                            injectSurname: addInjectSurname,
                            actorIdToEdit: addActorIdToEdit,
                            injectStatus: addInjectStatus,
                            deleteStatus: addDeletionStatus,
                            editStatus: addEditionStatus,
                            actors: addListOfActors
                         })

const store = createStore(combinedReducers)
export default store