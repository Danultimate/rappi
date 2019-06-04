import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  set_sublevel,
  set_availability,
  set_prices,
  set_stocks,
  set_order,
} from './store/actions';

import Filters from './filters/Filters';
import Menu from './menu/Menu';
import Products from './products/Products';
import logo from './logo.png';

import { gatherSublevelsIds } from './utils/collections';

class App extends React.Component {

  handleChangeLevel(item) {
    const ids = gatherSublevelsIds(item);
    this.props.dispatch(set_sublevel(ids));
  }

  handleChangeAvailability(available) {
    this.props.dispatch(set_availability(available));
  }

  handleChangePrice(minPrice, maxPrice) {
    this.props.dispatch(set_prices(minPrice, maxPrice));
  }

  handleChangeStock(minStock, maxStock) {
    this.props.dispatch(set_stocks(minStock, maxStock));
  }

  handleChangeOrder(order) {
    this.props.dispatch(set_order(order));
  }

  render() {
    return (
      <div className="Rappi container">
        <img src={logo} alt="Logo" />
        <div className="container">
          <Filters
            filters={this.props.filters}
            handleChangeAvailability={(available) =>
              this.handleChangeAvailability(available)
            }
            handleChangePrice={(min, max) => this.handleChangePrice(min, max)}
            handleChangeStock={(min, max) => this.handleChangeStock(min, max)}
          />

          <div className="row">
            <div className="col-md-4">
              <Menu
                categories={this.props.categories}
                handleChange={(level) => this.handleChangeLevel(level)}
              />
            </div>
            <div className="col-md">
              <Products
                categories={this.props.categories}
                products={this.props.products}
                filters={this.props.filters}
                priority={this.props.priority}
                handleChange={(order) => this.handleChangeOrder(order)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.reducer.categories,
    products: state.reducer.products,
    filters: state.filterReducer.filters,
    priority: state.orderReducer.priority
  };
}

export default connect(mapStateToProps)(App);
