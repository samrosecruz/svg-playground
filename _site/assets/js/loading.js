$(function() {
  var loaderSvg = Snap('#svg-loader');

  var loadingCircle = loaderSvg.select('#pc-loading-circle-filled'),
      loadingSvg = loaderSvg.select('#pc-loading-circle'),
      playBtn = loaderSvg.select('#pc-loading-play'),
      pauseBtn = loaderSvg.select('#pc-loading-pause'),
      circumf = Math.PI*(loadingCircle.attr('r')*2);

	//this variable will be used to store the loadingCircle animation object
	var globalAnimation;

	initLoading();	

  $('#pc-loading-pause').hide();;
	
  playBtn.click(function(){
		var strokeOffset = loadingCircle.attr('stroke-dashoffset').replace('px', '');
    $('#pc-loading-play').hide();
    $('#pc-loading-pause').show();;

		globalAnimation = Snap.animate(strokeOffset, '0', function( value ){ 
			loadingCircle.attr({ 'stroke-dashoffset': value })
			}, (strokeOffset/circumf)*1500, mina.easein, function(){
				$('#pc-loading-circle-filled').fadeOut();
        $('#pc-loading-play').show();
        $('#pc-loading-pause').hide();;
			}
		);
	});


	function initLoading() {
		loadingCircle.attr({
			'stroke-dasharray': circumf+' '+circumf,
			'stroke-dashoffset': circumf,
		});
	}
});
