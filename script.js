class Calculate {
  constructor(previousText,currentText){
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear()
  }

  // clear the previous text and current text
  clear(){
    this.currentTextInput = ''
    this.previousTextInput = ''
    this.operator = undefined
  }
  
  // Append new clicked number
  appendNumber(number){
    if(number=== '.' && this.currentTextInput.includes('.')) return
    
    this.currentTextInput = this.currentTextInput.toString() + number.toString();
  }
  
  // choose operator
  clickedOperator(operator){
    console.log(operator);
    if(this.previousTextInput !== ''){
      this.compute()
    }
    this.operator = operator;
    this.previousTextInput = this.currentTextInput;
    this.currentTextInput = '';
    // this.compute()
  }
  
  // Calculate everything
  compute(){
    let result
    const oldNumber = parseFloat(this.previousTextInput)
    const newNumber = parseFloat(this.currentTextInput)
    if(isNaN(oldNumber) || isNaN(newNumber)) return
    if(this.operator=== 'addition'){
      result = oldNumber + newNumber
    } else if(this.operator=== 'subtract'){
      result = oldNumber - newNumber
    } else if(this.operator=== 'divide'){
      result = oldNumber / newNumber
    } else if(this.operator=== 'multiply'){
      result = oldNumber * newNumber
    }
    console.log(result);
    this.currentTextInput = result
    this.operator = undefined
    this.previousTextInput = ''
    // return result;
  }
  
  // Display figure
  updateDisplay(){
    this.currentText.innerText = this.currentTextInput
    this.previousText.innerText = this.previousTextInput

  }


}

const currentText = document.getElementById('current-text');
const previousText = document.getElementById('previous-text')
const numberBtn = document.querySelectorAll('.num-btn');
const operatorBtn = document.querySelectorAll('.operator-btn')
const equalBtn = document.getElementById('equal-btn')
const clearBtn = document.getElementById('clear')

const calculator = new Calculate (previousText, currentText);


for (const button of numberBtn){
  button.addEventListener('click',()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
}

for (const operator of operatorBtn){
  operator.addEventListener('click',()=>{
    console.log(operator.id)
    calculator.clickedOperator(operator.id)
    calculator.updateDisplay()
  })
}

equalBtn.addEventListener('click', ()=>{
  calculator.compute();
  calculator.updateDisplay();
})

clearBtn.addEventListener('click', ()=>{
  calculator.clear();
  calculator.updateDisplay();
})
