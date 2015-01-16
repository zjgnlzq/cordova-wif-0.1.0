var uiScanner = document.getElementsByClassName('ui-scanner')[0]
document.getElementById('btn').addEventListener('click', function () {

    function successCallback(aps) {
        var childNodes = uiScanner.childNodes
        for(var i= 0,len=childNodes.length; i<len; i++ ) {
            var element = childNodes[i]
            if(element && element.nodeType === 1) {
                element.remove()
            }
        }




        for(var i= 0,len=aps.length; i<len; i++) {
            var ap = aps[i]
            var liNode = document.createElement('li')
            liNode.setAttribute('class', 'ui-scanner-item')
            uiScanner.appendChild(liNode)

            var icon = document.createElement('i')
            icon.setAttribute('class', 'iconfont')
            icon.innerHTML = '&#xe600'
            liNode.appendChild(icon)

            var liRight = document.createElement('div')
            liRight.setAttribute('class', 'ui-scanner-item-right')
            liNode.appendChild(liRight)
            var ssidSpan = document.createElement('span')
            ssidSpan.textContent = ap.SSID
            liRight.appendChild(ssidSpan)
            var levelSpan = document.createElement('span')
            levelSpan.textContent = ap.level
            liRight.appendChild(levelSpan)
            var actionSpan = document.createElement('a')
            actionSpan.textContent = '连接'
            actionSpan.setAttribute('class', 'ui-scanner-item-right-action')
            liRight.appendChild(actionSpan)




        }
    }

    function errorCallback(err) {
        console.log(err)
    }

    navigator.wifi.watchAccessPoints(successCallback, errorCallback, {"frequency": 5000})

}, false)

