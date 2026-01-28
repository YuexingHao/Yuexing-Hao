---
layout: simple
title: Biography
permalink: /biography/
---

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif !important;
}

.bio-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.bio-container h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 20px;
  color: #1a1a1a;
}

@media (prefers-color-scheme: dark) {
  .bio-container h2 {
    color: #ffffff;
  }
}

.bio-container p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.bio-container ul {
  color: #374151;
  font-size: 0.95rem;
}

.bio-container ul li {
  margin-bottom: 8px;
}

.download-photo-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}

.download-photo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}

@media (prefers-color-scheme: dark) {
  .bio-container p {
    color: #d1d5db;
  }
  
  .bio-container ul {
    color: #d1d5db;
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 40px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}

@media (prefers-color-scheme: dark) {
  .video-container {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
}

@media (max-width: 768px) {
  .bio-container {
    padding: 20px 15px;
  }
  
  .bio-container h2 {
    font-size: 1.5rem;
    margin-top: 40px;
  }
  
  .bio-container p {
    font-size: 0.9rem;
  }
}
</style>

<div class="bio-container">
  <h2>Biography</h2>
  
  <div style="display: flex; gap: 40px; margin: 30px 0 60px; align-items: flex-start; flex-wrap: wrap;">
    <div style="flex: 0 0 280px;">
      <img src="/Yuexing-Hao/assets/img/Look_Yuexing_Hao.jpg" alt="Yuexing Hao Professional Headshot" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin-bottom: 30px;">
      <a href="/Yuexing-Hao/assets/img/Look_Yuexing_Hao.jpg" download="Yuexing_Hao_Professional_Photo.jpg" class="download-photo-btn" style="display: flex; justify-content: center; max-width: 100%;">
        <i class="fas fa-download"></i> Download Photo
      </a>
    </div>
    <div style="flex: 1; min-width: 300px;">
      <p>Yuexing Hao is an MIT EECS PostDoc in the Healthy ML Group. She holds Computer Science degrees from Rutgers University (B.A.), Tufts University (M.S.), and Cornell University (Ph.D.). Her research focuses on AI for Healthcare and Human-Computer Interaction, with an emphasis on data-driven approaches to clinical decision-making and patient-centered technologies. Yuexing has been awarded over $152,000 in competitive funding as a principal investigator during her doctoral studies. This includes the APF K. Anders Ericsson Dissertation Grant, the PCCW Frank H.T. Rhodes Leadership and Mission Grants, 2024 North America Women in Tech Most Disruptive Award (powered by Amazon), and the NCWIT AIC Collegiate Award (Honorable Mention). She interned at Google Research, Mayo Clinic, and Scale AI.  Her work has been published at Nature Digital Medicine, CHI, AAAI, Bioinformatics, and the Intelligent Systems Conference. She actively serves the research community as Registration Co-Chair for ACM FAccT and Associate Chair for CSCW and CHI.</p>
    </div>
  </div>
  
  <h2>Dissertation Video</h2>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/x2dWQr95vak" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </div>

  <h2>Brief Research Overview</h2>
  <p>In today's healthcare system, patients often feel disconnected from clinical professionals and their care journey. They receive a "one-size-fits-all" plan and are left out of the decision-making process, which can lead to a less satisfying experience. My research focuses on applying advanced AI technologies, including large language models, machine learning, and Internet of Things (IoT) devices, to address challenges in healthcare, particularly in patient-centered healthcare delivery. I aim to enhance the accuracy and efficiency of healthcare systems by using these "objective approaches" to navigate the "subjective" aspects of medical practice, such as clinician notes and patient preferences found in electronic health records. A key aspect of my work is improving the transparency of AI-based healthcare applications, making them more understandable and trustworthy for both clinicians and patients, by addressing critical issues such as building trust in AI systems and ensuring these technologies effectively meet the needs of patients and healthcare providers. Additionally, I emphasize the importance of personalizing healthcare by considering each patient's unique circumstances, including their preferences and socio-economic conditions. This research applies AI across various areas, from specific diseases like cancer to broader healthcare contexts, with the goal of improving both the delivery and experience of healthcare. My work contributes to the development of AI tools that not only enhance clinical decision-making but also foster better human-AI interaction, ultimately leading to improved healthcare outcomes.</p>

  <p>My Ph.D. research, titled "Objective Approaches in a Subjective Medical World," is structured around three pivotal stages. The first stage, Integration [laboratory], involves exploring advanced technologies such as Large Language Models (LLMs), machine learning (ML) models, and Explainable AI (xAI) to enhance and support clinical decision-making. The second stage, Interaction [field], focuses on applying and embedding these technologies into real-world clinical settings. Finally, the Implementation [at scale/in the wild] stage assesses the impact of AI-based healthcare technologies on user experience and outcomes. Beginning with a specialized sample for the initial needs assessment, the research progresses to a field-sized interaction study, potentially leading to positive social impacts during the implementation stage with wider and more diverse populations.</p>
</div>
