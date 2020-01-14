/* global hexo */
'use strict';

hexo.config.sitemap_filter_html = Object.assign({
    filePaths: [],
}, hexo.config.sitemap_filter_html);

hexo.extend.filter.register('before_generate', require('./lib/generator')) ;
