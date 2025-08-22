import { type NextRequest, NextResponse } from 'next/server';

import { env } from '@/env.mjs';

const graphqlURL: string = env.GRAPHQL_ENDPOINT;

export async function POST(request: NextRequest): Promise<NextResponse<unknown>> {
  try {
    const body = await request.text();
    const authorizationHeader = request.headers.get('authorization');
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(authorizationHeader ? { Authorization: authorizationHeader } : {}),
    };

    const response = await fetch(graphqlURL, {
      method: 'POST',
      headers,
      body,
    });

    const data = await response.text();

    return new NextResponse(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch {
    //TODO: Implement error logging e.g. Sentry
    return NextResponse.json({ errors: [{ message: 'Internal server error' }] }, { status: 500 });
  }
}

export async function OPTIONS(): Promise<NextResponse<unknown>> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
