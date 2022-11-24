/* eslint-disable react/no-children-prop */
import React from 'react'
import ReactMarkdown from "react-markdown"
import remarkgfm from "remark-gfm"

type ArticleProps = {
    content: string
}

export const Article: React.FunctionComponent<ArticleProps> = ({
    content
}) => {
  return (
    <section className="space-y-5">
        <div>
            <h3 className='text-lg font-normal'>
                Preview
            </h3>
            <p className="text-sm text-slate-700">
                This is how your article will appear
            </p>
        </div>
        <article
        data-cy="article-preview"
        className="prose">
            <ReactMarkdown children={content} remarkPlugins={[remarkgfm]} />
        </article>
    </section>
  )
}
