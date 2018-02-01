import { FETCH_WEATHER } from '../actions/index'

export default function (state= [],action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); we shold concat and not push old state
      return [action.payload.data , ...state ];
  }
  return state;
}
