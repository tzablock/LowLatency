import Actor from '../../components/Actor';
import { createEditStatusAction, createActorNameAction, createActorListAction, updateActorListAction, createActorNameInjectAction, createActorIdToEditAction, createActorSurnameInjectAction, createInjectStatusAction, createDeletionStatusAction } from '../../actions/actor';
import { connect } from 'react-redux'
import {get, insert, del, edit} from './rest'

const setActors = dispatch => actors => dispatch(createActorListAction(actors))
const updateActors = dispatch => actorId => dispatch(updateActorListAction(actorId))
const setInjectStatus = dispatch => status => dispatch(createInjectStatusAction(status))
const setDeletionStatus = dispatch => status => dispatch(createDeletionStatusAction(status))
const setUpdateStatus = dispatch => status => dispatch(createEditStatusAction(status))


const setNameToState = dispatch => {
return {
  setSearchName: name => {dispatch(createActorNameAction(name))},
  setInjectName: name => {dispatch(createActorNameInjectAction(name))},
  setInjectSurname: name => {dispatch(createActorSurnameInjectAction(name))},
  setActorIdToEdit: id => {dispatch(createActorIdToEditAction(id))},
  requestActorsByName: name => {get(name)(setActors(dispatch))},
  injectNewActor: (name, surname) => {insert(name, surname)(setInjectStatus(dispatch))},
  editActor: (id, name, surname) => {edit(id, name, surname)(setUpdateStatus(dispatch))},
  deleteActorById: (actorId) => {del(actorId)(setDeletionStatus(dispatch))(updateActors(dispatch))}
}
}

const mapNameToState = state => {
return {
  searchName: state.searchName,
  injectName: state.injectName,
  injectSurname: state.injectSurname,
  actorIdToEdit: state.actorIdToEdit,
  injectStatus: state.injectStatus,
  deleteStatus: state.deleteStatus,
  actors: state.actors,
  editStatus: state.editStatus
}
}

const ActorRedux = connect(mapNameToState, setNameToState)(Actor)

export default ActorRedux



