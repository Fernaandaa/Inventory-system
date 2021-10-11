import React from "react";
import Header from "./Header";
import Search from '../assets/lupa.png'
const Admin = () => {
  return (
    <>
      <Header />
      <div className="admin__details">
        <div className="admin__filter">
          <h2>Hola Admin</h2>
          <button>Filtrar</button>
        </div>
        <div className="admin__input">
          <input type="text" placeholder="Buscar..."/>
          <img src={Search} alt="Lupa" />
        </div>
        <div className="admin__add">
          <button>Agregar</button>
        </div>
      </div>

    <div className="tableContainer">
    <table class="tableItem table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Producto</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Existencia</th>
            <th scope="col">Fecha</th>
            <th scope="col">Categoria</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Arroz</td>
            <td>Diana</td>
            <td>Existe</td>
            <td>01/02/2021</td>
            <td>Agranel</td>
            <td>Arroz pollo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Arroz</td>
            <td>Diana</td>
            <td>Existe</td>
            <td>01/02/2021</td>
            <td>Agranel</td>
            <td>Arroz doña pepa</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Arroz</td>
            <td>Diana</td>
            <td>Existe</td>
            <td>01/02/2021</td>
            <td>Agranel</td>
            <td>Arroz doña pepa</td>
          </tr>
        </tbody>
      </table>
    </div>
      
    </>
  );
};

export default Admin;
