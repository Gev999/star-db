import React, {Component} from 'react';
import Spinner from '../spinner'
import ItemList from '../item-list';
import ErrorIndicator from '../error-indicator';



const withList = (getData, title)=> {
    return class extends Component {
        
        state = {
            itemList: null,
            error: false,
          };
        
          componentDidMount() {
            getData()
              .then((itemList) => {
                this.setState({
                  itemList
                })
              })
              .catch(()=>{
                this.setState({error : true})
              });;
          }

          render() {
            const { itemList, error } = this.state;

            if (error) return <ErrorIndicator />

            if (!itemList) {
              return (
                <div className='card'>
                  <Spinner />
                </div>
              )}
              
            return <ItemList 
                itemList = {itemList}
                title = {title}
                history = {this.props.history}
                onItemSelected = {this.props.onItemSelected} />
          }
    }
}

export {withList}