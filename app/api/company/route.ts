import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      throw new NextResponse('Unauthorized', { status: 401 })
    }

    const data = await request.json()

    const company = await db.company.create({
      data: {
        ...data,
        userId,
      },
    })

    return NextResponse.json(company)
  } catch (error) {
    console.log('[COMPANY][ERROR]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
