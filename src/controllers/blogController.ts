import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Blog } from '../models/Blog';
import { logger } from '../utils/logger';

const blogRepository = AppDataSource.getRepository(Blog);

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
    res.json(blogs);
  } catch (error) {
    logger.error(error.message, 'Error fetching blogs');
    res.status(400).json({ message: 'Error fetching blogs' });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const blog = await blogRepository.findOneBy({ id });
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    logger.error(error.message, 'Error fetching blog');
    res.status(400).json({ message: 'Error fetching blog' });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  try {
    const newBlog = blogRepository.create({ title, content, author });
    await blogRepository.save(newBlog);
    res.status(201).json(newBlog);
  } catch (error) {
    logger.error(error.message, 'Error creating blog');
    res.status(400).json({ message: 'Error creating blog' });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  try {
    const blog = await blogRepository.findOneBy({ id });
    if (blog) {
      blog.title = title;
      blog.content = content;
      blog.author = author;
      await blogRepository.save(blog);
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    logger.error(error.message, 'Error updating blog');
    res.status(400).json({ message: 'Error updating blog' });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await blogRepository.delete(id);
    res.json({ message: 'Blog deleted' });
  } catch (error) {
    logger.error(error.message, 'Error deleting blog');
    res.status(400).json({ message: 'Error deleting blog' });
  }
};
