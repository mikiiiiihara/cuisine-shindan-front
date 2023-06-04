import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { Answer, findAnswer } from "../../function/answer/findAnswer";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
  origin: true,
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export type FormData = {
  preference: string;
  method: string;
  meat: string;
  spice: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Answer | { name: string }>
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  if (req.method === "POST") {
    const formData: FormData = req.body;
    const answer = findAnswer(formData);
    res.status(200).json(answer);
  } else {
    res.status(405).json({ name: "Method not allowed" });
  }
}
