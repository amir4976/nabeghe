import { NextResponse } from 'next/server'

export default function middleware(req, res) {
    return NextResponse.next()
}