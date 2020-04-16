import React from "react";
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import {Shop_data} from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Shop_data,
    };
  }
  render() {
    const {collections}= this.state;
    return (
      <div className='shop-page'>
        { collections.map(({id,...otherCollectionProps})=>(
          <CollectionPreview  Key={id} {...otherCollectionProps}/>
        ))}
      </div>
    );
  }
}
export default ShopPage;