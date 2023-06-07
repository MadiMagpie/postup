import { prisma } from "../../../server/db/client"

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'DELETE':
      try {
        const post = await prisma.post.delete({
          where: {
            id: Number(id),
          },
        });
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Error deleting the post' });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}