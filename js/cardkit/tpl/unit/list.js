define([], function(){

    return {"template":"\n{% function get_item(item){ %}\n    {% if (item.href) { %}\n        <a href=\"{%= item.href %}\" class=\"ck-link ck-initem\">{% get_content(item); %}</a>\n    {% } else { %}\n        <p class=\"ck-initem\">{% get_content(item); %}</p>\n    {% } %}\n{% } %}\n\n{% function get_content(item){ %}\n\n    {% if (item.info) { %}\n    <span class=\"ck-info\">{%= item.info %}</span>\n    {% } %}\n\n    {% if (item.icon) { %}\n    <img src=\"{%= item.icon %}\" class=\"ck-icon\"/>\n    {% } %}\n\n    {% if (item.title) { %}\n    <span class=\"ck-title\">{%= item.title %}</span>\n    {% } %}\n\n    {% if (data.style === 'post' || data.style === 'grid') { %}\n        {% if (!item.href) { %}\n            {% if (item.author_url) { %}\n            <a href=\"{%= item.author_url %}\" class=\"ck-link\">{%= item.author %}</a>\n            {% } else if (item.author) { %}\n            <span class=\"ck-title\">{%= item.author %}</span>\n            {% } %}\n        {% } %}\n        {% if (item.subtitle) { %}\n        <span class=\"ck-subtitle\">{%= item.subtitle %}</span>\n        {% } %}\n    {% } %}\n\n{% } %}\n\n\n<article>\n\n    {% if (data.hd) { %}\n    <header>\n        {% if (data.hd_url) { %}\n        <a href=\"{%= data.hd_url %}\" class=\"ck-link\">{%= data.hd %}</a>\n        {% } else { %}\n        <span>{%= data.hd %}</span>\n        {% } %}\n        {% if (data.hd_opt) { %}\n        <div class=\"ck-hdopt\">{%=data.hd_opt%}</div>\n        {% } %}\n    </header>\n    {% } %}\n\n    {% if (data.items.length) { %}\n\n        {% if (data.style === 'more') { %}\n\n        <nav>\n        {% data.items.forEach(function(item){ %}\n            <div class=\"ck-item\">\n                {% get_item(item); %}\n            </div>\n        {% }); %}\n        </nav>\n\n        {% } else { %}\n\n        <ul>\n        {% data.items.forEach(function(item, i){ %}\n            {% if (i && (i % data.config.col === 0)) { %}\n                </ul><ul>\n            {% } %}\n            <li class=\"ck-item\" style=\"width:{%= (data.config.col ? Math.floor(1000/data.config.col)/10 + '%' : '') %};\">\n                {% get_item(item); %}\n                {% if (item.content) { %}\n                <span class=\"ck-content\">{%= item.content %}</span>\n                {% } %}\n                {% if (item.meta && item.meta.length) { %}\n                <span class=\"ck-meta\">{%= item.meta.join('</span><span class=\"ck-meta\">') %}</span>\n                {% } %}\n            </li>\n        {% }); %}\n        </ul>\n\n        {% } %}\n\n    {% } else { %}\n\n        <ul>\n            <li class=\"ck-item blank\">\n                <p class=\"ck-initem\">{%=(data.config.blank || '目前还没有内容')%}</p>\n            </li>\n        </ul>\n\n    {% } %}\n\n    {% if (data.ft) { %}\n    <footer>{%= data.ft %}</footer>\n    {% } %}\n\n</article>\n"}; 

});