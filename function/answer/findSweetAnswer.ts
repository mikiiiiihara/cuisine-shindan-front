import { FormData } from "../../pages/api/answers";
import { Answer } from "./findAnswer";
import { findOtherAnswer } from "./findOtherAnswer";

export const findSweetAnswer = (formData: FormData): Answer => {
  const { method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (
    method === "揚げ物" &&
    (meat === "牛肉" || meat === "豚肉") &&
    spice === "強い"
  ) {
    return {
      cuisine: "ロコモコ",
      category: "ハワイ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2012/02/29/11/57/loco-18732_1280.jpg",
    };
  } else if (method === "煮物" && meat === "鶏肉" && spice === "弱い") {
    return {
      cuisine: "コック・オ・ヴァン",
      category: "フランス料理",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/aicandy/aicandy2305/aicandy230503890.jpg",
    };
  } else if (
    method === "揚げ物" &&
    meat === "肉は食べない" &&
    spice === "強い"
  ) {
    return {
      cuisine: "アルチャット",
      category: "インド料理",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/rickysoni/rickysoni2209/rickysoni220902927.jpg",
    };
  } else if (method === "煮物" && meat === "鶏肉" && spice === "弱い") {
    return {
      cuisine: "エスカルゴ",
      category: "フランス料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/09/05/21/51/escargot-925593_1280.jpg",
    };
  } else if (
    method === "焼き物" &&
    meat === "肉は食べない" &&
    spice === "強い"
  ) {
    return {
      cuisine: "焼き野菜タジン",
      category: "モロッコ料理",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/tbralnina/tbralnina1907/tbralnina190700137.jpg",
    };
  } else if (method === "焼き物") {
    return {
      cuisine: "カヤトースト",
      category: "シンガポール料理",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/cokemomo/cokemomo1706/cokemomo170600014.jpg",
    };
  } else {
    return findOtherAnswer(formData);
    // return {
    //   cuisine: "ガレット",
    //   category: "フランス料理",
    //   imageUrl:
    //     "https://cdn.pixabay.com/photo/2020/04/10/16/08/crepe-5026468_1280.jpg",
    // };
  }
};
