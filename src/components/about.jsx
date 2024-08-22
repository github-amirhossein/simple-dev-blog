import imgr from '../img/homan.jpg'
import imgr1 from '../img/card.png'
import imgr2 from '../img/coffee-cup.png'
import imgr3 from '../img/amir.jpg'
import imgr4 from '../img/Hossein.jpg'
import exit from '../img/logout.png'




export default function  About(){
  return (
  <div className="body-about"> 
  <div className="head-body-about">
    <div className="innovative">
      <h1>
        Innovative AI <br /> Developer Team
      </h1>
    </div>
    <div className="matn-head-body-about">
    <p>Our team of skilled developers and engineers has expertise in a variety of cutting-edge technologies, including machine learning, 
        natural language processing, computer vision, and robotics.
      </p>
    </div>

    <div className="cl">
    </div>
    <hr />
    </div>
    <div className="box-about">

  <div className="body-about-developer">
    <div className="about-img-developer">
    <img src={imgr} alt="prooof" />
    </div>
    <div className="about-matn-developer">
      <div className="masol">
        <p>Back-end Developer</p>
      </div>
      <div className="card">
      <img src={imgr1} alt="prooof" />
      </div>
      <div className="cl"></div>
    <div className="matn-developer-p">


    <p> hi this is hooman <span>👋</span> <br />
    im one of the main back-end developers in code club happy to see you here we im from iran
     , tehran 19 years old and student of zanjan university in cs expected to get my degree in 3 years from now. <span>🙂</span> 
     </p>
     <h2>
      Hooman
     </h2>
     <button>
     <img src={imgr2} alt="prooof" />
     <p> Buy me a coffee </p>
     </button>
     
    </div>
    </div>


  </div>

  <div className="body-about-developer1">
  <div className="about-img-developer1">
    <img src={imgr3} alt="prooof" />
    </div>
    <div className="about-matn-developer1">
      <div className="masol">
        <p>Front-end Developer</p>
      </div>
      <div className="card">
      <img src={imgr1} alt="prooof" />
      </div>
      <div className="cl"></div>
      <br />
      <br />
    <div className="matn-developer-p">

   
    <p className='mar-but'> 
    Computer engineering student of Mazandaran University of Science and Technology. <br />
    Front End in the Code Club team. 
     </p>
     <h2>
      Amir hossein
     </h2>
     <button>
     <img src={imgr2} alt="prooof" />
     <p> Buy me a coffee </p>
     </button>
     
    </div>
    </div>
    

  </div>

  <div className="body-about-developer2">
  
    <div className="about-matn-developer2">
      <div className="masol">
        <p>Back-end Developer</p>
      </div>
      <div className="card">
      <img src={imgr1} alt="prooof" />
      </div>
      <div className="cl"></div>
      <br />
      <br />
    <div className="matn-developer-p">

   
    <p className='mar-but'> 
    
     </p>
     <h2>
      Hossein
     </h2>
     <button>
     <img src={imgr2} alt="prooof" />
     <p> Buy me a coffee </p>
     </button>
     
    </div>
    </div>
    <div className="about-img-developer2">
    <img src={imgr4} alt="prooof" />
    </div>

  </div>
    <div className="cl"></div>




    <div className="head-body-about">
    <div className="innovative">
      <h1>
        Innovative AI <br /> Project
      </h1>
    </div>
    <div className="matn-head-body-about">
    <p>Our solutions can help our clients to automate  <br /> their operations,
    optimize their workflow, <br /> and transform their businesses
      </p>
    </div>

    <div className="all-project">
              <div className="namad">
                <img src={exit} alt="prof" />
              </div>
                <div className="header-join">
                    
                    <button>Join team</button>
                </div>
            </div>

    <div className="cl">
    </div>
    <hr />
    </div>




    <div className='box-rang'>
      <div className="box-zard">
        <div className="head-box-zard">
          <button>+</button>
    <div className="p-h">
      <div className="p1">
          <p className='ph1' >2021</p>
      </div>
      <div className="p2">    
          <p></p>
      </div>
      <div className="p3">
          <p className='ph3'>Retail</p>
      </div>    
    </div>

        </div>
      </div>
    </div>






   












    </div>








  </div>
  )
}