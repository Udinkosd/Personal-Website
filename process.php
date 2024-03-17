<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Website</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@^2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="./output.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
    $name = $email = $gender = $message = "";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    }
    ?>
    <section class="min-h-screen max-w-2xl px-6 mx-auto bg-white dark:bg-gray-900 py-20">
      <div>
        <header>
            <a href="#">
                <img class="w-auto h-7 sm:h-8" src="../Personal-Website/assets/img/VibingCO-logo.png" alt="">
            </a>
        </header>
        <main class="mt-8">
            <h2 class="text-gray-700 dark:text-gray-200">Hi Abdul,</h2>
            <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
              <span class="font-semibold "><?php echo $message; ?></span>.
            </p>
            
            <button class="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Reply
            </button>
            <p class="mt-8 text-gray-600 dark:text-gray-300">
                Thanks, <br>
                <?php echo $name; ?>
            </p>
        </main>
        <footer class="mt-8">
            <p class="text-gray-500 dark:text-gray-400">
                This email was sent to <a href="#" class="text-blue-600 hover:underline dark:text-blue-400" target="_blank">contact@VibingCo.com</a>. 
                If you'd rather not receive this kind of email, you can <a href="#" class="text-blue-600 hover:underline dark:text-blue-400">unsubscribe</a> or <a href="#" class="text-blue-600 hover:underline dark:text-blue-400">manage your email preferences</a>.
            </p>
            <p class="mt-3 text-gray-500 dark:text-gray-400" id="copyright"></p>
            <script src="../Personal-Website/assets/script.js"></script>
        </footer>
    </section>
  </div>
</body>
</html>