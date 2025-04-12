import styles from './Resultado.module.css';

function Resultado({ resultado }) {
    return (
        <div className={styles.container}>
            <h2>Resultado</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{resultado.imc}</td>
                        <td>{resultado.classificacao}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Resultado;