<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task</title>
    <link rel="stylesheet" href="task.css">
    <link rel="stylesheet" href="./bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css">
    <script src="/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/js/bootstrap.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <nav class="nav nav-pills flex-column flex-sm-row">
            <a class="flex-sm-fill text-sm-center nav-link" href="index.php">LOGO</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Dashboard</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Orders</a>
            <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Task</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Documents</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Salary</a>
          </nav>
    </header>
    <div class="container-lg">
        <p id="_tag"><span id="_select">SELECT PERSONAL</span> : <span id="_select">xxxx-xxxxxx</span></p>
    </div>
    <br>
    <div class="flex-container">
        <div class="left-side">
            <form id="taskForm" method="post">
                <button type="submit" class="task-btn" name="task" value="daily">DAILY TASKS</button>
                <button type="submit" class="task-btn" name="task" value="weekly">WEEKLY TASKS</button>
                <button type="submit" class="task-btn" name="task" value="monthly">MONTHLY TASKS</button>
            </form>
        </div>
        <div class="right-side" id="content">
            <?php
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                $task = $_POST['task'];
                if ($task == 'daily') {
                    echo '<div class="daily-tasks-content"><h3 class="text-center">DAILY TASKS</h3><ul class="task-list"><li>Task 1: xx/xx/xxxx <i class="fas fa-check-circle"></i></li><li>Task 2: xx/xx/xxxx <i class="fas fa-check-circle"></i></li><li>Task 3: xx/xx/xxxx <i class="fas fa-times-circle"></i></li><li>Task 4: xx/xx/xxxx <i class="fas fa-check-circle"></i></li></ul></div>';
                } elseif ($task == 'weekly') {
                    echo '<div class="weekly-tasks-content"><h3 class="text-center">WEEKLY TASKS</h3><ul class="task-list"><li>Week 1 Task: xx/xx/xxxx <i class="fas fa-check-circle"></i></li><li>Week 2 Task: xx/xx/xxxx <i class="fas fa-times-circle"></i></li><li>Week 3 Task: xx/xx/xxxx <i class="fas fa-check-circle"></i></li></ul></div>';
                } elseif ($task == 'monthly') {
                    echo '<div class="monthly-tasks-content"><h3 class="text-center">MONTHLY TASKS</h3><ul class="task-list"><li>Month 1 Task: xx/xx/xxxx <i class="fas fa-check-circle"></i></li><li>Month 2 Task: xx/xx/xxxx <i class="fas fa-times-circle"></i></li></ul></div>';
                }
            }
            ?>
        </div>
    </div>
</body>
</html>
