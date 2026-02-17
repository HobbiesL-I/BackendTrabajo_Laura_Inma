use hobbies;

Create table boardgame(
    idBoardgame int unsigned auto_increment primary key,
    name varchar(100) not null,
    numberPlayers varchar(20) not null,
    onePlayer boolean default false,
    price decimal(6,2) not null,
    playTime varchar(15) not null,
    mecanic varchar(200) not null,
    age varchar(10) not null,
    difficulty varchar(25) default null,
    description varchar(2000) default null,
    yearRelease int unsigned default null,
    imageBoardgame varchar(255) default null,
    videoBoardgame varchar(255) default null
);

Create table valorationBoardgame(
    idValorationBoardgame int unsigned auto_increment primary key,
    idBoardgame int unsigned null,
    namePerson varchar(100) default 'anonymous',
    qualification decimal(2,1) not null,
    review varchar(500) not null,
    foreign key (idBoardgame) references boardgame(idBoardgame)
);

insert into boardgame (name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame) values
('Pantone', '2-20', false, 19.99, '20 min', 'Representación creativa colores', '8+', 'Baja', 'Representa personajes famosos solo con tarjetas Pantone de colores.', NULL, 'https://dracotienda.com/151990-large_default/pantone-el-juego.jpg', 'https://www.youtube.com/watch?v=JuLl-Kb7EHw'),
('Game of Life', '2-6', false, 27.99, '60 min', 'Carrera decisiones vida', '8+', 'Baja', 'Simula una vida completa: carrera, familia, dinero y giros inesperados.', 1960, 'https://consumercare.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fes_LAM%2F1C5EAFC1848E4A2887E4C7149359E16D%2Fb2c3e2ac4d496dcb2b9f1a1009fdf1e859c43455.jpg&w=1920&q=75', 'https://www.youtube.com/watch?v=Kkws_JmuLfE'),
('Samurai Sword', '3-7', false, 24.99, '40 min', 'Cartas roles samuráis', '12+', 'Media', 'Ronin, samuráis y ninja en batallas con poderes especiales.', 2008, 'https://m.media-amazon.com/images/I/61lumiW56qL._AC_UF894,1000_QL80_.jpg', 'https://www.youtube.com/watch?v=udCXta6aW0E'),
('Sagrada', '1-4', true, 29.99, '40 min', 'Dados colocación vitrales', '10+', 'Media', 'Construye ventanas de dados coloridos en vitrales acristalados.', 2017, 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017226546-1200-face3d-copy.jpg', 'https://www.youtube.com/watch?v=WZ49d8THdJA'),
('Trasteros S.A.', '2-4', false, 19.95, '20-30 min', 'Colocación de trabajadores, Gestión de recursos', '10+', 'Media', 'Gestiona agentes en trasteros para subastar objetos valiosos y vender a clientes VIP. Estrategia, tensión y sorpresas en subastas caóticas.', 2025, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/t/r/trasteros_box_01.jpg', 'https://www.youtube.com/watch?v=6yrXORNe-lI'),
('Virus', '2-6', false, 14.95, '15-20 min', 'Gestión de mano, Colección de sets, Drafting', '8+', 'Baja', '¡El juego de cartas más contagioso! En el hospital Tranjis, erradica virus experimentales formando un cuerpo sano (corazón, cerebro, estómago, huesos) mientras infectas órganos rivales con medicinas, tratamientos y sabotajes éticos dudosos.', 2016, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/j/u/juego-virus.jpg', 'https://www.youtube.com/watch?v=knf9MqQoif0'),
('Skull King', '2-8', false, 20.00, '30-40 min', 'Bazas, Apuestas predictivas, Gestión de mano', '8+', 'Media', '¡Sé el Rey Calavera! En 10 rondas piratas, apuesta simultáneamente cuántas bazas ganarás. Skull King gana todo (salvo sirena), piratas baten sirenas, escapes evitan victoria. Bonos por capturas especiales. Edición revisada 2023 con Kraken.', 2023, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/j/u/juego-skull-king.jpg', 'https://www.youtube.com/watch?v=XG2BE2WChEw'),
('Listillo', '4-6', false, 24.95, '15-25 min', 'Escritura secreta, Votación, Party game', '10+', 'Baja', '¡La persona más listilla gana! Responde preguntas en pizarras: sé correcto para votos "correcta" (3 pts) o gracioso para "más divertida" (2 pts). Incluye 110 cartas dobles (220 pruebas), meeples, tablero puntuación y expansión disponible.', 2023, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/l/i/listillo-caja-render-min.jpg', 'https://www.youtube.com/watch?v=UU7cLItZXXA'),
('Prado', '1-4', true, 21.99, '20-30 min', 'Deducción, Movimiento en tablero, Gestión de acciones', '8+', 'Baja', '¡Fotografía las obras maestras del Museo del Prado! Mueve tu cámara entre salas llenas de visitantes bloqueadores, usa acciones para avanzar, desplazar rivales y capturar cuadros icónicos (Las Meninas, Goya...). Incluye 35 cartas reales con descripciones de Antonio García Villarán. Ganador I Concurso Zacatrus.', 2025, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/p/r/prado_resultado.jpg', 'https://www.youtube.com/watch?v=9PmnLiScYoE'),
('7 Wonders Duel', '2', false, 24.95, '30 min', 'Drafting de cartas, Gestión de recursos, Civilización', '10+', 'Media', '¡Duelo civilizatorio! Drafta cartas en pirámide sobre 3 eras: construye edificios (azules civiles, verdes ciencia, rojos militares), maravillas y progresa en ciencia para victoria inmediata. Comercio costoso, conflicto militar mueve peón hacia capital rival.', 2015, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/7/w/7wonders-duel.png', 'https://www.youtube.com/watch?v=VJMiNYzy63g');