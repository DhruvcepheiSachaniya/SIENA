import "../CSS/Common.css";
import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Efficacy_of_vonoprazan from "./pdfs/Efficacy_of_vonoprazan.pdf"
import Evidance_based_guideline_2021 from "./pdfs/Evidance_based_guideline_2021.pdf"
import Maintenance_of_Erosive_esophagitis from "./pdfs/Maintenance_of_Erosive_esophagitis_(Vonoprazan_VS_Lansoprazole).pdf"
import P_CAB_GERD from "./pdfs/P-CAB_&_GERD.pdf"
import pharmacodynamics_and_pharmacokinetics from "./pdfs/pharmacodynamics_and_pharmacokinetics_of_Vonoprazan vs Lansoprazole.pdf";
import Phase_3_clinical_trial_vonoprazan from "./pdfs/Phase_3_clinical_trial_vonoprazan.pdf"
import Randomised_trial_of_acid_inhibition_by_vonoprazan_10_20_mg_once_daily_vs_Rabeprazole from "./pdfs/Randomised_trial_of_acid_inhibition_by_vonoprazan_10_20_mg_once_daily_vs_Rabeprazole.pdf";
import Vonoprazan_for_GERD_clinical_study from "./pdfs/Vonoprazan_for_GERD_clinical_study.pdf"
import Vonoprazan_for_GERD from "./pdfs/Vonoprazan_for_GERD.pdf"
import Vonoprazan_for_H_pylori from "./pdfs/Vonoprazan_for_H.pylori.pdf"
import Vonoprazan_for_NERD from "./pdfs/Vonoprazan_for_NERD_(phase_3_clinical_study).pdf"
import Vonoprazan_fumarate_for_acid_related_disorders from "./pdfs/Vonoprazan_fumarate_for_acid_related_disorders.pdf";
import Vonoprazan_prevents_NSAIDs_induced_ulcers from "./pdfs/Vonoprazan_prevents_NSAIDs_induced_ulcers.pdf"
import Vonoprazan_prevents_recurrent_ulcers from "./pdfs/Vonoprazan_prevents_recurrent_ulcers_(Phase_3_clinical_study).pdf";
import VonoprazanGuideline1 from "./pdfs/VonoprazanGuideline1.pdf";

// import temp_video from "https://youtu.be/oc_o5DZM3qc?si=O8xEUhbz05ReMjE7";
import article_image from "./image.png"
import yt_img from "./yt_image.png"
import pdf_img from "./pdf_img.png"
import yt_video_icon from "./round_yt_img.png"

// new PDFs
import AACE_guideline_for_NAFLD from '../assets/PDF/AACE_guideline_for_NAFLD-NASH.pdf';
import aasld_practice_guidance_on_the_clinical_assessment from '../assets/PDF/aasld_practice_guidance_on_the_clinical_assessment.31 (3).pdf';
import ADA_guideline_portion_1 from '../assets/PDF/ADA guideline portion 1.pdf';
import ADA_guideline_portion_2 from '../assets/PDF/ADA guideline portion 2.pdf';
import AGA_clinical_practice_guideline_for_Lean_NAFLD_patients from '../assets/PDF/AGA clinical practice guideline for Lean NAFLD patients.pdf'
import AGA_critcal_care_pathway_for_NAFLD from '../assets/PDF/AGA critcal care pathway for NAFLD.pdf';
import ALEG_guideline from '../assets/PDF/ALEG guideline.pdf';
import EASL_guideline from '../assets/PDF/EASL guideline.pdf';
import INASL_guideline from '../assets/PDF/INASL guideline.pdf';
import Japanease_guideline_of_NAFLD_2020 from '../assets/PDF/Japanease guideline of NAFLD 2020.pdf';

import striperimg from '../assets/images/three_in_one.png';

function DisplayVideo(props) {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [expandedDescriptionIndices, setExpandedDescriptionIndices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryVideo, setSearchQueryVideo] = useState('');
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null); // Track playing video index

  const [openArticleTab, setOpenArticleTab] = useState(true);
  const [openVideoTab, setOpenVideoTab] = useState(false);

  const [article, setArticle] = useState([
    {
      title: "AACE guideline for NAFLD-NASH",
      // src: Efficacy_of_vonoprazan,
      src: AACE_guideline_for_NAFLD,
      description : `Efficacy of vonoprazan for initial and maintenance
      therapy in reflux esophagitis`
    },
    {
      title: "aasld_practice_guidance_on_the_clinical_assessment",
      // src: Evidance_based_guideline_2021,
      src: aasld_practice_guidance_on_the_clinical_assessment,
      description : `Evidence-based clinical practice guidelines for gastroesophageal
      reflux disease 2021...`
    },
    {
      title: "ADA guideline portion 1",
      // src: Maintenance_of_Erosive_esophagitis,
      src: ADA_guideline_portion_1,
      description: `Vonoprazan Versus Lansoprazole for Healing and Maintenance
      of Healing...`
    },
    {
      title: "ADA guideline portion 2",
      // src: P_CAB_GERD,
      src: ADA_guideline_portion_2,
      description:`Potassium-competitive acid blockers and gastroesophageal reflux 
      disease...`
    },
    {
      title: "AGA clinical practice guideline for Lean NAFLD patients",
      // src: pharmacodynamics_and_pharmacokinetics,
      src: AGA_clinical_practice_guideline_for_Lean_NAFLD_patients,
      description:`Pharmacodynamics and Pharmacokinetics of the
      Potassium-Competitive...`
    },
    {
      title: "AGA critcal care pathway for NAFLD",
      // src: Phase_3_clinical_trial_vonoprazan,
      src: AGA_critcal_care_pathway_for_NAFLD,
      description:` Phase III, randomised, double- blind, multicentre study 
      to evaluate the efficacy...`
    },
    {
      title: "ALEG guideline",
      // src: Randomised_trial_of_acid_inhibition_by_vonoprazan_10_20_mg_once_daily_vs_Rabeprazole,
      src: ALEG_guideline,
      description:`Randomised trial of acid inhibition by vonoprazan 10/20 mg 
      once daily...`
    },
    {
      title: "EASL guideline",
      // src: Vonoprazan_for_GERD_clinical_study,
      src: EASL_guideline,
      description:` Short‑Term Symptomatic Relief in Gastroesophageal Reflux Disease: 
      A Comparative...`
    },
    {
      title: "INASL guideline",
      // src: Vonoprazan_for_GERD,
      src: INASL_guideline,
      description:` Vonoprazan fumarate, a novel potassium
      competitive acid blocker, in the management 
      ...`
    },
    {
      title: "Japanease guideline of NAFLD 2020",
      // src: Vonoprazan_for_H_pylori,
      src: Japanease_guideline_of_NAFLD_2020,
      description:` Vonoprazan and Helicobacter pylori
      Treatment: A Lesson From Japan...`
    },
    // {
    //   title: "Vonoprazan for NERD",
    //   src: Vonoprazan_for_NERD,
    //   description:`Evaluation of the Efficacy and Safety of Vonoprazan in Patients...`
    // },
    // {
    //   title: "Vonoprazan fumarate for acid related disorders",
    //   src: Vonoprazan_fumarate_for_acid_related_disorders,
    //   description:` Vonoprazan Fumarate for the Management of
    //   Acid-Related Diseases...`
    // },
    // {
    //   title: "Vonoprazan prevents NSAIDs induced ulcers",
    //   src: Vonoprazan_prevents_NSAIDs_induced_ulcers,
    //   description:` 2020 Seoul Consensus on the Diagnosis and 
    //   Management of Gastroesophageal...`
    // },
    // {
    //   title: "Vonoprazan prevents recurrent ulcers",
    //   src: Vonoprazan_prevents_recurrent_ulcers,
    //   description:`Vonoprazan prevents ulcer recurrence during  
    //   long-term NSAID therapy: randomised...`
    // },
    // {
    //   title: "Vonoprazan Guideline",
    //   src: VonoprazanGuideline1,
    //   description:` Vonoprazan prevents low-dose aspirin-associated 
    //   ulcer recurrence: randomised...`
    // }
  ]);


  

  const [videos, setVideos] = useState([
    
    {
      video_src: 'https://www.youtube.com/embed/tr_tVyoWADg?si=q_Yan6-j4hL3MmGK',
      video_dec: 'How do Potassium Competitive Acids Blockers (PCABs) work as compared to Proton pump inhibitors (PPIs)?',
      video_title: 'Video title 1',
      sequence: 1,
    },
    {
      video_src: 'https://www.youtube.com/embed/xwQ-6FbbCfE?si=F_IX8CnOSJmCnids',
      video_dec: 'What is the difference between Vonoprazan and conventional PPIs ?',
      video_title: 'Video title 2',
      sequence: 2,
    },
    {
      video_src: 'https://www.youtube.com/embed/aClpaVUyS28?si=UYhpjQPUPtbPSTbz',
      video_dec: 'What are important pharmacokinetic features of Vonoprazan ?',
      video_title: 'Video title 3',
      sequence: 3,
    },
    {
      video_src: 'https://www.youtube.com/embed/zfWxTwp2lbI?si=QDr0-9N5UJ6FLlkJ',
      video_dec: 'What are the approved clinical indications of Vonoprazan ?',
      video_title: 'Video title 4',
      sequence: 4,
    },
    {
      video_src: 'https://www.youtube.com/embed/LOXYNTnES28?si=5mtm_T-7Yd_rYrAM',
      video_dec: 'What are the dosages for different indications of Vonoprazan ?',
      video_title: 'Video title 5',
      sequence: 5,
    },
    {
      video_src: 'https://www.youtube.com/embed/2jykC24hliY?si=cMX0_a8qsnGHJ6u3',
      video_dec: 'What about use of Vonoprazan in special populations (Children/pregnancy/elderly) and conditions?',
      video_title: 'Video title 6',
      sequence: 6,
    },
    {
      video_src: 'https://www.youtube.com/embed/8NRWQcF5RrA?si=tXI__PzscmrxNNs5',
      video_dec: 'What is the difference between acid inhibitory effects of Vonoprazan and Rabeprazole ?',
      video_title: 'Video title 7',
      sequence: 7,
    },
    {
      video_src: 'https://www.youtube.com/embed/kPlneOnmHBc?si=JwYtXOckHIGGaCHc',
      video_dec: 'What research has been conducted comparing Vonoprazan with PPIs for the treatment of GERD ?',
      video_title: 'Video title 8',
      sequence: 8,
    },
    {
      video_src: 'https://www.youtube.com/embed/vKHWb5_6qR8?si=4IwuYPUyp4pDewpE',
      video_dec: 'How safe is Vonoprazan on a long term Maintenance dose in GERD and Erosive Esophagitis ?',
      video_title: 'Video title 9',
      sequence: 9,
    },
    {
      video_src: 'https://www.youtube.com/embed/zNxEo8BXhX4?si=zzfBkZH9w0Jmi6KK',
      video_dec: 'What research has been conducted comparing Vonoprazan with PPIs for the treatment of Erosive GERD For H. pylori therapy ?',
      video_title: 'Video title 10',
      sequence: 10,
    },
    {
      video_src: 'https://www.youtube.com/embed/JhOFaUjefRc?si=_SshPbcYsB3dlnAv',
      video_dec: 'Will Vonoprazan be effective as compared to PPIs in the treatment of Refractory GERD ?',
      video_title: 'Video title 11',
      sequence: 11,
    },
    {
      video_src: 'https://www.youtube.com/embed/kpkb8sk62wI?si=DvqD0TaL1hsZefFc',
      video_dec: 'What about Vonoprazan in Nocturnal Acid Breakthrough ?',
      video_title: 'Video title 12',
      sequence: 12,
    },
    {
      video_src: 'https://www.youtube.com/embed/BfvOvxnbZkg?si=pb1y2JcREfIQ258f',
      video_dec: 'What are the guidelines for the use of Vonoprazan ?',
      video_title: 'Video title 13',
      sequence: 13,
    },
    {
      video_src: 'https://www.youtube.com/embed/dv-6vpT6x8M?si=Iftu_eLpXiGV836F',
      video_dec: 'How can we adopt the Vonoprazan in our clinical practice ?',
      video_title: 'Video title 14',
      sequence: 14,
    },
    {
      video_src: 'https://www.youtube.com/embed/f-XDZqNtjOs?si=d8n2h7PX7LJl0PUj',
      video_dec: 'Is Vonoprazan the next big thing in the treatment of Acid Peptic Disorders?',
      video_title: 'Video title 15',
      sequence: 15,
    },
    {
      video_src: 'https://www.youtube.com/embed/Q-BTPp3vn6U?si=JoiePPvov_f6K-SZ',
      video_dec: 'What is the difference between acid inhibitory effects of Vonoprazan and Lansoprazole?',
      video_title: 'Video title 16',
      sequence: 16,
    },
    {
      video_src: 'https://www.youtube.com/embed/_uF5INxFs6Q?si=PhHmzYnsHOLVrdtQ',
      video_dec: 'MOA of Vozan',
      video_title: 'Video title 17',
      sequence: 17,
    },
  ]);

  const toggleDescription = (index) => {
    setExpandedDescriptionIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index); // Collapse description if already expanded
      } else {
        return [...prevIndices, index]; // Expand description
      }
    });
  };

  const openPdf = (pdfSrc) => {
    if (isMobile()) {
      // Open PDF in a new tab/window on mobile devices
      window.open(pdfSrc, "_blank");
    } else {
      setSelectedPdf(pdfSrc);
      setShowPdfModal(true);
    }
  };

  const closePdf = () => {
    setSelectedPdf(null);
    setShowPdfModal(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchChangeVideo = (event) => {
    setSearchQueryVideo(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const filteredVideos = videos
    .filter((item) => item.video_dec.toLowerCase().includes(searchQueryVideo.toLowerCase()))
    .sort((a, b) => a.sequence - b.sequence);

  const filteredArticles = article
    .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.sequence - b.sequence); // Sort articles by sequence number

  const renderPdf = () => {
    if (!selectedPdf) return null;
    return (
      <Modal show={showPdfModal} onHide={closePdf} size="lg" centered>
        <Modal.Body>
          <iframe
            title="pdfViewer"
            src={selectedPdf}
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
        </Modal.Body>
      </Modal>
    );
  };

  const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes("mobile") || userAgent.includes("android");
  };

  const handleArticleTabClicked = () => {
    setOpenArticleTab(true);
    setOpenVideoTab(false)
  };

  const handleVideoTabClicked = () => {
    setOpenVideoTab(true);
    setOpenArticleTab(false)
  };

  const handleBackBtn = () => {
    setOpenArticleTab(false);
    setOpenVideoTab(false);
    setPlayingVideoIndex(null); // Stop playing any video when back button is clicked
  };

  const handleVideoPlay = (index) => {
    setPlayingVideoIndex(index);
  };

  const handleCloseVideo = () => {
    setPlayingVideoIndex(null);
  }

  const readArticleText = 'Read Full Article >';
  const playVideoText = 'Play Video >'

  return (
    <>
        <div style={{ display: "flex" }}>
        <img style={{ height: "50px"}} src={striperimg} alt="stripper image" />
        </div>
      <div className="video-article-tab-container">
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <div
            style={{ textAlign: 'center', height: openArticleTab ? "65px": "50px" }}
            className={openArticleTab ? "selected-tab" : "article-tab"}
            onClick={handleArticleTabClicked}
          >
            <h4> Guideline <br /> Recommendations </h4>
            <img src={article_image} alt="Article Tab" />
          </div>
          {/* change here */}
          {/* <div
            className={openVideoTab ? "selected-tab" : "video-tab"}
            style={{ width: openArticleTab ? "150px" : "200px"}}
            onClick={handleVideoTabClicked}
          >
            <h4> Studies</h4>
            <img src={yt_img} alt="Video Tab" />
          </div> */}
        </div>

        <div className={openArticleTab ? "search-container" : "none"}>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={handleSearchChange}
            id="search-box"
          />
          {searchQuery && (
            <button className="clear-btn" onClick={clearSearch}>
              &#x2715;
            </button>
          )}
        </div>

        <div className={openVideoTab ? "search-container-video" : "none"}>
          <input
            type="text"
            placeholder="Search by question..."
            value={searchQueryVideo}
            onChange={handleSearchChangeVideo}
            id="search-box-video"
          />
          {searchQueryVideo && (
            <button
              className="clear-btn"
              id="clear-btn-video"
              onClick={clearSearch}
            >
              &#x2715;
            </button>
          )}
        </div>
      </div>

      {/* search-container */}

      <Row className="align-items-center">
        <Col lg={5} md={6}>
          <div className="row align-items-center">
            {/* <div className={openArticleTab ? 'search-container' : "none"}>
              <input
                type="text"
                placeholder="Search by title..."
                value={searchQuery}
                onChange={handleSearchChange}
                id="search-box"
              />
              {searchQuery && (
                <button className="clear-btn" onClick={clearSearch}>
                  &#x2715;
                </button>
              )}
            </div> */}

            {/* <div className={openVideoTab ? 'search-container-video' : "none"}>
              <input
                type="text"
                placeholder="Search by question..."
                value={searchQueryVideo}
                onChange={handleSearchChangeVideo}
                id="search-box-video"
              />
              {searchQueryVideo && (
                <button className="clear-btn" onClick={clearSearch}>
                  &#x2715;
                </button>
              )}
            </div> */}
          </div>
        </Col>
      </Row>

      <Row>
        <span>{/* <strong>Coming Soon.....</strong> */}</span>

        {/* className="video-article-tab-container" */}
        {/* <div className={openArticleTab || openVideoTab ? 'back-btn-container' : 'none'}>
          <button className="back-btn" onClick={handleBackBtn}> Back </button>
        </div> */}

        {/* article-tab */}

        {/* className="cards-container" */}

        <div className={openArticleTab ? "cards-container" : "none"}>
          {filteredArticles.map((item, index) => (
            <div className="card" id="card" key={index}>
              <div>
                <img
                  src={pdf_img}
                  height="50px"
                  style={{ cursor: "pointer" }}
                  alt="PDF"
                />
                <strong>{item.title}</strong>
              </div>
              <span onClick={() => openPdf(item.src)}> {readArticleText}</span>
            </div>
          ))}
        </div>

        <div className={openVideoTab ? "video-cards-container" : "none"}>
          {filteredVideos.map((item, index) => (
            <div className="video-card" id="video-card" key={index}>
              <div>
                {/* <strong>{item.video_title}</strong> */}

                <strong>
                  {/* {expandedDescriptionIndices.includes(index)
                    ? item.video_dec
                    : `${item.video_dec.slice(0, 30)}...`}
                  {!expandedDescriptionIndices.includes(index) && (
                    <button onClick={() => toggleDescription(index)} id="more-btn">
                      More
                    </button>
                  )} */}

                  <img src={yt_video_icon} height="50px" alt="Play Video" />

                  {item.video_dec}
                </strong>
              </div>
              <span onClick={() => handleVideoPlay(index)}>
                {" "}
                {playVideoText}{" "}
              </span>
              {playingVideoIndex === index && (
                <>
                  <div className="video-player-container">
                    <div className="close-btn">
                      <button
                        className="video-close-btn"
                        id="video-close-btn"
                        onClick={handleCloseVideo}
                      >
                        &#x2715;
                      </button>
                    </div>
                    <iframe
                      width="400"
                      height="315"
                      src={item.video_src}
                      title={item.video_title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      // allowFullScreen
                    ></iframe>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Row>

      {renderPdf()}
    </>
  );
}

export default DisplayVideo;
