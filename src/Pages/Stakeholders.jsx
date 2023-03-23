import React from 'react'
import NavbarHome from '../components/NavbarHome';
import stake1 from '../assets/stake-1/DOC_Logo-298x97.png';
import stake2 from '../assets/stake-2/dti-logo-298x112.png';
import stake3 from '../assets/stake-3/b-bbee-comission-logo-spatter-media-298x174.png';
import stake4 from '../assets/stake-4/sanas-298x126.png';

const Stakeholders = () => {
  return (
    <div>
      <NavbarHome/>
      <div className='top'>
        <h4>Stakeholders</h4>
      </div>

      <div style={{ marginTop: "4%"}} className='eachDiv ' >
        <div className='picDiv' >
        <img src={stake1} alt="stake1" style={{ marginRight: '2%' }} />
        <p>The Independent Communications Authority of South Africa (ICASA) is the regulator for the South African communications, broadcasting and postal services sector. ICASA was established by an Act of statute, the Independent Communications Authority of South Africa Act of 2000, as Amended. ICASA’s mandate is spelled out in the Electronic Communications Act for the licensing and regulation of electronic communications and broadcasting services, and by the Postal Services Act for the regulation of the postal sector.</p>
        </div>
      </div>

      <div style={{ marginTop: "4%"}} className='eachDiv ' >
        <div className='picDiv' >
        <img src={stake2} alt="stake2" style={{ marginRight: '2%' }} />
        <p>The dti´s strategic objectives are to:<br /> 1.Facilitate transformation of the economy to promote industrial development, investment, competitiveness and employment creation;<br /> 2.Build mutually beneficial regional and global relations to advance South Africa´s trade, industrial policy and economic development objectives;</p>
        </div>
      </div>

      <div style={{ marginTop: "4%"}} className='eachDiv ' >
        <div className='picDiv' >
        <img src={stake3} alt="stake3" style={{ marginRight: '2%' }} />
        <p>We are established by Section 13B of B-BBEE Act 46 of 2013 and we have jurisdiction throughout the South Africa. We must be impartial and perform our functions without fear, favour or prejudice, in the most cost-effective manner and in accordance with the values and principles mentioned in section 195 of the Constitution. In terms of Section 13E, we are financed from money that is appropriated by Parliament for the B-BBEE Commission, and money lawfully received from any other source. The Auditor-General is mandated to audit our financial records every year.</p>
        </div>
      </div>

      <div style={{ marginTop: "4%"}} className='eachDiv ' >
        <div className='picDiv' >
        <img src={stake4} alt="stake4" style={{ marginRight: '2%' }} />
        <p>The South African National Accreditation System (SANAS) is the only national body responsible for carrying out accreditations in respect of conformity assessment, as mandated through the Accreditation for Conformity Assessment, Calibration and Good Laboratory Practice Act (Act 19 of 2006). This includes the accreditation of: a) Calibration laboratories; b) Proficiency testing service providers; c) Producers of certified reference materials; d) Testing laboratories, which includes Medical, Veterinary, Forensic, Pharmaceutical, Chemical and Microbiological, Physical</p>
        </div>
      </div>
    </div>
  )
}

export default Stakeholders