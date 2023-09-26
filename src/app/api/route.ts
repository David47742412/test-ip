import {NextRequest, NextResponse} from "next/server";

export function GET(req: NextRequest) {
    const ip = req.geo;
    return NextResponse.json({
        ip_address_headers: ip ?? "undefined"
    })
}
