import './styles/FirstComponent.css'

const string = 'Esto es un texto';
const number = 123456;
const array = ['Juanito', 'Pedro', 4, 5];
const boolean = false;
const functions = () => 'mensaje';
const object = { nombre: 'juanito', edad: 40 }
const date = new Date();


function firstcomponent() {
    return (
        <div>
            <h1>Variables en JSX</h1>
            <h4>Variable tipo String:</h4> <p>{string}</p>
            <h4>Variable tipo number:</h4> <p>{number}</p>
            <h4>Variable tipo array:</h4> <p>{array}</p>
            <h4>Variable tipo funcion:</h4> <p>{functions()}</p>
        </div>
    );
}

export default firstcomponent;