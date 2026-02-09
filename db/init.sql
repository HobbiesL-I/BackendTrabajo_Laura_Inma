use hobbies;

Create table boardgame(
    idBoardgame int unsigned auto_increment primary key,
    name varchar(100) not null,
    numberPlayes varchar(20) not null,
    onePlayer boolean default false,
    price decimal(6,2) not null,
    playTime varchar(15) not null,
    mecanic varchar(25) not null,
    age varchar(10) not null,
    difficulty varchar(25) default null,
    description varchar(2000) default null,
    qualification decimal(2,1) unsigned default 0.0,
    review varchar(500) default null,
    yearRelease int unsigned default null
);

Create table category(
    idCategory int unsigned auto_increment primary key,
    nameCategory varchar(50) not null
);

Create table language(
    idLanguage int unsigned auto_increment primary key,
    nameLanguage varchar(30) not null
);

Create table boardgameImage(
    idImage int unsigned auto_increment primary key,
    boardgameImage varchar(200) not null
);

Create table boardgameInfo(
    idBoardgameInfo int unsigned auto_increment primary key,
    idBoardgame int unsigned not null,
    idCategory int unsigned not null,
    idLanguage int unsigned not null,
    idImage int unsigned not null,
    foreign key (idBoardgame) references boardgame(idBoardgame),
    foreign key (idCategory) references category(idCategory),
    foreign key (idLanguage) references language(idLanguage),
    foreign key (idImage) references boardgameImage(idImage)
);

insert into boardgame (name, numberPlayes, onePlayer, price, playTime, mecanic, age, difficulty, description, qualification, review, yearRelease) values 
('Catan', '3-4', FALSE, 39.99, '60-90 min', 'Negociación', '10+', 'Media', 'Comercia recursos y construye asentamientos en la isla de Catan.', NULL, NULL, 1995),
('Ticket to Ride', '2-5', FALSE, 49.99, '30-60 min', 'Construcción rutas', '8+', 'Fácil', 'Conecta ciudades americanas reclamando rutas de tren.', NULL, NULL, 2004),
('Carcassonne', '2-5', FALSE, 34.99, '30-45 min', 'Colocación losetas', '7+', 'Fácil', 'Coloca losetas y reclama terrenos con tus meeples.', NULL, NULL, 2000),
('Pandemic', '2-4', FALSE, 39.99, '45 min', 'Cooperativo', '8+', 'Media', 'Trabaja en equipo para detener 4 enfermedades globales.', NULL, NULL, 2008),
('Wingspan', '1-5', TRUE, 59.99, '40-70 min', 'Engine building', '10+', 'Media-Alta', 'Atrae aves a tu reserva y crea cadenas de poderes.', NULL, NULL, 2019),
('7 Wonders', '3-7', FALSE, 44.99, '30 min', 'Drafting cartas', '10+', 'Media', 'Desarrolla tu civilización en 3 eras simultáneamente.', NULL, NULL, 2010),
('Azul', '2-4', FALSE, 39.99, '30-45 min', 'Abstracto', '8+', 'Fácil', 'Coloca azulejos creando patrones hermosos en palacio.', NULL, NULL, 2017),
('Splendor', '2-4', FALSE, 29.99, '30 min', 'Engine building', '10+', 'Fácil', 'Adquiere gemas y cartas para conseguir más prestigio.', NULL, NULL, 2014),
('Dominion', '2-4', FALSE, 44.99, '30 min', 'Deck building', '13+', 'Media', 'Construye tu mazo de cartas para conseguir 15 puntos victoria.', NULL, NULL, 2008),
('Terraforming Mars', '1-5', TRUE, 64.99, '120 min', 'Engine building', '12+', 'Alta', 'Terraformiza Marte jugando proyectos innovadores.', NULL, NULL, 2016),
('Gloomhaven', '1-4', TRUE, 129.99, '60-120 min', 'Campaña', '14+', 'Alta', 'Campaña épica de 95 escenarios con 17 clases.', NULL, NULL, 2017),
('Scythe', '1-5', TRUE, 79.99, '90-115 min', 'Euro wargame', '14+', 'Alta', 'Controla facciones en Europa alternativa 1920s.', NULL, NULL, 2016),
('Monopoly', '2-6', FALSE, 19.99, '60-180 min', 'Negociación', '8+', 'Fácil', 'Compra propiedades y construye casas para arruinar rivales.', NULL, NULL, 1935),
('Chess', '2', FALSE, 24.99, '30-120 min', 'Abstracto', '6+', 'Alta', 'El juego de estrategia definitivo, jaque mate al rey.', NULL, NULL, 600),
('Santorini', '2-4', FALSE, 34.99, '20 min', 'Abstracto', '8+', 'Media', 'Construye torres y mueve trabajadores en islas griegas.', NULL, NULL, 2016);

insert into category (nameCategory) values
('Abstracto'),
('Cooperativo'),
('Party'),
('Filler'),
('Deck Building'),
('Wargame'),
('Miniaturas'),
('Roles Ocultos'),
('Legacy'),
('Engine Building'),
('Colocación de losetas'),
('Drafting'),
('Ameritrash'),
('Solitario');

insert into language (nameLanguage) values
('Español'),
('Inglés'),
('Francés'),
('Alemán'),
('Italiano'),
('Portugués'),
('Japonés'),
('Chino'),
('Coreano'),
('Ruso');

insert into boardgameImage (boardgameImage) values
('../images/boardgames/catan01.jpg'),
('../images/boardgames/catan02.jpg'),
('../images/boardgames/catan03.jpg'),
('../images/boardgames/Ticket_to_Ride01.jpg'),
('../images/boardgames/Ticket_to_Ride02.jpg'),
('../images/boardgames/Ticket_to_Ride03.jpeg'),
('../images/boardgames/carcasone01.jpg'),
('../images/boardgames/carcasone02.jpg'),
('../images/boardgames/carcasone03.jpg'),
('../images/boardgames/pandemic01.jpg'),
('../images/boardgames/pandemic02.png'),
('../images/boardgames/pandemic03.jpg'),
('../images/boardgames/wingspan01.jpg'),
('../images/boardgames/wingspan02.jpg'),
('../images/boardgames/wingspan03.jpg'),
('../images/boardgames/7Wonders01.png'),
('../images/boardgames/7Wonders02.jpg'),
('../images/boardgames/7Wonders03.jfif'),
('../images/boardgames/azul01.jpg'),
('../images/boardgames/azul02.jpg'),
('../images/boardgames/azul03.jpg'),
('../images/boardgames/Splendor01.jpg'),
('../images/boardgames/Splendor02.jpg'),
('../images/boardgames/Splendor03.jpg'),
('../images/boardgames/Dominion01.jfif'),
('../images/boardgames/Dominion02.jpg'),
('../images/boardgames/Dominion03.jpg'),
('../images/boardgames/FT_TerrMars01.jpg'),
('../images/boardgames/FT_TerrMars02.jpg'),
('../images/boardgames/FT_TerrMars03.jpg'),
('../images/boardgames/Gloomhaven01.jpg'),
('../images/boardgames/Gloomhaven02.png'),
('../images/boardgames/Gloomhaven03.jfif'),
('../images/boardgames/Scythe01.png'),
('../images/boardgames/Scythe02.jpg'),
('../images/boardgames/Scythe03.png'),
('../images/boardgames/Monopoly01.jfif'),
('../images/boardgames/Monopoly02.jpg'),
('../images/boardgames/Monopoly03.jpg'),
('../images/boardgames/Chess01.jpg'),
('../images/boardgames/Chess02.jpg'),
('../images/boardgames/Chess03.jpeg'),
('../images/boardgames/Santorini01.jpg'),
('../images/boardgames/Santorini02.jpg'),
('../images/boardgames/Santorini03.jpg');

insert into boardgameInfo (idBoardgame, idCategory, idLanguage, idImage) values
(1, 1, 1, 1), (1, 1, 2, 2), (1, 1, 1, 3),
(2, 1, 1, 4), (2, 1, 2, 5), (2, 12, 3, 6),
(3, 11, 1, 7), (3, 11, 2, 8), (3, 11, 4, 9),
(4, 2, 1, 10), (4, 2, 2, 11), (4, 2, 1, 12),
(5, 10, 1, 13), (5, 10, 2, 14), (5, 14, 1, 15),
(6, 12, 1, 16), (6, 12, 2, 17), (6, 12, 1, 18),
(7, 1, 1, 19), (7, 1, 2, 20), (7, 1, 3, 21),
(8, 10, 1, 22), (8, 10, 2, 23), (8, 10, 1, 24),
(9, 5, 1, 25), (9, 5, 2, 26), (9, 5, 1, 27),
(10, 10, 1, 28), (10, 10, 2, 29), (10, 14, 1, 30),
(11, 9, 1, 31), (11, 9, 2, 32), (11, 14, 1, 33),
(12, 6, 1, 34), (12, 6, 2, 35), (12, 10, 1, 36),
(13, 13, 1, 37), (13, 3, 2, 38), (13, 13, 1, 39),
(14, 1, 1, 40), (14, 1, 2, 41), (14, 1, 1, 42),
(15, 1, 1, 43), (15, 1, 2, 44), (15, 1, 1, 45);