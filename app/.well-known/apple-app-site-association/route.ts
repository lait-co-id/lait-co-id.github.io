import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appIDs: ["4Z2SY3X2BW.com.lait.mobile"],
          paths: [
            "/home",
            "/events/*",
            "/runs/*",
            "/merchant/*",
            "/badge/*",
            "/routes/*",
            "/share/*",
            "/profile/*",
            "/payment/*",
            "/payment-failed*",
            "/events/payment-status*",
            "/events/payment-failed*",
            "/events/*/welcome-runner*"
          ]
        }
      ]
    }
  });
}
