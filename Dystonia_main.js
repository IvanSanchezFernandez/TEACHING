
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
		document.getElementById("answerQ1").innerHTML = "I am not going to give you the answer to this one.<br><br>Keep trying until all the categories match.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";	
}








function checkQ2() {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "I am not going to give you the answer to this one.<br><br>Keep trying until all the categories match.<br><br>Example of <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=mBr1ZZ1dr3E'>intention tremor (only the first case in the video)</a>, <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=ZkM-1MLn0_A'>more intention tremor</a>, <a target='_blank' rel='noopener noreferrer' href='https://links.lww.com/CONT/A282'>rest tremor in a patient with Parkinsonism</a>, <a target='_blank' rel='noopener noreferrer' href='https://links.lww.com/CONT/A278'>action tremor in a patient with essential tremor</a>, and an example of <a target='_blank' rel='noopener noreferrer' href='https://links.lww.com/CONT/A281'>postural tremor > rest tremor in a patient with rubral tremor</a>.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";	
}








function checkQ3() {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "I am not going to give you the answer to this one.<br><br>Keep trying until all the categories match.<br><br>Example of <a target='_blank' rel='noopener noreferrer' href='https://links.lww.com/CONT/A351'>ballism</a>, <a target='_blank' rel='noopener noreferrer' href='https://links.lww.com/CONT/A354'>chorea</a>, <a target='_blank' rel='noopener noreferrer' href='https://links.lww.com/CONT/A356'>more chorea</a>, and <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=r83oNybOtrc'>choreoathetosis</a>.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";	
}








function checkQ4() {

	if (document.question4.question.value == "c") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!! <br><br> Dystonias are a diverse family of disorders that share excessive contractions of both agonists and antagonists in specific muscle groups leading to abnormal movements. An example of <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=mlMQw6xMn6k'>writing dystonia</a>. ";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No! <br><br> Loss of tone is hypotonia. Oscillating movements is tremor.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Yes! <br><br> The <a target='_blank' rel='noopener noreferrer' href='https://www.yout-ube.com/watch?v=6D3r-GR_5XM'>sensory trick</a> (geste antagoniste in French) consists of the patient relieving the dystonia by some sensory stimulation specific to the dystonia and the patient (for example, touching the lower face in cervical dystonia).<br><br><a target='_blank' rel='noopener noreferrer' href='https://static-content.springer.com/esm/art%3A10.1038%2Fng.3740/MediaObjects/41588_2017_BFng3740_MOESM209_ESM.mpg'>Overflow</a> consists of the movements spreading from one region of the body to other region(s).<br><br>Dystonia is often <a target='_blank' rel='noopener noreferrer' href='https://tremorjournal.org/articles/10.5334/tohm.223/print/'>task-specific</a>.<br><br>For all these reasons, dystonia was considered to be a <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/20350935/'>psychogenic disease</a> by prominent doctors not so long ago.";
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

	if (document.question6.question.value == "b") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct!! <br><br>Dopa-responsive dystonia (DYT5 or Segawa's disease) is an autosomal dominant dystonia due to a deficiency in GTP cyclohydrolase.<br><br>It is characterized by dystonia (typically presenting as foot dystonia) that worsens as the day progresses and it is very sensitive to L-dopa, even at low doses.<br><br>L-dopa works even if the treatment is initiated years after onset. WARNING: If your cerebral palsy patient does not have spasticity and symptoms worsen during the day it may be DYT5: try L-dopa.<br><br>Carbidopa/L-dopa is started with doses of L-dopa at 1 mg/Kg/day which can be increased gradually until symptom resolution or side effects (somnolence, nausea, vomiting, anorexia, dyskinesia, and hallucinations). Typical maximum doses are 5-10 mg/Kg/day and if there is no response to 600 mg/day it is highly unlikely that DYT5 is the correct diagnosis.";
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

	if (document.question7.question.value == "a") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!! <br><br>This is an example of precision medicine.<br><br>The specific genetic mutation informed about the specific mollecular defect in the metabolic pathway and the doctors added 5-hydroxytryptophan to the L-dopa to correct the mollecular defect.<br><br>The result? <a target='_blank' rel='noopener noreferrer' href='https://ars-els-cdn-com.ezproxy.bu.edu/content/image/1-s2.0-S088789941530271X-mmc4.mp4'>Here</a>. The <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/27080360/'>full article</a> explains her interesting case (of her and of her brother with similar but less severe symptoms).";
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

	if (document.question8.question.value == "d") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct!! <br><br> This girl likely has DYT1 (Oppenheim's) dystonia, an autosomal dominant dystonia.<br><br>DYT1 is more frequent in persons of Jewish origin and typically starts around 12 years of age with dystonic posturing and abnormal gait. Over the years the dystonia worsens and, within 5 years, generalizes.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not right.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "Try again!";

}

}








function checkQ9() {

	if (document.question9.question.value == "a") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Yes!! <br><br>Myoclonus-dystonia or DYT11.<br><br>Autosomal dominant. Myoclonus more prominent than dystonia. Affects upper body part. The symptoms improve with alcohol. Typical onset at 5 years. Frequent psychiatric comorbidities, including obsessive-compulsive disorder.<br><br>If the clinical vignette is psychiatric symptoms + dystonia, think DYT11. If the clinical vignette is myoclonus + dystonia think DYT11. If the clinical vignette includes psychiatric history in the parents + dystonia think DYT11. If the clinical vignette includes predominantly upper body dystonia, think DYT11.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("afterQ9_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No!";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("afterQ9_picture").innerHTML = "Try again!";

}

}




