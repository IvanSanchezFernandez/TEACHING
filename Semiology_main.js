

function checkQ1() {

	if (document.question1.question.value == "e") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br>Patient 1 is Fyodor Dostoevsky. His very detailed descriptions of his seizure semiology through his characters allow to <a href='https://pubmed.ncbi.nlm.nih.gov/20561824/' target='_blank'>characterize his epilepsy in detail</a>.<br><br>Patient 2 is Saint Paul and, although descriptions of his episodes are not as detailed or reliable as patient 1, <a href='https://pubmed.ncbi.nlm.nih.gov/3302109/' target='_blank'>they provide enough information to form a solid hypothesis</a>.<br><br>Both patient 1 and patient 2 had <a href='https://pubmed.ncbi.nlm.nih.gov/26924970/' target='_blank'>ecstatic seizures, which are classically considered mesial temporal/insular seizures</a>.<br><br>The episode of seeing himself is called autoscopy, the hallucinatory experience of seeing one's own body in the external visual space. Not to be confused with an out-of-body experience in which one feels leaving the body and viewing it from another location outside. <a href='https://pubmed.ncbi.nlm.nih.gov/20561824/' target='_blank'>Autoscopy is seen, among other conditions, in temporal lobe epilepsy</a>.";
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

	if (document.question2.question.value == "e") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>The video shows rhythmic clonic movements in the left lower extremity which slowly ascends and affects left side of the trunk and then left upper extremity. This Jacksonian march is typical of focal onset seizures as they spread in the cortex. Based on the information in the video, one can assume an onset of symptoms in the left precentral gyrus in the mesial frontal lobe in the motor homunculus representing the left foot and the seizure spreading through the homunculus as it affects the leg, the thigh, the trunk, and the upper extremity.<br><br>In these cases always ask about initial symptoms. Many of these seizures start with sensory symptoms before the motor ones, suggesting an initial onset of symptoms in the postcentral gyrus (parietal lobe). Pay attention to second 52 where they ask 'Was it numb just before that?' and the patient answers 'Yeah'. Most likely the first symptom was sensory, not motor. Most likely onset of initial symptoms was parietal (postcentral gyrus) and then spread to frontal (precentral gyrus).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

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


function checkQdd() {
		document.getElementById("after_submitQdd").style.visibility = "visible";
		document.getElementById("answerQdd").innerHTML = "I am not going to give the answers for this one.<br><br>Keep trying until you get all answers right and you will see the right answers.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/34404748/' target='_blank'>Table 1 in this article</a> is a good starting point to understand these concepts. A more comprehensive explanation is presented <a href='https://pubmed.ncbi.nlm.nih.gov/29844752/' target='_blank'>here</a>.";
		document.getElementById("after_submitQdd").style.background = "lightgreen";	
}








function checkQ3() {

	if (document.question3.question.value == "f") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>This is a psychogenic non-epileptic seizure. Try to localize the symptoms on the brain. There is no tonic stifenning and the position of the upper extremities with irregular progressive descend into the bed while they shake is quite unusual for an epileptic seizure. The abnormal posture of the right hand is not typical of dystonic posturing and resolves quickly. Most importantly, movements are not stereotypical, they are not the same from one moment to the next.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








window.onload = function () {
    var element = document.getElementById('videom1');
    element.muted = "true";
}


function checkQ4() {

	if (document.question4.question.value == "a") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!! <br><br>This is a frontal lobe seizure with hypermotor movements. Let's listen to the whole story in the video below.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Well,...these are difficult.<br><br>However, pay attention to how the movements are a succession of semipurposeful hypermotor movements.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}







function checkQ5() {

	if (document.question5.question.value == "a") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct!! <br><br>This is a frontal lobe seizure with violent hypermotor movements.<br><br><a href='https://www.jle.com/en/revues/epd/e-docs/frontal_lobe_seizures_110041/article.phtml?tab=videos' target='_blank'>This video</a> explains frontal lobe seizures and provides numerous examples of frontal lobe seizure semiology. It is probably the best explanation on frontal lobe seizure semiology you can find.<br><br>Other great resources with great videos of frontal lobe seizure semiology include <a href='https://pubmed.ncbi.nlm.nih.gov/19307535/' target='_blank'>this case</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/28871070/' target='_blank'>this case</a>";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Well,...these are difficult.<br><br>However, pay attention to how the movements are a succession of semipurposeful violent hypermotor movements.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Try again!";

}

}








function checkQ6() {

	if (document.question6.question.value == "d") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct!! <br><br>Temporal lobe seizure. In particular, mesial temporal lobe seizure. Pay attention to the automotor movements of the right hand and the lip smacking at the beginning. Then, pay attention to the head deviation to the left side and the figure of four approximately at 1:23. This patient had a structural lesion in the left mesial temporal lobe as explained in this <a href='https://pubmed.ncbi.nlm.nih.gov/34404748/' target='_blank'>excellent article</a>.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Try again!";

}

}








function checkQ7() {

	if (document.question7.question.value == "d") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!! <br><br>Temporal lobe seizure. In particular, neocortical (or lateral) temporal lobe seizure. Pay attention how she cannot understand verbal or written commands, but can follow commands communicated visually. This patient had hypometabolism in the left superior temporal gyrus as explained in this <a href='https://pubmed.ncbi.nlm.nih.gov/34404748/' target='_blank'>excellent article</a>.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "Try again!";

}

}








function checkQ8() {

	if (document.getElementById("q8a").checked == false && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == true && document.getElementById("q8f").checked == true) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Exactly! <br><br>The most likely etiology is the onset of a new psychotic disorder or behavioral episodes.<br><br>However, this patient may be having ecstatic seizures and even autoscopy, as explained in question 1 and in <a href='https://pubmed.ncbi.nlm.nih.gov/26924970/' target='_blank'>this excellent article on ecstatic seizures, which are classically considered mesial temporal/insular seizures</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/20561824/' target='_blank'>this excellent article on ecstatic seizures and autoscopy</a>. Her episodes may be even more suspicious for ecstatic seizures because this patient also has refractory focal epilepsy and multiple other seizure types.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ9() {

	if (document.question9.question.value == "d") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct!! <br><br>Focal seizures are between 3 and 4 times more frequent than generalized seizures as shown, for example, in <a href='https://pubmed.ncbi.nlm.nih.gov/3123210/' target='_blank'>this article</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/8404730/' target='_blank'>this article</a>, and <a href='https://pubmed.ncbi.nlm.nih.gov/412669/' target='_blank'>this article</a>.<br><br>If a general service has a majority of generalized tonic-clonic seizures, it is a quality marker of that service not taking a proper history of seizure semiology. Primary (or even secondarily truly generalized tonic-clonic seizures) are quite rare. Unfortunately, not many people take the time to take a history. Partly because of the misclassification of all seizures into generalized tonic-clonic seizures, the new ILAE classification of seizures <a href='https://pubmed.ncbi.nlm.nih.gov/28276060/' target='_blank'>emphasizes description over classification</a>.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("afterQ9_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("afterQ9_picture").innerHTML = "Try again!";

}

}









