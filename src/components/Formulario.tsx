import React, { useState, useEffect } from "react";
import { Turno } from "../interfaces/Turno";

const Formulario = () => {

    const [turno, setTurno] = useState<Turno>({
        name:'',
        lastName:'',
        day:'',
        time:''
    });

    const [turnos, setTurnos] = useState<Array<Turno>>([])


    const handleSubmit = (e:React.FormEvent<HTMLButtonElement>) =>{       
        turnos.push(turno);
        console.log(turnos);
        e.preventDefault();
    }
    

    //Una forma de saber el tipo de dato de los eventos es definir la funcion en este caso handleChange en el "onchange/onclick de donde lo vamos a usar y pasamos el mouse por arriba y directamente nos dice el tipo de evento"
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTurno({
            // "...turno lo que hace es pasarle todos los valores que no cambiarion y el e.target.name lo que hace es detectar cuales cambiaron y con el e.target.name le paso justamente ese valor que cambio."
            ...turno,
            [evt.target.name]: evt.target.value
        })
    }

    return (

        <>
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} value = { turno.name } placeholder="Ingrese el nombre"/>
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" name="lastName" className="form-control" onChange={handleChange} value = { turno.lastName } placeholder="Ingrese el apellido"/>
                </div>
                <div className="form-group">
                    <label>Dia</label>
                    <input type="Date" name="day" className="form-control" onChange={handleChange} value = { turno.day } />
                </div>
                <div className="form-group">
                    <label>Hora</label>
                    <input type="Time" name="time" className="form-control" onChange={handleChange} value = { turno.time } />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">Nuevo Turno</button>
            </form>
            <ul>
        {
            turnos.map(turno => {
              return(
                <li key={turno.name}>
                  <h3>{turno.name} {turno.lastName}</h3>
                  <h4>{turno.day}</h4>
                  <h5>{turno.time}</h5>
                </li>
              )})
          }
          </ul>
        </>
    )
}
export default Formulario;