import NavBar from '../components/navBar'
import Footer from '../components/footer'
export default function Home() {
  return (
    <>
    <main className='min-h-screen'>
    <div className ="pt-5 flex-col justify-center">
      <NavBar/>

    </div>
    </main>
      <Footer/>
    </>
  )
}