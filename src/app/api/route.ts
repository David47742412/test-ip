import {NextRequest, NextResponse} from "next/server";

export function GET(req: NextRequest) {
    return NextResponse.json({
        ip_address_headers: req.headers.get("cf-connecting-ip"),
        ip_address: req.ip,
        ip_address_headers2: req.headers.get("cf-connecting-ip"),
        user_agent: req.headers.get("user-agent"),
    })
}
