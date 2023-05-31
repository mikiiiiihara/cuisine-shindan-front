import { FormData } from "../../pages/api/answers";
import { findOtherAnswer } from "./findOtherAnswer";

export type Answer = {
  cuisine: string;
  category: string;
  imageUrl?: string;
};
export const findSaltyAnswer = (formData: FormData): Answer => {
  const { preference, method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (method === "焼き物" && meat === "牛肉" && spice === "弱い") {
    return {
      cuisine: "ハンバーガー",
      category: "アメリカ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg",
    };
  } else if (method === "揚げ物" && meat === "海鮮" && spice === "強い") {
    return {
      cuisine: "フィッシュアンドチップス",
      category: "イギリス料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/21/13/54/fish-1684828_1280.jpg",
    };
  } else if (method === "揚げ物" && meat === "鶏肉") {
    return {
      cuisine: "唐揚げ",
      category: "中華料理",
      imageUrl:
        "https://www.pakutaso.com/shared/img/thumb/PAK85_karaagetoremon20150203190125_TP_V.jpg",
    };
  } else if (method === "煮物" && meat === "海鮮") {
    return {
      cuisine: "ムール貝の白ワインソース",
      category: "ベルギー料理",
      imageUrl:
        "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1352&q=80",
    };
  } else if (method === "煮物") {
    return {
      cuisine: "フォー",
      category: "ベトナム料理",
      imageUrl:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    };
  } else if (method === "焼き物") {
    return {
      cuisine: "ラーメン",
      category: "日本料理",
      imageUrl:
        "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
    };
  } else {
    return findOtherAnswer(formData);
  }
};
