export const CHANGE_TITLE = 'CHANGE_TITLE'

const initialState = {
  title: 'Enter User Details',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        title: action.title,
      }
    default:
      return state
  }
}
