export default(state, action) => {

  switch(action.type){
      case 'Delete_Transaction':
      return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payLoad)
        }
        case 'Add_Transaction':
      return {
          ...state,
          transactions: [action.payLoad,...state.transactions]
        }
      default:
          return state;
  }
}