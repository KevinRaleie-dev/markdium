/* eslint-disable react/no-children-prop */
import Image from 'next/image'
import React from 'react'
import ReactMarkdown from "react-markdown"
import remarkgfm from "remark-gfm"

type TimelineCardProps = {
    imageUrl: string
    author?: string
    publishedAt?: string
    title?: string
    content: string
    isTimeline: boolean
}

export const TimelineCard: React.FunctionComponent<TimelineCardProps> = ({
    author,
    content,
    imageUrl,
    publishedAt,
    title,
    isTimeline
}) => {
  return (
    <div className='border rounded-md p-2 mb-3 space-y-3 h-auto'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-3'>
                <div>
                    <Image 
                    src={imageUrl}
                    alt="author profile image"
                    className='rounded-full'
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <p className='font-medium'>
                        {author}
                    </p>
                    <p className='text-sm text-slate-600'>
                        published at {publishedAt}
                    </p>
                </div>
            </div>    
        </div>
        <div>
            <div>
                <h2 className='text-3xl font-semibold'>
                    {title}
                </h2>
            </div>
            {
                !isTimeline && <>                
                    <article className="prose">
                        <ReactMarkdown
                        children={content}
                        remarkPlugins={[remarkgfm]}
                        />
                    </article>
                </>
            }
        </div>
    </div>
  )
}
