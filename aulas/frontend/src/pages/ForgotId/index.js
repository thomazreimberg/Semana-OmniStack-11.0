import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import './styles.css';

export default function Recover() {
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();

    function handleRecover(e) {

        e.preventDefault();

        try {
            api.put('recoverid', {email});
        } catch (err) {
            alert('E-mail não encontrado, tente novante.');
        }
    }

    return (
        <div className="recover-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />
                    <h1>Enviaremos o código para recuperar seu ID por e-mail.</h1>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar ao login
                    </Link>
                </section>

                <form onSubmit={handleRecover}>
                    <InputMask
                    type="text"
                    placeholder="Informe o WhatsApp da sua ONG"
                    mask="+5\5 (1\1) 99999-9999"
                    maskChar=" "
                    maxLength="20"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                    <p>ou</p>
                    <input 
                    type="email" 
                    placeholder="Informe o e-mail da sua ONG"
                    maxLength="100"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}