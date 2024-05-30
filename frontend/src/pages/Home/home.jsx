import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreExperiences from '../../components/ExploreExperiences/ExploreExperiences'
import ExpDisplay from '../../components/ExpDisplay/ExpDisplay'

const Home = ({setAddYours}) => {
// state variable is category , setter function name is setCategory,initialising it with one string 'All'
    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreExperiences category={category} setCategory={setCategory} setAddYours={setAddYours}/>
      <ExpDisplay category={category}/>
    </div>
  )
}

export default Home
