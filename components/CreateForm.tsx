import React from 'react'
import { Article } from './Article'
import { useSession } from 'next-auth/react'
import { Modal } from './Modal'

type CreateArticleDTO = {
    title: string
    content: string
    author: string
    imageUrl: string
}

async function createArticleHandler(createArticleData: CreateArticleDTO) {
    try {
        const url = `${process.env.NEXT_PUBLIC_STRAPI_API}/blogs`
        const response = await fetch(url, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                data: {
                    ...createArticleData
                }
            })
        })

        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}

export const CreateForm = () => {
  const { data: session } = useSession()
  const [title, setTitle] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleFormSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    const response = await createArticleHandler({ author: session!.user!.name!, content, imageUrl: session!.user!.image!, title })

    if(response.data !== null) {
        setIsOpen(prev => !prev)
    }
  }

  return (
    <React.Fragment>
        <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        />
        <div className='grid grid-cols-2 mt-10'>
            <div className="space-y-5 mb-10">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">
                        What&apos;s on your mind?
                    </h1>
                    <p className="text-slate-600">
                        You&apos;ve got anything you want to share? start here.
                    </p>
                </div>
                <form onSubmit={handleFormSubmit} className='space-y-10'>
                    <div>
                        <label 
                        className="font-medium"
                        htmlFor="title">Title</label>
                        <input
                        data-cy="input-title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className='outline-none w-full text-4xl font-semibold'
                        placeholder='Article title here...'
                        type="text" />
                    </div>
                    <div className='space-y-3'>
                        <div className="flex flex-col">
                            <label 
                            className="font-medium"
                            htmlFor="content">Content</label>
                            <p className="text-sm text-slate-700">Please write your content in markdown.</p>
                        </div>
                        <textarea
                        data-cy="input-content"
                        name="content"
                        onChange={(e) => setContent(e.target.value)}
                        className='outline-none w-full h-screen text-sm'
                        placeholder='Start writing...'
                        >
                        </textarea>
                    </div>
                    <button 
                    data-cy="publish"
                    className="w-full bg-black text-white py-2 font-medium rounded-md"
                    type="submit">
                        Publish
                    </button>
                </form>
            </div>
            <div>
                <Article content={content} />
            </div>
        </div>
    </React.Fragment>
  )
}
