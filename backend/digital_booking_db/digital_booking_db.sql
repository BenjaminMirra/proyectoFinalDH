CREATE DATABASE  IF NOT EXISTS `digital_booking_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `digital_booking_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES (1,'airConditioner','Aire Acondicionado',1),(2,'swim','Piscina',1),(3,'wifi','Wifi',1),(4,'gym','Gimnasio',1),(5,'cajaFuerte','Caja Fuerte',1),(6,'reception','Recepción 24 Horas',1),(7,'airConditioner','Aire Acondicionado',2),(8,'gym','Gimnasio',2),(9,'wifi','Wifi',2),(10,'television','Television',2),(11,'pool','Pool',2),(12,'reception','Recepción 24 Horas',2),(13,'airConditioner','Aire Acondicionado',3),(14,'bano','Baño Privado',3),(15,'wifi','Wifi',3),(16,'television','Television',3),(17,'lift','Ascensores',3),(18,'reception','Recepción 24 Horas',3),(19,'airConditioner','Aire Acondicionado',4),(20,'bano','Baño Privado',4),(21,'wifi','Wifi',4),(22,'television','Television',4),(23,'lift','Ascensores',4),(24,'reception','Recepción 24 Horas',4),(25,'airConditioner','Aire Acondicionado',5),(26,'gym','Gimnasio',5),(27,'wifi','Wifi',5),(28,'television','Television',5),(29,'swim','Piscina',5),(30,'reception','Recepción 24 Horas',5),(31,'airConditioner','Aire Acondicionado',6),(32,'gym','Gimnasio',6),(33,'wifi','Wifi',6),(34,'television','Television',6),(35,'swim','Piscina',6),(36,'spa','Spa',6),(37,'airConditioner','Aire Acondicionado',7),(38,'calefaccion','Calefacción',7),(39,'wifi','Wifi',7),(40,'television','Television',7),(41,'limpieza','Servicio de Limpieza',7),(42,'reception','Recepción 24 Horas',7),(43,'airConditioner','Aire Acondicionado',8),(44,'calefaccion','Calefacción',8),(45,'wifi','Wifi',8),(46,'television','Television',8),(47,'swim','Piscina',8),(48,'reception','Recepción 24 Horas',8),(49,'limpieza','Servicio de Limpieza',9),(50,'jardin','Jardín',9),(51,'wifi','Wifi',9),(52,'television','TV por Cable',9),(53,'kitchen','Cocina',9),(54,'bar','Bar',9),(55,'parking','Parking',9),(56,'jardin','Jardín',10),(57,'wifi','Wifi',10),(58,'reception','Repción 24 horas',10),(59,'bano','Baño',10),(60,'bar','Bar',10),(61,'limpieza','Servicio de Limpieza',10),(62,'limpieza','Servicio de Limpieza',11),(63,'bar','Bar',11),(64,'calefaccion','Calefacción',11),(65,'television','TV por Cable',11),(66,'wifi','Wifi',11),(67,'bano','Baño Privado',11),(68,'limpieza','Servicio de Limpieza',12),(69,'bar','Bar',12),(70,'wifi','Wifi',12),(71,'bano','Baño Privado',12),(72,'television','TV por Cable',12),(73,'kitchen','Cocina',12),(74,'reception','Repción 24 horas',12),(75,'jardin','Jardín',13),(76,'wifi','Wifi',13),(77,'television','TV por Cable',13),(78,'kitchen','Cocina',13),(79,'cajaFuerte','Caja fuerte',14),(80,'jardin','Jardín',14),(81,'wifi','Wifi',14),(82,'television','TV por Cable',14),(83,'kitchen','Cocina',14),(84,'reception','Recepción 24 horas',14),(85,'bar','Bar 24 horas',14),(86,'cajaFuerte','Caja fuerte',15),(87,'reception','Reception',15),(88,'pool','Mesa de Pool',15),(89,'wifi','Wifi',15),(90,'television','TV por Cable',15),(91,'bar','Bar',15),(92,'bano','Baño Privado',15),(93,'limpieza','Servicio de Limpieza',16),(94,'reception','Recepción',16),(95,'wifi','Wifi',16),(96,'television','TV por Cable',16),(97,'bar','Bar',16),(98,'airConditioner','Aire Acondicionado',17),(99,'wifi','Wifi',17),(100,'television','TV por Cable',17),(101,'kitchen','Cocina',17),(102,'wifi','Wifi',18),(103,'airConditioner','Aire Acondicionado',18),(104,'lift','Ascensor',18),(105,'kitchen','Cocina',18),(106,'television','TV por Cable',18),(107,'wifi','Wifi',19),(108,'television','TV por Cable',19),(109,'airConditioner','Aire Acondicionado',19),(110,'limpieza','Servicio de Limpieza',19),(111,'kitchen','Cocina',19),(112,'limpieza','Servicio de Limpieza',20),(113,'jardin','Jardín',20),(114,'wifi','Wifi',20),(115,'television','TV por Cable',20),(116,'kitchen','Cocina',20),(117,'kitchen','Cocina',21),(118,'wifi','Wifi',21),(119,'lift','Ascensores',21),(120,'television','TV por Cable',21),(121,'airConditioner','Aire Acondicionado',21),(122,'seguridad','Seguridad 24 Horas',22),(123,'jardin','Jardín',22),(124,'lift','Ascensores',22),(125,'airConditioner','Aire Acondicionado',22),(126,'wifi','Wifi',22),(127,'television','TV por Cable',22),(128,'kitchen','Cocina',22),(129,'pool','Piscina',22),(130,'wifi','Wifi',23),(131,'television','TV por Cable',23),(132,'kitchen','Cocina',23),(133,'swim','Piscina',23),(134,'lift','Ascensores',23),(135,'wifi','Wifi',24),(136,'television','TV por Cable',24),(137,'kitchen','Cocina',24),(138,'swim','Piscina',24),(139,'jardin','Jardin',24),(140,'wifi','Wifi',25),(141,'television','TV por Cable',25),(142,'jardin','Jardín',25),(143,'wifi','Wifi',26),(144,'television','TV por Cable',26),(145,'bar','Bar',26),(146,'calefaccion','Calefacción',26),(147,'bano','Baño Privado',26),(148,'wifi','Wifi',27),(149,'television','TV por Cable',27),(150,'jardin','Jardin',27),(151,'wifi','Wifi',28),(152,'television','TV por Cable',28),(153,'airConditioner','Aire Acondicionado',28),(154,'wifi','Wifi',29),(155,'television','TV por Cable',29),(156,'airConditioner','Aire Acondicionado',29),(157,'wifi','Wifi',30),(158,'television','TV por Cable',30),(159,'cajaFuerte','Caja Fuerte',30),(160,'cocina','Cocina',30),(161,'bano','Baño Privado',30),(162,'reception','Recepción',30),(163,'limpieza','Servicio de Limpieza',31),(164,'bano','Baño Privado',31),(165,'wifi','Wifi',31),(166,'television','TV por Cable',31),(167,'wifi','Wifi',32),(168,'television','TV por Cable',32),(169,'cocina','Cocina',32),(170,'bano','Baño Público',32);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas_sequence`
--

LOCK TABLES `caracteristicas_sequence` WRITE;
/*!40000 ALTER TABLE `caracteristicas_sequence` DISABLE KEYS */;
INSERT INTO `caracteristicas_sequence` VALUES (171);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_sequence`
--

LOCK TABLES `categoria_sequence` WRITE;
/*!40000 ALTER TABLE `categoria_sequence` DISABLE KEYS */;
INSERT INTO `categoria_sequence` VALUES (1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'descripcion','Hoteles','https://img-g2.s3.amazonaws.com/categorias/01-Hotel.jpeg'),(2,'descripcion','Hostels','https://img-g2.s3.amazonaws.com/categorias/02-Hostel.webp'),(3,'descripcion','Departamentos','https://img-g2.s3.amazonaws.com/categorias/03-Departamentos.jpeg'),(4,'descripcion','Bed & Breakfast','https://img-g2.s3.amazonaws.com/categorias/04-B_B.jpeg');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad_sequence`
--

LOCK TABLES `ciudad_sequence` WRITE;
/*!40000 ALTER TABLE `ciudad_sequence` DISABLE KEYS */;
INSERT INTO `ciudad_sequence` VALUES (1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,'San Carlos de Bariloche','Argentina','Rio Negro'),(2,'Buenos Aires','Argentina','Buenos Aires'),(3,'Mendoza','Argentina','Mendoza'),(4,'Córdoba','Argentina','Córdoba');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'Vista de camas y lago Nahuel Huapi desde habitación','https://img-g2.s3.amazonaws.com/productos/001-001.jpg',1),(2,'Piscina del hotel','https://img-g2.s3.amazonaws.com/productos/001-002.jpg',1),(3,'Living con hogar en espacio común del hotel','https://img-g2.s3.amazonaws.com/productos/001-003.jpg',1),(4,'Desayuno completo','https://img-g2.s3.amazonaws.com/productos/001-004.jpg',1),(5,'Vista del lago Nahuel Huapi desde la habitación','https://img-g2.s3.amazonaws.com/productos/001-005.jpg',1),(6,'Vista de camas y playa desde habitación','https://img-g2.s3.amazonaws.com/productos/002-001.jpg',2),(7,'Comedor del hotel con excelente vista a las montañas','https://img-g2.s3.amazonaws.com/productos/002-002.jpg',2),(8,'Desayuno completo','https://img-g2.s3.amazonaws.com/productos/002-003.jpg',2),(9,'Bar del hotel','https://img-g2.s3.amazonaws.com/productos/002-004.jpg',2),(10,'Vista de camas y jardín del hotel desde habitación','https://img-g2.s3.amazonaws.com/productos/002-005.jpg',2),(11,'Vista de camas y de la ciudad desde habitación','https://img-g2.s3.amazonaws.com/productos/003-001.jpg',3),(12,'Vista de camas y del obelisco desde habitación','https://img-g2.s3.amazonaws.com/productos/003-002.jpg',3),(13,'Desayuno completo','https://img-g2.s3.amazonaws.com/productos/003-003.jpg',3),(14,'Recepción del hotel','https://img-g2.s3.amazonaws.com/productos/003-004.jpg',3),(15,'Balcón con vista a la ciudad','https://img-g2.s3.amazonaws.com/productos/003-005.jpg',3),(16,'Habitación doble','https://img-g2.s3.amazonaws.com/productos/004-001.jpg',4),(17,'Recepción y sala común','https://img-g2.s3.amazonaws.com/productos/004-002.jpg',4),(18,'Habitación doble estándar','https://img-g2.s3.amazonaws.com/productos/004-003.jpg',4),(19,'Ascensor y vestíbulo del hotel','https://img-g2.s3.amazonaws.com/productos/004-004.jpg',4),(20,'Baño habitación','https://img-g2.s3.amazonaws.com/productos/004-005.jpg',4),(21,'Habitación doble','https://img-g2.s3.amazonaws.com/productos/005-001.jpg',5),(22,'Living del hotel y sala común','https://img-g2.s3.amazonaws.com/productos/005-002.jpg',5),(23,'Pileta del hotel','https://img-g2.s3.amazonaws.com/productos/005-003.jpg',5),(24,'Ascensor y vestíbulo del hotel','https://img-g2.s3.amazonaws.com/productos/005-004.jpg',5),(25,'Habitación con living','https://img-g2.s3.amazonaws.com/productos/005-005.jpg',5),(26,'Habitación doble','https://img-g2.s3.amazonaws.com/productos/006-001.jpg',6),(27,'Bar del hotel','https://img-g2.s3.amazonaws.com/productos/006-002.jpg',6),(28,'Pileta del hotel','https://img-g2.s3.amazonaws.com/productos/006-003.jpg',6),(29,'Recepción y vestíbulo del hotel','https://img-g2.s3.amazonaws.com/productos/006-004.jpg',6),(30,'Habitación doble','https://img-g2.s3.amazonaws.com/productos/006-005.jpg',6),(31,'Habitación triple','https://img-g2.s3.amazonaws.com/productos/007-001.jpg',7),(32,'Comedor del hotel','https://img-g2.s3.amazonaws.com/productos/007-002.jpg',7),(33,'Living del hotel','https://img-g2.s3.amazonaws.com/productos/007-003.jpg',7),(34,'Habitación triple estándar','https://img-g2.s3.amazonaws.com/productos/007-004.jpg',7),(35,'Suite del hotel','https://img-g2.s3.amazonaws.com/productos/007-005.jpg',7),(36,'Habitación doble','https://img-g2.s3.amazonaws.com/productos/008-001.jpg',8),(37,'Comedor del hotel','https://img-g2.s3.amazonaws.com/productos/008-002.jpg',8),(38,'Desayuno del hotel','https://img-g2.s3.amazonaws.com/productos/008-003.jpg',8),(39,'Habitación estándar','https://img-g2.s3.amazonaws.com/productos/008-004.jpg',8),(40,'Piscina del hotel','https://img-g2.s3.amazonaws.com/productos/008-005.jpg',8),(41,'Valhalla Portada','https://img-g2.s3.amazonaws.com/productos/009-001.jpg',9),(42,'Valhalla Habitación 1','https://img-g2.s3.amazonaws.com/productos/009-002.jpg',9),(43,'Valhalla Habitación 2','https://img-g2.s3.amazonaws.com/productos/009-003.jpg',9),(44,'Valhalla Bar','https://img-g2.s3.amazonaws.com/productos/009-004.jpg',9),(45,'Valhalla Habitación 3','https://img-g2.s3.amazonaws.com/productos/009-005.jpg',9),(46,'Moving Hostel Travel Bar Portada','https://img-g2.s3.amazonaws.com/productos/010-001.jpg',10),(47,'Moving Hostel Travel Bar Habitación','https://img-g2.s3.amazonaws.com/productos/010-002.jpg',10),(48,'Moving Hostel Travel Bar Mesa de Pool','https://img-g2.s3.amazonaws.com/productos/010-003.jpg',10),(49,'Moving Hostel Travel Bar Estar','https://img-g2.s3.amazonaws.com/productos/010-004.jpg',10),(50,'Moving Hostel Travel Bar Bar','https://img-g2.s3.amazonaws.com/productos/010-005.jpg',10),(51,'LOPEZ Hostel & Suites Portada','https://img-g2.s3.amazonaws.com/productos/011-001.jpg',11),(52,'LOPEZ Hostel & Suites Habitación','https://img-g2.s3.amazonaws.com/productos/011-002.jpg',11),(53,'LOPEZ Hostel & Suites Estar','https://img-g2.s3.amazonaws.com/productos/011-003.jpg',11),(54,'LOPEZ Hostel & Suites Vista','https://img-g2.s3.amazonaws.com/productos/011-004.jpg',11),(55,'LOPEZ Hostel & Suites Bar','https://img-g2.s3.amazonaws.com/productos/011-005.jpg',11),(56,'Malevo Murana Hostel Portada','https://img-g2.s3.amazonaws.com/productos/012-001.jpg',12),(57,'Malevo Murana Hostel Baño','https://img-g2.s3.amazonaws.com/productos/012-002.jpg',12),(58,'Malevo Murana Hostel Exterior','https://img-g2.s3.amazonaws.com/productos/012-003.jpg',12),(59,'Malevo Murana Hostel Recepción','https://img-g2.s3.amazonaws.com/productos/012-004.jpg',12),(60,'Malevo Murana Hostel Bar','https://img-g2.s3.amazonaws.com/productos/012-005.jpg',12),(61,'Piuke Mapu Patagonia Hostel Portada','https://img-g2.s3.amazonaws.com/productos/013-001.jpg',13),(62,'Piuke Mapu Patagonia Hostel Cocina','https://img-g2.s3.amazonaws.com/productos/013-002.jpg',13),(63,'Piuke Mapu Patagonia Hostel Estar','https://img-g2.s3.amazonaws.com/productos/013-002.jpg',13),(64,'Piuke Mapu Patagonia Hostel Exterior','https://img-g2.s3.amazonaws.com/productos/013-004.jpg',13),(65,'Piuke Mapu Patagonia Hostel Vista','https://img-g2.s3.amazonaws.com/productos/013-005.jpg',13),(66,'Hostel El Mirador Portada','https://img-g2.s3.amazonaws.com/productos/014-001.jpg',14),(67,'Hostel El Mirador Estar','https://img-g2.s3.amazonaws.com/productos/014-002.jpg',14),(68,'Hostel El Mirador Bar','https://img-g2.s3.amazonaws.com/productos/014-003.jpg',14),(69,'Hostel El Mirador Recepción','https://img-g2.s3.amazonaws.com/productos/014-004.jpg',14),(70,'Hostel El Mirador Exterior','https://img-g2.s3.amazonaws.com/productos/014-005.jpg',14),(71,'Hostel Alvear Portada','https://img-g2.s3.amazonaws.com/productos/015-001.jpg',15),(72,'Hostel Alvear Bar','https://img-g2.s3.amazonaws.com/productos/015-002.jpg',15),(73,'Hostel Alvear Estar','https://img-g2.s3.amazonaws.com/productos/015-003.jpg',15),(74,'Hostel Alvear Habitación','https://img-g2.s3.amazonaws.com/productos/015-004.jpg',15),(75,'Hostel Alvear Baño Privado','https://img-g2.s3.amazonaws.com/productos/015-005.jpg',15),(76,'Go Hostel Portada','https://img-g2.s3.amazonaws.com/productos/016-001.jpg',16),(77,'Go Hostel Estar','https://img-g2.s3.amazonaws.com/productos/016-002.jpg',16),(78,'Go Hostel Habitación 1','https://img-g2.s3.amazonaws.com/productos/016-003.jpg',16),(79,'Go Hostel Habitación 2','https://img-g2.s3.amazonaws.com/productos/016-004.jpg',16),(80,'Go Hostel Comedor','https://img-g2.s3.amazonaws.com/productos/016-005.jpg',16),(81,'Monoambiente en San Telmo Portada','https://img-g2.s3.amazonaws.com/productos/017-001.jpeg',17),(82,'Monoambiente en San Telmo Comedor','https://img-g2.s3.amazonaws.com/productos/017-002.jpeg',17),(83,'Monoambiente en San Telmo Baño','https://img-g2.s3.amazonaws.com/productos/017-003.jpeg',17),(84,'Monoambiente en San Telmo Cocina','https://img-g2.s3.amazonaws.com/productos/017-004.jpeg',17),(85,'Monoambiente en San Telmo Placard','https://img-g2.s3.amazonaws.com/productos/017-005.jpeg',17),(86,'Estudio en Palermo Portada','https://img-g2.s3.amazonaws.com/productos/018-001.jpeg',18),(87,'Estudio en Palermo Habitación','https://img-g2.s3.amazonaws.com/productos/018-002.jpeg',18),(88,'Estudio en Palermo Cocina','https://img-g2.s3.amazonaws.com/productos/018-003.jpeg',18),(89,'Estudio en Palermo Balcón','https://img-g2.s3.amazonaws.com/productos/018-004.jpeg',18),(90,'Estudio en Palermo Baño','https://img-g2.s3.amazonaws.com/productos/018-005.jpeg',18),(91,'Terrazas del Lago Portada','https://img-g2.s3.amazonaws.com/productos/019-001.jpeg',19),(92,'Terrazas del Lago Cocina','https://img-g2.s3.amazonaws.com/productos/019-002.jpeg',19),(93,'Terrazas del Lago Estar','https://img-g2.s3.amazonaws.com/productos/019-003.jpeg',19),(94,'Terrazas del Lago Vista','https://img-g2.s3.amazonaws.com/productos/019-004.jpeg',19),(95,'Terrazas del Lago Habitacion','https://img-g2.s3.amazonaws.com/productos/019-005.jpeg',19),(96,'Espacio Patagonia Portada','https://img-g2.s3.amazonaws.com/productos/020-001.jpeg',20),(97,'Espacio Patagonia Estar','https://img-g2.s3.amazonaws.com/productos/020-002.jpeg',20),(98,'Espacio Patagonia Cocina','https://img-g2.s3.amazonaws.com/productos/020-003.jpeg',20),(99,'Espacio Patagonia Baño','https://img-g2.s3.amazonaws.com/productos/020-004.jpeg',20),(100,'Espacio Patagonia Exterior','https://img-g2.s3.amazonaws.com/productos/020-005.jpeg',20),(101,'Caminos del Vino Apartments Portada','https://img-g2.s3.amazonaws.com/productos/021-001.jpeg',21),(102,'Caminos del Vino Apartments Estar','https://img-g2.s3.amazonaws.com/productos/021-002.jpeg',21),(103,'Caminos del Vino Apartments Habitación','https://img-g2.s3.amazonaws.com/productos/021-003.jpeg',21),(104,'Caminos del Vino Apartments Zona de Parilla','https://img-g2.s3.amazonaws.com/productos/021-004.jpeg',21),(105,'Caminos del Vino Apartments Baño','https://img-g2.s3.amazonaws.com/productos/021-005.jpeg',21),(106,'Soltigua Apart Mendoza Portada','https://img-g2.s3.amazonaws.com/productos/022-001.jpeg',22),(107,'Soltigua Apart Mendoza Patio','https://img-g2.s3.amazonaws.com/productos/022-002.jpeg',22),(108,'Soltigua Apart Mendoza Estar','https://img-g2.s3.amazonaws.com/productos/022-003.jpeg',22),(109,'Soltigua Apart Mendoza Baño','https://img-g2.s3.amazonaws.com/productos/022-004.jpeg',22),(110,'Soltigua Apart Mendoza Piscina','https://img-g2.s3.amazonaws.com/productos/022-005.jpeg',22),(111,'Vilaut Smart Flat Portada','https://img-g2.s3.amazonaws.com/productos/023-001.jpeg',23),(112,'Vilaut Smart Flat Habitacion 2 Camas','https://img-g2.s3.amazonaws.com/productos/023-002.jpeg',23),(113,'Vilaut Smart Flat Habitación Cama Doble','https://img-g2.s3.amazonaws.com/productos/023-003.jpeg',23),(114,'Vilaut Smart Flat Cocina','https://img-g2.s3.amazonaws.com/productos/023-004.jpeg',23),(115,'Vilaut Smart Flat Balcón','https://img-g2.s3.amazonaws.com/productos/023-005.jpeg',23),(116,'Loft con Terraza Portada','https://img-g2.s3.amazonaws.com/productos/024-001.jpeg',24),(117,'Loft con Terraza Habitacion','https://img-g2.s3.amazonaws.com/productos/024-002.jpeg',24),(118,'Loft con Terraza Baño','https://img-g2.s3.amazonaws.com/productos/024-003.jpeg',24),(119,'Loft con Terraza Piscina','https://img-g2.s3.amazonaws.com/productos/024-004.jpeg',24),(120,'Loft con Terraza Cocina','https://img-g2.s3.amazonaws.com/productos/024-005.jpeg',24),(121,'La Malinka Bed & Breakfast Portada','https://img-g2.s3.amazonaws.com/productos/025-001.jpeg',25),(122,'La Malinka Bed & Breakfast Habitación','https://img-g2.s3.amazonaws.com/productos/025-002.jpeg',25),(123,'La Malinka Bed & Breakfast Desayuno','https://img-g2.s3.amazonaws.com/productos/025-003.jpeg',25),(124,'La Malinka Bed & Breakfast Areas Comunes','https://img-g2.s3.amazonaws.com/productos/025-004.jpeg',25),(125,'La Malinka Bed & Breakfast Habitación','https://img-g2.s3.amazonaws.com/productos/025-005.jpeg',25),(126,'Santa Rita Bed & Breakfast Portada','https://img-g2.s3.amazonaws.com/productos/026-001.jpeg',26),(127,'Santa Rita Bed & Breakfast Habitación','https://img-g2.s3.amazonaws.com/productos/026-002.jpeg',26),(128,'Santa Rita Bed & Breakfast Desayuno','https://img-g2.s3.amazonaws.com/productos/026-003.jpeg',26),(129,'Santa Rita Bed & Breakfast Areas Deck Al Lago','https://img-g2.s3.amazonaws.com/productos/026-004.jpeg',26),(130,'Santa Rita Bed & Breakfast Desayuno','https://img-g2.s3.amazonaws.com/productos/026-005.jpeg',26),(131,'Lina\'s Tango Guesthouse Portada','https://img-g2.s3.amazonaws.com/productos/027-001.jpeg',27),(132,'Lina\'s Tango Guesthouse Habitación','https://img-g2.s3.amazonaws.com/productos/027-002.jpeg',27),(133,'Lina\'s Tango Guesthouse Desayuno','https://img-g2.s3.amazonaws.com/productos/027-003.jpeg',27),(134,'Lina\'s Tango Guesthouse Baño Compartido ','https://img-g2.s3.amazonaws.com/productos/027-004.jpeg',27),(135,'Lina\'s Tango Guesthouse Patio','https://img-g2.s3.amazonaws.com/productos/027-005.jpeg',27),(136,'Posada Gotan Portada','https://img-g2.s3.amazonaws.com/productos/028-001.jpeg',28),(137,'Posada Gotan Desayuno','https://img-g2.s3.amazonaws.com/productos/028-002.jpeg',28),(138,'Posada Gotan Habitación','https://img-g2.s3.amazonaws.com/productos/028-003.jpeg',28),(139,'Posada Gotan Comedor','https://img-g2.s3.amazonaws.com/productos/028-004.jpeg',28),(140,'Posada Gotan Patio','https://img-g2.s3.amazonaws.com/productos/028-005.jpeg',28),(141,'Refugio Padma Portada','https://img-g2.s3.amazonaws.com/productos/029-001.jpeg',29),(142,'Refugio Padma Habitación','https://img-g2.s3.amazonaws.com/productos/029-002.jpeg',29),(143,'Refugio Padma Desayuno','https://img-g2.s3.amazonaws.com/productos/029-003.jpeg',29),(144,'Refugio Padma Comedor','https://img-g2.s3.amazonaws.com/productos/029-004.jpeg',29),(145,'Refugio Padma Patio','https://img-g2.s3.amazonaws.com/productos/029-005.jpeg',29),(146,'Posada Chalet de Bassi Portada','https://img-g2.s3.amazonaws.com/productos/030-001.jpg',30),(147,'Posada Chalet de Bassi Estar','https://img-g2.s3.amazonaws.com/productos/030-002.jpg',30),(148,'Posada Chalet de Bassi Pileta','https://img-g2.s3.amazonaws.com/productos/030-003.jpg',30),(149,'Posada Chalet de Bassi Recepción','https://img-g2.s3.amazonaws.com/productos/030-004.jpg',30),(150,'Posada Chalet de Bassi Jardín','https://img-g2.s3.amazonaws.com/productos/030-005.jpg',30),(151,'Casa Woppa Portada','https://img-g2.s3.amazonaws.com/productos/031-001.jpg',31),(152,'Casa Woppa Habitación','https://img-g2.s3.amazonaws.com/productos/031-002.jpg',31),(153,'Casa Woppa Habitación','https://img-g2.s3.amazonaws.com/productos/031-003.jpg',31),(154,'Casa Woppa Baño','https://img-g2.s3.amazonaws.com/productos/031-004.jpg',31),(155,'Casa Woppa Estar','https://img-g2.s3.amazonaws.com/productos/031-005.jpg',31),(156,'B&B Joven casa Reggae Portada','https://img-g2.s3.amazonaws.com/productos/032-001.jpg',32),(157,'B&B Joven casa Reggae Exterior','https://img-g2.s3.amazonaws.com/productos/032-002.jpg',32),(158,'B&B Joven casa Reggae Estar','https://img-g2.s3.amazonaws.com/productos/032-003.jpg',32),(159,'B&B  Joven casa Reggae Comedor','https://img-g2.s3.amazonaws.com/productos/032-004.jpg',32),(160,'B&B Joven casa Reggae Cocina','https://img-g2.s3.amazonaws.com/productos/032-005.jpg',32);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_sequence`
--

LOCK TABLES `imagenes_sequence` WRITE;
/*!40000 ALTER TABLE `imagenes_sequence` DISABLE KEYS */;
INSERT INTO `imagenes_sequence` VALUES (161);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `politica_sequence`
--

LOCK TABLES `politica_sequence` WRITE;
/*!40000 ALTER TABLE `politica_sequence` DISABLE KEYS */;
INSERT INTO `politica_sequence` VALUES (261);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `politicas`
--

LOCK TABLES `politicas` WRITE;
/*!40000 ALTER TABLE `politicas` DISABLE KEYS */;
INSERT INTO `politicas` VALUES (1,'No fumar',1,1),(2,'Se permiten mascotas hasta 7 Kg',1,1),(3,'Check-in: 13:00 horas',1,1),(4,'Check-out: 10:00 horas',1,1),(5,'Detector de Monóxido de Carbono',1,2),(6,'Detector de humo',1,2),(7,'Se requiere utilizar barbijo en ascensores y areas comunes',1,2),(8,'Pago del costo de una noche por cancelar',1,3),(9,'No fumar',2,1),(10,'No se permiten fiestas',2,1),(11,'Check-in: 13:00 horas',2,1),(12,'Check-out: 11:00 horas',2,1),(13,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',2,2),(14,'Detector de humo',2,2),(15,'Seguridad 24 Horas',2,2),(16,'No reembolsable',2,3),(17,'No fumar',3,1),(18,'Se permiten mascotas',3,1),(19,'Check-in: 15:00 horas',3,1),(20,'Check-out: 12:00 horas',3,1),(21,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',3,2),(22,'Alarma',3,2),(23,'Seguridad 24 Horas',3,2),(24,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',3,3),(25,'No fumar',4,1),(26,'No se permiten mascotas',4,1),(27,'Check-in: 14:00 horas',4,1),(28,'Check-out: 11:00 horas',4,1),(29,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',4,2),(30,'Alarma',4,2),(31,'Seguridad 24 Horas',4,2),(32,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',4,3),(33,'No fumar',5,1),(34,'No se permiten mascotas',5,1),(35,'Check-in: 15:00 horas',5,1),(36,'Check-out: 11:00 horas',5,1),(37,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',5,2),(38,'Detector de humo',5,2),(39,'Alarma',5,2),(40,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',5,3),(41,'No fumar',6,1),(42,'Se permiten mascotas sin cargo extra',6,1),(43,'Check-in: 12:00 horas',6,1),(44,'Check-out: 10:00 horas',6,1),(45,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',6,2),(46,'Detector de humo',6,2),(47,'Detector de Monóxido de Carbono',6,2),(48,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',6,3),(49,'No fumar',7,1),(50,'Se permiten mascotas sin cargo extra',7,1),(51,'Check-in: 11:00 horas',7,1),(52,'Check-out: 10:00 horas',7,1),(53,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',7,2),(54,'Detector de humo',7,2),(55,'Detector de Monóxido de Carbono',7,2),(56,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',7,3),(57,'No fumar',8,1),(58,'Se permiten mascotas hasta 7 Kg',8,1),(59,'Check-in: 12:00 horas',8,1),(60,'Check-out: 10:00 horas',8,1),(61,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',8,2),(62,'Detector de humo',8,2),(63,'Detector de Monóxido de Carbono',8,2),(64,'No reembolsable',8,3),(65,'Check-in: 10:00',9,1),(66,'Check-out: 13:00',9,1),(67,'Se permiten mascotas',9,1),(68,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',9,2),(69,'Se permiten fiestas',9,2),(70,'Posee sistema de alarma',9,2),(71,'No se permite musica despues de las 01:00',9,2),(72,'Cancelación GRATIS hasta 30 días antes del comienzo de tu reserva.',9,3),(73,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',9,3),(74,'Check-in: 13:00',10,1),(75,'Check-out: 10:00',10,1),(76,'Esta prohibido fumar',10,1),(77,'No se permiten mascotas',10,1),(78,'Caja Fuerte en la habitación',10,2),(79,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',10,2),(80,'Se requiere utilizar barbijo en ascensores y areas comunes',10,2),(81,'Cancelación GRATIS hasta 20 días antes del comienzo de tu reserva.',10,3),(82,'Si cancelas con menos de 15 días de anticipación al comienzo de tu reserva abonarás como penalidad el 50% de la estadía.',10,3),(83,'Check-in: 14:00',11,1),(84,'Check-out: 10:00',11,1),(85,'No se permiten mascotas',11,1),(86,'No se permiten fiestas',11,1),(87,'Detector de Humo',11,2),(88,'Se requiere utilizar barbijo en ascensores y areas comunes',11,2),(89,'Caja Fuerte en Recepción',11,2),(90,'Posee sistema de alarma',11,2),(91,'Cancelación GRATIS hasta 10 días antes del comienzo de tu reserva.',11,3),(92,'No reembolsable',11,3),(93,'Check-in: 14:00',12,1),(94,'Check-out: 11:00',12,1),(95,'Esta prohibido fumar',12,1),(96,'No se permiten mascotas',12,1),(97,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',12,2),(98,'Se requiere utilizar barbijo en ascensores y areas comunes',12,2),(99,'Detector de Humo',12,2),(100,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',12,3),(101,'Check-in: 08:00',13,1),(102,'Check-out: 06:00',13,1),(103,'Se permiten mascotas',13,1),(104,'Caja Fuerte en la habitación',13,2),(105,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',13,2),(106,'Posee sistema de alarma',13,2),(107,'Seguridad 24 Horas',13,2),(108,'Cancelación GRATIS hasta 10 días antes del comienzo de tu reserva.',13,3),(109,'Pago del costo de una noche por cancelar.',13,3),(110,'Check-in: 14:30',14,1),(111,'Check-out: 10:00',14,1),(112,'Depósito de garantía: $2500 por noche',14,1),(113,'No se permiten menores',14,1),(114,'No se permiten mascotas',14,1),(115,'Detector de Monóxido de Carbono',14,2),(116,'Seguridad 24 horas',14,2),(117,'Posee sistema de alarma',14,2),(118,'Caja fuerte en la habitación',14,2),(119,'Cancelación GRATIS hasta 7 días antes del comienzo de tu reserva.',14,3),(120,'Check-in: 13:00',15,1),(121,'Check-out: 11:00',15,1),(122,'Esta prohibido fumar',15,1),(123,'Caja fuerte en Recepción',15,2),(124,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',15,2),(125,'Posee sistema de alarma',15,2),(126,'Cancelación GRATIS hasta 17 días antes del comienzo de tu reserva.',15,3),(127,'Check-in: 13:00',16,1),(128,'Check-out: 11:00',16,1),(129,'Esta prohibido fumar',16,1),(130,'Se permiten mascotas',16,1),(131,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',16,2),(132,'Se requiere utilizar barbijo en ascensores y areas comunes',16,2),(133,'Cancelación GRATIS hasta 10 días antes del comienzo de tu reserva.',16,3),(134,'Check-in: 15:00',17,1),(135,'Check-out: 10:00',17,1),(136,'Esta prohibido fumar',17,1),(137,'No se permiten mascotas',17,1),(138,'Se requiere utilizar barbijo en ascensores y areas comunes',17,2),(139,'Detector de Humo',17,2),(140,'Edificio con Seguridad 24 Hs',17,2),(141,'Cancelación GRATIS hasta 7 días antes del comienzo de tu reserva.',17,3),(142,'Si cancelas con menos de 7 días de anticipación al comienzo de tu reserva abonarás como penalidad el 50% de la estadía.',17,3),(143,'Check-in: 15:30',18,1),(144,'Check-out: 10:00',18,1),(145,'Detector de Humo',18,2),(146,'Detector de Monóxido de Carbono',18,2),(147,'Se permiten mascotas por un cargo extra de $750 por días',18,1),(148,'No se permite musica despues de las 23:00',18,1),(149,'No reembolsable',18,3),(150,'Check-in: 16:00',19,1),(151,'Check-out: 11:00',19,1),(152,'Detector de Monóxido de Carbono',19,2),(153,'No se permite fumar en el departamento',19,1),(154,'No se permite musica despues de las 23:00',19,1),(155,'Cancelación GRATIS hasta 2 días antes del comienzo de tu reserva.',19,3),(156,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',19,3),(157,'Check-in: 15:00',20,1),(158,'Check-out: 11:00',20,1),(159,'Esta prohibido fumar',20,1),(160,'Se permiten mascotas por un cargo extra de $750 por días',20,1),(161,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',20,2),(162,'Detector de Monóxido de Carbono',20,2),(163,'',20,2),(164,'Posee sistema de alarma',20,2),(165,'',20,2),(166,'Cancelación GRATIS hasta 7 días antes del comienzo de tu reserva.',20,3),(167,'Si cancelas con menos de 7 días de anticipación al comienzo de tu reserva abonarás como penalidad el valor de una noche.',20,3),(168,'Check-in: 15:30',21,1),(169,'Check-out: 11:00',21,1),(170,'Se requiere utilizar barbijo en ascensores y areas comunes',21,2),(171,'No se permite fumar en el departamento',21,1),(172,'No se permiten mascotas',21,1),(173,'No reembolsable',21,3),(174,'Check-in: 15:00',22,1),(175,'Check-out: 10:00',22,1),(176,'Esta prohibido fumar',22,1),(177,'No se permiten mascotas',22,1),(178,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',22,2),(179,'Se requiere utilizar barbijo en ascensores y areas comunes',22,2),(180,'Seguridad 24 Horas',22,2),(181,'Cancelación GRATIS hasta 2 días antes del comienzo de tu reserva.',22,3),(182,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',22,3),(183,'Check-in: 14:30',23,1),(184,'Check-out: 11:00 ',23,1),(185,'Esta prohibido fumar dentro del departamento y en las áreas comunes del edificio.',23,1),(186,'Se permiten mascotas hasta 7 Kg',23,1),(187,'Detector de Monóxido de Carbono',23,2),(188,'Seguridad 24 Horas',23,2),(189,'No reembolsable',23,3),(190,'Check-in: 16:00',24,1),(191,'Check-out: 11:00',24,1),(192,'Esta prohibido fumar',24,1),(193,'No se permiten mascotas',24,1),(194,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',24,2),(195,'Detector de Monóxido de Carbono',24,2),(196,'Seguridad 24 Horas',24,2),(197,'Cancelación GRATIS hasta 7 días antes del comienzo de tu reserva.',24,3),(198,'Si cancelas con menos de 7 días de anticipación al comienzo de tu reserva abonarás como penalidad el valor de una noche.',24,3),(199,'Check-in: 15:00',25,1),(200,'Check-out: 11:00',25,1),(201,'Desayuno incluido',25,1),(202,'Caja Fuerte en Recepción',25,2),(203,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',25,2),(204,'No se permite fumar en las habitaciones ni en la zonas comunes',25,1),(205,'No reembolsable',25,3),(206,'Check-in: 15:30',26,1),(207,'Check-out: 11:00',26,1),(208,'Desayuno incluido',26,1),(209,'Depósito de garantía: $1500 por estadía (Se requiere una tarjeta de crédito)',26,1),(210,'Cancelación GRATIS hasta 2 días antes del comienzo de tu reserva.',26,3),(211,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',26,3),(212,'No se permite fumar',26,1),(213,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',26,2),(214,'Check-in: 14:30',27,1),(215,'Check-out: 11:00',27,1),(216,'Desayuno incluido',27,1),(217,'No se permiten mascotas',27,1),(218,'No reembolsable',27,3),(219,'No se permite fumar dentro de las habitaciones ni areas comunes cubiertas',27,1),(220,'Esta permitido fumar en el patio',27,1),(221,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',27,2),(222,'Check-in: 15:00',28,1),(223,'Check-out: 11:00',28,1),(224,'Desayuno incluido',28,1),(225,'No se permiten mascotas',28,1),(226,'Cancelación GRATIS hasta 7 días antes del comienzo de tu reserva.',28,3),(227,'Si cancelas con menos de 7 días de anticipación al comienzo de tu reserva abonarás como penalidad el 50% de la estadía.',28,3),(228,'No esta permitido fumar',28,1),(229,'Caja Fuerte en Recepción',28,2),(230,'Detector de Monóxido de Carbono',28,2),(231,'Check-in: 15:00',29,1),(232,'Check-out: 11:00',29,1),(233,'Desayuno incluido',29,1),(234,'Se permiten mascotas sin cargo extra',29,1),(235,'Cancelación GRATIS hasta 7 días antes del comienzo de tu reserva.',29,3),(236,'Si cancelas con menos de 7 días de anticipación al comienzo de tu reserva abonarás como penalidad el 50% de la estadía.',29,3),(237,'No esta permitido fumar',29,1),(238,'Se requiere utilizar barbijo en ascensores y areas comunes',29,2),(239,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',29,2),(240,'Check-in: 13:00',30,1),(241,'Check-out: 12:00',30,1),(242,'No se permiten mascotas',30,1),(243,'Esta prohibido fumar',30,1),(244,'Caja Fuerte en la habitación',30,2),(245,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',30,2),(246,'No reembolsable',30,3),(247,'Check-in: 11:00',31,1),(248,'Check-out: 10:00',31,1),(249,'Se permiten mascotas',31,1),(250,'Detector de Humo',31,2),(251,'Se requiere utilizar barbijo en ascensores y areas comunes',31,2),(252,'Cancelación GRATIS hasta 5 días antes del comienzo de tu reserva.',31,3),(253,'Si cancelas con menos de 7 días de anticipación al comienzo de tu reserva abonarás como penalidad el 50% de la estadía.',31,3),(254,'Check-in: 07:30',32,1),(255,'Check-out: 11:00',32,1),(256,'Está permitido fumar',32,1),(257,'No se permiten mascotas',32,1),(258,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el Coronavirus',32,2),(259,'Cancelación GRATIS hasta 5 días antes del comienzo de tu reserva.',32,3),(260,'Si cancela antes de los 5 días del comienzo de la reserva se cobrará un 60% de la estadía.',32,3);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_sequence`
--

LOCK TABLES `producto_sequence` WRITE;
/*!40000 ALTER TABLE `producto_sequence` DISABLE KEYS */;
INSERT INTO `producto_sequence` VALUES (33);
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
  `descripcion` varchar(5000) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `titulo_descripcion` varchar(255) DEFAULT NULL,
  `categoria_id` bigint NOT NULL,
  `ciudad_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2fwq10nwymfv7fumctxt9vpgb` (`categoria_id`),
  KEY `FK2n66ase94bg4q6j56jdm4nj17` (`ciudad_id`),
  CONSTRAINT `FK2fwq10nwymfv7fumctxt9vpgb` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `FK2n66ase94bg4q6j56jdm4nj17` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudades` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Ofrece habitaciones con vistas al lago y a las montañas. Las habitaciones y las suites ocupan un edificio amplio y elegante y ofrecen vistas al lago o a la ciudad. Además, el hotel cuenta con una amplia variedad de actividades de ocio para toda la familia.\nEl restaurante La Cave sirve fondues de queso a pedido. El piano bar del vestíbulo propone cócteles, bebidas, carnes ahumadas de la Patagonia y una amplia selección de vinos de la bodega Zuccardi.\nEl personal del hotel organiza una amplia variedad de actividades de ocio en plena naturaleza, como ciclismo de montaña, equitación, pesca con mosca y paseos en kayak.','Av. San Martín, 536',-41.133473922619125,-71.3167240322848,'Hotel Panamericano Bariloche','Alojate al lado del majestuoso lago Nahuel Huapi',1,1),(2,'El Hotel Tres Reyes está ubicado en San Carlos de Bariloche, a 200 metros del Centro Cívico. Este hotel de 3 estrellas cuenta con recepción 24 horas y wifi gratis. Se halla a 12 km de la estación de esquí y del aeropuerto de San Carlos de Bariloche.\nAlgunas de las habitaciones del Hotel Tres Reyes tienen vistas al lago. Otras tienen vistas al jardín.Asimismo, las habitaciones del hotel están equipadas con TV de pantalla plana.\nEste hotel alberga un bar y se sirve un desayuno a diario.','Av. 12 de Octubre, 135',-41.1327728587614,-71.30776773485405,'Hotel Tres Reyes','Preparate para disfrutar estando a solo 3 minutos caminando de la playa',1,1),(3,'El Exe Hotel Colón se encuentra en el centro de Buenos Aires y ofrece elegantes suites con vistas al Obelisco. El alojamiento se encuentra a 300 metros del Teatro Colón, a 500 metros de la calle peatonal Florida.\nLas habitaciones disponen de aire acondicionado y TV de pantalla plana. Algunas habitaciones ofrecen vistas a la ciudad. Los alojamientos cuentan con baño privado con bañera.\nEl Exe Hotel Colon dispone de instalaciones modernas, gimnasio bien equipado, centro de negocios, servicios de conserjería y recepción 24 horas. El personal de la recepción, que habla español e inglés, ofrece información sobre la zona.','Carlos Pellegrini, 507',-34.602130866131375,-58.380866815266295,'Exe Hotel Colón','Alojate en el corazón de Buenos Aires',1,2),(4,'El Up Congreso Hotel ofrece habitaciones con aire acondicionado en el centro de Buenos Aires, a 700 metros del Palacio Barolo.\nEste hotel cuenta con mostrador de información turística. El alojamiento ofrece recepción 24 horas, servicio de conserjería y conexión wifi gratis en todo el alojamiento.\nTodas las habitaciones del hotel cuentan con armario, TV de pantalla plana y baño privado.','Calle Montevideo, 86',-34.607880519324205,-58.38938453060987,'Up Congreso Hotel','Alojate en el corazón de Buenos Aires',1,2),(5,'El Huentala Hotel está situado a solo 600 metros de la plaza de la Independencia y ofrece pileta, gimnasio, habitaciones elegantes con conexión de wifi gratis y TV por cable, restaurante y bebidas de bienvenida.\nLas habitaciones para no fumadores del Hotel Huentala presentan una decoración en tonos suaves y disponen de aire acondicionado y escritorio.\nEl Huentala Hotel se encuentra a 2,5 km del parque de San Martín y a 850 metros de la terminal de micros y ofrece recepción 24 horas.','Primitivo De La Reta, 1007',-32.89178474778404,-68.83809148832445,'Huentala Hotel','Alojate en el corazón de Mendoza',1,3),(6,'Este hotel está ubicado en Mendoza, a 100 metros del céntrico parque de la Independencia. Ofrece pileta al aire libre, gimnasio, wifi gratis y servicio de spa.El Nutibara está a 200 metros de la avenida de España, rodeado de cafés y lugares de ocio.\nLas habitaciones del Hotel Nutibara incluyen aire acondicionado, TV por cable y baño privado. Algunas tienen cortinas y muebles de época.\nSirve un completo desayuno buffet con mermeladas de la región, yogur y jugos naturales. El restaurante está revestido de madera y cuenta con vistosas lámparas de cristal.','Avenida Bartolomé Mitre, 867',-32.892025666284546,-68.84494834414502,'Hotel Nutibara','Alojate en el corazón de Mendoza',1,3),(7,'Situado en el centro de Córdoba, a 1 manzana del parque San Martín, el Cristal Hotel ofrece un alojamiento elegante y un práctico servicio de registro de salida después de lo habitual.\nEl hotel ofrece recepción 24 horas y conexión a internet por un adicional.Las habitaciones tienen aire acondicionado y calefacción. TV por cable y room service.\nEl Hotel Cristal se encuentra a 5 calles de la terminal de autobuses y a 11 km del aeropuerto Ambrosia L V Taravella.','Entre Rios, 58',-31.41840088641068,-64.18434633068803,'Gran Hotel Cristal','Preparate para vacacionar, alojate en la mejor zona de Córdoba',1,4),(8,'El Hotel Everest está situado en el centro de Córdoba, a solo 300 metros del centro cívico. Hay conexión wifi gratis.Todas las habitaciones están equipadas con TV LED de 32 pulgadas, aire acondicionado, teléfono y calefacción.\nLa recepción está abierta las 24 horas.\nEl Everest se encuentra a 200 metros de la estación Mitre y a 300 metros de la terminal de micros y la plaza San Martín. La plaza Sarmiento y el zoológico están a 600 metros.','San Jeronimo, 465',-31.418704012090224,-64.17832384603143,'Hotel Everest','Preparate para vacacionar, alojate en la mejor zona de Córdoba',1,4),(9,'Esta propiedad está a 3 minutos caminando de la playa. El Valhalla se encuentra en San Carlos de Bariloche, a 400 metros de la bodega Melipal, y cuenta con bar, estacionamiento privado gratuito, salón compartido y jardín. El alojamiento dispone de habitaciones familiares y alberga un parque infantil. Hay servicio de conserjería, cocina compartida y servicio de cambio de divisa.\nEl Valhalla tiene parrilla. Goza de una ubicación ideal para practicar esquí y ciclismo y presta servicio de alquiler de autos y equipos de esquí.\nEl Valhalla está a 4,3 km del centro cívico y a 8 km de la Bahía Serena. El aeropuerto de San Carlos de Bariloche, ubicado a 16 km, es el más cercano. Se facilita servicio de link con el aeropuerto por un adicional.','Calle Lanin, 3950',-41.12907809142439,-71.35533387588465,'Valhalla','El Valhalla está a 4,3 km del centro cívico y a 8 km de la Bahía Serena.',2,1),(10,'El Moving Hostel Travel Bar está situado a 100 metros del lago Nahuel Huapi, en San Carlos de Bariloche. Ofrece terraza con vistas al lago, habitaciones con conexión wifi gratis, bar, mesa de pool y un desayuno americano a diario.\nLas habitaciones del Moving Hostel Travel Bar son amplias y luminosas y disponen de suelo de baldosa y baño compartido.','Salta, 504',-41.13396300465648,-71.31701248725923,'Moving Hostel Travel Bar','Está a 19 km de la estación de esquí de Cerro Catedral y a 500 metros de la avenida Mitre.',2,1),(11,'El LOPEZ Hostel & Suites se encuentra en Buenos Aires y ofrece alojamiento solo para adultos con salón compartido, jardín y terraza. Hay servicio de conserjería, mostrador de información turística y wifi gratis en todas las instalaciones. El alojamiento ofrece cocina compartida, room service y cambio de divisa.\nTodos los alojamientos del hostel están equipados con zona de estar y TV por cable. Las habitaciones del LOPEZ Hostel & Suites están equipadas con ropa de cama y toallas.\nEl alojamiento sirve un desayuno continental o sin gluten.','Avenida Santa Fe, 5172',-34.57610733345634,-58.43288336213334,'LOPEZ Hostel & Suites','El LOPEZ Hostel & Suites se encuentra a 1 km de Bosques de Palermo y a 2,1 km del parque ecológico de Buenos Aires. ',2,2),(12,'El alojamiento Malevo Murana Hostel dispone de WiFi gratuita y parrilla, y se encuentra en Buenos Aires.\nEl hostel tiene bar, solárium y vistas al jardín. Algunas habitaciones ofrecen balcón o terraza, y hay TV de pantalla plana por cable.\nLas instalaciones incluyen recepción 24 horas, cocina compartida, salón común y tienda de regalos. Se puede jugar a los dardos en el hostel.','Pasaje Russel, 5050',-34.58721874158138,-58.42920706209278,'Malevo Murana Hostel','El Malevo Murana Hostel se halla a 200 metros de la plaza Serrano y a 1 km de la plaza Italia.',2,2),(13,'El Piuke Mapu Patagonia Hostel es un hostel acogedor y ecológico de Cholila con vistas panorámicas y una gran zona verde. Cuenta con su propio huerto ecológico y proporciona conexión wifi gratis en las zonas comunes.\nLas habitaciones del Piuke Mapu Patagonia Hostel presentan una decoración animada con detalles coloridos y todas incluyen baño compartido y vistas preciosas a las montañas de la Patagonia de los alrededores.\nLos huéspedes podrán preparar sus propios platos en la cocina bien equipada del alojamiento o relajarse en el salón compartido. También podrán disfrutar de una gran variedad de actividades tanto en el alojamiento como en los alrededores, entre las que se incluyen esquí, ciclismo y senderismo.','Av. Soberania Argentina, 200',-42.51426263823184,-71.434856685684,'Piuke Mapu Patagonia Hostel','El Piuke Mapu Patagonia Hostel proporciona estacionamiento gratuito y se encuentra a 50 km del aeropuerto de Esquel.',2,3),(14,'El alojamiento alberga una cafetería. Hay estacionamiento privado gratuito.\nAlgunas habitaciones tienen vistas a las montañas, al jardín o a la ciudad.\nEl Hostel El Mirador proporciona wifi gratis.Hay una cocina compartida con cestas para cada habitación.\nEste hostel sirve un desayuno casero.Este hostel cuenta con guardaesquíes y servicio de alquiler de autos y bicicletas. En la zona se pueden practicar diversas actividades, como snorkel y ciclismo.','Subida 3 Cipreses, 1237',-41.98337430103939,-71.50642493543239,'Hostel El Mirador','El Hostel El Mirador está situado en El Bolsón, en la región de Río Negro, a 3,7 km de la plaza Pagano, y cuenta con parrilla y terraza.',2,3),(15,'El Hostel Alvear ofrece alojamiento económico con conexión wifi gratis en el centro de Córdoba. El alojamiento alberga un jardín.\nLas habitaciones del Hostel Alvear son sencillas y cómodas. El baño es compartido. Dispone de terraza.\nEl alojamiento cuenta con cocina compartida y salón común. También hay una sala de juegos y una zona de estar al aire libre en el patio. La recepción está abierta las 24 horas y proporciona información útil sobre la zona. Los huéspedes pueden relajarse en la terraza con parrilla.','General Alvear, 158',-31.414899834003283,-64.18045221495782,'Hostel Alvear','El alojamiento se encuentra a 400 metros de la catedral de Córdoba y a 700 metros de la Manzana Jesuítica y del centro cívico.',2,4),(16,'El Go Hostel se ubica en Córdoba y ofrece wifi gratis, desayuno, salón común y 2 cocinas compartidas totalmente equipadas. Se encuentra a 2 km del centro comercial Patio Olmos.\nLas habitaciones del Go Hostel disponen de baño compartido.\nAdemás, el hostel cuenta con computadora, zona de parrilla y recepción 24 horas con consigna de equipaje.','Salta, 504',-31.409143003996405,-64.19715735728698,'Go Hostel','El Go Hostel se encuentra a 26 km del aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V. Taravella.',2,4),(17,'Departamento con aire acondicionado, cama de dos plazas, TV de pantalla plana y cocina.\nExcelente ubicación, a solo 1.6 km del estadio \'La Bombonera\' y a 1.9 km de la cafetería Tortoni.','Piedras 1391',-34.624846233644625,-58.376877093722435,'Charming Studio en San Telmo','Hermoso monoambiente en San Telmo para dos personas.',3,2),(18,'Alojamiento con aire acondicionado, terraza y wifi gratis. El departamento cuenta con 1 dormitorio, 1 baño, ropa de cama, toallas, TV de pantalla plana vía satélite, cocina totalmente equipada y balcón con vistas a la ciudad.\nLos lagos de Palermo se encuentran a 2 km del departamento, mientras que los jardines japoneses de Buenos Aires están a 2,1 km. El aeropuerto Jorge Newbery es el más cercano y está a 3 km del departamento.','Fray Justo María de Oro, 2462',-34.5798302,-58.4248698,'Cozy Studio en Palermo','Hospedate en la zona más linda de Buenos Aires!',3,2),(19,'Ubicado a solo 700 metros de la playa del Centenario y a menos de 1 km del centro cívico. Se encuentra a 12 km de la bahía Serena y ofrece un mostrador de información turística.\nEl departamento cuenta con 2 dormitorios, TV, cocina equipada con microondas y heladera y baño con bañera. Se proporcionan toallas y ropa de cama.\nEl departamento ofrece servicio de alquiler de equipos de esquí y bicicletas. En las inmediaciones se puede esquiar.','Francisco Pascasio Moreno, 750',-41.13554172963302,-71.29953950818944,'Terrazas del Lago','Departamento con wifi gratis y vistas al lago situado en San Carlos de Bariloche.',3,1),(20,'El departamento dispone de 1 dormitorio, TV de pantalla plana, lavarropas, baño con bidet y cocina equipada con microondas y heladera. \nEl alojamiento proporciona toallas y ropa de cama por un adicional.\nEl departamento está a 18 km del Circuito Chico y a 19 km del parque Nahuelito. El aeropuerto más cercano es el de San Carlos de Bariloche, ubicado a 13 km del Espacio Patagonia.','Alberti, 664',-41.137115832940104,-71.32257271756124,'Espacio Patagonia','Alojamiento con jardín y patio a unos 2,5 km de Melipal.',3,1),(21,'Este alojamiento ofrece wifi gratis, zona de parrilla y estacionamiento privado gratuito.\nTodos los alojamientos cuentan con zona de estar, TV de pantalla plana con canales por cable y baño privado con secador de pelo, bidet y ducha. \nLa cocina está equipada con microondas, heladera, fogones y hervidor de agua.\nEl departamento se encuentra a 6 km del parque O\'Higgins y de la plaza Independencia.\nEl aeropuerto internacional Gobernador Francisco Gabrielli es el más cercano y queda a 8 km del Caminos del Vino Apartments.','Federico Froebel, 3494',-32.899542247710954,-68.79598723862989,'Caminos del Vino Apartments','El lugar ideal desde donde recorrer los viñedos mendocinos.',3,3),(22,'Esta ubicado pocos pasos del centro de la ciudad y de numerosos restaurantes, y ofrece pileta de temporada al aire libre, solárium y zona de parrilla.\n El departamento cuenta con aire acondicionado, diversos tipos de camas, TV por cable y cocina.\n También ofrece wifi gratis y estacionamiento cubierto sin cargo.','Avenida Juan B. Justo, 626',-32.88353972057243,-68.85774422883499,'Soltigua Apart Mendoza','Moderno departamento en una tranquila zona residencial de Mendoza.',3,3),(23,'El Vilaut Smart Flat se encuentra en el centro comercial y financiero de Córdoba y cuenta con pileta al aire libre, centro de negocios y wifi gratis.\nLas habitaciones del Vilaut Smart Flat tienen zona de cocina, zona de comedor, baño privado y wifi gratis.\nLa plaza San Martín y la terminal de micros están a 400 metros, mientras que el aeropuerto Ingeniero Taravella queda a 8 km.','Corrientes, 207',-31.41950908045906,-64.1826228,'Vilaut Smart Flat','Una opción moderna en el corazón de Córdoba.',3,4),(24,'El establecimiento dispone de terraza, piscina exterior de temporada y jardín.\nSe encuentra en Córdoba, a 1 km de la Manzana Jesuítica, a 1,1 km del centro comercial Patio Olmos y a 1,8 km del centro cívico de Córdoba.\nOfrece WiFi gratuita y aparcamiento privado. Apartamento con aire acondicionado, 1 dormitorio, TV de pantalla plana y cocina con nevera. Se proporcionan toallas y ropa de cama.\nCerca del apartamento hay varios lugares de interés, como la plaza de la Música, el centro de exposiciones municipal Obispo Mercadillo y el Museo Histórico Provincial Marques de Sobremonte.\nEl aeropuerto más cercano es el aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V. Taravella, ubicado a 11 km del apartamento.','Av. Figueroa Alcorta, 320',-31.409561548111732,-64.19028981583816,'Loft con Terraza','Loft dúplex ejecutivo con gran balcón.',3,4),(25,'B&B La Malinka ofrece alojamiento con wifi gratis en San Carlos de Bariloche, a 5 km del centro cívico.\nEl alojamiento se encuentra a 8 km de la estación de esquí de Cerro Catedral y a 7 km de la bahía Serena. Lugares de interés como Circuito Chico y Llao Llao se encuentran a 17 km.\nLas habitaciones del B&B La Malinka tienen baño privado y vistas a las montañas y al lago.\nTodas las mañanas se sirve un desayuno continental, sin gluten o buffet.\nLa zona es ideal para practicar esquí.\nAdemás, esta posada proporciona servicio de alquiler de autos.','Av. Ezequiel Bustillo, 4788',-41.123078125181706,-71.36184285506685,'La Malinka Bed & Breakfast','Habitación con baño privado y desayuno a 1 minuto del lago',4,1),(26,'Santa Rita B&B está ubicada frente al lago de Nahuel Huapi, a 7 km del centro y a 12 km del cerro Catedral.\nLas habitaciones de la Hosteria Santa Rita cuentan con calefacción y baño privado.\nEl desayuno está incluido.\nEl alojamiento Santa Rita dispone de zona de playa privada, salón de té y bar.\nSe puede organizar un servicio de lavandería, así como excursiones de pesca y paseos por el parque nacional.La colina de Otho se encuentra a 10 minutos en auto. Se proporciona estacionamiento privado gratuito.','Av. Ezequiel Bustillo, 7200',-41.11952454231354,-71.38950780495423,'Santa Rita Bed & Breakfast','Habitaciones con vistas al lago con calefacción y wifi gratis',4,1),(27,'Esta casa típica ofrece habitaciones cómodas con baño privado o compartido a solo 200 metros de la avenida 9 de Julio.\nEl alojamiento se encuentra en el distrito histórico y bohemio de San Telmo y proporciona wifi gratis y desayuno todos los días. Además, se pueden reservar clases de tango.\nEl alojamiento Lina\'s Tango Guesthouse dispone de un patio con plantas y de una zona de estar al aire libre donde se puede servir el desayuno.\nEste hostal, atendido por su dueño, ofrece consigna de equipaje y recomendaciones locales para moverse por la zona.\nEl alojamiento Lina\'s está a 800 metros de la avenida de Mayo y del barrio de moda de Puerto Madero. Se encuentra a solo 700 metros de la reserva ecológica, una gran zona verde de la ciudad por la que se puede pasear y hacer ejercicio entre vegetación nativa.El aeropuerto Jorge Newbery queda a 8 km.','Estados Unidos, 780',-34.618576351270484,-58.37683122945199,'Lina\'s Tango Guesthouse','Descubrí Buenos Aires desde el corazón de San Telmo.',4,2),(28,'Este Bed & Breakfast se encuentra en una casa de finales del siglo XIX y ofrece alojamiento moderno que rodea un patio interior. Está a 300 metros de la plaza Martín Fierro de Buenos Aires y de la intersección San Juan y Boedo.El Gotan Posada está a 10 minutos en auto del Microcentro de Buenos Aires y de Puerto Madero, y a 45 minutos en auto del aeropuerto internacional de Ezeiza. El Gotan también ofrece servicio de transfer disponible a pedido.Las habitaciones del Posada Gotan están decoradas con suelo de terracota italiana y calefacción. Algunas de ellas cuentan con balcón privado o ventanas grandes con vistas al patio interior.El alojamiento sirve un desayuno continental al aire libre. Este desayuno incluye café, té, infusiones, chocolate caliente o mate, jugo de naranja, pan o cruasanes y mermelada casera. En el bar se sirven aperitivos y bebidas durante el día. También hay room service.','Sanchez de Loria, 1618',-34.62936506345596,-58.41166371349503,'Posada Gotan','Alojate en el mítico barrio de Boedo',4,2),(29,'El refugio ofrece pileta al aire libre, salón compartido, jardín, wifi gratis y vistas al jardín.\nOfrece estacionamiento privado gratuito y se encuentra a 1,3 km de la bodega Masiero Mauricio Y Duilio y a 1,7 km de la bodega Enrique Foster.\nEste bed and breakfast sirve un desayuno a la carta y vegetariano todas las mañanas.\nEl Refugio Padma cuenta con solárium.\nLa bodega Santa Ángela se encuentra a 3,1 km del alojamiento, mientras que la bodega Polo está a 3,2 km. El aeropuerto más cercano es el aeropuerto internacional Gobernador Francisco Gabrielli, ubicado a 20 km del Refugio Padma.','Los Aromos, 1182',-32.991664536577446,-68.87706059629578,'Refugio Padma','Contactate con la naturaleza en Ciudad Luján de Cuyo',4,3),(30,'La Posada Chalet de Bassi se encuentra en Godoy Cruz, en la provincia de Mendoza, a 7 km de Mendoza, y ofrece una pileta al aire libre y vistas a la pileta. Hay wifi gratis y estacionamiento privado gratuito.\nTodas las habitaciones incluyen TV por cable. Las habitaciones disponen de hervidor de agua. Todas las habitaciones tienen baño privado.\nLa recepción está abierta las 24 horas.\nEste bed and breakfast proporciona servicio de alquiler de autos.','Cervantes, 1795',-32.947306584759026,-68.84337793150053,'Posada Chalet de Bassi','La Posada Chalet de Bassi se encuentra a 32 km de Potrerillos y a 5 km de Chacras de Coria. El aeropuerto más cercano es el de El Plumerillo, situado a 14 km de la Posada Chalet de Bassi.',4,3),(31,'La Casa Woppa ofrece un solárium y vistas a la ciudad en Córdoba, provincia de Córdoba, a 300 metros del centro comercial Patio Olmos. Hay estacionamiento privado y WiFi gratis en todas las instalaciones.\nLas habitaciones tienen TV de pantalla plana, set de té y café y terraza o balcón. Incluyen un baño compartido con bañera.\nEl establecimiento alberga un salón compartido.','Ayacucho, 316',-31.418030552982685,-64.19115407573561,'Casa Woppa','La Casa Woppa se encuentra a 400 metros de la Manzana Jesuítica y a 600 metros de la catedral de Córdoba.',4,4),(32,'El B&B Joven Casa Reggae está situado en el centro de Córdoba y ofrece habitaciones cómodas con conexión wifi gratis y zona de parrilla al aire libre.\nLas habitaciones del Casa Reggae B&B Joven son sencillas pero confortables. Incluyen baño privado o compartido y ventilador de techo.\nEl B&B cuenta con recepción las 24 horas, salón común muy animado, bar pequeño, sala de juegos bien equipada con mesa de mesa de pool, servicio de alquiler de bicicletas y servicio de masajes, a pedido y por un adicional.','La Tablada, 414',-31.407333886615618,-64.18670218359192,'B&B Joven casa Reggae','El aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V. Taravella es el más cercano y queda a 59 km.',4,4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntuacion_sequence`
--

DROP TABLE IF EXISTS `puntuacion_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puntuacion_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntuacion_sequence`
--

LOCK TABLES `puntuacion_sequence` WRITE;
/*!40000 ALTER TABLE `puntuacion_sequence` DISABLE KEYS */;
INSERT INTO `puntuacion_sequence` VALUES (13);
/*!40000 ALTER TABLE `puntuacion_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntuaciones`
--

DROP TABLE IF EXISTS `puntuaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puntuaciones` (
  `id` bigint NOT NULL,
  `puntuacion` int NOT NULL,
  `producto_id` bigint NOT NULL,
  `usuario_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqep6jym4fop6gtxjdux9ioayd` (`producto_id`),
  KEY `FKf3ipc1ss30u5lf6qe5es8gue1` (`usuario_id`),
  CONSTRAINT `FKf3ipc1ss30u5lf6qe5es8gue1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FKqep6jym4fop6gtxjdux9ioayd` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntuaciones`
--

LOCK TABLES `puntuaciones` WRITE;
/*!40000 ALTER TABLE `puntuaciones` DISABLE KEYS */;
INSERT INTO `puntuaciones` VALUES (1,7,1,1),(2,9,1,2),(3,5,1,3),(4,9,9,1),(5,10,9,2),(6,8,9,3),(7,8,17,1),(8,7,17,2),(9,8,17,3),(10,8,25,1),(11,6,25,2),(12,7,25,3);
/*!40000 ALTER TABLE `puntuaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reaccion_sequence`
--

DROP TABLE IF EXISTS `reaccion_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reaccion_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reaccion_sequence`
--

LOCK TABLES `reaccion_sequence` WRITE;
/*!40000 ALTER TABLE `reaccion_sequence` DISABLE KEYS */;
INSERT INTO `reaccion_sequence` VALUES (1);
/*!40000 ALTER TABLE `reaccion_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reacciones`
--

DROP TABLE IF EXISTS `reacciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reacciones` (
  `id` bigint NOT NULL,
  `favorito` tinyint DEFAULT NULL,
  `producto_id` bigint NOT NULL,
  `usuario_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqtk3fs674lu9a4glr7glo52vo` (`producto_id`),
  KEY `FKc1nkgmom47lksb6rpmmmg2b6g` (`usuario_id`),
  CONSTRAINT `FKc1nkgmom47lksb6rpmmmg2b6g` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FKqtk3fs674lu9a4glr7glo52vo` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reacciones`
--

LOCK TABLES `reacciones` WRITE;
/*!40000 ALTER TABLE `reacciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `reacciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva_sequence`
--

DROP TABLE IF EXISTS `reserva_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
  `fecha_en_la_que_se_hace_la_reserva` timestamp NULL DEFAULT NULL,
  `fecha_fin_reserva` date DEFAULT NULL,
  `fecha_inicio_reserva` date DEFAULT NULL,
  `hora_estimada_de_llegada` time DEFAULT NULL,
  `mensaje_usuario` varchar(3000) DEFAULT NULL,
  `vacunado_covid` tinyint DEFAULT NULL,
  `producto_id` bigint NOT NULL,
  `usuario_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKemr5mamcwq9ui20y08devm32q` (`producto_id`),
  KEY `FKcfh7qcr7oxomqk5hhbxdg2m7p` (`usuario_id`),
  CONSTRAINT `FKcfh7qcr7oxomqk5hhbxdg2m7p` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FKemr5mamcwq9ui20y08devm32q` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_sequence`
--

DROP TABLE IF EXISTS `role_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_sequence`
--

LOCK TABLES `role_sequence` WRITE;
/*!40000 ALTER TABLE `role_sequence` DISABLE KEYS */;
INSERT INTO `role_sequence` VALUES (1);
/*!40000 ALTER TABLE `role_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tp_sequence`
--

LOCK TABLES `tp_sequence` WRITE;
/*!40000 ALTER TABLE `tp_sequence` DISABLE KEYS */;
INSERT INTO `tp_sequence` VALUES (1);
/*!40000 ALTER TABLE `tp_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_sequence`
--

DROP TABLE IF EXISTS `usuario_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_sequence`
--

LOCK TABLES `usuario_sequence` WRITE;
/*!40000 ALTER TABLE `usuario_sequence` DISABLE KEYS */;
INSERT INTO `usuario_sequence` VALUES (1);
/*!40000 ALTER TABLE `usuario_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKeljjw3mx8n5ngoe7fbqbjwusp` (`role_id`),
  CONSTRAINT `FKeljjw3mx8n5ngoe7fbqbjwusp` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'Fidalgo','Buenos Aires','analaurafidalgo@gmail.com','Ana Laura','1234',1),(2,1,'Fernandez','Rosario','florf@mail.com','Florencia','1234',1),(3,1,'Di Pardo','Buenos Aires','lolo@mail.com','Lorenzo','1234',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-14 18:49:27
