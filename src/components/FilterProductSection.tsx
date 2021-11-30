import React, { useState, useEffect } from "react";
import { SetFilteredProduct } from "actions/ProductAction";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "hooks";
import { removeSpace } from "lib/helpers";
import { productTypes } from "lib/seed";
import { capitalizeFirstLetter } from "lib/helpers";

function FilterProductSection() {
  const dispatch = useDispatch();
  const { filters } = useTypedSelector((state) => state.products);
  const [filter, setFilter] = useState<productTypes[]>(filters);
  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    const position = (e.target as HTMLInputElement).value;
    if (position === "all") return setFilter(filters);
    const filteredFilter: productTypes[] = filters.filter(
      (item: productTypes) => {
        if (item.type === position) return item;
        return {};
      }
    );
    return setFilter(filteredFilter);
  };
  useEffect(() => {
    dispatch(SetFilteredProduct(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return (
    <div className="section-header">
      <div className="filter-product">
        <>
          <div>
            <input
              className="filter-product-input"
              type="radio"
              name={`type-filter`}
              id={`id-filter-all`}
              value="all"
              onChange={handleChange}
              defaultChecked
            />
            <label className="filter-product-label" htmlFor={`id-filter-all`}>
              All
            </label>
          </div>
          {filters.map((item: productTypes, index: number) => {
            return (
              <div key={index}>
                <input
                  className="filter-product-input"
                  type="radio"
                  name={`type-filter`}
                  id={`id-filter-${removeSpace(item.type)}`}
                  onChange={handleChange}
                  value={removeSpace(item.type)}
                />
                <label
                  className="filter-product-label"
                  htmlFor={`id-filter-${removeSpace(item.type)}`}
                >
                  {capitalizeFirstLetter(item.type)}
                </label>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default FilterProductSection;
