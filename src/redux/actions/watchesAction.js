export const WatchesAction = (item) => ({
  type: 'ADD_CART',
  payload: item,
});

export const WatchesMinusAction = (item) => ({
  type: 'DECREMENT',
  payload: item,
})
export const WatchesRemoveAction = (item) => ({
  type: 'REMOVE',
  payload: item,
})
