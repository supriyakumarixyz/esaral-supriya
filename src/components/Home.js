import React from 'react';
import logo from '../logo.svg';
import Ellipse from '../Ellipse 690.svg';
import image02 from '../image02.png';
import image01 from '../image01.png';
import View from '../View.svg';

function Home() {
  return (
    <>
      <div className="item3">
        <div className='subjectDiv'>
          <p>
            <button className='floarLeft'>0%</button>
            <span className='subjectName'>Units & Dimensions</span><br />
            <span>Lectures: 20</span>
            <img className='floarRight' src={View} />
          </p>
          <div className='chaptersDiv'>
            <div className="grid-containernew">
              <div className="item41 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 1</div>
              <div className="item51 subjectPara"><img className='subjectImg' src={image02} /><br /> Lecture 2</div>
              <div className="item61 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 3</div>
              <div className="item71 subjectPara"><img className='subjectImg' src={image02} /><br /> Lecture 4</div>
              <div className="item71 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 5</div>
            </div>
          </div>
        </div>
        <div className='subjectDiv'>
          <p><button className='floarLeft'>0%</button><span className='subjectName'>Vector</span><br /><span>Lectures: 20</span><img className='floarRight' src={View} /></p>
          <div className='chaptersDiv'>
            <div className="grid-containernew">
              <div className="item41 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 1</div>
              <div className="item51 subjectPara"><img className='subjectImg' src={image02} /><br /> Lecture 2</div>
              <div className="item61 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 3</div>
              <div className="item71 subjectPara"><img className='subjectImg' src={image02} /><br /> Lecture 4</div>
              <div className="item71 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 5</div>
            </div>
          </div>
        </div>
        <div className='subjectDiv'>
          <p><button className='floarLeft'>0%</button><span className='subjectName'>Kinematics 1D</span><br /><span>Lectures: 20</span><img className='floarRight' src={View} /></p>
          <div className='chaptersDiv'>
            <div className="grid-containernew">
              <div className="item41 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 1</div>
              <div className="item51 subjectPara"><img className='subjectImg' src={image02} /><br /> Lecture 2</div>
              <div className="item61 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 3</div>
              <div className="item71 subjectPara"><img className='subjectImg' src={image02} /><br /> Lecture 4</div>
              <div className="item71 subjectPara"><img className='subjectImg' src={image01} /><br /> Lecture 5</div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Home