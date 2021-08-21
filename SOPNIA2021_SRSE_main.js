

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








function checkQ1() {

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto! <br><br> Normalmente, tras dos dosis de benzodiazepinas y dos dosis de medicaciones de segunda línea (valproato, phenobarbital, etc.), la mayoría de protocolos recomiendan infusiones continuas, pero hay varios estudios sugiriendo que <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/23318514/'>los pacientes que reciben infusiones continuas tienen un peor pronóstico</a>.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto! <br><br> Las indicaciones para tratar el estado epiléptico con tratamientos inmunomoduladores no están bien definidas. Su uso se basa en la idea de que la inflamación contribuye a las convulsiones. Se puede intentar incluso cuando no hay una causa claramente inflamatoria.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ3() {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "En general, el tratamiento inmunosupresor se usa cuando o bien el paciente tiene una etiología claramente autoinmune (FIRES, encefalitis autoinmune), o bien el paciente tiene una presentación abrupta del primer episodio de estado epiléptico que es bastante refractario a tratamiento (sugiere algún componente autoinmune/inflamatorio).";
		document.getElementById("after_submitQ3").style.background = "lightgreen";	
}





