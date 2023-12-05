import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: { type: String, require: true },
  message: { type: String, require: true },
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  CreatedAt: {
    type: Date,
    default: new Date()
  },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;