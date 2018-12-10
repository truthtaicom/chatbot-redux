import { userType } from "../../constants";
import { chatbot } from "../../bot";

/* With Dump AI */
const askDumpAI = msg => {
  if (msg === "hello") {
    return {
      text: "Xin chao",
      name: "bot"
    };
  }

  return {
    text: "ko hieu gi dau",
    name: "bot"
  };
};

const stories = {
  Hello: "Xin chào",
  "Bạn tên là gì": "Mình là Bot đẹp zai !",
  unknow:
    "Có lẻ chúng ta chưa thực sự thấu hiểu, tâm sự với mình nhiều thêm chút nữa nhé"
};

export const askBot = msg => {
  return new Promise(reslove => {
    return setTimeout(() => {
      const data = [
        {
          user: userType.BOT,
          message: stories[msg] || stories.unknow
        }
      ];
      reslove(data);
    }, 2000);
  });
};
