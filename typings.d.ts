export type ringtoneBody = {
  _id: string;
  ringID: string;
  uid: {_id: string; pfp: string; username: string;};
  title: string;
  thumbnail?: string;
  origin: string;
  createdAt: string;
  likes?: Array;
  downloads?: Array;
}
