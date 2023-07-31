// Simulate a slow network speed (e.g., 1 Mbps) using Chrome DevTools.
// Open DevTools in the browser (F12 or Ctrl + Shift + I), go to the "Network" tab,
// and paste this code in the Console.

const downloadSpeed = 1000; // Speed in kilobits per second (e.g., 1000 Kbps = 1 Mbps)

// Override native Network Throttling
if (window.chrome && window.chrome.csi && window.chrome.csi().onStart) {
  console.log(`Setting download speed to ${downloadSpeed} Kbps.`);
  window.chrome.csi().onStart.call(null, { transferSize: downloadSpeed * 125 }); // 8 bits = 1 byte
} else {
  console.error('Unable to simulate slow network speed. Ensure you are using Chrome browser.');
}