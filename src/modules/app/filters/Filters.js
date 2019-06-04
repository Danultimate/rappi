import React from 'react';
import './Filters.css';

const changeAvailability = (event, handleChange) => {
  handleChange(event.target.checked);
}

const changePrice = (min, max, handleChange) => {
  handleChange(
    min ? parseInt(min) : min,
    max ? parseInt(max) : max
  );
}

const Filters = (
  {
    filters,
    handleChangeAvailability,
    handleChangePrice,
    handleChangeStock,
  }) => (
  <form className="row">
    <div className="form-group form-check col-md">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        onClick={(e) => changeAvailability(e, handleChangeAvailability)}
        defaultChecked
      />
      <label className="form-check-label">Just available products</label>
    </div>

    <div className="col-md">
      <input
        className="form-control"
        type="number"
        placeholder="Min price"
        onChange={(e) => changePrice(e.target.value, filters.maxPrice, handleChangePrice)}
      />
      <input
        className="form-control"
        type="number"
        placeholder="Max price"
        onChange={(e) => changePrice(filters.minPrice, e.target.value, handleChangePrice)}
      />
    </div>

    <div className="col-md">
      <input
        className="form-control"
        type="number"
        placeholder="Min stock"
        onChange={(e) => changePrice(e.target.value, null, handleChangeStock)}
      />
    </div>
  </form>

);

export default Filters;