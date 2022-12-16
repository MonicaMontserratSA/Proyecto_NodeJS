-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2022 a las 01:11:52
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rh`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `empleado_id` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `Direccion` varchar(80) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Rol` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`empleado_id`, `Nombre`, `Apellidos`, `Telefono`, `Correo`, `Direccion`, `Password`, `Rol`) VALUES
(1, 'Hyung Seo', 'Kim', '123456', 'bibi@gmail.com', ' Ulsan, South Korea', 'bibi123', 'A'),
(2, 'Tae Yeon', 'Kim', '789123', 'taeyeon_ss@gmail.com', 'Jeonju, North Jeolla, South Korea', 'taeyeon_ss123', 'A'),
(3, 'Yubin', 'Lee', '6410437', 'dami@gmail.com', 'Seoul, South Korea', 'dami123', 'A'),
(4, 'Chaewon ', 'Kim', '233817', 'chaechae@gmail.com', 'Seoul, South Korea', 'chae123', 'U'),
(5, 'Hye Jin', 'Ahn', '792014', 'hwasa@gmail.com', 'Jeonju, Jeollabuk-do, South Korea', 'hwasa123', 'U'),
(6, 'Sakura', 'Miyawaki', '4287031', 'sakura@gmail.com', 'Kagoshima City, Japan', 'sakura123', 'A'),
(8, 'Ji Hyo', 'Park', '7913548', 'zyozyo@gmail.com', 'Guri, Gyeonggi-do, South Korea', 'jihyo123', 'A'),
(9, 'Na Yeon', 'Im', '492143', 'nayeonyny@gmail.com', 'Suwon, South Korea', 'nayeon123', 'U'),
(11, 'Sana', 'Minatozaki ', '1387036', 'sanapomu@gmail.com', 'Tennōji-ku, Osaka, Japan', 'sana123', 'A'),
(12, 'Yu Na', 'Choi', '237910', 'yuju@gmail.com', 'Ilsan, South Korea', 'yuju123', 'U'),
(15, 'Xiao', 'Cheng', '7560153', 'chengxiao@gmail.com', 'Shenzhen, China', 'xiao123', 'A'),
(16, 'Chanmi', 'Im', '133454', 'chanmi@gmail.com', 'Daegu, South Korea', 'chanmi123', 'U'),
(17, ' Haruka', 'Miyauchi', '4791335', 'miya@gmail.com', 'Shizuoka, Japan', 'miya123', 'U'),
(18, 'Chingyi', 'Wang', '8128652', 'wang@gmail.com', 'Taipei, Taiwan', 'soso123', 'U');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`empleado_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `empleado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
