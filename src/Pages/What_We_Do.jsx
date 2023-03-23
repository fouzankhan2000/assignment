import React from 'react';
import NavbarHome from '../components/NavbarHome';
import './What_We_Do.css';
import img7 from '../assets/img7/information-298x199.png';

const What_We_Do = () => {
  return (
    <div className='main'>
      <NavbarHome />
      <div className='top'>
        <h4>What We Do</h4>
      </div>

      <div style={{ marginTop: "4%"}} className='eachDiv ' >
        <div className='picDiv' >
        <img src={img7} alt="img7" style={{ marginRight: '2%' }} />
        <p>The main responsibility of Council is to develop and monitor implementation of the sector code including but not limited to being the custodian of the B-BBEE ICT Sector Code</p>
        </div>
      </div>

    <div className='eachDiv'>
        <h5>INTRODUCTION</h5>
        <p>The B-BBEE ICT Sector Council was appointed on 24 September 2015, with a mandate to:</p>
        <ul>
             <li>The custodian of the B-BBEE ICT Sector Code;</li>
             <li>Advise the organs of state on all matters relating to B-BBEE in the ICT sector</li>
            <li>Monitor and review the implementation of the ICT Sector Code and all related matters</li>
            <li>Develop and foster common standards and code of ethics in the implementation of ICT Sector Code</li>
            <li>Assess, evaluate and commission research on specific areas where such research is not available</li>
            <li>Responsible for the accreditation of the national ICT projects aimed at “bridging the digital divide” in conjunction with the existing bodies such as the USAASA, the Digital Divide Partnership, ICASA, the CSIR, trade unions, NGOs and other organs of civil society</li>
            <li>Provide guidance on sector-specific matters affecting B-BBEE in entities in the sector</li>
            <li>Compile reports on the status of B-BBEE within the ICT sector</li>
        </ul>
        <button className='moreBtn'>+ Read More</button>
      </div>

      <div className='eachDiv'>
        <h5>WHAT WAS THE WORK PROGRAMME OF THE COUNCIL UPON INCEPTION</h5>
        <p >At a strategic level, the Council was required to:</p>
        <br/>
        <ul>
          <li>Review and amend the 2012 B-BBEE ICT Sector Code and get it approved by the Line Minister and the Minister of Trade and Industry, gazetted and monitored for implementation. This would include consultative workshops with the Sector and the actual writing of the Amended Code, workshopping it among members and the line Departments and thereafter channelling it through relevant approval processes.</li>
      
        </ul>
        <button className='moreBtn'>+ Read More</button>
      </div>
      <div className='eachDiv'>
        <h5>WHAT HAS BEEN ACHIEVED THUS FAR</h5>
        <ul>
          <li>The Council completed the Amended Code after several meetings and workshops which included stakeholder consultations, from the private sector to government.</li>
          <li>The amended Code was gazetted on 7 November 2016, making the Council one of the 3 Charter Council to amend its Code to align with the Code of Good Practice developed by the DTI.</li>
      
        </ul>
        <button className='moreBtn'>+ Read More</button>
      </div>
      <div className='eachDiv'>
        <h5>PLANNED ACTIONS</h5>
        <ul>
          <li>Survey of the Transformation in Top 100 companies in the Sector</li>
          <li>Workshop with verification Agencies to engage them on the implementation of the B-BBEE ICT Sector Code to address challenges relating to verifications and interpretation of the Code.</li>
          <li>Develop guidelines and models for broad-based empowerment of Black owned companies at local, provincial and national level.</li>
          <li>Develop and implement an interactive portal to communicate the basic methods of applying the B-BBEE scorecard for all the different elements of B-BBEE.</li>
          <li>Development of the B-BBEE ICT Sector Monitoring Report for the 2017/18 financial year.</li>
          <li>Engagements with stakeholders, proactively or on request, to provide guidance on the implementation of the Code.</li>
      
        </ul>
      </div>
      <div className='eachDiv'>
        <h5>CHALLENGES</h5>
        <ul>
          <li>From September 2017, the Council will require support, financial and other resources to run a fully-fledged office, develop guidelines and manuals for its stakeholders to facilitate the implementation of the Code and also highlight benefits for Measured Entities. The Council will embark on strategic engagements with the Sector to develop a funding model backed by Sector and Government support.</li>
        </ul>
      </div>
    </div>
  )
}

export default What_We_Do