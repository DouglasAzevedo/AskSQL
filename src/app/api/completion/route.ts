import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { schema, prompt } = await req.json();

  if (!schema || !prompt) {
    return new Response("Schema e prompt são obrigatórios.", { status: 400 });
  }

  const message = `
    O seu trabalho é criar queries SQL a partir de um schema SQL.
    
    Schema SQL:
    """${schema}"""

    A partir do schema acima, crie uma query SQL que responda a pergunta abaixo, mas você deve retornar somente o SQL.
    """${prompt}"""
  `.trim();

  const result = streamText({
    model: openai('gpt-4o'),
    prompt: message,
    onError({ error }) {
      console.error(error); // your error logging logic here
    },
  });

  return result.toDataStreamResponse();
}