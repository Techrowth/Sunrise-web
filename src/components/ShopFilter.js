import React, { useState } from 'react';
import { Slider, Button } from "@mui/material";

export default function ShopFilter() {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [isSubmenuVisible2, setIsSubmenuVisible2] = useState(false);
  const [priceRange, setPriceRange] = useState([3000, 15000]); // Initial price range


  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handler function to toggle the selected options
  const handleOptionChange = (value) => {
    if (selectedOptions.includes(value)) {
      // If the option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, value]);
    }
  };



  const formatPrice = (value) => {
    return `₹${value}`;
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFilterClick = () => {
    // Perform your filtering logic with the price range
    console.log("Filtering with price range:", formatPrice(priceRange[0]), formatPrice(priceRange[1]));
  };

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const toggleSubmenu2 = () => {
    setIsSubmenuVisible2(!isSubmenuVisible2);
  };
  return (
    <div>
      <div className="single__widget widget__bg">
        <h2
          style={{ border: 'none', padding: '0px', marginBottom: '10px', fontSize: '16px' }}
          className={`widget__title h4 clickable d-flex align-items-center ${isSubmenuVisible ? 'open' : ''}`}
          onClick={toggleSubmenu}
        >
         Shop By Categories
          <span className="ms-auto">
          {isSubmenuVisible ? (
        <i className="fas fa-minus small-arrow"></i>
      ) : (
        <i className="fas fa-plus small-arrow"></i>
      )}

          </span>
        </h2>
        {isSubmenuVisible && (
          <>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox1" /> */}
              <label className="form-check-label" htmlFor="Checkbox1">Gold Necklace</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox2" /> */}
              <label className="form-check-label" htmlFor="Checkbox2">Earrings</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox3" /> */}
              <label className="form-check-label" htmlFor="Checkbox3">Rings</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox4" /> */}
              <label className="form-check-label" htmlFor="Checkbox4">Nosepin</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox5" /> */}
              <label className="form-check-label" htmlFor="Checkbox5">Toe Ring</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox6" /> */}
              <label className="form-check-label" htmlFor="Checkbox6">Bracelets</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox7" /> */}
              <label className="form-check-label" htmlFor="Checkbox7">Mangalsutra</label>
            </div>
          </>
        )}
      </div>

      <div className="single__widget widget__bg">
        <h2
          style={{ border: 'none', padding: '0px', marginBottom: '10px', fontSize: '16px' }}
          className={`widget__title h4 clickable d-flex align-items-center`}
        
        >
Availability
          
        </h2>

        <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="Checkbox1" />
              <label className="form-check-label" htmlFor="Checkbox1">Gold Necklace</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="Checkbox2" />
              <label className="form-check-label" htmlFor="Checkbox2">Earrings</label>
            </div>
        </div>

      <div className="single__widget widget__bg">
        <h2
          style={{ border: 'none', padding: '0px', marginBottom: '10px', fontSize: '16px', fontWeight: '500 !important' }}
        >
          Price
        </h2>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={100}
            max={20000}
            sx={{
              "& .MuiSlider-thumb": {
                backgroundColor: "#FFA800", // Change the color of the thumb here
              },
              "& .MuiSlider-track": {
                backgroundColor: "#D9D9D9 !important", // Change the background color of the track here
                border: "2px solid #FFA800", // Change the border of the thumb here
                boxShadow: "none", // Change the box shadow of the thumb here

              },
            }}

          />
          {/* <div className='text-center mt-3'>
            <button className="price__filter--btn primary__btn" type="submit">Filter</button>
          </div> */}
        </div>
      </div>


      <div className="single__widget widget__bg">
        <h2
          style={{ border: 'none', padding: '0px', marginBottom: '10px', fontSize: '16px' }}
          className={`widget__title h4 clickable d-flex align-items-center ${isSubmenuVisible2 ? 'open' : ''}`}
          onClick={toggleSubmenu2}
        >
         Shop By Categories
          <span className="ms-auto">
          {isSubmenuVisible2 ? (
        <i className="fas fa-minus small-arrow"></i>
      ) : (
        <i className="fas fa-plus small-arrow"></i>
      )}

          </span>
        </h2>
        {isSubmenuVisible2 && (
          <>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox1" /> */}
              <label className="form-check-label" htmlFor="Checkbox1">Gold Necklace</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox2" /> */}
              <label className="form-check-label" htmlFor="Checkbox2">Earrings</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox3" /> */}
              <label className="form-check-label" htmlFor="Checkbox3">Rings</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox4" /> */}
              <label className="form-check-label" htmlFor="Checkbox4">Nosepin</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox5" /> */}
              <label className="form-check-label" htmlFor="Checkbox5">Toe Ring</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox6" /> */}
              <label className="form-check-label" htmlFor="Checkbox6">Bracelets</label>
            </div>
            <div className=" mb-2">
              {/* <input className="form-check-input" type="checkbox" id="Checkbox7" /> */}
              <label className="form-check-label" htmlFor="Checkbox7">Mangalsutra</label>
            </div>
          </>
        )}
      </div>


      <div className="single__widget widget__bg">
        <h2
          style={{ border: 'none', padding: '0px', marginBottom: '10px', fontSize: '16px' }}
          className={`widget__title h4 clickable d-flex align-items-center`}
        
        >
Availability
          
        </h2>

        <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="Checkbox1" />
              <label className="form-check-label" htmlFor="Checkbox1">S (102)</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="Checkbox2" />
              <label className="form-check-label" htmlFor="Checkbox2">M (400)</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="Checkbox2" />
              <label className="form-check-label" htmlFor="Checkbox2">L (500)</label>
            </div>
        </div>



    </div>
  );
}
