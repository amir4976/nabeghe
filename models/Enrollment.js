import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: 'User', // Assuming you have a Course model
    required: true
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: 'Course', // Assuming you have a Course model
    required: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
    immutable: true
  }
});

// Export the model
export default mongoose.models.Enrollment || mongoose.model('Enrollment', enrollmentSchema);
