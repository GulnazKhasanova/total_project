import { Component } from '../core/Component';
import { ListItem } from './ListItem';


export class List extends Component {
  setup(props) {
   
    const heading = document.createElement('h1');
    heading.textContent = `${props.title}`;   
       
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';
    this.$rootElement.append(heading);
    props.donates.forEach(element => {
      this.addItem(element);
      
    });
  }
  addItem(item) {      
    const listItem = new ListItem({item, deleteItem: this.deleteItem.bind(this)});
    this.$rootElement.append(listItem.$rootElement)
  }
  deleteItem(el){
    console.log(el)
    return this.props.remove(el)
  }
  
}