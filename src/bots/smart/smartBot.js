import $ from "jquery";
import { fakeCallAPI, mapEntryFromResult } from "../../helpers";
import chatActions from "../../chatActions";
import { userType } from "../../constants";
import { chatbot } from "../../bot";

export const askBot = msg => {
  chatbot.dispatch([
    {
      name: userType.USER,
      message: msg
    }
  ]);

  $.ajax({
    url: "https://api.wit.ai/message",
    data: {
      q: msg,
      access_token: "6S6DJYXONREI4YIHGZAMDQNTEKXVP6SD"
    },
    dataType: "jsonp",
    method: "GET",
    success: function(response) {
      mapEntryFromResult(response, chatActions, chatbot.dispatch);
    }
  });
};
