function send_handle() {
    let num = document.getElementById("number").value;
  
    // let msg = document.getElementById("msg").value;
  
    // let name = document.getElementById("name").value;
  
    // var win = window.open(
    //   `https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`,
    //   "_blank"
    // );
    
    let longMessage =
      "Hey Fan2Play Fam,\n\n" +
      "      Exciting news! 🎉 " +
      "  The Depositor Leaderboard is in full swing on Fan2Play, and you're invited to join the action. Deposit now for your shot at winning incredible prizes like the * iPhone 15, Google TV, iPad,* and more! The more you deposit, the better your chances to score big. Don't miss out – let's amp up the deposits and seize those prizes! 🚀💰 \n\n"
      "Fan2Play Support Team";
    var win = window.open(
      `https://wa.me/${num}?text=%20${longMessage}`,
      "_blank"
    );
    // win.focus();
  }
  