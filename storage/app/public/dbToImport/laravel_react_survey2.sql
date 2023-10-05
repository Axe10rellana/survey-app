-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 06, 2023 at 12:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_react_survey2`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_09_29_172038_create_surveys_table', 1),
(6, '2023_09_29_174751_create_survey_questions_table', 1),
(7, '2023_09_29_174824_create_survey_answers_table', 1),
(8, '2023_09_29_174855_create_survey_question_answers_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\User', 1, 'main', 'b858bb22601e245ea6ce79c23a39e0c291e76472a11c43e6749311789e105439', '[\"*\"]', '2023-10-06 00:54:38', NULL, '2023-10-06 00:40:33', '2023-10-06 00:54:38');

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expire_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `user_id`, `image`, `title`, `slug`, `status`, `description`, `created_at`, `updated_at`, `expire_date`) VALUES
(4, 1, 'images/HqNQsiPo88fcaWlt.jpeg', 'Headset', 'headset-2', 1, 'Description', '2023-10-03 16:47:21', '2023-10-03 16:47:21', '2023-10-06 03:00:00'),
(5, 1, 'images/R2cT5Epc3sqBJ3t1.jpeg', 'Playstation 5 slim', 'playstation-5-slim', 1, 'Description', '2023-10-03 20:17:37', '2023-10-03 20:17:37', '2023-10-06 03:00:00'),
(6, 1, 'images/LJm6nfKSP9EsQekX.jpeg', 'Dell XPS', 'dell-xps', 1, 'Description', '2023-10-03 20:18:32', '2023-10-03 20:18:32', '2023-10-06 03:00:00'),
(7, 1, 'images/TiVaeuq7OZGYF5QS.jpeg', 'Keyboard', 'keyboard', 1, 'Description', '2023-10-03 20:19:35', '2023-10-03 20:19:35', '2023-10-06 03:00:00'),
(8, 1, 'images/55UvSRpDDLuvKt6A.jpeg', 'MX Master 3', 'mx-master-3', 1, 'Description', '2023-10-03 20:21:02', '2023-10-03 20:21:02', '2023-10-06 03:00:00'),
(9, 1, 'images/94lbtbqmduB9hWag.jpeg', 'Chair', 'chair', 1, 'Description of chair', '2023-10-03 20:22:06', '2023-10-04 16:13:49', '2023-10-06 03:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `survey_answers`
--

CREATE TABLE `survey_answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `survey_id` bigint(20) UNSIGNED NOT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_answers`
--

INSERT INTO `survey_answers` (`id`, `survey_id`, `start_date`, `end_date`) VALUES
(1, 9, '2023-10-04 22:43:17', '2023-10-04 22:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions`
--

CREATE TABLE `survey_questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(45) NOT NULL,
  `question` varchar(2000) NOT NULL,
  `description` longtext DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  `survey_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions`
--

INSERT INTO `survey_questions` (`id`, `type`, `question`, `description`, `data`, `survey_id`, `created_at`, `updated_at`) VALUES
(1, 'text', 'Question 1', 'Description of question 1', '[]', 4, '2023-10-03 16:47:21', '2023-10-03 16:47:21'),
(2, 'text', 'Question 2', 'Description of question 2', '[]', 4, '2023-10-03 16:47:22', '2023-10-03 16:47:22'),
(3, 'text', 'Question 3', 'Description of question 3', '[]', 4, '2023-10-03 16:47:22', '2023-10-03 16:47:22'),
(4, 'text', 'Question 1', 'Description of question 1', '[]', 5, '2023-10-03 20:17:37', '2023-10-03 20:17:37'),
(5, 'text', 'Question 2', 'Description of question 2', '[]', 5, '2023-10-03 20:17:37', '2023-10-03 20:17:37'),
(6, 'text', 'Question 1', 'Description of question 1', '[]', 6, '2023-10-03 20:18:32', '2023-10-03 20:18:32'),
(7, 'text', 'Question 1', 'Description of question 1', '[]', 7, '2023-10-03 20:19:35', '2023-10-03 20:19:35'),
(8, 'text', 'Question 1', 'Description of question 1', '[]', 8, '2023-10-03 20:21:03', '2023-10-03 20:21:03'),
(9, 'text', 'Text', 'Description of text', '[]', 9, '2023-10-03 20:22:06', '2023-10-04 16:13:49'),
(11, 'select', 'Select', 'Description of select', '{\"options\":[{\"uuid\":\"377b8a20-5605-4c8d-9bc3-13613ce3f23f\",\"text\":\"option 1\"},{\"uuid\":\"8586a799-6072-452f-a396-658101e2f139\",\"text\":\"option 2\"}]}', 9, '2023-10-04 16:10:06', '2023-10-04 16:10:06'),
(12, 'radio', 'Radio', 'Description of radio', '{\"options\":[{\"uuid\":\"cbaadc0f-56ab-4faf-b98a-6e6ce41d1467\",\"text\":\"option 1\"},{\"uuid\":\"39fe9aa3-57bf-4464-9e15-3529f78bc41a\",\"text\":\"option 2\"}]}', 9, '2023-10-04 16:13:49', '2023-10-04 16:13:49'),
(13, 'checkbox', 'Checkbox', 'Description of checkbox', '{\"options\":[{\"uuid\":\"f2dfa4ac-d94e-4e59-9eaa-81f8d160a39c\",\"text\":\"option 1\"},{\"uuid\":\"1fc97d58-228d-4236-a554-63485c4d8711\",\"text\":\"option 2\"}]}', 9, '2023-10-04 16:13:49', '2023-10-04 16:13:49'),
(14, 'textarea', 'Textarea', 'Description of textarea', '[]', 9, '2023-10-04 16:13:49', '2023-10-04 16:13:49'),
(15, 'text', 'test', 'test', '[]', 10, '2023-10-05 23:55:50', '2023-10-05 23:55:50');

-- --------------------------------------------------------

--
-- Table structure for table `survey_question_answers`
--

CREATE TABLE `survey_question_answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `survey_question_id` bigint(20) UNSIGNED NOT NULL,
  `survey_answer_id` bigint(20) UNSIGNED NOT NULL,
  `answer` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_question_answers`
--

INSERT INTO `survey_question_answers` (`id`, `survey_question_id`, `survey_answer_id`, `answer`, `created_at`, `updated_at`) VALUES
(1, 11, 1, 'option 1', '2023-10-04 22:43:17', '2023-10-04 22:43:17'),
(2, 12, 1, 'option 1', '2023-10-04 22:43:18', '2023-10-04 22:43:18'),
(3, 13, 1, '[\"option 1\",\"option 2\"]', '2023-10-04 22:43:18', '2023-10-04 22:43:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'correo@gmail.com', NULL, '$2y$10$Tnor2bYvfQhw4AZz5rYe2eMuMlHBkpQpTQJPBa2BO1j21fF9nfC9O', NULL, '2023-10-02 23:12:11', '2023-10-02 23:12:11');

--
-- Indexes for dumped tables
--

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
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_answers`
--
ALTER TABLE `survey_answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_questions`
--
ALTER TABLE `survey_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_question_answers`
--
ALTER TABLE `survey_question_answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `survey_answers`
--
ALTER TABLE `survey_answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `survey_questions`
--
ALTER TABLE `survey_questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `survey_question_answers`
--
ALTER TABLE `survey_question_answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
