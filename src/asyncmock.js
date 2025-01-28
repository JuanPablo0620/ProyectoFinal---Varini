import dortmundImg from './imagenes/dortmund.png';
import milanImg from './imagenes/milan.png';
import liverpoolImg from './imagenes/liverpool.png';
import realMadridImg from './imagenes/real_madrid.png';
import bayerLeverkusenImg from './imagenes/bayer_leverkusen.png';
import napoliImg from './imagenes/napoli.png';
import atleticoMadridImg from './imagenes/atletico_madrid.png';
import romaImg from './imagenes/roma.png';
import barcelonaImg from './imagenes/barcelona.png';
import bolognaImg from './imagenes/bologna.png';
import brightonImg from './imagenes/brighton.png';
import dinamarcaImg from './imagenes/dinamarca.png';
import españaImg from './imagenes/españa.png';
import franciaImg from './imagenes/francia.png';
import juventusImg from './imagenes/juventus.png';
import leipzigImg from './imagenes/leipzig.png';
import man_cityImg from './imagenes/man_city.png';
import tottenhamImg from './imagenes/tottenham.png';
import bayern_munichImg from './imagenes/bayern_munich.png';

const misProductos = [
    {id: 1, nombre: "Remera de Borussia Dortmund", precio: 60.000, img: dortmundImg, categoria: "Bundesliga"},
    {id: 2, nombre: "Remera de AC Milan", precio: 60.000, img: milanImg, categoria: "Seriea" },
    {id: 3, nombre: "Remera de Liverpool", precio: 70.000, img: liverpoolImg, categoria: "Premierleague"},
    {id: 4, nombre: "Remera de Real Madrid", precio: 70.000, img: realMadridImg, categoria: "Laliga"},
    {id: 5, nombre: "Remera de Bayern Leverkusen", precio: 50.000, img: bayerLeverkusenImg, categoria: "Bundesliga"},
    {id: 6, nombre: "Remera de Napoli", precio: 60.000, img: napoliImg, categoria: "Seriea" },
    {id: 7, nombre: "Remera de Atletico Madrid", precio: 60.000, img: atleticoMadridImg, categoria: "Laliga"},
    {id: 8, nombre: "Remera de Roma", precio: 60.000, img: romaImg, categoria: "Seriea"},
    {id: 9, nombre: "Remera de Barcelona", precio: 70.000, img: barcelonaImg, categoria: "Laliga"},
    {id: 10, nombre: "Remera de Bayern Munich", precio: 70.000, img: bayern_munichImg, categoria: "Bundesliga"},
    {id: 11, nombre: "Remera de Bologna", precio: 40.000, img: bolognaImg, categoria: "Seriea"},
    {id: 12, nombre: "Remera de Brighton", precio: 40.000, img: brightonImg, categoria: "Premierleague"},
    {id: 13, nombre: "Remera de Dinamarca", precio: 50.000, img: dinamarcaImg, categoria: "Selecciones"},
    {id: 14, nombre: "Remera de España", precio: 60.000, img: españaImg, categoria: "Selecciones"},
    {id: 15, nombre: "Remera de Francia", precio: 70.000, img: franciaImg, categoria: "Selecciones"},
    {id: 16, nombre: "Remera de Juventus", precio: 60.000, img: juventusImg, categoria: "Seriaea"},
    {id: 17, nombre: "Remera de Leipzig", precio: 50.000, img: leipzigImg, categoria: "Bundesliga"},
    {id: 18, nombre: "Remera de Manchester City", precio: 70.000, img: man_cityImg, categoria: "Premierleague"},
    {id: 19, nombre: "Remera de Tottenham", precio: 60.000, img: tottenhamImg, categoria: "Premierleague"},
];

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(misProductos);
        });
    });
};

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === parseInt(id));
            resolve(producto);
        });
    }, 1500);
};

export const getCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = misProductos.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
            resolve(productosFiltrados);
        }, 1500);
    });
};