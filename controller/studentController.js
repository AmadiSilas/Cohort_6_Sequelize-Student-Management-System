const student = require("../models/students");
const Student = require("../models/students")

exports.createStudent = async (req,res) => {
    try {
        const {fullName,stack,gender,centre,email}= req.body;
         const student = await Student.create({fullName,stack,gender,centre,email});
         res.status(201).json({message:`Student created successfully`, data:student})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getAStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.findByPk(id)
        res.status(200).json({
            message: "Student below",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.getAllStudent = async(req,res)=>{
    try {
        // const {fullName, email, stack, gender, centre} = req.body
        const student = await Student.findAll()
        res.status(200).json({
            message: "All students found",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
// PUT/PATCH: update student
exports.updateAllstudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await studentModel.findByPk(id);
    if (!student) {
      return res.status(404).json({
        message: `student with ID: ${id} not found`,
      });
    }

    await student.update(req.body);

    res.status(200).json({
      message: "student updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE: remove a student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await studentModel.findByPk(id);
    if (!student) {
      return res.status(404).json({
        message: `student with ID: ${id} not found`,
      });
    }

    await student.destroy();

    res.status(200).json({
      message: "student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.postAllgradeByStudent = async(req, res) => {
    try {
        const studentid = req.params.id;
        const Student = await student.findByPk(studentId);

        if(!student) {
            return res.status(404).json({
                message: 'student grade not found'
            })
        }
        const student = await student.findAll({ where : {studentId: studentId}, attributes: ['studenttName', 'punctucilty', 'classwort','assignment','personal_defence', 'attendence'], include: [{Model: student, 
            as : 'student'
        }]})
        res.status(202).json({
            message: `All grade by student: ${student.
                fullName} available and the total is: $ {student.length}`,
                data : students
            
        })
    } catch (error) {
        res.status(505).json({
            message: error.message
        })
    }
}