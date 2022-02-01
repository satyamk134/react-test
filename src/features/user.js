
const initialUserState = {
    projects:[],
    times:[]
}

export default function loginReducer(state = initialUserState, action) {
    switch (action.type) {
        
        case 'Add_PROJECT':{
            let projects = state.projects;
            projects.push(action.payload.projectName);
            return { ...state, projects: projects }
        }
        case 'ADD_TIME_TRACK':{
            let times = state.times;
            times.push(action.payload);
            return { ...state, times: times }
        }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}


