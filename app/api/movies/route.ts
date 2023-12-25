import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/app/lib/prismadb';

export async function GET(req: NextRequest) {
  try {
    const movies = await prismadb.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 400 });
  }
}
