# HobbiesL-I 🎬🎲

**Gestión completa de películas y juegos de mesa** con CRUD, valoraciones y diseño responsive.

## 📋 Configuración del Servidor

| Componente | Puerto | Descripción | Configuración por defecto |
|------------|--------|-------------|---------------------------|
| **App Server** | `8080` | Node.js/Express API | `"puerto": 8080` |
| **MariaDB** | `3306` | Base de datos en Docker Desktop | `localhost:3306` |
| **Timeout** | - | Tiempo espera servidor | `"seAcaboTiempo": 5` |

---

## 🌐 Endpoints API (CRUD Completo)

### 🎲 **Boardgames CRUD**

| Método | Endpoint | Query/Params | Descripción | Status |
|--------|----------|--------------|-------------|--------|
| `GET` | `/hobbies/boardgames` | `/?name=Nombre` | Lista todos o busca por nombre | `200`, `404` |
| `GET` | `/hobbies/boardgames/:idBoardgame` | - | Detalle completo juego | `200`, `404` |
| `POST` | `/hobbies/boardgames` | Body JSON | **Crear** nuevo juego | `201`, `409` |
| `PUT` | `/hobbies/boardgames/:idBoardgame` | Body JSON | **Editar** juego existente | `204`, `404` |
| `DELETE` | `/hobbies/boardgames/:idBoardgame` | - | **Eliminar** juego + valoraciones | `204`, `404` |

#### **Valoraciones Boardgames**
| Método | Endpoint | Query/Params | Descripción | Status |
|--------|----------|--------------|-------------|--------|
| `GET` | `/hobbies/valorationsBoardgame/:idBoardgame` | - | Todas o por juego | `200`, `404` |
| `GET` | `/hobbies/valorationsBoardgame/:idBoardgame` | - | Valoraciones específicas | `200`, `404` |
| `POST` | `/hobbies/valorationsBoardgame` | Body JSON | **Añadir** valoración | `201`, `409`, `400` |

### 🎥 **Movies CRUD**

| Método | Endpoint | Query/Params | Descripción | Status |
|--------|----------|--------------|-------------|--------|
| `GET` | `/hobbies/movies` | - | **Lista todas** las películas | `200` |
| `GET` | `/hobbies/movies/:id` | - | **Detalle** película completa | `200`, `404` |
| `POST` | `/hobbies/movies` | Body JSON | **Crear** nueva película | `201`, `409` |
| `PUT` | `/hobbies/movies/:id` | Body JSON | **Editar** película | `204`, `404` |
| `DELETE` | `/hobbies/movies/:id` | `id` | **Eliminar** película | `204`, `404` |

#### **Valoraciones Movies**
| Método | Endpoint | Query/Params | Descripción | Status |
|--------|----------|--------------|-------------|--------|
| `GET` | `/hobbies/valorations` | - | **Todas** las valoraciones | `200` |
| `GET` | `/hobbies/valorations/:movie_id` | - | Valoraciones por película | `200`, `404` |
| `POST` | `/hobbies/valorations` | Body JSON | **Añadir** valoración | `201`, `409`, `400` |

---

## 🗃️ Estructura Base de Datos

### 🎲 **Juegos de Mesa**

| Tabla | Campos Principales | Constraints | Relaciones |
|-------|--------------------|-------------|------------|
| `boardgame` | `idBoardgame` (PK), `name`, `numberPlayers`, `onePlayer` (bool), `price` (6,2), `playTime`, `mecanic`, `age`, `difficulty`, `description` (TEXT), `yearRelease`, `imageBoardgame`, `videoBoardgame`, `imageVideo`, `imageBoardgame2` | `name NOT NULL`, `price NOT NULL` | `valorationBoardgame` (CASCADE) |

### 🎥 **Películas**

| Tabla | Campos Principales | Constraints | Relaciones |
|-------|--------------------|-------------|------------|
| `movies` | `id` (PK), `title`, `description` (TEXT), `image`, `year`, `genre`, `director`, `actors` (TEXT), `duration` | `title NOT NULL`, `description NOT NULL`, `image NOT NULL` | `valorations` (CASCADE) |

### ⭐ **Valoraciones (Separadas)**

| Tabla | Campos Principales | Constraints | Foreign Key |
|-------|--------------------|-------------|-------------|
| `valorationBoardgame` | `idValorationBoardgame` (PK), `idBoardgame`, `namePerson` ('anonymous'), `qualification` (3,1), `review` (500) | `qualification NOT NULL`, `review NOT NULL` | `boardgame(idBoardgame)` CASCADE |

| Tabla | Campos Principales | Constraints | Foreign Key |
|-------|--------------------|-------------|-------------|
| `valorations` | `id` (PK), `movie_id`, `user_name` ('anonymous'), `score` (3,1), `comment` (TEXT) | `comment NOT NULL` | `movies(id)` CASCADE |
