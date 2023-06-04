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
    };
  } else if (method === "生食" && meat === "海鮮") {
    return {
      cuisine: "寿司",
      category: "日本料理",
      imageUrl:
        "https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=441&q=8",
    };
  } else if (method === "揚げ物" && (meat === "牛肉" || meat === "豚肉")) {
    return {
      cuisine: "コロッケ",
      category: "日本料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/07/03/20/42/croquettes-6384836_1280.jpg",
    };
  } else if (meat === "牛肉") {
    return {
      cuisine: "オージービーフステーキ",
      category: "オーストラリア料理",
      imageUrl:
        "https://images.unsplash.com/photo-1680538491591-7ce20c900f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    };
  } else if (method === "揚げ物" && meat !== "肉は食べない") {
    return {
      cuisine: "ヤンニョムチキン",
      category: "韓国料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/31/08/21/chicken-406111_1280.jpg",
    };
  } else if (meat === "肉は食べない") {
    return {
      cuisine: "ベジタリアンカレー",
      category: "インド料理",
      imageUrl:
        "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    };
  } else if (spice === "弱い") {
    return {
      cuisine: "グラタン",
      category: "フランス料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605_1280.jpg",
    };
  } else {
    return {
      cuisine: "ピザ",
      category: "イタリア料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg",
    };
  }
};
