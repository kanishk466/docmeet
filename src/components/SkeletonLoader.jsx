import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
     <div className="container">
           <div className="row">
             <div className="col-md-6 offset-md-3">
            
   
          
               <div className="card my-5" style={{background:" #1A1D21F5"}}>
                 <div className="card-body">
                   <div className="text-center">
                     <Skeleton
                       circle
                       height={200}
                       width={200}
                       className="my-3"
                     />
                   </div>
                   <Skeleton height={40} className="mb-3" />
                   <Skeleton height={40} className="mb-3" />
                   <Skeleton height={40} className="mb-3" />
                 </div>
               </div>
             </div>
           </div>
         </div>
  )
}

export default SkeletonLoader