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
      description:
        "ハワイ料理の一つで、ご飯の上にハンバーグや目玉焼き、デミグラスソースをのせた料理です。ボリューム満点で美味しいです。",
    };
  } else if (method === "煮物" && meat === "鶏肉" && spice === "弱い") {
    return {
      cuisine: "コック・オ・ヴァン",
      category: "フランス料理",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/aicandy/aicandy2305/aicandy230503890.jpg",
      description:
        "フランス料理の一つで、鶏肉や野菜をワインで煮込んだ甘めの料理です。ジューシーで風味豊かな一品です。",
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
      description:
        "インド料理の一つで、スパイシーなポテトサラダです。ゆでたジャガイモにタマリンドチャツネやミントチャツネ、チャーマサラなどのスパイスを加え、レモン汁やコリアンダーをトッピングします。爽やかな酸味とスパイシーさが特徴で、軽食や前菜として楽しまれます。",
    };
  } else if (method === "煮物" && meat === "鶏肉" && spice === "弱い") {
    return {
      cuisine: "エスカルゴ",
      category: "フランス料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/09/05/21/51/escargot-925593_1280.jpg",
      description:
        "フランス料理の一つで、ワインガーリックバターソースで焼いたカタツムリの料理です。風味豊かで特別な一品です。",
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
      description:
        "モロッコ料理の一つで、鉄鍋で焼き上げた野菜の煮込み料理です。スパイスの香りと野菜の甘みが絶妙です。",
    };
  } else if (method === "焼き物") {
    return {
      cuisine: "カヤトースト",
      category: "シンガポール料理",
      imageUrl:
        "https://images.assetsdelivery.com/compings_v2/cokemomo/cokemomo1706/cokemomo170600014.jpg",
      description:
        "シンガポールやマレーシアの人気デザートで、トーストにカヤと呼ばれるココナッツジャムを塗った一品です。トーストはサクサク、カヤは甘くて香ばしく、組み合わせが絶妙で美味しいです。朝食やおやつとして楽しまれます。",
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
