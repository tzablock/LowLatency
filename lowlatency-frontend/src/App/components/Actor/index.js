import React from 'react'
//split on actor browsing and actor board  and pass from browsing actors into board
class Actor extends React.Component {
  render(){
    return    (
                 <div>
                     <ActorBrowser setSearchName={this.props.setSearchName} requestActorsByName={this.props.requestActorsByName} searchName={this.props.searchName}/>
                     <ActorBoard actors={this.props.actors}/>
                     <ActorInject setInjectName={this.props.setInjectName} setInjectSurname={this.props.setInjectSurname}
                                  injectNewActor={this.props.injectNewActor} injectStatus={this.props.injectStatus}
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
                   {this.props.actors.map(a => <li key={a.actorId}>{a.actorId}:{a.firstName} {a.lastName} Last update:{a.lastUpdate}</li>)}
                </div>
        )
    }
}

class ActorInject extends React.Component {
    render(){
        return (
                <div>
                    <h1>Create New Actor: </h1>
                    <FirstNameInject injectName={this.props.injectName} setInjectName={this.props.setInjectName} />
                    <LastNameInject injectSurname={this.props.injectSurname} setInjectSurname={this.props.setInjectSurname} />
                    <button onClick={() => this.props.injectNewActor(this.props.injectName, this.props.injectSurname)}>Inject Actor</button>
                    {!this.props.injectStatus.success ? <div><b>{this.props.injectStatus.errorMessage}</b></div> : <div><b>Inject next record.</b></div>}
                </div>
        )
    };
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
//value={this.props.injectName} name="input1"
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
//value={this.props.injectSurname} name="input2"

export default Actor