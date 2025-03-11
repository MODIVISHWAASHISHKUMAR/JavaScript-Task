import React from 'react'
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
        num1: "",
        num2: "",
        result: null,
        operation: "",
        };
    }
    operations = () => {
        const { num1, num2, operation } = this.state;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2); 
        if (isNaN(number1) || isNaN(number2)) {
            this.setState({ result: "Please enter valid numbers." });
            return;
          }
          let res;
          const calc = {
            add: number1 + number2,
            subtract: number1 - number2,
            multiply: number1 * number2,
            divide: number2 !== 0 ? number1 / number2 : "Cannot divide by zero",
          };
          res=calc[operation];
          this.setState({ result: res });
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleOperationClick = (operation) => {
    this.setState({ operation }, this.operations);
  };
  render(){
        const { num1, num2, result } = this.state;
        return(
            <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Mini Calculator</h1>
            <div>
            <input type="number"  name="num1" value={num1} onChange={this.handleInputChange}/>
            <input type="number"  name="num2" value={num2} onChange={this.handleInputChange}/>
            </div>
            <div>
            <button onClick={() => this.handleOperationClick("add")}>Add</button>
            <button onClick={() => this.handleOperationClick("subtract")}>Subtraction</button> 
            <button onClick={() => this.handleOperationClick("multiply")}>Multiplication</button>
            <button onClick={() => this.handleOperationClick("divide")}>Division</button>
            </div>
            <div style={{ marginTop: "20px" }}>
            <h3>Result: {result !== null ? result :"No result yet"}</h3>
            </div>
            </div>
            );
    }
}
export default Calculator;