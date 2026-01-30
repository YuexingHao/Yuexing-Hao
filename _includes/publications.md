<h1 id="publications"></h1>

<h2 style="margin: 2px 0px -15px;">Publications</h2>

<div class="pub-filter-buttons-wrap" style="margin: 25px 0 30px 0;">
  <div class="pub-filter-buttons">
    <button class="filter-btn active" data-filter="first-author">First-Author Papers</button>
    <button class="filter-btn" data-filter="all">All Papers</button>
    <button class="filter-btn" data-filter="HCI">Human-Computer Interaction</button>
    <button class="filter-btn" data-filter="AI for Health">AI for Health</button>
    <button class="filter-btn" data-filter="LLM Reverse Engineering">LLM Reverse Engineering</button>
  </div>
</div>

<style>
.pub-filter-buttons-wrap {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.pub-filter-buttons {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
  min-width: 0;
  padding-bottom: 4px;
}

.pub-filter-buttons::-webkit-scrollbar {
  height: 6px;
}

.pub-filter-buttons::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.filter-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #1a1a1a;
  background: white;
  color: #1a1a1a;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-btn:hover {
  background: #1a1a1a;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.filter-btn.active {
  background: #000000;
  color: white;
  border-color: #000000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

@media (prefers-color-scheme: dark) {
  .filter-btn {
    border-color: #ffffff;
    background: #1a1a1a;
    color: #ffffff;
  }
  
  .filter-btn:hover {
    background: #ffffff;
    color: #1a1a1a;
  }
  
  .filter-btn.active {
    background: #ffffff;
    color: #1a1a1a;
    border-color: #ffffff;
  }
}

@media (max-width: 768px) {
  .pub-filter-buttons {
    justify-content: flex-start;
    gap: 8px;
    padding-left: 0;
    padding-right: 16px;
    scroll-padding-left: 0;
  }
  
  .filter-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}

.publication-item {
  transition: all 0.3s ease;
}

.publication-item.hidden {
  display: none !important;
}
</style>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li class="publication-item" data-category="{{ link.category }}" data-source="publications">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.category %}
        {% if link.category == "HCI" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #0066cc; display: inline-block;"></span>HCI</span>
        {% elsif link.category == "AI for Health" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #22c55e; display: inline-block;"></span>AI for Health</span>
        {% elsif link.category == "LLM Reverse Engineering" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #a855f7; display: inline-block;"></span>LLM Reverse Engineering</span>
        {% endif %}
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="PDF"><i class="fas fa-file-pdf"></i></a>
      {% endif %}
      {% if link.news %} 
      <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="News"><i class="fas fa-newspaper"></i></a>
      {% endif %}
      {% if link.videos %} 
      <a href="{{ link.videos }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Videos"><i class="fas fa-video"></i></a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Code"><i class="fas fa-code"></i></a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Project Page"><i class="fas fa-globe"></i></a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="BibTeX"><i class="fas fa-quote-left"></i></a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

{% for link in site.data.other_pub.main %}

<li class="publication-item" data-category="{{ link.category }}" data-source="other_pub">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.category %}
        {% if link.category == "HCI" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #0066cc; display: inline-block;"></span>HCI</span>
        {% elsif link.category == "AI for Health" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #22c55e; display: inline-block;"></span>AI for Health</span>
        {% elsif link.category == "LLM Reverse Engineering" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #a855f7; display: inline-block;"></span>LLM Reverse Engineering</span>
        {% endif %}
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="PDF"><i class="fas fa-file-pdf"></i></a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Code"><i class="fas fa-code"></i></a>
      {% endif %}
      {% if link.news %} 
      <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="News"><i class="fas fa-newspaper"></i></a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Project Page"><i class="fas fa-globe"></i></a>
      {% endif %}
      {% if link.data %} 
      <a href="{{ link.data }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Dataset"><i class="fas fa-database"></i></a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="BibTeX"><i class="fas fa-quote-left"></i></a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}


{% for link in site.data.PosterPapers.main %}

<li class="publication-item" data-category="{{ link.category }}" data-source="poster">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.category %}
        {% if link.category == "HCI" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #0066cc; display: inline-block;"></span>HCI</span>
        {% elsif link.category == "AI for Health" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #22c55e; display: inline-block;"></span>AI for Health</span>
        {% elsif link.category == "LLM Reverse Engineering" %}
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #a855f7; display: inline-block;"></span>LLM Reverse Engineering</span>
        {% endif %}
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="PDF"><i class="fas fa-file-pdf"></i></a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Code"><i class="fas fa-code"></i></a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Project Page"><i class="fas fa-globe"></i></a>
      {% endif %}
      {% if link.data %} 
      <a href="{{ link.data }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="Dataset"><i class="fas fa-database"></i></a>
      {% endif %}
      {% if link.news %} 
      <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="News"><i class="fas fa-newspaper"></i></a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" title="BibTeX"><i class="fas fa-quote-left"></i></a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const publications = document.querySelectorAll('.publication-item');
  const filterStrip = document.querySelector('.pub-filter-buttons');
  
  // Always start scrolled to the first button (mobile)
  if (filterStrip) {
    filterStrip.scrollLeft = 0;
  }
  
  // Apply first-author filter by default on page load
  publications.forEach(pub => {
    const source = pub.getAttribute('data-source');
    if (source !== 'publications') {
      pub.classList.add('hidden');
    }
  });
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter publications
      publications.forEach(pub => {
        const category = pub.getAttribute('data-category');
        const source = pub.getAttribute('data-source');
        
        if (filter === 'first-author') {
          // Show only publications from publications.yml
          if (source === 'publications') {
            pub.classList.remove('hidden');
          } else {
            pub.classList.add('hidden');
          }
        } else if (filter === 'all') {
          // Show all publications
          pub.classList.remove('hidden');
        } else {
          // Show by category
          if (category === filter) {
            pub.classList.remove('hidden');
          } else {
            pub.classList.add('hidden');
          }
        }
      });
    });
  });
});
</script>

