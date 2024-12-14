import { NextResponse } from 'next/server';
import courseModel from '@/models/Courses';
import ConnectToDB from '@/utils/ConnectToDB';

export async function GET(req, { params }) {
    await ConnectToDB(); // Ensure the database connection is established

    const course = await courseModel.find({courseName:params.id}).populate('teacher'); // Use findById instead of findOne

    if (!course) {
        return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    return NextResponse.json({ course }, { status: 200 });
}

export function POST(req, { params }) {
    return NextResponse.json({ message: 'Not implemented yet' }, { status: 400 });
}

export function PUT(req, { params }) {
    return NextResponse.json({ message: 'Not implemented yet' }, { status: 400 });
}
