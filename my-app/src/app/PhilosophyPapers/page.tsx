import NavBar from '../components/navBar'
import Footer from '../components/footer'
import PaperGrid from './components/paperGrid'
import PapersHeader from './components/PapersHeader'
export default function Home() {
  return (
    <>
    <NavBar/>
    <main className='min-h-screen'>
    <div className ="flex-col justify-center">
      <div className='pt-20'></div>
      <PapersHeader/>
      <PaperGrid/>
    </div>
    </main>
    <Footer/>
    </>
  )
}