function FindProxyForURL(url, host) {
    var proxy1 = "HTTPS 212.102.53.198:443";
    var proxy2 = "HTTPS 77.72.5.113:989";
    var proxies = proxy1 + "; " + proxy2;

    if (shExpMatch(host, "*")) {
        return proxies;
    }
    return "DIRECT";
}
