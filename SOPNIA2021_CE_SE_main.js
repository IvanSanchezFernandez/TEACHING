

function checkQ1() {

	if (document.question1.question.value == "a") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto! <br><br> Es importante entender que las benzodiazepinas no inyectables para el tratamiento inicial del estado epiléptico fueron estudiadas para el tratamiento de de convulsiones repetidas, no para el tratamiento inicial del estado epiléptico<br><br>Es parecido, pero no es lo mismo. Esos estudios midieron el número de nuevas convulsiones durante las horas o días tras la administración de la medicación, lo cual es distinto de la capacidad de detener el estado epiléptico.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No. <br><br> Aunque hay varias benzodiazepinas no inyectables aprobadas, su indicación no es el tratamiento del estado epiléptico, sino el tratamiento de las convulsiones repetidas.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto! <br><br> La mayoría de estudios están hechos por compañías farmaceúticas que buscan demostrar que su fármaco es mejor que placebo para comercializarlo. Desafortunadamente, no hay muchos estudios comparando unas benzodiazepinas con otras en el mismo estudio.";
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

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Sí. <br><br> Obviamente, muchos factores determinan cuál es la mejor opción en cada paciente y en cada situación. ¿Tiene el paciente un acceso intravenoso o se puede conseguir rápidamente? ¿Está el paciente en el hospital o en una ambulancia o está lejos de un hospital? ¿Qué medicaciones están disponibles para administrar?";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No es correcto <br><br> En casi ningún área de la medicina hay una medicación que es la mejor en todas las situaciones.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == true && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Exacto <br><br> La evidencia para determinar el mejor tratamiento de segunda línea es limitada. Hay muy pocos estudios que comparen las opciones directamente.<br><br>Las guías de práctica clínica <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/26900382/'>no especifican un tratamiento que sea mejor</a> y <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/30075875/'>varios hospitales usan distintas alternativas</a>.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Esto no es correcto.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}

