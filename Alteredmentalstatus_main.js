

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

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br>The determination of death by neurologic criteria is a clinical diagnosis.<br><br>Death by neurologic criteria is defined as the complete and permanent loss of brain function as defined by an unresponsive coma with loss of capacity for consciousness, brainstem reflexes, and the ability to breathe independently. In this context permanent refers to loss of function that cannot resume spontaneously and will not be restored through intervention. This may result from permanent cessation of oxygenated circulation to the brain and or after devastating brain injury. Persistence of cellular level neuronal and neuroendocrine activity does not preclude the determination of death by neurologic criteria.<br><br>The criteria for brain death are the same in adults and children, but in children 2 different examinations including apnea testing are performed in children.<br><br>The current guidelines consider that brain death can only be determined in children 36 weeks of gestational age or older, whith substantial uncertainty in children below that age.<br><br>Here are the current <a href='https://pubmed.ncbi.nlm.nih.gov/32761206/' target='_blank'>criteria for brain death</a>.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}

}








function checkQ2() {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "The respiratory pattern and pupillary abnormalities usually permit a rough localization of structural lesions in the brainstem, especially in the vertical axis. Let's review the localizing value of <a href='https://epomedicine.com/wp-content/uploads/2018/07/respiratory-patterns.jpg' target='_blank'>abnormal respiratory patterns</a> and <a href='https://pbrainmd.wordpress.com/2016/03/page/3/' target='_blank'>pupillary abnormalities.</a>";
		document.getElementById("after_submitQ2").style.background = "lightgreen";	
}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == true) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Exactly! <br><br>The locked-in syndrome is an interesting syndrome in which the patient is fully aware with preserved sensory input to the thalamus (mainly through the posterior columns/medial lemniscus and the spinothalamic sensory systems, but has bilateral damage to the corticospinal and corticobulbar tracts preventing voluntary movement of the body and the face. Locked-in syndrome is frequently caused by structural lesions of the anterior pons and this also impairs the VI cranial nerve and the medial longitudinal fasciculus which prevents horizontal eye movements. Because the vertical eye movements are coordinated mostly in the midbrain tectum, the patient may have preserved vertical eye movements, the only way the patient has to communicate with the external world.<br><br>Unresponsive wakefulness (it used to be termed vegetative state), consists of preserved wake-sleep cycles with no content.<br><br>Death by neurological criteria refers to irreversible and complete loss of function of the brain. The spinal cord can and usually does continue working. This is extremely well explained in the table Coma and related states in Blumenfeld Neuroanatomy through clinical cases.";
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

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Yes! <br><br>Cerebellar tonsilar herniation usually causes compression of the medulla and respiratory arrest, blood pressure instability, and death.<br><br>Uncal herniation can either compress the pyramidal tract ipsilaterally causing contralateral hemiparesis or displace the midbrain so that the contralateral pyramidal tract gets compressed against the tentorial notch causing ipsilateral hemiparesis. Let's review the types of <a href='https://en.wikipedia.org/wiki/File:Brain_herniation_types-2.svg' target='_blank'>brain herniations</a>.";
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

	if (document.question5.question.value == "d") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct!! <br><br>Most of the cases of macrocephaly you will find in the clinic will be familiar macrocephaly or idiopathic increased subdural spaces or macrocephaly associated with autism spectrum disorder. However, if the head circumference crosses percentile lines or there is some sign of increased intracranial pressure such as vomiting, unsteadiness, regression or stagnation in developmnent, look for a secondary cause.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Try again!";

}

}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br>Analgesia, sedation, normothermia (or even hypothermia), avoiding constipation, head elevation to 30-45 degrees, isotonic or hyperosmolar fluids, external ventricular drain, hyperventilation, and surgical decompression may decrease intracranial hypertension. Surgical decompression may improve survival, but with typically poor clinical outcomes. <a href='https://pubmed.ncbi.nlm.nih.gov/34618757/' target='_blank'>Table 1-2 in this article reviews the characteristics and management of intracranial hypertension</a>.";
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

	{
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Some infections causing meningitis or meningoencephalitis:<br><br>Herpes viruses.<br><br>West Nile virus.<br><br>Japanese encephalitis virus.<br><br>La Crosse virus.<br><br>St. Louis encephalitis virus.<br><br>Rabies virus.<br><br><br><br>Some autoimmune diseases causing autoimmune encephalitis:<br><br>ADEM.<br><br>Anti-NMDA receptor encephalitis.<br><br>Anti GAD.<br><br>Anti VGKC<br><br>Anti MOG.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "Here is an <a href='https://pubmed.ncbi.nlm.nih.gov/34623096/' target='_blank'>article on encephalitis</a>.";

}	

}








function checkQ8() {

	{
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Toxic or metabolic (alcohol, drugs, electrolyte abnormalities, hypoglycemia, anoxia, hypothyroidism, hyperthyroidism, hepatic failure, renal failure, sepsis, inborn errors of metabolism).<br><br>Traumatic brain injury.<br><br>Cerebrovascular (stroke, hemorrhage).<br><br>Migraine.<br><br>Seizures or post-ictal state.<br><br>Diffuse cerebral edema.<br><br>Vasculitis.<br><br>Diffuse demyelination.<br><br>Brain tumor.<br><br>Psychiatric (depression, mania, schizophrenia).<br><br>Sleep deprivation.<br><br>Posterior reversible encephalopathy syndrome.<br><br>Vitamin B12 deficiency.<br><br>Degenerative diseases (dementia, congenital errors of metabolism).";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "";

}	

}

