import { Component } from '../core/Component';
import { DemoButton } from './Demo/DemoButton';

export class ListItem extends Component {
  setup(props) {
    console.log(props.item)
    const removeButton= new DemoButton({ text: 'Удалить', className: 'delete-button', onClick: this.removeItem.bind(this) });  
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerHTML = `${props.item.date}- $${props.item.amt}`;
    this.$rootElement.append(removeButton.$rootElement)
  }
  removeItem(event){
   const item = event.target.closest('div');
   return this.props.deleteItem(item)
  }
}
