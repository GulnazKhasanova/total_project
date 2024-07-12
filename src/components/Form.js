import { Component } from '../core/Component';
import { DemoButton } from './Demo/DemoButton';


export class Form extends Component {
  
  setup(props) {
    
    this.value;
    this.curentDate;
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const heading = document.createElement('label');
    heading.className = 'donate-form__input-label'
    heading.textContent = `${props.title}`;  

    const incrementButton= new DemoButton({ text: 'Задонатить', className: 'donate-form__submit-button',  onClick: this.handleSubmit.bind(this) });
        
    const donateInput = document.createElement('input');
    donateInput.className = 'donate-form__donate-input';
    donateInput.placeholder = 'Введите число';

    donateInput.addEventListener('change', this.handleInput.bind(this));

    this.$rootElement.append(heading, donateInput, incrementButton.$rootElement);
    
  }

  validate = (data)=> !isNaN(Number(data)) ? true : false; 

  handleInput(event) {
    this.value = (event.target.value).trim();

   if(this.$rootElement.querySelector('span')) this.$rootElement.querySelector('span').remove();
    if(this.validate(this.value)){
      let date = new Date();
      let dd = date.getDay();
      let mm = date.getMonth();
      let yy = date.getFullYear();
      let hh = date.getHours();
      let nn = date.getMinutes();
      let ss = date.getSeconds();
      this.curentDate = `${dd}/${mm}/${yy}, ${hh}:${nn}:${ss}`      
    } else {
      const errorSpan = document.createElement('span');
      errorSpan.classList = 'error';
      errorSpan.textContent = 'Вы ввели недопустимые символы';
      this.$rootElement.prepend(errorSpan);
    }  
    
  } 

  handleSubmit(event) {
    if(event.target.className === 'donate-form__submit-button') {
      event.preventDefault();
      //console.log({ date: this.curentDate, amt: this.value })
      const item =  { date: this.curentDate, amt: this.value };
      this.props.onItemCreate({item});           
    }
  }  
}
