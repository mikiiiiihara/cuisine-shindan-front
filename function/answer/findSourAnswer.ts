import { FormData } from "../../pages/api/answers";
import { findOtherAnswer } from "./findOtherAnswer";

export type Answer = {
  cuisine: string;
  category: string;
  imageUrl?: string;
};
export const findSourAnswer = (formData: FormData): Answer => {
  const { method, meat, spice } = formData;

  // 1から5問目の組み合わせによって分岐
  if (meat === "海鮮" && spice === "強い") {
    return {
      cuisine: "トムヤムクン",
      category: "タイ料理",
      imageUrl:
        "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    };
  } else if (meat === "豚肉") {
    return {
      cuisine: "ザワークラウト",
      category: "ドイツ料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/03/01/18/01/sauerkraut-655062_1280.jpg",
    };
  } else if (method === "生食") {
    return {
      cuisine: "生春巻き",
      category: "ベトナム料理",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/12/20/17/14/spring-rolls-4708877_1280.jpg",
    };
  } else {
    return findOtherAnswer(formData);
  }
};
