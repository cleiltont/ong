import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import imgLogo from '../../assets/logo.svg';

function NewProfile(){
	const [ title, setTitle ] = useState();
	const [ description, setDescription ] = useState();
	const [ value, setValue ] = useState();

	const history = useHistory();

	const ong_id = localStorage.getItem('ong_id');

	async function handleNewIncident(event){
		event.preventDefault();

		const data = {
			title, description, value,
		};

		try{
			await api.post('incidents', data, {
				headers: {
					Authorization: ong_id,
				}
			});

			history.push('/profile');
		} catch(err){
			//
		}
	}

	return (
		<div className="new-incident">
			<div className="content">
				<section>
					<img src={imgLogo} alt="Be The Hero"/>

					<h1>Cadastrar novo caso</h1>
					<p>Descreva o caso detalhadamente para encontrar um herói para resilver isso.</p>
					<Link class="back-link" to="/profile">
						<FiArrowLeft size={16} color="#E02041"/>
						Voltar para home
					</Link>
				</section>

				<form onSubmit={handleNewIncident}>
					<input 
						placeholder="Título do caso" 
						value={title}
						onChange={event => setTitle(event.target.value)}
						/>
					
					<textarea 
						placeholder="Descrição" wrap
						value={description}
						onChange={event => setDescription(event.target.value)}
						/>
					
					<input 
						placeholder="Valor em reais" 
						value={value}
						onChange={event => setValue(event.target.value)}
						/>
					
					
					<button type="submit" className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}

export default NewProfile;