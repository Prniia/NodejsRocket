// const Controller = require("../../Controller");
//Model
// const Course = require(`${config.path.model}/Course`);
const Controller = require(`${config.path.controller}/Controller`);

class CourseController extends Controller {
    async index(req, res) {
        try {
            const courses = await this.model.Course.find({}).exec();
            res.json(courses);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async store(req, res){
    //Validation
            try{
            let newCourse = new Course({
                title : req.body.title,
                body : req.body.body,
                price : req.body.price,
                image : req.body.image
            })
           await newCourse.save();
                res.json({ message: 'Course created successfully', course: newCourse });
            }
            catch(err){
                res.status(500).json({ error: 'Error creating course', details: err.message });
            }
    }

    update(req, res){
        Course.findByIdAndUpdate(req.params.id , { title :'course three'}, (err , course) => {
        res.json('update success');
        })
    }

    destroy(req, res){
        try {
            const course = Course.findByIdAndDelete(req.params.id);
            if (!task) {
              return res.status(404).json({ error: 'Task not found' });
            }

            res.json({ message: 'Task deleted successfully' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        Course.findByIdAndDelete(req.params.id , (err , course) => {
            if(err) throw err;
            res.json('delete success')
        })
    }

    single(req, res){
        res.json('')
    }
}

module.export = new CourseController();
