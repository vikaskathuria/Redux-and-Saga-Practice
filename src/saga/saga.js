import { takeLatest, put } from "redux-saga/effects";
const delay = (ms) => new Promise(res => setTimeout(res, ms))
function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value:1 });
}
function* ageDownAsync() {
    yield delay(4000);
    yield put({ type: "AGE_DOWN_ASYNC",});
  }
export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
  yield takeLatest("AGE_DOWN", ageDownAsync);

}

