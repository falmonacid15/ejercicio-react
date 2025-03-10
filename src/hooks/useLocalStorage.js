const useLocalStorage = (key) => {
  const get = () => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return [];
  };
  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const push = (value) => {
    const current = get();
    current.push(value);
    set(current);
  };

  const remove = (index) => {
    const current = get();
    current.splice(index, 1);
    set(current);
  };
  return { get, set, push, remove };
};
