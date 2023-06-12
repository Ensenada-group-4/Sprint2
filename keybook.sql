-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2023 a las 10:27:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `keybook`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` bigint(20) NOT NULL,
  `user_id_from` bigint(20) NOT NULL,
  `user_id_to` bigint(20) NOT NULL,
  `content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `user_id_from`, `user_id_to`, `content`) VALUES
(1, 2, 13, 'Hoy he escrito mucho codigo, yupiii!'),
(2, 1, 2, 'Holaaa'),
(4, 1, 2, 'hola amigo'),
(5, 3, 2, 'Hoy he escrito mucho codigo, yupiii!'),
(19, 21, 1, 'uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(20, 22, 2, 'uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(21, 23, 3, 'uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(22, 24, 4, 'uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(23, 25, 5, 'uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(24, 26, 6, 'uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(25, 26, 1, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(26, 25, 2, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(27, 24, 3, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(28, 23, 4, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(29, 22, 5, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(30, 21, 6, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(31, 22, 1, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(32, 22, 2, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(33, 22, 3, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friend`
--

CREATE TABLE `friend` (
  `friendship_id` bigint(20) NOT NULL,
  `user_friend1_id` bigint(20) NOT NULL,
  `user_friend2_id` bigint(20) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `friend`
--

INSERT INTO `friend` (`friendship_id`, `user_friend1_id`, `user_friend2_id`, `status`) VALUES
(2, 3, 1, 1),
(3, 1, 2, 1),
(4, 1, 3, 1),
(7, 1, 7, 1),
(18, 1, 5, 1),
(32, 5, 1, 1),
(111, 2, 7, 1),
(121, 7, 20, 1),
(131, 20, 3, 1),
(145, 3, 19, 1),
(146, 2, 18, 1),
(147, 18, 19, 1),
(148, 19, 4, 1),
(149, 4, 13, 1),
(150, 21, 22, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `post_id` bigint(20) NOT NULL,
  `post_id_user` bigint(20) NOT NULL,
  `post_content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`post_id`, `post_id_user`, `post_content`) VALUES
(1, 2, 'No! odio esto! que alguien me salve, ayuda!'),
(2, 1, 'Adios mundo, me caes mal'),
(4, 2, 'Hola amigos de keybook'),
(11, 3, 'ayayai esto es un  lio!'),
(28, 1, 'Hola soy lucia y esto fue una prueba de posicionamiento'),
(41, 2, 'soy adrian y esto es una prueba'),
(51, 16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(52, 17, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(53, 18, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(54, 19, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(55, 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(56, 21, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(57, 22, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(58, 23, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(59, 24, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(60, 25, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(61, 16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '),
(62, 1, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(63, 1, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(64, 5, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(65, 6, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(66, 7, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(67, 16, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(68, 17, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(69, 18, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(70, 19, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(71, 20, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(72, 21, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(73, 22, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL COMMENT 'id de usuario',
  `name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL,
  `date_of_birth` year(4) NOT NULL,
  `profile_picture` varchar(250) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `tools_name` varchar(250) DEFAULT NULL,
  `studies_course` varchar(250) NOT NULL,
  `language_name` varchar(250) NOT NULL,
  `hobby_name` varchar(250) NOT NULL,
  `linkedin` varchar(250) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `date_of_birth`, `profile_picture`, `city`, `country`, `phone`, `tools_name`, `studies_course`, `language_name`, `hobby_name`, `linkedin`, `role`) VALUES
(1, 'Lucia', 'Saenz', 'lucia@gmail.com', '$2b$10$GzyUys9FhUurKV2GPu9Pwep/KG2fxSReGemFYKog3Huwpt7.edmu.', '1992', 'https://i.postimg.cc/05TysNgK/lucia.png', 'gijon', 'spain', '685432198', 'React, Node', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Ver videos de gatitos', '@lucia92', 'admin'),
(2, 'Adrián', 'Page', 'pagemaster92@gmail.com', '$2b$10$w1CnLUff2HzryL1r5PfUDeMlgmWdSrJHDCvdoGC1pRxdcwrUEOGr6', '1992', 'https://i.postimg.cc/PJ89yhKB/adrian.png', 'Gijon', 'Spain', '98544444', 'React, Node', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Ver videos de gatitos', '@adrian92', 'admin'),
(3, 'Stella Maris', 'González Robert', 'Stella@hotmail.com', '$2b$10$j51amLhnbGuHnMPT8cd0O.yqnPfBDjDKmlifFu3cWFj.x7C8VevI6', '1990', 'https://i.postimg.cc/9M4C66JB/stella.png', 'Gijón', 'Spain', '61564462', 'React, Node', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Ver videos de gatitos', '@Stella', 'admin'),
(4, 'Rodrigo', 'Apellido', 'rodri@gmail.com', '$2b$10$.yJ1Np4CZYEC4bbMvRMaFuNTYBqkoxt0nerYabmlb12QoAqF9QLZG', '2023', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'Buenos Aires', 'Argentina', '5234534534', 'React, Node', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Ver videos de gatitos', '@rodri', 'user'),
(5, 'Alicia', 'Gimena', 'AliciaG@gmail.com', '$2b$10$sivMGDw/SwHVArf2lJ.e9umaHtrwyS5JfRe0X3GJHVM1mCCYUIvj2', '1993', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Gijon', 'Spain', '985-35-66-66', 'React, Node', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Ver videos de gatitos', '@alicia', 'user'),
(6, 'Pepe', 'Perez', 'pepe@gmail.com', '$2b$10$Dwp55RItqknVpRsDrK45HOU8xNLxZPLzOBl0gZIBHec1VUX9Uteqy', '1989', 'https://i.postimg.cc/NjYGKPjg/cristina.png', 'Gijon', 'Spain', '984-34-88-88', 'React, Node', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Ver videos de gatitos', '@pepe', 'user'),
(7, 'Antonio', 'Buenapuente', 'antonio@hotmail.com', '$2b$10$SPvABRW0mXuRSvw400FgquFCp.Jh.Z/ZfouQ7t4TbbQcugShpb5r6', '1998', 'https://i.postimg.cc/HLvTPY4x/lupita.png', 'Gijon', 'Spain', '984-99-77-44', 'Postman, Git', 'Ingeniería mecánica - 2015', 'Español - nativo', 'Cocinar', '@antonio', 'user'),
(13, 'Iván', 'Ramos', 'ivan@gmail.com', '$2b$10$qEiCJ8iyiMGKhda16y58..PBVOLDQlqJBDPSK1H8yUsZwhlyVkDtq', '1997', 'https://i.postimg.cc/SNk2LBzX/blank-Avatar.png', 'Gijon', 'España', '987847463', 'HTML, CSS', 'Bootcamp Fullstack Tecla', 'Inglés', 'Leer sobre patos', '@ivan', 'user'),
(16, 'Emilio', 'Delgado', 'emilio@mail.com', '$2b$10$iphZDTNrru5GfKwDFnb4C.p84sSlJcdr0k0FvT6WdvbIcK2QxM4Z.', '1977', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'Cordoba', 'Españita', '666123123', 'HTML, CSS', 'Fullstack Bootcamp 2020', 'Portugues A2, Español -Nativo', 'Montar en moto, tomar el sol', '@emilio', 'user'),
(17, 'Belen', 'Lopez', 'belen@mail.com', '$2b$10$yG0d/H4Ukip9iQCKtIJTJ.hN6V9tGxecxe6mycEVscTSeeNrv7mZK', '1977', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Madrid', 'Españita', '666123123', 'HTML, CSS', 'Fullstack Bootcamp 2020', 'Español -Nativo', 'Montar en moto', '@belen77', 'user'),
(18, 'Lucia', 'Alvarez', 'alvarez@mail.com', '$2b$10$AcJDxFEQOSPFGAqR3lkgIOmZn7PQ11V6MQlk7IDMSJ4OIrtUQZ9wi', '1977', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Madrid', 'España', '666123123', 'GIT, Node', 'Android Bootcamp 2022', 'Inglés - C2, Italiano - B1', 'Jugar a videojuegos', '@lucia77', 'user'),
(19, 'Natalia', 'Cuesta', 'natalia@mail.com', '$2b$10$XVJ.0dEScx/SQgl0BGndg.YyTbSWn891pHdF4QvMeVOYbeg8bnksC', '1985', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Madrid', 'España', '666123123', 'HTML, CSS', 'Fullstack Bootcamp 2020', 'Español -Nativo', 'Montar en moto', '@natalia85', 'user'),
(20, 'Alicia', 'Sanz', 'sanz@mail.com', '$2b$10$xOsyta42nn9YCkfXlOkn2OBeJo6aovpsOnqAvRyn70W0OGEMnqllS', '1980', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Madrid', 'España', '666123123', 'GIT, Node', 'Android Bootcamp 2022', 'Inglés - C2, Italiano - B1', 'Jugar a videojuegos', '@alicia80', 'user'),
(21, 'Rafael', 'Alvarez', 'rafita@mail.com', '$2b$10$RLOyhpwqqHZxuJdXH1lPb.tPVwe7/PYZi6jwxtyj61RLcjGJHxV2i', '1970', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'Madrid', 'España', '666123123', 'Javascript, Vue', 'IOS APPS Bootcamp 2023', 'Alemán - B1, Inglés - B2', 'Salir a correr', '@rafita70', 'user'),
(22, 'Mauricio', 'Hidalgo', 'mauri@mail.com', '$2b$10$tDG1jte7vG1gMF2neA0LSedUZKOYcuJUwtcEtm2w/tLUlc6IuevXy', '1975', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'Madrid', 'España', '666123123', 'Javascript, Vue', 'IOS APPS Bootcamp 2023', 'Alemán - B1, Inglés - B2', 'Salir a correr', '@mauri75', 'user'),
(23, 'Marisa', 'Benito', 'marisa@mail.com', '$2b$10$jws8AjJuif.L1x7AClJH4.o/JhR/SKUDFm.SVQXa2I.lnZ4aWgXb2', '1960', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Madrid', 'España', '666123123', 'HTML, CSS', 'Fullstack Bootcamp 2020', 'Español -Nativo', 'Montar en moto', '@marisa60', 'user'),
(24, 'Juan', 'Cuesta', 'juanito@mail.com', '$2b$10$mm4YFc1txgapDoKuljiy9u8BmTLV44VLRKdNUJl8v8cQaUsEbIVcq', '1970', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'Madrid', 'España', '666123123', 'Javascript, Vue', 'IOS APPS Bootcamp 2023', 'Alemán - B1, Inglés - B2', 'Salir a correr', '@juanito70', 'user'),
(25, 'Vicenta', 'Benito', 'vicenta@mail.com', '$2b$10$DDMHi5S.jP66nvkrkOydRuBxK.I8B5QqiN0TNf14alNOTBI15k6NW', '1963', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Madrid', 'España', '666123123', 'GIT, Node', 'Android Bootcamp 2022', 'Inglés - C2, Italiano - B1', 'Jugar a videojuegos', '@marisa63', 'user'),
(26, 'Mariano', 'Delgado', 'mariano@mail.com', '$2b$10$.kdfa0UmBNnkGfyniQxK0uxBXr83tv/f7fzYOcTXJPeHaayVhU3/O', '1968', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'Madrid', 'España', '666123123', 'Javascript, Vue', 'IOS APPS Bootcamp 2023', 'Alemán - B1, Inglés - B2', 'Salir a correr', '@mariano68', 'user'),
(27, 'Bea Josefa', 'Villarejo Garcia', 'nataliajosefa@mail.com', '$2b$10$U8drfmfaQSaKMlKJXiuefe0kJBDYNiqe2wtqFONmUviSr1U93fFMq', '1985', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Gijón Asturias', 'España', '666123123', 'HTML, CSS', 'Fullstack Bootcamp 2020', 'Español -Nativo', 'Montar en moto', '@bea85', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `user_id_from` (`user_id_from`),
  ADD KEY `user_id_to` (`user_id_to`);

--
-- Indices de la tabla `friend`
--
ALTER TABLE `friend`
  ADD PRIMARY KEY (`friendship_id`),
  ADD KEY `friend_user_id` (`user_friend1_id`),
  ADD KEY `friend_user_id_2` (`user_friend2_id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_id_user` (`post_id_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `friend`
--
ALTER TABLE `friend`
  MODIFY `friendship_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id de usuario', AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`user_id_from`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`user_id_to`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `friend`
--
ALTER TABLE `friend`
  ADD CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`user_friend1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`user_friend2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`post_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
