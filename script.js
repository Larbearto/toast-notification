const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = ['New Message', 'New Email', 'Error', 'Incoming Call']
const types = ['info', 'success', 'error']
button.addEventListener('click', () => createNotification())

function createNotification(messages = null, type = null) {
  const notification = document.createElement('div')
  notification.classList.add('toast')
  notification.classList.add(type ? type : getRandomType())

  notification.innerText = getRandomMessage()

  toasts.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
