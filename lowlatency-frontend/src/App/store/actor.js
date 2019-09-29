import {ACTOR_NAME_TO_GET, LIST_OF_ACTORS, ACTOR_NAME_TO_INJECT, ACTOR_SURNAME_TO_INJECT, INJECT_STATUS} from '../actions/actor'

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

export function addListOfActors(state = [], action){
    switch(action.type){
        case LIST_OF_ACTORS:
            return action.actors;
        default:
            return state;
    }
}