import React, {useState} from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import { Link , useHistory} from 'react-router-dom';

import api from '../../Services/api'

export default function NewIncident(){
    const [title, setTitle] = useState();
    const [descripition, setDescripition] = useState();
    const [value, setValue] = useState();
    const history = useHistory();
    
   async function handleNewIncident(e){
        e.preventDefault();
        const ngoId = localStorage.getItem('ngoId');
        

        const data={
            title,
            descripition,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    authorization: ngoId,
                }
            });

            history.push('/profile');
        }catch(err){
            alert('Ocorreu um erro ao cadastar caso, tente novamente');
        }

    }

   return (<div className="new-incident-container">
   <div className="content">
   <section>
       <img src={logoImg} alt="Be the Hero"/>
       <h1>Cadastrar novo Caso</h1>
       <p> Descreve o caso detalhadamento para encontrar um héroi para resolver isso.</p>

       <Link className="back-link" to="/profile">
           <FiArrowLeft size={16} color="#e0241"/>
               Voltar para home
       </Link>
   </section>
   <form onSubmit={handleNewIncident}>
       <input 
        placeholder ="Título do Caso"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />

       <textarea 
        placeholder ="Descrição"
        value={descripition}
        onChange={e => setDescripition(e.target.value)}
        />

       <input 
        placeholder ="Valor em Reais"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
       
       <button className="button" type="submit">Cadastrar</button>
   </form>
   </div>
</div>)
}