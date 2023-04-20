const redux = require('redux'); 



//manage some data grace aux reducers
// et les reducers (les fonctions) produises un nouveau state snapchot qui est utlisée part les actions

// Et dois retourner le nouveau state et surtout un objet
// toujours avec le vieux state et l'action en + mais ne dois jamais avoir un http request dessus ou un truc avec le localstorage, il dois toujours
// accepter un vieux state, et le modifier au passage
// mettre un state part default car il a pas un state en premier 
const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
};


// il donnera un snapchot du state qui a été changée
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}



// permet d'executer le subsciber qui est dans le store
store.subscribe(counterSubscriber);




// le store a besoin de savoir quelle reducer on a besoin
const store = redux.createStore(counterReducer);



store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })