
const names = (state = {}, action) => {
  switch (action.type) {
    case 'NAMES_LOAD_SUCCESS':

      return {...state, names: action.names};
    case 'GENERATE_NAMES':
      if(state.appName){

        let result = state.names.map((name) => {
          return name.nameType.name === 'suffix' ? `${state.appName}${name.value}` : `${name.value}${state.appName}`;
        })
        return {...state, possibleNames: result, selectedNames: []};
      }
      return state;

  case 'SET_APP_NAME':
    return {...state, appName: action.appName};

  case 'SELECT_GENERATED_NAME':
    let index = state.selectedNames ? state.selectedNames.indexOf(action.name) : -1;
    if(index >= 0){
      let newNames = [...state.selectedNames]
      newNames.splice(index, 1);
      return {...state, selectedNames: newNames};
    }
    let selectedNames = state.selectedNames ? [...state.selectedNames] : [];
    selectedNames.push(action.name);
    return {...state, selectedNames};

  case 'ANALYZE_NAMES_SUCCESS':
    return {...state, analysis: action.analysis, possibleNames: []}

  default:
    return state;
  }
}
export default names;
