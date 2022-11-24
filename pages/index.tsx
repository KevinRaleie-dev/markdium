import { Hero } from "../components/Hero"
import { useSession } from "next-auth/react"
import { Timeline } from "../components/Timeline"

export default function Home() {
  const { data: session } = useSession()
  return (
    <div className=" h-screen w-screen"> 
      {
        session ? <Timeline /> : <Hero />
      }
    </div>
  )
}
