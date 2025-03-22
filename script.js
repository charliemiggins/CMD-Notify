const notificationTypes = {
  info: 'ℹ️',
  error: '❌',
  success: '✅',
  warning: '⚠️'
};

// Default configuration values for the notification
const defaultConfig = {
  time: 5000,                // Display time in milliseconds
  type: 'success',           // Options: 'info', 'error', 'success', 'warning'
  position: 'top',           // Positions: 'top', 'top left', 'top right', 'middle', 'middle left', 'middle right', 'bottom', 'bottom left', 'bottom right'
  title: "This is a notification title!",
  description: "This is a notification description!"
};

function showNotification(config = {}) {
  const settings = { ...defaultConfig, ...config };
  const notif = document.getElementById('cmdNotification');
  const emojiEl = document.getElementById('cmdNotifyEmoji');
  const titleEl = document.getElementById('cmdNotifyTitle');
  const descEl = document.getElementById('cmdNotifyDescription');

  emojiEl.textContent = notificationTypes[settings.type] || '';
  titleEl.textContent = settings.title;
  descEl.textContent = settings.description;
  notif.style.top = '';
  notif.style.bottom = '';
  notif.style.left = '';
  notif.style.right = '';
  notif.style.transform = '';

  switch (settings.position.toLowerCase()) {
    case 'top':
      notif.style.top = '20px';
      notif.style.left = '50%';
      notif.style.transform = 'translateX(-50%)';
      break;
    case 'top left':
      notif.style.top = '20px';
      notif.style.left = '20px';
      break;
    case 'top right':
      notif.style.top = '20px';
      notif.style.right = '20px';
      break;
    case 'middle':
      notif.style.top = '50%';
      notif.style.left = '50%';
      notif.style.transform = 'translate(-50%, -50%)';
      break;
    case 'middle left':
      notif.style.top = '50%';
      notif.style.left = '20px';
      notif.style.transform = 'translateY(-50%)';
      break;
    case 'middle right':
      notif.style.top = '50%';
      notif.style.right = '20px';
      notif.style.transform = 'translateY(-50%)';
      break;
    case 'bottom':
      notif.style.bottom = '20px';
      notif.style.left = '50%';
      notif.style.transform = 'translateX(-50%)';
      break;
    case 'bottom left':
      notif.style.bottom = '20px';
      notif.style.left = '20px';
      break;
    case 'bottom right':
      notif.style.bottom = '20px';
      notif.style.right = '20px';
      break;
    default:
      notif.style.top = '20px';
      notif.style.left = '50%';
      notif.style.transform = 'translateX(-50%)';
  }

  notif.style.display = 'flex';
  void notif.offsetWidth;
  notif.style.opacity = '1';

  setTimeout(() => {
    notif.style.opacity = '0';
    setTimeout(() => {
      notif.style.display = 'none';
    }, 500);
  }, settings.time);
}

// Display notification on form submission (URL parameter check)
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "true") {
    showNotification();
  }
});

// Custom manual usage example
// showNotification({
//   type: 'error',
//   position: 'bottom right',
//   time: 7000,
//   title: 'Error Occurred',
//   description: 'Something went wrong.'
// });
