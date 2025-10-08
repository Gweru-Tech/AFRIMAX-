// Additional security measures
(function() {
    'use strict';
    
    // Rate limiting for requests
    let requestCount = 0;
    const maxRequests = 10;
    const timeWindow = 60000; // 1 minute
    
    function checkRateLimit() {
        requestCount++;
        if (requestCount > maxRequests) {
            console.warn('Rate limit exceeded');
            return false;
        }
        
        setTimeout(() => {
            requestCount = Math.max(0, requestCount - 1);
        }, timeWindow);
        
        return true;
    }
    
    // Monitor for suspicious activity
    let suspiciousActivity = 0;
    
    function logSuspiciousActivity(type) {
        suspiciousActivity++;
        console.warn(`Suspicious activity detected: ${type}`);
        
        if (suspiciousActivity > 5) {
            // Redirect to safe page
            window.location.href = 'https://google.com';
        }
    }
    
    // Export for use in other scripts
    window.AfrimaxSecurity = {
        checkRateLimit,
        logSuspiciousActivity
    };
})();
