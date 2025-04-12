import { useState } from 'react';
import styles from './Formulario.module.css';
import Resultado from '../Resultado/Resultado';

function Formulario() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState('');

    const calcularIMC = () => {

        setErro('');
        setResultado(null);

        // Validação dos campos
        if (!altura || !peso || altura <= 0 || peso <= 0) {
            setErro('Por favor, insira valores válidos para altura e peso.');
            return;
        }

        const alturaEmMetros = parseFloat(altura) / 100;
        const imc = (parseFloat(peso) / (alturaEmMetros ** 2)).toFixed(2);

        let classificacao = '';
        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc >= 18.5 && imc < 24.9) classificacao = 'Peso normal';
        else if (imc >= 25 && imc < 29.9) classificacao = 'Sobrepeso';
        else classificacao = 'Obesidade';

        setResultado({ imc, classificacao });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Calculadora de IMC</h1>
            <div className="mb-3">
                <label htmlFor="altura" className="form-label">Altura (cm)</label>
                <input
                    type="number"
                    id="altura"
                    className="form-control"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="peso" className="form-label">Peso (kg)</label>
                <input
                    type="number"
                    id="peso"
                    className="form-control"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={calcularIMC}>Calcular IMC</button>


            {erro && <div className="alert alert-danger mt-3">{erro}</div>}


            {resultado && <Resultado resultado={resultado} />}
        </div>
    );
}

export default Formulario;