import NameService from '../services/names';

export function getNamesSuccess(names) {
  return {
    type: 'NAMES_LOAD_SUCCESS',
    names
  };
}

export function getNames() {
  return async (dispatch) => {
    const names = await NameService.get();
    dispatch(getNamesSuccess(names));
  }
}

export function generateNames() {
  return {
    type: 'GENERATE_NAMES'
  };
}

export function setAppName(appName) {
  return {
    type: 'SET_APP_NAME',
    appName
  }
};

export function selectGeneratedName(name) {
  return {
    type: 'SELECT_GENERATED_NAME',
    name
  }
}

export function analyzeNames(names) {

  return async (dispatch) => {
    const result = await NameService.analyze(names);
    dispatch(analyzeNamesSuccess(result));
  }
}

export function analyzeNamesSuccess(analysis) {
  return {
    type: 'ANALYZE_NAMES_SUCCESS',
    analysis
  };
}
