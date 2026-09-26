---
layout: homepage
---

## About Me

I am the co-Founder and COO at [MatrAIx](https://matraix.ai/), building a new evaluation paradigm for AI agents.

Previously, I was a Researcher at Microsoft and Postdoctoral Researcher at MIT EECS [Healthy ML Group](https://healthyml.org/people/). I received my Ph.D. from [Cornell University](https://gradschool.cornell.edu/spotlights/student-spotlight-yuexing-hao/) (2022-25) and was an IvyPlus Exchange Scholar at [MIT](https://www.linkedin.com/posts/aihealthmit_mit-postdoc-yuexing-hao-on-how-an-ai-agent-activity-7418000548697673729-FUIp/) (2024-25). I interned at [Google Research](https://research.google/blog/towards-better-health-conversations-research-insights-on-a-wayfinding-ai-agent-based-on-gemini/) (2025), Scale AI (2025), and [Mayo Clinic](https://newsnetwork.mayoclinic.org/discussion/new-mayo-clinic-study-advances-personalized-prostate-cancer-education-with-an-ehr-integrated-ai-agent/) (2024). I hold Computer Science degrees from [Rutgers University](https://math.sas.rutgers.edu/news-events/news/honors-awards-distinction/1588-rutgers-undergraduate-receives-meritorious-performance-award-in-modeling-contest) (B.A., 2017-20) and [Tufts University](https://yuexinghao.github.io/Yuexing-Hao/assets/files/awards/Hao-Yuexing-GSRC-Letter.pdf) (M.S., 2020-22).

<details class="learn-more" id="learn-more">
  <summary class="learn-more-toggle">
    <span class="learn-more-label learn-more-closed">Learn more about me? 👀</span>
    <span class="learn-more-label learn-more-open">Okay, that's enough about me 🙈</span>
    <span class="learn-more-chevron" aria-hidden="true">▾</span>
  </summary>
  <div class="learn-more-body">
    <p>I founded a (semi-successful) AI for medication management company (<a href="https://hugmed.ai/">Hug Medical</a>) in 2022.</p>
    <p>My <a href="https://1135100136.wixsite.com/yuexinghao/blog">old personal website</a> has some interesting posts. Stop using it from Aug 2022.</p>
    <p>Presently, I am based in beautiful Mountain View, CA. In my spare time, I love to do many outdoor activities, such as ice hockey, squash, and water skiing. My name means "happy walking is good", and the pronunciation is "You-Sing." I am a tea aficionado and drink <span id="tea-hover-text" style="border-bottom: 1px dashed #888; cursor: default;">pre-rain dragon well tea</span> everyday.</p>
  </div>
</details>

<span style="color:red;"></span>

<div id="tea-preview" style="display:none; position:fixed; z-index:9999; pointer-events:none;">
  <img src="./assets/img/Tea_w_Hao.JPG" alt="Pre-rain dragon well tea" style="height:260px; width:auto; border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.25);" />
</div>

<script>
(function() {
  var trigger = document.getElementById('tea-hover-text');
  var preview = document.getElementById('tea-preview');
  if (!trigger || !preview) return;
  trigger.addEventListener('mouseenter', function(e) {
    preview.style.display = 'block';
    positionPreview(e);
  });
  trigger.addEventListener('mousemove', positionPreview);
  trigger.addEventListener('mouseleave', function() {
    preview.style.display = 'none';
  });
  function positionPreview(e) {
    var margin = 14;
    var x = e.clientX + margin;
    var y = e.clientY - 270;
    if (x + 180 > window.innerWidth) x = e.clientX - 180 - margin;
    if (y < 0) y = e.clientY + margin;
    preview.style.left = x + 'px';
    preview.style.top  = y + 'px';
  }
})();
</script>

<style>
#research-interests-list li {
  margin-bottom: 18px;
}
.wrapper section h2:not(:first-of-type) {
  margin-top: 1.6em;
}

/* "Learn more about me?" fold */
.learn-more {
  margin: 6px 0 20px;
}
.learn-more-toggle {
  list-style: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid #1148bc;
  border-radius: 999px;
  color: #1148bc;
  font-size: 15px;
  line-height: 1.4;
  user-select: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.learn-more-toggle::-webkit-details-marker {
  display: none;
}
.learn-more-toggle::marker {
  content: "";
}
.learn-more-toggle:hover {
  background: #1148bc;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(17, 72, 188, 0.18);
}
.learn-more-toggle:active {
  transform: translateY(0);
}
.learn-more-toggle:focus-visible {
  outline: 2px solid #1148bc;
  outline-offset: 3px;
}
.learn-more-open {
  display: none;
}
.learn-more[open] .learn-more-closed {
  display: none;
}
.learn-more[open] .learn-more-open {
  display: inline;
}
.learn-more-chevron {
  display: inline-block;
  font-size: 13px;
  transition: transform 0.25s ease;
}
.learn-more[open] .learn-more-chevron {
  transform: rotate(180deg);
}
.learn-more-body {
  margin-top: 14px;
  animation: learn-more-fade 0.3s ease;
}
.learn-more-body p:last-child {
  margin-bottom: 0;
}
@keyframes learn-more-fade {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .learn-more-toggle,
  .learn-more-chevron {
    transition: none;
  }
  .learn-more-body {
    animation: none;
  }
}
@media (prefers-color-scheme: dark) {
  .learn-more-toggle {
    border-color: rgb(62, 183, 240);
    color: rgb(62, 183, 240);
  }
  .learn-more-toggle:hover {
    background: rgb(62, 183, 240);
    color: #111111;
    box-shadow: 0 4px 12px rgba(62, 183, 240, 0.25);
  }
  .learn-more-toggle:focus-visible {
    outline-color: rgb(62, 183, 240);
  }
}
body.dark-mode .learn-more-toggle {
  border-color: rgb(62, 183, 240);
  color: rgb(62, 183, 240);
}
body.dark-mode .learn-more-toggle:hover {
  background: rgb(62, 183, 240);
  color: #111111;
  box-shadow: 0 4px 12px rgba(62, 183, 240, 0.25);
}
body.dark-mode .learn-more-toggle:focus-visible {
  outline-color: rgb(62, 183, 240);
}
</style>

<!-- ## Research Interests 

<ul id="research-interests-list">
<li><strong>Human-Computer Interaction (HCI):</strong> Human-AI Interaction [[CHI 26'](https://arxiv.org/abs/2510.18880), [NPJ Digital Medicine 25' (MedEduChat)](https://www.nature.com/articles/s41746-025-02166-0), [IntelliSys 21'](https://link.springer.com/chapter/10.1007/978-3-030-82193-7_36)], Decision Support Tool (DST) [[CHI 23'](https://dl.acm.org/doi/abs/10.1145/3544548.3581393), [Bioinformatics 20'](https://academic.oup.com/bioinformatics/article/36/16/4458/5813330), [CSCW 24 (b)'](https://dl.acm.org/doi/10.1145/3678884.3681859)], Artificial Intelligence of Things (AIoT) [[CHI EA 25'](https://dl.acm.org/doi/abs/10.1145/3706599.3719286)], Trustworthy [[ICLR 26'](https://arxiv.org/abs/2502.14296)], Explainable LLM</li>
<li><strong>AI for Health:</strong> Clinical Decision Science [[CSCW 23'](https://dl.acm.org/doi/abs/10.1145/3584931.3607023), [CSCW 24 (a)'](https://dl.acm.org/doi/abs/10.1145/3678884.3681841), [NPJ Digital Medicine 25' (Review)](https://www.nature.com/articles/s41746-025-01824-7)], Patient-centered Framework [[CHI 24'](https://dl.acm.org/doi/abs/10.1145/3613904.3642353), [MCP: Digital Health 25'](https://www.sciencedirect.com/science/article/pii/S2949761225000057)], Veterinary Precision Health [[AAAI 24'](https://ojs.aaai.org/index.php/AAAI/article/view/30450)]</li>
<li><strong>LLM Reverse Engineering:</strong> Alignment & Data Attribution [[Preprint 25' (MedPAIR)](https://arxiv.org/abs/2505.24040), [Preprint 25' (MedGUIDE)](https://arxiv.org/abs/2505.11613)], Perturbation [[Preprint 25' (MedPerturb)](https://arxiv.org/abs/2506.17163)], LLM Computing Equity [[Preprint 25' (GPU Equity)](https://arxiv.org/abs/2510.13621)]</li>
</ul> -->

{% include_relative _includes/news.md %}

{% include_relative _includes/awards.md %}

{% include_relative _includes/publications.md %}

{% include_relative _includes/press.md %}

{% include_relative _includes/talks.md %}

{% include_relative _includes/services.md %}
