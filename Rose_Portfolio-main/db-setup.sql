-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  replied BOOLEAN DEFAULT FALSE
);

-- Create index on created_at for efficient sorting
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at);

-- Create index on read status for filtering
CREATE INDEX idx_contact_messages_read ON contact_messages(read);