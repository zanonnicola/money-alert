export default function observeStore(store, onChange) {
  let currentState;

  function handleChange() {
    const nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
