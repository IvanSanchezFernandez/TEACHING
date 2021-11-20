

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
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "I am not going to give you the answer to this one. There are only two categories.<br><br>Keep trying until the two categories match. It is easy.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";	
}








function checkQ2() {

	if (document.getElementById("q2a").checked == true && document.getElementById("q2b").checked == false && document.getElementById("q2c").checked == true && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Yes! <br><br>Perseveration represents a dysfunction of the frontal lobe making it difficult to change tasks.<br><br>Testing for it requires activities in which the patient is asked to <a target='_blank' rel='noopener noreferrer' href='https://learninglink.oup.com/access/content/the-neuroexam-video/neuroscience-sequencing-tasks-and-frontal-release-signs?previousFilter=tag_09-sequencing-tasks-and-frontal-release-signs'>switch between tasks like the writing alternating sequencing task, manual alternating sequencing task</a>.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ3() {

	if (document.question3.question.value == "a") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>We believe that this was an upper motor neuron lesion in the left hemisphere.<br><br>Learn about the localization of <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=5T4G27xkckE'>facial palsy</a> and <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=QJmhJHtKug8'>tongue paralysis</a>.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No!";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}




function checkQ4() {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "We ordered:<br><br>Influenza A, Influenza B<br>RSV<br>Parainfluenza 1, Parainfluenza 2, Parainfluenza 3, Parainfluenza 4<br>Human metapneumovirus<br>Adenovirus<br>Bordetella pertussis, Bordetella parapertussis<br>Chlamidia pneumoniae<br>Mycoplasma pneumoniae<br>Coronavirus 229E, Coronavirus HKU1, Coronavirus NL63, Coronavirus OC43<br>Rhinovirus<br>MRSA<br><br>E.coli K1<br>H.influenzae<br>L.monocytogenes<br>N.meningitidis<br>S.agalactiae<br>S.pneumoniae<br>CMV<br>Enterovirus<br>HSV1, HSV2, HSV6<br>Human parechovirus<br>VZV<br>C.neoformans, C.gatii<br><br>M.pneumoniae<br>EBV<br>Lymphocytic chroriomeningitis<br>B.burgdorgferi<br>B.hensealae, B.quintana<br>WNV<br>CMV<br>Syphilis<br>HIV<br>EEEV<br>California encephalitis virus<br>Saint Louis encephalitis<br>WEEV<br>SARSCOV-2";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";
	}








function checkQ5() {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "We ordered:<br><br>IgG index<br>Neopterin<br>Oligoclonal bands<br>AQP4<br>NMO<br>MOG<br>ANA<br>Angiotensin converting enzyme<br>ANCA<br>Myeloperoxidase antibody<br>Proteinase 3 antibody<br>Sm antibody<br>Sm Rnp antibody<br>DNA(ds) antibody<br>SSA, SSB<br>Streptolysin O<br>C3, C4<br>Anti-Hu, ANNA2(Ri), ANNA3, PCA1(Yo), PCA2, PCA-Tr(DNER), AGNA SOX1, Amphysin, CRMP5 CV2, GAD65, Ma2 Ta, Myelin, Zic4, AMPAR1, AMPAR2, GABABR, LGIq, CASPR2, DPPX, VGCC PQ, VGCC N, AChR";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";
	}








function checkQ6() {

	if (document.question6.question.value == "a") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct!! <br><br>See panel 2 <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/26906964/'>here</a> and table 4 <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/31953309/'>here</a>. ";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No!";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Try again!";

}

}








function checkQ7() {

	if (document.question7.question.value == "d") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!! <br><br>Seizures are one of the most common symptoms in limbic encephalitis and there are few cases with no seizures:<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/20959359/'>Study of pediatric limbic encephalitis</a><br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/23658383/'>Study of pediatric anti-Hu antibody immune-mediated encephalitis</a> ";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No!";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "Try again!";

}

}





