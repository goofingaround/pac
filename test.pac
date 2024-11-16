function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.googleapis.cn")) {
        return "SOCKS5 127.0.0.1:10808"; // SOCKS5 proxy for Google APIs
    }
    if (shExpMatch(host, "cloudflare-dns.com") || 
        dnsDomainIs(host, "104.16.248.249") ||
        dnsDomainIs(host, "104.16.249.249") ||
        dnsDomainIs(host, "104.16.132.229") ||
        dnsDomainIs(host, "104.16.133.229") ||
        dnsDomainIs(host, "104.17.147.22") ||
        dnsDomainIs(host, "104.17.148.22") ||
        dnsDomainIs(host, "108.162.193.103") ||
        dnsDomainIs(host, "172.64.33.103") ||
        dnsDomainIs(host, "173.245.59.103") ||
        dnsDomainIs(host, "172.64.32.128") ||
        dnsDomainIs(host, "173.245.58.128") ||
        dnsDomainIs(host, "108.162.192.128")) {
        return "PROXY 127.0.0.1:10809"; // HTTP proxy for Cloudflare DNS
    }
    return "DIRECT"; // Direct connection for all other requests
}
