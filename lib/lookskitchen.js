
"style lookskitchen/lookskitchen.css"

require("dandy");

var $ = require('ore'),
    _ = require('underscore'),
    html = require('ore/html'),
    routes = require('ore/routes'),
    Page = require('copper/Page').Page,
    looks = require('looks'),
    colors = require('looks/lib/colors');

require("looks/lib/effects");

// *************************************************************************************************

looks.styles(

'.backButton', {
    layers: 'highlight, glossy, shadow, stroke',
    'arrowrect-radius': 4.5,
    'arrowrect-pointWidth': 11,
    'highlight-size': 1,
    'highlight-edge': 'bottom',
    'highlight-color': 'rgba(255,255,255,0.2)',
    'highlight-constrict': true,
    'glossy-color': '#2f4989',
    'glossy-width': 50,
    'glossy-height': 30,
    'shadow-inset': true,
    'shadow-blur': 1,
    'shadow-offsetY': 2,
    'shadow-color': 'rgba(0,0,0,0.7)',
    'stroke-size': 1/devicePixelRatio,
    'stroke-color': colors.colorTransform('#2f4989', 0.9, 0.6),
    
    // XXXJoe Not working because subrules are broken
    // '.touched': {
    //     'glossy-color': colors.colorTransform('#2f4989', 1, 0.7),
    // }
},

'.toolbarButton', {
    layers: 'highlight, glossy, shadow, stroke',
    'roundrect-radius': 4.5,
    'highlight-size': 1,
    'highlight-edge': 'bottom',
    'highlight-color': 'rgba(255,255,255,0.2)',
    'highlight-constrict': true,
    'glossy-color': '#2f4989',
    'glossy-width': 50,
    'glossy-height': 30,
    'shadow-inset': true,
    'shadow-blur': 1,
    'shadow-offsetY': 2,
    'shadow-color': 'rgba(0,0,0,0.7)',
    'stroke-size': 1/devicePixelRatio,
    'stroke-color': colors.colorTransform('#2f4989', 0.9, 0.6),
    
    // XXXJoe Not working because subrules are broken
    // '.touched': {
    //     'glossy-color': colors.colorTransform('#2f4989', 1, 0.7),
    // }
},

'.toolbar', {
    'glossy-color': '#2f4989',
    'glossy-width': 1,
    'glossy-height': 44
}

);

// *************************************************************************************************

var WebPage = Page('', {}, [
    html.div('.toolbar', {}, [
        html.div('.backButton', {}, ["Back"]),
        html.div('.toolbarButton', {}, ["Done"]),
    ]),
],
{
    construct: function() {
        looker.inspect(this.query('.backButton').val());
    }    
});

var HomePage = WebPage('', {}, [],
{
    routes: {
        '^/?$': function() {
            return {};
        }
    }
});

