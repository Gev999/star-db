import React, {Component} from 'react';

const withPage = (ItemList, ItemDetails)=> {
    return class extends Component {

        render() {
            return (
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <br /><br />
                        <ItemDetails 
                            itemId = {this.props.match.params.id}
                            show />
                    </div>
                </div>
            );
        }
    }
}

export {withPage}