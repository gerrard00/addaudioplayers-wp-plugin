jQuery(function(){
	   
	//TODO: I should really check to see if the audio player is supported by the browser, but I am lazy.
	var mp3FilesWithPlayers = [];

	jQuery("audio source[src$='.mp3']").each(function() {
		var mp3FileFromPlayer = jQuery(this).prop("src");
		mp3FilesWithPlayers.push(mp3FileFromPlayer);
	});

	var allMP3Links = jQuery("A[href$='.mp3']").each(function() {
		var mp3Link = jQuery(this);
		
	    var currentLink = mp3Link.prop("href");

	    if (mp3FilesWithPlayers.indexOf(currentLink) > -1) return;
		
		console.log('Adding player for ' + currentLink);
		
		mp3Link.after( '<p></p><div><audio controls><source src="' + currentLink + '" type="audio/mpeg"></audio></div>' );
		
	    mp3FilesWithPlayers.push(currentLink);    
	});

});