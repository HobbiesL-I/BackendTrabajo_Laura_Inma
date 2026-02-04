use hobbies;

--datos para la parte de juegos de mesa

Create table boardgame(
    idBoardgame int unsigned auto_increment primary key,
    name varchar(100) not null,
    numberPlayes varchar(20) not null,
    onePlayer boolean default false,
    mecanic varchar(25) not null,
    age varchar(10) not null,
    difficulty varchar(25) default null,
    description varchar(500) default null,
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

Create table boardgameInfo(
    idBoardgameInfo int unsigned auto_increment primary key,
    idBoardgame int unsigned not null,
    idCategory int unsigned not null,
    idLanguage int unsigned not null,
    foreign key (idBoardgame) references boardgame(idBoardgame),
    foreign key (idCategory) references category(idCategory),
    foreign key (idLanguage) references language(idLanguage)
);

--inserts de los juegos de la parte de juegos de mesa

INSERT INTO boardgame (name, numberPlayes, onePlayer, mecanic, age, difficulty, description, qualification, review, yearRelease) VALUES
('Catan', '3-4', false, 'Estrategia', '10+', 'Media', 'Juego de comercio y construcción en una isla.', null, null, 1995),
('Carcassonne', '2-5', false, 'Colocación', '8+', 'Fácil', 'Construye ciudades y caminos con losetas.', null, null, 2000),
('Pandemic', '2-4', true, 'Cooperativo', '10+', 'Media', 'Detén la propagación de enfermedades globales.', null, null, 2008),
('Terraforming Mars', '1-5', true, 'Gestión', '12+', 'Alta', 'Lidera corporaciones para terraformar Marte.', null, null, 2016),
('Ticket to Ride', '2-5', false, 'Colección', '8+', 'Fácil', 'Conecta ciudades con rutas de tren.', null, null, 2004),
('Gloomhaven', '1-4', true, 'Aventura', '14+', 'Alta', 'Explora mazmorras con combates tácticos.', null, null, 2017),
('Dixit', '3-6', false, 'Narrativo', '8+', 'Fácil', 'Cuenta historias con cartas ilustradas.', null, null, 2008),
('Azul', '2-4', false, 'Abstracto', '8+', 'Media', 'Coloca losetas para formar patrones.', null, null, 2017),
('7 Wonders', '2-7', false, 'Cartas', '10+', 'Media', 'Construye civilizaciones a través de eras.', null, null, 2010),
('Spirit Island', '1-4', true, 'Cooperativo', '13+', 'Alta', 'Defiende la isla de invasores coloniales.', null, null, 2017);

INSERT INTO category (nameCategory) VALUES
('Estrategia'),
('Familiar'),
('Cooperativo'),
('Aventura'),
('Abstracto'),
('Cartas'),
('Colocación de losetas'),
('Narrativo'),
('Gestión de recursos'),
('Temático');

INSERT INTO language (nameLanguage) VALUES
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

INSERT INTO boardgameInfo (idBoardgame, idCategory, idLanguage) VALUES
(1, 1, 1),
(1, 9, 2),
(2, 7, 1),
(3, 3, 2),
(3, 3, 1),
(4, 9, 2),
(4, 1, 1),
(5, 2, 1),
(6, 4, 2),
(7, 8, 1),
(7, 6, 3);
