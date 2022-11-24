import Link from 'next/link'
import React from 'react'
import useSwr from 'swr'
import { TimelineCard } from './TimelineCard'

async function fetcher() {
    try {
        const url = `${process.env.NEXT_PUBLIC_STRAPI_API}/blogs`
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}

export const Timeline = () => {

  const { data, error } = useSwr('/api/blogs', fetcher)

  if(error) {
    return <>an error occurred </>
  }

  if(!data) {
    return <>loading...</>
  }

  return (
    <main
    className="grid place-content-center mt-10"
    >     
        {
            data.data?.map((article: any, idx: number) => {
                return (
                    <Link
                    key={idx}
                    href={`/article/${article.id}`}
                    >
                        <TimelineCard
                        isTimeline={true}
                        author={article.attributes.author}
                        content={article.attributes.content}
                        imageUrl={article.attributes.imageUrl}
                        publishedAt={article.attributes.publishedAt}
                        title={article.attributes.title}                
                        />
                    </Link>
                )
            })
        }
    </main>
  )
}
