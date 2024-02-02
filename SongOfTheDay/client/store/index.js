import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import songsReducer from './allSongsStore'
import singleSongReducer from './singleSongStore'
import mysongsReducer from './allMysongsStore'
import auth from './auth'
import usersReducer from './allUsersStore'
import singleUserReducer from './singleUserStore'
import singleMySongReducer from './singleMySongStore'
import singleQuestionReducer from './singleQuestionStore'
import questionsReducer from './allQuestionsStore'

const reducer = combineReducers({ auth,
  allSongs: songsReducer,
  singleSong: singleSongReducer,
  singleMySong: singleMySongReducer,
  allMySongs: mysongsReducer,
  allUsers: usersReducer,
  allQuestions: questionsReducer,
  singleQuestion: singleQuestionReducer,
  singleUser: singleUserReducer })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
