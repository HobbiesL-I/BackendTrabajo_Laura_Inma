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
    description text default null,
    yearRelease int unsigned default null,
    imageBoardgame varchar(255) default null,
    videoBoardgame varchar(255) default null,
    imageVideo varchar(255) default null
);

Create table valorationBoardgame(
    idValorationBoardgame int unsigned auto_increment primary key,
    idBoardgame int unsigned null,
    namePerson varchar(100) default 'anonymous',
    qualification decimal(3,1) not null,
    review text not null,
    foreign key (idBoardgame) references boardgame(idBoardgame) on delete cascade
);

insert into boardgame (name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame, imageVideo) values
('Pantone', '2-20', false, 19.99, '20 min', 'Representación creativa colores', '8+', 'Baja', 'Pantone: El Juego es un party game colaborativo donde el talento artístico manda. Un jugador elige una tarjeta con un personaje famoso (políticos, cantantes, superhéroes...) y debe recrearlo usando SOLO tarjetas de colores Pantone, colocándolas como píxeles sobre la mesa. El resto adivina. ¡Menos pistas = más puntos! Perfecto para risas familiares, fiestas o team buildings creativos. 2-20 jugadores, ¡incluso con grupos grandes funciona genial! Incluye 80 tarjetas Pantone + 50 personajes icónicos. ¿Podrás hacer que adivinen a Dalí con 5 colores?', NULL, 'https://dracotienda.com/151990-large_default/pantone-el-juego.jpg', 'https://www.youtube.com/watch?v=JuLl-Kb7EHw', 'https://img.youtube.com/vi/JuLl-Kb7EHw/mqdefault.jpg'),
('Game of Life', '2-6', false, 27.99, '60 min', 'Carrera decisiones vida', '8+', 'Baja', '¡Vive toda una vida en 60 minutos! The Game of Life, el clásico de Hasbro desde 1960, simula tu camino desde la universidad hasta la jubilación. Elige carrera (¿médico rico o artista bohemio?), casa, familia, invierte en acciones... ¡y reza para no caer en bancarrota! Giros inesperados: gemelos sorpresa, juicios locos, herencias millonarias. 2-6 jugadores compiten por la mayor fortuna al final. Millones de copias vendidas, nostalgia pura con mecánicas familiares súper accesibles. ¡El mejor simulador de vida que existe!', 1960, 'https://consumercare.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fes_LAM%2F1C5EAFC1848E4A2887E4C7149359E16D%2Fb2c3e2ac4d496dcb2b9f1a1009fdf1e859c43455.jpg&w=1920&q=75', 'https://www.youtube.com/watch?v=Kkws_JmuLfE', 'https://img.youtube.com/vi/Kkws_JmuLfE/mqdefault.jpg'),
('Samurai Sword', '3-7', false, 24.99, '40 min', 'Cartas roles samuráis', '12+', 'Media', 'Samurai Sword (antes Bang! El Duque) es un western/samurái de deducción social con roles ocultos. 3-7 jugadores: 1 Shogun (líder), 2 Samurai (aliados), 1 Ronin (neutral), 3 Ninja (traidores). ¡Nadie sabe quién es quién! Juega cartas de acción (armas, curas, jujutsu, geishas...) para sobrevivir rondas de combate. El Shogun gana si elimina Ninjas, estos si matan Shogun. Ronin sobrevive al final. Orden de fuerza: Shogun > Samurai > Ronin > Ninja. Edición 2008 incluye poderes especiales (Tea Ceremony, Jujutsu...). Partidas tensas de 40 min, bluff épico y giros brutales. ¡Clásico imprescindible!', 2008, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/s/a/samurai_sword.jpg', 'https://www.youtube.com/watch?v=udCXta6aW0E', 'https://www.youtube.com/vi/udCXta6aW0E'),
('Sagrada', '1-4', true, 29.99, '40 min', 'Dados colocación vitrales', '10+', 'Media', 'Sagrada te convierte en maestro vidriero italiano del siglo XIX. Coloca dados coloridos en tu ventana de vitral siguiendo reglas estrictas: números crecientes, colores únicos por columna/fila. ¡Cada dado es único! 1-4 jugadores (modo solitario genial), draft de dados del centro, objetivos secretos (sets de color, columnas completas...). Puntuación por patrones, bonos por tokens difíciles. 2017 ganador Golden Geek, 40 min de estrategia pura. Arte precioso, componentes premium (dados translúcidos). ¿Construirás la catedral perfecta o tu oponente te eclipsará? Mecánica innovadora de dados + puzzle personal.', 2017, 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017226546-1200-face3d-copy.jpg', 'https://www.youtube.com/watch?v=WZ49d8THdJA', 'https://img.youtube.com/vi/WZ49d8THdJA/mqdefault.jpg'),
('Trasteros S.A.', '2-4', false, 19.95, '20-30 min', 'Colocación de trabajadores, Gestión de recursos', '10+', 'Media', '¡Subastas caóticas en trasteros abandonados! Trasteros S.A. (2025) es colocación de trabajadores + gestión de recursos para 2-4 jugadores. Envía agentes junior/senior a 3 zonas: Trasteros (objetos bocabajo con pistas), Clientes amateurs, Máquina de café (rumores). Combina piezas raras (muebles antiguos, cuadros, joyas) para clientes VIP exigentes. Fases: Colocación → Exploración/Social → Subastas → Mercado VIP → Prep siguiente ronda. Recursos: café para mirar secreto, límite mano 9 cartas. Penalizaciones por exceso. Estrategia, tensión, bloqueos. Ganador I Concurso Zacatrus. Arte colorido, componentes sólidos, 20-30 min de risas competitivas.', 2025, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/t/r/trasteros_box_01.jpg', 'https://www.youtube.com/watch?v=6yrXORNe-lI', 'https://img.youtube.com/vi/6yrXORNe-lI/mqdefault.jpg'),
('Virus', '2-6', false, 14.95, '15-20 min', 'Gestión de mano, Colección de sets, Drafting', '8+', 'Baja', '¡Virus! El juego de cartas más contagioso (Tranjis Games, 2016). En Hospital Nuestra Señora de Tranjis, novatos liberan virus experimentales. 2-6 jugadores curan órganos rivales mientras construyes cuerpo sano: corazón, cerebro, estómago, huesos. Cartas: Medicinas/Tratamientos curan TU cuerpo, Virus/Sabotajes infectan rivales. Gestión de mano + sets + drafting. ¡Bloquea rivales éticamente dudoso! Fácil de aprender (8+), replay alto. Expansiones disponibles. "¡El virus que une mesas!" 15-20 min, precio imbatible. Perfecto iniciación drafting familiar.', 2016, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/j/u/juego-virus.jpg', 'https://www.youtube.com/watch?v=knf9MqQoif0', 'https://img.youtube.com/vi/knf9MqQoif0/mqdefault.jpg'),
('Skull King', '2-8', false, 20.00, '30-40 min', 'Bazas, Apuestas predictivas, Gestión de mano', '8+', 'Media', '¡Sé el Rey Calavera! Skull King (ed. 2023 con Kraken) es trick-taking pirata para 2-8 jugadores. 10 rondas: apuesta cuántas bazas ganarás. Cartas especiales: Skull King (gana todo salvo sirena), Sirenas (pierden salvo Skull King), Piratas (ganan sirenas), Escapes (siempre pierden). Orden: Skull King > Sirena > Pirata > Escape > Números. Bonos por capturas (Kraken come todo). Apuestas simultáneas crean bluff tenso. Puntuación: aciertos = 10pts + bonos, fallos = -10pts. Fácil reglas, profundidad estratégica. Edición revisada premium. 30-40 min risas/estrategia.', 2023, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/j/u/juego-skull-king.jpg', 'https://www.youtube.com/watch?v=XG2BE2WChEw', 'https://img.youtube.com/vi/XG2BE2WChEw/mqdefault.jpg'),
('Listillo', '4-6', false, 24.95, '15-25 min', 'Escritura secreta, Votación, Party game', '10+', 'Baja', '¡Listillo! Party game culturilla (2023): ¿más listo o más gracioso? 4-6 jugadores escriben respuestas en pizarras a preguntas locas. Votan: "más correcta" (3pts) o "más divertida" (2pts). 110 cartas dobles = 220 preguntas. Meeples votos, tablero puntuación. Expansión disponible. Ej: "¿Qué lleva Batman bajo la capa?" → Respuestas creativas votan todos. 15-25 min carcajadas. Ideal reuniones, familias cultas. Reglas 2 min, accesible 10+. ¡El rey de las risas ingeniosas!', 2023, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/l/i/listillo-caja-render-min.jpg', 'https://www.youtube.com/watch?v=UU7cLItZXXA', 'https://img.youtube.com/vi/UU7cLItZXXA/mqdefault.jpg'),
('Prado', '1-4', true, 21.99, '20-30 min', 'Deducción, Movimiento en tablero, Gestión de acciones', '8+', 'Baja', '¡Fotografía el Prado! Prado (2025, Zacatrus) solitario/coop 1-4 jugadores. Mueve cámara por salas abarrotadas de visitantes bloqueadores. Acciones: avanzar, desplazar rivales, fotografiar cuadros icónicos (Meninas, Goya...). 35 cartas oficiales Prado + descripciones Antonio García Villarán. Ganador I Concurso Zacatrus. Deducción + movimiento tablero. 20-30 min belleza cultural. Arte espectacular, componentes sólidos. "¡El museo más famoso... en tu mesa!" Perfecto amantes arte + jugones casuales.', 2025, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/p/r/prado_resultado.jpg', 'https://www.youtube.com/watch?v=9PmnLiScYoE', 'https://img.youtube.com/vi/9PmnLiScYoE/mqdefault.jpg'),
('7 Wonders Duel', '2', false, 24.95, '30 min', 'Drafting de cartas, Gestión de recursos, Civilización', '10+', 'Media', '¡Duelo civilizatorio épico! 7 Wonders Duel (2015) 2 jugadores. Draft pirámide 3 eras: construye edificios (azules civiles, verdes ciencia, amarillos comercio, rojos militares), maravillas legendarias. Ciencia: símbolos → victoria inmediata. Comercio caro (monedas rivales), militar mueve peón hacia capital enemiga. Torre progreso: 6 pistas victoria. Estrategia pura, replay infinito. 30 min tensión. Expansiones Pantheon/Agora. Número 1 duelos 2j. ¡Clásico eterno!', 2015, 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/7/w/7wonders-duel.png', 'https://www.youtube.com/watch?v=VJMiNYzy63g', 'https://img.youtube.com/vi/VJMiNYzy63g/mqdefault.jpg');

insert into valorationBoardgame(idBoardgame, namePerson, qualification, review) values
(1, 'DiseñadorX', 9.1, 'Pantone es ideal para creativos. Representar famosos con colores Pantone en grupo grande es pura imaginación y risas.'),
(1, 'GrupoFiesta', 8.7, 'Sencillo y rápido como Pictionary con colores. Partidas de 20min perfectas para 10+ amigos.'),
(1, 'ArtistaFan', 8.9, 'Visualmente precioso, tarjetas de calidad. Desafía asociación cultura pop-colores sin dibujar.'),
(2, 'FamiliaNostalgia', 8.2, 'Clásico familiar con decisiones locas: carrera vs universidad, familia, dinero. Enseña consecuencias reales.'),
(2, 'PadresKids', 7.9, 'Divertido 1h+, competitivo al final con inversiones. Spinner y tablero actualizados, pero pegs pequeños.'),
(4, 'VidrierasArt', 9.4, 'Draft dados exquisito, vidrieras coloridas impresionantes. Equilibrio Azul-libertad, estéticamente top.'),
(4, 'MeeplePro', 9.0, 'Exigente colocación con objetivos/herramientas. Fluido, poco interacción, rejugable infinito.'),
(6, 'MedicoChaos', 8.9, 'Virus! es portable y adictivo: forma órganos sanos infectando rivales con sabotajes éticos. 15min para 4-6, puro caos hospitalario.'),
(6, 'FillerRápido', 7.6, 'Colección sets simple pero traicionero. Virus contagian bien, ideal viajes. Con 2 jugadores menos brillo.'),
(10, 'DuoCivil', 9.5, '7 Wonders Duel: draft pirámide perfecto para parejas. Ciencia/militar/puntos, rejugable eterno sin downtime.'),
(10, 'Estratega2J', 9.2, 'Maravillas y comercio tenso mueven peón victoria. Profundo en 30min, mejor duo que original grupo.');

CREATE TABLE movies (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL,
  year INT,
  genre VARCHAR(100),
  director VARCHAR(255),
  actors TEXT,
  duration INT
);

CREATE TABLE valorations (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  movie_id INT UNSIGNED NULL,
  user_name VARCHAR(100) DEFAULT 'anonymous',
  score DECIMAL(3,1) NULL,
  comment TEXT NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);

INSERT INTO movies (title, description, image, year, genre, director, actors, duration) VALUES
('Iron Man', 'Tony Stark se enfrenta a un poderoso enemigo mientras lucha con su propia identidad.', 'iron-man.jpg', 2008, 'Ciencia Ficción', 'Jon Favreau', 'Robert Downey Jr., Gwyneth Paltrow', 126),
('Guardianes de la Galaxia', 'Un grupo de inadaptados se une para salvar la galaxia.', 'guardianes-de-la-galaxia.jpg', 2014, 'Ciencia Ficción', 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista', 121),
('Capitana Marvel', 'Carol Danvers descubre sus poderes y su verdadero origen.', 'capitana marvel.jpg', 2019, 'Ciencia Ficción', 'Anna Boden', 'Brie Larson, Samuel L. Jackson', 124),
('X-Men', 'Un grupo de mutantes lucha por su supervivencia.', 'MARVEL X-MEN.jpg', 2000, 'Ciencia Ficción', 'Bryan Singer', 'Hugh Jackman, Patrick Stewart, Ian McKellen', 104),
('Liga de la Justicia', 'Un grupo de superhéroes se une para proteger la Tierra.', 'Lida de la justicia.jpg', 2017, 'Ciencia Ficción', 'Zack Snyder', 'Ben Affleck, Gal Gadot, Jason Momoa', 120),
('Batman vs Superman', 'Batman y Superman se enfrentan en una batalla épica.', 'Batman vs Superman.jpg', 2016, 'Ciencia Ficción', 'Zack Snyder', 'Ben Affleck, Henry Cavill', 151),
('Doctor Strange', 'Un neurocirujano descubre el mundo de la magia.', 'doctor strange.jpg', 2016, 'Ciencia Ficción', 'Scott Derrickson', 'Benedict Cumberbatch, Tilda Swinton', 115),
('Alice in Wonderland', 'Alicia cae por una madriguera a un mundo de fantasía.', 'Alice in wonderlannd.jpg', 2010, 'Fantasía', 'Tim Burton', 'Mia Wasikowska, Johnny Depp', 108),
('El Rey León', 'Simba debe reclamar su lugar como rey.', 'el rey leon.jpg', 2019, 'Fantasía', 'Jon Favreau', 'Donald Glover, Beyoncé', 118),
('Harry Potter 3', 'Harry Potter y el prisionero de Azkaban.', 'hp 3.jpg', 2004, 'Fantasía', 'Alfonso Cuarón', 'Daniel Radcliffe, Emma Watson, Rupert Grint', 141),
('Harry Potter 7', 'Harry Potter y las reliquias de la muerte.', 'hp 7.jpg', 2010, 'Fantasía', 'David Yates', 'Daniel Radcliffe, Emma Watson, Rupert Grint', 146),
('Titanic', 'Una historia de amor en el famoso barco.', 'Titanic.jpg', 1997, 'Romance', 'James Cameron', 'Leonardo DiCaprio, Kate Winslet', 194),
('A dos metros de ti', 'Dos adolescentes enfermos se enamoran.', '2019 - A dos metros de tí - Five feet apart.jpg', 2019, 'Romance', 'Justin Baldoni', 'Haley Lu Richardson, Cole Sprouse', 116),
('Corazones malheridos', 'Una historia de amor y superación.', 'corazones malheridos.jpg', 2023, 'Romance', 'Desconocido', 'Desconocido', 100),
('Yo antes de ti', 'Una joven cuida a un hombre en silla de ruedas.', 'yo antes de ti.jpg', 2016, 'Romance', 'Thea Sharrock', 'Emilia Clarke, Sam Claflin', 110),
('Divergent', 'Una joven descubre que no encaja en ninguna facción.', 'Divergent.jpg', 2014, 'Romance', 'Neil Burger', 'Shailene Woodley, Theo James', 139),
('Sr. y Sra. Smith', 'Dos asesinos descubren que están casados entre sí.', 'sr y sra smith.jpg', 2005, 'Romance', 'Doug Liman', 'Brad Pitt, Angelina Jolie', 120);

INSERT INTO valorations (movie_id, user_name, score, comment) VALUES
(1, 'Carlos García', 9.5, 'Una obra maestra del cine moderno, impresionante.'),
(1, 'Laura Martínez', 8.0, 'Muy buena película, aunque el final me dejó pensando.'),
(2, 'anónimo', 6.5, 'Entretenida pero no cumplió mis expectativas.'),
(2, 'Pedro Sánchez', 10.0, 'La mejor película que he visto en años, absolutamente increíble.'),
(3, 'María López', 7.5, 'Buena trama y actuaciones sólidas, la recomiendo.'),
(3, 'anónimo', 5.0, 'Regular, hay escenas que se hacen largas y aburridas.'),
(4, 'Sofía Ruiz', 9.0, 'Me encantó la fotografía y la banda sonora, espectacular.'),
(4, 'Javier Torres', 4.0, 'No me convenció, la historia es muy predecible.'),
(5, 'Elena Gómez', 8.5, 'Gran película, emotiva y bien dirigida.'),
(5, 'anónimo', 7.0, 'Bastante buena, aunque algunos personajes podrían desarrollarse más.');

