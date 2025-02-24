/* import dortmundImg from './img/dortmund.png';
import milanImg from './img/milan.png';
import liverpoolImg from './img/liverpool.png';
import realMadridImg from './img/real_madrid.png';
import bayerLeverkusenImg from './img/bayer_leverkusen.png';
import napoliImg from './img/napoli.png';
import atleticoMadridImg from './img/atletico_madrid.png';
import romaImg from './img/roma.png';
import barcelonaImg from './img/barcelona.png';
import bolognaImg from './img/bologna.png';
import brightonImg from './img/brighton.png';
import dinamarcaImg from './img/dinamarca.png';
import españaImg from './img/españa.png';
import franciaImg from './img/francia.png';
import juventusImg from './img/juventus.png';
import leipzigImg from './img/leipzig.png';
import man_cityImg from './img/man_city.png';
import tottenhamImg from './img/tottenham.png';
import bayern_munichImg from './img/bayern_munich.png';
import inter_milanImg from './img/inter.png';

const misProductos = [
    {id: 1, nombre: "Remera de Borussia Dortmund", precio: 60.000, img: dortmundImg, categoria: "Bundesliga", descripcion: "Camiseta del Borussia Dortmund, temporada 2018-2019. Presenta los colores amarillo y negro con detalles en gris, celebrando el centenario del estadio Signal Iduna Park. Tecnología de control de temperatura."},
    {id: 2, nombre: "Remera de AC Milan", precio: 60.000, img: milanImg, categoria: "Seriea", descripcion: "Camiseta del AC Milan, año 2006-2007. Presenta los colores rojo y negro con rayas verticales, celebrando la victoria en la Champions League. Tecnología de secado rápido."  },
    {id: 3, nombre: "Remera de Liverpool", precio: 70.000, img: liverpoolImg, categoria: "Premierleague", descripcion: "Camiseta del Liverpool FC, temporada 2019-2020. Combina los colores rojo y blanco, celebrando la victoria en la Premier League después de 30 años. Tecnología de control de humedad."},
    {id: 4, nombre: "Remera de Real Madrid", precio: 70.000, img: realMadridImg, categoria: "Laliga", descripcion: "Camiseta del Real Madrid, edición 2016-2017. Combina los colores blanco y dorado, celebrando la victoria en la Champions League. Tecnología de absorción de sudor."},
    {id: 5, nombre: "Remera de Bayern Leverkusen", precio: 50.000, img: bayerLeverkusenImg, categoria: "Bundesliga", descripcion: "Remera del Bayer Leverkusen, temporada 2021-2022. Diseño en rojo y negro con detalles en dorado, celebrando el 30 aniversario del primer título de la Bundesliga del equipo."},
    {id: 6, nombre: "Remera de Napoli", precio: 60.000, img: napoliImg, categoria: "Seriea", descripcion: "Remera del SSC Napoli, temporada 1986-1987. Diseño en azul con detalles en blanco, conmemorando la temporada en la que el equipo ganó su primer Scudetto con Maradona. Fabricada en material resistente y cómodo." },
    {id: 7, nombre: "Remera de Atletico Madrid", precio: 60.000, img: atleticoMadridImg, categoria: "Laliga", descripcion: "Remera del equipo Altec Madrid, inspirada en los diseños clásicos de los años 90. Combina los colores tradicionales del equipo con un toque moderno, ideal para los amantes del fútbol retro."},
    {id: 8, nombre: "Remera de Roma", precio: 60.000, img: romaImg, categoria: "Seriea", descripcion: "Remera de la AS Roma, año 2000-2001. Diseño en granate con detalles en amarillo, conmemorando la temporada en la que el equipo ganó la Serie A. Tejido elástico para mayor comodidad."},
    {id: 9, nombre: "Remera de Barcelona", precio: 70.000, img: barcelonaImg, categoria: "Laliga", descripcion: "Camiseta del FC Barcelona, edición 2022. Presenta el icónico diseño azul y grana con detalles en oro, conmemorando los 100 años del estadio Camp Nou. Fabricada en tejido transpirable para mayor comodidad."},
    {id: 10, nombre: "Remera de Bayern Munich", precio: 70.000, img: bayern_munichImg, categoria: "Bundesliga", descripcion: "Camiseta oficial del Bayern Munich, año 2020. Diseño clásico en rojo y blanco con detalles en azul, conmemorando la temporada en la que el equipo ganó la Champions League."},
    {id: 11, nombre: "Remera de Bologna", precio: 40.000, img: bolognaImg, categoria: "Seriea", descripcion: "Remera del Bologna FC, edición 2019. Diseño retro con rayas rojas y azules, inspirado en los uniformes de los años 70. Fabricada en algodón orgánico para mayor comodidad."},
    {id: 12, nombre: "Remera de Brighton", precio: 40.000, img: brightonImg, categoria: "Premierleague", descripcion: "Camiseta del Brighton & Hove Albion, temporada 2021. Diseño en azul y blanco con detalles en amarillo, celebrando el ascenso del equipo a la Premier League. Tejido ligero y transpirable."},
    {id: 13, nombre: "Remera de Dinamarca", precio: 50.000, img: dinamarcaImg, categoria: "Selecciones", descripcion: "emera de la selección de Dinamarca, año 2020. Diseño en rojo y blanco con detalles en negro, conmemorando la participación del equipo en la Eurocopa. Fabricada en material de alta calidad."},
    {id: 14, nombre: "Remera de España", precio: 60.000, img: españaImg, categoria: "Selecciones", descripcion: "Remera de la selección española, edición 2010. Diseño en rojo con detalles en amarillo, conmemorando la victoria en la Copa del Mundo. Fabricada en material resistente y cómodo."},
    {id: 15, nombre: "Remera de Francia", precio: 70.000, img: franciaImg, categoria: "Selecciones", descripcion: "Camiseta de la selección francesa, año 2018. Combina los colores azul, blanco y rojo, celebrando la victoria en la Copa del Mundo. Tecnología de absorción de sudor."},
    {id: 16, nombre: "Remera de Juventus", precio: 60.000, img: juventusImg, categoria: "Seriaea", descripcion: "Camiseta de la Juventus, edición 2017-2018. Presenta los colores blanco y negro con detalles en dorado, celebrando el séptimo título consecutivo de la Serie A. Tecnología de secado rápido."},
    {id: 17, nombre: "Remera de Leipzig", precio: 50.000, img: leipzigImg, categoria: "Bundesliga", descripcion: "Remera del RB Leipzig, año 2016-2017. Diseño en rojo y blanco con detalles en azul, conmemorando el ascenso del equipo a la Bundesliga. Fabricada en material ligero y transpirable."},
    {id: 18, nombre: "Remera de Manchester City", precio: 70.000, img: man_cityImg, categoria: "Premierleague", descripcion: "Remera del Manchester City, edición 2018-2019. Diseño en azul cielo con detalles en blanco, conmemorando la victoria en la Premier League. Confeccionada en tejido de alta calidad."},
    {id: 19, nombre: "Remera de Tottenham", precio: 60.000, img: tottenhamImg, categoria: "Premierleague", descripcion: "Camiseta del Tottenham Hotspur, temporada 2018-2019. Presenta los colores blanco y azul, celebrando la llegada del equipo a la final de la Champions League. Tecnología de control de temperatura."},
    {id: 20, nombre: "Remera de Inter de Milan", precio: 60.000, img: inter_milanImg, categoria: "Seriea", descripcion: "Remera del Inter de Milán, temporada 2009-2010. Diseño en azul y negro con rayas verticales, conmemorando la temporada en la que el equipo ganó la Champions League. Tejido elástico para mayor movilidad."}

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

export const getDescripcion = (descripcion) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const descripcionProducto = misProductos.find(item => item.descripcion === descripcion);
            resolve(descripcionProducto);
        }, 1500);
    });
}; */