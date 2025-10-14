import NavBar from '../components/navBar'
import Footer from '../components/footer'
import PaperGrid from './components/paperGrid'
export default function Home() {
  return (
    <>
    <NavBar/>
    <main className='min-h-screen'>
    <div className ="flex-col justify-center">
      <div className='pt-20'></div>
      <PaperGrid/>
    </div>
    </main>
    <Footer/>
    </>
  )
}