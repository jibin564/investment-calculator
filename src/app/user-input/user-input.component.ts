import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment:number,
     annualInvestment:number,
      expectedReturn:number,
       duration:number}>();
  enteredInitialinvestment = '0';
  enteredannualinvestment = '0';
  enteredexpectedreturn = '5';
  enteredinvestmentduration = '10';
onSubmit() {
  // Handle form submission logic here
  console.log('Form submitted');
  console.log('Initial Investment:', this.enteredInitialinvestment);
  console.log('Annual Investment:', this.enteredannualinvestment);
  console.log('Expected Return:', this.enteredexpectedreturn);
  console.log('Investment Duration:', this.enteredinvestmentduration);
  this.calculate.emit({
    initialInvestment: +this.enteredInitialinvestment,
    annualInvestment: +this.enteredannualinvestment,
    expectedReturn: +this.enteredexpectedreturn,
    duration: +this.enteredinvestmentduration
  });
}
}
