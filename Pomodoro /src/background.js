


chrome.alarms.create({
    periodInMinutes: 1 / 60,
})


chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer"], (res) => {
        const time = res.timer ?? 0
        chrome.storage.local.set({
            timer: time + 720,
        })

            chrome.action.setBadgeText({
                text:`${Math.floor((time - ( Math.floor(time/ 3600) * 3600)) / 60)}:${time%60}`
            })


    })
})

