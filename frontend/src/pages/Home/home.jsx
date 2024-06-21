import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreExperiences from '../../components/ExploreExperiences/ExploreExperiences'
import ExpDisplay from '../../components/ExpDisplay/ExpDisplay'

const Home = ({setAddYours}) => {
// state variable is exp_category , setter function name is setexp_category,initialising it with one string 'All'
    const [exp_category,setexp_category] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreExperiences exp_category={exp_category} setexp_category={setexp_category} setAddYours={setAddYours}/>
      <ExpDisplay exp_category={exp_category}/>
    </div>
  )
}

export default Home
