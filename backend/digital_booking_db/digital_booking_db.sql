CREATE DATABASE  IF NOT EXISTS `digital_booking_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES (1,'airConditioner','Aire Acondicionado',1),(2,'swim','Piscina',1),(3,'wifi','Wifi',1),(4,'gym','Gimnasio',1),(5,'cajaFuerte','Caja Fuerte',1),(6,'reception','Recepción 24 Horas',1),(7,'airConditioner','Aire Acondicionado',2),(8,'gym','Gimnasio',2),(9,'wifi','Wifi',2),(10,'television','Television',2),(11,'pool','Pool',2),(12,'reception','Recepción 24 Horas',2),(13,'airConditioner','Aire Acondicionado',3),(14,'bano','Baño Privado',3),(15,'wifi','Wifi',3),(16,'television','Television',3),(17,'lift','Ascensores',3),(18,'reception','Recepción 24 Horas',3),(19,'airConditioner','Aire Acondicionado',4),(20,'bano','Baño Privado',4),(21,'wifi','Wifi',4),(22,'television','Television',4),(23,'lift','Ascensores',4),(24,'reception','Recepción 24 Horas',4),(25,'airConditioner','Aire Acondicionado',5),(26,'gym','Gimnasio',5),(27,'wifi','Wifi',5),(28,'television','Television',5),(29,'swim','Piscina',5),(30,'reception','Recepción 24 Horas',5),(31,'airConditioner','Aire Acondicionado',6),(32,'gym','Gimnasio',6),(33,'wifi','Wifi',6),(34,'television','Television',6),(35,'swim','Piscina',6),(36,'spa','Spa',6),(37,'airConditioner','Aire Acondicionado',7),(38,'calefaccion','Calefacción',7),(39,'wifi','Wifi',7),(40,'television','Television',7),(41,'limpieza','Servicio de Limpieza',7),(42,'reception','Recepción 24 Horas',7),(43,'airConditioner','Aire Acondicionado',8),(44,'calefaccion','Calefacción',8),(45,'wifi','Wifi',8),(46,'television','Television',8),(47,'swim','Piscina',8),(48,'reception','Recepción 24 Horas',8);
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
INSERT INTO `caracteristicas_sequence` VALUES (49);
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
INSERT INTO `categorias` VALUES (1,'descripcion','Hoteles','https://www.iceportal.com/data/2813-141147-f72658366_XXLejpg/Argentina/Buenos-Aires/Hotel-Madero/Photo/Hotel-Madero-Buenos-Aires-Undefined-Zen-Room.jpg'),(2,'descripcion','Hostels','https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/8/8825/qdzqr3kreck8gen4mfn2'),(3,'descripcion','Departamentos','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2e/25/da/old-town-by-welcome-apartment.jpg?w=1400&h=-1&s=1'),(4,'descripcion','Bed & Breakfast','https://cf.bstatic.com/xdata/images/hotel/max1280x900/41375478.jpg?k=06536843c14edc8d0d87121e6a4dc7a301efcee95b84e009eba9089e40232156&o=&hp=1');
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
INSERT INTO `imagenes` VALUES (1,'Vista de camas y lago Nahuel Huapi desde habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/166442884.jpg?k=f038e53f71b03089fec79040cc5504bbc2ddf1d5769325d855baf665fc8fa67e&o=&hp=1',1),(2,'Piscina del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',1),(3,'Living con hogar en espacio común del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/139112551.jpg?k=e92436bfcc592eef93c174675a612f7bb0455bdd966edf14c847e7efa8f1ced8&o=&hp=1',1),(4,'Desayuno completo','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',1),(5,'Vista del lago Nahuel Huapi desde la habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',1),(6,'Vista de camas y playa desde habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/145548596.jpg?k=6af866277f6e0ad308f800c0863876f3ebd1188d5063117d2dd9cc98c9e6ac35&o=&hp=1',2),(7,'Comedor del hotel con excelente vista a las montañas','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/363785259.jpg?k=4443c834fce3043d0d4f29ae80e773805facac2dcd062aff0502d5d0e292f5b1&o=&hp=1',2),(8,'Desayuno completo','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13331430.jpg?k=3e59dec8500f1eea74296697f32827cf090245764f29e39e9d1da4e2382848d3&o=&hp=1',2),(9,'Bar del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/140308662.jpg?k=5295491806fd6e2360f811a38bd0abe1f6a20efe6d84995237453d2479efd1b1&o=&hp=1',2),(10,'Vista de camas y jardín del hotel desde habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/145548376.jpg?k=41a67fb18146c82e2f3bf8628622d04f0604bd4f6dbe860ac2767be14c05065a&o=&hp=1',2),(11,'Vista de camas y de la ciudad desde habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249506871.jpg?k=98ef87719a74e14384c7af02c9cdb7e28ceeb0f10c613ac89e5a0830c34562f8&o=&hp=1',3),(12,'Vista de camas y del obelisco desde habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249506873.jpg?k=4fdb9a9503d49be10a0711346f31e216e606ab8126f97ba4b1690b8b345cd5ac&o=&hp=1',3),(13,'Desayuno completo','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249507515.jpg?k=8c09c329fa3aa1943c9d03243a039198ef7778f29ec350d7e1740f18495e25d8&o=&hp=1',3),(14,'Recepción del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249509646.jpg?k=f696dba906d13a08bc3dd203d39c2746fab9287d4505cfdd98d837b21cd99c90&o=&hp=1',3),(15,'Balcón con vista a la ciudad','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249501228.jpg?k=8e553cf07f6c46436a6e0e9012d216a65fcb8535bbbf8e709685cb5e59289dd6&o=&hp=1',3),(16,'Habitación doble','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/258961447.jpg?k=5d62044354e822267e489e9ba9f3a9c49816f5a2b2ed26acb6b0ac29b1605e56&o=&hp=1',4),(17,'Recepción y sala común','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/315091296.jpg?k=207830346d0a3a6a46ef94fb9db78ed686b45c9b3e7fe91d61e7ba8d39e08075&o=&hp=1',4),(18,'Habitación doble estándar','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/315091293.jpg?k=e2cc3f9fc5c480c4530126dbb45d2528e395822d11f31e40035723f390fd427c&o=&hp=1',4),(19,'Ascensor y vestíbulo del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/231202800.jpg?k=6889ae6f61b8f89f58677ca6b079f746380fcbe0f1f630ddb33090ceddfe57ee&o=&hp=1',4),(20,'Baño habitación','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/218847896.jpg?k=f06ab650a9caeda07c6272e347674e8eb5aec1fa94e27664e3abb8b5f16d214b&o=&hp=1',4),(21,'Habitación doble','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/50978559.jpg?k=83ba95d5e5425cc5bf23668657750773b6349f511af22dfb435240f877dd07a7&o=&hp=1',5),(22,'Living del hotel y sala común','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/17132503.jpg?k=f14added2b693f4a339d3dc5c2adf5d6ac71e1953dbdd8153ff7b7e528b73531&o=&hp=1',5),(23,'Pileta del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/56381932.jpg?k=0aee4e00ab57978677e4b88f4f3e96f5bc37674dd79fb253a5f1a1c7d0d966bf&o=&hp=1',5),(24,'Ascensor y vestíbulo del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/17132553.jpg?k=07f5d08cebd217f152a1b8dd0d897f91c9ce37f13102f7f04bc3656eb758695e&o=&hp=1',5),(25,'Habitación con living','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/63164989.jpg?k=f604025bf6005db9f44bf27ac862a66a3407b4a2131495ab367c58f60d791e63&o=&hp=1',5),(26,'Habitación doble','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/84782523.jpg?k=bdbfa86e1e905ec55951e53edab6da031d6e4c55e1b537a354e495296e8d1b64&o=&hp=1',6),(27,'Bar del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/324591790.jpg?k=29ea38b82bc0061f48dc70f5e7884016f6d3073443d346ea866fb983518cf99b&o=&hp=1',6),(28,'Pileta del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/323222619.jpg?k=dbb76ae1266a3b5b95b0ea6d07c36ed801efb3932a418af740a419ac53e97ea1&o=&hp=1',6),(29,'Recepción y vestíbulo del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/324591765.jpg?k=04c9091fa34197098e9b01884aae32641441967d41a3e7c201a74daf257d4389&o=&hp=1',6),(30,'Habitación doble','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/149072374.jpg?k=b3f63495a998284fb6f73dc8833c1d5d7fd16bdfb4a937cfa12252b5aa0a0ebd&o=&hp=1',6),(31,'Habitación triple','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/246279316.jpg?k=e5103a3aeb2b34f6c6c709337368df139bfbc43f382c9b0f613bd1c235cd0e17&o=&hp=1',7),(32,'Comedor del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/246281382.jpg?k=7c55a3ebdc2e770b75ef1f1bf03d23c613aeb7709675cc41eb07ab3bab05f2e3&o=&hp=1',7),(33,'Living del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/246281404.jpg?k=8d8aa2b55330aa8314f1ecd829a07d9a8b6214a15980780e6be5f7658ead76ad&o=&hp=1',7),(34,'Habitación triple estándar','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/246279330.jpg?k=8ea5e7cadd27421697f32c69aad327c15026c5d48aa5f9962fdc08513ba2adfb&o=&hp=1',7),(35,'Suite del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/246282687.jpg?k=92e8f8485f032912558bc9a99869f8fde44e9521abf59950ae1871204f61d73a&o=&hp=1',7),(36,'Habitación doble','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/332834203.jpg?k=88bfc388745123d91ce398c939583664d43cce51806ddec79437f4b2c07166f0&o=&hp=1',8),(37,'Comedor del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/332834962.jpg?k=41ce5edf4b4b79d2475fe001d6cb05818994d2005a343e993faf6ff236c63202&o=&hp=1',8),(38,'Desayuno del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/332834964.jpg?k=c11936f1176ddc8505a2e5df615a73e3851fe5c874c461b74e3878369e403a15&o=&hp=1',8),(39,'Habitación estándar','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/332834965.jpg?k=f79355c70cb9f995067e2e392ebba60b23b684737a3ab6c359bcc8a7526376d3&o=&hp=1',8),(40,'Piscina del hotel','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/332834969.jpg?k=7846791683be28f3e9278587f8e62c93a5ef6590dd6a4ee60d169a2794db9005&o=&hp=1',8);
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
INSERT INTO `imagenes_sequence` VALUES (41);
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
INSERT INTO `politica_sequence` VALUES (65);
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
INSERT INTO `politicas` VALUES (1,'No fumar',1,1),(2,'Se permiten mascotas hasta 7 Kg',1,1),(3,'Check-in: 13:00 horas',1,1),(4,'Check-out: 10:00 horas',1,1),(5,'Detector de Monóxido de Carbono',1,2),(6,'Detector de humo',1,2),(7,'Se requiere utilizar barbijo en ascensores y areas comunes',1,2),(8,'Pago del costo de una noche por cancelar',1,3),(9,'No fumar',2,1),(10,'No se permiten fiestas',2,1),(11,'Check-in: 13:00 horas',2,1),(12,'Check-out: 11:00 horas',2,1),(13,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',2,2),(14,'Detector de humo',2,2),(15,'Seguridad 24 Horas',2,2),(16,'No reembolsable',2,3),(17,'No fumar',3,1),(18,'Se permiten mascotas',3,1),(19,'Check-in: 15:00 horas',3,1),(20,'Check-out: 12:00 horas',3,1),(21,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',3,2),(22,'Alarma',3,2),(23,'Seguridad 24 Horas',3,2),(24,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',3,3),(25,'No fumar',4,1),(26,'No se permiten mascotas',4,1),(27,'Check-in: 14:00 horas',4,1),(28,'Check-out: 11:00 horas',4,1),(29,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',4,2),(30,'Alarma',4,2),(31,'Seguridad 24 Horas',4,2),(32,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',4,3),(33,'No fumar',5,1),(34,'No se permiten mascotas',5,1),(35,'Check-in: 15:00 horas',5,1),(36,'Check-out: 11:00 horas',5,1),(37,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',5,2),(38,'Detector de humo',5,2),(39,'Alarma',5,2),(40,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',5,3),(41,'No fumar',6,1),(42,'Se permiten mascotas sin cargo extra',6,1),(43,'Check-in: 12:00 horas',6,1),(44,'Check-out: 10:00 horas',6,1),(45,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',6,2),(46,'Detector de humo',6,2),(47,'Detector de Monóxido de Carbono',6,2),(48,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',6,3),(49,'No fumar',7,1),(50,'Se permiten mascotas sin cargo extra',7,1),(51,'Check-in: 11:00 horas',7,1),(52,'Check-out: 10:00 horas',7,1),(53,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',7,2),(54,'Detector de humo',7,2),(55,'Detector de Monóxido de Carbono',7,2),(56,'Si cancelas dentro de las 48 horas previas al comienzo de tu reserva abonarás como penalidad el valor de una noche.',7,3),(57,'No fumar',8,1),(58,'Se permiten mascotas hasta 7 Kg',8,1),(59,'Check-in: 12:00 horas',8,1),(60,'Check-out: 10:00 horas',8,1),(61,'Se aplican las pautas de distanciamiento social y normas de higiene para prevenir contagios por coronavirus',8,2),(62,'Detector de humo',8,2),(63,'Detector de Monóxido de Carbono',8,2),(64,'No reembolsable',8,3);
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
INSERT INTO `producto_sequence` VALUES (9);
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
  `puntaje` int NOT NULL,
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
INSERT INTO `productos` VALUES (1,'Ofrece habitaciones con vistas al lago y a las montañas. Las habitaciones y las suites ocupan un edificio amplio y elegante y ofrecen vistas al lago o a la ciudad. Además, el hotel cuenta con una amplia variedad de actividades de ocio para toda la familia.\nEl restaurante La Cave sirve fondues de queso a pedido. El piano bar del vestíbulo propone cócteles, bebidas, carnes ahumadas de la Patagonia y una amplia selección de vinos de la bodega Zuccardi.\nEl personal del hotel organiza una amplia variedad de actividades de ocio en plena naturaleza, como ciclismo de montaña, equitación, pesca con mosca y paseos en kayak.','Av. San Martín, 536',-41.133473922619125,-71.3167240322848,8,'Hotel Panamericano Bariloche','Alojate al lado del majestuoso lago Nahuel Huapi',1,1),(2,'El Hotel Tres Reyes está ubicado en San Carlos de Bariloche, a 200 metros del Centro Cívico. Este hotel de 3 estrellas cuenta con recepción 24 horas y wifi gratis. Se halla a 12 km de la estación de esquí y del aeropuerto de San Carlos de Bariloche.\nAlgunas de las habitaciones del Hotel Tres Reyes tienen vistas al lago. Otras tienen vistas al jardín.Asimismo, las habitaciones del hotel están equipadas con TV de pantalla plana.\nEste hotel alberga un bar y se sirve un desayuno a diario.','Av. 12 de Octubre, 135',-41.1327728587614,-71.30776773485405,8,'Hotel Tres Reyes','Preparate para disfrutar estando a solo 3 minutos caminando de la playa',1,1),(3,'El Exe Hotel Colón se encuentra en el centro de Buenos Aires y ofrece elegantes suites con vistas al Obelisco. El alojamiento se encuentra a 300 metros del Teatro Colón, a 500 metros de la calle peatonal Florida.\nLas habitaciones disponen de aire acondicionado y TV de pantalla plana. Algunas habitaciones ofrecen vistas a la ciudad. Los alojamientos cuentan con baño privado con bañera.\nEl Exe Hotel Colon dispone de instalaciones modernas, gimnasio bien equipado, centro de negocios, servicios de conserjería y recepción 24 horas. El personal de la recepción, que habla español e inglés, ofrece información sobre la zona.','Carlos Pellegrini, 507',-34.602130866131375,-58.380866815266295,7,'Exe Hotel Colón','Alojate en el corazón de Buenos Aires',1,2),(4,'El Up Congreso Hotel ofrece habitaciones con aire acondicionado en el centro de Buenos Aires, a 700 metros del Palacio Barolo.\nEste hotel cuenta con mostrador de información turística. El alojamiento ofrece recepción 24 horas, servicio de conserjería y conexión wifi gratis en todo el alojamiento.\nTodas las habitaciones del hotel cuentan con armario, TV de pantalla plana y baño privado.','Calle Montevideo, 86',-34.607880519324205,-58.38938453060987,8,'Up Congreso Hotel','Alojate en el corazón de Buenos Aires',1,2),(5,'El Huentala Hotel está situado a solo 600 metros de la plaza de la Independencia y ofrece pileta, gimnasio, habitaciones elegantes con conexión de wifi gratis y TV por cable, restaurante y bebidas de bienvenida.\nLas habitaciones para no fumadores del Hotel Huentala presentan una decoración en tonos suaves y disponen de aire acondicionado y escritorio.\nEl Huentala Hotel se encuentra a 2,5 km del parque de San Martín y a 850 metros de la terminal de micros y ofrece recepción 24 horas.','Primitivo De La Reta, 1007',-32.89178474778404,-68.83809148832445,8,'Huentala Hotel','Alojate en el corazón de Mendoza',1,3),(6,'Este hotel está ubicado en Mendoza, a 100 metros del céntrico parque de la Independencia. Ofrece pileta al aire libre, gimnasio, wifi gratis y servicio de spa.El Nutibara está a 200 metros de la avenida de España, rodeado de cafés y lugares de ocio.\nLas habitaciones del Hotel Nutibara incluyen aire acondicionado, TV por cable y baño privado. Algunas tienen cortinas y muebles de época.\nSirve un completo desayuno buffet con mermeladas de la región, yogur y jugos naturales. El restaurante está revestido de madera y cuenta con vistosas lámparas de cristal.','Avenida Bartolomé Mitre, 867',-32.892025666284546,-68.84494834414502,9,'Hotel Nutibara','Alojate en el corazón de Mendoza',1,3),(7,'Situado en el centro de Córdoba, a 1 manzana del parque San Martín, el Cristal Hotel ofrece un alojamiento elegante y un práctico servicio de registro de salida después de lo habitual.\nEl hotel ofrece recepción 24 horas y conexión a internet por un adicional.Las habitaciones tienen aire acondicionado y calefacción. TV por cable y room service.\nEl Hotel Cristal se encuentra a 5 calles de la terminal de autobuses y a 11 km del aeropuerto Ambrosia L V Taravella.','Entre Rios, 58',-31.41840088641068,-64.18434633068803,7,'Gran Hotel Cristal','Preparate para vacacionar, alojate en la mejor zona de Córdoba',1,4),(8,'El Hotel Everest está situado en el centro de Córdoba, a solo 300 metros del centro cívico. Hay conexión wifi gratis.Todas las habitaciones están equipadas con TV LED de 32 pulgadas, aire acondicionado, teléfono y calefacción.\nLa recepción está abierta las 24 horas.\nEl Everest se encuentra a 200 metros de la estación Mitre y a 300 metros de la terminal de micros y la plaza San Martín. La plaza Sarmiento y el zoológico están a 600 metros.','San Jeronimo, 465',-31.418704012090224,-64.17832384603143,9,'Hotel Everest','Preparate para vacacionar, alojate en la mejor zona de Córdoba',1,4);
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
INSERT INTO `reserva_sequence` VALUES (25);
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
  `fecha_fin_reserva` date DEFAULT NULL,
  `fecha_inicio_reserva` date DEFAULT NULL,
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
INSERT INTO `reservas` VALUES (1,'2022-06-15','2022-06-10',1),(2,'2022-06-25','2022-06-20',1),(3,'2022-07-30','2022-07-26',1),(4,'2022-06-15','2022-06-10',2),(5,'2022-06-25','2022-06-20',2),(6,'2022-07-09','2022-07-06',2),(7,'2022-06-20','2022-06-15',3),(8,'2022-06-25','2022-06-21',3),(9,'2022-07-10','2022-07-06',3),(10,'2022-06-25','2022-06-20',4),(11,'2022-06-30','2022-06-26',4),(12,'2022-07-10','2022-07-06',4),(13,'2022-06-25','2022-06-20',5),(14,'2022-06-30','2022-06-26',5),(15,'2022-07-10','2022-07-06',5),(16,'2022-06-15','2022-06-10',6),(17,'2022-06-25','2022-06-20',6),(18,'2022-06-30','2022-06-26',6),(19,'2022-06-15','2022-06-10',7),(20,'2022-06-25','2022-06-20',7),(21,'2022-06-30','2022-06-26',7),(22,'2022-06-20','2022-06-15',8),(23,'2022-06-30','2022-06-25',8),(24,'2022-07-15','2022-07-10',8);
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
INSERT INTO `tipo_de_politcas` VALUES (1,'Normas'),(2,'Seguridad'),(3,'Cancelacion');
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

-- Dump completed on 2022-06-05 19:52:49
