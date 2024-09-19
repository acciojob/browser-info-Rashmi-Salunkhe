//your JS code here. If required.
// Function to detect browser name and version
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName = navigator.appName;
    let version = navigator.appVersion;

    // Detecting browser name and version based on the userAgent string
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        version = userAgent.match(/Chrome\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        version = userAgent.match(/Firefox\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Safari";
        version = userAgent.match(/Version\/([\d.]+)/)[1];
    } else if (userAgent.indexOf("MSIE") > -1 || !!document.documentMode) {
        browserName = "Internet Explorer";
        version = userAgent.match(/MSIE ([\d.]+)/)[1];
    } else if (!!window.StyleMedia) {
        browserName = "Edge";
        version = userAgent.match(/Edg\/([\d.]+)/)[1];
    }

    return { browserName, version };
}

// Function to display the browser information
function displayBrowserInfo() {
    const browserInfo = getBrowserInfo();
    const message = `You are using ${browserInfo.browserName} version ${browserInfo.version}`;

    // Display the message in the div with id "browser-info"
    document.getElementById('browser-info').textContent = message;
}

// Call the function to display the browser info on page load
displayBrowserInfo();
