import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import imgHeroes from '../../assets/heroes.png';
import imgLogo from '../../assets/logo.svg';

function Logon(){
	return(
		<div className="logon-container">
			<section className="form">
				<img src={imgLogo} alt="Be The Hereo"/>

				<form>
					<input placeholder="Seu ID"/>
					<button className="button" type="submit">Entrar</button>

					<Link class="back-link" to="/register">
						<FiLogIn size={16} color="#E02041"/>
						Não tenho cadastro
					</Link>
				</form>
			</section>

			<img src={imgHeroes} alt="Heroes"/>
		</div>
	);
}

export default Logon;