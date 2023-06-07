import { prisma } from "../../server/db/client"


export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const posts = await prisma.post.findMany();
        res.json(posts);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
      break;

    case 'POST':
      try {
        const { title, content } = req.body;
        const post = await prisma.post.create({
          data: {
            title,
            content,
          },
        });
        res.status(201).json(post);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
