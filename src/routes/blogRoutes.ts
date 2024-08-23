import { Router } from 'express';
import { authenticateJWT, authorizeAdmin } from '../middlewares/authMiddleware';
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';

const router = Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', authenticateJWT, authorizeAdmin, createBlog);
router.put('/:id', authenticateJWT, authorizeAdmin, updateBlog);
router.delete('/:id', authenticateJWT, authorizeAdmin, deleteBlog);

export default router;
