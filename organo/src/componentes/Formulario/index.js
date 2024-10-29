import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Programacao',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovacao e Gestao'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form Enviado!')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe o local da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario