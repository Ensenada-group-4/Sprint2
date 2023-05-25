-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2023 a las 11:56:09
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
-- Estructura de tabla para la tabla `hobbies`
--

CREATE TABLE `hobbies` (
  `hobby_id` bigint(20) NOT NULL,
  `hobby_user_id` bigint(20) NOT NULL COMMENT 'el id del user',
  `hobby_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hobbies`
--

INSERT INTO `hobbies` (`hobby_id`, `hobby_user_id`, `hobby_name`) VALUES
(1, 2, 'Jugar a HOI IV'),
(2, 1, 'Ver pelis de miedo'),
(3, 3, 'Alpinismo extremo'),
(5, 13, 'Ir al Gym');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `languages`
--

CREATE TABLE `languages` (
  `language_id` bigint(20) NOT NULL,
  `language_user_id` bigint(20) NOT NULL,
  `language_name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `languages`
--

INSERT INTO `languages` (`language_id`, `language_user_id`, `language_name`) VALUES
(1, 1, 'Inglés'),
(2, 2, 'Francés A-2'),
(3, 13, 'Inglés');

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
(41, 2, 'soy adrian y esto es una prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studies`
--

CREATE TABLE `studies` (
  `studies_id` bigint(20) NOT NULL,
  `studies_user_id` bigint(20) NOT NULL,
  `studies_course` varchar(255) NOT NULL,
  `studies_date` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `studies`
--

INSERT INTO `studies` (`studies_id`, `studies_user_id`, `studies_course`, `studies_date`) VALUES
(1, 2, 'PHP, JS, PYTHON', '2022'),
(2, 4, 'JS, PHP,MySQL', '2023'),
(3, 5, 'PHP, MySQL, JavaScript', '2022'),
(5, 1, 'Bootcamp Full-Stack', '2022'),
(6, 13, 'HTML y CSS Básicos', '2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tools`
--

CREATE TABLE `tools` (
  `tools_id` bigint(20) NOT NULL,
  `tool_user_id` bigint(20) NOT NULL,
  `tools_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tools`
--

INSERT INTO `tools` (`tools_id`, `tool_user_id`, `tools_name`) VALUES
(1, 1, 'PHP');

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
  `linkedin` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `last_name`, `email`, `password`, `date_of_birth`, `profile_picture`, `city`, `country`, `phone`, `linkedin`) VALUES
(1, 'Lucia', 'Saenz', 'rreo@gmail.com', '123', '1992', 'https://i.postimg.cc/05TysNgK/lucia.png', 'gijon', 'spain', '685432198', ''),
(2, 'Adrián', 'Page', 'pagemaster92@gmail.com', '123', '1992', 'https://i.postimg.cc/PJ89yhKB/adrian.png', 'Gijon', 'Spain', '98544444', ''),
(3, 'Stella Maris', 'González Robert', 'Stella@hotmail.com', '123', '1990', 'https://i.postimg.cc/9M4C66JB/stella.png', 'Gijón', 'Spain', '', ''),
(4, 'Rodrigo', 'Maxi apellido', 'rodri@gmail.com', '123', '2023', 'https://i.postimg.cc/xTLTTSYx/rafael.png', 'gijon', 'Spain', '', ''),
(5, 'Alicia', 'Gimena', 'AliciaG@gmail.com', '123', '1993', 'https://i.postimg.cc/rzXbYbPz/alicia.png', 'Gijon', 'Spain', '985-35-66-66', ''),
(6, 'Pepe', 'Perez', 'pepe@gmail.com', '123', '1989', 'https://i.postimg.cc/NjYGKPjg/cristina.png', 'Gijon', 'Spain', '984-34-88-88', ''),
(7, 'Antonio', 'Buenapuente', 'antonio@hotmail.com', '123', '0000', 'https://i.postimg.cc/HLvTPY4x/lupita.png', 'Gijon', 'Spain', '984-99-77-44', ''),
(13, 'ivan', 'ramos', 'ivan@gmail.com', '$2b$10$5q7XNP/3iWgkV2Z.v75yBeTXgmzvmVocdxDpi14RbVPPOT3vYRlpi', '1997', 'https://i.postimg.cc/SNk2LBzX/blank-Avatar.png', 'Gijon', 'España', '987847463', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friend`
--
ALTER TABLE `friend`
  ADD PRIMARY KEY (`friendship_id`),
  ADD KEY `friend_user_id` (`user_friend1_id`),
  ADD KEY `friend_user_id_2` (`user_friend2_id`);

--
-- Indices de la tabla `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`hobby_id`),
  ADD KEY `hobby_user_id` (`hobby_user_id`);

--
-- Indices de la tabla `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`language_id`),
  ADD KEY `id_user_languajes` (`language_user_id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_id_user` (`post_id_user`);

--
-- Indices de la tabla `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`studies_id`),
  ADD KEY `studies_user_id` (`studies_user_id`);

--
-- Indices de la tabla `tools`
--
ALTER TABLE `tools`
  ADD PRIMARY KEY (`tools_id`),
  ADD KEY `tools_id_user` (`tool_user_id`);

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
-- AUTO_INCREMENT de la tabla `friend`
--
ALTER TABLE `friend`
  MODIFY `friendship_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `hobby_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `languages`
--
ALTER TABLE `languages`
  MODIFY `language_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `studies`
--
ALTER TABLE `studies`
  MODIFY `studies_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tools`
--
ALTER TABLE `tools`
  MODIFY `tools_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id de usuario', AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `friend`
--
ALTER TABLE `friend`
  ADD CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`user_friend1_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`user_friend2_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hobbies`
--
ALTER TABLE `hobbies`
  ADD CONSTRAINT `hobbies_ibfk_1` FOREIGN KEY (`hobby_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `languages`
--
ALTER TABLE `languages`
  ADD CONSTRAINT `languages_ibfk_1` FOREIGN KEY (`language_user_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`post_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `studies`
--
ALTER TABLE `studies`
  ADD CONSTRAINT `studies_ibfk_1` FOREIGN KEY (`studies_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tools`
--
ALTER TABLE `tools`
  ADD CONSTRAINT `tools_ibfk_1` FOREIGN KEY (`tool_user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
