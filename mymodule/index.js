var postcss = require('postcss');
 
module.exports = postcss.plugin('myplugin', function myplugin(options) {
 
    return function (css) {
 
        css.walkDecls(function(decl) {
            if (decl.prop.match(/^sarah$/)) {
                if (decl.value === "happy") {
                    decl.replaceWith("color: #7e05c3")
                } else if (decl.value === "unhappy") {
                    decl.replaceWith("text-transform: uppercase; font: bold; color: #1da713");
                }
            }
        })
    }
 
});