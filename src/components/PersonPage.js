import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import usePersonInfo from '../customHooks/usePersonInfo';
import PersonInfoCard from './PersonInfoCard';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesReduxSlice';
import PersonMovies from './PersonMovies';

const PersonPage = () => {
    
    const dispatch = useDispatch();
    const { personId, gender } = useParams();
    
    // console.log(personId, gender);

    const {personMovies,castsBio}=usePersonInfo(personId,gender);
    dispatch(addNowPlayingMovies(personMovies));

    console.log(castsBio); // this is the bio of the perso
    


  return (
    <div className='bg-stone-900'>
      <Header/>
      <PersonInfoCard personInfo={castsBio}/> 
      <PersonMovies/>  
    </div>
  )
}

export default PersonPage