import dortmundImg from './imagenes/dortmund.png';
import milanImg from './imagenes/milan.png';
import liverpoolImg from './imagenes/liverpool.png';
import realMadridImg from './imagenes/real_madrid.png';
import bayerLeverkusenImg from './imagenes/bayer_leverkusen.png';
import napoliImg from './imagenes/napoli.png';
import atleticoMadridImg from './imagenes/atletico_madrid.png';
import romaImg from './imagenes/roma.png';

const misProductos = [
    {id: 1, nombre: "Remera de Borussia Dortmund", precio: 60000, img: dortmundImg, categoria: "Bundesliga"},
    {id: 2, nombre: "Remera de AC Milan", precio: 60000, img: milanImg, categoria: "Seriea" },
    {id: 3, nombre: "Remera de Liverpool", precio: 60000, img: liverpoolImg, categoria: "Premierleague"},
    {id: 4, nombre: "Remera de Real Madrid", precio: 60000, img: realMadridImg, categoria: "Laliga"},
    {id: 5, nombre: "Remera de Bayern Leverkusen", precio: 60000, img: bayerLeverkusenImg, categoria: "Bundesliga"},
    {id: 6, nombre: "Remera de Napoli", precio: 60000, img: napoliImg, categoria: "Seriea" },
    {id: 7, nombre: "Remera de Atletico Madrid", precio: 60000, img: atleticoMadridImg, categoria: "Laliga"},
    {id: 8, nombre: "Remera de Roma", precio: 60000, img: romaImg, categoria: "Seriea"},
];

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(misProductos);
        }, 2000);
    });
};

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === parseInt(id));
            resolve(producto);
        }, 2000);
    });
};

export const getCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = misProductos.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
            resolve(productosFiltrados);
        }, 2000);
    });
};