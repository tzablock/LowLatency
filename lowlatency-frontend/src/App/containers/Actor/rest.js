
export const get = (name) => (setActors) => {
   const HOST = "http://localhost:8080"
   const PATH = "/actor-by-first-name"
   fetch(HOST + PATH + "/" + name,
        {
        method: 'GET'
        })
       .then(res => res.json())
       .then(data => setActors(data))
       .catch(err => console.log(err))
   }
export const insert = (name, surname) => (setInjectStatus) => {
   const HOST = "http://localhost:8080"
   const PATH = "/new-actor"
   fetch(HOST + PATH,
   {
   method: 'POST',
   body: JSON.stringify({actorId: null, firstName: name, lastName: surname, lastUpdate: null}),
   headers: {"Content-Type": "application/json"}
   })
   .then(res => res.json())
   .then(res => setInjectStatus(res))
   .catch(err => console.log(err))
}

export const del = (actorId) => (setDeletionStatus) => (updateActors) => {
   const HOST = "http://localhost:8080"
   const PATH = "/delete-actor"
   fetch(HOST + PATH + "/" + actorId,
   {
   method: 'DELETE',
   })
   .then(res => res.json())
   .then(res => {setDeletionStatus(res); return res;})
   .then(res => updateActors(parseInt(res.actorId)))
   .catch(err => console.log(err))
}

export const edit = (actorId, name, surname) => (setUpdateStatus) => {
    const HOST = "http://localhost:8080"
    const PATH = "/edit-actor"
    fetch(HOST + PATH,
    {
    method: 'POST',
    body: JSON.stringify({actorId: actorId, firstName: name, lastName: surname, lastUpdate: null}),
    headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(res => setUpdateStatus(res))
    .catch(err => console.log(err))
}
