/**
 * @Author: Your name
 * @Date:   2022-06-26 00:03:32
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-27 23:56:29
 */
// *** Write your code here***

function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
  }

  // The function clearNum() to clear on the values in the display
function clearNum() {
  if (form.displayResult.value != '') {     
      form.displayResult.value = '';
  }
}

// The function deleteNum() to delete a single value
function delNum() {
  form.displayResult.value = form.displayResult.value.substr(0, form.displayResult.value.length - 1);
}
