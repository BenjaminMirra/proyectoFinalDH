CREATE DATABASE  IF NOT EXISTS `digital_booking_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `digital_booking_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: digital_booking_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caracteristicas`
--

DROP TABLE IF EXISTS `caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristicas` (
  `id` bigint NOT NULL,
  `nombre_icono` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `producto_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK23mm31y8xysj01vd7um1v4moe` (`producto_id`),
  CONSTRAINT `FK23mm31y8xysj01vd7um1v4moe` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caracteristicas_sequence`
--

DROP TABLE IF EXISTS `caracteristicas_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristicas_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas_sequence`
--

LOCK TABLES `caracteristicas_sequence` WRITE;
/*!40000 ALTER TABLE `caracteristicas_sequence` DISABLE KEYS */;
INSERT INTO `caracteristicas_sequence` VALUES (1);
/*!40000 ALTER TABLE `caracteristicas_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_sequence`
--

DROP TABLE IF EXISTS `categoria_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_sequence`
--

LOCK TABLES `categoria_sequence` WRITE;
/*!40000 ALTER TABLE `categoria_sequence` DISABLE KEYS */;
INSERT INTO `categoria_sequence` VALUES (5);
/*!40000 ALTER TABLE `categoria_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` bigint NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `url_imagen` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Descripcion','Hoteles','http://urlImagen'),(2,'Descripcion','Hosteles','http://urlImagen'),(3,'Descripcion','Departamentos','http://urlImagen'),(4,'Descripcion','Bed & Breakfast','http://urlImagen');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudad_sequence`
--

DROP TABLE IF EXISTS `ciudad_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudad_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad_sequence`
--

LOCK TABLES `ciudad_sequence` WRITE;
/*!40000 ALTER TABLE `ciudad_sequence` DISABLE KEYS */;
INSERT INTO `ciudad_sequence` VALUES (5);
/*!40000 ALTER TABLE `ciudad_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `id` bigint NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,'San Carlos de Bariloche','Argentina','Rio Negro'),(2,'Buenos Aires','Argentina','Mendoza'),(3,'Mendoza','Argentina','Mendoza'),(4,'Córdoba','Argentina','Córdoba');
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id` bigint NOT NULL,
  `titulo_img_producto` varchar(255) DEFAULT NULL,
  `url_img_producto` varchar(500) DEFAULT NULL,
  `producto_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhylof04iou23s0pb9ab6pbd4j` (`producto_id`),
  CONSTRAINT `FKhylof04iou23s0pb9ab6pbd4j` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_sequence`
--

DROP TABLE IF EXISTS `imagenes_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_sequence`
--

LOCK TABLES `imagenes_sequence` WRITE;
/*!40000 ALTER TABLE `imagenes_sequence` DISABLE KEYS */;
INSERT INTO `imagenes_sequence` VALUES (1);
/*!40000 ALTER TABLE `imagenes_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `politica_sequence`
--

DROP TABLE IF EXISTS `politica_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `politica_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `politica_sequence`
--

LOCK TABLES `politica_sequence` WRITE;
/*!40000 ALTER TABLE `politica_sequence` DISABLE KEYS */;
INSERT INTO `politica_sequence` VALUES (1);
/*!40000 ALTER TABLE `politica_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `politicas`
--

DROP TABLE IF EXISTS `politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `politicas` (
  `id` bigint NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `producto_id` bigint NOT NULL,
  `tipo_politica_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjuyb8w76dm4e3w0f1s71fu2k7` (`producto_id`),
  KEY `FKjygub1oc15b9hxjn3lcqpg64o` (`tipo_politica_id`),
  CONSTRAINT `FKjuyb8w76dm4e3w0f1s71fu2k7` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `FKjygub1oc15b9hxjn3lcqpg64o` FOREIGN KEY (`tipo_politica_id`) REFERENCES `tipo_de_politcas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `politicas`
--

LOCK TABLES `politicas` WRITE;
/*!40000 ALTER TABLE `politicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_sequence`
--

DROP TABLE IF EXISTS `producto_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_sequence`
--

LOCK TABLES `producto_sequence` WRITE;
/*!40000 ALTER TABLE `producto_sequence` DISABLE KEYS */;
INSERT INTO `producto_sequence` VALUES (1);
/*!40000 ALTER TABLE `producto_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `rating` int,
  `titulo` varchar(255) DEFAULT NULL,
  `titulo_descripcion` varchar(255) DEFAULT NULL,
  `categoria_id` bigint NOT NULL,
  `ciudad_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2fwq10nwymfv7fumctxt9vpgb` (`categoria_id`),
  KEY `FK2n66ase94bg4q6j56jdm4nj17` (`ciudad_id`),
  CONSTRAINT `FK2fwq10nwymfv7fumctxt9vpgb` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `FK2n66ase94bg4q6j56jdm4nj17` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudades` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva_sequence`
--

DROP TABLE IF EXISTS `reserva_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva_sequence`
--

LOCK TABLES `reserva_sequence` WRITE;
/*!40000 ALTER TABLE `reserva_sequence` DISABLE KEYS */;
INSERT INTO `reserva_sequence` VALUES (1);
/*!40000 ALTER TABLE `reserva_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `id` bigint NOT NULL,
  `fecha_fin_reserva` datetime(6) DEFAULT NULL,
  `fecha_inicio_reserva` datetime(6) DEFAULT NULL,
  `producto_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKemr5mamcwq9ui20y08devm32q` (`producto_id`),
  CONSTRAINT `FKemr5mamcwq9ui20y08devm32q` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_de_politcas`
--

DROP TABLE IF EXISTS `tipo_de_politcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_de_politcas` (
  `id` bigint NOT NULL,
  `nombre_tipo_politica` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_de_politcas`
--

LOCK TABLES `tipo_de_politcas` WRITE;
/*!40000 ALTER TABLE `tipo_de_politcas` DISABLE KEYS */;
INSERT INTO `tipo_de_politcas` VALUES (1,'normas'),(2,'seguridad'),(3,'cancelacion');
/*!40000 ALTER TABLE `tipo_de_politcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tp_sequence`
--

DROP TABLE IF EXISTS `tp_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tp_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tp_sequence`
--

LOCK TABLES `tp_sequence` WRITE;
/*!40000 ALTER TABLE `tp_sequence` DISABLE KEYS */;
INSERT INTO `tp_sequence` VALUES (4);
/*!40000 ALTER TABLE `tp_sequence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-02 11:49:57
