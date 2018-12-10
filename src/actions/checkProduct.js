import { fakeCallAPI } from "../../helpers";

export const checkProduct = (res, next) => {
  fakeCallAPI().then(() => {
    next([
      {
        user: "bot",
        message: `San pham ${
          res.value
        } khong con, ban co muon chuyen qua san pham khac ?`
      }
    ]);
  });
};
