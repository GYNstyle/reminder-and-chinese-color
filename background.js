chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SET_REMINDER') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: '提醒',
            message: message.reminder
        });
    }
});
