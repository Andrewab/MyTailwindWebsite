import NavBar from '../components/navBar'
import Footer from '../components/footer'
import ProjectsContainer from './components/projectsContainer'
import ProjectsHeader from './components/ProjectsHeader'
export default function Home() {
  return (
    <>
    <main className='min-h-screen'>
    <div className ="flex-col justify-center">
      <NavBar/>
      <div className='pt-20'></div>
      <ProjectsHeader/>
      <ProjectsContainer/>
    </div>
    </main>
      <Footer/>
    </>
  )
}