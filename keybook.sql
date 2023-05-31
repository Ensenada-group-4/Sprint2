-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2023 a las 11:19:15
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
(15, 5, 6, 'aaaa'),
(18, 13, 7, 'pepin');

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
(9, 5, 7, 1),
(17, 5, 1, 1);

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
(49, 13, 'eyyy'),
(50, 13, 'aaaa');

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
  `linkedin` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `date_of_birth`, `profile_picture`, `city`, `country`, `phone`, `tools_name`, `studies_course`, `language_name`, `hobby_name`, `linkedin`) VALUES
(1, 'Lucia', 'Saenz', 'rreo@gmail.com', '123', '1992', 'https://i.postimg.cc/05TysNgK/lucia.png', 'gijon', 'spain', '685432198', 'PHP', 'Bootcamp Fullstack Tecla-2023', 'Inglés-C2', 'Jugar a Videojuegos', ''),
(2, 'Adrián', 'Page', 'pagemaster92@gmail.com', '123', '1992', 'https://i.postimg.cc/PJ89yhKB/adrian.png', 'Gijon', 'Spain', '98544444', '', '', '', '', ''),
(3, 'Stella Maris', 'González Robert', 'Stella@hotmail.com', '123', '1990', 'https://i.postimg.cc/9M4C66JB/stella.png', 'Gijón', 'Spain', '', '', '', '', '', ''),
(4, 'Rodrigo', 'Maxi apellido', 'rodri@gmail.com', '123', '2023', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'gijon', 'Spain', '', '', '', '', '', ''),
(5, 'Alicia', 'Gimena', 'AliciaG@gmail.com', '123', '1993', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Gijon', 'Spain', '985-35-66-66', '', '', '', '', ''),
(6, 'Pepe', 'Perez', 'pepe@gmail.com', '123', '1989', 'https://i.postimg.cc/NjYGKPjg/cristina.png', 'Gijon', 'Spain', '984-34-88-88', '', '', '', '', ''),
(7, 'Antonio', 'Buenapuente', 'antonio@hotmail.com', '123', '0000', 'https://i.postimg.cc/HLvTPY4x/lupita.png', 'Gijon', 'Spain', '984-99-77-44', '', '', '', '', ''),
(13, 'Iván', 'Ramos', 'ivan@gmail.com', '$2b$10$5q7XNP/3iWgkV2Z.v75yBeTXgmzvmVocdxDpi14RbVPPOT3vYRlpi', '1997', 'https://i.postimg.cc/SNk2LBzX/blank-Avatar.png', 'Gijon', 'España', '987847463', 'HTML, CSS', 'Bootcamp Fullstack Tecla', 'Inglés', 'Leer sobre patos', '');

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
  MODIFY `feedback_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `friend`
--
ALTER TABLE `friend`
  MODIFY `friendship_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id de usuario', AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`user_id_from`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`user_id_to`) REFERENCES `user` (`id`);

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
