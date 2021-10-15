

function checkQ1() {

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br>The case report does not provide a lot of detail, but there is no history of trauma and it is unlikely that a psychogenic condition leads to abnormal T2 hyperintensity in the left mesial temporal lobe.<br><br>Most likely this condition was caused by either an autoimmune inflamatory process or an infection or the neoplastic process.<br><br><b>What other tests would you have done to clarify the etiology?</b></a>. ";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No! <br><br> Read the case again.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}

}








function checkQ2() {

	if (document.question2.question.value == "e") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>Data on limbic encephalitis in children is very limited<br><br>However, the limited data that exists suggests that paraneoplastic etiologies are rare in children.<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/20959359/'>In a study of</a> 10 pediatric patients with limbic encephalitis of different etiologies, no tumor was found in 9 patients.<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/23658383/'>A study of</a> 8 pediatric patients with anti-Hu limbic encephalitis, no tumor was found in 6 patients.<br><br>The period of follow-up was months to years.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No!";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>Limbic encephalitis is more frequent in immunosuppressed patients.<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/22554258/'>This patient received cord blood transplantion for leukemia 20 days before clinical presentation</a>.<br><br>Therefore, most likely yes, this was an infection with HHV6 virus. <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/22554258/'>Similar cases with similar evolution have HHV6 PCR positive both in blood and CSF</a>.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not sure if that is the best answer.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Yes! <br><br> <a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/22554258/'>This article</a> explains these aspects, mainly in the discussion.";
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

	if (document.getElementById("q5a").checked == true && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Yes! <br><br>Perseveration represents a dysfunction of the frontal lobe making it difficult to change tasks.<br><br>Testing for it requires activities in which the patient is asked to <a target='_blank' rel='noopener noreferrer' href='https://learninglink.oup.com/access/content/the-neuroexam-video/neuroscience-sequencing-tasks-and-frontal-release-signs?previousFilter=tag_09-sequencing-tasks-and-frontal-release-signs'>switch between tasks</a>.";
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

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Yes! <br><br>Behavior at the bedside and ability to follow commands during exam are a gross way of identifying deficits in attention and planning.<br><br>The peeramid2 has many tests which might be helpful to test these aspects more finely at the bedside.";
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
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Influenza A, Influenza B<br>RSV<br>Parainfluenza 1, Parainfluenza 2, Parainfluenza 3, Parainfluenza 4<br>Human metapneumovirus<br>Adenovirus<br>Bordetella pertussis, Bordetella parapertussis<br>Chlamidia pneumoniae<br>Mycoplasma pneumoniae<br>Coronavirus 229E, Coronavirus HKU1, Coronavirus NL63, Coronavirus OC43<br>Rhinovirus<br>MRSA<br><br>E.coli K1<br>H.influenzae<br>L.monocytogenes<br>N.meningitidis<br>S.agalactiae<br>S.pneumoniae<br>CMV<br>Enterovirus<br>HSV1, HSV2, HSV6<br>Human parechovirus<br>VZV<br>C.neoformans, C.gatii<br><br>M.pneumoniae<br>EBV<br>Lymphocytic chroriomeningitis<br>B.burgdorgferi<br>B.hensealae, B.quintana<br>WNV<br>CMV<br>Syphilis<br>HIV<br>EEEV<br>California encephalitis virus<br>Saint Louis encephalitis<br>WEEV<br>SARSCOV-2";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "Great job!";
	}








function checkQ8() {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "IgG index<br>Neopterin<br>Oligoclonal bands<br>AQP4<br>NMO<br>MOG<br>ANA<br>Angiotensin converting enzyme<br>ANCA<br>Myeloperoxidase antibody<br>Proteinase 3 antibody<br>Sm antibody<br>Sm Rnp antibody<br>DNA(ds) antibody<br>SSA, SSB<br>Streptolysin O<br>C3, C4<br>Anti-Hu, ANNA2(Ri), ANNA3, PCA1(Yo), PCA2, PCA-Tr(DNER), AGNA SOX1, Amphysin, CRMP5 CV2, GAD65, Ma2 Ta, Myelin, Zic4, AMPAR1, AMPAR2, GABABR, LGIq, CASPR2, DPPX, VGCC PQ, VGCC N, AChR";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "Great job!";
	}














