import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Mask Group 3/Mask Group 3.png';
import img2 from '../assets/Mask Group 4/Mask Group 4.png';
import CovidImg from '../assets/covid/bb833j4o.png'; 
import { FaSearch } from 'react-icons/fa';
import img4 from '../assets/box-4/011by1ml.png';
import img5 from '../assets/box-5/eak3o4c1.png';
import img6 from '../assets/box-6/qiyh6ryg.png';
import NavbarHome from '../components/NavbarHome';
 
function Home() {
  return (
    <div className='main'>
    <NavbarHome />
    <div className='carousel-top' />
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='carousel-bottom' />
    <div>
    <div className="main-2" />
    <div className='search'>
        <input />
        <FaSearch className='fa' />
    </div>
    <div className="text">
      <h2>To robustly drive transformation in the ICT Sector, strengthening ownership and Skills development in South Africa</h2>
    </div>
    <div className='covidimage'>
      <img src={CovidImg} alt="covid" />
    </div>
    </div>

    <div className='main-3'></div>
    <div className='box-1'>
      <h3>WHO WE ARE</h3>
      <p>The B-BBEE ICT Sector Council was appointed by Minister on 24 September 2015. Their first priority was to align the B-BBEE ICT Sector Code with the Code of Good Practice 2013, whose primary objective was to strengthen transformation requirements in so far as natural black people are concerned.</p>
    </div>
    <div className='box-2'>
      <h3>WHAT WE DO</h3>
      <p>The main responsibility of Council is to develop and monitor implementation of the sector code including but not limited to be the custodian of the B-BBEE ICT Sector Code of South Africa. From September 2017, the Council will require support, financial and other resources to run a fully-fledged office</p>
    </div>
    <div className='box-3'>
      <h3>EMPOWERMENT</h3>
      <p>Under the previous apartheid system, a plethora of policies and legislation was promulgated with the sole objective of denying black people, including black women, access to and control of South Africa's economic productive resources and skills based purely on race and gender considerations.</p>
    </div>

    <div className='main-4'></div>
    <div className='box-4'>
      <img src={img4} alt="img4" />
      <h3>GOVERNING PRINCIPLE</h3>
      <span>The Council shall be guided by the following basic principles:</span> 
      <ul>
        <li>Independence</li>
        <li>Transparency</li>
        <li>Fairness</li>
        <li>Good Corporate Governance</li>
        <li>Equitable Socio-economic</li>
        <li>Transformation</li>
      </ul>
    </div>
    <div className='box-5'>
      <img src={img5} alt="img5" />
      <h3>CODE OF CONDUCT</h3>
      <p>The six ethical principles set out form the underlying foundation of the B-BBEE ICT Sector Council Code of Conduct and Ethics, and each Councillor and employee, as a condition of appointment, undertakes to adhere to these ethical principles. The ethical principles are clear, but have an inevitable appearance of generality.</p>
    </div>
    <div className='box-6'>
      <img src={img6} alt="img6" />
      <h3>CLARIFICATION NOTES</h3>
      <p>Latest Clarification Notes to be published soon.</p>
    </div>

    <div className='main-5'>
      <h2>COMMON QUESTIONS ASKED ABOUT THE B-BBEE ICT SECTOR CODE</h2>
      <div><button><span>Read FAQs</span></button></div>
    </div>

    <div className='main-7'></div>
    <div className='box-7'>
      <div className='text-1'>
        <h2>COUNCIL NAME</h2>
        <p>The name of the Council is the B-BBEE ICT Sector Council hereafter referred to as the “the Council” or “ICT Sector Council”. The Council is established in terms of section 9 (1) of the B-BBEE Act of 2003 as amended from time to time, with a mandate to oversee and monitor the implementation of the ICT Sector Code.</p>
        <button><span>Read more</span></button>
      </div>
      <div className='text-2'>
        <h2>VALIDITY OF ACTS</h2>
        <p>As from the time of the adoption of this Constitution, the affairs of the B-BBEE ICT Sector Council shall be governed by the terms of this Constitution. Any resolution passed and any act performed in terms of such resolutions prior to the coming into effect of this Constitution shall remain valid and of full force and effect.</p>
        <button><span>Read more</span></button>
      </div>
      <div className='text-3'>
        <h2>LEGAL PERSONALITY</h2>
        <p>The Council is a body corporate with perpetual succession, capable of acquiring rights, incurring obligations and entering into legal transactions, and of suing and being sued, in its own name. The Council shall be capable of performing such acts as are necessary for or incidental to the achievement of its objectives.</p>
        <button><span>Read more</span></button>
      </div>
    </div>

    <div className='main-8'>
      <h1>Latest Notices</h1>
    </div>

    <div className='main-9'>
      <div className='square-1'>
        <p>STATEMENT FROM THE BROAD-BASED BLACK ECONOMIC EMPOWERMENT (B-BBEE) ICT SECTOR COUNCIL (THE ICT COUNCIL) EXTENDING ITS CONDOLENCES ON THE PASSING AWAY OF COUNCILLOR NOMBULELO MADLAMINI NTLOKO (MS)</p>
      </div>
      <div className='square-2'>
        <p>Request for Quotation – RFQ NO: 06/04/AFS/001 v.2</p>
        <span>Request for Quotation – RFQ NO: 06/04/AFS/001 v.2</span>
      </div>
      <div className='square-3'>
        <p>Request for Quotation – RFQ NO: 06/04/MAM/001 v.2</p>
        <span>RFQ NO: 06/04/MAM/001 v.2 RFQ REASON: PROVISION OF ACCOUNTING [...]</span>
      </div>
      <div className='square-4'>
        <p>MEDIA STATEMENT – Launch of an Interactive Gender-Based Violence Engagement Platform</p>
      </div>
      <div className='square-5'>
        <p>Clarification Note: Treatment of Economically Active Population (EAP) for compliance targets 2.1.1.2 and 2.1.3 under code series AICT400</p>
      </div>
      <div className='square-6'>
        <p>B-BBEE ICT Sector Council’s 2020 Women’s Month Webinar</p>
        <span>In honour of Women’s Month, the B-BBEE ICT Sector Council [...]</span>
      </div>
    </div>

    <div className='main-10'>
      <h2>Information Communications Technology</h2>
      <p>ICT stands for Information Communications Technology. ICT refers to any device or system that allows the storage, retrieval, manipulation, transmission and receipt of digitalinformation. For example, personal computers, digital television, email, robots</p>
    </div>

    <div className='main-11'>
      <h2>For people with disabilities, can play back audio of this page. At the top right hand corner is a wheelchair icon, click on it to adjust fonts, sizes, contrast and more. We hope you enjoy your visit to our website.</h2>
    </div>
    </div>
  );
}

export default Home;