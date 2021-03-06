import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();


export default configureStore({
    reducer: {},
    middleware: [
        ...getDefaultMiddleware(
            { thunk: false }
        ),
        sagaMiddleware
    ],
});

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}
