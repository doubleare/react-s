const initialState = {
  items: [],
};

const updateItems = (items, item, idx) => {
  if(item.count == 0){
    return [
      ...items.slice(0,idx),
      ...items.slice(idx+1)
    ]
  }
  if(idx == -1) {
    return [
      ...items,
      item
    ];
  }
  return [
    ...items.slice(0,idx),
    item,
    ...items.slice(idx+1)
  ]
}

const updateItem = (object,item,q) => {
  if(item) {
    return {
      ...item,
      count: item.count + q,
      totalPrice: item.newPrice * (item.count + q),
    }
  }
  return {
    discount: object.discount,
    id: object.id,
    image: object.image,
    newPrice:object.newPrice,
    oldPrice: object.oldPrice,
    title: object.title,
    count: 1,
    totalPrice:object.newPrice,
  }
}

const shablon = (state , object , q) => {
  const { items } = state
  const watchId = object.id;
  const itemIndex = items.findIndex(({id}) => id == watchId)
  const item = items[itemIndex]

  let newItem = updateItem(object, item, q)
  
  return {
    ...state,
    items: updateItems(items,newItem,itemIndex)
  }
}

const watchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      return shablon(state, action.payload,1)
    }
    case 'DECREMENT':{
      return shablon(state, action.payload,-1)
    }
    case 'REMOVE' :{
      const item = state.items.find(({id}) => id == action.payload.id)
      return shablon(state, action.payload,-item.count)
    }
    default: {
      return state;
    }
  }
};

export default watchesReducer;