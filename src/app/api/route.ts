import {NextResponse} from "next/server";
import {NextApiRequest} from "next";

export function GET(req: NextApiRequest) {
    const ip = req.headers['x-real-ip'] || req.socket.remoteAddress;
    return NextResponse.json({
        ip_address_headers: ip
    })
}
