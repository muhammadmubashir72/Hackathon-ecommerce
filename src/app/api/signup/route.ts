import { NextResponse } from 'next/server';
import User from '../../models/User';  // Your User model
import connectDB from '@/app/lib/mongodb';

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Username, email, and password are required' },
        { status: 400 }
      );
    }

    await connectDB();

    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
