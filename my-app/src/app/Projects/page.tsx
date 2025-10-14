import NavBar from '../components/navBar'
import Footer from '../components/footer'
import ProjectsContainer from './components/projectsContainer'
export default function Home() {
  return (
    <>
    <main className='min-h-screen'>
    <div className ="pt-5 flex-col justify-center">
      <NavBar/>
      <div className='pt-10'></div>
      <ProjectsContainer/>
    </div>
    </main>
      <Footer/>
    </>
  )
}