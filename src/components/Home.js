import React from 'react';
import logo from '../logo.svg';
import Ellipse from '../Ellipse 690.svg';
import image02 from '../image02.png';
import image01 from '../image01.png';
import View from '../View.svg';

function Home(props) {
  return (
    <>
      <div className="item3">
        {
        (props.apiData.length>0)?   props.apiData.map((value,index)=>(

          <div key={index} className='subjectDiv'>
          <p>
            <button className='floarLeft'>0%</button>
            <span className='subjectName'>{value.display_name}</span><br />
            <span>Lectures: {value.children.length}</span>
            <img className='floarRight' src={View} />
          </p>
          <div className='chaptersDiv'>
            <div className="grid-containernew">
              {
              value.children.map((value1,index1)=>(
                <div key={index1} className="item41 subjectPara"><img className='subjectImg' src={(index1%2==0)?image01:image02} /><br />{value1.display_name}</div>
              ))
                }

            </div>
          </div>
        </div>
        )):<p>Data is loading</p>
        }


       
      </div>
    </>
  )
}

export default Home