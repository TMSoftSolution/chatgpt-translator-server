import type { NextApiRequest, NextApiResponse } from "next";
import openAI from "../../config";

type Data = {
  result?: string | undefined;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req?.body?.query) {
    res.status(400).json({ error: "Invalid params" });
  }

  const { query = "" } = req?.body;
  const completion = await openAI.createImage({
    // We are prompting the API in the below format
    // The ?? after `query` is just a HACK
    prompt: query,
    n:1,
    size: "1024x1024"
 
  });
  res.status(200).json({ result: completion.data.data[0].url});
}