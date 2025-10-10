import NavBar from '../components/navBar'
import EntryElement from '../components/entryElement'
import TopElement from '../components/topElement'
import MidElement from '../components/midElement'
import Footer from '../components/footer'
export default function Home() {
  return (
    <>
    <main>
    <div>

    </div>
    <div className ="pt-5 flex-col justify-center">
      <NavBar/>
      <MidElement/>
      <Footer/>
    </div>
    </main>

    </>
  )
}