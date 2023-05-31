import { FormData } from "../../pages/api/answers";
import { Answer } from "./findAnswer";
import { findOtherAnswer } from "./findOtherAnswer";

export const findSpicyAnswer = (formData: FormData): Answer => {
  const { method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (method === "煮物" && meat === "豚肉") {
    return {
      cuisine: "カムジャタン",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/07/08/19/40/food-836806_1280.jpg",
    };
  } else if (method === "揚げ物" && meat === "鶏肉") {
    return {
      cuisine: "ヤンニョムチキン",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/08/21/chicken-406111_1280.jpg",
    };
  } else if (method === "生食" && spice === "強い") {
    return {
      cuisine: "タコス",
      category: "メキシコ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/09/26/04/01/tacos-pastor-4505032_1280.jpg",
    };
  } else if (meat === "海鮮" || meat === "豚肉") {
    return {
      cuisine: "スンドゥブ",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/04/05/16/40/dining-4105501_1280.jpg",
    };
  } else if (method === "焼き物") {
    return {
      cuisine: "グリーンカレー",
      category: "タイ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/30/04/58/green-curry-2457236_1280.jpg",
    };
  } else if (spice === "強い") {
    return {
      cuisine: "麻婆豆腐",
      category: "中華料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/08/02/06/51/mapo-tofu-2570173_640.jpg",
    };
  } else {
    return findOtherAnswer(formData);
  }
};
