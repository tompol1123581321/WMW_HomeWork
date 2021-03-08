import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { ocupationReducer } from "./reducers/ocupationsReducer"
import { ocupations } from "./ocupations"

const initialState = {
	ocupations: ocupations,
}
const middleware = [thunk]
const store = createStore(
	ocupationReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
