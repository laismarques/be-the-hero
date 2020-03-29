import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../Services/api'

import heros_image from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState();
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', {id});

            localStorage.setItem('ngoId',  id);
            localStorage.setItem('ngoName',  response.data.nome);

            history.push('/profile');
        } catch(err){
            alert('Falha no Login, tente novamente');
        }

    }

    return (
    <div className="logon-container">
        <section className="form">
        <img scr={logoImg} alt=" "/>
        <form onSubmit={handleLogin}> 
            <h1>Faça seu Logon</h1>
                <input placeholder = "Sua Id"
                value = {id}
                onChange={e => setId(e.target.value)}
                />

                <button className = "button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                <a href ='/register'>
                    <FiLogIn size ={16} color = "#e02041" />
                    Não tenho Cadastro 
                </a>
                </Link>
        </form>
        </section>
        <img src = {heros_image} alt= "Heros"/>
    </div>
    );

}