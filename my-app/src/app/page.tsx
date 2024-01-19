
import Image from 'next/image'
import NavBar from './components/navBar'
import EntryElement from './components/entryElement'
import TopElement from './components/topElement'
import MidElement from './components/midElement'

export default function Home() {
  return (
    <>
    <main>
    <div>

    </div>
    <div className ="pt-5 flex-col justify-center">
      
      <NavBar/>
      <div className="pt-20"><TopElement/></div>
      <EntryElement/>
      <MidElement/>
      
    </div>
    </main>
    </>
  )
}
