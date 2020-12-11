const express = require('express');

const router = express.Router();

const basicController = require('../controller/basicController')

router.get('/', basicController.logIn);

router.get('/homepage' , basicController.getHomePage);

router.post('/homepage' , basicController.postHomePage);

router.get('/video' , basicController.getVideo);

router.get('/learn' , basicController.getLearn);

router.get('/track' , basicController.getTrack);

//home page access on post req

//

module.exports = router;
