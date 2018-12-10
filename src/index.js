import $ from "jquery";
import { askBot } from "./bots/smart";
import { chatbot } from "./bot";
import { userType } from "./constants";

let conversationList = [];
const $conversation_form = $("#conversation_form");
const $conversation_input = $("#conversation_input");
const $conversation_list = $("#conversation_list");

const renderConversation = conversations => {
  conversationList = [...conversationList, ...conversations];

  const $list = conversationList
    .filter(elm => elm.message)
    .map(elm => {
      if (elm.name === userType.USER) {
        return `<p class="text-success text-right">${elm.message}</p>`;
      }
      return `<p class="text-danger text-left">${elm.message}</p>`;
    });

  $conversation_list.html($list);
};

chatbot.subcribe(renderConversation);

$conversation_form.submit(function(event) {
  event.preventDefault();
  const value = $conversation_input.val();
  $conversation_input.val("");

  askBot(value);
});

// import { createStore } from "redux";

// const actionTypes = {
//   REQUEST: "REQUEST",
//   SUCCESS: "SUCCESS",
//   ERROR: "ERROR"
// };

// const initState = {
//   loading: false,
//   conversations: [],
//   error: null
// };

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case actionTypes.REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null
//       };
//     case actionTypes.SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         conversations: [...state.conversations, action.data ]
//       };
//     case actionTypes.ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.error
//       };
//   }
// };

// const store = createStore(reducer);
