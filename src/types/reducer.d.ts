export interface Action {
  type: 'SET_TIME' | 'SET_COUNTRY' | 'SET_TYPE';
  payload: string;
}
