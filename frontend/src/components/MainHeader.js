import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/img/logo/nav-log.png';
import { Button, Menu, MenuItem } from '@mui/material';
import { IoMdArrowDropdown } from "react-icons/io";
export default function MainHeader() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopSubMenuOpen, setIsShopSubMenuOpen] = useState(false);
  const [isGoldSubMenuOpen, setIsGoldSubMenuOpen] = useState(false);
  const [isMenSubMenuOpen, setIsMenSubMenuOpen] = useState(false);
  const [isWomenSubMenuOpen, setIsWomenSubMenuOpen] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  const openMenu = () => {
    console.log('Opening menu');
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    console.log('Closing menu');
    setIsMenuOpen(false);
  };

  const toggleShopSubMenu = () => {
    setIsShopSubMenuOpen(!isShopSubMenuOpen);
  };

  const toggleGoldSubMenu = () => {
    setIsGoldSubMenuOpen(!isGoldSubMenuOpen);
  };


  const toggleMenSubMenu = () => {
    setIsMenSubMenuOpen(!isMenSubMenuOpen);
  };

  const toggleWomenSubMenu = () => {
    setIsWomenSubMenuOpen(!isWomenSubMenuOpen);
  };
  return (


    <div>
      <div className="main__header header__sticky" style={{ backgroundColor: '#FFF' }}>
        <div className="container-fluid">
          <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
            <div className={`offcanvas__header--menu__open ${isMenuOpen ? 'active' : ''}`}>
              <Link className="offcanvas__header--menu__open--btn" onClick={isMenuOpen ? closeMenu : openMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M80 160h352M80 256h352M80 352h352"
                  />
                </svg>
                <span className="visually-hidden">Menu Open</span>
              </Link>
            </div>
            <div className="main__logo">
              <h1 className="main__logo--title">
                <Link to='/' className="main__logo--link" >
                  <img className="main__logo--img" src={logoImage} alt="logo-img" />
                </Link>
              </h1>
            </div>
            <div className="header__search--widget header__sticky--none d-none d-lg-block">
              <div className="row">

                <div className="col">
                  <form className="d-flex header__search--form" action="#">
                    <div className="header__search--box">
                      <label>
                        <input className="header__search--input" placeholder="Search" type="text" />
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="header__account header__sticky--none">
              <ul className="d-flex">

                <li className="header__account--items ">
                  <Link className="header__account--btn" to="/wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.51" height="23.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                    <span className="header__account--btn__text">WISHLIST</span>
                    {/* <span className="items__count wishlist">02</span>  */}
                  </Link>
                </li>

                <li className="header__account--items">
                  <Link className="header__account--btn" to="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                    <span className="header__account--btn__text">ACCOUNT</span>
                  </Link>
                </li>

                <li className="header__account--items">
                  <Link className="header__account--btn minicart__open--btn" to="/cart" data-offcanvas>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 14.706 13.534">
                      <g transform="translate(0 0)">
                        <g>
                          <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                          <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                          <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                        </g>
                      </g>
                    </svg>
                    <span className="header__account--btn__text">CART</span>
                    {/* <span className="items__count">02</span>  */}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__menu d-none header__sticky--block d-lg-block">
              <nav className="header__menu--navigation">
                <ul className="d-flex">
                  <ul className="d-flex">
                    <li className="header__menu--items style2">
                      <Link className="header__menu--link" to="/">Home
                      </Link>
                    </li>
                    <li className="header__menu--items mega__menu--items style2">
                      <Link className="header__menu--link" to="/shop">Shop
                        <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width={12} height="7.41" viewBox="0 0 12 7.41">
                          <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7" />
                        </svg>
                      </Link>
                      <ul className="header__mega--menu d-flex">
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">Men</span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Round Neck T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">V-Cut Neck T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Full Sleev T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Oversized T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Vest</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Customized Works</Link></li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">Women</span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Round Neck T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">V-Cut Neck T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Full Sleev T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Oversized T-shirt</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Vest</Link></li>
                            <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shop">Customized Works</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items style2">
                      <Link className="header__menu--link" to="/about-us">About US </Link>
                    </li>
                    <li className="header__menu--items style2">
                      <Link className="header__menu--link " to="/contact-us">Contact </Link>
                    </li>
                  </ul>
                </ul></nav>
            </div>
            <div className="header__account header__account2 header__sticky--block">
              <ul className="d-flex">
                <li className="header__account--items header__account2--items  header__account--search__items d-none d-lg-block">
                  <Link className="header__account--btn search__open--btn" to="javascript:void(0)" data-offcanvas>
                    <svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                    <span className="visually-hidden">Search</span>
                  </Link>
                </li>
                <li className="header__account--items header__account2--items">
                  <Link className="header__account--btn" to="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                    <span className="visually-hidden">My Account</span>
                  </Link>
                </li>
                <li className="header__account--items header__account2--items d-none d-lg-block">
                  <Link className="header__account--btn" to="/wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.51" height="23.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                    {/* <span className="items__count  wishlist style2">02</span>  */}
                  </Link>
                </li>
                <li className="header__account--items header__account2--items">
                  <Link className="header__account--btn minicart__open--btn" to="/cart" data-offcanvas>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 14.706 13.534">
                      <g transform="translate(0 0)">
                        <g>
                          <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                          <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                          <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                        </g>
                      </g>
                    </svg>
                    {/* <span className="items__count style2">02</span>  */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col d-flex justify-content-center mt-4" style={{ marginBottom: '-20px' }}>
            <div className='d-none d-lg-block'>
              <nav className="header__menu--navigation">
                <ul className="d-flex">
                  <li className="header__menu--items style2">
                    <Link to='/' className="header__menu--link" >Home
                    </Link>
                  </li>
                  <li className="header__menu--items style2">
                    <Link to='/about-us' className="header__menu--link" >About Us
                    </Link>
                  </li>



                  <li className="header__menu--items style2">
                    <Link className="header__menu--link" onClick={handleClick1}>Silver Jewellry <IoMdArrowDropdown /></Link>
                    <Menu
                      id="menu1"
                      anchorEl={anchorEl1}
                      keepMounted
                      open={Boolean(anchorEl1)}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: '300px', // Set maximum height for the menu
                          width: '200px', // Set width for the menu
                          display: 'grid',
                          gridTemplateColumns: 'auto auto', // Display menu items in two columns
                        },
                      }}
                    >
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }} > Anklet</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Bangles</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Bracelets</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Broaches</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Earrings</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Finger Rings</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Kadas</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Necklace</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Neck Chain</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Nosepins</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Pendant</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Pendant Sets</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Rakhi</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Silver Gifts</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Toe Rings</MenuItem>
                    </Menu>
                  </li>

                  <li className="header__menu--items style2">
                    <Link className="header__menu--link" to="/about-us">Men’s Silver Collection</Link>
                  </li>


                  <li className="header__menu--items style2">
                    <Link className="header__menu--link" onClick={handleClick2}>Gold Polished Silver Jewellry <IoMdArrowDropdown /> </Link>
                    <Menu
                      id="menu2"
                      anchorEl={anchorEl2}
                      keepMounted
                      open={Boolean(anchorEl2)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Bangles</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Chains</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Earrings</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Necklace</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Pendant Sets</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Pendants</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Tikka</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop"style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Wedding Accessories</MenuItem>
                      <MenuItem onClick={handleClose} component={Link} to="/shop" style={{ fontSize: "15px", fontFamily: "var(--font-jost)", color: "var(--text-gray-color)" }}>Nosepins</MenuItem>


                    </Menu>
                  </li>

                  <li className="header__menu--items style2">
                    <Link className="header__menu--link " to="/contact-us">Happy Customers</Link>
                  </li>

                  <li className="header__menu--items style2">
                    <Link className="header__menu--link " to="/contact-us">Blog </Link>
                  </li>
                  <li className="header__menu--items style2">
                    <Link className="header__menu--link " to="/contact-us">Contact </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>


      {/* Start Offcanvas header menu */}
      {isMenuOpen && (
        <div className="offcanvas__header open">
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <Link className="offcanvas__logo_link" to="/">
                <img src={logoImage} alt="Grocee Logo" width={158} height={36} />
              </Link>
              <button className="offcanvas__close--btn" onClick={closeMenu}>close</button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/">
                    Home
                  </Link>
                </li>



                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/">
                    About Us
                  </Link>
                </li>


                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/shop" onClick={toggleShopSubMenu}>
                    Silver Jewellry
                    <button className="offcanvas__sub_menu_toggle" onClick={toggleShopSubMenu} />
                  </Link>

                  <ul className="offcanvas__sub_menu" style={{ display: isShopSubMenuOpen ? 'block' : 'none' }}>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Anklet</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Bangles</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Bracelets</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Broaches</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Earrings</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Finger Rings</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Kadas</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Necklace</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Neck Chain</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Nosepins</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Pendant</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Pendant Sets</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Rakhi</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Silver Gifts</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Toe Rings</Link></li>
                  </ul>
                </li>


                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/">
                    Men’s Silver Collection
                  </Link>
                </li>


                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="#" onClick={toggleGoldSubMenu}>
                    Gold Polished Silver Jewellry
                    <button className="offcanvas__sub_menu_toggle" onClick={toggleGoldSubMenu} />
                  </Link>

                  <ul className="offcanvas__sub_menu" style={{ display: isGoldSubMenuOpen ? 'block' : 'none' }}>

                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Bangles</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Chains</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Earrings</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Necklace</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Pendant Sets</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Pendant</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Tikka</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Wedding Accessories</Link></li>
                    <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Nosepins</Link></li>
                  </ul>
                </li>


                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/shop">
                    Happy Customers
                  </Link>
                </li>


                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/">
                    Blog
                  </Link>
                </li>


                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" to="/">
                    Contact
                  </Link>
                </li>




              </ul>
              <div className="offcanvas__account--items">
                <Link className="offcanvas__account--items__btn d-flex align-items-center" to="/login">
                  <span className="offcanvas__account--items__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512">
                      <path
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      />
                      <path
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                      />
                    </svg>
                  </span>
                  <span className="offcanvas__account--items__label">Login / Register</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* End Offcanvas header menu */}



      {/* Start offCanvas minicart */}
      <div className="offCanvas__minicart">
        <div className="minicart__header ">
          <div className="minicart__header--top d-flex justify-content-between align-items-center">
            <h2 className="minicart__title h3"> Shopping Cart</h2>
            <button className="minicart__close--btn" aria-label="minicart close button" data-offcanvas>
              <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
            </button>
          </div>
          <p className="minicart__header--desc">Clothing and fashion products are limited</p>
        </div>
        <div className="minicart__product">
          <div className="minicart__product--items d-flex">
            <div className="minicart__thumb">
              <Link to="/product-details"><img src="assets/img/product/product1.png" alt="prduct-img" /></Link>
            </div>
            <div className="minicart__text">
              <h3 className="minicart__subtitle h4"><Link to="/product-details">Oversize Cotton Dress</Link></h3>
              <span className="color__variant"><b>Color:</b> Beige</span>
              <div className="minicart__price">
                <span className="current__price">₹125.00</span>
                <span className="old__price">₹140.00</span>
              </div>
              <div className="minicart__text--footer d-flex align-items-center">
                <div className="quantity__box minicart__quantity">
                  <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                  <label>
                    <input type="number" className="quantity__number" defaultValue={1} data-counter />
                  </label>
                  <button type="button" className="quantity__value increase" value="Increase Value">+</button>
                </div>
                <button className="minicart__product--remove">Remove</button>
              </div>
            </div>
          </div>
          <div className="minicart__product--items d-flex">
            <div className="minicart__thumb">
              <Link to="/product-details"><img src="assets/img/product/product2.png" alt="prduct-img" /></Link>
            </div>
            <div className="minicart__text">
              <h3 className="minicart__subtitle h4"><Link to="/product-details">Boxy Denim Jacket</Link></h3>
              <span className="color__variant"><b>Color:</b> Green</span>
              <div className="minicart__price">
                <span className="current__price">₹115.00</span>
                <span className="old__price">₹130.00</span>
              </div>
              <div className="minicart__text--footer d-flex align-items-center">
                <div className="quantity__box minicart__quantity">
                  <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                  <label>
                    <input type="number" className="quantity__number" defaultValue={1} data-counter />
                  </label>
                  <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                </div>
                <button className="minicart__product--remove">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="minicart__amount">
          <div className="minicart__amount_list d-flex justify-content-between">
            <span>Sub Total:</span>
            <span><b>₹240.00</b></span>
          </div>
          <div className="minicart__amount_list d-flex justify-content-between">
            <span>Total:</span>
            <span><b>₹240.00</b></span>
          </div>
        </div>
        <div className="minicart__conditions text-center">
          <input className="minicart__conditions--input" id="accept" type="checkbox" />
          <label className="minicart__conditions--label" htmlFor="accept">I agree with the <Link className="minicart__conditions--link" >Privacy and Policy</Link></label>
        </div>
        <div className="minicart__button d-flex justify-content-center">
          <Link className="primary__btn minicart__button--link" to="/cart">View cart</Link>
          <Link className="primary__btn minicart__button--link" to="/checkout">Checkout</Link>
        </div>
      </div>
      {/* End offCanvas minicart */}
      {/* Start serch box area */}
      <div className="predictive__search--box ">
        <div className="predictive__search--box__inner">
          <h2 className="predictive__search--title">Search Products</h2>
          <form className="predictive__search--form" action="#">
            <label>
              <input className="predictive__search--input" placeholder="Search Here" type="text" />
            </label>
            <button className="predictive__search--button" aria-label="search button" type="submit"><svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg></button>
          </form>
        </div>
        <button className="predictive__search--close__btn" aria-label="search close button" data-offcanvas>
          <svg className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
        </button>
      </div>
      {/* End serch box area */}
    </div>

  )
}
