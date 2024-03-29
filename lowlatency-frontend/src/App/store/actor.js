import {EDIT_STATUS, ACTOR_NAME_TO_GET,
        LIST_OF_ACTORS, ACTOR_NAME_TO_INJECT,
        ACTOR_SURNAME_TO_INJECT, INJECT_STATUS,
        DELETE_STATUS, UPDATE_LIST_OF_ACTORS,
        ACTOR_ID_TO_EDIT} from '../actions/actor'

export function addSearchName(state = '', action){
   switch(action.type){
     case ACTOR_NAME_TO_GET:
          return action.name == null ? "":action.name;
     default:
          return state;
   }
}

export function addInjectName(state = '', action) {
    switch(action.type){
      case ACTOR_NAME_TO_INJECT:
          return action.name == null ? "": action.name;
      default:
          return state;
    }
}

export function addInjectSurname(state = '', action) {
    switch(action.type){
      case ACTOR_SURNAME_TO_INJECT:
          return action.name == null ? "": action.name;
      default:
          return state;
    }
}

export function addInjectStatus(state = {"success":true,"errorMessage":""}, action) {
    switch(action.type){
       case INJECT_STATUS:
           return action.status;
        default:
           return state;
    }
}

export function addDeletionStatus(state = {"success":true,"errorMessage":"","actorId":""}, action) {
    switch(action.type){
       case DELETE_STATUS:
           return action.status;
        default:
           return state;
    }
}

export function addEditionStatus(state = {"success":true,"errorMessage":"","actorId":""}, action) {
    switch(action.type){
       case EDIT_STATUS:
           return action.status;
        default:
           return state;
    }
}

export function addListOfActors(state = [], action){
    switch(action.type){
        case LIST_OF_ACTORS:
            return action.actors;
        case UPDATE_LIST_OF_ACTORS:
            return state.filter(a => a.actorId !== action.deletedActorId);
        default:
            return state;
    }
}

export function addActorIdToEdit(state = "", action){
    switch(action.type){
        case ACTOR_ID_TO_EDIT:
            return action.actorIdToEdit;
        default:
            return state;
    }
}