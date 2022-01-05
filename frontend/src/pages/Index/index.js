import React, { useState } from 'react';


import '../../global.css'
import './styles.css';

import api from '../../services/api'

export default function Index() {
    const [origin, setOrigin] = useState('');
    const [receiver, setReceiver] = useState('');
    const [min, setMin] = useState('');
    const [value, setValue] = useState(0);
    const [plan, setPlan] = useState('')

    async function handleCall(e) {
        e.preventDefault();

        const data = {
            origin,
            receiver,
            min,
            plan
        };

        console.log(data)

        const response = await api.post('/call', data)

        console.log(response.data)
        setValue(response.data)
    }

    return (
        <div className="register-container">
            <div className="content">
                <form onSubmit={handleCall}>
                    <h1>Calcule a tarifa da ligação</h1>
                    <label>Origem</label>
                    <select name='DDD Origin' value={origin} onChange={e => setOrigin(e.target.value)}>
                        <option hidden value="">Selecione</option>
                        <option value="11">11</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                    </select>
                    <label>Destino</label>
                    <select name='DDD Receiver' value={receiver} onChange={e => setReceiver(e.target.value)}>
                        <option hidden value="">Selecione</option>
                        <option value="11">11</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                    </select>
                    <label>Plano</label>
                    <select name='Plan' value={plan} onChange={e => setPlan(e.target.value)}>
                        <option hidden value="">Selecione</option>
                        <option value="default">Sem plano</option>
                        <option value="TalkMore30">Fale Mais 30</option>
                        <option value="TalkMore60">Fale Mais 60</option>
                        <option value="TalkMore120">Fale Mais 120</option>
                    </select>
                    <label>Duração</label>
                    <input
                        type='number'
                        min="0"
                        value={min}
                        onChange={e => setMin(e.target.value)}
                    />
                    <button className="button" type="submit">Calcular</button>
                </form>
                <h2>O valor da chamada será de {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(value)}</h2>
            </div>
        </div>
    );
}