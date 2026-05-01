// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
//   ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Store the message in the database
    const query = `
      INSERT INTO contact_messages (name, email, subject, message, created_at)
      VALUES ($1, $2, $3, $4, NOW())
    `;
    
    await pool.query(query, [
      name, 
      email, 
      subject || 'Contact Form Submission', // Default subject if not provided
      message
    ]);

    // Send success response
    return res.status(200).json({ message: 'Message stored successfully' });
  } catch (error) {
    console.error('Error storing contact message:', error);
    return res.status(500).json({ message: 'Failed to store message' });
  }
}