export const chatbot = {
  observers: [],
  subcribe: cb => {
    chatbot.observers.push(cb);
  },
  dispatch: data => {
    chatbot.observers.forEach(observer => observer(data));
  }
};
