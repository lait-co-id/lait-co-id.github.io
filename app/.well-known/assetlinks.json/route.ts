import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.lait.mobile",
        sha256_cert_fingerprints: [
          "B5:CD:A7:28:90:3F:8E:DB:B1:C1:A4:4E:91:21:1A:38:64:3F:8A:F4:79:B8:C7:E9:9B:4C:94:4L" // Placeholder or leave as is if they inject it
        ]
      }
    }
  ]);
}
