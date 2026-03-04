USE moviesli;

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
INSERT INTO movies (title, description, image, year, genre, director, actors, duration, rating) VALUES
('Iron Man', 'Tony Stark se enfrenta a un poderoso enemigo mientras lucha con su propia identidad.', 'iron-man.jpg', 2008, 'Ciencia Ficción', 'Jon Favreau', 'Robert Downey Jr., Gwyneth Paltrow', 126 ),
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

