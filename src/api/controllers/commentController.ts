import {Request, Response, NextFunction} from 'express';
import fetchData from '../../lib/fetchData';

const commentPost = async (
  req: Request<{}, {}, {text: string; tone?: string}>,
  res: Response<{response: string}>,
  next: NextFunction
) => {
  try {
    const {text, tone = 'friendly'} = req.body;

    const prompt = `Reply to this YouTube comment in a ${tone} tone.

Comment:
"${text}"

Write only one short reply.`;

    console.log('POSTMAN BODY:', req.body);
    console.log('PROMPT SENT TO AI:', prompt);

    const apiUrl = process.env.OPENAI_API_URL;

    if (!apiUrl) {
      throw new Error('OPENAI_API_URL is not configured');
    }

    const openAIUrl = `${apiUrl}/v1/chat/completions`;

    console.log('API URL:', openAIUrl);

    const data = await fetchData<{
      choices?: Array<{message?: {content?: string}}>
    }>(
      openAIUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      }
    );

    const responseText =
      data.choices?.[0]?.message?.content ?? 'No response generated.';

    res.json({
      response: responseText,
    });
  } catch (error) {
    next(error);
  }
};

export {commentPost};