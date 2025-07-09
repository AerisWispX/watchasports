<?php

// Check if data-src is set and not empty
if (isset($_GET['data-src']) && !empty($_GET['data-src'])) {
    $data_src = $_GET['data-src'];

    // Generate buttons with URLs based on data-src value
    switch ($data_src) {
        case 'android':
            echo '<a href="https://amalpro.github.io/watchasports/watchasports.html?id=SSC1"><button>Android Button</button></a>';
            break;
        case 'ios':
            echo '<a href="https://amalpro.github.io/watchasports/watchasports.html?id=SSC2"><button>iOS Button</button></a>';
            break;
        case 'pc':
            echo '<a href="https://amalpro.github.io/watchasports/watchasports.html?id=SSC3"><button>PC Button</button></a>';
            break;
        default:
            echo '<button>No Button Available</button>';
    }
} else {
    echo '<button>No Button Selected</button>';
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Loader</title>
</head>
<body>

<ul id="channel-list">
    <li data-src="android">Load Android Button</li>
    <li data-src="ios">Load iOS Button</li>
    <li data-src="pc">Load PC Button</li>
</ul>

<div id="button-container">
    <?php include 'button_loader.php'; ?>
</div>

<script>
    const channelList = document.getElementById("channel-list");

    channelList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const dataSrc = event.target.getAttribute("data-src");
            loadButtons(dataSrc);
        }
    });

    function loadButtons(dataSrc) {
        fetch(`button_loader.php?data-src=${dataSrc}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("button-container").innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
</script>

</body>
</html>
