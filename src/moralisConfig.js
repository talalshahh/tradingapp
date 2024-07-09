import Moralis from "moralis";

export const initializeMoralis = async () => {
  try {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE4MGEwZmJhLThkZmMtNDQxOS1iNDBmLTgyYTZiOTIyNDc0YyIsIm9yZ0lkIjoiMzk5Mzg1IiwidXNlcklkIjoiNDEwMzgzIiwidHlwZUlkIjoiMDE1MzVjZmMtMjdiOC00ZmZmLTlhNmUtMzY1MWVhZjBjZjMwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjA0NTcyNDgsImV4cCI6NDg3NjIxNzI0OH0.SoFusa2YpCYQG89oN01c3mobhfjROp5zRs9wyKK6YHk",
    });
  } catch (e) {
    console.error(e);
  }
};
