'use client'

import { useState } from "react";
import { Trash2, Stars } from "lucide-react";
import Editor from "react-simple-code-editor";

import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-sql";

import { useCompletion } from '@ai-sdk/react';

export default function Home() {

  const [schema, setSchema] = useState('');

  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: '/api/completion',
    body: {
      schema,
    },
    onResponse: (response) => {
      console.log('Response:', response);
    },
    onError: (error) => {
      console.error('Error:', error);
    }
  });

  return (
    <div className="max-w-[430px] mx-auto px-4 pt-12 pb-4">

      <header className="flex items-center justify-between">

        <h1 className="text-snow">AskSQL</h1>

        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form onSubmit={handleSubmit} className="py-8 w-full flex flex-col text-foam">
        <label htmlFor="schema" className="text-lg font-light">Cole seu código SQL aqui</label>

        <Editor
          textareaId="schema"
          value={schema}
          onValueChange={code => setSchema(code)}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          textareaClassName="outline-none"
          className="my-4 font-mono bg-blueberry-600 border border-blueberry-300 rounded-md focus-within:ring-2 focus-within:ring-lime-600"
        />

        <label htmlFor="question">Faça uma pergunta sobre o código</label>
        <textarea
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lime-600"
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-2">

          <Stars className="w-6 h-6" />
          Perguntar à inteligência artificial
        </button>

      </form>

      <div className="mt-6">
        <span className="text-lg font-light text-foam">Resposta</span>

        <textarea
          className="my-4 font-mono w-full h-40 text-foam bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lime-600"
          name="question"
          id="question"
          value={completion}
          readOnly
        />
        {/* <Editor
          readOnly
          value={completion}
          onValueChange={() => {}}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          textareaClassName="outline-none text-foam"
          className="my-4 w-full bg-transparent border border-blueberry-300 rounded-md"
        /> */}

      </div>

    </div>
  )
}