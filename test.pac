function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*")) {
        return "PROXY 212.102.53.198:443; PROXY 77.72.5.113:989";
    }
    return "DIRECT";
}
