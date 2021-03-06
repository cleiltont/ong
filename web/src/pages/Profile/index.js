import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import imgLogo from '../../assets/logo.svg';

function Profile(){
	const [ incidents, setIncidents ] = useState([]);

	const history = useHistory();

	const ongName = localStorage.getItem('ongName');
	const ong_id = localStorage.getItem('ong_id');

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ong_id,
			}
		}).then(response => {
			setIncidents(response.data);
		});
	}, [ong_id]);

	async function handleDeleteIncident(id){
		try{
			await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: ong_id,
				}
			});

			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (err){
			alert('Erro ao deletar caso, tente novamente.');
		}
	}

	function handleLogut(){
		localStorage.clear();

		history.push('/');
	}

	return (
		<div className="profile-container">
			<header>
				<img src={imgLogo} alt="Be The Hero"/>
				<span>Bem vinda, { ongName }</span>

				<Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
				<button type="button" onClick={handleLogut}>
					<FiPower size={18} color="#E02041" />
				</button>
			</header>

			<h1>Casos cadastrados</h1>
			<ul>
				{incidents.map(incident => (
					<li key={incident.id}>
					<strong>Caso:</strong>
					<p>{incident.title}</p>

					<strong>Descrição:</strong>
					<p>{incident.description}</p>

					<strong>Valor:</strong>
					<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

					<button type="button" onClick={() => handleDeleteIncident(incident.id)}>
						<FiTrash2 size={20} color="A8A8B3" />
					</button>
				</li>
				))}
			</ul>
		</div>
	);
}

export default Profile;