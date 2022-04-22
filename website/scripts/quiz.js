var $ = function(id) {
    return document.getElementById(id);
};

var checkAnswer = function(){ 
    
    var question3 = "";
	question3 = $("answer3").value;
	question3 = question3.toLowerCase();
	question3 = question3.trim();	
    

    // validate the entries
	
    if ($("SQ").checked) {
		
       $("SQ").nextElementSibling.firstChild.nodeValue = "Correct!!";
       $("NaCl").nextElementSibling.firstChild.nodeValue = "";
       $("$").nextElementSibling.firstChild.nodeValue = "";
       $("Servants").nextElementSibling.firstChild.nodeValue = "";
       
    } else if ($("Servants").checked) {
		
       $("Servants").nextElementSibling.firstChild.nodeValue = "Wrong!!";
       $("SQ").nextElementSibling.firstChild.nodeValue = "";
       $("NaCl").nextElementSibling.firstChild.nodeValue = "";
       $("$").nextElementSibling.firstChild.nodeValue = "";
    } else if ($("$").checked) {
		
       $("$").nextElementSibling.firstChild.nodeValue = "Wrong!!";
       $("Servants").nextElementSibling.firstChild.nodeValue = "";
       $("SQ").nextElementSibling.firstChild.nodeValue = "";
       $("NaCl").nextElementSibling.firstChild.nodeValue = "";
    } else if ($("NaCl").checked) {
		
       $("NaCl").nextElementSibling.firstChild.nodeValue = "Wrong!!";
       $("$").nextElementSibling.firstChild.nodeValue = "";
       $("Servants").nextElementSibling.firstChild.nodeValue = "";
       $("SQ").nextElementSibling.firstChild.nodeValue = "";
    }

	if ($("Buster").checked) {
		
       $("Buster").nextElementSibling.firstChild.nodeValue = "Correct!!";
    }else{
      $("Buster").nextElementSibling.firstChild.nodeValue = "";
    }
    if ($("Arts").checked) {
		
       $("Arts").nextElementSibling.firstChild.nodeValue = "Correct!!";
    } else{
      $("Arts").nextElementSibling.firstChild.nodeValue = "";
    }
    if ($("Quick").checked){
		
       $("Quick").nextElementSibling.firstChild.nodeValue = "Correct!!";
    } else{
      $("Quick").nextElementSibling.firstChild.nodeValue = "";
    }
    if ($("Nuke").checked) {
		
       $("Nuke").nextElementSibling.firstChild.nodeValue = "Wrong!!";
    } else{
      $("Nuke").nextElementSibling.firstChild.nodeValue = "";
    }

	if(question3 == "yes"){
		$("answer3").nextElementSibling.firstChild.nodeValue = "Download the app from the Apple store or the Play store.";
	} else if(question3 == "no"){
		$("answer3").nextElementSibling.firstChild.nodeValue = "A shame.";
	} else{
		$("answer3").nextElementSibling.firstChild.nodeValue = 'Please answer "yes" or "no".';
	}
    // submit the form if all entries are valid
    // otherwise, display an error message
   
    	
    
};

window.onload = function() {
    $("checkAnswer").onclick = checkAnswer;
    
};
