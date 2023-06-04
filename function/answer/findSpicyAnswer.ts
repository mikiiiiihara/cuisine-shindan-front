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
      description:
        "韓国料理の一つで、豚肉と野菜を辛い味付けで炒めた料理です。ご飯と一緒に食べることが多く、ヘルシーでボリューム満点です。",
    };
  } else if (method === "揚げ物" && meat === "鶏肉") {
    return {
      cuisine: "ヤンニョムチキン",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/08/21/chicken-406111_1280.jpg",
      description:
        "韓国料理の一つで、甘辛いソースで揚げた鶏肉を食べる料理です。香ばしくてジューシーな味わいが特徴です。",
    };
  } else if (method === "生食" && spice === "強い") {
    return {
      cuisine: "タコス",
      category: "メキシコ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/09/26/04/01/tacos-pastor-4505032_1280.jpg",
      description:
        "メキシコ料理の代表的な料理で、トウモロコシのトルティーヤに具材を詰めたメキシコンビーフやグリルドチキンなどをのせた一品です。",
    };
  } else if (meat === "海鮮" || meat === "豚肉") {
    return {
      cuisine: "スンドゥブ",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/04/05/16/40/dining-4105501_1280.jpg",
      description:
        "韓国料理の一つで、辛い豆腐スープです。辛味や旨味のあるスープに、豆腐や野菜、魚介類などが入っており、ヘルシーで美味しいです。",
    };
  } else if (method === "焼き物") {
    return {
      cuisine: "グリーンカレー",
      category: "タイ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/30/04/58/green-curry-2457236_1280.jpg",
      description:
        "タイ料理の一つで、スパイシーな緑色のカレーソースに野菜や肉を組み合わせた料理です。爽やかな風味が特徴です。",
    };
  } else if (spice === "強い") {
    return {
      cuisine: "麻婆豆腐",
      category: "中華料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/08/02/06/51/mapo-tofu-2570173_640.jpg",
      description:
        "中華料理の一つで、ピリ辛でコクのある麻辣ソースと豆腐を組み合わせた一品です。香辛料の風味と豆腐の食感が絶妙です。",
    };
  } else {
    return findOtherAnswer(formData);
  }
};
