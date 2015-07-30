var loadingCircle = animatingSvg.select('#cd-loading-circle-filled'),
	circumf = Math.PI*(loadingCircle.attr('r')*2);
 
loadingCircle.attr({
	'stroke-dasharray': circumf+' '+circumf,
	'stroke-dashoffset': circumf,
});
