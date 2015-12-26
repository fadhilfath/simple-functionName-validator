
// check whether the input is a valid function

function test_function() {
  // first get the element from the text input
  var user_function = document.getElementById("userFunction").value;
  // get the first character of the string
  var first_letter = user_function[0];
  // chech if the value ofof function has empty space
  var expression = /\s+/g;
  var digit_expression = /\d+/g;
  if(user_function.match(expression) || first_letter.match(digit_expression)){
    document.getElementById('result').innerHTML = "Invalid function name";
  }else {
    document.getElementById('result').innerHTML = "Valid function name";
  }
  console.log("userfunction",user_function);
  //console.log("first letter",user_function[0]);

  // return some of the recommendation for user
  var wordRecommend = user_function.replace(digit_expression,"");
  // creating a loop to go through each character of the wordRecommend
  var newWord = user_function;
  for(var i = 0;i < newWord.length;i++){
    if(newWord[i] === " "){
      newWord.replace(" ",newWord[i + 1].toUpperCase());
    }
    console.log(newWord[i]);
  }
  console.log("new word",newWord);
  var wordRecommend2 = user_function.replace(expression,"");
  document.getElementById('recommend').innerHTML = wordRecommend;
  document.getElementById('recommend').innerHTML = wordRecommend2;

}

// return the result if it is true or false
