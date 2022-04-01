
import React from 'react';
import data from '../../data/data.json';
import Historial from '../historial/Historial';
import Opciones from '../opciones/Opciones';


class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 1,
            historial: [],
            seleccionPrevia: "",
            historiActual: data[0]
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.contador !== this.state.contador) {
            this.setState({ historial: [...this.state.historial, this.state.seleccionPrevia] });
        }
    }


    handleClick = ({ target }) => {

        console.log("Evento Click");

        const opcion = target.id

        if (this.state.contador === 5) {
            window.alert("Fin de la Historia");
        } else {
            this.setState({
                contador: this.state.contador + 1,
                seleccionPrevia: opcion

            }, () => {
                const historia = this.filtro()
                this.setState({ historiActual: historia })
            })

        }
    }


    filtro = () => {
        const { contador, seleccionPrevia } = this.state;

        return data.find((historia) => historia.id == `${contador}${seleccionPrevia.toLowerCase()}`)

    }


    render() {

        return (
            <div className='layout'>

                <h1 className='historia'> {this.state.historiActual.historia} </h1>

                <Opciones

                    opcionA={this.state.historiActual.opciones.a}

                    opcionB={this.state.historiActual.opciones.b}

                    handleClick={this.handleClick} />

                <Historial historial={this.state.historial} seleccionPrev={this.state.seleccionPrevia} />
            </div>
        )
    };


}

export default Container;