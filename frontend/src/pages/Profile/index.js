import React, {useEffect, useState, } from 'react';
import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';

import api from '../../Services/api'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');
    const history = useHistory();

    useEffect(()=>{
        api.get('profile', {
            headers: {
                authorization: ngoId,

            }
        }).then(response =>{
            setIncidents(response.data);
        })
    }, [ngoId]);

   async function handleDelete(id){
        try{
        await api.delete(`incidents/${id}`, {
            headers: {
                authorization: ngoId,
            }
        })

        setIncidents(incidents.filter(incident => incident.id !== id));

        }catch (err){
            alert('Erro ao deletar Caso');
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo, {ngoName}</span>
                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick= {handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                     <li key={incident.id}>
                     <strong>Caso:</strong>
                     <p>{incident.title}</p>
  
                     <strong>DESCRIÇÃO:</strong>
                     <p>{incident.descripition}</p>
  
                     <strong>Valor: </strong>
                     <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                     <button onClick ={() => handleDelete(incident.id)} type="button">
                         <FiTrash2 size={20} color="#a8a8b3"/>
                     </button>
                     </li> 
                ))
                }    
            </ul>
        </div>
    )
}