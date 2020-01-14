'use strict';

const micromatch = require('micromatch');
module.exports = function () {
    let {config, locals} = this;
    const filePaths = config.sitemap_filter_html.filePaths;
    let pages = locals.get('pages');
    if (filePaths.length <= 0) {
        return;
    }
    pages.forEach(post => {
        for (let path of filePaths) {
            if (-1 == path.lastIndexOf('.htm'))
                path += '.html';
            if (-1 == path.lastIndexOf('.html'))
                path += 'l';
            if (isMatch(post.path, path)) {
                post.sitemap = false;
            }
        }
    });
    locals.set('pages', pages);
    return this;
};

function isMatch(path, patterns) {
    return micromatch.isMatch(path, patterns);
}
