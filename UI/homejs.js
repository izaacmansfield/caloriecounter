function updateProgressBar() {
    var input = document.getElementById("input");
    var progress = document.querySelector(".progress");

    var calories = input.value;
    var maxCalories = 2000; // set the max calories you want to allow

    if (calories > maxCalories) {
        calories = maxCalories;
    }

    var percentage = (calories / maxCalories) * 100;
    progress.style.width = percentage + "%";
}