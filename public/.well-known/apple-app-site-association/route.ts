import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "A6D021FC-0713-40A2-B1B1-ABC3EA476E3F.com.lait.mobile",
          paths: [
            "/events/*",
            "/runs/*",
            "/merchant/*",
            "/badge/*",
            "/routes/*"
          ]
        }
      ]
    }
  });
}
