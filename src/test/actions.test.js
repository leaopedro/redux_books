// import { triggerSearch, TRIGGER_SEARCH, RECEIVE_BOOKS } from '../actions/triggerSearch'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import nock from 'nock'
// import expect from 'expect'
//
// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)
//
// describe('actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })
//
//   it('makes a request to the search API', () => {
//     const query = 'book';
//     nock(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
//       .get('/todos')
//       .reply(200, { body: { todos: ['do something'] }});
//
//     const expectedAction = {
//       type: RECEIVE_BOOKS,
//         body: {
//           todos: ['do something']
//         }
//     }
//     ;
//     const store = mockStore({ todos: [] })
//
//     return store.dispatch(triggerSearch(query))
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//   })
// })