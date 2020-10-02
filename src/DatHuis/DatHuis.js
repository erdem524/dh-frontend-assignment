import React from 'react';
import Select from 'react-select';
import './dathuis.css';
import { FaSearch } from 'react-icons/fa';
import Names from '../../MOCK_DATA.json';
import Email from './Email';
import Password from './Password';
import Footer from './Footer';

const contact = Names.map((name) => ({ value: name.name, label: name.name }));

function DatHuis() {
	return (
		<div className="container">
			<div className="select-container">
				<FaSearch className="search-icon" />
				<Select className="select" options={contact} maxMenuHeight={200} placeholder="Contact" />
			</div>
			<div className="row">
				<form className="form">
					<Email />
					<Password />
					<Footer />
				</form>
			</div>
		</div>
	);
}

export default DatHuis;
