function FindProxyForURL(url, host) {
    var proxies = "HTTPS 212.102.53.198:443; HTTPS 77.72.5.113:989";
    
    // Define the domains or IP ranges you want to redirect through the proxy
    if (shExpMatch(host, "*.example.com") || shExpMatch(host, "*.anotherexample.com")) {
        return proxies;
    }
    
    // Default return when no match is found
    return "DIRECT";
}
