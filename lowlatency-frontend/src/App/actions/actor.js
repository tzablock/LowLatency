
export const ACTOR_NAME_TO_GET = 'ACTOR.NAME.TO.GET';
export const LIST_OF_ACTORS = 'ACTOR.LIST.FROM.SERVER';
export const ACTOR_NAME_TO_INJECT = "ACTOR.NAME.TO.INJECT";
export const ACTOR_SURNAME_TO_INJECT = "ACTOR.SURNAME.TO.INJECT";
export const INJECT_STATUS = "INJECT.STATUS";

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

export const createActorListAction = actors => {
    return {
    type: LIST_OF_ACTORS,
    actors: actors
    }
};