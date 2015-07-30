$(function() {
  var loaderSvg = Snap('#svg-loader');
  var loadingCircle = loaderSvg.select('#pc-loading-circle-filled'),
    circumf = Math.PI*(loadingCircle.attr('r')*2);
   
  loadingCircle.attr({
    'stroke-dasharray': circumf+' '+circumf,
    'stroke-dashoffset': circumf,
  });

  //var playBtn = animatingSvg.select('#cd-play-btn').
    //globalAnimation;
   
  //playBtn.click(function(){	
    //var strokeOffset = loadingCircle.attr('stroke-dashoffset').replace('px', '');
    ////animate strokeOffeset desn't work with circle element - we need to use Snap.animate() rather than loadingCircle.animate()
    //globalAnimation = Snap.animate(strokeOffset, '0', function( value ){ 
      //loadingCircle.attr({ 'stroke-dashoffset': value })
      //}, 1500, mina.easein
    //);
  //});

});

