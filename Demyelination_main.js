

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

if (document.question1.question.value == "e") {
document.getElementById("after_submitQ1").style.visibility = "visible";
document.getElementById("answerQ1").innerHTML = "Correct!! <br><br>Sensation to fine touch, vibration, and propioception is transmitted through the posterior column-medial lemniscus pathway.<br><br>The first neuron collects fine touch, vibration, and propioception from the foot, has its body in the dorsal root ganglion, and enters the dorsal spinal cord to ascend in the ipsilateral posterior column (fasciculus gracilis for the lower extremity and fasciculus cuneautus for the upper extremity).<br><br>The body of the second neuron is in the spinomedullary junction (nucleus gracilis for the lower extremity and nucleus cuneatus for the upper extremity) and project, through the medial lemniscus, to the thalamus.<br><br>The body of the third neuron is in the ventral posterior lateral nucleus of the thalamus and projects, through the posterior limb of the internal capsule and the corona radiata, to the primary sensory cortex in the postcentral gyrus.<br><br>Here is another view of the <a href='https://www.kenhub.com/thumbor/FONDghsLa7bc2zHwYwfJ1NpEVeY=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/714/55fGr0nfnPrLQJiMa6Ig_posterior-column-medial-lemniscus-pathway_english.jpg' target='_blank'>posterior column-medial lemniscal pathway</a>.";
document.getElementById("after_submitQ1").style.background = "lightgreen";
document.getElementById("afterQ1_picture").innerHTML = "Great job!";

} else {
document.getElementById("after_submitQ1").style.visibility = "visible";
document.getElementById("answerQ1").innerHTML = "No.<br><br>Try to reason anatomically on where in the sensory pathways the lesion may be.";
document.getElementById("after_submitQ1").style.background = "red";
document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}

}








function checkQ2() {

if (document.question2.question.value == "b") {
document.getElementById("after_submitQ2").style.visibility = "visible";
document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>Among the available options, the only place in which the spinothalamic tract, the posterior column-medial lemniscus tract, the trigeminothalamic tract, and the trigeminal lemniscus run together is in the posterolateral region of the midbrain.<br><br>The ventral posterior lateral nucleus of the thalamus would affect touch, pain, temperature, vibration, and propioception in the contralateral part of the body, but would not affect the contralateral sensation in the face, which passes through the ventral posterior medial nucleus of the thalamus.<br><br>Here is another view of the <a href='https://i0.wp.com/myneurosurg.com/wp-content/uploads/2017/12/e6a044e8a38697f89dc0c595820a54c9-spinothalamic-tract-dorsal-root-ganglion.jpg?resize=736%2C1368&ssl=1' target='_blank'>spinothalamic tract</a>, the <a href='https://www.kenhub.com/thumbor/FONDghsLa7bc2zHwYwfJ1NpEVeY=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/714/55fGr0nfnPrLQJiMa6Ig_posterior-column-medial-lemniscus-pathway_english.jpg' target='_blank'>posterior column-medial lemniscal pathway</a>, and the <a href='https://operativeneurosurgery.com/lib/exe/fetch.php?cache=&media=trigeminallemniscus.jpg' target='_blank'>trigeminothalamic tract and trigeminal lemnicus</a>.";
document.getElementById("after_submitQ2").style.background = "lightgreen";
document.getElementById("afterQ2_picture").innerHTML = "Great job!";

} else {
document.getElementById("after_submitQ2").style.visibility = "visible";
document.getElementById("answerQ2").innerHTML = "No.<br><br>Try to reason anatomically on where the sensory pathways for touch, pain, temperature, vibration, and temperature for both the body and face are anatomically close.";
document.getElementById("after_submitQ2").style.background = "red";
document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

if (document.question3.question.value == "a") {
document.getElementById("after_submitQ3").style.visibility = "visible";
document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>Loss of sensation to pain and temperature in the face with preservation of sensation to vibration and propioception in the same area of the face is highly localizing to either the caudal pons (below the entry of trigeminal fibers into the brainstem) or the medulla. That is the only place where the trigeminothalamic fibers can be affected, but the trigeminal lemniscus cannot.<br><br>Because the spinothalamic tract also runs in the dorsolateral part of the medulla and dorsal pons, there will be loss of sensation to pain and temperature in the contralateral body.<br><br>Here is another view of the <a href='https://i0.wp.com/myneurosurg.com/wp-content/uploads/2017/12/e6a044e8a38697f89dc0c595820a54c9-spinothalamic-tract-dorsal-root-ganglion.jpg?resize=736%2C1368&ssl=1' target='_blank'>spinothalamic tract</a>, the <a href='https://www.kenhub.com/thumbor/FONDghsLa7bc2zHwYwfJ1NpEVeY=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/714/55fGr0nfnPrLQJiMa6Ig_posterior-column-medial-lemniscus-pathway_english.jpg' target='_blank'>posterior column-medial lemniscal pathway</a>, and the <a href='https://operativeneurosurgery.com/lib/exe/fetch.php?cache=&media=trigeminallemniscus.jpg' target='_blank'>trigeminothalamic tract and trigeminal lemnicus</a>.";
document.getElementById("after_submitQ3").style.background = "lightgreen";
document.getElementById("afterQ3_picture").innerHTML = "Great job!";

} else {
document.getElementById("after_submitQ3").style.visibility = "visible";
document.getElementById("answerQ3").innerHTML = "No.<br><br>Try to reason anatomically on where the trigeminothalamic tract and the trigeminal lemniscus diverge.";
document.getElementById("after_submitQ3").style.background = "red";
document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

if (document.question4.question.value == "c") {
document.getElementById("after_submitQ4").style.visibility = "visible";
document.getElementById("answerQ4").innerHTML = "Correct!! <br><br>Brown-Sequard syndrome occurs rarely, but it is extremely helpful to understand the lateralization and localization of spinal cord lesions.<br><br>If one side of the spinal cord is damaged, the spinothalamic tract on that side is damaged (and this causes contralateral loss of pain and temperature sensation 2-3 levels below the lesion because), the dorsal column-medial lemniscus pathway (and this causes ipsilateral loss of vibration and propioception below the level of the lesion), and the corticospinal tract (and this causes ipsilateral weakness ipsilateral below the level of the lesion).<br><br>Here is another view of the <a href='https://i.pinimg.com/originals/37/6d/b3/376db3a78479d4db754c5e835da6fd9b.png' target='_blank'>spinal cord tracts</a>.";
document.getElementById("after_submitQ4").style.background = "lightgreen";
document.getElementById("afterQ4_picture").innerHTML = "Great job!";

} else {
document.getElementById("after_submitQ4").style.visibility = "visible";
document.getElementById("answerQ4").innerHTML = "No.<br><br>Try to reason anatomically on where the tracts may be affected to cause these symptoms.";
document.getElementById("after_submitQ4").style.background = "red";
document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}








function checkQ5() {

if (document.question5.question.value == "c") {
document.getElementById("after_submitQ5").style.visibility = "visible";
document.getElementById("answerQ5").innerHTML = "Correct!! <br><br>Hemiplegia cruciata is a very rare syndrome in which a lesion in the pyramidal decussation affects the already crossed fibers for the upper extremity and the not already crossed fibers for the lower extremity. This causes ipsilateral upper extremity weakness and contralateral lower extremity weakness. Here is an <a href='https://pubmed.ncbi.nlm.nih.gov/23820329/' target='_blank'>example</a>.<br><br>The anatomical reason explaining this phenomenon is that the corticospinal fibers for the upper extremity cross earlier than the fibers for the lower extremity <a href='https://pubmed.ncbi.nlm.nih.gov/3712016/' target='_blank'>example</a>. This sets the stage for small lesions in this region causing unusual syndromes that might be confused with functional presentations like paralysis of ipsilateral upper extremity and contralateral lower extremity (hemiplegia cruciata), or even paralysis of both upper extremities without involvement of the lower extremities (<a href='https://pubmed.ncbi.nlm.nih.gov/30488888/' target='_blank'>cruciate paralysis</a>).";
document.getElementById("after_submitQ5").style.background = "lightgreen";
document.getElementById("afterQ5_picture").innerHTML = "Great job!";

} else {
document.getElementById("after_submitQ5").style.visibility = "visible";
document.getElementById("answerQ5").innerHTML = "No.<br><br>Try to reason anatomically on where the tracts may be affected to cause these symptoms.";
document.getElementById("after_submitQ5").style.background = "red";
document.getElementById("afterQ5_picture").innerHTML = "Try again!";

}

}








function checkQ6() {

if (document.question6.question.value == "c") {
document.getElementById("after_submitQ6").style.visibility = "visible";
document.getElementById("answerQ6").innerHTML = "Correct!! <br><br>Simply looking through the door at a patient who is in either decorticate versus decerebrate posture will help you localize the pathologic process. If the lesion is rostral to the red nucleus, then the rubrospinal tract will predominate and there will predominantly flexion of upper extremities (and extension of lower extremities) in a decorticate posture. If the lesion is between the red nucleus and the vestibular nucleus, there will be a predominance of extensor posturing from the vestibulospinal tract and the patient will be in a decerebrate posture. <a href='https://i.pinimg.com/originals/90/d3/f9/90d3f95263640bed055afa7f2480fad1.jpg' target='_blank'>Localization cartoon</a>.<br><br>Obviously, you want to do a brain MRI at some point in this case, but think how much information you already know just thinking about localization in this case.<br><br>Here are very good and succinct explanations of the anatomy and function of the <a href='https://www.physio-pedia.com/Rubrospinal_Tract' target='_blank'>rubrospinal tract</a> and the <a href='https://www.physio-pedia.com/Vestibulospinal_Tract' target='_blank'>vestibulospinal tract</a>.";
document.getElementById("after_submitQ6").style.background = "lightgreen";
document.getElementById("afterQ6_picture").innerHTML = "Great job!";

} else {
document.getElementById("after_submitQ6").style.visibility = "visible";
document.getElementById("answerQ6").innerHTML = "No.<br><br>Think of the 'flexor' tract and the effect of lesioning it.";
document.getElementById("after_submitQ6").style.background = "red";
document.getElementById("afterQ6_picture").innerHTML = "Try again!";

}

}








function checkQ7() {

if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == true && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == true && document.getElementById("q7e").checked == false && document.getElementById("q7f").checked == true && document.getElementById("q7g").checked == false && document.getElementById("q7h").checked == false) {
document.getElementById("after_submitQ7").style.visibility = "visible";
document.getElementById("answerQ7").innerHTML = "Exactly! <br><br>The 4 locations in MS are yuxtacortical, yuxtaventricular, infratentorial, and spinal cord. You have to demonstrate 2 of the 4 locations with MS-typical lesions to meet dissemination in space. The 'yuxta' here is very relevant: the lesions have to touch on the cortex or on the ventricles. Subcortical lesions that do not touch the cortex do not count. Also, even if optic neuritis is one of the most common presentations of MS, it does not count as a location for diagnostic criteria.<br><br>Dissemination in time can be demonstrated because new lesions appear over time or because enhancing (active, acute or subacute) and non-enhancing (inactive, chronic) lesions occur in the same time or because there are oligoclonal bands in CSF (this is one of the major changes in the most recent <a href='https://pubmed.ncbi.nlm.nih.gov/29275977/' target='_blank'>criteria</a>).";
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
document.getElementById("after_submitQ8").style.visibility = "visible";
document.getElementById("answerQ8").innerHTML = "Short (or small) lesions in the spinal cord and optic nerves are more typical of multiple sclerosis, fluffy poorly defined white matter lesions are more typical of MOG-associated disease, and longitudinally extensive spinal cord lesions, optic chiasm involvement, area postrema syndrome (recurrent severe vomiting), and limited recovery after attacks are more typical of neuromyelitis optica.<br><br>Several articles explain the main differences regarding <a href='https://pubmed.ncbi.nlm.nih.gov/26163068/' target='_blank'>optic neuritis features</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/33522744/' target='_blank'>spinal cord lesion features</a>, and <a href='https://pubmed.ncbi.nlm.nih.gov/31162318/' target='_blank'>other clinical features</a>.";
document.getElementById("after_submitQ8").style.background = "lightgreen"; 
}








function checkQ9() {

if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == true && document.getElementById("q7c").checked == false) {
document.getElementById("after_submitQ9").style.visibility = "visible";
document.getElementById("answerQ9").innerHTML = "Yes! <br><br>In general, MOG-associated disease is a monophasic disease and most children only have one episode. It is common practice to wait and see after acute treatment of the first attack of MOG-associated disease.<br><br>In contrast, neuromyelitis optica requires early use of disease-modifying medication because it usually relapses and relapses usually leave sequelae.<br><br>Disease-modifying treatments for neuromyelitis optica include eculizumab, inebilizumab, satralizumab-mwge, azathioprine, mycophenolate mofetil, and rituximab. Some disease-modifying treatments for multiple sclerosis can worsen neuromyelitis optica: <a href='https://pubmed.ncbi.nlm.nih.gov/22354738/' target='_blank'>interferon beta</a> or <a href='https://pubmed.ncbi.nlm.nih.gov/33951589/' target='_blank'>fingolimod</a>.";
document.getElementById("after_submitQ9").style.background = "lightgreen";
document.getElementById("afterQ9_picture").innerHTML = "Great job!";


} else {
document.getElementById("after_submitQ9").style.visibility = "visible";
document.getElementById("answerQ9").innerHTML = "Not correct.";
document.getElementById("after_submitQ9").style.background = "red";
document.getElementById("afterQ9_picture").innerHTML = "Make sure you check all the correct answers and uncheck all the incorrect answers.<br><br>Try again!";

}

}








function checkQ10() {
document.getElementById("after_submitQ10").style.visibility = "visible";
document.getElementById("answerQ10").innerHTML = "I am not going to give you the answer to this question. Just keep trying to find the right associations.<br><br><br><br><a href='https://pubmed.ncbi.nlm.nih.gov/25336899/' target='_blank'>This article may help you</a>.";
document.getElementById("after_submitQ10").style.background = "lightgreen"; 
}