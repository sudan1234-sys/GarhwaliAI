export interface Message {
  id: string;               // unique id
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;        // ISO string
}
