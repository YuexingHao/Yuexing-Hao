<h1 id="publications"></h1>

<h2 style="margin: 2px 0px -15px;">First Author Publications</h2>

<div class="pub-filter-buttons" style="margin: 25px 0 30px 0; text-align: center;">
  <button class="filter-btn active" data-filter="all">All Papers</button>
  <button class="filter-btn" data-filter="HCI">Human-Computer Interaction</button>
  <button class="filter-btn" data-filter="AI for Health">AI for Health</button>
  <button class="filter-btn" data-filter="LLM Reverse Engineering">LLM Reverse Engineering</button>
</div>

<style>
.pub-filter-buttons {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  overflow-x: auto;
}

.filter-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #043361;
  background: white;
  color: #043361;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-btn:hover {
  background: #043361;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(4, 51, 97, 0.2);
}

.filter-btn.active {
  background: linear-gradient(90deg, #89a3cc, #5d6f9f);
  color: white;
  border-color: #5d6f9f;
  box-shadow: 0 4px 12px rgba(93, 111, 159, 0.3);
}

@media (prefers-color-scheme: dark) {
  .filter-btn {
    border-color: rgb(62, 183, 240);
    background: #20212b;
    color: rgb(62, 183, 240);
  }
  
  .filter-btn:hover {
    background: rgb(62, 183, 240);
    color: #20212b;
  }
  
  .filter-btn.active {
    background: linear-gradient(90deg, #89a3cc, #5d6f9f);
    color: white;
    border-color: #5d6f9f;
  }
}

@media (max-width: 768px) {
  .pub-filter-buttons {
    gap: 8px;
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

<li class="publication-item" data-category="{{ link.category }}">
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
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #a855f7; display: inline-block;"></span>LLM RE</span>
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

{% for link in site.data.PosterPapers.main %}

<li class="publication-item" data-category="{{ link.category }}">
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
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #a855f7; display: inline-block;"></span>LLM RE</span>
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

{% for link in site.data.other_pub.main %}

<li class="publication-item" data-category="{{ link.category }}">
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
          <span class="category-badge" style="color: #6b7280; padding: 3px 10px 3px 4px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-right: 8px; display: inline-flex; align-items: center; gap: 6px; background-color: #fafafa; border: 1px solid #e5e7eb;"><span style="width: 8px; height: 8px; border-radius: 50%; background-color: #a855f7; display: inline-block;"></span>LLM RE</span>
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

</ol>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const publications = document.querySelectorAll('.publication-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter publications
      publications.forEach(pub => {
        const category = pub.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          pub.classList.remove('hidden');
        } else {
          pub.classList.add('hidden');
        }
      });
    });
  });
});
</script>

