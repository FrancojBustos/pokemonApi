import React from 'react'
import { Link } from 'react-router-dom'


const Qondis = () => {
  
    return (
    <div className='container d-flex flex-column '>
      <div className="row">
        <h1 className='a'>Pokemon</h1>
      </div>
      <div className='row'>
       <div className='col mt-5 a'>

  <img className='' width={350} height={300} src="https://imgs.search.brave.com/suX-T5AVkpWVkKNgrDERX48LI3er_D4G3Nb5vYADVog/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb3Rl/c3BvcnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Ni9Qb2tlbW9uLURp/dHRvLnBuZz93PTEy/MDA" alt="" />
       </div>
      </div>
      <div className='row mt-5 '>
     <div className="col a mb-2"><Link to="/stats"><button className='btn btn-secondary'>Info</button></Link></div>
       </div>
    </div>
  )
}

export default Qondis