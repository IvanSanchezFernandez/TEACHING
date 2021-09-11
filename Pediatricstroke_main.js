
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
		document.getElementById("answerQ1").innerHTML = "I am not going to give the answers for this one.<br><br>Keep trying until you get all answers right and you will see the right answers.<br><br>Incidence estimates were extracted from the following articles: <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/32078459/'>adult stroke by age</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/25685948/'>neonatal hypoxic-ischemic encephalopathy</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/19762687/'>perinatal stroke</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/31813521/'>another study on perinatal stroke</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/16901448/'>pediatric stroke</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/19762687/'>another study on pediatric stroke</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/31937568/'>rolandic epilepsy</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/9701381/'>another study on rolandic epilepsy</a>, and <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/19762687/'>pediatric stroke excluding neonates</a>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";	
}








function checkQ2() {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "I am not going to give the answers for this one.<br><br>Keep trying until you get all answers right and you will see the right answers.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";	
}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> Pediatric ischemic stroke is distributed by sex affecting <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/18787197/'>approximately 60% of males and approximately 40% of females regardless of age, stroke subtype, and history of trauma</a>. The main type of pediatric ischemic stroke is <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/18787197/'>arterial ischemic stroke (which represents approximately 80% of cases) with cerebral sinovenous thrombosis representing approximately 20% of cases</a>.<br><br>Although pediatric hemorrhagic stroke is less studied than pediatric ischemic stroke, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/17275656/'>intracerebral hemorrhage is 2-3 more frequent than subarachnoid hemorrhage and there are multiple etiologies that can cause a hemorrhage in a child including arterio-venous malformations, cavernomas, coagulation disorders, intracranial tumors, and aneurysms</a>. Of course, trauma also causes hemorrhagic stroke.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> Stroke <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/16551446/'>rarely presents with headache only and most frequently presents with a constellation of signs/symptoms suggesting neurological focality</a>.<br><br>A patient presenting with a new onset seizure with post-ictal paresis can have a stroke as the underlying etiology of the seizure (and contributing to the post-ictal paresis); this is very rare in children, but it can happen.<br><br>Having stroke in the differential diagnosis is good. However, it is important to remember that stroke is relatively rare in children, especially in non-neonates with no cardiopathy, coagulopathy, or other risk factors.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == false && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br> Apoptotic neurons in necrotic brain tissue do not care about how positive you are.<br><br>Perinatal stroke is a very serious condition with high mortality and severe sequelae. <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/16010659/'>In a study which followed 36 patients with perinatal arterial ischemic stroke for a year (2 other babies were excluded because they died before age 1 year)</a>, 58% had cerebral palsy, 39% had epilepsy, 25% had language delay, and 25% had behavioral abnormality. 42% had two or more of these conditions.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == true && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br> Stroke management in sickle cell disease includes optimal hydration, correction of hypoxemia, and correction of systemic hypotension.<br><br>Prevention of stroke includes aiming to reduce hemoglobin S below 30%. This is achieved with transfusions and/or hydroxyurea. Prevention of stroke should occur before the first stroke (primary prevention) and after one or more strokes (secondary prevention).<br><br>The hyperacute treatment of stroke in sickle cell disease includes blood transfusion with an hemoglobin goal of 10 g/dl, and, if the total hemoglobin is at 10 g/dl, exchange transfusion with goal of hemoglobin S to 15% and total hemoglobin 10 g/dl.<br><br>Hydroxyurea aims to reduce hemoglobin S and it is an alternative to repeated transfusions.<br><br>Surgical revascularization is a treatment to be considered only in carefully selected cases of recurrent strokes despite optimal management of hemoglobin S (0-30%).";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rectangles and the red circles. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}







