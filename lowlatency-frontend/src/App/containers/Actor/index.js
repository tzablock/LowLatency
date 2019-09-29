import Actor from '../../components/Actor';
import { createActorNameAction, createActorListAction, createActorNameInjectAction, createActorSurnameInjectAction, createInjectStatusAction } from '../../actions/actor';
import { connect } from 'react-redux'
import {get, insert} from './rest'

const setActors = dispatch => actors => dispatch(createActorListAction(actors))
const setInjectStatus = dispatch => status => dispatch(createInjectStatusAction(status))

const setNameToState = dispatch => {
return {
  setSearchName: name => {dispatch(createActorNameAction(name))},
  setInjectName: name => {dispatch(createActorNameInjectAction(name))},
  setInjectSurname: name => {dispatch(createActorSurnameInjectAction(name))},
  requestActorsByName: name => {get(name)(setActors(dispatch))},
  injectNewActor: (name, surname) => {insert(name, surname)(setInjectStatus(dispatch))}
}
}

const mapNameToState = state => {
return {
  searchName: state.searchName,
  injectName: state.injectName,
  injectSurname: state.injectSurname,
  injectStatus: state.injectStatus,
  actors: state.actors,
}
}

const ActorRedux = connect(mapNameToState, setNameToState)(Actor)

export default ActorRedux



