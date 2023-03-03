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
  if (!req?.body?.question){
    res.status(400).json({ error: 'Invalid params' })
  }

  const completion = await openAI.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": req?.body?.question}]
      ,
  });
  res.status(200).json({ result: completion.data.choices[0].message?.content });
}