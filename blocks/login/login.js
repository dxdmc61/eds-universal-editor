export default function decorate(block) {
  if (!window.location.href.includes('author-')) {
  // Read config from block (labels etc.)
    const usernameLabel = 'Username';
    const passwordLabel = 'Password';
    const buttonLabel = 'Login';

    // Clear existing content
    block.innerHTML = '';
    // Create form
    const form = document.createElement('form');
    form.classList.add('login-form');
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = usernameLabel;
    usernameInput.required = true;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = passwordLabel;
    passwordInput.required = true;

    const loginBtn = document.createElement('button');
    loginBtn.type = 'submit';
    loginBtn.textContent = buttonLabel;

    const msgDiv = document.createElement('div');
    msgDiv.classList.add('login-message');

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(loginBtn);
    block.appendChild(form);
    block.appendChild(msgDiv);

    // IMS OAuth2 settings
    const clientId = 'c7255c321071463f8a963cd8cb6e1081';
    const redirectUri = `${window.location.origin}/auth/callback`;
    const imsAuthUrl = `https://ims-na1.adobelogin.com/ims/authorize?client_id=${clientId}&scope=openid,AdobeID,user_management_sdk&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}`;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Redirect to IMS for authentication
      window.location.href = imsAuthUrl;
    });
  }
}
