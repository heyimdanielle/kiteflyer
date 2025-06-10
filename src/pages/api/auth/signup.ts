import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

// Mock database for demonstration purposes
const users = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Check if user already exists
    const userExists = users.some((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database (mocked here)
    users.push({ email, password: hashedPassword });

    return res.status(201).json({ message: 'User created successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
