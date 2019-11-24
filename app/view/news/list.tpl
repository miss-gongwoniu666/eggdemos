<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          姓名: {{ item.name }} <br/>
          电子邮件: {{item.email}}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>