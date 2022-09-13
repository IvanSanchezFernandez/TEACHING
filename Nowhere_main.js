

function checkQ1() {

	if (document.question1.question.value == "g") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!!<br><br>In the <a href='https://pubmed.ncbi.nlm.nih.gov/10660394/' target='_blank'>classic study on early identification of refractory epilepsy</a>, Kwan and Brodie followed 470 children, adolescents, and adults with epilepsy without prior treatment. 47% of them became seizure-free with the first antiseizure medication and 13% became seizure-free with the second antiseizure medication. Response to a third or subsequent antiseizure medication was only 4%.<br><br>Definition of seizure freedom: No seizures of any kind for at least 1 year (on or off antiseizure medication).<br><br>Median follow-up: 5 years (range 2-16 years) and 90% of patients had at least 3 years of follow-up.";
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

	if (document.question2.question.value == "g") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Exactly!!<br><br>In the <a href='https://pubmed.ncbi.nlm.nih.gov/29279892/' target='_blank'>follow-up study of the Kwan and Brodie cohort</a>, 1,795 children, adolescents, and adults were followed for at least 2 years: 46% achieved seizure freedom with the first antiseizure medication and 12% achieved seizure freedom with a second antiseizure medication. Response to a third antiseizure medication was 4%, to a fourth was 1%, and further trials below 1%. This means that, despite the availability of new antiseizure medications with different mechanisms of action, the proportions did not change.<br><br>Definition of seizure freedom: No seizures of any kind for at least 1 year (on or off antiseizure medication).<br><br>Median follow-up: 11 years (IQR 7-16 years).<br><br>Adverse effects, tolerability, and interaction profile are better with new antiseizure medications, but that is it. There has not been any difference in more than 20 years in the proportion of patients who become seizure free with antiseizure medications.<br><br>That is why refractory epilepsy is defined as failure to achieve seizure freedom after two appropriately chosen and dosed antiseizure medications. After that, the probability of achieving seizure freedom is ridiculously small.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>In a <a href='https://pubmed.ncbi.nlm.nih.gov/11484687/' target='_blank'>randomized controlled trial (with no patients lost to follow-up) of 80 adults with refractory temporal lobe epilepsy</a>, freedom from seizures with impaired awareness ocurred in 58% of patients in the surgical arm versus 8% of patients in the medical arm for a number needed to treat of 2.<br><br>Freedom from all seizures was 38% in the surgical arm versus 3% in the medical arm for a number needed to treat of 3.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

	if (document.question4.question.value == "a") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Yes!! <br><br>In a <a href='https://pubmed.ncbi.nlm.nih.gov/29069568/' target='_blank'>randomized controlled trial (with 1 patient lost to follow-up) of 106 pediatric patients with refractory epilepsy</a>, seizure freedom at 1 year ocurred in 77% of patients in the surgical group versus 7% of patients in the medical group.<br><br>The surgeries were heterogeneous and included temporal lobe resections (14), extratemporal resection (12), hemispherotomy (15), corpus callosotomy (10), and disconnection or resection of hypothalamic hamartoma (6).<br><br>Major side effects including hemiparesis occurred in 33% of patients in the surgical group versus 0% in the medical group.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}








function checkQ5() {

	if (document.question5.question.value == "g") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Yes!! <br><br>A large <a href='https://pubmed.ncbi.nlm.nih.gov/26899389/' target='_blank'>meta-analysis of 30 studies with a total of 2,624 patients undergoing stereo-EEG procedures</a> (currently the most common method of intraoperative monitoring) found intracranial hemorrhage in 1% (95% CI: 0.6-1.4), infection in 0.8% (95% CI: 0.3-1.2), and mortality in 0.3% (95% CI: -0.1-0.6).<br><br>A different <a href='https://pubmed.ncbi.nlm.nih.gov/23294329/' target='_blank'>meta-analysis of 21 studies with a total of 2,542 patients undergoing subdural grids monitoring</a> (the most common method of intraoperative monitoring in the USA until a few years ago), found intracranial hemorrhage in 4% (95% CI: 3.2-4.8), infections in 2.3% (95% CI: 1.5-3.1), and mortality in 0.2%.<br><br>The complications of epilepsy surgery have been compared in frequency and severity with the complications of knee replacement.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Try again!";

}

}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == true && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Exactly! <br><br>A <a href='https://pubmed.ncbi.nlm.nih.gov/19050193/' target='_blank'>decision analysis on adults with refractory temporal lobe epilepsy</a> showed that temporal lobectomy would increase life expectancy by 5.0 years (95% CI: 2.1-9.2) and would increase quality of life with 7.5 more QALYs (95%, CI: −0.8 to 17.4) than continuing medical treatment only.<br><br>A <a href='https://pubmed.ncbi.nlm.nih.gov/25599894/' target='_blank'>decision analysis on pediatric patients with refractory epilepsy (temporal or extratemporal)</a> showed that, in pediatric patients, temporal lobectomy would increase life expectancy by approximately 6 years and extratemporal epilepsy surgery would increase life expectancy by approximately 5 years compared with continuing medical treatment only.<br><br>In the <a href='https://pubmed.ncbi.nlm.nih.gov/11484687/' target='_blank'>randomized controlled trial of 80 adults with refractory temporal lobe epilepsy</a>, the quality of life (measured with the Quality of Life in Epilepsy Inventory-89) was consistently higher in the surgical arm than in the surgical arm. In the <a href='https://pubmed.ncbi.nlm.nih.gov/11484687/' target='_blank'>randomized controlled trial of 106 pediatric patients with refractory epilepsy</a>, the quality of life (as measured by the Child Behavior Checklist and the Pediatric Quality of Life Inventory) improved in the surgical group, but not in the medical group (even if in this study, major adverse effects including hemiparesis occurred in 33% of the surgical group, but 0% of the medical group).<br><br>A <a href='https://pubmed.ncbi.nlm.nih.gov/27595433/' target='_blank'>prospective observational study in the 15 epilepsy units in France</a> compared 119 patients undergoing epilepsy surgery versus 88 patients who were operable but were not operated and showed that, at 2 years, seizure freedom was 69% in the surgical group versus 12% in the medical group and, at 5 years, seizure freedom was 77% in the surgical group versus 21% in the medical group.<br><br>A <a href='https://pubmed.ncbi.nlm.nih.gov/32641528/' target='_blank'>cost-effectiveness study of refractory temporal lobe epilepsy in the USA</a> showed that society regains the cost of epilepsy surgery after 3 years and that, even if only 5% of patients who undergo presurgical evaluation would progress to surgery, it would still be cost-effective.";
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

	if (document.question7.question.value == "g") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!! <br><br>A <a href='https://pubmed.ncbi.nlm.nih.gov/26899389/' target='_blank'>Trade-Off Talking Rational Economic Person (TOTREP)</a> is the theorethical model in which neoclassical economics is based and describes a decision maker who always maximizes his or her utility.<br><br>The fact that <a href='https://pubmed.ncbi.nlm.nih.gov/17835457/' target='_blank'>strong and consistent empirical evidence since the 1970s demonstrated that humans are not even close to make decisions that way</a> did not deter neoclassical economists to continue talking about TOTREPs, rational choices, and developing this model.<br><br>Others <a href='https://fancycomma.com/2020/10/12/behavioral-economics-nobel-prizes/' target='_blank'>developed the field of behavioral economics</a>, which is actually based on empirical evidence on how humans behave and make decisions.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "Try again!";

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

















window.onload = function () {
    var element = document.getElementById('videom1');
    element.muted = "true";
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









