-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2021 at 06:55 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laraveldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'abhi.chy.06@gmail.com', '$2y$10$qNlAQ3CGCvd/J4u9CyFXquoHtDBEMdkOwlws.yqE1qkjVIk.jnZqm', '2020-12-03 07:32:17', '2020-12-03 07:32:17'),
(2, 'abhi.chy.06@gmail.com', '$2y$10$0PfKrr0d/Mi7t4Q6WUBu6.udSK1uJW76JVe06Ib3A3pm31EYfwHNa', '2021-02-02 05:46:04', '2021-02-02 05:46:04'),
(3, '1610113@iub.edu.bd', '$2y$10$uCAUwSjPL/DgNBGCFnjTeufXVItTzYgBKXkCIhetwzZS7y5SE4x/.', '2021-02-02 05:47:06', '2021-02-02 05:47:06');

-- --------------------------------------------------------

--
-- Table structure for table `all_projects`
--

CREATE TABLE `all_projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `manager` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1=Active 2=Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `all_projects`
--

INSERT INTO `all_projects` (`id`, `name`, `description`, `manager`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Vat Management', 'Software', 'ABHI', 2, '2021-01-02 06:09:51', '2021-01-10 05:16:53'),
(3, 'System Auth', 'System', 'Aftab', 1, '2021-01-02 06:10:29', '2021-01-03 05:04:27'),
(4, 'Peerless Diagnostic', 'Software', 'Imad', 2, '2021-01-02 06:10:50', '2021-01-03 05:09:48'),
(5, 'Gazi Wire', 'Software', 'ABHI', 1, '2021-01-03 00:46:15', '2021-01-03 05:09:57'),
(6, 'Al Safa Hotel', 'Software', 'Aftab', 1, '2021-01-04 03:29:26', '2021-01-10 05:49:18'),
(7, 'Customized Panel', 'System', 'Imad', 1, '2021-01-04 03:32:34', '2021-01-04 03:32:34'),
(8, 'ERP', 'Software', 'Imad', 2, '2021-01-04 06:04:19', '2021-01-08 22:57:40');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_id` int(11) NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` tinyint(4) NOT NULL COMMENT '1 = client 2 =developer',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `email`, `project_id`, `detail`, `type`, `created_at`, `updated_at`) VALUES
(6, 'BT Logistics', 'btl06@gmail.com', 7, 'CRUD', 2, '2020-12-30 02:44:47', '2021-01-12 04:37:11'),
(7, 'Central Hospital', 'ctis@gmail.com', 0, 'ERP', 1, '2020-12-30 02:53:56', '2020-12-31 05:15:29'),
(8, 'Globelink', 'glblink@gmail.com', 0, 'Swift', 1, '2020-12-30 02:57:55', '2020-12-31 05:15:48'),
(9, 'Kishwan', 'acb@gmail.com', 0, 'Android', 1, '2020-12-30 02:58:37', '2020-12-30 05:33:30'),
(10, 'CURSOR', 'cursor@yahoo.com', 0, 'VAT', 2, '2020-12-30 03:00:24', '2020-12-31 05:16:11'),
(11, 'Mall 24', 'ridwan@gmail.com', 0, 'Management', 1, '2020-12-30 04:44:01', '2020-12-31 05:16:52'),
(12, 'Al Safa Hotel', 'mdismail2008@gmail.com', 0, 'Costing', 2, '2020-12-31 05:25:07', '2020-12-31 05:25:07'),
(13, 'Gazi Wire', 'nasir@gmail.com', 0, 'Redesign', 1, '2020-12-31 05:26:12', '2020-12-31 05:26:12'),
(14, 'Peerless Diagnostic', 'asif06@gmail.com', 0, 'Database', 1, '2020-12-31 05:27:04', '2020-12-31 05:27:04'),
(15, 'Textile Noakhali', 'tasnimhafiz@gmail.com', 0, 'Customized Panel', 1, '2020-12-31 05:28:56', '2020-12-31 05:28:56'),
(19, 'Peerless Diagnostic', 'spark.dash.bd@gmail.com', 3, 'ERP', 1, '2021-01-04 05:01:29', '2021-01-10 03:19:46'),
(20, 'Al Safa Hotel', '1610113@iub.edu.bd', 5, 'CRUD', 1, '2021-01-04 05:56:55', '2021-01-10 03:19:56');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `full_name`, `Email`, `Phone`, `created_at`, `updated_at`) VALUES
(41, 'Abhi', '1610113@iub.edu.bd', '24556', '2020-11-30 02:34:38', '2021-01-02 05:21:13'),
(47, 'ASIF', 'acb@gmail.com', '2244667', '2020-11-30 03:25:02', '2020-12-12 03:04:41'),
(49, 'Aftab', 'acb@gmail.com', '2233-444-665', '2020-11-30 04:58:54', '2020-12-12 03:04:53'),
(64, 'Watif', 'abhi.chy.06@gmail.com', '2233-444-665', '2020-12-05 03:28:29', '2020-12-05 03:28:29'),
(69, 'Yasin', 'yasin@yahoo.com', '01996644328', '2020-12-09 04:06:32', '2020-12-09 04:06:32'),
(70, 'Arafat', 'spark.dash.bd@gmail.com', '884466', '2020-12-09 04:52:29', '2020-12-12 03:05:01'),
(74, 'Wasim', '1610113@iub.edu.bd', '2233-444-6657', '2020-12-13 03:12:00', '2020-12-13 06:06:34'),
(79, 'Imad', '1610113@iub.edu.bd', '2244667', '2020-12-21 05:30:17', '2020-12-21 05:30:17');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_11_21_114703_create_contacts_table', 1),
(5, '2020_12_03_125837_create_admins_table', 2),
(6, '2020_12_28_130901_create_companies_table', 3),
(7, '2020_12_30_124140_create_all_projects_table', 4),
(8, '2021_01_05_121853_create_reports_table', 5),
(9, '2021_01_07_125935_create_tickets_table', 6),
(10, '0000_00_00_000000_create_websockets_statistics_entries_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `date`, `name`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, '2021-01-12 09:14:14', 'ABHI CHOWDHURY', 'test2', 'Convert Fixed Management. Working progress (65%)', '2021-01-06 05:38:30', '2021-01-12 03:14:14'),
(2, '2021-01-07 09:28:46', 'Aurnob Gazi', 'test', 'Join Fabrics indent (30%)', '2021-01-06 05:42:43', '2021-01-07 03:28:46'),
(3, '2021-01-07 09:29:08', 'Tonmoy Sakib', 'System Support', 'Serial Key System', '2021-01-06 05:52:16', '2021-01-07 03:29:08'),
(4, '2021-01-12 11:54:10', 'Shoaib', 'Test', 'Purchase Order Software (80%)', '2021-01-06 23:16:46', '2021-01-12 05:54:10'),
(5, '2021-01-07 09:08:13', 'Aurnob Gazi', 'System Support', 'Software', '2021-01-07 03:08:13', '2021-01-07 03:08:13'),
(6, '2021-01-10 11:17:40', 'Tonmoy Sakib', 'System Software', 'Software', '2021-01-10 05:17:40', '2021-01-10 05:17:40');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `company_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `type_id`, `company_id`, `subject`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 0, 6, 'Clone software', 'ok', '1610028851.png', '2021-01-07 08:14:11', '2021-01-07 08:14:11'),
(2, 0, 6, 'Clone software', 'ok', '1610028926.png', '2021-01-07 08:15:26', '2021-01-07 08:15:26'),
(3, 0, 6, 'Clone software', 'Test', '1610275009.png', '2021-01-10 04:36:49', '2021-01-10 04:36:49'),
(4, 0, 6, 'Clone software', 'asd', '1610279801.png', '2021-01-10 05:56:41', '2021-01-10 05:56:41'),
(5, 0, 19, 'Clone software', 'f', '1610279920.png', '2021-01-10 05:58:40', '2021-01-10 05:58:40'),
(6, 0, 6, 'Clone software', 'aa', '1610447750.png', '2021-01-12 04:35:50', '2021-01-12 04:35:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `company`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(12, 'ABHI CHOWDHURY', 'abhi.chy.06@gmail.com', 'Cursor', NULL, NULL, NULL, '2020-12-19 03:06:12', '2021-01-07 05:51:51'),
(13, 'Aurnob Gazi', '1610113@iub.edu.bd', 'Cursor', NULL, NULL, NULL, '2020-12-19 03:06:29', '2021-01-07 05:51:40'),
(14, 'Tonmoy Sakib', 'spark.dash.bd@gmail.com', 'Cursor', NULL, NULL, NULL, '2020-12-19 03:07:18', '2021-01-07 05:51:31'),
(56, 'Imad', 'imad@gmail.com', 'Orbit', NULL, NULL, NULL, '2020-12-26 04:00:09', '2020-12-26 04:20:22');

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `all_projects`
--
ALTER TABLE `all_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `all_projects`
--
ALTER TABLE `all_projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
