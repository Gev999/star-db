import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PageNotFound from '../page-not-found'

const withDetails = (getItem, ItemDetails) => {
    return class extends Component {

        state = {
            item: null,
            loading: true,
            error: false,
            show: false,
        };

        static defaultProps = {
            show: false,
        }

        componentDidMount() {
            if (this.props.show) {
                this.setState({show: true})
            }
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.setState({loading: true})
                this.updateItem();
            }
        }

        updateItem() {
            const { itemId } = this.props;
            if (!itemId) {
                this.setState({show:true})
            return;
            }

            getItem(itemId)
            .then((item) => {
                this.setState({ item, loading: false, show:false });
            })
            .catch(()=>{
                this.setState({error : true})
            });
        }


        render() {
            const {itemId} = this.props;
            const isNumber = !isNaN(parseInt(itemId)) && isFinite(itemId);

            if (!isNumber && itemId!==undefined) return <PageNotFound /> 

            if (this.state.error) 
                return <ErrorIndicator />

            if (this.state.show) 
                return (
                    <div className="item-details card">
                        <span className='center-messg'>Select planet from list</span>
                    </div> 
                );

            if (this.state.loading) {
                return (
                <div className="item-details card">
                    <span className='center-messg'><Spinner /></span>
                </div>
            );}
            return <ItemDetails item = {this.state.item}/>
            }

    }
}

export {withDetails}