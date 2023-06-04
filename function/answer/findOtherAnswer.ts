import { FormData } from "../../pages/api/answers";
import { Answer } from "./findAnswer";

export const findOtherAnswer = (formData: FormData): Answer => {
  const { method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (method === "焼き物" && meat === "海鮮") {
    return {
      cuisine: "パエリア",
      category: "スペイン料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/01/29/13/45/paella-1167973_1280.jpg",
      description:
        "スペイン料理の代表的な料理で、海鮮や肉とご飯を一緒に炊いた一皿です。豊かな香りと深い味わいが特徴です。",
    };
  } else if (method === "生食" && meat === "海鮮") {
    return {
      cuisine: "寿司",
      category: "日本料理",
      imageUrl:
        "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=441&q=8",
      description:
        "日本の伝統的な料理で、酢飯に新鮮な魚や野菜をのせたロールや握り寿司です。美しい見た目と繊細な味わいが特徴です。",
    };
  } else if (method === "揚げ物" && (meat === "牛肉" || meat === "豚肉")) {
    return {
      cuisine: "コロッケ",
      category: "日本料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/07/03/20/42/croquettes-6384836_1280.jpg",
      description:
        "揚げたり焼いたりするポテトを主成分とした料理で、具材を混ぜて形作り、衣をつけて調理します。サクサクとした食感が特徴です。",
    };
  } else if (meat === "牛肉") {
    return {
      cuisine: "オージービーフステーキ",
      category: "オーストラリア料理",
      imageUrl:
        "https://images.unsplash.com/photo-1680538491591-7ce20c900f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        " オーストラリアの特産である上質な牛肉を使ったステーキ料理です。ジューシーで肉の風味が豊かな一品です。",
    };
  } else if (method === "揚げ物" && meat !== "肉は食べない") {
    return {
      cuisine: "ヤンニョムチキン",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/08/21/chicken-406111_1280.jpg",
      description:
        "韓国料理の一つで、甘辛いソースで揚げた鶏肉を食べる料理です。香ばしくてジューシーな味わいが特徴です。",
    };
  } else if (meat === "肉は食べない") {
    return {
      cuisine: "ベジタリアンカレー",
      category: "インド料理",
      imageUrl:
        "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      description:
        "野菜を中心にしたカレーで、肉や魚を使わずに作られます。スパイスの風味と野菜の旨味が絶妙な一品です。",
    };
  } else if (spice === "弱い") {
    return {
      cuisine: "グラタン",
      category: "フランス料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605_1280.jpg",
      description:
        "野菜や肉をクリームソースで焼き上げた料理で、チーズをのせて香ばしく仕上げます。とろけるチーズと濃厚なソースが魅力です。",
    };
  } else {
    return {
      cuisine: "ピザ",
      category: "イタリア料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg",
      description:
        "イタリア発祥の料理で、生地にトマトソースやチーズ、具材をのせて焼き上げます。バラエティ豊かなトッピングが特徴です。",
    };
  }
};
