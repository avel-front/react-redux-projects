import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['bad', 'example', 'spam']

export function forbiddenWordsMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Спам является нарушением пользовательского соглашения.'))
                }
            }
            return next(action)
        }
    }
}