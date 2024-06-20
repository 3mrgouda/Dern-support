import Article from "../models/Article.js";

// Create a new article
export const createArticle = async (req, res) => {
  try {
    const { title, img, content } = req.body;

    if (!title || !img || !content) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newArticle = new Article({
      title,
      img,
      content,
    });

    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

// Get all articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

// Get a single article by ID
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

// Update an article by ID
export const updateArticle = async (req, res) => {
  try {
    const { title, img, content } = req.body;
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { title, img, content },
      { new: true, runValidators: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

// Delete an article by ID
export const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);

    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.status(200).json({ message: "Article deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};
