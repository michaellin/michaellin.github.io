---
layout: page
permalink: /publications/
title: research
description: Research projects in reversed chronological order.
years: [1956, 1950, 1935, 1905]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
