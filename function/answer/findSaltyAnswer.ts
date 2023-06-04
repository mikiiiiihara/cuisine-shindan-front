import { FormData } from "../../pages/api/answers";
import { Answer } from "./findAnswer";
import { findOtherAnswer } from "./findOtherAnswer";

export const findSaltyAnswer = (formData: FormData): Answer => {
  const { method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (method === "焼き物" && meat === "牛肉" && spice === "弱い") {
    return {
      cuisine: "ハンバーガー",
      category: "アメリカ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg",
      description:
        "米国発祥の人気料理で、バンズに挟まれたジューシーなビーフパティやチーズ、野菜、ソースなどが組み合わさったサンドイッチです。手軽で食べ応えがあります。",
    };
  } else if (method === "揚げ物" && meat === "海鮮" && spice === "強い") {
    return {
      cuisine: "フィッシュアンドチップス",
      category: "イギリス料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/09/21/13/54/fish-1684828_1280.jpg",
      description:
        "イギリスの代表的な料理で、揚げた魚とフライドポテトがセットになったメニューです。サクサクとした衣とアクセントのタルタルソースが魅力です。",
    };
  } else if (method === "揚げ物" && meat === "鶏肉") {
    return {
      cuisine: "唐揚げ",
      category: "中華料理",
      imageUrl:
        "https://www.pakutaso.com/shared/img/thumb/PAK85_karaagetoremon20150203190125_TP_V.jpg",
      description:
        "衣をつけて揚げたジューシーな鶏肉の一品です。外はカリッと中はふんわりとした食感が楽しめます。",
    };
  } else if (method === "煮物" && meat === "海鮮") {
    return {
      cuisine: "ムール貝の白ワインソース",
      category: "ベルギー料理",
      imageUrl:
        "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1352&q=80",
      description:
        "ベルギー料理で人気のある料理で、白ワインで煮込んだムール貝にクリーミーなソースを絡めた一品です。",
    };
  } else if (method === "煮物") {
    return {
      cuisine: "フォー",
      category: "ベトナム料理",
      imageUrl:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      description:
        "ベトナム料理の代表的な料理で、米粉の麺とスープがベースです。さまざまな具材と香草をトッピングしていただきます。",
    };
  } else if (method === "焼き物") {
    return {
      cuisine: "ラーメン",
      category: "日本料理",
      imageUrl:
        "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
      description:
        "日本の代表的な麺料理で、スープにもちもちの麺を組み合わせた一杯です。豚骨や醤油など様々なスタイルがあります。",
    };
  } else {
    return findOtherAnswer(formData);
  }
};
