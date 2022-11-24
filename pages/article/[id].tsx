import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { TimelineCard } from '../../components/TimelineCard'

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    const id = ctx.params?.id
    const articleId = id as string
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API}/blogs/${articleId}`
    const response = await fetch(url)

    const articleData = await response.json()

    if(articleData.data === null) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            articleData
        }
    }
}

type ArticleByIdProps = {
    articleData: any
}

const ArticleById = ({ articleData }: ArticleByIdProps) => {

  return (
    <div className='mt-5 space-y-5'>
        <div className='container'>
            <Link href="/">
                <FiArrowLeft />
            </Link>
        </div>
        <div className='grid place-content-center'>
        <TimelineCard 
        author={articleData.data.attributes.author}
        content={articleData.data.attributes.content}
        imageUrl={articleData.data.attributes.imageUrl}
        publishedAt={articleData.data.attributes.publishedAt}
        isTimeline={false}
        />
        </div>
    </div>
  )
}

export default ArticleById