import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import imgLogo from '../../assets/logo.svg';

function NewProfile(){
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

				<form>
					<input placeholder="Título do caso" />
					<textarea placeholder="Descrição" wrap/>
					<input placeholder="Valor em reais" />
					
					<button type="submit" className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}

export default NewProfile;