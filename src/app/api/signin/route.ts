import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../lib/mongodb';
import User from '@/app/models/User';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// Optionally, you can handle other methods like GET, PUT, DELETE, etc.
export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
// import { NextApiRequest, NextApiResponse } from 'next';
// import connectDB from '../../lib/mongodb';
// import User from '@/app/models/User';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       await connectDB();
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ error: 'Invalid email or password' });
//       }

//       const isMatch = await user.comparePassword(password);
//       if (!isMatch) {
//         return res.status(400).json({ error: 'Invalid email or password' });
//       }
//       res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//       console.error('Login Error:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// };

// export default handler;