import React from 'react'
//split on actor browsing and actor board  and pass from browsing actors into board
class Actor extends React.Component {
  render(){
    return    (
                 <div>
                     <ActorBrowser setSearchName={this.props.setSearchName} requestActorsByName={this.props.requestActorsByName} searchName={this.props.searchName}/>
                     <ActorBoard actors={this.props.actors} deleteActorById={this.props.deleteActorById} deleteStatus={this.props.deleteStatus}/>
                     <ActorInject setInjectName={this.props.setInjectName} setInjectSurname={this.props.setInjectSurname}
                                  injectNewActor={this.props.injectNewActor} injectStatus={this.props.injectStatus}
                                  editActor={this.props.editActor} actorIdToEdit={this.props.actorIdToEdit} setActorIdToEdit={this.props.setActorIdToEdit}
                                  editStatus={this.props.editStatus}
                                  injectName={this.props.injectName} injectSurname={this.props.injectSurname}/>
                 </div>
              );
  }
}

class ActorBrowser extends React.Component {
    render(){
        return (
                 <div>
                    <h1>Search Actor By Name: </h1>
                    Find by name: <input type="text" onChange={(e) => this.props.setSearchName(e.target.value)}/>
                    <button onClick = {() => this.props.requestActorsByName(this.props.searchName)}>Find Actor</button>
                 </div>
        )
    }
}

class ActorBoard extends React.Component {
    render(){
        return (
                <div>
                   <h1>List Found Actors:</h1>
                   {this.props.actors.map(a => <li key={a.actorId}>{a.actorId}:{a.firstName} {a.lastName} Last update:{a.lastUpdate}
                                               <button type="button" onClick={() => this.props.deleteActorById(a.actorId)}>DELETE</button></li>)}
                <b>{this.props.deleteStatus.success? "You can delete or modify actor." : this.props.deleteStatus}</b>
                <b>{this.props.deleteStatus.actorId === "" ? "" : "Last deleted actor id was:" + this.props.deleteStatus.actorId}</b>
                </div>
        )
    }
}

class ActorInject extends React.Component {
    render(){
        return (
                <div>
                    <h1>Create New Actor: </h1>
                    <ActorId setActorIdToEdit={this.props.setActorIdToEdit} />
                    <FirstNameInject setInjectName={this.props.setInjectName} />
                    <LastNameInject setInjectSurname={this.props.setInjectSurname} />
                    <button onClick={() => this.props.injectNewActor(this.props.injectName, this.props.injectSurname)}>Inject Actor</button>
                    <button onClick={() => this.props.editActor(this.props.actorIdToEdit, this.props.injectName, this.props.injectSurname)}>Edit Actor</button>
                    {!this.props.injectStatus.success ?
                                     <div><b>{this.props.injectStatus.errorMessage}</b></div>
                                                      :
                                     <div><b>Inject next record.</b></div>}
                    {!this.props.editStatus.success ?
                                     <div><b>{this.props.editStatus.errorMessage}</b></div>
                                                      :
                                     this.props.editStatus.actorId ?
                                     <div><b>Actor with id: {this.props.editStatus.actorId} edited.</b></div>
                                                      : ""}
                </div>
        )
    };
}

class ActorId extends React.Component{
    render(){
        return (
                <div>
                    <p>Id (only for edit):</p>
                    <input type="text" onChange={(e) => {this.props.setActorIdToEdit(e.target.value)}}/>
                </div>
        )
    }
}

class FirstNameInject extends React.Component {
    render(){
        return (
                <div>
                    <p>First Name:</p>
                    <input type="text" onChange={(e) => {this.props.setInjectName(e.target.value)}}/>
                </div>
        )
    }
}

class LastNameInject extends React.Component {
    render(){
        return (
                <div>
                    <p>Last Name:</p>
                    <input type="text" onChange={(e) => {this.props.setInjectSurname(e.target.value)}}/>
                </div>
        )
    }
}

export default Actor