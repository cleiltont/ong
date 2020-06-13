import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import imgHeroes from '../../assets/heroes.png';
import imgLogo from '../../assets/logo.svg';

function Logon(){
	const [ id, setId ] = useState();

	const history = useHistory();

	async function handleLogin(event){
		event.preventDefault();

		try{
			const response = await api.post('sessions', { id });

			localStorage.setItem('ong_id', id);
			localStorage.setItem('ongName', response.data.name);
			history.push('/profile');
		} catch (err){
			alert('Falha no login, tente novamente.');
		}
	}

	return(
		<div className="logon-container">
			<section className="form">
				<img src={imgLogo} alt="Be The Hereo"/>

				<form onSubmit={handleLogin}>
					<input placeholder="Seu ID"
						value={id}
						onChange={event => setId(event.target.value)}
						/>
					<button className="button" type="submit">Entrar</button>

					<Link className="back-link" to="/register">
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