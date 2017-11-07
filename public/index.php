<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Card Challenge</title>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">

  <link rel="stylesheet" href="css/main.css">

  <script src="js/bundle.js"></script>
 </head>
 <body>
   <div class="container-fluid">

     <header class="header-content">
      <div class="row justify-content-center">
        <div class"col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h1>Card challenge</h1>
        </div>
      </div>
    </header>

    <main class="main-content">
        <?php
         $fileData = file_get_contents('./data.json');
         $jsonData = json_decode($fileData);
        ?>
        <div class="row justify-content-center">
          <?php foreach($jsonData -> cards as $card): ?>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div class="card card-content text-center mb-3">
                <div class="card-header">
                  <h3><?php echo $card -> value?></h3>
                </div>
                <div id=<?php echo $card -> id ?> class="card-body">
                </div>
            </div>
        </div>
          <?php endforeach; ?>
    </main>

    <footer class="footer-content">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p class="footer-content-text text-center">Card challenge - 2017</p>
        </div>
      </div>
    </footer>
  </div>
 </body>
</html>