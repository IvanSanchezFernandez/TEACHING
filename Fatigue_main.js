

function checkQ1() {

	{
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "There are non-neurologic and neurologic causes of fatigue. Some of them are presented below <br><br><br><br>Non-neurological causes of fatigue:<br><br>Excess physical activity.<br><br>Lack of physical activity.<br><br>Anemia.<br><br>Cancer.<br><br>Anxiety.<br><br>Depression.<br><br>Chronic infection or inflammation.<br><br>Diabetes.<br><br>Hyperthyroidism.<br><br>Hypothyroidism.<br><br>Inflammatory bowel disease.<br><br><br><br>Neurological causes of fatigue:<br><br>Multiple sclerosis.<br><br>Sleep deprivation.<br><br>Traumatic brain injury.<br><br>Multiple sclerosis.<br><br>Parkinson disease.<br><br>Stroke.<br><br>Myastenia gravis.<br><br>Amyotrophic lateral sclerosis.<br><br>Traumatic brain injury.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "Here is a <a href='https://pubmed.ncbi.nlm.nih.gov/23339207/' target='_blank'>short article on neurological causes of fatigue</a>.";

}	

}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == true && document.getElementById("q2d").checked == true && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Exactly! <br><br>Fatigue is very common in multiple sclerosis, it can be caused by the disease itself, by side effects of medications, or by associated depression, which is twice as common in multiple sclerosis than in the general population<br><br>Fatigue is not a diagnostic criterion for multiple sclerosis and you should not start a work-up for multiple sclerosis based only on the presence of fatigue.<br><br>Here is an article summarizing <a href='https://pubmed.ncbi.nlm.nih.gov/31162315/' target='_blank'>symptoms and comorbidities in multiple sclerosis</a>.";
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

	{
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "What does she mean by fatigue?<br><br>What is the functional impact of this fatigue?<br><br>Is the fatigue more prominent during certain portions of the day?<br><br>Does she wake up tired or she wakes up refreshed and fatigue builds on during the day?<br><br>Does fatigue improve when she sleep?<br><br>Does she need to sleep during the day because of fatigue?<br><br>Does she fall asleep at school/work/activities?<br><br>Any episode of loss of vision or focal weakness or focal numbness?<br><br>Any episode of muscular weakness?<br><br>What is her sleep schedule?<br><br>Any antecedent of traumatic brain injury?<br><br>Anybody in the family with similar symptoms?";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "";

}	

}









function checkQ4() {

	if (document.question4.question.value == "c") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!! <br><br>In cataplexy there is a relatively sudden appearance of weakness (which can affect the whole body or just a single body part), consciousness is perfectly preserved, and typically this is triggered by emotions (most frequently positive emotions). The patient may progressively collapse to the floor.<br><br><a href='https://www.yout-ube.com/watch?v=d41BfD21b48' target='_blank'>An explanation of how cataplexy looks like</a>.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}







function checkQ5() {

	{
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Normal:<br><br>CBC.<br><br>BMP.<br><br>Thyroid function tests.<br><br>Vitamin D levels.<br><br>Vitamin B12 levels.<br><br>Iron, TIBC.<br><br>Urine HCG.<br><br>Cortisol.<br><br>Progesterone.<br><br>Insulin.<br><br>IGF1.<br><br>Prolactin.<br><br>FSH, LH.<br><br>C-reactive protein.<br><br>Tryptase.<br><br><br><br>Abnormal:<br><br>Borderline positivity for celiac disease antibodies.<br><br>Borderline atrophy of duodenal mucosa.<br><br>-->Patient put on a gluten free diet.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "";

}	

}








function checkQ6() {

	if (document.question6.question.value == "b") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct!! <br><br>The patient's celiac antibodies and the duodenal mucosa findings improved over time. Her fatigue did not.";
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

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == true && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == true && document.getElementById("q7e").checked == true && document.getElementById("q7f").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Exactly! <br><br>The involvement of celiac disease in the brain is wide and includes all of the above presentations.<br><br>Here is an article summarizing <a href='https://pubmed.ncbi.nlm.nih.gov/28928632/' target='_blank'>the neurological manifestations of celiac disease</a>.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ8() {

	{
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Pale skin.<br><br>Normally colored mucosae.<br><br>Rest normal.<br><br>That is it.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "";

}	

}









function checkQ9() {

	{
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Contrary to popular belief, patients with narcolepsy can avoid falling asleep when there is a stimulating environment (class, sports, etc.) and fall asleep as soon as stimulation decreases. <a href='https://pubmed.ncbi.nlm.nih.gov/34031309/' target='_blank'>The Epworth sleepiness scale partially measures that</a>.<br><br>Narcolepsy with cataplexy is narcolepsy type I. Narcolepsy without cataplexy is narcolepsy type II.<br><br>This patient may or may not have cataplexy masked (partially treated) with SSRIs, so we do not know if she really has cataplexy.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/34031309/' target='_blank'>A good short article on narcolepsy</a>.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("afterQ9_picture").innerHTML = "";

}	

}








function checkQ10() {

	{
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "In narcolepsy type I, hypocretin levels are low in CSF. In narcolepsy type II hypocretin levels are normal in CSF.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/34031309/' target='_blank'>A good short article on narcolepsy</a>.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("afterQ10_picture").innerHTML = "";

}	

}








function checkQ11() {

	if (document.getElementById("q11a").checked == true && document.getElementById("q11b").checked == false && document.getElementById("q11c").checked == false && document.getElementById("q11d").checked == true && document.getElementById("q11e").checked == false) {
		document.getElementById("after_submitQ11").style.visibility = "visible";
		document.getElementById("answerQ11").innerHTML = "Exactly! <br><br>Multiple sleep latency test measures the time to fall asleep and REM onset sleep in several occasions to nap.<br><br>The regular sleep study ensures that the prior night sleep was decent (you are not just sleep deprived).<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/34031309/' target='_blank'>A good short article on narcolepsy</a>. <a href='https://pubmed.ncbi.nlm.nih.gov/18842919/' target='_blank'Difference between multiple sleep latency test and maintenance of wakefulness test</a>.";
		document.getElementById("after_submitQ11").style.background = "lightgreen";
		document.getElementById("afterQ11_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ11").style.visibility = "visible";
		document.getElementById("answerQ11").innerHTML = "Not correct.";
		document.getElementById("after_submitQ11").style.background = "red";
		document.getElementById("afterQ11_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}








function checkQ12() {

	if (document.question12.question.value == "b") {
		document.getElementById("after_submitQ12").style.visibility = "visible";
		document.getElementById("answerQ12").innerHTML = "Correct!! <br><br><a href='https://www.narcolepsylink.com/screening-and-diagnosis/diagnostic-criteria/' target='_blank'>These are the criteria for the diagnosis of narcolepsy</a><br><br>Remember. You have to make sure the prior night had a good night sleep. In this case, the prior night she slept 5 and a half hours. Not enough.";
		document.getElementById("after_submitQ12").style.background = "lightgreen";
		document.getElementById("afterQ12_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ12").style.visibility = "visible";
		document.getElementById("answerQ12").innerHTML = "No.";
		document.getElementById("after_submitQ12").style.background = "red";
		document.getElementById("afterQ12_picture").innerHTML = "Try again!";

}

}








function checkQ13() {

	if (document.getElementById("q13a").checked == true && document.getElementById("q13b").checked == false && document.getElementById("q13c").checked == true && document.getElementById("q13d").checked == true && document.getElementById("q13e").checked == true) {
		document.getElementById("after_submitQ13").style.visibility = "visible";
		document.getElementById("answerQ13").innerHTML = "Exactly! <br><br>Narcolepsy has no known cure.<br><br>However, symptom improvement can be achieved with regular sleep schedule, scheduled naps during the day, and regular exercise.<br><br>Stimulants like modafinil, methylphenydate, and sodium oxybate may also help.<br><br>Limiting consumption of caffeine, sugar, and carbohydrates can improve narcolepsy symptoms.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/34031309/' target='_blank'>A good short article on narcolepsy</a>.";
		document.getElementById("after_submitQ13").style.background = "lightgreen";
		document.getElementById("afterQ13_picture").innerHTML = "Great job!";


	} else {
		document.getElementById("after_submitQ13").style.visibility = "visible";
		document.getElementById("answerQ13").innerHTML = "Not correct.";
		document.getElementById("after_submitQ13").style.background = "red";
		document.getElementById("afterQ13_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}


}



