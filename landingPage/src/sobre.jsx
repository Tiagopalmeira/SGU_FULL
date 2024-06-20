import React from "react";
import './CSS/sobremim.css';

export default function SobreMim() {
    return (

        <div>
            <div className="galinho">

                <h1>Como contratar?</h1>
                <img src="./src/public/react.png" alt="Minha foto" className="fotoeu" />

            </div>

            <div className="centralizado">
                <h3>Melhores preços e ofertas:</h3>

                <div className="card">
                    <h4> Plano básico </h4>
                    <p>Acompanhe os seus desbravadores com facilidade por um preço acessivel.</p>
                    <ul className="listabeneficios">
                        <li>Cadastre e acompanhe membros cadastrados</li>
                        <li>Atualize classes e acompanhe as classes desenvolvidas</li>
                        <li>Tenha acesso a mensagens personalizadas para lembretes</li>
                    </ul>
                    <span className="preco"> R$ X,99 </span> <span>/mensal</span> <br />
                    <button className="contratar">Contratar</button>
                </div>
                <div className="divisao"></div>
                <div className="card">
                    <h4> Plano premium </h4>
                    <p>Cadastre classes, atualize e acompanhe seus desbravadores de uma maneira geral. Clube organizado é clube vencedor.</p>
                    <ul className="listabeneficios">
                        <li>Cadastre e acompanhe membros cadastrados</li>
                        <li>Atualize classes e acompanhe as classes desenvolvidas</li>
                        <li>Tenha acesso a mensagens personalizadas para lembretes</li>
                        <li>Tenha acesso a todos os cartões de classe atualizado para download</li>
                        <li>Cadastre os membros de todas as unidades e acompanhe de forma geral o desenvolvimento</li>
                        <li>Acompanhe e monitore o andamento de cada membro na execução de suas atividades</li>
                    </ul>
                    <span className="preco"> R$ X,99 </span> <span> /mensal </span><br />
                    <button className="contratar">Contratar</button>
                </div>

            </div>
        </div>
    );
}
