exports.logIn = (req, res, next) => {
  res.render("login.ejs" , {check: false});
};

exports.getLearn = (req, res, next) => {
  res.render("learn.ejs");
};

exports.getHomePage = (req , res , next) => {
  res.render('homepage.ejs');
}

exports.getVideo = (req, res, next) => {
  res.render('video.ejs');
}

exports.getTrack = (req , res , next) => {
  res.render('track.ejs');
}

exports.postHomePage = (req, res, next) => {
  const uname_saved = "abc@gmail.com";
  const password_saved = "test";
  const uname_req = req.body.userName;
  const password_req = req.body.password;
  console.log(uname_req , password_req);
  if (uname_req === uname_saved && password_req === password_saved) {
    console.log("Testing");
    res.render("homePage.ejs");
  } else {
    res.render("login.ejs",{check : true});
  }
};
