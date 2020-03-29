import React , {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import api from   '../../Services/api'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    const [nome, setNome] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [whatsapp, setWhatsapp] = useState(' ');
    const [cidade, setCidade] = useState(' ');
    const [uf, setUf] = useState(' ');

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();
        const data =({
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })
        try{
            const response = await api.post('/ngo', data);
        alert(`Seu id de acesso: ${response.data.id}`);
        history.push('/')
        }
        catch (err){
            alert('Ocorreu um erro');
        }
        
    }

    return (
        <div className="register-container">
            <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero"/>
                <h1>Cadastro</h1>
                <p> Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem sua ONG.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e0241"/>
                        Não tenho cadastro 
                </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input 
                placeholder="Nome da Ong"
                value={nome}
                onChange={e => setNome(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}/>
                
                <div>
                    <input 
                    placeholder="Cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    />
                    <input placeholder ="UF" style={{width: 80}}
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
            </div>
        </div>
    )
}