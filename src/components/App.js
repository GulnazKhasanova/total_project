import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';


export class App extends Component {
  setup(props) {
    
    this.state = { 
      counter: 0,
      donates: this.newItem ,
      el: {} 
    };
    this.newItem = [{date: '19/01/2024, 19:46:30', amt: '1'},
    {date: '19/01/2024, 19:46:31', amt: '2'},
    {date: '19/01/2024, 19:46:31', amt: '3'},
    {date: '19/01/2024, 19:46:31', amt: '4'},
    {date: '19/01/2024, 19:46:32', amt: '5'}];
    this.sum = this.sum();
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    const $heading = document.createElement('h1');
    $heading.className = 'total-amount';
    $heading.textContent = `Итого: $${this.sum}`;
    this.$rootElement.append($heading)
    
    // ...
    
    const donateForm = new Form({title: 'Введите сумму в $', onItemCreate:  this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List({title: 'Список донатов', donates: this.newItem, remove: this.remove.bind(this)});
    this.$rootElement.appendChild(donateList.$rootElement);
      
  }
  
  onItemCreate(amount) {     
    if(amount) {         
      const listItem = new ListItem(amount);
      this.newItem.push(amount);      
      const list = this.$rootElement.querySelector('.donates-container');
      list.appendChild(listItem.$rootElement);
     }   
  }

  remove(donate) {
    const List = this.$rootElement.querySelector('.donates-container')
    const items = List.querySelectorAll('.donate-item')
    const [ newitems ] = Array.from(items).filter((el) => {
      return el === donate
    })
    const str = donate.textContent.substr(0, 17)
    this.newItem = this.newItem.filter((el) => !(el.date.includes(str)))
    newitems.remove();
  }
  sum() {   
    let total = 0;
    this.newItem.forEach(element => {
      console.log(element.amt)
      total += Number(element.amt)
    });
    console.log(total)
    return total;
  }
  
}
