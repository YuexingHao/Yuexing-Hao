<style>
/* Compact "mini press" grid that matches press.html style */
.press-mini {
  margin: 12px 0 6px;
}

.press-mini-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
}

.press-mini-header .press-mini-more {
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.press-mini-grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 18px;
}

.press-mini-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.press-mini-thumb {
  flex: 0 0 110px;
  height: 78px;
  border-radius: 10px;
  overflow: hidden;
  background: #f3f4f6;
}

.press-mini-thumb a {
  display: block;
  width: 100%;
  height: 100%;
}

.press-mini-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #000000;
  border-radius: 10px;
  transition: opacity 0.2s ease;
}

.press-mini-thumb a:hover img {
  opacity: 0.85;
}

/* Wide logo images: show on white, uncropped */
.press-mini-thumb.logo-card {
  background: #ffffff;
}

.press-mini-thumb.logo-card img {
  object-fit: contain;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
}

.press-mini-meta {
  min-width: 0;
}

.press-mini-date {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
}

.press-mini-title {
  margin: 0;
  font-size: 14px;
  line-height: 1.35;
  font-weight: 600;
}

.press-mini-title a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(0,0,0,0.25);
}

.press-mini-title a:hover {
  opacity: 0.75;
}

.press-mini-outlets {
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
}

.press-mini-outlets a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(0,0,0,0.25);
}

.press-mini-outlets a:hover {
  opacity: 0.75;
}

@media (max-width: 900px) {
  .press-mini-grid {
    grid-template-columns: 1fr;
  }
  .press-mini-thumb {
    flex-basis: 120px;
  }
}

@media (prefers-color-scheme: dark) {
  .press-mini-thumb {
    background: #111827;
  }
  .press-mini-date,
  .press-mini-outlets {
    color: #a0a0a0;
  }
  .press-mini-title a,
  .press-mini-outlets a {
    border-bottom-color: rgba(229,229,229,0.35);
  }
  .press-mini-thumb img {
    border-color: #e5e5e5;
  }
  .press-mini-thumb.logo-card {
    background: #ffffff;
  }
}

/* Manual dark mode toggle support */
body.dark-mode .press-mini-thumb {
  background: #111827;
}
body.dark-mode .press-mini-date,
body.dark-mode .press-mini-outlets {
  color: #a0a0a0;
}
body.dark-mode .press-mini-title a,
body.dark-mode .press-mini-outlets a {
  border-bottom-color: rgba(229,229,229,0.35);
}
body.dark-mode .press-mini-thumb img {
  border-color: #e5e5e5;
}
body.dark-mode .press-mini-thumb.logo-card {
  background: #ffffff;
}
</style>

<div class="press-mini" id="press">
  <div class="press-mini-header">
    <h2 style="margin: 20px 0px 10px;">Press</h2>
    <a class="press-mini-more" href="{{ '/press/' | relative_url }}">More press →</a>
  </div>

  <div class="press-mini-grid">
    <!-- 1 -->
    <div class="press-mini-card">
      <div class="press-mini-thumb logo-card">
        <a href="https://startupfortune.com/harvard-and-mit-built-an-ai-model-of-83-billion-people-to-test-products-on/" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/press/MatrAIx-logo-PureText-black-nobackground.png' | relative_url }}" alt="MatrAIx">
        </a>
      </div>
      <div class="press-mini-meta">
        <div class="press-mini-date">Aug 2026</div>
        <p class="press-mini-title">
          <a href="https://startupfortune.com/harvard-and-mit-built-an-ai-model-of-83-billion-people-to-test-products-on/" target="_blank" rel="noopener">
            Harvard and MIT built an AI model of 8.3 billion people to test products on
          </a>
        </p>
        <div class="press-mini-outlets">
          Published at:
          <a href="https://startupfortune.com/harvard-and-mit-built-an-ai-model-of-83-billion-people-to-test-products-on/" target="_blank" rel="noopener">Startup Fortune</a>
          · <a href="https://www.forbes.com.tr/saglik/hastaya-dokunmadan-once-8-3-milyar-kez-denemek-sagligin-yeni-test-dunyasi-matraix" target="_blank" rel="noopener">Forbes Türkiye</a>
          · <a href="https://www.nzz.ch/nzz-am-sonntag/report-und-debatte/die-ki-vermessung-der-menschheit-unsere-acht-milliarden-doppelgaenger-ld.10019342" target="_blank" rel="noopener">NZZ am Sonntag</a>
          · <a href="https://www.forbes.com/sites/lanceeliot/2026/08/26/using-eight-billion-ai-personas-for-psychology-research-has-its-ups-and-downs/" target="_blank" rel="noopener">Forbes</a>
          · <a href="https://www.techtimes.co.uk/harvard-mit-matraix-simulating-global-human-behavior-1808459" target="_blank" rel="noopener">Tech Times UK</a>
          · <a href="https://blog.aiunfiltered.dev/p/from-synthetic-users-to-simulated" target="_blank" rel="noopener">AI Unfiltered</a>
          · <a href="https://www.europeanscientist.com/en/features/the-superpower-will-simulate-the-world/" target="_blank" rel="noopener">European Scientist</a>
        </div>
      </div>
    </div>

    <!-- 2 -->
    <div class="press-mini-card">
      <div class="press-mini-thumb">
        <a href="https://newsnetwork.mayoclinic.org/discussion/new-mayo-clinic-study-advances-personalized-prostate-cancer-education-with-an-ehr-integrated-ai-agent/" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/press/Mayo_Clinic_Press.png' | relative_url }}" alt="Mayo Clinic News">
        </a>
      </div>
      <div class="press-mini-meta">
        <div class="press-mini-date">Jan 2026</div>
        <p class="press-mini-title">
          <a href="https://newsnetwork.mayoclinic.org/discussion/new-mayo-clinic-study-advances-personalized-prostate-cancer-education-with-an-ehr-integrated-ai-agent/" target="_blank" rel="noopener">
            New Mayo Clinic study advances personalized prostate cancer education with an EHR-integrated AI agent
          </a>
        </p>
        <div class="press-mini-outlets">
          Published at:
          <a href="https://newsnetwork.mayoclinic.org/discussion/new-mayo-clinic-study-advances-personalized-prostate-cancer-education-with-an-ehr-integrated-ai-agent/" target="_blank" rel="noopener">Mayo Clinic News</a>
          · <a href="https://www.newswise.com/articles/new-mayo-clinic-study-advances-personalized-prostate-cancer-education-with-an-ehr-integrated-ai-agent" target="_blank" rel="noopener">NewsWise</a>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <div class="press-mini-card">
      <div class="press-mini-thumb">
        <a href="https://research.google/blog/towards-better-health-conversations-research-insights-on-a-wayfinding-ai-agent-based-on-gemini/" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/press/Google_Research_Blog.png' | relative_url }}" alt="Google Research Blog">
        </a>
      </div>
      <div class="press-mini-meta">
        <div class="press-mini-date">Sep 2025</div>
        <p class="press-mini-title">
          <a href="https://research.google/blog/towards-better-health-conversations-research-insights-on-a-wayfinding-ai-agent-based-on-gemini/" target="_blank" rel="noopener">
            Towards better health conversations: Research insights on a “wayfinding” AI agent based on Gemini
          </a>
        </p>
        <div class="press-mini-outlets">
          Published at:
          <a href="https://research.google/blog/towards-better-health-conversations-research-insights-on-a-wayfinding-ai-agent-based-on-gemini/" target="_blank" rel="noopener">Google Research Blog</a>
          · <a href="https://thewillowventures.com/research-insights-on-a-wayfinding-ai-agent-based-on-gemini-insights-by-willow-ventures/" target="_blank" rel="noopener">Willow Ventures</a>
        </div>
      </div>
    </div>

    <!-- 4 -->
    <div class="press-mini-card">
      <div class="press-mini-thumb">
        <a href="https://www.human.cornell.edu/news/imported/2025/08/review-large-language-models-cancer-care-reveals-limitations-room-improvement" target="_blank" rel="noopener">
          <img src="{{ '/assets/img/press/CHE_News.png' | relative_url }}" alt="Cornell CHE News">
        </a>
      </div>
      <div class="press-mini-meta">
        <div class="press-mini-date">Aug 2025</div>
        <p class="press-mini-title">
          <a href="https://www.human.cornell.edu/news/imported/2025/08/review-large-language-models-cancer-care-reveals-limitations-room-improvement" target="_blank" rel="noopener">
            Review of large language models in cancer care reveals limitations, room for improvement
          </a>
        </p>
        <div class="press-mini-outlets">
          Published at:
          <a href="https://www.human.cornell.edu/news/imported/2025/08/review-large-language-models-cancer-care-reveals-limitations-room-improvement" target="_blank" rel="noopener">Cornell News</a>
        </div>
      </div>
    </div>

  </div>
</div>
