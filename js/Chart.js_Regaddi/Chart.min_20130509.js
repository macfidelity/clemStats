window.Chart=function(t,v){function z(a,c,b,d){q.tooltips.push(new L(a,c,b,d))}function I(a){var c,b;if(0<q.tooltips.length){q.savedState=null==q.savedState?t.getImageData(0,0,t.canvas.width,t.canvas.height):q.savedState;var d=0,h;for(h in q.tooltips){c=t.canvas;var f=0;for(b=0;c;)f+=c.offsetLeft+c.clientLeft,b+=c.offsetTop+c.clientTop,c=c.offsetParent;if(0<window.pageXOffset||0<window.pageYOffset)f-=window.pageXOffset,b-=window.pageYOffset;else if(0<document.body.scrollLeft||0<document.body.scrollTop)f-=
document.body.scrollLeft,b-=document.body.scrollTop;c=f;c=a.clientX-c;b=a.clientY-b;q.tooltips[h].inRange(c,b)&&(q.tooltips[h].render(c,b),d++)}0==d&&t.putImageData(q.savedState,0,0)}}function x(a,c,b){a=C((a-c.graphMin)/(c.steps*c.stepValue),1,0);return b*c.steps*a}function A(a,c,b,d){function h(){k+=f;var e=a.animation?C(p(k),null,0):1;d.clearRect(0,0,n,u);a.scaleOverlay?(b(e),c()):(c(),b(e));if(1>=k)J(h);else if("function"==typeof a.onAnimationComplete)a.onAnimationComplete()}var f=a.animation?
1/C(a.animationSteps,Number.MAX_VALUE,1):1,p=D[a.animationEasing],k=a.animation?0:1;"function"!==typeof c&&(c=function(){});J(h)}function E(a,c,b,d,h,f){var p;a=Math.floor(Math.log(d-h)/Math.LN10);h=Math.floor(h/(1*Math.pow(10,a)))*Math.pow(10,a);d=Math.ceil(d/(1*Math.pow(10,a)))*Math.pow(10,a)-h;a=Math.pow(10,a);for(p=Math.round(d/a);p<b||p>c;)a=p<b?a/2:2*a,p=Math.round(d/a);c=[];B(f,c,p,h,a);return{steps:p,stepValue:a,graphMin:h,labels:c}}function B(a,c,b,d,h){if(a)for(var f=1;f<b+1;f++)c.push(F(a,
{value:(d+h*f).toFixed(0!=h%1?h.toString().split(".")[1].length:0)}))}function B(a,c,b,d,h){if(a)for(var f=1;f<b+1;f++)c.push(F(a,{value:(d+h*f).toFixed(0!=h%1?h.toString().split(".")[1].length:0)}))}function C(a,c,b){return!isNaN(parseFloat(c))&&isFinite(c)&&a>c?c:!isNaN(parseFloat(b))&&isFinite(b)&&a<b?b:a}function y(a,c){var b={},d;for(d in a)b[d]=a[d];for(d in c)b[d]="object"===typeof c[d]&&a[d]?y(a[d],c[d]):c[d];return b}function F(a,c){var b=!/\W/.test(a)?K[a]=K[a]||F(document.getElementById(a).innerHTML):
new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return c?b(c):b}function M(a,c,b){var d=document.createElement("div"),h;d.style.color=c;document.body.appendChild(d);c=window.getComputedStyle(d).color;d.style.color=b;h=window.getComputedStyle(d).color;
var f=/rgb *\( *([0-9]{1,3}) *, *([0-9]{1,3}) *, *([0-9]{1,3}) *\)/;b=f.exec(c);var p=f.exec(h);h=Math.round(parseFloat(b[1]));c=Math.round(parseFloat(b[2]));b=Math.round(parseFloat(b[3]));var k=Math.round(parseFloat(p[1])),f=Math.round(parseFloat(p[2])),p=Math.round(parseFloat(p[3]));h=parseInt((h-k)*a+k);c=parseInt((c-f)*a+f);a=parseInt((b-p)*a+p);d.parentNode.removeChild(d);return"rgb("+h+","+c+","+a+")"}var q=this,D={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*
a*(a-2)},easeInOutQuad:function(a){return 1>(a/=0.5)?0.5*a*a:-0.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return 1>(a/=0.5)?0.5*a*a*a:0.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return 1>(a/=0.5)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*
((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return 1>(a/=0.5)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-0.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0==a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1==a?1:1*(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0==a?0:1==a?1:1>(a/=0.5)?0.5*Math.pow(2,10*(a-1)):
0.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return 1<=a?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return 1>(a/=0.5)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return-(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b))},easeOutElastic:function(a){var c=
1.70158,b=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return d*Math.pow(2,-10*a)*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInOutElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(2==(a/=0.5))return 1;b||(b=1*0.3*1.5);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return 1>a?-0.5*d*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b):0.5*d*Math.pow(2,-10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInBack:function(a){return 1*
(a/=1)*a*(2.70158*a-1.70158)},easeOutBack:function(a){return 1*((a=a/1-1)*a*(2.70158*a+1.70158)+1)},easeInOutBack:function(a){var c=1.70158;return 1>(a/=0.5)?0.5*a*a*(((c*=1.525)+1)*a-c):0.5*((a-=2)*a*(((c*=1.525)+1)*a+c)+2)},easeInBounce:function(a){return 1-D.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?1*7.5625*a*a:a<2/2.75?1*(7.5625*(a-=1.5/2.75)*a+0.75):a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+0.9375):1*(7.5625*(a-=2.625/2.75)*a+0.984375)},easeInOutBounce:function(a){return 0.5>
a?0.5*D.easeInBounce(2*a):0.5*D.easeOutBounce(2*a-1)+0.5}};this.tooltips=[];defaults={tooltips:{background:"rgba(0,0,0,0.6)",fontFamily:"'Arial'",fontStyle:"normal",fontColor:"white",fontSize:"12px",labelTemplate:"<%=label%>: <%=value%>",padding:{top:10,right:10,bottom:10,left:10},offset:{left:0,top:0},border:{width:0,color:"#000"},showHighlight:!0,highlight:{stroke:{width:1,color:"rgba(230,230,230,0.25)"},fill:"rgba(255,255,255,0.25)"}}};v=v?y(defaults,v):defaults;var L=function(a,c,b,d){this.ctx=
a;this.areaObj=c;this.data=b;this.y=this.x=this.highlightState=this.savedState=null;this.inRange=function(a,b){if(this.areaObj.type)switch(this.areaObj.type){case "rect":return a>=this.areaObj.x&&a<=this.areaObj.x+this.areaObj.width&&b>=this.areaObj.y&&b<=this.areaObj.y+this.areaObj.height;case "circle":return Math.pow(a-this.areaObj.x,2)+Math.pow(b-this.areaObj.y,2)<Math.pow(this.areaObj.r,2);case "shape":for(var c=this.areaObj.points,d=!1,e=-1,n=c.length,r=n-1;++e<n;r=e)(c[e].y<=b&&b<c[r].y||c[r].y<=
b&&b<c[e].y)&&a<(c[r].x-c[e].x)*(b-c[e].y)/(c[r].y-c[e].y)+c[e].x&&(d=!d);return d}};this.render=function(b,c){null==this.savedState&&(this.ctx.putImageData(q.savedState,0,0),this.savedState=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height));this.ctx.putImageData(this.savedState,0,0);if(v.tooltips.showHighlight)if(null==this.highlightState){this.ctx.strokeStyle=v.tooltips.highlight.stroke.color;this.ctx.lineWidth=v.tooltips.highlight.stroke.width;this.ctx.fillStyle=v.tooltips.highlight.fill;
switch(this.areaObj.type){case "rect":this.ctx.strokeRect(this.areaObj.x,this.areaObj.y,this.areaObj.width,this.areaObj.height);this.ctx.fillStyle=v.tooltips.highlight.fill;this.ctx.fillRect(this.areaObj.x,this.areaObj.y,this.areaObj.width,this.areaObj.height);break;case "circle":this.ctx.beginPath();this.ctx.arc(this.areaObj.x,this.areaObj.y,this.areaObj.r,0,2*Math.PI,!1);this.ctx.stroke();this.ctx.fill();break;case "shape":this.ctx.beginPath();this.ctx.moveTo(this.areaObj.points[0].x,this.areaObj.points[0].y);
for(var d in this.areaObj.points)this.ctx.lineTo(this.areaObj.points[d].x,this.areaObj.points[d].y);this.ctx.stroke();this.ctx.fill()}this.highlightState=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}else this.ctx.putImageData(this.highlightState,0,0);d=b+v.tooltips.offset.left;var k=c+v.tooltips.offset.top,e=F(v.tooltips.labelTemplate,this.data),n=v.tooltips.padding.left+this.ctx.measureText(e).width+v.tooltips.padding.right;d+n>a.canvas.width&&(d-=0>d-n?d:n);k+24>a.canvas.height&&
(k-=24);this.ctx.fillStyle=v.tooltips.background;this.ctx.fillRect(d,k,n,24);0<v.tooltips.border.width&&(this.ctx.fillStyle=v.tooltips.order.color,this.ctx.lineWidth=v.tooltips.border.width,this.ctx.strokeRect(d,k,n,24));this.ctx.font=v.tooltips.fontStyle+" "+v.tooltips.fontSize+" "+v.tooltips.fontFamily;this.ctx.fillStyle=v.tooltips.fontColor;this.ctx.textAlign="center";this.ctx.textBaseline="middle";this.ctx.fillText(e,d+n/2,k+12);this.x=b;this.y=c}},n=t.canvas.width,u=t.canvas.height;this.savedState=
null;window.Touch?(t.canvas.ontouchstart=function(a){a.clientX=a.targetTouches[0].clientX;a.clientY=a.targetTouches[0].clientY;I(a)},t.canvas.ontouchmove=function(a){a.clientX=a.targetTouches[0].clientX;a.clientY=a.targetTouches[0].clientY;I(a)}):t.canvas.onmousemove=function(a){I(a)};t.canvas.onmouseout=function(a){null!=q.savedState&&t.putImageData(q.savedState,0,0)};window.devicePixelRatio&&(t.canvas.style.width=n+"px",t.canvas.style.height=u+"px",t.canvas.height=u*window.devicePixelRatio,t.canvas.width=
n*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio));this.PolarArea=function(a,c){q.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,
scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null,showTooltips:!0};var b=c?y(q.PolarArea.defaults,c):q.PolarArea.defaults;return new N(a,b,t)};this.Radar=function(a,c){q.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,
scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,
datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:!0};var b=c?y(q.Radar.defaults,c):q.Radar.defaults;return new O(a,b,t)};this.Pie=function(a,c){q.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null,labelFontFamily:"'Arial'",labelFontStyle:"normal",labelFontSize:12,labelFontColor:"#666",
labelAlign:"right",showTooltips:!0};var b=c?y(q.Pie.defaults,c):q.Pie.defaults;return new P(a,b,t)};this.Doughnut=function(a,c){q.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null,showTooltips:!0};var b=c?y(q.Doughnut.defaults,c):q.Doughnut.defaults;return new Q(a,b,t)};this.Line=function(a,c){q.Line.defaults={scaleOverlay:!1,
scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",
onAnimationComplete:null,showTooltips:!0};var b=c?y(q.Line.defaults,c):q.Line.defaults;return new R(a,b,t)};this.Bar=function(a,c){q.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,
barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:!0};var b=c?y(q.Bar.defaults,c):q.Bar.defaults;return new S(a,b,t)};var N=function(a,c,b){var d,h,f,p,k,e,q;d=Math.min.apply(Math,[n,u])/2;d-=Math.max.apply(Math,[0.5*c.scaleFontSize,0.5*c.scaleLineWidth]);p=2*c.scaleFontSize;c.scaleShowLabelBackdrop&&(p+=2*c.scaleBackdropPaddingY,d-=1.5*c.scaleBackdropPaddingY);k=d;p=p?p:5;e=function(){for(var b=
Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.length;d++)a[d].value>b&&(b=a[d].value),a[d].value<c&&(c=a[d].value);return{maxValue:b,minValue:c,maxSteps:Math.floor(k/(0.66*p)),minSteps:Math.floor(0.5*(k/p))}}();q=c.scaleShowLabels?c.scaleLabel:null;c.scaleOverride?(f={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},B(q,f.labels,f.steps,c.scaleStartValue,c.scaleStepWidth)):f=E(k,e.maxSteps,e.minSteps,e.maxValue,e.minValue,q);h=d/f.steps;A(c,function(){for(var a=0;a<
f.steps;a++)if(c.scaleShowLine&&(b.beginPath(),b.arc(n/2,u/2,h*(a+1),0,2*Math.PI,!0),b.strokeStyle=c.scaleLineColor,b.lineWidth=c.scaleLineWidth,b.stroke()),c.scaleShowLabels){b.textAlign="center";b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;var d=f.labels[a];if(c.scaleShowLabelBackdrop){var s=b.measureText(d).width;b.fillStyle=c.scaleBackdropColor;b.beginPath();b.rect(Math.round(n/2-s/2-c.scaleBackdropPaddingX),Math.round(u/2-h*(a+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),
Math.round(s+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY));b.fill()}b.textBaseline="middle";b.fillStyle=c.scaleFontColor;b.fillText(d,n/2,u/2-h*(a+1))}},function(d){var g=-Math.PI/2,s=2*Math.PI/a.length,l=1,m=1;c.animation&&(c.animateScale&&(l=d),c.animateRotate&&(m=d));for(var e=0;e<a.length;e++){b.beginPath();b.arc(n/2,u/2,l*x(a[e].value,f,h),g,g+m*s,!1);b.lineTo(n/2,u/2);b.closePath();b.fillStyle=a[e].color;b.fill();if(1<=d&&c.showTooltips){var w=[{x:n/2,y:u/
2}],G=x(a[e].value,f,h);w.push({x:n/2+G*Math.cos(g),y:u/2+G*Math.sin(g)});for(var H=0;50>=H;H++)w.push({x:n/2+G*Math.cos(g+H/50*m*s),y:u/2+G*Math.sin(g+H/50*m*s)});z(b,{type:"shape",points:w},{label:a[e].label,value:a[e].value},"PolarArea")}c.segmentShowStroke&&(b.strokeStyle=c.segmentStrokeColor,b.lineWidth=c.segmentStrokeWidth,b.stroke());g+=m*s}},b)},O=function(a,c,b){var d,h,f,p,k,e,q;a.labels||(a.labels=[]);(function(){d=Math.min.apply(Math,[n,u])/2;p=2*c.scaleFontSize;for(var f=0,g=0;g<a.labels.length;g++){b.font=
c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily;var h=b.measureText(a.labels[g]).width;h>f&&(f=h)}d-=Math.max.apply(Math,[f,1.5*(c.pointLabelFontSize/2)]);d-=c.pointLabelFontSize;k=d=C(d,null,0);p=p?p:5})();e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var f=0;f<a.datasets[d].data.length;f++)a.datasets[d].data[f]>b&&(b=a.datasets[d].data[f]),a.datasets[d].data[f]<c&&(c=a.datasets[d].data[f]);return{maxValue:b,minValue:c,maxSteps:Math.floor(k/
(0.66*p)),minSteps:Math.floor(0.5*(k/p))}}();q=c.scaleShowLabels?c.scaleLabel:null;c.scaleOverride?(f={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},B(q,f.labels,f.steps,c.scaleStartValue,c.scaleStepWidth)):f=E(k,e.maxSteps,e.minSteps,e.maxValue,e.minValue,q);h=d/f.steps;A(c,function(){var e=2*Math.PI/a.datasets[0].data.length;b.save();b.translate(n/2,u/2);if(c.angleShowLineOut){b.strokeStyle=c.angleLineColor;b.lineWidth=c.angleLineWidth;for(var g=0;g<a.datasets[0].data.length;g++)b.rotate(e),
b.beginPath(),b.moveTo(0,0),b.lineTo(0,-d),b.stroke()}for(g=0;g<f.steps;g++){b.beginPath();if(c.scaleShowLine){b.strokeStyle=c.scaleLineColor;b.lineWidth=c.scaleLineWidth;b.moveTo(0,-h*(g+1));for(var s=0;s<a.datasets[0].data.length;s++)b.rotate(e),b.lineTo(0,-h*(g+1));b.closePath();b.stroke()}c.scaleShowLabels&&(b.textAlign="center",b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily,b.textBaseline="middle",c.scaleShowLabelBackdrop&&(s=b.measureText(f.labels[g]).width,b.fillStyle=
c.scaleBackdropColor,b.beginPath(),b.rect(Math.round(-s/2-c.scaleBackdropPaddingX),Math.round(-h*(g+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),Math.round(s+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY)),b.fill()),b.fillStyle=c.scaleFontColor,b.fillText(f.labels[g],0,-h*(g+1)))}for(g=0;g<a.labels.length;g++){b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily;b.fillStyle=c.pointLabelFontColor;var s=Math.sin(e*g)*(d+c.pointLabelFontSize),
l=Math.cos(e*g)*(d+c.pointLabelFontSize);b.textAlign=e*g==Math.PI||0==e*g?"center":e*g>Math.PI?"right":"left";b.textBaseline="middle";b.fillText(a.labels[g],s,-l)}b.restore()},function(d){var g=2*Math.PI/a.datasets[0].data.length;b.save();b.translate(n/2,u/2);for(var e=0;e<a.datasets.length;e++){var l=x(a.datasets[e].data[0],f,h);b.beginPath();b.moveTo(0,d*-1*l);if(1<=d&&c.showTooltips){var m=n/2+l*Math.cos(0-Math.PI/2),l=u/2+l*Math.sin(0-Math.PI/2),k=c.pointDot?c.pointDotRadius+c.pointDotStrokeWidth:
10;a.labels[0].trim();z(b,{type:"circle",x:m,y:l,r:k},{label:a.labels[0],value:a.datasets[e].data[0]},"Radar")}for(var w=1;w<a.datasets[e].data.length;w++)l=x(a.datasets[e].data[w],f,h),b.rotate(g),b.lineTo(0,d*-1*l),1<=d&&c.showTooltips&&(m=n/2+l*Math.cos(w*g-Math.PI/2),l=u/2+l*Math.sin(w*g-Math.PI/2),k=c.pointDot?c.pointDotRadius+c.pointDotStrokeWidth:10,a.labels[w].trim(),z(b,{type:"circle",x:m,y:l,r:k},{label:a.labels[w],value:a.datasets[e].data[w]},"Radar"));b.closePath();b.fillStyle=a.datasets[e].fillColor;
b.strokeStyle=a.datasets[e].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.fill();b.stroke();if(c.pointDot){b.fillStyle=a.datasets[e].pointColor;b.strokeStyle=a.datasets[e].pointStrokeColor;b.lineWidth=c.pointDotStrokeWidth;for(m=0;m<a.datasets[e].data.length;m++)b.rotate(g),b.beginPath(),b.arc(0,d*-1*x(a.datasets[e].data[m],f,h),c.pointDotRadius,2*Math.PI,!1),b.fill(),b.stroke()}b.rotate(g)}b.restore()},b)},P=function(a,c,b){for(var d=0,h=Math.min.apply(Math,[u/2,n/2])-5,f=0;f<a.length;f++)d+=a[f].value;
b.fillStyle="black";b.textBaseline="base";A(c,null,function(f){var k=-Math.PI/2,e=1,q=1;c.animation&&(c.animateScale&&(e=f),c.animateRotate&&(q=f));for(var r=0;r<a.length;r++){var g=q*a[r].value/d*2*Math.PI;b.beginPath();b.arc(n/2,u/2,e*h,k,k+g);b.lineTo(n/2,u/2);b.closePath();b.fillStyle=a[r].color;b.fill();if(a[r].label&&2*(e*h)*g/(2*Math.PI)>c.labelFontSize){var s=function(a){switch(a){case "left":return"right";case "right":return"left";case "center":return a}},l=a[r].labelFontSize||c.labelFontSize+
"px";null!=l.match(/^[0-9]+$/g)&&(l+="px");b.font=c.labelFontStyle+" "+l+" "+c.labelFontFamily;b.fillStyle=M(f,a[r].labelColor||"black",a[r].color);b.textBaseline="middle";var l=-(k+g)+g/2,m=n/2+e*h*Math.cos(l),t=u/2-e*h*Math.sin(l);b.textAlign=a[r].labelAlign||c.labelAlign;textX=function(a,b){switch(a){case "left":return-b+20;case "center":return-b/2}return-10}(b.textAlign,e*h);l<-Math.PI/2&&(l-=Math.PI,b.textAlign=s(b.textAlign),textX=-textX);b.translate(m,t);b.rotate(-l);b.fillText(a[r].label,
textX,0);b.rotate(l);b.translate(-m,-t)}if(1<=f&&c.showTooltips){s=[{x:n/2,y:u/2}];s.push({x:n/2+h*Math.cos(k),y:u/2+h*Math.sin(k)});for(l=0;50>=l;l++)s.push({x:n/2+h*Math.cos(k+l/50*g),y:u/2+h*Math.sin(k+l/50*g)});z(b,{type:"shape",points:s},{label:a[r].label,value:a[r].value},"Pie")}c.segmentShowStroke&&(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());k+=g}},b)},Q=function(a,c,b){for(var d=0,h=Math.min.apply(Math,[u/2,n/2])-5,f=h*(c.percentageInnerCutout/100),p=0;p<
a.length;p++)d+=a[p].value;A(c,null,function(k){var e=-Math.PI/2,p=1,r=1;c.animation&&(c.animateScale&&(p=k),c.animateRotate&&(r=k));for(var g=0;g<a.length;g++){var s=r*a[g].value/d*2*Math.PI;b.beginPath();b.arc(n/2,u/2,p*h,e,e+s,!1);b.arc(n/2,u/2,p*f,e+s,e,!0);b.closePath();b.fillStyle=a[g].color;b.fill();if(1<=k&&c.showTooltips){var l=[];l.push({x:n/2+h*Math.cos(e),y:u/2+h*Math.sin(e)});for(var m=0;50>=m;m++)l.push({x:n/2+h*Math.cos(e+m/50*s),y:u/2+h*Math.sin(e+m/50*s)});l.push({x:n/2+f*Math.cos(e+
s),y:u/2+f*Math.sin(e+s)});for(m=50;0<=m;m--)l.push({x:n/2+f*Math.cos(e+m/50*s),y:u/2+f*Math.sin(e+m/50*s)});z(b,{type:"shape",points:l},{label:a[g].label,value:a[g].value},"Doughnut")}c.segmentShowStroke&&(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());e+=s}},b)},R=function(a,c,b){var d,h,f,p,k,e,q,r,g,s,l,m,t=0;(function(){d=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;g=1;for(var f=0;f<a.labels.length;f++){var e=b.measureText(a.labels[f]).width;
g=e>g?e:g}n/a.labels.length<g?(t=45,n/a.labels.length<Math.cos(t)*g?(t=90,d-=g):d-=Math.sin(t)*g):d-=c.scaleFontSize;d-=5;p=c.scaleFontSize;k=d-=p})();e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var f=0;f<a.datasets[d].data.length;f++)a.datasets[d].data[f]>b&&(b=a.datasets[d].data[f]),a.datasets[d].data[f]<c&&(c=a.datasets[d].data[f]);return{maxValue:b,minValue:c,maxSteps:Math.floor(k/(0.66*p)),minSteps:Math.floor(0.5*(k/p))}}();q=c.scaleShowLabels?c.scaleLabel:
"";c.scaleOverride?(f={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},B(q,f.labels,f.steps,c.scaleStartValue,c.scaleStepWidth)):f=E(k,e.maxSteps,e.minSteps,e.maxValue,e.minValue,q);h=Math.floor(k/f.steps);(function(){var d=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(var e=0;e<f.labels.length;e++)var h=b.measureText(f.labels[e]).width,d=h>d?h:d;d+=10}s=n-d-g;r=Math.floor(s/(a.labels.length-1));l=n-g/2-s;m=k+c.scaleFontSize/
2})();A(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(n-g/2+5,m);b.lineTo(n-g/2-s-5,m);b.stroke();0<t?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<t?(b.translate(l+d*r,m+c.scaleFontSize),b.rotate(-(t*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],l+d*r,m+c.scaleFontSize+3),b.beginPath(),b.moveTo(l+d*r,m+3),c.scaleShowGridLines&&0<d?(b.lineWidth=
c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(l+d*r,5)):b.lineTo(l+d*r,m+3),b.stroke();b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(l,m+5);b.lineTo(l,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<f.steps;d++)b.beginPath(),b.moveTo(l-3,m-(d+1)*h),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(l+s+5,m-(d+1)*h)):b.lineTo(l-0.5,m-(d+1)*h),b.stroke(),c.scaleShowLabels&&b.fillText(f.labels[d],
l-8,m-(d+1)*h)},function(d){function e(b,c){return m-d*x(a.datasets[b].data[c],f,h)}for(var g=0;g<a.datasets.length;g++){b.strokeStyle=a.datasets[g].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.beginPath();b.moveTo(l,m-d*x(a.datasets[g].data[0],f,h));for(var k=1;k<a.datasets[g].data.length;k++)c.bezierCurve?b.bezierCurveTo(l+r*(k-0.5),e(g,k-1),l+r*(k-0.5),e(g,k),l+r*k,e(g,k)):b.lineTo(l+r*k,e(g,k));for(var n=c.pointDot?c.pointDotRadius+c.pointDotStrokeWidth:10,k=0;k<a.datasets[g].data.length;k++)1<=
d&&c.showTooltips&&z(b,{type:"circle",x:l+r*k,y:e(g,k),r:n},{label:a.labels[k],value:a.datasets[g].data[k]},"Line");b.stroke();c.datasetFill?(b.lineTo(l+r*(a.datasets[g].data.length-1),m),b.lineTo(l,m),b.closePath(),b.fillStyle=a.datasets[g].fillColor,b.fill()):b.closePath();if(c.pointDot){b.fillStyle=a.datasets[g].pointColor;b.strokeStyle=a.datasets[g].pointStrokeColor;b.lineWidth=c.pointDotStrokeWidth;for(k=0;k<a.datasets[g].data.length;k++)b.beginPath(),b.arc(l+r*k,m-d*x(a.datasets[g].data[k],
f,h),c.pointDotRadius,0,2*Math.PI,!0),b.fill(),b.stroke()}}},b)},S=function(a,c,b){var d,h,f,p,k,e,q,r,g,s,l,m,t,v=0;(function(){d=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;g=1;for(var f=0;f<a.labels.length;f++){var e=b.measureText(a.labels[f]).width;g=e>g?e:g}n/a.labels.length<g?(v=45,n/a.labels.length<Math.cos(v)*g?(v=90,d-=g):d-=Math.sin(v)*g):d-=c.scaleFontSize;d-=5;p=c.scaleFontSize;k=d-=p})();e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var f=
0;f<a.datasets[d].data.length;f++)a.datasets[d].data[f]>b&&(b=a.datasets[d].data[f]),a.datasets[d].data[f]<c&&(c=a.datasets[d].data[f]);return{maxValue:b,minValue:c,maxSteps:Math.floor(k/(0.66*p)),minSteps:Math.floor(0.5*(k/p))}}();q=c.scaleShowLabels?c.scaleLabel:"";c.scaleOverride?(f={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},B(q,f.labels,f.steps,c.scaleStartValue,c.scaleStepWidth)):f=E(k,e.maxSteps,e.minSteps,e.maxValue,e.minValue,q);h=Math.floor(k/f.steps);
(function(){var d=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(var e=0;e<f.labels.length;e++)var h=b.measureText(f.labels[e]).width,d=h>d?h:d;d+=10}s=n-d-g;r=Math.floor(s/a.labels.length);t=(r-2*c.scaleGridLineWidth-2*c.barValueSpacing-(c.barDatasetSpacing*a.datasets.length-1)-(c.barStrokeWidth/2*a.datasets.length-1))/a.datasets.length;l=n-g/2-s;m=k+c.scaleFontSize/2})();A(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();
b.moveTo(n-g/2+5,m);b.lineTo(n-g/2-s-5,m);b.stroke();0<v?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<v?(b.translate(l+d*r,m+c.scaleFontSize),b.rotate(-(v*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],l+d*r+r/2,m+c.scaleFontSize+3),b.beginPath(),b.moveTo(l+(d+1)*r,m+3),b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(l+(d+1)*r,5),b.stroke();b.lineWidth=c.scaleLineWidth;
b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(l,m+5);b.lineTo(l,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<f.steps;d++)b.beginPath(),b.moveTo(l-3,m-(d+1)*h),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(l+s+5,m-(d+1)*h)):b.lineTo(l-0.5,m-(d+1)*h),b.stroke(),c.scaleShowLabels&&b.fillText(f.labels[d],l-8,m-(d+1)*h)},function(d){b.lineWidth=c.barStrokeWidth;for(var e=0;e<a.datasets.length;e++){b.fillStyle=a.datasets[e].fillColor;
b.strokeStyle=a.datasets[e].strokeColor;for(var g=0;g<a.datasets[e].data.length;g++){var k=l+c.barValueSpacing+r*g+t*e+c.barDatasetSpacing*e+c.barStrokeWidth*e;b.beginPath();b.moveTo(k,m);b.lineTo(k,m-d*x(a.datasets[e].data[g],f,h)+c.barStrokeWidth/2);b.lineTo(k+t,m-d*x(a.datasets[e].data[g],f,h)+c.barStrokeWidth/2);b.lineTo(k+t,m);c.barShowStroke&&b.stroke();b.closePath();b.fill();if(1<=d&&c.showTooltips){var n=x(a.datasets[e].data[g],f,h);z(b,{type:"rect",x:k,y:m-n,width:t,height:n},{label:a.labels[g],
value:a.datasets[e].data[g]},"Bar")}}}},b)},J=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}(),K={}}; 
