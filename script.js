// ==UserScript==
// @name         Amazon Smile redirect
// @namespace    https://github.com/fejese
// @version      0.1
// @description  Redirect to Amazon Smile
// @author       fejese@fejese.com
// @match        *://www.amazon.com/*
// @match        *://www.amazon.co.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var url = document.location.href;
    var match = url.match('^https?://(?:www\.)?(amazon\.(?:co\.uk|com).*)$');
    if (match === null) return;

    document.location.replace('https://smile.' + match[1])
})();
