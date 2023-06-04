import { FormData } from "../../pages/api/answers";
import { findOtherAnswer } from "./findOtherAnswer";
import { findSaltyAnswer } from "./findSaltyAnswer";
import { findSourAnswer } from "./findSourAnswer";
import { findSpicyAnswer } from "./findSpicyAnswer";
import { findSweetAnswer } from "./findSweetAnswer";

export type Answer = {
  cuisine: string;
  category: string;
  imageUrl?: string;
  description?: string;
};
export const findAnswer = (formData: FormData): Answer => {
  const { preference } = formData;

  // 1から5問目の組み合わせによって分岐
  if (preference === "甘い") {
    return findSweetAnswer(formData);
  } else if (preference === "辛い") {
    return findSpicyAnswer(formData);
  } else if (preference === "しょっぱい") {
    return findSaltyAnswer(formData);
  } else if (preference === "酸っぱい") {
    return findSourAnswer(formData);
  } else {
    return findOtherAnswer(formData);
  }
};
