import PropTypes from 'prop-types'
import './styles/FirstComponent.css'


export const FirstComponent = ({titulo, subtitulo}) => {
    return (
        <div>
            <h1> {titulo} </h1>
            <h2> {subtitulo} </h2>
        </div>
    );
}

FirstComponent.propTypes = {
    titulo : PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

FirstComponent.defaultProps = {
    titulo : 'Juanito Alcachofa',
    subtitulo : 'Adios Mundo'
}
