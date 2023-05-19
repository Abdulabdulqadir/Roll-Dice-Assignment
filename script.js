function getResult() {
    var RandomNumber = Math.floor(Math.random() * 6);
    let arr = [
      "C:\Users\DELL\Desktop\Roll-Dice Assignment\image\dice1.png",
      "C:\Users\DELL\Desktop\Roll-Dice Assignment\image\download (1).png",
      "C:\Users\DELL\Desktop\Roll-Dice Assignment\image\download (2).png",
      "C:\Users\DELL\Desktop\Roll-Dice Assignment\image\download.png",
      "C:\Users\DELL\Desktop\Roll-Dice Assignment\image\images (1).png",
      "C:\Users\DELL\Desktop\Roll-Dice Assignment\image\images.png",
    ];
    var number = document.getElementById("number");
    var image = document.getElementById("result");
    image.src = `./images/${arr[RandomNumber]}`;
    number.innerHTML = `You Have ${RandomNumber + 1}`;
  }