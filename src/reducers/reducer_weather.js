/**
 * Created by yuriyreva on 30.05.17.
 */
import {FETCH_WEATHER} from '../constants/Api';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}