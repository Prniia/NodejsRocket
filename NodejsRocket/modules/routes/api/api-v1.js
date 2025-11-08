const express = require('express');
const router = express.Router();


//Controllers
const { api : ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`)

//AdminController
const AdminCourseController = require(`${ControllerApi}/v1/admin/CourseController`)

router.get('/' , HomeController.index);
router.get('/version' , HomeController.version);


const adminRouter = express.Router();
adminRouter.get('/course' , AdminCourseController.index.bind(AdminCourseController));
adminRouter.get('/course/:id' , AdminCourseController.single);
adminRouter.post('/course' , AdminCourseController.store);
adminRouter.put('/course/:id' , AdminCourseController.update);
adminRouter.delete('/course/:id' , AdminCourseController.destroy);
router.use('/admin' , adminRouter);

module.exports = router;
