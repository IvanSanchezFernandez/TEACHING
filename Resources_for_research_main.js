

function checkQ1() {

	if (document.question1.question.value == "d") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br> This is a prospective observational study.<br><br>The authors just counted how many patients ended up in each category and described it.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not quite! <br><br> The study design or methodology typically appears at the end of the introduction section or at the beginning of the methods section.<br><br> Try again!";
		document.getElementById("after_submitQ1").style.background = "red";

}

}








function checkQ2() {

	if (document.question2.question.value == "c") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br> This is a case report.<br><br>The authors just describe a case.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br> The study design or methodology typically appears at the end of the introduction section or at the beginning of the methods section.<br><br> Try again!";
		document.getElementById("after_submitQ2").style.background = "red";

}

}








function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
	if (ev.target.id == document.getElementById(data).getAttribute('data-div')) {
 		alert("That is correct!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("That association is wrong. Try again!");
  }

}




function checkQ3() {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "A quantification of all available evidence in the literature is a meta-analysis like in <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6831729/pdf/41436_2019_Article_554.pdf' target='_blank'>this study</a><br><br>\
Rare events in a population require a registry like in <a href='https://onlinelibrary.wiley.com/doi/epdf/10.1111/epi.15968' target='_blank'>this study</a><br><br>\
The cost and effectiveness of a healthcare intervention are best studied with a cost-effectiveness study like in <a href='https://www.nejm.org/doi/pdf/10.1056/NEJMsa0707052?articleTools=true' target='_blank'>this study</a><br><br>\
A very relevant clinical question can be definitively answered with a single case report like in <a href='https://n.neurology.org/content/neurology/95/15/e2109.full.pdf' target='_blank'>this study</a><br><br>\
To learn about current choices from clinicians a survey is the best study methodology like in <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3613193/pdf/npj48.pdf' target='_blank'>this study</a>";
		document.getElementById("after_submitQ3").style.background = "lightgreen";	
}








function checkQ4() {

	if (document.question4.question.value == "a") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Run away! As fast as you can.<br><br> A project with no specific objective, no defined methodology, and in which the potential limitations of the analysis plan are not seriously considered since the beginning of the study is a disaster. Period. <br><br>The indiscrimate use of buzzwords without a clear understanding of the methodologies and their limitations is a major warning sign.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "In the future, remember that I told you not to do it!<br><br>Try again!";
		document.getElementById("after_submitQ4").style.background = "red";

}

}


