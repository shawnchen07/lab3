'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Clicked!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(function(e) {
		console.log("Project: " + $("#project").val());
		console.log("Project: " + $("#width").val());
		console.log("Project: " + $("#description").val());
		var pid = $("#project").val();
		$(pid).animate({
			width: $("#width").val()
		});
		var ptxt = $("#description").val();
		$(pid + " .project-description").text(ptxt);
	});
}

// function projectClick(e) { 
// 	console.log("Project clicked");
//     // prevent the page from reloading 
//     e.preventDefault();
//     // In an event handler, $(this) refers to 
//     // the object that triggered the event 
//     $(this).css("background-color", "#7fff00");
// }

function projectClick(e) {
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    //console.log(jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else {
    	if ($(".project-description").is(":visible"))
	    	$(".project-description").hide();
	    else
	    	$(".project-description").show();
    }
    // } else { 
    //    description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    // }
}