'use strict';

var front = require('hexo-front-matter');
var fs = require('hexo-fs');

hexo.extend.filter.register('before_post_render', function (data) {
    var log = this.log;

    if (data.layout != 'post')
        return data;
    if (!this.config.render_drafts && data.source.startsWith("_drafts/"))
        return data;

    var newFront = front.parse(data.raw);

    var categories = data.source.split('/');

    if (!newFront.title) {
        newFront.title = categories[categories.length - 1];
        if (newFront.title.lastIndexOf(".") >= 0) {
            newFront.title = newFront.title.substring(0, newFront.title.lastIndexOf("."));
        }
        data.title = newFront.title;
    }

    if (categories.length - 2 > 0) { // Uncategorized
        newFront.categories = categories.slice(1, categories.length - 1);
        data.setCategories(newFront.categories);
    }

    let newFrontStr = '---\n' + front.stringify(newFront);
    fs.writeFile(data.full_source, newFrontStr, 'utf-8');
    return data;
});