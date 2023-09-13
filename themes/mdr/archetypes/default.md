---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

filename: {{ lower .File.ContentBaseName }}.md
---