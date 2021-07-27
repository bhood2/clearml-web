export interface ProjectRoute {
  header: 'overview' | 'models' | 'experiments';
  subHeader: string;
  permissionCheck?: string;
}

export const PROJECT_ROUTES = [
  {header: 'overview', subHeader: ''},
  {header: 'experiments', subHeader: '(ARCHIVED)'},
  {header: 'models', subHeader: '(ARCHIVED)'},
] as ProjectRoute[];

export const PROJECTS_PREFIX         = 'PROJECTS_';
export const PROJECTS_ACTIONS = {
  SET_SEARCH_QUERY                 : PROJECTS_PREFIX + 'SET_SEARCH_QUERY',
  RESET_SEARCH_QUERY               : PROJECTS_PREFIX + 'RESET_SEARCH_QUERY',
  SET_PROJECT_READY_FOR_DELETION   : PROJECTS_PREFIX + 'SET_PROJECT_READY_FOR_DELETION',
  SET_ORDER_BY                     : PROJECTS_PREFIX + 'SET_ORDER_BY',
  GET_PROJECT_BY_ID                : PROJECTS_PREFIX + 'GET_PROJECT_BY_ID',
  SET_PROJECT_BY_ID                : PROJECTS_PREFIX + 'SET_PROJECT_BY_ID',
  PROJECT_UPDATED                  : PROJECTS_PREFIX + 'PROJECT_UPDATED',
  GET_PROJECTS                     : PROJECTS_PREFIX + 'GET_PROJECTS',
  SET_PROJECTS                     : PROJECTS_PREFIX + 'SET_PROJECTS',
  PROJECTS_SUCCESS                 : PROJECTS_PREFIX + 'PROJECTS_SUCCESS',
  RESET_PROJECTS                   : PROJECTS_PREFIX + 'DELETE_PROJECT',
  CHECK_PROJECT_FOR_DELETION       : PROJECTS_PREFIX + 'CHECK_PROJECT_FOR_DELETION',
  RESET_READY_TO_DELETE            : PROJECTS_PREFIX + 'RESET_READY_TO_DELETE',
  SELECT_PROJECT                   : PROJECTS_PREFIX + 'SELECT_PROJECT',
  SELECT_ALL_PROJECTS              : PROJECTS_PREFIX + 'SELECT_ALL_PROJECTS',
  DELETE_PROJECT_SUCCESS           : PROJECTS_PREFIX + 'DELETE_PROJECT_SUCCESS',
  CREATE_PROJECT                   : PROJECTS_PREFIX + 'CREATE_PROJECT',
  CREATE_PROJECT_SUCCESS           : PROJECTS_PREFIX + 'CREATE_PROJECT_SUCCESS',
  CREATE_PROJECT_SUCCESS_OPTIMISTIC: PROJECTS_PREFIX + 'CREATE_PROJECT_SUCCESS_OPTIMISTIC',
  SELECT_PROJECT_INDEX             : PROJECTS_PREFIX + 'SELECT_PROJECT_INDEX',
  GET_PROJECTS_NON_FILTERED_LIST   : PROJECTS_PREFIX + 'GET_PROJECTS_NON_FILTERED_LIST',
  SET_PROJECTS_NON_FILTERED_LIST   : PROJECTS_PREFIX + 'SET_PROJECTS_NON_FILTERED_LIST',
  UPDATE_ONE_PROJECT               : PROJECTS_PREFIX + 'UPDATE_ONE_PROJECT',
  SET_NO_MORE_PROJECTS             : PROJECTS_PREFIX + 'SET_NO_MORE_PROJECTS',
  SET_NEXT_PAGE                    : PROJECTS_PREFIX + 'SET_NEXT_PAGE',
  ADD_TO_PROJECTS_LIST             : PROJECTS_PREFIX + 'ADD_TO_PROJECTS_LIST'
};

export const pageSize = 12;
