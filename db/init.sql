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

Create table valoration(
    idValoration int unsigned auto_increment primary key,
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
('Sagrada', '1-4', true, 29.99, '40 min', 'Dados colocación vitrales', '10+', 'Media', 'Construye ventanas de dados coloridos en vitrales acristalados.', 2017, 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017226546-1200-face3d-copy.jpg', 'https://www.youtube.com/watch?v=WZ49d8THdJA');