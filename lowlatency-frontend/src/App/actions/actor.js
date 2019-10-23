export const ACTOR_NAME_TO_GET = 'ACTOR.NAME.TO.GET';
export const LIST_OF_ACTORS = 'ACTOR.LIST.FROM.SERVER';
export const ACTOR_NAME_TO_INJECT = "ACTOR.NAME.TO.INJECT";
export const ACTOR_SURNAME_TO_INJECT = "ACTOR.SURNAME.TO.INJECT";
export const INJECT_STATUS = "INJECT.STATUS";
export const DELETE_STATUS = "DELETE.STATUS";
export const UPDATE_LIST_OF_ACTORS = "UPDATE.LIST.OF.ACTORS";
export const ACTOR_ID_TO_EDIT = "ACTOR.ID.TO.EDIT";
export const EDIT_STATUS = "EDIT.STATUS";


export const createActorNameAction = name => {
    return {
    type: ACTOR_NAME_TO_GET,
    name: name
    }
};

export const createActorNameInjectAction = name => {
    return {
    type: ACTOR_NAME_TO_INJECT,
    name: name
    }
}

export const createActorSurnameInjectAction = surname => {
    return {
    type: ACTOR_SURNAME_TO_INJECT,
    name: surname
    }
}

export const createInjectStatusAction = status => {
    return {
    type: INJECT_STATUS,
    status: status
    }
}

export const createDeletionStatusAction = status => {
    return {
    type: DELETE_STATUS,
    status: status
    }
}

export const createEditStatusAction = status => {
    return {
    type: EDIT_STATUS,
    status: status
    }
}

export const createActorListAction = actors => {
    return {
    type: LIST_OF_ACTORS,
    actors: actors
    }
};

export const updateActorListAction = deletedActorId => {
    return {
    type: UPDATE_LIST_OF_ACTORS,
    deletedActorId: deletedActorId
    }
};

export const createActorIdToEditAction = id => {
    return {
    type: ACTOR_ID_TO_EDIT,
    actorIdToEdit: id
    }
}