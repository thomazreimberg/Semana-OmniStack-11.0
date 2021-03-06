import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


import Logo from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongName', response.data.name);
            localStorage.setItem('ongId',  id);
            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="Be The hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link >
                    <Link className="back-linkdown" to="/recoverid">
                        <FiLogIn size={16} color="#E02041" />
                        Esqueci meu ID
                    </Link>
                </form>
            </section>

            <img src={HeroesImg} alt="Heroes"/>
        </div>
    );
}