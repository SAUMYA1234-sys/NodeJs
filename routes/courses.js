const express =  require('express');
const router = express.Router();

const courses = [
    {id:2,name:"course1"}, 
    {id:4,name:"course2"},
    {id:6,name:"course3"}];


router.get('/array',(req,res)=>{
res.send([1,2,3,4]);
});

router.get('/posts/:year/:month',(req,res)=>{
res.send(req.query);
})
router.get('/courses',(req,res)=>{
res.send(courses)
})
router.get('/courses/:id',(req,res)=>{
const course = courses.find(c=>c.id === parseInt(req.params.id));
if(!course)res.send("Course not found!");
  
res.send(course);
})

router.post('/addCourses',(req,res)=>{

const result = validateCourse(req.body);
const {error} = validateCourse(req.body);
if(error){
    res.send(result.error.details[0].message);
    return;
}

if(!req.body.name || req.body.name.length<3){
    res.status(400).send('Name is required');
    return;
}
const course = {
    id:courses.length+1,
    name:req.body.name
};
courses.push(course);

res.send(courses);
});

router.put('/updateCourse/:id',(req,res)=>{
const course = courses.find(c=>c.id === parseInt(req.params.id));
if(!course) res.send("The course with given id not found.");
const result = validateCourse(req.body);
const {error} = validateCourse(req.body);
if(error){
    res.send(result.error.details[0].message);
    return;
}

 course.name = req.body.name;
 res.send(course);
});

router.delete('/deleteCourse/:id',(req,res)=>{
const result = courses.find(c=>c.id === parseInt(req.params.id));
if(!result) res.send('Course with given id not found');


courses.splice(courses.indexOf(result),1);
res.send(courses);


});



function validateCourse(course){
const schema = {
    name : Joi.string().min(3).required()
} ;

return Joi.validate(course,schema);
}


module.exports = router;