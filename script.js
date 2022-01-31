class Calculate {
  constructor(previousText,currentText){
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear()
  }

  // clear the previous text and current text
  clear(){
    this.currentText = ''
    this.previousText = ''
    this.operator = undefined
  }
  
  // Append new clicked number
  appendNumber(number){
  
  }
  
  // choose operator
  clickedOperator(operator){
  
  }
  
  // Calculate everything
  compute(){
  
  }
  
  // Display figure
  updateDisplay(){
    this.currentText.innerText= this.currentTextInput
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


