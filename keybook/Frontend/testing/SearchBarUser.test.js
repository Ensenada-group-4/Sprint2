//instalo el mocha chai con npm install --save-dev mocha chai
//npm install mocha chai @testing-library/react react react-dom no tengo claro si esta tambien hace falta pero la usan en el tutorial
//hay que añadir unas lineas en package json, en las dev dependencies
//hay que crear un archivo .babelrc para poder configurar los presets del test
import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { fireEvent, getByText } from '@testing-library/react';
import SearchBarUsers from '../src/Components/users/SearchBarUsers';

// Esto configura el entorno de DOM virtual JSDOM durante las pruebas
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

//aquí empiezan las distintas pruebas
describe('SearchBarUsers', () => {
    //en container metemos el propio componente searchbar... durante la prueba, por lo visto hace falta
    let container = null;
    //este beforeeach crea un div para usar ese container que aloja el componente durante la prueba
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    //este after se ejecuta tras cada prueba y borra le contenido dle container
    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
    });
    // esta prueba verifica que dentro dle container se renderice el search bar y usa el expect para comprobar que que exista un elemento con el id find-user... dentro
    it('Esto verifica que el componente searchbar se renderice', () => {
        render(<SearchBarUsers onSearchResults={() => { }} />, container);
        expect(container.querySelector('#find-user-form')).to.exist;
    });
    // Esta es otra prueba que verifica si el componente actualiza correctamente la clave de búsqueda cuando el valor del input cambia. Se simula con el fireEvent.change y luego se realiza una afirmación para comprobar si el valor del elemento de input searchKey se actualiza ocn el nombre introducido. ojo, porque no es que lo busque de la base de datos, simplemente prueba que se cambie, ya que es una "prueba unitaria" no alcanza esos niveles de interacción
    it('Esto actualiza la search key para ver si se actualiza con el nombre de un usuario', () => {
        render(<SearchBarUsers onSearchResults={() => { }} />, container);
        const input = container.querySelector('#searchFriends');
        fireEvent.change(input, { target: { value: 'Adrián' } });
        const searchKeyElement = container.querySelector('input[name="searchKey"]');
        expect(searchKeyElement.value).to.equal('Adrián');
    });
});


