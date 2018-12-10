import { userType } from "./constants";

export const fakeCallAPI = cb => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const entityType = {
  topberi_ask: "topberi_ask",
  topberi_sayGoodbye: "topberi_sayGoodbye",
  topberi_checking: "topberi_checking",
  topberi_product: "topberi_product",
  topberi_type: "topberi_type",
  topberi_orderInfo: "topberi_orderInfo",
  "wit/number": "wit/number",
  "wit/location": "wit/location",
  "wit/datetime": "wit/datetime"
};

const dataFlow = {
  [entityType.topberi_ask]: () => "Chào bạn, shop có thể giúp dược gì cho bạn",
  [entityType.topberi_checking]: (res, { checkProduct }, next) => {
    const productEntry = res[entityType.topberi_product];
    if (productEntry) {
      checkProduct(productEntry[0], next);
      return "Shop đang kiểm tra sản phẩm giúp bạn. Bạn đợi xíu nha ^^";
    }

    return "Shop khong tim thay san pham cua ban!";
  },
  [entityType.topberi_sayGoodbye]: () => {
    return "Bye bye ban, hen gap lai  😊";
  }
};

export const mapEntryFromResult = (res, chatActions, next) => {
  const entities = { ...res.entities };
  return Object.keys(entities).map(elm => {
    const flowMatching = dataFlow[elm];
    const response = {
      ...entities[elm][0],
      entry: elm,
      user: userType.BOT,
      message:
        (flowMatching && flowMatching(entities, chatActions, next)) || undefined
    };

    next([response]);
  });
};
