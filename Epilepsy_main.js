
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
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br> The distinction between provoked seizures and unprovoked seizures is crucial.<br><br>Provoked seizures are seizures that occur as a reaction of a normal brain to an abnormal stimulus (change hitting the head against the wall to cocaine, blood in the surface of the brain, severe hypotension, or similar insults). These abnormal stimuli will cause seizures in a large proportion of the normal population. Provoked seizures should be seen as a symptom.<br><br>In contrast, unprovoked seizures are those which occur spontaneously. This means that the brain has a predisposition to have unprovoked seizures in the future.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not quite! <br><br> Do you really believe that the best change in this patient routine is to add an antiseizure medication?";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}

}








function checkQ2() {

	if (document.question2.question.value == "a") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br> Provoked seizures are a symptom to an abnormal stimulus from a normal brain. A normal brain does not have a predisposition to have unprovoked seizures. It does not matter how many provoked seizures you have.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No! <br><br> Remember that provoked seizures mean the brain is normal.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

	if (document.question3.question.value == "a") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br> Look at the first condition in the definition of epilepsy: if you have two unprovoked seizures occurring more than 24 hours apart you have epilepsy by definition. No EEG needed.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No! <br><br> Look at the definition of epilepsy.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Yes! <br><br> Epilepsy is diagnosed as<br><br>two unprovoked seizures (separated by, at least, 24 hours), or <br><br>one unprovoked seizure and a risk (60% or more) of having more unprovoked seizures in the future (typically, brain structural lesion or epileptiform activity on the EEG), or <br><br>an epilepsy syndrome. Some rare patients with some epilepsy syndromes do not have seizures.";
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
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "We reviewed the definition of epilepsy and seizures.<br><br>'Seizure disorder' is not a medical term and has no meaning. It misses the crucial distinction between provoked seizures (as a general rule, do not need antiseizure medications) and provoked seizures (as a general rule, when they meet the criteria for epilepsy, they need antiseizure medications). This pseudodiagnosis puts patients at risk of receving long-term treatment they do not need or viceversa. Take 'seizure disorder' out of your vocabulary.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";	
}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == true && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br> Unfortunately, many providers do not take a description of the event, just classify the event as 'generalized tonic-clonic' whenever there is a motor seizure. Taking a good history from the patient, asking witnesses, and trying to reconstruct and describe the event is the most important part of an epilepsy diagnosis. Describe the event. Describe the event, classifying the seizure is not as crucial as describing the event in detail. Unfortunately, it is rarely done.<br><br>The seizure classification and the epilepsy syndrome classification changes every few years to adapt to new knowledge.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ7() {

	if (document.question7.question.value == "b") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!! <br><br>Persons with epilepsy can have a normal routine EEG. Actually, most persons with epilepsy will have a normal routine EEG. The diagnostic yield (sensitivity) of a single routine EEG varies between populations, but is quite consistently between 25% and 50% in children and adults: see some examples <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/30718615/'>here</a>, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/28520630/'>here</a>, and <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/18042424/'>here</a>.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "That means that, if you use a routine EEG to 'rule out epilepsy', approximately 50% to 75% of patients in whom you 'ruled out epilepsy' actually have epilepsy. If you think about the numbers, it appears that a routine EEG is not a great method to 'rule out epilepsy'.<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Totally wrong answer. This widespread belief is wrong and harms patients.<br><br>If you have been 'ruling out epilepsy' with an EEG, try to read about the diagnostic yield of EEG before you continue with that practice.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "Try again!";

}

}








function checkQ8() {

	if (document.question8.question.value == "b") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct!! <br><br>The diagnosis of epilepsy requires (in most cases) at least one clinical seizure <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/24730690/'>(see Table 2)</a>. If your clinical suspicion for the event is syncope, then the presence of interictal epileptiform activity on the EEG will not make a diagnosis of epilepsy because there is no clinical suspicion for any seizure. This is a very important concept.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "A small percentage (1%-5%) of people who never had a seizure and will never have a seizure have epileptiform discharges on EEG as shown, for example, <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/15652731/'>here</a> and <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/8082631/'>here</a>.<br><br>If you have a patient presenting with (for example) syncope and you order an EEG and the EEG shows epileptiform discharges, are you going to diagnose the patient with epilepsy? Based on what? Remember, 1-5% of the population who never had and will never have seizures have epileptiform discharges on EEG. Epileptiform discharges are more frequent in children with developmental delay/cerebral palsy/autism. Why did you order an EEG in the first place when you have no clinical suspicion for seizures? Are you going to give antiseizure medications to the patient? To prevent seizures that the patient does not have? <br><br>Please, answer these questions before considering ordering an EEG 'to be sure' in a patient with events not clinically suspicious of seizures.<br><br>In certain environments, you will find patients on antiseizure medications for several years when they never had a seizure, just a syncope (or other non-epileptic event) and an EEG with epileptiform discharges. This harms patients.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Totally wrong answer. This widespread belief is wrong and harms patients.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "Epileptiform activity on EEG also happens in people who never had a seizure and will never have a seizure. Surprised about that? Read more, for example, <a href='https://pubmed.ncbi.nlm.nih.gov/15652731/' target='_blank'>here</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/8082631/' target='_blank'>here</a>.<br><br>Try again!";

}

}


