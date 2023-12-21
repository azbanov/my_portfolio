import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContainerBlock from '@/components/ContainerBlock'
import Hero from '@/components/Hero'
import FavouriteProjects from '@/components/FavouriteProjects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContainerBlock
      title="Azamat Kurbanov - Software Application Engineer"
      description="My own professional portfolio."
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  )
}
