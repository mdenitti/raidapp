-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 07:06 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raid`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `organisation_id` int(50) NOT NULL,
  `last_contacted` date NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `telephone`, `mail`, `organisation_id`, `last_contacted`, `updated_at`, `created_at`) VALUES
(14, 'Marc Steegmans', '0476985365', 'm.steegmans@vjz.be', 5, '2019-09-10', '2020-05-03', '2020-05-03'),
(15, 'Maggie deblock', '1116512312', 'maggie@ocmw.be', 14, '2020-05-01', '2020-05-03', '2020-05-03'),
(16, 'jan jambon', '2365987', 'jan@caw.be', 16, '2020-05-01', '2020-05-03', '2020-05-03'),
(17, 'sofie wilmes', '987456321', 'wilmes@care.be', 13, '2020-05-01', '2020-05-03', '2020-05-03');

-- --------------------------------------------------------

--
-- Table structure for table `contact_organisation`
--

CREATE TABLE `contact_organisation` (
  `id` int(50) NOT NULL,
  `contact_id` int(50) NOT NULL,
  `organisation_id` int(50) NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_organisation`
--

INSERT INTO `contact_organisation` (`id`, `contact_id`, `organisation_id`, `updated_at`, `created_at`) VALUES
(4, 14, 13, '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `organisations`
--

CREATE TABLE `organisations` (
  `id` int(50) NOT NULL,
  `organisation` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(50) NOT NULL,
  `postalcode` int(50) NOT NULL,
  `city` varchar(255) NOT NULL,
  `btwnr` varchar(50) NOT NULL,
  `last_assignment` date NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organisations`
--

INSERT INTO `organisations` (`id`, `organisation`, `street`, `number`, `postalcode`, `city`, `btwnr`, `last_assignment`, `updated_at`, `created_at`) VALUES
(5, 'Virga jesse Ziekenhuis', 'Hasseltweg', 20, 3500, 'Hasselt', 'BE823.365.814', '2019-08-10', '2020-03-27 15:24:03', '2020-02-11 20:28:48'),
(13, 'Care in motion', 'Kapelstraat', 28, 3520, 'Zonhoven', 'BE823.387.159', '2020-02-20', '2020-03-27 15:24:25', '2020-02-12 15:10:04'),
(14, 'OCMW Hasselt', 'Luikersteenweg', 12, 3500, 'Hasselt', 'BE823.985.446', '2019-02-14', '2020-03-27 15:24:43', '2020-02-25 17:49:19'),
(15, 'Zorgbedrijf Antwerpen', 'Ballaarstraat', 35, 2000, 'Antwerpen', 'BE0809.699.184', '2019-08-15', '2020-03-27 15:21:32', '2020-03-27 15:21:32'),
(16, 'CAW Limburg', 'Stoffelbergstraat', 4, 3583, 'Paal', 'BE0842.796.574', '2019-10-18', '2020-05-03 08:40:39', '2020-03-27 15:22:42');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `updated_at`, `created_at`) VALUES
(5, 'Fysieke Agressiemanagement', '0000-00-00', '0000-00-00'),
(6, 'Verbale Agressiemanagement', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `product_quote`
--

CREATE TABLE `product_quote` (
  `id` int(50) NOT NULL,
  `quote_id` int(50) NOT NULL,
  `product_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `id` int(50) NOT NULL,
  `quote_number` int(50) NOT NULL,
  `organisations_id` int(50) NOT NULL,
  `contacts_id` int(50) NOT NULL,
  `products_id` int(50) NOT NULL,
  `po_number` int(50) NOT NULL,
  `price` int(50) NOT NULL,
  `discount` int(50) NOT NULL,
  `transport` int(50) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `invoice` tinyint(1) NOT NULL,
  `send` tinyint(1) NOT NULL,
  `serviced` tinyint(1) NOT NULL,
  `payed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_ibfk_1` (`organisation_id`);

--
-- Indexes for table `contact_organisation`
--
ALTER TABLE `contact_organisation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organisations`
--
ALTER TABLE `organisations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_quote`
--
ALTER TABLE `product_quote`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_id` (`contacts_id`),
  ADD KEY `organisations_id` (`organisations_id`),
  ADD KEY `products_id` (`products_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `contact_organisation`
--
ALTER TABLE `contact_organisation`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `organisations`
--
ALTER TABLE `organisations`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_quote`
--
ALTER TABLE `product_quote`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`organisation_id`) REFERENCES `organisations` (`id`);

--
-- Constraints for table `quotes`
--
ALTER TABLE `quotes`
  ADD CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`contacts_id`) REFERENCES `contacts` (`id`),
  ADD CONSTRAINT `quotes_ibfk_2` FOREIGN KEY (`organisations_id`) REFERENCES `organisations` (`id`),
  ADD CONSTRAINT `quotes_ibfk_3` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
