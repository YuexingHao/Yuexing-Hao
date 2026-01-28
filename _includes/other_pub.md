<h1 id="PosterPapers"></h1>

<h2 style="margin: 60px 0px -15px;">Other Papers</h2>


<div class="publications">
<ol class="bibliography">

{% for link in site.data.other_pub.main %}

<li>
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
          <span class="category-badge" style="background-color: #0066cc; color: white; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-right: 8px; display: inline-block;">Human-Computer Interaction</span>
        {% elsif link.category == "AI for Health" %}
          <span class="category-badge" style="background-color: #22c55e; color: white; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-right: 8px; display: inline-block;">AI for Health</span>
        {% elsif link.category == "LLM Reverse Engineering" %}
          <span class="category-badge" style="background-color: #a855f7; color: white; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-right: 8px; display: inline-block;">LLM Reverse Engineering</span>
        {% endif %}
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.news %} 
      <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">News</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.data %} 
      <a href="{{ link.data }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Dataset</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
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

<br>

{% endfor %}

</ol>
</div>
