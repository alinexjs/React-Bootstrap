import React from "react";
import NavbarComponent from "../components/navbar/navbar.jsx";
import './Conheca.css';

function Conheca(){
    return(
        <main style={{ paddingTop: "80px" }}>
        <div className="conheca-container">
            <section className="conheca-hero">
                <h2>Conheça mais sobre a nossa cafeteria!</h2>
                <p>Nossa cafeteria é um lugar onde você econtra boas histórias. Cada detalhe foi pensado para acolher, e cada xícara de café carrega sabor para uma experiência única e acolhedora. Seu momento começa aqui!</p>
            </section>

            <section className='conheca-historia'>
                <h2>Nossa História!</h2>
                <p>Nossa cafeteria, Suricate, surgiu do desejo, dos sonhos, o amor pelas boas conversas, criar um local onde as pessoas se sintam em casa. Começamos em um local pequeno, mas, com o tempo crescemos, mas nunca perdemos a nossa essência e nosso objetivo de alegrar e açucarar o dia das pessoas! </p>
            </section>

            <section className='conheca-valores'>
                <h2>Nossos Valores!</h2>
                <ul>
                    <li> Qualidade em cada xícara</li>
                    <li> Atendimento com carinho</li>
                    <li> Sustentabilidade e respeito ao meio ambiente</li>
                    <li> Apoio a produtos locais</li>
                </ul>
            </section>

            <section className='conheca-ambiente'>
                <h3>O Ambiente!</h3>
                <p>Nossa cafeteria é como um refúgio do seu dia, um local para descanar e aproveitar o que oferecemos, com profissionais prontos para lhe atender e dedicados com seu trabalho. Com ambiente rústico, música ambiente e wi-fi gratuito. Nosso local é perfeito para trabalhar, estudar ou apenas relaxar.</p>
            </section>
        </div>
        </main>
    );
};

export default Conheca;
