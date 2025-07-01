/* eslint-disable react/prop-types */
import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';

const CastList = ({casts,title}) => {
  // console.log(casts);
    const filter=casts?.filter((cast)=>cast.profile_path).slice(0,10);
  return (
    <div className="w-10/12 mx-auto text-white">
      {filter && (
        <div className="">
        <p className="p-2 m-2 text-2xl text-center md:text-left  font-bold">{filter.lengh!==0 ? title :""}</p>
        <div className=" flex w-full mx-auto flex-row flex-wrap justify-center">
          {filter.map((cast) => {
            return (
              <Link to={`/person/${cast.id}/${cast.gender}`} key={cast.id}>
                <div  className="m-2 mx-auto w-32 md:w-44 p-1 ">
                  <img
                    className="rounded-lg"
                    src={IMG_CDN + cast.profile_path}
                    alt="cast"
                  />
                  <p className="text-center hover:underline">{cast.name}</p>
                  <p className="text-center text-sm">{cast.character}</p>
                </div>
             </Link>
            );
          }
          )}
        </div>
        </div>
      )}
    </div>
  )
}

export default CastList